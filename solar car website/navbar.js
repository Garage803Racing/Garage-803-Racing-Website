function renderNavbar(){
  return `<div class = "logoandname">
            <img src = "images/logo-black-outline.png">
            <h1><a href = "index.html" style = "text-decoration: none; color: white">GARAGE 803 RACING</a></h1>
        </div>
        <button class = "hamburger" id = "hamburger">&#9776</button>
        <div class = "links" id = "links">
            <button style = "background: none; border: none; color: white; font-size: 5vw" class = "close" id = "close" onclick = "navLinks.classList.toggle('show'); document.body.classList.toggle('no-scroll')">&times</button>
            <ul>
                <li><a href = "index.html">Home</a></li>
                <li><a class = "team-link" id = "team-link">Team</a>
                    <ul class = "team-dropdown" id = "team-dropdown">
                        <li><a href = "team-25.html">2024-2025</a></li>
                        <li><a href = "team-26.html">2025-2026</a></li>
                    </ul>
                </li>
                <li><a href = "sponsors.html">Sponsors</a></li>
                <li><a href = "media.html">Media</a></li>
                <li><a href = "donate.html">Donate</a></li>
                <li><a href = "faq.html">FAQ</a></li>
                <button class = "join-navbar-button" onclick = "location.assign('join.html')">Join</button>
                <button class = "contact-navbar-button" onclick = "location.assign('contact.html')">Contact</button>
            </ul>
        </div>`
        ;
}
document.getElementById("navbar").innerHTML = renderNavbar();
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
