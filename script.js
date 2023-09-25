"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {

  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// --- SMOOTH SCROLLING -------------------------------------------------------
// when clicking Learn more button, will scroll to next section
// select button and section you want to scroll to

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');


btnScrollTo.addEventListener('click', function (e) {
  // give coordinates of where you want to scroll to
  const s1coords = section1.getBoundingClientRect()
  //console.log(s1coords); gives coordinates and properties
  console.log(e.target.getBoundingClientRect()); // e.target is the element just clicked
  console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);
  // x is zero, no scroll horizontal
  // y is the scroll from top to viewport to top of the page

  // old way to do it
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // })
  // new way supperted by new browsers
  section1.scrollIntoView({behavior: 'smooth'})
})
