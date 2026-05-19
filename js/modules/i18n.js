import { startHeroTyping } from './heroTyping.js';

const translations = {
  pt: {
    'nav.skills': 'Habilidades',
    'nav.works': 'Projetos',
    'nav.contact': 'Contato',
    'hero.status': 'Disponível para trabalho',
    'hero.text': 'Desenvolvedor Full Stack focado em criar soluções web com JavaScript, TypeScript, React, Next.js e APIs REST para resolver desafios reais de negócio.',
    'hero.ctaProjects': 'Ver projetos',
    'hero.ctaProfile': 'Meu perfil',
    'skills.heading': 'Minhas Habilidades',
    'skills.toolsTitle': 'Ferramentas e plataformas',
    'skills.toolsText': 'Git, GitHub, Figma, Docker, Vercel, Resend, Render API',
    'skills.softTitle': 'Soft Skills',
    'skills.softText': 'Trabalho em equipe, comunicação assertiva e proatividade',
    'tech.label': 'Tecnologias que utilizo',
    'works.heading': 'Projetos',
    'works.text': 'Projetos reais com foco em full stack, desempenho e experiência do usuário.',
    'project.sistema.desc': 'Plataforma full stack para gestão eleitoral e CRM com autenticação JWT em cookie HttpOnly, controle de acesso por perfil (RBAC), painel com métricas em tempo real e arquitetura orientada à segurança e conformidade LGPD.',
    'project.genesis.desc': 'Projeto interdisciplinar para análise de habitabilidade exoplanetária, com interface desenhada no Figma, experiência visual orientada por dados, integração entre frontend e backend Python e chat com IA para apoio analítico.',
    'project.thiago.desc': 'Landing page profissional com estrutura orientada à conversão, práticas de SEO técnico, geolocalização para facilitar contato local, componentes dinâmicos e alternância de tema para melhorar usabilidade em diferentes contextos.',
    'project.viewSite': 'Ver site',
    'project.repo': 'Repositório GitHub',
    'process.heading': 'Processos de criação de um software',
    'process.plan.title': 'Planejamento',
    'process.plan.text': 'Toda grande solução começa com uma ideia. Aqui transformamos problemas reais em requisitos claros, definindo o que será construído, para quem e por quê.',
    'process.design.title': 'Design',
    'process.design.text': 'É o momento de desenhar antes de construir. Estruturamos o sistema, modelamos o banco de dados e projetamos as interfaces; as decisões tomadas aqui sustentam tudo que vem depois.',
    'process.build.title': 'Construção',
    'process.build.text': 'O código ganha vida. Cada linha escrita transforma a visão em realidade, unindo lógica, criatividade e técnica.',
    'process.launch.title': 'Entrega',
    'process.launch.text': 'Nenhum software está pronto até ser testado. Refinamos, corrigimos e entregamos não apenas um produto, mas uma experiência funcional nas mãos de quem vai usá-la.',
    'contact.heading': 'Vamos nos conectar.',
    'contact.text': 'Não há super poder maior do que a união.',
    'form.fullName': 'NOME COMPLETO',
    'form.fullNamePlaceholder': 'Digite seu nome completo',
    'form.email': 'ENDEREÇO DE E-MAIL',
    'form.emailPlaceholder': 'Digite seu endereço de e-mail',
    'form.phone': 'NÚMERO DE TELEFONE',
    'form.optional': '(opcional)',
    'form.phonePlaceholder': 'Digite seu número de telefone (opcional)',
    'form.help': 'COMO POSSO AJUDAR?',
    'form.helpPlaceholder': 'Escreva sua mensagem aqui...',
    'form.send': 'Enviar mensagem',
    'footer.text': 'Criando soluções digitais com foco em performance, organização e resultado.',
    'footer.copy': '© 2026 Victor Manuel. Todos os direitos reservados.',
    'profile.back': 'Voltar para a home',
    'profile.eyebrow': 'Sobre / Perfil',
    'profile.heading': 'Sobre mim',
    'profile.text': 'Olá! Sou Victor Manuel, sou Engenheiro de Software e estudante de Ciência da Computação. Tenho o sonho de fazer com que o Brasil seja referência em tecnologia e deixe de ser posto como um país atrasado, por isso sempre que eu tiver a oportunidade de ajudar pessoas a resolver seus problemas com tecnologia eu não exitarei.',
    'profile.beyondLabel': 'Além da programação',
    'profile.beyondText': 'Um pouco da minha rotina fora do código: criatividade, disciplina e energia para construir com constância.',
    'profile.hobby.swimming': 'Natação',
    'profile.hobby.football': 'Futebol',
    'profile.hobby.music': 'Música',
    'profile.hobby.gym': 'Academia',
    'profile.expLabel': 'Experiência profissional',
    'profile.exp1.title': 'SEMGE — Estagiário de TI',
    'profile.exp1.text': 'Atuação no setor de TI da Junta Médica Oficial de Maceió com suporte técnico, manutenção de rede e automação de protocolos.',
    'profile.exp2.title': 'CTI (IFAL) — Estagiário de Redes e Suporte',
    'profile.exp2.text': 'Configuração de roteadores/switches, manutenção de hardware e redes, suporte ao usuário e infraestrutura de câmeras.',
    'profile.eduLabel': 'Educação',
    'profile.edu1.title': 'Bacharelado em Ciência da Computação',
    'profile.edu2.title': 'Técnico em Desenvolvimento de Sistemas'
  },
  en: {
    'nav.skills': 'Skills',
    'nav.works': 'Works',
    'nav.contact': 'Contact',
    'hero.status': 'Available for work',
    'hero.text': 'Full Stack Developer focused on building web solutions with JavaScript, TypeScript, React, Next.js, and REST APIs to solve real business challenges.',
    'hero.ctaProjects': 'View projects',
    'hero.ctaProfile': 'My profile',
    'skills.heading': 'My Skills',
    'skills.toolsTitle': 'Tools and platforms',
    'skills.toolsText': 'Git, GitHub, Figma, Docker, Vercel, Resend, Render API',
    'skills.softTitle': 'Soft Skills',
    'skills.softText': 'Teamwork, assertive communication, and proactivity',
    'tech.label': 'Technologies I use',
    'works.heading': 'Projects',
    'works.text': 'Real projects focused on full stack development, performance, and user experience.',
    'project.sistema.desc': 'Full stack platform for election management and CRM, featuring JWT authentication with HttpOnly cookies, role-based access control (RBAC), a real-time metrics dashboard, and an architecture focused on security and LGPD compliance.',
    'project.genesis.desc': 'Interdisciplinary project for exoplanet habitability analysis, with a Figma-designed interface, data-driven visual experience, Python backend integration, and an AI chat assistant for analytical support.',
    'project.thiago.desc': 'Professional landing page built for conversion, with technical SEO practices, geolocation for local contact, dynamic components, and theme switching to improve usability in different contexts.',
    'project.viewSite': 'View site',
    'project.repo': 'GitHub repository',
    'process.heading': 'Software creation process',
    'process.plan.title': 'Planning',
    'process.plan.text': 'Every strong solution starts with an idea. Here, real problems become clear requirements that define what will be built, for whom, and why.',
    'process.design.title': 'Design',
    'process.design.text': 'This is the stage where we design before building. We structure the system, model the database, and shape the interfaces; the decisions made here support everything that comes next.',
    'process.build.title': 'Build',
    'process.build.text': 'Code comes to life. Each line turns vision into reality by combining logic, creativity, and technique.',
    'process.launch.title': 'Launch',
    'process.launch.text': 'No software is ready until it has been tested. We refine, fix, and deliver not just a product, but a functional experience in the hands of real users.',
    'contact.heading': "Let's connect.",
    'contact.text': 'There is no greater superpower than unity.',
    'form.fullName': 'FULL NAME',
    'form.fullNamePlaceholder': 'Enter your full name',
    'form.email': 'EMAIL ADDRESS',
    'form.emailPlaceholder': 'Enter your email address',
    'form.phone': 'PHONE NUMBER',
    'form.optional': '(optional)',
    'form.phonePlaceholder': 'Enter your phone number (optional)',
    'form.help': 'HOW CAN I HELP YOU?',
    'form.helpPlaceholder': 'Write your message here...',
    'form.send': 'Send message',
    'footer.text': 'Building digital solutions focused on performance, organization, and results.',
    'footer.copy': '© 2026 Victor Manuel. All rights reserved.',
    'profile.back': 'Back to home',
    'profile.eyebrow': 'About / Profile',
    'profile.heading': 'About me',
    'profile.text': 'I am a full stack developer with experience in modern web technologies. I work with a strong focus on building scalable, well-architected applications. My path combines technical education, hands-on project experience, and problem solving in real production systems.',
    'profile.beyondLabel': 'Beyond programming',
    'profile.beyondText': 'A bit of my routine beyond code: creativity, discipline, and energy to build with consistency.',
    'profile.hobby.swimming': 'Swimming',
    'profile.hobby.football': 'Football',
    'profile.hobby.music': 'Music',
    'profile.hobby.gym': 'Gym',
    'profile.expLabel': 'Professional experience',
    'profile.exp1.title': 'SEMGE — IT Intern',
    'profile.exp1.text': 'Working in the IT department of the Official Medical Board of Maceio with technical support, network maintenance, and protocol automation.',
    'profile.exp2.title': 'CTI (IFAL) — Networks and Support Intern',
    'profile.exp2.text': 'Router and switch configuration, hardware and network maintenance, user support, and camera infrastructure.',
    'profile.eduLabel': 'Education',
    'profile.edu1.title': 'B.Sc. in Computer Science',
    'profile.edu2.title': 'Systems Development Technician'
  }
};

function getPreferredLanguage() {
  const storedLanguage = window.localStorage.getItem('site-language');
  return storedLanguage === 'en' ? 'en' : 'pt';
}

function updateLanguageButtons(language) {
  document.querySelectorAll('.lang-toggle').forEach((button) => {
    const nextLanguage = language === 'pt' ? 'en' : 'pt';
    const label = nextLanguage === 'en'
      ? 'Translate site to English'
      : 'Traduzir site para português';

    button.textContent = nextLanguage.toUpperCase();
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  });
}

function applyTranslations(language) {
  const dictionary = translations[language] || translations.pt;

  document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR';

  if (document.body.dataset.pageTitlePt && document.body.dataset.pageTitleEn) {
    document.title = language === 'en'
      ? document.body.dataset.pageTitleEn
      : document.body.dataset.pageTitlePt;
  }

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      element.setAttribute('placeholder', dictionary[key]);
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (dictionary[key]) {
      element.setAttribute('aria-label', dictionary[key]);
    }
  });

  const heroTitle = document.querySelector('#hero-title');
  if (heroTitle) {
    const titleLines = heroTitle.getAttribute(`data-title-lines-${language}`);
    const titleAria = heroTitle.getAttribute(`data-title-aria-${language}`);

    if (titleLines) {
      heroTitle.setAttribute('data-title-lines', titleLines);
    }

    if (titleAria) {
      heroTitle.setAttribute('aria-label', titleAria);
    }
  }

  window.localStorage.setItem('site-language', language);
  updateLanguageButtons(language);
  startHeroTyping();
}

export function initLanguageToggle() {
  document.querySelectorAll('.lang-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const currentLanguage = getPreferredLanguage();
      applyTranslations(currentLanguage === 'pt' ? 'en' : 'pt');
    });
  });

  applyTranslations(getPreferredLanguage());
}
