export function initContactForm() {
  const form = document.querySelector('#contact-form');
  const statusElement = document.querySelector('#form-status');
  if (!form || !statusElement) {
    return;
  }

  const submitButton = form.querySelector('button[type="submit"]');
  const contactApiUrl = '/api/contact';

  const messages = {
    pt: {
      sending: 'Enviando mensagem...',
      success: 'Mensagem enviada com sucesso. Obrigado pelo contato.',
      error: 'Não foi possível enviar sua mensagem agora. Tente novamente.'
    },
    en: {
      sending: 'Sending message...',
      success: 'Message sent successfully. Thanks for reaching out.',
      error: 'Could not send your message right now. Please try again.',
      network: 'Cannot reach API. Start the server with npm run dev.'
    }
  };

  const getLocale = () => (document.documentElement.lang || '').startsWith('en') ? 'en' : 'pt';

  const setStatus = (type, text) => {
    statusElement.classList.remove('is-success', 'is-error', 'is-sending');
    statusElement.classList.add(`is-${type}`);
    statusElement.textContent = text;
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const locale = getLocale();
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus('sending', messages[locale].sending);
    if (submitButton) {
      submitButton.disabled = true;
    }

    try {
      const response = await fetch(contactApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const apiError = await response.json().catch(() => null);
        if (apiError?.error) {
          throw new Error(apiError.error);
        }
        throw new Error('request_failed');
      }

      form.reset();
      setStatus('success', messages[locale].success);
    } catch (error) {
      if (error instanceof TypeError) {
        const networkMessage = locale === 'en'
          ? messages.en.network
          : 'Nao foi possivel conectar com a API. Execute npm run dev.';
        setStatus('error', networkMessage);
      } else {
        setStatus('error', error.message && error.message !== 'request_failed' ? error.message : messages[locale].error);
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
      }
    }
  });
}
