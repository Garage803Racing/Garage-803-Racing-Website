
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("links");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      document.body.classList.toggle("no-scroll");
    });


  let lastScrollTop = 0;
  const navbar = document.getElementById('navbar');
  const scrollThreshold = window.innerWidth * 0.12;
  const teamLink = document.getElementById('team-link');
  const teamDropdown = document.getElementById('team-dropdown');

  window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold && window.getComputedStyle(teamDropdown).display === "none") {
      // Scrolling down
      navbar.classList.add('hidden');
    } else {
      // Scrolling up
      navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Avoid negative scroll
  });

    teamLink.addEventListener("click", function() {
        teamDropdown.classList.toggle('show');
  });
