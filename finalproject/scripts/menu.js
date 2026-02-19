
export function setupMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  if (!menuBtn || !navMenu) return;

  
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

 
  document.addEventListener("click", (e) => {
    if (
      !navMenu.contains(e.target) &&
      e.target !== menuBtn &&
      navMenu.classList.contains("open")
    ) {
      navMenu.classList.remove("open");
    }
  });

  const links = navMenu.querySelectorAll("a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}



