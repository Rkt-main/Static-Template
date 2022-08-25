
      const nav = document.querySelector(".navbar");

      //  nav = document.querySelector('.nav');
      const toggleBtn = document.querySelector(".toggle-btn");
      toggleBtn.addEventListener("click", function () {
        nav.classList.toggle("collapse-toggle");
      });