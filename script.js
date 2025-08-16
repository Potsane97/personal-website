// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior:"smooth" });
  });
});

// Animate skills bars
const skillBars = document.querySelectorAll(".progress");
const skillsSection = document.getElementById("skills");
window.addEventListener("scroll", () => {
  if(skillsSection.getBoundingClientRect().top < window.innerHeight - 100){
    skillBars[0].style.width = "90%";
    skillBars[1].style.width = "75%";
    skillBars[2].style.width = "85%";
    skillBars[3].style.width = "80%";
    skillBars[4].style.width = "70%";
  }
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll(".project-card, .service-card");
function revealOnScroll(){
  revealElements.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("reveal");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);

// Dark Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
