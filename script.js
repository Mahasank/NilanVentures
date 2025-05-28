document.getElementById("mobile-menu").addEventListener("click", function () {
	const navMenu = document.getElementById("nav-menu");
	navMenu.classList.toggle("active");
});
function showContent(sectionId) {
	const sections = document.querySelectorAll('.service-content-section');
	sections.forEach(section => {
	  section.style.display = 'none';
	});
	const activeSection = document.getElementById(sectionId);
	if (activeSection) {
	  activeSection.style.display = 'block';
	  window.scrollTo({
		top: activeSection.offsetTop - 100,
		behavior: 'smooth'
	  });
	}
  }
  