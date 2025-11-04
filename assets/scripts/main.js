// Smooth scroll for nav links + fade-in animation + typewriter
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll
  document.querySelectorAll('nav.main-nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Fade-in observer
  const sections = document.querySelectorAll(".section");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.18 });

  sections.forEach(s => { s.classList.add("hidden"); obs.observe(s); });

  // Typewriter
  const texts = [
    "Mobile App Developer",
    "Flutter • React Native • iOS",
    "Clean UI/UX • Performance",
    "Open to Freelance & Collaboration"
  ];
  let ti = 0, ci = 0;
  const el = document.getElementById("typewriter");
  const typeSpeed = 80, eraseSpeed = 40, delay = 1400;

  function type(){ 
    if(!el) return;
    if (ci < texts[ti].length) {
      el.textContent += texts[ti].charAt(ci);
      ci++; setTimeout(type, typeSpeed);
    } else setTimeout(erase, delay);
  }
  function erase(){
    if(!el) return;
    if (ci > 0) {
      el.textContent = texts[ti].substring(0, ci-1);
      ci--; setTimeout(erase, eraseSpeed);
    } else {
      ti = (ti+1) % texts.length;
      setTimeout(type, 200);
    }
  }
  setTimeout(type, 600);
});
