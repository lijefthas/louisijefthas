const portfolioData = {
  person: {
    name: "Louis Jefthas",
    summary:
      "Software Developer with hands-on experience maintaining, enhancing, and modernising commercial software systems in production environments.",
    location: "Cape Town, South Africa",
    email: "louisjefthas90@gmail.com",
    linkedin: "linkedin.com/in/louis-ivanne-jefthas"
  },
  metrics: [
    ["Current role", "Software Developer", "Nayax OTI PetroSmart"],
    ["Core stack", "C++ to Flutter", "Legacy systems to mobile delivery"],
    ["Focus", "Diagnostics", "Logging, debugging, rollout stability"]
  ],
  skills: [
    ["Languages", "C++, C#, Python, Bash, JavaScript, SQL"],
    ["Frameworks", ".NET, ASP.NET, Flutter, MFC"],
    ["Delivery", "Git, Docker, Visual Studio, VS Code, deployment tooling"],
    ["Strengths", "Multithreading, protocol integration, troubleshooting"]
  ],
  experience: [
    {
      role: "Software Developer",
      company: "Nayax OTI PetroSmart",
      period: "Feb 2024 - Current",
      points: [
        "Integrated external webhooks and JSON APIs for payment and FCC authorization flows.",
        "Maintains and modernizes production desktop software with targeted stability fixes.",
        "Shipped remote update workflows across international networks with minimal downtime.",
        "Upgraded a legacy Visual Studio 2010 application path to a modern 2026 toolchain."
      ]
    },
    {
      role: "Technical Support Operator",
      company: "Nayax OTI PetroSmart",
      period: "Aug 2023 - Jan 2024",
      points: [
        "Resolved field issues remotely across hardware and software systems.",
        "Worked directly with technicians and development teams on escalations.",
        "Tracked incidents cleanly through contractor and support channels."
      ]
    }
  ],
  projects: [
    {
      key: "pump",
      kicker: "Current Project Snapshot",
      title: "Pump Pal",
      meta: "Live nearby diesel station discovery for South Africa",
      copy:
        "Pump Pal combines a feature-first Flutter architecture with a centralized design system. The strongest cues are deep blue fuel-station accents, warm neutral surfaces, blurred sheets, and a product voice focused on clarity under real-world network and location constraints.",
      bullets: [
        "Interactive map with live device location and nearby station lookup via Overpass/OpenStreetMap.",
        "Persisted theme settings with palette switching and shared design tokens.",
        "Explicit loading, empty, and error states instead of silent mock fallback."
      ]
    },
    {
      key: "progression",
      kicker: "Current Project Snapshot",
      title: "Progression",
      meta: "Offline-first Flutter fitness tracker and training history app",
      copy:
        "Progression leans into a softer glass treatment: warm cream surfaces, rust-orange accents, translucent cards, and consistent blurred dialogs. The product direction is calmer and more editorial than Pump Pal while still staying structured and utility-first.",
      bullets: [
        "Offline-first training activity logging with multi-platform Flutter support.",
        "Reusable dialog and bottom-sheet patterns with blurred backdrops.",
        "Palette-driven theming with warm accents and polished settings flows."
      ]
    }
  ],
  education: [
    "Damelin College - Diploma in Information Technology (Feb 2020 - May 2023)",
    "CTU Training Solutions - FET Certified IT Technical Support (Feb 2019 - Dec 2019)",
    "New Orleans Secondary School - Bachelor's Pass (2018)"
  ]
};

const contactItems = [
  ["home", portfolioData.person.location, null],
  ["mail", portfolioData.person.email, `mailto:${portfolioData.person.email}`],
  ["linkedin", "LinkedIn", `https://${portfolioData.person.linkedin}`]
];

const icons = {
  home:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2 8 5 8-5"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.5A1.5 1.5 0 1 1 6.5 5a1.5 1.5 0 0 1 0 3.5zM5 10h3v9H5zm5 0h2.9v1.3h.1c.4-.8 1.4-1.6 3-1.6 3.2 0 3.8 2 3.8 4.7V19h-3v-4c0-1 0-2.4-1.5-2.4s-1.7 1.1-1.7 2.3V19h-3z"/></svg>'
};

class BaseComponent {
  constructor(tag = "section", className = "panel") {
    this.element = document.createElement(tag);
    this.element.className = className;
  }

  append(...children) {
    children.filter(Boolean).forEach((child) => this.element.append(child));
    return this.element;
  }

  text(tag, className, text) {
    const node = document.createElement(tag);
    node.className = className;
    node.textContent = text;
    return node;
  }
}

class SectionCard extends BaseComponent {
  constructor(title, eyebrow, copy, spotlight = false) {
    super("section", `panel section-card${spotlight ? " spotlight" : ""}`);
    const heading = document.createElement("div");
    heading.className = "section-heading";
    heading.append(this.text("span", "eyebrow", eyebrow));
    heading.append(this.text("h2", "section-title", title));
    if (copy) heading.append(this.text("p", "section-copy", copy));
    this.append(heading);
  }
}

class MetricCard extends BaseComponent {
  constructor(label, value, copy) {
    super("article", "metric-card");
    this.append(this.text("p", "metric-label", label));
    this.append(this.text("h3", "metric-value", value));
    this.append(this.text("p", "metric-copy", copy));
  }
}

class SkillCard extends BaseComponent {
  constructor(title, copy) {
    super("article", "skill-card");
    this.append(this.text("p", "skill-title", title));
    this.append(this.text("p", "skill-copy", copy));
  }
}

class TimelineCard extends BaseComponent {
  constructor(entry) {
    super("article", "timeline-card");
    this.append(this.text("p", "timeline-role", `${entry.role} · ${entry.company}`));
    this.append(this.text("p", "timeline-period", entry.period));
    entry.points.forEach((point) => this.append(this.text("p", "timeline-copy", point)));
  }
}

class ProjectCard extends BaseComponent {
  constructor(project) {
    super("article", "project-card");
    const theme = document.createElement("div");
    theme.className = `project-theme ${project.key}`;
    const list = document.createElement("ul");
    list.className = "project-list";
    project.bullets.forEach((item) => list.append(this.item(item)));
    this.append(theme);
    this.append(this.text("p", "project-kicker", project.kicker));
    this.append(this.text("h3", "project-title", project.title));
    this.append(this.text("p", "project-meta", project.meta));
    this.append(this.text("p", "project-copy", project.copy));
    this.append(list);
  }

  item(text) {
    const item = document.createElement("li");
    item.className = "project-item";
    item.textContent = text;
    return item;
  }
}

class DetailCard extends BaseComponent {
  constructor(title, items) {
    super("article", "cv-card");
    const list = document.createElement("div");
    list.className = "cv-list";
    this.append(this.text("h3", "project-title", title));
    items.forEach((item) => list.append(this.text("p", "project-item", item)));
    this.append(list);
  }
}

class ProjectOverviewCard extends ProjectCard {
  constructor(project) {
    super(project);
    this.element.classList.add("hover-card");
  }
}

function renderHero() {
  const root = document.querySelector("#hero");
  const card = new BaseComponent("section", "panel hero-card");
  const layout = document.createElement("div");
  const copy = document.createElement("div");
  const meta = document.createElement("div");
  layout.className = "hero-layout";
  copy.className = "hero-copy";
  meta.className = "meta-grid";
  card.append(card.text("span", "hero-band", "Portfolio Website"));
  copy.append(card.text("h1", "", portfolioData.person.name));
  copy.append(card.text("p", "", portfolioData.person.summary));
  contactItems.forEach((item) => meta.append(buildContactPill(...item)));
  layout.append(copy, meta);
  root.append(card.append(layout));
}

function buildContactPill(icon, text, href) {
  const pill = href ? document.createElement("a") : document.createElement("div");
  pill.className = "pill hover-card";
  if (href) {
    pill.href = href;
    pill.target = "_blank";
    pill.rel = "noreferrer";
  }
  pill.innerHTML = `<span class="pill-icon">${icons[icon]}</span><span>${text}</span>`;
  return pill;
}

function renderHighlights() {
  const root = document.querySelector("#highlights");
  const card = new SectionCard(
    "Production-minded software delivery",
    "Capabilities",
    "Hands-on work across diagnostics, protocol integration, legacy modernization, deployment, and modern app delivery."
  );
  const metrics = document.createElement("div");
  const skills = document.createElement("div");
  metrics.className = "metrics-grid";
  skills.className = "skill-grid";
  portfolioData.metrics.forEach((item) => metrics.append(new MetricCard(...item).element));
  portfolioData.skills.forEach((item) => skills.append(new SkillCard(...item).element));
  root.append(card.append(metrics, skills));
}

function renderExperience() {
  const root = document.querySelector("#experience");
  const card = new SectionCard(
    "Experience",
    "Career Path",
    "Recent experience spans development, field support, API integration, deployment, and modernization of commercial systems."
  );
  const grid = document.createElement("div");
  grid.className = "timeline";
  portfolioData.experience.forEach((entry) => grid.append(new TimelineCard(entry).element));
  root.append(card.append(grid));
}

function renderProjects() {
  const root = document.querySelector("#projects");
  const card = new SectionCard(
    "Projects",
    "Current Work",
    "Two active Flutter products shape the strongest visual and technical direction in this portfolio: Pump Pal and Progression.",
    true
  );
  const grid = document.createElement("div");
  grid.className = "project-grid";
  portfolioData.projects.forEach((item) =>
    grid.append(new ProjectOverviewCard(item).element)
  );
  root.append(card.append(grid));
}

function renderEducation() {
  const root = document.querySelector("#education");
  const card = new SectionCard(
    "Education",
    "Foundation",
    "Formal training that supports the hands-on engineering work shown across the rest of the portfolio."
  );
  const grid = document.createElement("div");
  grid.className = "project-grid";
  grid.append(new DetailCard("Education", portfolioData.education).element);
  root.append(card.append(grid));
}

function init() {
  renderHero();
  renderHighlights();
  renderExperience();
  renderEducation();
  renderProjects();
  attachHoverEffects();
}

function attachHoverEffects() {
  document.querySelectorAll(".hover-card").forEach((card) => bindHoverCard(card));
}

function bindHoverCard(card) {
  card.addEventListener("mousemove", (event) => updateHoverCard(card, event));
  card.addEventListener("mouseleave", () => resetHoverCard(card));
}

function updateHoverCard(card, event) {
  const box = card.getBoundingClientRect();
  const rx = ((event.clientY - box.top) / box.height - 0.5) * -8;
  const ry = ((event.clientX - box.left) / box.width - 0.5) * 8;
  card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
}

function resetHoverCard(card) {
  card.style.transform = "";
}

init();
