// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// ** Swiper JS Slider Config **

// Section Photos Slider

if (document.querySelector(".section-photos-slider") !== null) {
  var sectionPhotosSlider = new Swiper(".section-photos-slider", {
    spaceBetween: 30,

    pagination: {
      el: ".section-photos-pagination",
      clickable: true,
    },
  });
}

// Section Type Swiper
if (document.querySelector(".section-type-swiper") !== null) {
  const sectionSwiperControlsPrev = document.querySelector(
    ".section-swiper-controls .prev"
  );
  const sectionSwiperControlsNext = document.querySelector(
    ".section-swiper-controls .next"
  );

  if (window.innerWidth <= 600) {
    sectionTypeSwiperResponsive(1);
  } else if (window.innerWidth > 1199) {
    sectionTypeSwiperResponsive(4);
  } else if (window.innerWidth <= 992) {
    sectionTypeSwiperResponsive(2);
  }

  window.addEventListener("resize", () => {
    if (this.innerWidth <= 600) {
      sectionTypeSwiperResponsive(1);
    } else if (this.innerWidth > 1199) {
      sectionTypeSwiperResponsive(4);
    } else if (this.innerWidth <= 992) {
      sectionTypeSwiperResponsive(2);
    }
  });

  function sectionTypeSwiperResponsive(cardsCount) {
    new Swiper(".section-type-swiper", {
      slidesPerView: cardsCount,
      spaceBetween: 30,
      slidesPerGroup: cardsCount,
      navigation: {
        nextEl: ".section-type-swiper-next",
        prevEl: ".section-type-swiper-prev",
      },
    });
  }

  sectionSwiperControlsPrev.addEventListener("click", () => {
    document.querySelector(".section-type-swiper-prev").click();
  });

  sectionSwiperControlsNext.addEventListener("click", () => {
    document.querySelector(".section-type-swiper-next").click();
  });
}

const togglerSideContactUs = document.querySelector(".toggler-side-contact-us");
const contactContainer = document.querySelector(
  ".breadcrumb-content .contact-us"
);

let contactOpen = false;

togglerSideContactUs.addEventListener("click", () => {
  if (contactOpen) {
    contactContainer.style.right = "-100%";
    contactOpen = false;
  } else {
    contactContainer.style.right = "10px";
    contactOpen = true;
  }
});
