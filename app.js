// const array = [
//   {
//     slide: 1,
//     name: "first-slider_feutre_coloriage.png",
//   },
//   {
//     slide: 2,
//     name: "first_slider_crayon_couleur.png",
//   },
//   {
//     slide: 3,
//     name: "first_slider_feutre_double.png",
//   },
//   {
//     slide: 4,
//     name: "first_slider_marqueur.png",
//   },
// ];
// const array2 = [
//   "ASSETS/first-slider_feutre_coloriage.png",

//   "ASSETS/first_slider_crayon_couleur.png",

//   "ASSETS/first_slider_feutre_double.png",

//   "ASSETS/first_slider_marqueur.png",
// ];
// // console.log(array2.indexOf("ASSETS/first-slider_feutre_coloriage.png"));

// const leftArrow = document.querySelector("#left-arrow");
// const rightArrow = document.querySelector("#right-arrow");
// console.log(leftArrow);
// function changePhoto() {
//   alert("ok");
// }
// let newImg = 0;
// let img = document.querySelector("#main-img-carrousel");
// img.src = array2[newImg];
// console.log(newImg);

// const feutre1 = document.querySelector("#feutre-coloriage");
// const feutre2 = document.querySelector("#crayon_couleur");
// const feutre3 = document.querySelector("#feutre_double");
// const feutre4 = document.querySelector("#pagination_marqueur");

// leftArrow.addEventListener("click", () => {
//   if (newImg === 1) {
//     feutre1.classList.add("active");
//     feutre2.classList.remove("active");
//     feutre3.classList.remove("active");
//     feutre4.classList.remove("active");
//   } else if (newImg === 2) {
//     feutre1.classList.remove("active");
//     feutre2.classList.add("active");
//     feutre3.classList.remove("active");
//     feutre4.classList.remove("active");
//   } else if (newImg === 3) {
//     feutre1.classList.remove("active");
//     feutre2.classList.remove("active");
//     feutre3.classList.add("active");
//     feutre4.classList.remove("active");
//   } else if (newImg === 4) {
//     feutre1.classList.remove("active");
//     feutre2.classList.remove("active");
//     feutre3.classList.remove("active");
//     feutre4.classList.add("active");
//   } else {
//     console.log("erreur");
//   }

//   if (newImg < 1) {
//     newImg = 4;
//     // newImg = array2.length - 1;
//   } else {
//     newImg--;
//     console.log(newImg);
//     img.src = array2[newImg];
//     // console.log(img.src);
//   }
// });

// rightArrow.addEventListener("click", () => {
//   if (newImg === 0) {
//     feutre1.classList.add("active");
//     feutre2.classList.remove("active");
//     feutre3.classList.remove("active");
//     feutre4.classList.remove("active");
//   } else if (newImg === 1) {
//     feutre1.classList.remove("active");
//     feutre2.classList.add("active");
//     feutre3.classList.remove("active");
//     feutre4.classList.remove("active");
//   } else if (newImg === 2) {
//     feutre1.classList.remove("active");
//     feutre2.classList.remove("active");
//     feutre3.classList.add("active");
//     feutre4.classList.remove("active");
//   } else if (newImg === 3) {
//     feutre1.classList.remove("active");
//     feutre2.classList.remove("active");
//     feutre3.classList.remove("active");
//     feutre4.classList.add("active");
//   } else {
//     console.log("erreur");
//   }

//   console.log(newImg);
//   if (newImg > 3) {
//     newImg = 0;
//   } else {
//     newImg++;
//     img.src = array2[newImg - 1];
//   }
// });
