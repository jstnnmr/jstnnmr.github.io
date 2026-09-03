/* ==========================================================================
   YOUR PORTFOLIO DATA — EDIT EVERYTHING HERE
   ========================================================================== */

const portfolioData = {
  /* ---------- PROFILE ---------- */
  name: "Justinne Marie Namoc",
  role: "Full Stack Developer",            // your job title
  tagline: "fortunes favors the bold.",
  about: `
    A goal-oriented and self-motivated Full Stack Developer with a strong foundation in web development and a passion for creating innovative solutions. 
    Magna Cum Laude graduate, Pasig City Scholar, and a working student. I offer my hard work, dedication, and a commitment to excellence in every project I undertake.`,
  resumeUrl: "img/NAMOC-CV.pdf",                              // link to your resume PDF
  photoInitial: "JM",                           // letter shown while no photo is set
  photoSrc: "img/me.jpg",                                // e.g. "img/me.jpg" — keep "" to use the initial

  /* Quick facts shown on the ID card (label: value). Email is drawn
     from `contact.email` below, so skip it here. */
  facts: [
    { label: "Location", value: "Pasig City, Country" },
    { label: "Education", value: "BSIT" },
  ],

  /* ---------- WORK HISTORY ---------- */
  experience: [
    {
      role: "Software Developer Intern",
      company: "Blue Aurora Solutions Inc.",
      period: "March 2026 – July 2026",
      description: "Developed, debugged, and reviewed backend functionality using PHP and Laravel within a collaborative software-development team. ",
      bullets: [
        "Created 10+ endpoints for the company's application.",
        "Fixed bugs and improved the performance of existing features.",
        "Tested new features and reported issues.",
      ],
    },
    {
      role: "Customer Service Representative",
      company: "Concentrix Philippines",
      period: "April 2025 – January 2026",
      description: "Resolved technical and operational concerns involving bookings, partner accounts, and platform navigation for hotel partners.",
      bullets: [
        "Investigated financial-account queries and complex system issues to deliver accurate, policy-aligned solutions.",
        "Assisted in training new team members on customer service protocols.",
      ],
    },
  ],

  /* ---------- PERSONAL PROJECTS ----------
     Per project you can add:
       longDescription  — longer write-up shown in the enlarged detail view
       images           — array of photo paths, e.g. ["img/project-one-1.jpg", "img/project-one-2.jpg"]
       download         — { label, url } for a downloadable file (PDF, ZIP, case study…)
     Every field except `title` and `description` is optional. */
  projects: [
    {
      title: "EaseTask",
      description: "Full-stack productivity task management application built with Laravel 12.",
      longDescription: "Developed CRUD functionality for subjects, tasks, and categories; integrated a Groq-powered AI assistant; and built team collaboration features including email invites, automated overdue reminders, and a gamified points system.",
      tech: ["Laravel", "PHP", "Groq AI"],
      link: "#",                                 // live demo or GitHub link
      repo: "https://github.com/jstnnmr/crud-api-task.git",
      download: { label: "Case study PDF", url: "#" },
      images: [
        "img/easetask/et1.png",
        "img/easetask/et2.png",
        "img/easetask/et3.png",
        "img/easetask/et4.png",
        "img/easetask/et5.png",
        "img/easetask/et6.png",
      ],
    },
    {
      title: "Dawn of Revival",
      description: "Educational 3D role-playing game built with Godot Engine and deployed via Hostinger.",
      longDescription: "Built core gameplay systems using Godot Engine (GDScript), PHP, and MySQL — including user account creation and authentication, 3D world exploration, an inventory and crafting management system, and a real-time combat system.",
      tech: ["Godot", "GDScript", "PHP", "MySQL"],
      link: "https://drive.google.com/file/d/1447NCiKvyXpTNqHjuSews2EfVkp3T8pM/view?usp=sharing",
      linkLabel: "Demo Video",
      repo: "#",
      images: [
        "img/dawnofrevival/Login Screen (2).png",
        "img/dawnofrevival/Main Screen (2).png",
        "img/dawnofrevival/Register Screen (2).png",
      ],
    },
    {
      title: "Pet Booking & Café Ordering System",
      description: "Web-based scheduling and ordering platform for pet bookings and café orders.",
      longDescription: "Built a web-based scheduling and ordering platform using HTML, CSS, JavaScript, PHP, and MySQL, allowing customers to book services and place café orders online.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "#",
      repo: "https://github.com/jstnnmr/tubncup.git",
      images: [
        "img/tnc/tnc1.png",
        "img/tnc/tnc2.png",
        "img/tnc/tnc3.png",
      ],
    },
    {
      title: "Web-Based Salon Management System",
      description: "Scheduling system for salons with a focus on visual harmony and usability.",
      longDescription: "Assisted in developing a scheduling system, focusing on visual harmony, usability, and consistent UI design using Figma.",
      tech: ["Figma", "UI/UX"],
      link: "https://www.figma.com/proto/sfVGWbfjeruHpq68O5AOX1/Salon-Management-System?node-id=4-277&starting-point-node-id=4%3A50&scaling=scale-down&content-scaling=fixed&t=nlBK4h0pNuandAPz-1",
      linkLabel: "View Prototype",
      repo: "#",
      images: [
        "img/salon/Screenshot 2026-09-04 002552.png",
        "img/salon/Screenshot 2026-09-04 002605.png",
        "img/salon/Screenshot 2026-09-04 002623.png",
        "img/salon/Screenshot 2026-09-04 002631.png",
        "img/salon/Screenshot 2026-09-04 002638.png",
      ],
    },
    {
      title: "Academic Planner Application",
      description: "Android-based task management app for students.",
      longDescription: "Assisted in building an Android-based task management application for students using Java in Android Studio.",
      tech: ["Java", "Android Studio"],
      link: "#",
      repo: "#",
      images: [
        "img/academicplanner/Screenshot 2026-09-04 011914.png",
        "img/academicplanner/Screenshot 2026-09-04 011922.png",
        "img/academicplanner/Screenshot 2026-09-04 011930.png",
        "img/academicplanner/Screenshot 2026-09-04 011936.png",
        "img/academicplanner/Screenshot 2026-09-04 011948.png",
        "img/academicplanner/Screenshot 2026-09-04 011954.png",
        "img/academicplanner/Screenshot 2026-09-04 012000.png",
        "img/academicplanner/Screenshot 2026-09-04 012015.png",
        "img/academicplanner/Screenshot 2026-09-04 012023.png",
        "img/academicplanner/Screenshot 2026-09-04 012031.png",
      ],
    },
    {
      title: "Pose N Snap",
      description: "UI/UX design for an online photobooth platform — snap, customize, and download photos with premium extras.",
      longDescription: "Conceptualized and designed the complete online photobooth experience in Figma. Includes a snap page where users take, customize, and download their pictures, a login page for creating accounts and signing in, and premium features for a better experience — like unlimited snaps and featured stickers.",
      tech: ["Figma", "UI/UX"],
      link: "https://www.figma.com/proto/n7eVDLZ6tYZk2JefZSvGlA/Pose-N-Snap?node-id=167-235",
      linkLabel: "View Prototype",
      repo: "#",
      images: [
        "img/posensnap/p1.png",
        "img/posensnap/p2.png",
        "img/posensnap/p3.png",
        "img/posensnap/p4.png",
        "img/posensnap/p5.png",
        "img/posensnap/p6.png",
        "img/posensnap/p7.png",
      ],
    },
    {
      title: "CraveCart",
      description: "UI/UX design for an online food delivery platform (Foodpanda & GrabFood style) — account, map, restaurants, cart, checkout, and favorites.",
      longDescription: "Designed the full food-delivery experience in Figma: account registration and login, a map-based location picker, and a featured-restaurants landing page shown once logged in. Includes the restaurant interface with its menu, a cart page that lists every item added, an order-status view after checkout, and a favorites section for saved restaurants.",
      tech: ["Figma", "UI/UX"],
      link: "https://www.figma.com/proto/YpcXXd3eRD1LSoOfwTaLr9/CraveCart-Interface?node-id=2003-8",
      linkLabel: "View Prototype",
      repo: "#",
      images: [
        "img/cravecart/cc1.png",
        "img/cravecart/cc2.png",
        "img/cravecart/cc3.png",
      ],
    },
  ],

  /* ---------- SKILLS ---------- */
  skills: ["Software Development", "Web Development", "Database Management", "Problem Solving", "Team Collaboration", "Communication", "Adaptability", "Time Management"],

  /* ---------- TOOLS ---------- */
  tools: ["VS Code", "Figma", "Postman", "Github", "HeidiSQL","XAMPP","Herd", "Godot", "DBeaver"],

  /* ---------- STACK (grouped) ---------- */
  stack: [
    { category: "Programming Languages",  items: ["PHP","Java","JavaScript","HTML","CSS","SQL","GDScript"] },
    { category: "Frameworks & Databases", items: ["Laravel","MySQL","Database Management","Database Administration"] },
    { category: "Tools & Platforms",      items: ["Git","GitHub","Postman","Swagger","API Testing","API Documentation","DBeaver","TestFlight","VS Code","XAMPP","Android Studio","Godot Engine","NetBeans","Figma"] },
    { category: "Concepts & Methods",     items: ["Full-Stack Development","SDLC","OOP","Debugging","Code Review","Agile Collaboration","UI/UX Design","System Troubleshooting"] },
    { category: "AI & Productivity Tools",items: ["GitHub Copilot","ChatGPT/Claude","Prompt Engineering","AI-Driven Debugging","Code Optimization","Workflow Automation"] },
  ],

  /* ---------- CONTACT ---------- */
  contact: {
    email: "jmnamoc00@gmail.com",
    links: [
      { label: "GitHub",     url: "https://github.com/jstnnmr" },
      { label: "LinkedIn",   url: "https://www.linkedin.com/in/jstnnmr/" },
      { label: "Contact", url: "09616482317" },
    ],
  },
};