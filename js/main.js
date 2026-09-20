/**
 * Kinetic Obsidian Portfolio - Main Scripts
 * Author: Rahul Kumar Singh
 */

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('mobile-icon-open');
  const iconClose = document.getElementById('mobile-icon-close');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('menu-open');
      if (isOpen) {
        mobileMenu.classList.remove('menu-open');
        mobileMenu.classList.add('menu-closed');
        toggleBtn.setAttribute('aria-expanded', 'false');
        if (iconOpen && iconClose) {
          iconOpen.classList.remove('hidden');
          iconClose.classList.add('hidden');
        }
      } else {
        mobileMenu.classList.remove('menu-closed');
        mobileMenu.classList.add('menu-open');
        toggleBtn.setAttribute('aria-expanded', 'true');
        if (iconOpen && iconClose) {
          iconOpen.classList.add('hidden');
          iconClose.classList.remove('hidden');
        }
      }
    });

    // Close menu when tapping any mobile link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('menu-open');
        mobileMenu.classList.add('menu-closed');
        toggleBtn.setAttribute('aria-expanded', 'false');
        if (iconOpen && iconClose) {
          iconOpen.classList.remove('hidden');
          iconClose.classList.add('hidden');
        }
      });
    });
  }

  // Realtime Nepal Clock (UTC +5:45)
  const clockElement = document.getElementById('nepal-clock');
  if (clockElement) {
    const updateNepalClock = () => {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const nepalTime = new Date(utc + (3600000 * 5.75));
      
      const hours = String(nepalTime.getHours()).padStart(2, '0');
      const minutes = String(nepalTime.getMinutes()).padStart(2, '0');
      const seconds = String(nepalTime.getSeconds()).padStart(2, '0');

      clockElement.textContent = `${hours}:${minutes}:${seconds} NPT (UTC+5:45)`;
    };
    updateNepalClock();
    setInterval(updateNepalClock, 1000);
  }

  // Active Link Highlight matching current path
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a, #mobile-menu a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('bg-surface-container-high', 'text-on-surface');
      link.classList.remove('text-on-surface-variant');
    }
  });

  // Project Filter Logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('active', 'bg-primary-container', 'text-on-primary-container', 'shadow-sm');
          b.classList.add('text-on-surface-variant');
        });
        btn.classList.add('active', 'bg-primary-container', 'text-on-primary-container', 'shadow-sm');
        btn.classList.remove('text-on-surface-variant');

        const filter = btn.getAttribute('data-filter');
        projectCards.forEach(card => {
          const category = card.getAttribute('data-category') || '';
          if (filter === 'all' || category.includes(filter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});

// Project Data for Interactive Modal
const projectsData = {
  p1: {
    index: "01",
    category: "IT / Cybersecurity",
    title: "IT & Cybersecurity Field Research",
    period: "Spring 2024 • Academic Field Study",
    description: "A research-based academic project focused on understanding modern IT and cybersecurity practices through corporate interviews, perimeter observations, and infrastructure vulnerability modeling.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYuxkpZiNfEQXCCOs0VLINX3GAzSmZgvtIKUfEToZiRvn7YiY-jKAP9lAbbOcf_wEesDGsWSxw-P7FtsI7fwaNY46s93netayhN847W-fW_X-mW-vmfqsXr4PhoiGxzkal8xAR6lT4304KZoX6mB4xt17BR9Qsfr9PFVP3kvhH1OMK7QeMFKbGVuuqCmvN5xodBcHaRd14eTulrujvy-LFkgWuPYNmp87hzVhVab5aezy_5di5aYzf5g",
    details: [
      { label: "Core Scope", val: "Perimeter defense mapping, role-based access audits, and incident escalation protocols." },
      { label: "Methodology", val: "On-site structured interviews, threat modeling diagrams, and corporate compliance review." },
      { label: "Key Outcome", val: "Synthesized a 40-page technical evaluation outlining critical security vulnerability patterns in regional mid-market IT deployments." }
    ],
    tags: ["IT Infrastructure", "Cybersecurity", "Zero-Trust", "Field Interviews", "Threat Modeling"]
  },
  p2: {
    index: "02",
    category: "Graphic Design",
    title: "Creative Poster Design",
    period: "Winter 2024 • Visual Studies",
    description: "A collection of digital poster concepts created to explore strict visual hierarchy, typography, composition and Swiss modernist graphic design principles.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzcGAjSVheMgAlxNz8hH_zFbzqun_IrdfKZmeXMyzMcgoG8-kfCHbs73ko7FLnHJ9pNkhVl9b9CrOMRN0FKQUeaLi8HKUOHaYflLTPQKEmeLrFnbnhGiIuwvNZPQ23uR7iNkT9IpIYRjrCB4tZErO1oAIHUdQxBe9756nsJTt1AYArrOmMb8x1BsMOfKlY6sHLpQkrdWRO0U-3inIeio_NY7gVxGNsmSfN70jBRqen0HxnFqbFYbi8kA",
    details: [
      { label: "Design System", val: "Derived from modernist Swiss typographic standards with strict modular grid subdivisions." },
      { label: "Tools Used", val: "Adobe Illustrator, Photoshop, Custom Raster Grid Generators." },
      { label: "Focus", val: "Asymmetrical tension, brutalist typographic scale, and purposeful whitespace modulation." }
    ],
    tags: ["Graphic Design", "Typography", "Visual Hierarchy", "Editorial Print", "Swiss Style"]
  },
  p3: {
    index: "03",
    category: "UI/UX Design",
    title: "UI/UX Design Exploration",
    period: "2024 • Product Systems",
    description: "Interface design experiments focused on creating clean, intuitive and visually consistent digital experiences across responsive viewport constraints.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdpT-ymEt25kaxosIKZHaCupw8LairVdKupvK0AjqwgnUGrrJwZUI1cFeN1Rwxdbky-aIUBPh8MkPfqFFXHeqR0d-PXYo77RG_Jt3h9oIQSc7qI53OTlO98p1FaU7gWLAFzvcyGOkTp35X2swZr16q8MB_YZUw-BQ20PectvvEtj7fUR6Teie29_7bqvxX9aY8Ccg-m6HYIZgflZtN5mkgeeOT2_pWbn2sZxmN65UledV6CKYpIRV2cQ",
    details: [
      { label: "User Focus", val: "Streamlining complex enterprise workflows into atomic, digestible dashboard interactions." },
      { label: "Design Token Architecture", val: "Constructed comprehensive Material Design 3 semantic token palettes with dark-mode first contrast." },
      { label: "Deliverables", val: "High-fidelity interactive Figma component libraries and multi-state view templates." }
    ],
    tags: ["UI/UX", "Interface Design", "Prototyping", "Figma Design System", "Dark Mode"]
  },
  p4: {
    index: "04",
    category: "Web Design / AI",
    title: "AI-Assisted Web Design",
    period: "2024 • R&D Experiment",
    description: "An exploration of using AI-powered design tools to transform ideas and concepts into modern website interfaces and functional frontend prototypes.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiQ1lykIWpHyZ5QqXt2eR7A_OyWk1LFy_qnAkDKfWNy6bvLM0gBN-dYk6Sq1z7zRJeAVXMWk9cjdgsCF118v2NhEucSOIKivLBqrRZ1zeJ14_vkXzbyTVQuck6CMxVy3Qob2GX5u0ZuH5PES9rHqni-QzkMWFQPaxsCZ1VsvR-OxfggKW9yOw1YOxKwDUWLymOBpiTyS-xaZ81F2iuGH7LLMsqFHkm0iqQxku20HkV4Enr7I_wEszw3g",
    details: [
      { label: "Pipeline", val: "Prompt-to-layout architectural mapping paired with automated Tailwind CSS token generation." },
      { label: "Efficiency Gain", val: "Reduced wireframe ideation cycle from days to hours while maintaining clean semantic DOM structure." },
      { label: "Technical Stack", val: "AI LLM APIs, Tailwind CSS, Vanilla Web Components, Figma Plugin API." }
    ],
    tags: ["AI", "Web Design", "Prototyping", "Prompt Engineering", "Frontend Architecture"]
  },
  p5: {
    index: "05",
    category: "Creative Technology",
    title: "Digital Creative Experiments",
    period: "2024 • Creative Technology Lab",
    description: "A collection of experiments combining graphic design, AI tools and digital creativity to explore new visual ideas and interactive mediums.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6-IUMzxDOQqwii7h-NiXcMn_R7E929qDMdk6FPblZoetrAYTIwKOH4y_jI9a6KMNU1_wkeFcorsjGud_I8tiV6dlTQrQWmbbye2K2vSQGay6bJMs7qr3miuE3uqBkO9GsPW54iDMGO7SIk-pdUrb4InlzNqF_S7KCyMEKjfhcOYM11GVoNiGfkZ3E76zhtbe7l40fBj-RIDnxZHUON9UvabAdj-Mhiy9C-JltfTNItQvnF0Ts_Hwakg",
    details: [
      { label: "Creative Direction", val: "Exploration of procedural organic forms generated via deterministic mathematical functions." },
      { label: "Interaction", val: "Cursor-reactive velocity shaders and harmonic oscillation ribbons." },
      { label: "Technologies", val: "WebGL, Three.js, GLSL fragment shaders, Generative AI visual pipelines." }
    ],
    tags: ["AI Design", "Creative Technology", "Shaders", "Generative Art", "Interactive Web"]
  }
};

// Modal functions
window.openProjectModal = function(projectId) {
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');
  const data = projectsData[projectId];
  if (!modal || !modalContent || !data) return;

  modalContent.innerHTML = `
    <div class="flex items-center gap-3">
      <span class="font-code-md text-code-md text-primary font-medium">${data.index}</span>
      <span class="inline-flex px-3 py-1 rounded-full font-label-caps text-label-caps uppercase bg-surface-container text-tertiary">${data.category}</span>
      <span class="font-label-caps text-label-caps text-on-surface-variant ml-auto mr-12 sm:mr-10">${data.period}</span>
    </div>

    <div class="flex flex-col gap-2">
      <h3 class="font-headline-lg text-headline-lg text-on-surface font-medium">${data.title}</h3>
      <p class="font-body-lg text-body-lg text-on-surface-variant">${data.description}</p>
    </div>

    <div class="w-full h-64 sm:h-80 rounded-xl overflow-hidden bg-surface-container-lowest relative shadow-inner">
      <img src="${data.image}" alt="${data.title}" class="w-full h-full object-cover">
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
      ${data.details.map(item => `
        <div class="p-4 rounded-lg bg-surface-container flex flex-col gap-1.5">
          <span class="font-label-caps text-label-caps uppercase text-tertiary">${item.label}</span>
          <p class="font-body-sm text-body-sm text-on-surface-variant">${item.val}</p>
        </div>
      `).join('')}
    </div>

    <div class="flex flex-wrap gap-2 pt-2">
      ${data.tags.map(tag => `
        <span class="px-3 py-1 rounded bg-surface-container font-code-md text-code-md text-on-surface-variant">#${tag}</span>
      `).join('')}
    </div>

    <div class="flex items-center justify-between pt-4 mt-2 border-t border-outline-variant/20">
      <span class="font-code-md text-body-sm text-on-surface-variant">Rahul Kumar Singh / Portfolio Archive</span>
      <button type="button" onclick="closeProjectModal()" class="px-5 py-2 rounded-full bg-surface-bright text-on-surface font-label-caps text-label-caps uppercase hover:bg-surface-variant transition-colors">
        Close Preview
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
};

window.closeProjectModal = function() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
};

// Close modal when clicking outside or pressing Escape
document.addEventListener('click', (e) => {
  const modal = document.getElementById('project-modal');
  if (modal && e.target === modal) {
    window.closeProjectModal();
  }
});

document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('project-modal');
  if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
    window.closeProjectModal();
  }
});

// Copy Email Utility
window.copyEmailToClipboard = function() {
  const email = "rahulsingh97052@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    const copyText = document.getElementById("copy-text");
    const copyIcon = document.getElementById("copy-icon");
    if (copyText && copyIcon) {
      copyText.innerText = "Copied to Clipboard!";
      copyIcon.innerText = "check";
      setTimeout(() => {
        copyText.innerText = "Copy Address";
        copyIcon.innerText = "content_copy";
      }, 2400);
    }
  }).catch(err => {
    console.error("Clipboard copy failed: ", err);
  });
};

// Character Counter
window.updateCharCount = function(textarea) {
  const counter = document.getElementById("char-counter");
  if (counter && textarea) {
    counter.textContent = `${textarea.value.length} / 800`;
  }
};

// Contact Form Handler
window.handleFormSubmit = function(event) {
  event.preventDefault();
  const btnText = document.getElementById("btn-text");
  const btnSpinner = document.getElementById("btn-spinner");
  const btnIcon = document.getElementById("btn-icon");
  const submitBtn = document.getElementById("submit-btn");
  const toast = document.getElementById("success-toast");

  if (btnText && btnSpinner && btnIcon && submitBtn) {
    btnText.innerText = "Transmitting...";
    btnSpinner.classList.remove("hidden");
    btnIcon.classList.add("hidden");
    submitBtn.disabled = true;
  }

  setTimeout(() => {
    if (btnSpinner && btnIcon && submitBtn) {
      btnSpinner.classList.add("hidden");
      btnIcon.classList.remove("hidden");
      submitBtn.disabled = false;
    }
    if (toast) {
      toast.classList.remove("hidden");
    }
  }, 900);
};

window.resetContactForm = function() {
  const form = document.getElementById("contact-form");
  const toast = document.getElementById("success-toast");
  const btnText = document.getElementById("btn-text");
  const counter = document.getElementById("char-counter");
  
  if (form) form.reset();
  if (counter) counter.textContent = "0 / 800";
  if (btnText) btnText.innerText = "Send Message";
  if (toast) toast.classList.add("hidden");
};
