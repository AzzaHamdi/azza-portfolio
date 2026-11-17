/* ============================================================================
   AZZA PORTFOLIO — Creative, pastel, interactive portfolio
   1. Add or replace media files in assets/images.
   2. Update the MEDIA map below with your filenames.
   3. Keep the project and event copy aligned with your real experiences.
   ============================================================================ */

const MEDIA = {
  music: { src: 'assets/images/music.jpg', expectedSrc: 'assets/images/music.jpg', alt: 'Azza performing on violin' },
  crochet: { src: 'assets/images/crochet.png', expectedSrc: 'assets/images/crochet.png', alt: 'Twins Crochet handmade brand' },
  tuner: { src: 'assets/images/tuner.jpg', expectedSrc: 'assets/images/tuner.jpg', alt: 'RTOS Instrument Tuner' },
  fieldsense: { src: 'assets/images/fieldsense.jpg', expectedSrc: 'assets/images/fieldsense.jpg', alt: 'FieldSense IoT project' },
  circuitmind: { src: 'assets/images/circuitmind.png', expectedSrc: 'assets/images/circuitmind.png', alt: 'CircuitMind AI electronics assistant' },
  surveillance: { src: 'assets/images/surveillance.jpg', expectedSrc: 'assets/images/surveillance.jpg', alt: 'Smart surveillance project' },
  wdm: { src: 'assets/images/wdm.jpg', expectedSrc: 'assets/images/wdm.jpg', alt: 'WDM optical link simulation' },
  drone: { src: 'assets/images/drone.jpg', expectedSrc: 'assets/images/drone.jpg', alt: 'Drone optical communication system' },
};

const projects = [
  { title: 'FieldSense', number: '01', kind: 'IoT / EDGE AI', subtitle: 'Intelligence in every field.', description: 'Precision agriculture system connecting an ESP32 Heltec node to a Raspberry Pi gateway via LoRa, with Edge AI decisions, a REST API, a monitoring dashboard and LoRa PCB design.', tags: ['ESP32', 'LoRa', 'Raspberry Pi', 'Python'], images: [{ src: MEDIA.fieldsense.src, alt: MEDIA.fieldsense.alt }], tone: 'sage', reportUrl: 'assets/reports/fieldsense.pdf' },
  { title: 'CircuitMind AI', number: '02', kind: 'GENAI / ELECTRONICS', subtitle: 'An intelligent electronics companion.', description: 'Multimodal assistant that recognizes electronic components with CLIP, answers datasheet questions through hybrid RAG and guides diagnosis with LangGraph and MCP tools.', tags: ['CLIP', 'RAG', 'LangGraph', 'Gradio'], images: [{ src: MEDIA.circuitmind.src, alt: MEDIA.circuitmind.alt }], tone: 'lavender', reportUrl: null },
  { title: 'RTOS Instrument Tuner', number: '03', kind: 'EMBEDDED / AUDIO', subtitle: 'Where engineering meets music.', description: 'Real-time instrument tuner using ESP32, audio input via MAX4466, note recognition and OLED visualization, with multitasking managed using FreeRTOS.', tags: ['ESP32', 'FreeRTOS', 'C/C++', 'DSP'], images: [{ src: MEDIA.tuner.src, alt: MEDIA.tuner.alt }], tone: 'peach', reportUrl: null },
  { title: 'Smart Surveillance', number: '04', kind: 'COMPUTER VISION', subtitle: 'Vision with a purpose.', description: 'Team-built real-time facial recognition system for intruder detection and attendance monitoring, with PDF reports and email notifications.', tags: ['Python', 'OpenCV', 'Arduino'], images: [{ src: MEDIA.surveillance.src, alt: MEDIA.surveillance.alt }], tone: 'rose', reportUrl: 'assets/reports/smart-surveillance.pdf' },
  { title: 'WDM Optical Link', number: '05', kind: 'OPTICAL COMMUNICATIONS', subtitle: 'Exploring speed through light.', description: 'Modeled and simulated a high-speed WDM optical link in OptiSystem, evaluating its performance and transmission behavior.', tags: ['OptiSystem', 'WDM', 'Fiber Optics'], images: [{ src: MEDIA.wdm.src, alt: MEDIA.wdm.alt }], tone: 'sky', reportUrl: 'assets/reports/wdm-optical-link.pdf' },
  { title: 'Drone Optical Transmission', number: '06', kind: 'ENGINEERING INTERNSHIP', subtitle: 'High-speed communication in flight.', description: 'Designed a fiber-optic transmission chain for a drone’s embedded communications, supporting low-latency high-resolution audio/video and control streams at Avempace Technologies.', tags: ['Fiber Optics', 'Embedded Systems', 'AV'], images: [{ src: MEDIA.drone.src, alt: MEDIA.drone.alt }], tone: 'plum', reportUrl: 'assets/reports/drone-optical-transmission.pdf' }
];

const currentLeadership = [
  {
    name: 'IEEE ENIT Student Branch',
    role: 'Media Manager',
    description: 'IEEE student association · Leading a team of five media managers.'
  },
  {
    name: 'SDC 5.0 (SIGHT Day Congress)',
    role: 'Media Team Lead',
    description: 'Current congress role.'
  }
];

const previousIEEEExperiences = [
  {
    name: 'IEEE WIE ENIT Student Branch Affinity Group',
    role: 'Media Manager',
    description: 'Served as Media Manager during the 2025 mandate.'
  },
  {
    name: 'WIE ACT 4.0',
    role: 'Media Manager',
    description: 'Media and storytelling for Tunisia’s annual Women in Engineering congress.'
  },
  {
    name: 'PES TGM 6.0',
    role: 'Branding Co-Team Lead',
    description: 'Co-led branding and visual identity for the Power & Energy Society Tunisia General Meeting.'
  },
  {
    name: 'Tunisian Engineering Day 8.0 (TunED)',
    role: 'Media Co-Team Lead',
    description: 'Co-led media efforts for the eighth Tunisian Engineering Day.'
  }
];

const techStack = [
  {
    title: 'Embedded Systems & IoT',
    key: 'embedded',
    featured: true,
    tools: [
      { name: 'Raspberry Pi', icon: 'RPi', logo: 'assets/logos/raspberrypi.svg', summary: 'Gateway, automation, and edge processing for connected systems.' },
      { name: 'Embedded Linux', icon: '🐧', logo: 'assets/logos/linux.svg', logoAlt: 'Linux Tux penguin logo', summary: 'Linux-based operating systems and software for embedded devices.' },
      { name: 'ESP32', icon: 'ESP', logo: 'assets/logos/espressif.svg', logoAlt: 'Espressif logo for ESP32', summary: 'Low-power embedded design for connected devices and sensor systems.' },
      { name: 'Heltec', icon: '⌁', logo: 'assets/logos/heltec-board.svg', logoAlt: 'Heltec LoRa development board symbol', summary: 'ESP32-based hardware for connected LoRa prototypes.' },
      { name: 'Arduino', icon: 'ARD', logo: 'assets/logos/arduino.svg', summary: 'Rapid prototyping for hardware experiments and interactive builds.' },
      { name: 'STM32', icon: 'STM', logo: 'assets/logos/stmicroelectronics.svg', summary: 'Real-time embedded applications and signal generation workflows.' },
      { name: 'MicroPython', icon: 'µPy', logo: 'assets/logos/micropython.svg', summary: 'Python-based development for supported microcontrollers.' },
      { name: 'FreeRTOS', icon: '◷', logo: 'assets/logos/freertos.svg', logoAlt: 'Embedded task scheduler and clock symbol', summary: 'Multitasking and reliable scheduling in embedded products.' },
      { name: 'MQTT', icon: 'MQTT', logo: 'assets/logos/mqtt.svg', summary: 'Lightweight publish-subscribe messaging for IoT systems.' },
      { name: 'REST API', icon: '⇄', logo: 'assets/logos/rest-api.svg', logoAlt: 'API endpoints and request flow symbol', summary: 'Service interfaces for connected devices and dashboards.' },
      { name: 'LoRa', icon: '⌁', logo: 'assets/logos/lora-radio.svg', logoAlt: 'Long-range radio transmission symbol', summary: 'Long-range wireless communication for remote monitoring.' },
      { name: 'RFID', icon: '▤', logo: 'assets/logos/rfid.svg', logoAlt: 'RFID tag and radio waves symbol', summary: 'Radio-frequency identification for connected applications.' }
    ]
  },
  {
    title: 'Telecommunications & Networking',
    key: 'telecom',
    tools: [
      { name: 'Optical Fiber', icon: '↠', logo: 'assets/logos/optical-fiber.svg', logoAlt: 'Optical fiber light path symbol', summary: 'Fiber-optic communication links and transmission systems.' },
      { name: 'Cisco Packet Tracer', icon: 'CPT', logo: 'assets/logos/cisco.svg', summary: 'Network simulation and communication systems learning.' },
      { name: 'LoRa Networks', icon: '⌁', logo: 'assets/logos/lora-radio.svg', logoAlt: 'Long-range radio network symbol', summary: 'Long-range wireless links for remote IoT monitoring.' }
    ]
  },
  {
    title: 'Programming Languages',
    key: 'programming',
    tools: [
      { name: 'Python', icon: 'PY', logo: 'assets/logos/python.svg', summary: 'AI workflows, automation, backend scripting and analysis.' },
      { name: 'C', icon: 'C', logo: 'assets/logos/c.svg', summary: 'Low-level programming for firmware and systems work.' },
      { name: 'C++', icon: 'C++', logo: 'assets/logos/cplusplus.svg', summary: 'Performance-focused development for embedded and algorithmic tasks.' },
      { name: 'Java', icon: 'JAVA', logo: 'assets/logos/java.svg', summary: 'Enterprise software and server-side application development.' },
      { name: 'HTML5', icon: 'HTML', logo: 'assets/logos/html5.svg', summary: 'Accessible, semantic web structure and content architecture.' },
      { name: 'CSS', icon: 'CSS', logo: 'assets/logos/css.svg', summary: 'Modern visual design, layout and responsive interfaces.' },
      { name: 'JavaScript', icon: 'JS', logo: 'assets/logos/javascript.svg', summary: 'Interactive front-end logic and rich user experiences.' }
    ]
  },
  {
    title: 'AI & Intelligent Systems',
    key: 'ai',
    tools: [
      { name: 'Edge AI', icon: 'AI', logo: 'assets/logos/edge-ai.svg', logoAlt: 'Embedded AI chip symbol', summary: 'Intelligent inference close to the device and the data source.' },
      { name: 'Machine Learning', icon: '◉', logo: 'assets/logos/machine-learning.svg', logoAlt: 'Neural network symbol', summary: 'Model building and applied learning for real-world data.' },
      { name: 'Reinforcement Learning', icon: '↗', logo: 'assets/logos/reinforcement-learning.svg', logoAlt: 'Decision and feedback graph symbol', summary: 'Decision-making systems and adaptive learning strategies.' },
      { name: 'OpenCV', icon: 'CV', logo: 'assets/logos/opencv.svg', summary: 'Vision systems and image-processing pipelines.' },
      { name: 'LangGraph', icon: '◎', logo: 'assets/logos/langgraph.svg', logoAlt: 'Connected AI workflow graph symbol', summary: 'Agent and workflow orchestration for complex AI systems.' },
      { name: 'FAISS', icon: '⌕', logo: 'assets/logos/faiss.svg', logoAlt: 'Vector similarity search symbol', summary: 'Efficient similarity search in intelligent retrieval workflows.' }
    ]
  },
  {
    title: 'Databases',
    key: 'databases',
    tools: [
      { name: 'MySQL', icon: 'SQL', logo: 'assets/logos/mysql.svg', summary: 'Structured data storage for applications and services.' },
      { name: 'SQLite', icon: 'DB', logo: 'assets/logos/sqlite.svg', summary: 'Lightweight local data storage for prototypes and tools.' },
      { name: 'MongoDB', icon: 'MDB', logo: 'assets/logos/mongodb.svg', summary: 'Flexible document storage for dynamic application data.' },
      { name: 'Oracle', icon: 'ORA', logo: 'assets/logos/oracle.svg', summary: 'Enterprise data systems and relational database work.' }
    ]
  },
  {
    title: 'Engineering & Development Tools',
    key: 'engineering',
    tools: [
      { name: 'MATLAB', icon: 'MAT', logo: 'assets/logos/matlab.svg', summary: 'Simulation, signal analysis and engineering modeling.' },
      { name: 'Proteus', icon: '⌬', logo: 'assets/logos/proteus-circuit.svg', logoAlt: 'Circuit simulation symbol', summary: 'Circuit design and validation for electronic prototypes.' },
      { name: 'STM32CubeIDE', icon: 'Cube', logo: 'assets/logos/stmicroelectronics.svg', logoAlt: 'STMicroelectronics logo for STM32CubeIDE', summary: 'Embedded development environment for STM32 projects.' },
      { name: 'Arduino IDE', icon: 'IDE', logo: 'assets/logos/arduino.svg', logoAlt: 'Arduino logo for Arduino IDE', summary: 'Hardware coding and rapid prototyping workflow.' },
      { name: 'OptiSystem', icon: '↠', logo: 'assets/logos/optisystem.svg', logoAlt: 'Optical system block diagram symbol', summary: 'Optical communication modeling and system behavior evaluation.' },
      { name: 'TouchGFX', icon: '▣', logo: 'assets/logos/touchgfx.svg', logoAlt: 'Embedded touchscreen interface symbol', summary: 'Graphical user interface development for embedded displays.' }
    ]
  },
  {
    title: 'Languages',
    key: 'languages',
    tools: [
      { name: 'English', icon: 'EN', level: 'B2 (Upper-Intermediate)' },
      { name: 'French', icon: 'FR', level: 'B2 (Upper-Intermediate)' }
    ]
  }
];

const academicJourney = [
  {
    period: '2022',
    institution: 'High school',
    institutionAbbreviation: 'HS',
    logo: { src: null, expectedSrc: 'assets/education/high-school-logo.png' },
    title: 'Baccalaureate — Mathematics track',
    detail: 'I completed my scientific baccalaureate and began shaping a strong foundation in analytical thinking, abstraction and disciplined problem-solving.',
    tone: 'pink'
  },
  {
    period: '2022 — 2023',
    institution: 'Institut Préparatoire aux Études d’Ingénieurs de Bizerte',
    institutionAbbreviation: 'IPEIB',
    logo: { src: 'assets/education/ipeib-logo.png', expectedSrc: 'assets/education/ipeib-logo.png' },
    title: 'Institut Préparatoire aux Études d’Ingénieurs de Bizerte (IPEIB)',
    detail: 'Preparatory Studies in Mathematics and Physics (MP). I ranked among the top 10 students out of 90.',
    tone: 'butter'
  },
  {
    key: 'ipein',
    period: '2023 — 2024',
    institution: 'Institut Préparatoire aux Études d’Ingénieurs de Nabeul',
    institutionAbbreviation: 'IPEIN',
    logo: { src: 'assets/education/ipein-logo.png', expectedSrc: 'assets/education/ipein-logo.png' },
    title: 'Institut Préparatoire aux Études d’Ingénieurs de Nabeul (IPEIN)',
    detail: 'Preparatory Studies in Mathematics and Physics (MP). I ranked 229th out of more than 1,500 candidates in the National Engineering Entrance Examination and obtained my preparatory studies diploma at IPEIN.',
    tone: 'butter'
  },
  {
    period: '2024 — 2027',
    institution: 'École Nationale d’Ingénieurs de Tunis',
    institutionAbbreviation: 'ENIT',
    logo: { src: 'assets/education/enit-logo.png', expectedSrc: 'assets/education/enit-logo.png' },
    title: 'École Nationale d’Ingénieurs de Tunis (ENIT)',
    detail: 'I am currently pursuing a telecommunications engineering degree and specializing in IoT, with a focus on Edge AI and embedded systems, alongside communication systems and applied engineering research.',
    tone: 'lavender'
  }
];

const certificates = [
  { organization: 'NVIDIA', title: 'Building RAG Agents with LLMs', image: 'assets/certificates/nvidia-building-rag-agents.png', pdfUrl: null },
  { organization: 'NVIDIA', title: 'Rapid Application Development with Large Language Models', image: 'assets/certificates/nvidia-rapid-application-development-llms.png', pdfUrl: null },
  { organization: 'STMicroelectronics', title: 'STM32, Edge AI, TouchGFX, cryptography, and energy optimization training', image: 'assets/certificates/stmicroelectronics-training.jpg', pdfUrl: null },
  { organization: 'Cisco', title: 'CCNA: Introduction to Networks', image: 'assets/certificates/cisco-ccna-introduction-to-networks.jpg', pdfUrl: null }
];

const preparatoryDiploma = {
  title: 'Preparatory Studies Diploma',
  image: 'assets/education/preparatory-studies-diploma.jpg',
  pdfUrl: null
};

const professionalInternships = [
  {
    company: 'Avempace Technologies',
    role: 'Engineering Intern',
    duration: '2 Months',
    description: 'Designed an optical fiber transmission chain for an embedded drone communication system, supporting low-latency high-resolution audio/video transmission and control data.',
    image: {
      src: 'assets/images/internships/avempace-internship.png',
      alt: 'Avempace Technologies logo'
    },
    technologies: ['Optical Fiber', 'Embedded Systems', 'Audio/Video Transmission', 'Control Data'],
    reportUrl: 'assets/reports/drone-optical-transmission.pdf',
    tone: 'lavender'
  },
  {
    company: 'Tunisie Telecom',
    role: 'Intern',
    duration: '1 Month',
    description: 'Gained practical exposure to telecommunications operations and the professional environment of a regional telecommunications office.',
    image: {
      src: 'assets/images/internships/tunisie-telecom-internship.png',
      alt: 'Tunisie Telecom logo'
    },
    technologies: [],
    reportUrl: null,
    tone: 'butter'
  }
];

const creativeGallery = [
  { image: 'assets/images/designs/ieee-enit-posters.jpg', alt: 'IEEE ENIT event poster designs' },
  { image: 'assets/images/designs/pes-tgm-branding.jpg', alt: 'PES TGM branding artwork' },
  { image: 'assets/images/designs/tuned-campaign.jpg', alt: 'TunED event campaign designs' }
];

const ieeeGallery = [
  { src: 'assets/images/ieee/gallery/ieee-gallery-1.jpg', expectedSrc: 'assets/images/ieee/gallery/ieee-gallery-1.jpg', alt: 'Azza speaking at an IEEE event' },
  { src: 'assets/images/ieee/gallery/ieee-gallery-2.jpg', expectedSrc: 'assets/images/ieee/gallery/ieee-gallery-2.jpg', alt: 'IEEE team activity photo' },
  { src: 'assets/images/ieee/gallery/ieee-gallery-3.jpg', expectedSrc: 'assets/images/ieee/gallery/ieee-gallery-3.jpg', alt: 'IEEE event participation photo' },
  { src: 'assets/images/ieee/gallery/ieee-gallery-4.jpg', expectedSrc: 'assets/images/ieee/gallery/ieee-gallery-4.jpg', alt: 'IEEE media experience photo' }
];

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function galleryPlaceholderMarkup(kind) {
  const label = kind === 'diploma' ? 'Preparatory diploma' : 'Certificate';
  return `<span class="gallery-placeholder gallery-placeholder-${kind}" aria-hidden="true">
    <span class="gallery-placeholder-star">★</span>
    <span class="gallery-placeholder-label">${label} preview</span>
    <strong>Image coming soon</strong>
  </span>`;
}

function attachGalleryImageFallback(image) {
  image.addEventListener('error', () => {
    const wrapper = document.createElement('span');
    wrapper.innerHTML = galleryPlaceholderMarkup(image.dataset.galleryImage);
    image.replaceWith(wrapper.firstElementChild);
  }, { once: true });
}

const imageLoadCache = new Map();

function loadMediaImage(src) {
  if (!imageLoadCache.has(src)) {
    imageLoadCache.set(src, new Promise((resolve) => {
      const image = new Image();
      image.addEventListener('load', () => resolve(image), { once: true });
      image.addEventListener('error', () => resolve(null), { once: true });
      image.src = src;
    }));
  }

  return imageLoadCache.get(src);
}

function hydrateMedia(el) {
  const key = el.dataset.media;
  const entry = MEDIA[key];
  if (!entry) return;
  if (!entry.src) {
    el.dataset.mediaState = 'placeholder';
    return;
  }

  el.dataset.mediaState = 'loading';

  loadMediaImage(entry.src).then((loadedImage) => {
    if (!loadedImage) {
      el.dataset.mediaState = 'placeholder';
      return;
    }

    const image = loadedImage.cloneNode();
    image.alt = entry.alt;
    image.loading = 'lazy';
    image.decoding = 'async';
    el.replaceChildren(image);
    el.classList.add('has-media');
    el.dataset.mediaState = 'ready';
  });
}

const projectGrid = document.getElementById('projects-grid');
if (projectGrid) {
  projectGrid.innerHTML = projects.map((project, index) => {
    const detailsId = `project-details-${index + 1}`;
    const projectImages = project.images.filter((image) => image.src).slice(0, 3);
    const reportAction = project.reportUrl
      ? `<a class="project-report" href="${escapeHtml(project.reportUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHtml(project.title)} report">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.75h7.5L19 8.25v12H7z"></path><path d="M14.5 3.75v4.5H19M9.5 12h5M9.5 15.5h5"></path></svg>
          <span>View report</span>
        </a>`
      : `<button class="project-report is-disabled" type="button" disabled aria-label="Report coming soon for ${escapeHtml(project.title)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.75h7.5L19 8.25v12H7z"></path><path d="M14.5 3.75v4.5H19M9.5 12h5M9.5 15.5h5"></path></svg>
          <span>Report coming soon</span>
        </button>`;
    const optionalLinks = [
      project.githubUrl ? `<a class="project-link" href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>` : '',
      project.demoUrl ? `<a class="project-link" href="${escapeHtml(project.demoUrl)}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>` : ''
    ].filter(Boolean).join('');

    return `
      <article class="project-card reveal">
        <div class="project-media media-tile tone-${project.tone}">
          <img src="${escapeHtml(projectImages[0].src)}" alt="${escapeHtml(projectImages[0].alt)}" loading="lazy" decoding="async">
        </div>
        <div class="project-summary">
          <div class="project-meta"><span>${project.number} / ${escapeHtml(project.kind)}</span></div>
          <h3>${escapeHtml(project.title)}</h3>
          <p class="project-tech-teaser">${project.tags.slice(0, 3).map(escapeHtml).join(' · ')}</p>
        </div>
        <button class="project-toggle" type="button" aria-expanded="false" aria-controls="${detailsId}" aria-label="Expand details for ${escapeHtml(project.title)}">
          <span class="project-toggle-label">Explore</span><span class="project-toggle-icon" aria-hidden="true">↗</span>
        </button>
        <div class="project-details" id="${detailsId}" aria-hidden="true" inert>
          <div class="project-detail-meta"><span>${project.number} / ${escapeHtml(project.kind)}</span></div>
          <h3>${escapeHtml(project.title)}</h3>
          <h4>${escapeHtml(project.subtitle)}</h4>
          <p>${escapeHtml(project.description)}</p>
          <div class="tag-list">${project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
          <div class="project-actions">${reportAction}${optionalLinks}</div>
        </div>
      </article>
    `;
  }).join('');
}

const ieeeShowcase = document.getElementById('ieee-showcase');
if (ieeeShowcase) {
  const renderRoles = (roles, heading, startIndex) => `
    <section class="ieee-role-group" aria-label="${heading}">
      <h3>${heading}</h3>
      <ol class="ieee-role-list">
        ${roles.map((role, index) => `
          <li class="ieee-role">
            <span class="ieee-role-index" aria-hidden="true">${String(startIndex + index).padStart(2, '0')}</span>
            <div class="ieee-role-copy">
              <h4>${escapeHtml(role.name)}</h4>
              <span class="ieee-role-title">${escapeHtml(role.role)}</span>
              <p>${escapeHtml(role.description)}</p>
            </div>
            <span class="signature-star ieee-role-star" aria-hidden="true"></span>
          </li>
        `).join('')}
      </ol>
    </section>
  `;

  ieeeShowcase.innerHTML = `
    <div class="ieee-role-columns">
      ${renderRoles(currentLeadership, 'Current positions', 1)}
      ${renderRoles(previousIEEEExperiences, 'Previous roles & congress experiences', currentLeadership.length + 1)}
    </div>
    <aside class="ieee-gallery" aria-label="Shared IEEE activity photos">
      <div class="ieee-gallery-heading">
        <span>IEEE, in moments</span>
        <span class="signature-star" aria-hidden="true"></span>
      </div>
      <div class="ieee-photo-collage">
        ${ieeeGallery.map((image, index) => image.src
          ? `<button class="ieee-photo ieee-photo-${index + 1}" type="button" aria-label="Enlarge IEEE activity photo ${index + 1}">
              <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy" decoding="async">
            </button>`
          : `<div class="ieee-photo ieee-photo-${index + 1} ieee-photo-placeholder" role="img" aria-label="IEEE activity photo ${index + 1} not uploaded">
              <span class="signature-star" aria-hidden="true"></span>
            </div>`).join('')}
      </div>
    </aside>
  `;

  ieeeShowcase.querySelectorAll('.ieee-photo:not(.ieee-photo-placeholder)').forEach((button) => {
    const image = button.querySelector('img');
    image.addEventListener('error', () => {
      button.disabled = true;
      button.classList.add('ieee-photo-placeholder');
      button.setAttribute('role', 'img');
      button.setAttribute('aria-label', 'IEEE activity photo unavailable');
      button.replaceChildren(document.createElement('span'));
      button.firstElementChild.className = 'signature-star';
      button.firstElementChild.setAttribute('aria-hidden', 'true');
    }, { once: true });
    button.addEventListener('click', () => {
      const currentImage = button.querySelector('img');
      if (!currentImage) return;
      showDialog(currentImage.alt, `<div class="lightbox-stage"><img src="${escapeHtml(currentImage.src)}" alt="${escapeHtml(currentImage.alt)}"></div>`);
    });
  });
}

const professionalInternshipsGrid = document.getElementById('professional-internships-grid');
if (professionalInternshipsGrid) {
  professionalInternshipsGrid.innerHTML = professionalInternships.map((internship) => `
    <article class="professional-internship-card reveal">
      <div class="internship-photo has-photo">
        <img src="${escapeHtml(internship.image.src)}" alt="${escapeHtml(internship.image.alt)}" loading="lazy" decoding="async">
      </div>
      <div class="internship-card-copy">
        <div class="internship-card-meta">
          <span class="mini-kicker">${escapeHtml(internship.role)}</span>
          <span class="internship-duration">${escapeHtml(internship.duration)}</span>
        </div>
        <h4>${escapeHtml(internship.company)}</h4>
        <p>${escapeHtml(internship.description)}</p>
        ${internship.technologies.length
          ? `<div class="internship-technologies" aria-label="Relevant technologies">${internship.technologies.map((technology) => `<span>${escapeHtml(technology)}</span>`).join('')}</div>`
          : ''}
        ${internship.reportUrl
          ? `<a class="internship-report-link" href="${escapeHtml(internship.reportUrl)}" target="_blank" rel="noopener noreferrer">View Internship Report <span aria-hidden="true">↗</span></a>`
          : `<span class="internship-report-link is-unavailable" aria-disabled="true">Report coming soon</span>`}
      </div>
    </article>
  `).join('');
  professionalInternshipsGrid.querySelectorAll('.internship-photo img').forEach((image) => {
    image.addEventListener('error', () => {
      const photo = image.parentElement;
      const company = image.closest('.professional-internship-card').querySelector('.internship-card-copy h4').textContent;
      const placeholder = document.createElement('div');
      placeholder.className = 'internship-photo-placeholder';
      placeholder.setAttribute('role', 'img');
      placeholder.setAttribute('aria-label', `${company} internship photo not uploaded`);
      placeholder.innerHTML = '<span aria-hidden="true">✦</span><strong>Internship photo</strong><small>Image coming soon</small>';
      photo.classList.remove('has-photo');
      image.replaceWith(placeholder);
    }, { once: true });
  });
}

const toolkitGrid = document.getElementById('toolkit-groups');
if (toolkitGrid) {
  toolkitGrid.innerHTML = techStack.map((section) => `
    <section class="toolkit-category reveal${section.featured ? ' toolkit-category-featured' : ''}" data-category="${section.key}">
      <div class="toolkit-category-heading">
        <h3>${escapeHtml(section.title)}</h3>
        ${section.featured ? '<span class="featured-label">Core focus</span>' : ''}
      </div>
      <div class="toolkit-grid">
        ${section.tools.map((tool) => `
          <article class="tool-card" data-category="${section.key}" tabindex="0" aria-label="${escapeHtml(tool.name)} technology card">
            <span class="tool-icon">${tool.logo
              ? `<img src="${escapeHtml(tool.logo)}" alt="${escapeHtml(tool.logoAlt || `${tool.name} logo`)}" loading="lazy" decoding="async"><span class="tool-logo-fallback" role="img" aria-label="${escapeHtml(tool.name)} symbol" hidden>${escapeHtml(tool.icon)}</span>`
              : `<span class="tool-logo-fallback" role="img" aria-label="${escapeHtml(tool.name)} language symbol">${escapeHtml(tool.icon)}</span>`}</span>
            <strong${tool.name === 'Embedded Linux' ? ' class="tool-name-nowrap"' : ''}>${escapeHtml(tool.name)}</strong>
            ${section.key === 'languages'
              ? `<span class="tool-language-level">${escapeHtml(tool.level)}</span>`
              : `<p class="tool-summary">${escapeHtml(tool.summary)}</p>`}
          </article>
        `).join('')}
      </div>
    </section>
  `).join('');
  toolkitGrid.querySelectorAll('.tool-icon img').forEach((logo) => {
    logo.addEventListener('error', () => {
    const fallback = logo.nextElementSibling;
    if (fallback) fallback.hidden = false;
    logo.remove();
    }, { once: true });
  });
}

const academicJourneyList = document.getElementById('academic-journey-list');
if (academicJourneyList) {
  academicJourneyList.innerHTML = academicJourney.map((item) => {
    const diploma = item.key === 'ipein'
      ? `<div class="diploma-visual">
          <button class="diploma-preview" type="button" data-lightbox-kind="diploma" aria-label="Enlarge Preparatory Studies Diploma preview">
            ${preparatoryDiploma.image
              ? `<img src="${escapeHtml(preparatoryDiploma.image)}" alt="Preparatory Studies Diploma" loading="lazy" decoding="async" data-gallery-image="diploma">`
              : galleryPlaceholderMarkup('diploma')}
            <span class="preview-zoom" aria-hidden="true">↗</span>
          </button>
          <div class="diploma-caption">
            <strong>${escapeHtml(preparatoryDiploma.title)}</strong>
            ${preparatoryDiploma.pdfUrl ? `<a href="${escapeHtml(preparatoryDiploma.pdfUrl)}" target="_blank" rel="noopener noreferrer">View PDF ↗</a>` : ''}
          </div>
        </div>`
      : '';

    return `
      <article class="timeline-item reveal">
        <div class="timeline-institution-logo tone-${item.tone}${item.logo.src ? '' : ' is-placeholder'}" role="img" aria-label="${escapeHtml(item.institution)} logo or abbreviation placeholder">
          ${item.logo.src ? `<img src="${escapeHtml(item.logo.src)}" alt="" loading="lazy" decoding="async">` : ''}
          <span>${escapeHtml(item.institutionAbbreviation)}</span>
        </div>
        <div class="timeline-body">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.detail)}</p>
        </div>
        <aside class="timeline-aside">
          <span class="timeline-date tone-${item.tone}">${escapeHtml(item.period)}</span>
          ${diploma}
        </aside>
      </article>
    `;
  }).join('');
  academicJourneyList.querySelectorAll('.timeline-institution-logo img').forEach((logo) => {
    logo.addEventListener('error', () => {
      logo.closest('.timeline-institution-logo').classList.add('is-placeholder');
      logo.remove();
    }, { once: true });
  });
}

const certificateGallery = document.getElementById('certificate-gallery');
if (certificateGallery) {
  certificateGallery.innerHTML = certificates.map((certificate, index) => `
    <article class="certificate-card reveal${index === 0 || index === 3 ? ' certificate-featured' : ''}">
      <div class="certificate-frame">
        <button class="certificate-preview" type="button" data-lightbox-kind="certificate" data-certificate-index="${index}" aria-label="Enlarge ${escapeHtml(certificate.title)} certificate">
          ${certificate.image
            ? `<img src="${escapeHtml(certificate.image)}" alt="${escapeHtml(certificate.organization)} certificate: ${escapeHtml(certificate.title)}" loading="lazy" decoding="async" data-gallery-image="certificate">`
            : galleryPlaceholderMarkup('certificate')}
          <span class="preview-zoom" aria-hidden="true">↗</span>
        </button>
      </div>
      <div class="certificate-caption">
        <span>${escapeHtml(certificate.organization)}</span>
        <h3>${escapeHtml(certificate.title)}</h3>
        ${certificate.pdfUrl ? `<a href="${escapeHtml(certificate.pdfUrl)}" target="_blank" rel="noopener noreferrer">View certificate PDF ↗</a>` : ''}
      </div>
    </article>
  `).join('');
}

const creativeGrid = document.getElementById('creative-grid');
if (creativeGrid) {
  creativeGrid.innerHTML = creativeGallery.map((item) => `
    <button class="design-artwork" type="button" aria-label="Enlarge ${escapeHtml(item.alt)}">
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt)}" loading="lazy" decoding="async">
    </button>
  `).join('');
  creativeGrid.querySelectorAll('.design-artwork').forEach((button) => {
    button.addEventListener('click', () => {
      const image = button.querySelector('img');
      if (!image) return;
      showDialog(image.alt, `<div class="lightbox-stage"><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}"></div>`);
    });
  });
  creativeGrid.querySelectorAll('.design-artwork img').forEach((image) => {
    image.addEventListener('error', () => {
      const button = image.closest('.design-artwork');
      const placeholder = document.createElement('div');
      placeholder.className = 'design-placeholder';
      placeholder.setAttribute('role', 'img');
      placeholder.setAttribute('aria-label', 'Design image not available');
      image.replaceWith(placeholder);
      button.disabled = true;
      button.setAttribute('aria-label', 'Design image not available');
    }, { once: true });
  });
}

document.querySelectorAll('[data-media]').forEach(hydrateMedia);
document.querySelectorAll('[data-gallery-image]').forEach(attachGalleryImageFallback);

const projectCards = projectGrid ? [...projectGrid.querySelectorAll('.project-card')] : [];
let keyboardNavigation = false;
document.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') keyboardNavigation = true;
});
document.addEventListener('pointerdown', () => {
  keyboardNavigation = false;
});

const updateProjectGridState = () => {
  projectGrid?.classList.toggle('has-active-card', projectCards.some((card) => card.classList.contains('is-expanded')));
};

projectCards.forEach((card) => {
  const toggle = card.querySelector('.project-toggle');
  const details = card.querySelector('.project-details');
  let pointerInside = false;

  const setExpanded = (expanded) => {
    card.classList.toggle('is-expanded', expanded);
    toggle.setAttribute('aria-expanded', String(expanded));
    toggle.setAttribute('aria-label', `${expanded ? 'Collapse' : 'Expand'} details for ${card.querySelector('.project-summary h3').textContent}`);
    toggle.querySelector('.project-toggle-label').textContent = expanded ? 'Close' : 'Explore';
    toggle.querySelector('.project-toggle-icon').textContent = expanded ? '×' : '↗';
    details.setAttribute('aria-hidden', String(!expanded));
    details.inert = !expanded;
    updateProjectGridState();
  };

  card.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'touch') return;
    pointerInside = true;
    setExpanded(true);
  });

  card.addEventListener('pointerleave', (event) => {
    if (event.pointerType === 'touch') return;
    pointerInside = false;
    if (!card.contains(document.activeElement)) setExpanded(false);
  });

  card.addEventListener('focusin', () => {
    if (keyboardNavigation) setExpanded(true);
  });
  card.addEventListener('focusout', (event) => {
    if (!card.contains(event.relatedTarget) && !pointerInside) setExpanded(false);
  });

  toggle.addEventListener('click', () => setExpanded(!card.classList.contains('is-expanded')));
  card.addEventListener('click', (event) => {
    if (event.target.closest('a, button')) return;
    setExpanded(!card.classList.contains('is-expanded'));
  });
});

const techFilters = document.querySelectorAll('.tech-filter');
techFilters.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    techFilters.forEach((b) => {
      b.classList.toggle('active', b === button);
      b.setAttribute('aria-pressed', String(b === button));
    });

    document.querySelectorAll('.toolkit-category').forEach((category) => {
      const hidden = selected !== 'all' && category.dataset.category !== selected;
      category.hidden = hidden;
    });
  });
});

const dialog = document.getElementById('media-dialog');
const dialogContent = document.getElementById('dialog-content');
const dialogTitle = document.getElementById('dialog-title');
const showDialog = (title, content) => {
  dialogTitle.textContent = title;
  dialogContent.innerHTML = content;
  dialog.showModal();
  dialogContent.querySelectorAll('[data-gallery-image]').forEach(attachGalleryImageFallback);
};

document.querySelectorAll('[data-lightbox-kind]').forEach((button) => {
  button.addEventListener('click', () => {
    const kind = button.dataset.lightboxKind;
    const item = kind === 'diploma'
      ? preparatoryDiploma
      : certificates[Number(button.dataset.certificateIndex)];
    const title = kind === 'diploma' ? item.title : `${item.organization} — ${item.title}`;
    const alt = kind === 'diploma' ? item.title : `${item.organization} certificate: ${item.title}`;
    const imageMarkup = item.image
      ? `<img src="${escapeHtml(item.image)}" alt="${escapeHtml(alt)}" data-gallery-image="${kind}" />`
      : galleryPlaceholderMarkup(kind);
    const pdfLink = item.pdfUrl
      ? `<a class="lightbox-pdf" href="${escapeHtml(item.pdfUrl)}" target="_blank" rel="noopener noreferrer">Open PDF ↗</a>`
      : '';

    showDialog(title, `<div class="lightbox-stage">${imageMarkup}</div>${pdfLink}`);
  });
});

const openDialog = (tile) => {
  const img = tile.querySelector('img');
  if (!img || !img.src) return;
  showDialog(img.alt || 'Media preview', `<div class="lightbox-stage"><img src="${img.src}" alt="${escapeHtml(img.alt || 'Project visual')}" /></div>`);
};

document.querySelectorAll('.art-media').forEach((tile) => {
  tile.addEventListener('click', (event) => {
    const nestedButton = event.target.closest('button');
    if (nestedButton && nestedButton !== tile) return;
    if (tile.classList.contains('has-media')) {
      openDialog(tile);
    }
  });
});

document.getElementById('dialog-close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    event.preventDefault();
    dialog.close();
  }
});
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

const menuButton = document.getElementById('menu-btn');
const navigation = document.getElementById('main-nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('is-open');
      navigation.querySelectorAll('.nav-more').forEach((menu) => {
        menu.open = false;
      });
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px 10px 0px' });

  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
} else {
  document.querySelectorAll('.reveal').forEach((item) => item.classList.add('visible'));
}

const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const paintCanvas = document.getElementById('paint-canvas');
const paintArea = document.querySelector('.hero');

if (paintCanvas && paintArea && !motionQuery.matches && window.matchMedia('(pointer: fine)').matches) {
  const ctx = paintCanvas.getContext('2d');

  if (ctx) {
    const colors = ['#ff83bd', '#f4c94f', '#c4a4f5'];
    let colorIndex = 0;
    let strokeColor = colors[0];
    let lastPoint = null;
    let lastDrawTime = 0;
    let fadeFrame = null;

    const resizeCanvas = () => {
      const rect = paintArea.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      paintCanvas.width = Math.round(rect.width * ratio);
      paintCanvas.height = Math.round(rect.height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      ctx.clearRect(0, 0, rect.width, rect.height);
    };

    const fadeTrail = (time) => {
      const rect = paintArea.getBoundingClientRect();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.055)';
      ctx.fillRect(0, 0, rect.width, rect.height);
      ctx.globalCompositeOperation = 'source-over';

      if (time - lastDrawTime < 1900) {
        fadeFrame = requestAnimationFrame(fadeTrail);
      } else {
        ctx.clearRect(0, 0, rect.width, rect.height);
        fadeFrame = null;
      }
    };

    const scheduleFade = () => {
      if (fadeFrame === null) fadeFrame = requestAnimationFrame(fadeTrail);
    };

    const handlePointerEnter = (event) => {
      if (event.pointerType === 'touch') return;
      lastPoint = null;
      strokeColor = colors[colorIndex % colors.length];
      colorIndex += 1;
    };

    const handlePointerMove = (event) => {
      if (event.pointerType === 'touch') return;

      const rect = paintArea.getBoundingClientRect();
      const point = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      if (!lastPoint) {
        lastPoint = point;
        return;
      }

      const distance = Math.hypot(point.x - lastPoint.x, point.y - lastPoint.y);
      const steps = Math.max(1, Math.ceil(distance / 5));
      ctx.beginPath();
      ctx.moveTo(lastPoint.x, lastPoint.y);

      let previous = lastPoint;
      for (let step = 1; step <= steps; step += 1) {
        const next = {
          x: lastPoint.x + (point.x - lastPoint.x) * (step / steps),
          y: lastPoint.y + (point.y - lastPoint.y) * (step / steps)
        };
        const midpoint = { x: (previous.x + next.x) / 2, y: (previous.y + next.y) / 2 };
        ctx.quadraticCurveTo(previous.x, previous.y, midpoint.x, midpoint.y);
        previous = next;
      }
      ctx.lineTo(point.x, point.y);

      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 3.5;
      ctx.globalAlpha = 0.72;
      ctx.shadowColor = strokeColor;
      ctx.shadowBlur = 20;
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 0.88;
      ctx.lineWidth = 1.6;
      ctx.stroke();
      ctx.globalAlpha = 1;

      lastPoint = point;
      lastDrawTime = performance.now();
      scheduleFade();
    };

    paintArea.addEventListener('pointerenter', handlePointerEnter);
    paintArea.addEventListener('pointermove', handlePointerMove);
    paintArea.addEventListener('pointerleave', () => {
      lastPoint = null;
    });

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  }
}

const form = document.querySelector('.contact-form');
if (form) {
  const fields = [
    form.querySelector('input[name="name"]'),
    form.querySelector('input[name="email"]'),
    form.querySelector('input[name="subject"]'),
    form.querySelector('textarea[name="message"]')
  ];

  const status = form.querySelector('.form-status');

  const validateField = (field) => {
    const wrapper = field.closest('.field');
    const error = wrapper.querySelector('.error');
    const value = field.value.trim();
    let message = '';

    if (field.name === 'name' && !value) message = 'Please add your name.';
    if (field.name === 'email') {
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (!value) message = 'Please add your email address.';
      else if (!valid) message = 'Please use a valid email format.';
    }
    if (field.name === 'subject' && !value) message = 'Please add a subject.';
    if (field.name === 'message' && !value) message = 'Please write a short message.';

    error.textContent = message;
    field.setAttribute('aria-invalid', String(Boolean(message)));
    return !message;
  };

  fields.forEach((field) => {
    field.addEventListener('input', () => validateField(field));
    field.addEventListener('blur', () => validateField(field));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const valid = fields.every(validateField);

    if (!valid) {
      status.textContent = 'Please complete the highlighted fields and try again.';
      return;
    }

    const name = form.querySelector('input[name="name"]').value.trim();
    const subject = form.querySelector('input[name="subject"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();
    const body = `Hi Azza,%0D%0A%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0AThanks,%0D%0A${encodeURIComponent(name)}`;

    status.textContent = 'Your email app is opening with a ready-to-send message.';
    window.location.href = `mailto:azza.hamdi@etudiant-enit.utm.tn?subject=${encodeURIComponent(subject)}&body=${body}`;
    form.reset();
  });
}

document.getElementById('year').textContent = new Date().getFullYear();
