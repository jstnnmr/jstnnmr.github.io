/* ==========================================================================
   PORTFOLIO SCRIPT — renders data.js into the HUD layout
   ========================================================================== */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const data = portfolioData;

  /* ---------- ICONS (authored SVG, one consistent weight) ---------- */
  const icons = {
    github:
      "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.47 5.92.43.37.82 1.11.82 2.24 0 1.62-.01 2.93-.01 3.32 0 .32.22.7.83.58C20.56 21.79 24 17.3 24 12 24 5.37 18.63 0 12 0z",
    linkedin:
      "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43c-1.14 0-2.07-.93-2.07-2.07 0-1.14.93-2.07 2.07-2.07 1.14 0 2.07.93 2.07 2.07 0 1.14-.93 2.07-2.07 2.07zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.73v20.53C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.73C24 .78 23.2 0 22.22 0z",
    x:
      "M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82L5.5 21.75H2.18l7.73-8.84L1.75 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L6.98 4.13H5.02l12.06 15.64z",
    mail:
      "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
    external:
      "M19 19H5V5h7V3H5c-1.11 0-2 .89-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zm-9-4.59L17.58 7H13V5h9v9h-2V9.41L9.41 17l-1.41-1.41z",
    download:
      "M13 3h-2v10.17l-3.59-3.58L6 11l6 6 6-6-1.41-1.41L13 13.17V3zM4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3h-2v3H6v-3H4z",
    chevronLeft:
      "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z",
    chevronRight:
      "M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z",
  };

  function pickIcon(url, label) {
    const l = label.toLowerCase();
    if (/^mailto:/i.test(url)) return icons.mail;
    if (l.includes("github")) return icons.github;
    if (l.includes("linked")) return icons.linkedin;
    if (l.includes("x") || l.includes("twitter")) return icons.x;
    return icons.external;
  }

  function shortLabel(url) {
    if (/^mailto:/i.test(url)) return url.replace(/^mailto:/i, "");
    return url.replace(/^https?:\/\/(www\.)?/i, "");
  }

  /* ---------- PERSONNEL ID CARD ---------- */
  document.getElementById("cardName").textContent = data.name;
  document.getElementById("cardRole").textContent = data.role;
  document.getElementById("cardTagline").textContent = data.tagline;

  const initial = data.photoInitial || data.name.charAt(0).toUpperCase();
  const photoEl = document.getElementById("cardPhoto");
  const initialEl = document.getElementById("cardInitial");

  if (data.photoSrc) {
    const img = document.createElement("img");
    img.src = data.photoSrc;
    img.alt = `Portrait of ${data.name}`;
    photoEl.appendChild(img);
    initialEl.style.display = "none";
  } else {
    initialEl.textContent = initial;
  }

  const year = new Date().getFullYear();
  const serial = String(1000 + ((data.name.length * 641 + 13) % 9000));
  document.getElementById("cardIdNumber").textContent = `${initial}-${year}-${serial}`;
  document.getElementById("cardLevel").textContent = data.cardLevel || "03";
  document.title = `${data.name} — Portfolio`;

  /* Key facts */
  const factsEl = document.getElementById("cardFacts");
  data.facts.forEach((fact) => {
    if (/email/i.test(fact.label)) return;
    const row = document.createElement("div");
    row.className = "card-fact";
    const dt = document.createElement("dt");
    dt.textContent = `// ${fact.label}`;
    const dd = document.createElement("dd");
    dd.textContent = fact.value;
    row.append(dt, dd);
    factsEl.appendChild(row);
  });

  /* Links */
  const linksEl = document.getElementById("cardLinks");
  function addLink(url, label) {
    const li = document.createElement("li");
    li.innerHTML = `
      <a class="card-link" href="${url}" target="_blank" rel="noopener" aria-label="${label}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="${pickIcon(url, label)}"/></svg>
        <span class="handle">${shortLabel(url)}</span>
      </a>
    `;
    linksEl.appendChild(li);
  }
  addLink(`mailto:${data.contact.email}`, "Email");
  data.contact.links.forEach((l) => addLink(l.url, l.label));

  /* Barcode */
  const barcode = document.getElementById("cardBarcode");
  for (let i = 0; i < 26; i++) {
    const bar = document.createElement("span");
    bar.style.width = (Math.random() > 0.4 ? 2 : 1) + "px";
    bar.style.opacity = (0.35 + Math.random() * 0.6).toFixed(2);
    barcode.appendChild(bar);
  }

  /* Clock + zone */
  const clock = document.getElementById("clock");
  const zone = document.getElementById("zone");
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  zone.textContent = `TZ // ${tz.replace(/_/g, " ")}`;
  const tick = () => {
    clock.textContent = new Date().toLocaleTimeString([], {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };
  tick();
  setInterval(tick, 1000);

  /* ---------- ABOUT ---------- */
  document.getElementById("aboutBio").textContent = data.about.trim();
  const resumeLink = document.getElementById("resumeLink");
  if (resumeLink && data.resumeUrl && data.resumeUrl !== "#") {
    resumeLink.href = data.resumeUrl;
    resumeLink.setAttribute("download", "");
  }

  /* ---------- WORK HISTORY ---------- */
  const expEl = document.getElementById("experienceList");
  data.experience.forEach((job) => {
    const item = document.createElement("article");
    item.className = "timeline-item reveal";
    item.innerHTML = `
      <div class="job-head">
        <h3 class="job-role">${job.role}</h3>
        <span class="job-company">${job.company}</span>
        <span class="job-period">${job.period}</span>
      </div>
      <p class="job-desc">${job.description}</p>
      ${job.bullets.length ? `<ul class="job-bullets">${job.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>` : ""}
    `;
    expEl.appendChild(item);
  });

  /* ---------- PERSONAL PROJECTS ---------- */
  const projEl = document.getElementById("projectsList");
  data.projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    const thumb =
      project.images && project.images[0]
        ? `<img src="${project.images[0]}" alt="${project.title} screenshot" loading="lazy" />`
        : `<span class="project-monogram" aria-hidden="true">${initial}</span>`;
    const hasDownload =
      project.download && project.download.url && project.download.url !== "#";
    card.innerHTML = `
      <div class="project-media" data-open="${project.title}">
        ${thumb}
        <button class="project-expand" data-open="${project.title}" aria-label="Open ${project.title} project details">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="${icons.external}"/></svg>View
        </button>
      </div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tech">${project.tech.map((t) => `<span>${t}</span>`).join("")}</div>
      <div class="project-links">
        ${project.link && project.link !== "#" ? `<a href="${project.link}" target="_blank" rel="noopener">${project.linkLabel || "Live"} <svg viewBox="0 0 24 24" aria-hidden="true"><path d="${icons.external}"/></svg></a>` : ""}
        ${project.repo && project.repo !== "#" ? `<a href="${project.repo}" target="_blank" rel="noopener">Source <svg viewBox="0 0 24 24" aria-hidden="true"><path d="${icons.external}"/></svg></a>` : ""}
        ${hasDownload ? `<a class="download-link" href="${project.download.url}" download>${project.download.label || "Download"} <svg viewBox="0 0 24 24" aria-hidden="true"><path d="${icons.download}"/></svg></a>` : ""}
        <button class="open-chip" data-open="${project.title}">Details</button>
      </div>
    `;
    card.querySelectorAll("[data-open]").forEach((el) =>
      el.addEventListener("click", () => openProject(project.title))
    );
    projEl.appendChild(card);
  });

  /* ---------- PROJECT DETAIL OVERLAY ---------- */
  const overlayEl = document.getElementById("projectOverlay");
  const overlayClose = document.getElementById("overlayClose");
  const galleryEl = document.getElementById("overlayGallery");
  const overlayTitle = document.getElementById("overlayTitle");
  const overlayTech = document.getElementById("overlayTech");
  const overlayDesc = document.getElementById("overlayDesc");
  const overlayActions = document.getElementById("overlayActions");
  const state = { project: null, index: 0, lastFocus: null };

  function renderGallery() {
    const imgs = (state.project && state.project.images) || [];
    galleryEl.innerHTML = "";
    const frame = document.createElement("div");
    frame.className = "overlay-photo";
    if (imgs.length) {
      const img = document.createElement("img");
      img.src = imgs[state.index];
      img.alt = `${state.project.title} photo ${state.index + 1}`;
      frame.appendChild(img);
      if (imgs.length > 1) {
        const counter = document.createElement("span");
        counter.className = "gallery-counter";
        counter.textContent = `${state.index + 1} / ${imgs.length}`;
        frame.appendChild(counter);
      }
    } else {
      frame.innerHTML = `
        <span class="gallery-monogram" aria-hidden="true">${initial}<span class="sub">No capture on file</span></span>
      `;
    }
    galleryEl.appendChild(frame);

    if (imgs.length > 1) {
      ["gallery-prev", "gallery-next"].forEach((dir, i) => {
        const btn = document.createElement("button");
        btn.className = `gallery-nav ${dir}`;
        btn.setAttribute("aria-label", dir === "gallery-prev" ? "Previous photo" : "Next photo");
        btn.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${i === 0 ? icons.chevronLeft : icons.chevronRight}"/></svg>`;
        btn.addEventListener("click", () => {
          state.index = (state.index + (i === 0 ? -1 : 1) + imgs.length) % imgs.length;
          renderGallery();
        });
        galleryEl.appendChild(btn);
      });
    }
  }

  function renderOverlay() {
    const p = state.project;
    overlayTitle.textContent = p.title;
    overlayTech.innerHTML = p.tech.map((t) => `<span>${t}</span>`).join("");
    overlayDesc.textContent = p.longDescription || p.description;
    const hasLink = p.link && p.link !== "#";
    const hasSource = p.repo && p.repo !== "#";
    const hasDownload = p.download && p.download.url && p.download.url !== "#";
    overlayActions.innerHTML = `
      ${hasLink ? `<a class="btn" href="${p.link}" target="_blank" rel="noopener">${p.linkLabel || "Live Demo"}</a>` : ""}
      ${hasSource ? `<a class="btn" href="${p.repo}" target="_blank" rel="noopener">Source Code</a>` : ""}
      ${hasDownload ? `<a class="btn btn-download" href="${p.download.url}" download>${p.download.label || "Download file"}</a>` : ""}
    `;
  }

  function openProject(title) {
    const p = data.projects.find((x) => x.title === title);
    if (!p) return;
    state.project = p;
    state.index = 0;
    state.lastFocus = document.activeElement;
    renderGallery();
    renderOverlay();
    overlayEl.hidden = false;
    document.body.style.overflow = "hidden";
    overlayClose.focus();
  }

  function closeProject() {
    if (overlayEl.hidden) return;
    overlayEl.hidden = true;
    document.body.style.overflow = "";
    if (state.lastFocus) state.lastFocus.focus();
  }

  overlayClose.addEventListener("click", closeProject);
  overlayEl.addEventListener("click", (e) => {
    if (e.target === overlayEl) closeProject();
  });
  document.addEventListener("keydown", (e) => {
    if (overlayEl.hidden) return;
    if (e.key === "Escape") {
      e.preventDefault();
      closeProject();
      return;
    }
    if (e.key === "Tab") {
      const focusables = overlayEl.querySelectorAll(
        "a[href], button:not([disabled])"
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  /* ---------- NAVIGATION ---------- */
  const navLinks = document.querySelectorAll(".nav a[data-nav]");
  const contentEl = document.querySelector(".content");
  const contentScroller = getComputedStyle(contentEl).position === "fixed";
  function scrollToPanel(id) {
    const target = document.getElementById(id);
    if (!target) return;
    if (contentScroller) {
      contentEl.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  navLinks.forEach((a) =>
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const id = a.getAttribute("data-nav");
      if (id === "top") {
        contentEl.scrollTo({ top: 0, behavior: "smooth" });
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      scrollToPanel(id);
    })
  );

  const navMap = {};
  navLinks.forEach((a) => {
    const id = a.getAttribute("data-nav");
    if (id && id !== "top") navMap[id] = a;
  });
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((a) => a.classList.remove("active"));
          const link = navMap[entry.target.id];
          if (link) link.classList.add("active");
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );
  document.querySelectorAll(".panel").forEach((p) => navObserver.observe(p));

  /* ---------- SKILLS & TOOLS ---------- */
  const skillsEl = document.getElementById("skillsList");
  data.skills.forEach((skill) => {
    const chip = document.createElement("span");
    chip.className = "chip reveal";
    chip.textContent = skill;
    skillsEl.appendChild(chip);
  });

  const toolsEl = document.getElementById("toolsList");
  data.tools.forEach((tool) => {
    const chip = document.createElement("span");
    chip.className = "chip chip-tool reveal";
    chip.textContent = tool;
    toolsEl.appendChild(chip);
  });

  /* ---------- STACK ---------- */
  const stackEl = document.getElementById("stackList");
  data.stack.forEach((group) => {
    const grp = document.createElement("div");
    grp.className = "stack-group reveal";
    grp.innerHTML = `
      <p class="stack-cat">${group.category}</p>
      <div class="stack-items">${group.items.map((i) => `<span class="stack-item">${i}</span>`).join("")}</div>
    `;
    stackEl.appendChild(grp);
  });

  /* ---------- FOOTER ---------- */
  document.getElementById("year").textContent = year;
  document.getElementById("footerName").textContent = data.name;

  /* ---------- SCROLL REVEAL ---------- */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});