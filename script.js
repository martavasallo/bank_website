"use strict";


const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');



// --- MODAL WINDOWS -----------------------------------------------------------

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


// -- IMPLEMENTING PAGE NAVIGATION ---------------------------------------------
// implementing smooth scrolling
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   // returns a nodeList. Use for each to attach event habdlers to each of the elements
//   el.addEventListener('click', function (e) {
//     // in html has the anchor to move to the section when btn clicked
//     //prevent this default to be able to add smooth scrolling
//     e.preventDefault()
//     // get the id from the link
//     const id = this.getAttribute('href')
//     console.log(id); // #section--1  #section--2  #section--3
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth'})
//   })
// })

// 1. add event listener to common parent element (.nav__links)
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault()

  console.log(e.target); //shows the html element you are clicking on

  // 2. determine where the click event came from
  // Matching strategy (to ignore clicks that dont happen on the links)
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href')
    console.log(id); // #section--1  #section--2  #section--3
    document.querySelector(id).scrollIntoView({ behavior: 'smooth'})
  }

})
