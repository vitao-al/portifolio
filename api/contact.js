const { Resend } = require('resend');

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function buildContactEmailTemplate({ fullName, email, phone, message }) {
  const submittedAt = new Date().toLocaleString('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'medium'
  });

  const safeName    = escapeHtml(fullName);
  const safeEmail   = escapeHtml(email);
  const safePhone   = escapeHtml(phone || 'Não informado');
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br>');

  return `
    <div style="background:#0b0d12;padding:28px 16px;font-family:Arial,Helvetica,sans-serif;color:#f4f6fa;">
      <div style="max-width:640px;margin:0 auto;background:#131722;border:1px solid #2a3140;border-radius:14px;overflow:hidden;">
        <div style="padding:18px 22px;background:linear-gradient(120deg,#1d2433,#131722);border-bottom:1px solid #2a3140;">
          <h1 style="margin:0;font-size:20px;line-height:1.2;color:#ffffff;">Novo contato do formulário</h1>
          <p style="margin:8px 0 0;font-size:13px;color:#b9c3d7;">Portfólio Victor Manuel</p>
        </div>

        <div style="padding:22px;">
          <p style="margin:0 0 16px;font-size:13px;color:#a8b2c7;">Recebido em ${submittedAt}</p>

          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #232b3b;font-size:13px;color:#93a2bf;width:140px;">Nome</td>
              <td style="padding:10px 0;border-bottom:1px solid #232b3b;font-size:14px;color:#f2f5fb;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #232b3b;font-size:13px;color:#93a2bf;">E-mail</td>
              <td style="padding:10px 0;border-bottom:1px solid #232b3b;font-size:14px;color:#f2f5fb;">${safeEmail}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #232b3b;font-size:13px;color:#93a2bf;">Telefone</td>
              <td style="padding:10px 0;border-bottom:1px solid #232b3b;font-size:14px;color:#f2f5fb;">${safePhone}</td>
            </tr>
          </table>

          <div style="margin-top:18px;padding:14px;border:1px solid #2a3140;border-radius:10px;background:#0e131d;">
            <p style="margin:0 0 10px;font-size:13px;color:#93a2bf;">Mensagem</p>
            <p style="margin:0;font-size:14px;line-height:1.6;color:#f2f5fb;">${safeMessage}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  const { fullName, email, phone, message } = req.body || {};

  if (!fullName || !email || !message) {
    return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
  }

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL || !process.env.RESEND_TO_EMAIL) {
    return res.status(500).json({ error: 'Configuração de e-mail ausente no ambiente.' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const htmlTemplate = buildContactEmailTemplate({ fullName, email, phone, message });

    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.RESEND_TO_EMAIL],
      replyTo: email,
      subject: `Novo contato do portfólio: ${fullName}`,
      html: htmlTemplate
    });

    if (result?.error) {
      console.error('Erro retornado pela API do Resend:', result.error);
      return res.status(502).json({ error: 'Resend rejeitou o envio.' });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Erro ao enviar e-mail com Resend:', error);
    return res.status(502).json({ error: 'Falha ao enviar e-mail.' });
  }
};
