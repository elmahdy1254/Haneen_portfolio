// ===================== DYNAMIC TITLE =====================
const roles = [
  "Senior General Accountant",
  "Finance Professional",
  "Accounting Operations Specialist",
  "Business Administration Graduate"
];

const typingText = document.getElementById("typingText");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
  if (!typingText) return;
  const currentRole = roles[roleIndex];

  if (!deleting) {
    typingText.textContent = currentRole.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeRole, 1300);
      return;
    }
    setTimeout(typeRole, 80);
  } else {
    typingText.textContent = currentRole.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 350);
      return;
    }
    setTimeout(typeRole, 45);
  }
}

typeRole();

// ===================== MOBILE NAVBAR =====================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// ===================== ACTIVE NAV LINK =====================
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach(section => {
    const top = section.offsetTop - 140;
    if (window.scrollY >= top) current = section.getAttribute("id");
  });

  navItems.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});

// ===================== CONTACT FORM =====================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    const mailSubject = encodeURIComponent(subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:Haneenelmahdy480@gmail.com?subject=${mailSubject}&body=${body}`;
  });
}
