const portfolioData = {
  person: {
    name: "Louis Jefthas",
    summary:
      "Software developer with production experience across desktop, API integration, protocol work, and modern Flutter delivery. This portfolio blends the grounded utility of Pump Pal with the softer glass-like tactility used in Progression.",
    location: "Cape Town, South Africa",
    phone: "062 876 1124",
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
  cvProjects: [
    "Desktop Application Modernisation",
    "Logging Framework Upgrade",
    "AVI / FCC Integration"
  ]
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

class CvFrameCard extends BaseComponent {
  constructor() {
    super("article", "cv-card");
    const note =
      "The embedded PDF below is the original file, with the portfolio sections above translating it into a cleaner web view.";
    const frame = document.createElement("iframe");
    frame.className = "cv-frame";
    frame.src = "./Louis_Jefthas_CV.pdf";
    frame.title = "Louis Jefthas CV PDF";
    this.append(this.text("p", "cv-frame-note", note));
    this.append(frame);
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
  card.append(card.text("span", "hero-band", "Portfolio + CV Web View"));
  copy.append(card.text("h1", "", portfolioData.person.name));
  copy.append(card.text("p", "", portfolioData.person.summary));
  [
    portfolioData.person.location,
    portfolioData.person.phone,
    portfolioData.person.email,
    portfolioData.person.linkedin
  ].forEach((line) => meta.append(buildPill(line)));
  layout.append(copy, meta);
  root.append(card.append(layout));
}

function buildPill(text) {
  const pill = document.createElement("div");
  pill.className = "pill";
  pill.textContent = text;
  return pill;
}

function renderHighlights() {
  const root = document.querySelector("#highlights");
  const card = new SectionCard(
    "Production-minded software delivery",
    "From The CV",
    "The CV centers on real production software work: legacy modernization, protocol integration, diagnostics, updates, and support under operational pressure."
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
    "Current App Work",
    "One Directory Up",
    "This portfolio design deliberately merges cues from the two active Flutter projects nearby: Pump Pal contributes the darker fuel-tech edge, while Progression contributes the warmer editorial glass surfaces.",
    true
  );
  const grid = document.createElement("div");
  grid.className = "project-grid";
  portfolioData.projects.forEach((item) => grid.append(new ProjectCard(item).element));
  root.append(card.append(grid));
}

function renderCvView() {
  const root = document.querySelector("#cv-view");
  const card = new SectionCard(
    "CV View",
    "Original Document",
    `Key project themes in the CV include ${portfolioData.cvProjects.join(", ")}.`
  );
  root.append(card.append(new CvFrameCard().element));
}

function init() {
  renderHero();
  renderHighlights();
  renderExperience();
  renderProjects();
  renderCvView();
}

init();
