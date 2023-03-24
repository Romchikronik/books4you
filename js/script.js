document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  // добавляем обработчик клика для каждой ссылки
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      // отменяем стандартное поведение ссылки
      e.preventDefault();

      // получаем целевой элемент, на который ссылается ссылка
      const target = document.querySelector(this.getAttribute("href"));

      // проверяем, что элемент найден
      if (target) {
        // вычисляем расстояние от верха страницы до целевого элемента
        const top = target.getBoundingClientRect().top + window.pageYOffset;

        // плавно прокручиваем страницу к целевому элементу
        window.scrollTo({
          top: top,
          behavior: "smooth",
        });
      }
    });
  });

  const navBurger = document.querySelector(".nav__burger");
  const navMenu = document.querySelector(".nav__list");
  const navSocialLang = document.querySelector(".nav__social-lang");
  const nav = document.querySelector(".nav");
  const logo = document.querySelector(".nav__logo");
  const header = document.querySelector(".header");
  const project_links = document.querySelectorAll(
    ".nav__list__item__link--aboutproject"
  );
  // const html = document.documentElement;

  navBurger.addEventListener("click", function () {
    if (!this.classList.contains("open")) {
      this.classList.add("open");
      navMenu.classList.add("menu-open");
      navSocialLang.classList.add("menu-open");
      navSocialLang.classList.add("menu-open__social-lang");
      logo.classList.add("burger-logo");
      nav.classList.add("fixed-top");
      header.classList.add("header-top");
      //   html.style.overflowY = "hidden";
    } else {
      this.classList.remove("open");
      navMenu.classList.remove("menu-open");
      navSocialLang.classList.remove("menu-open");
      navSocialLang.classList.remove("menu-open__social-lang");
      logo.classList.remove("burger-logo");
      nav.classList.remove("fixed-top");
      header.classList.remove("header-top");
      //   html.style.overflowY = "scroll";
    }
  });

  project_links.forEach((element) => {
    element.addEventListener("click", function () {
      navBurger.classList.remove("open");
      navMenu.classList.remove("menu-open");
      navSocialLang.classList.remove("menu-open");
      navSocialLang.classList.remove("menu-open__social-lang");
      logo.classList.remove("burger-logo");
      nav.classList.remove("fixed-top");
      header.classList.remove("header-top");
    });
  });
});
