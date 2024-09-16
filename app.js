const array = [
  {
    slide: 1,
    name: "first-slider_feutre_coloriage.png",
  },
  {
    slide: 2,
    name: "first_slider_crayon_couleur.png",
  },
  {
    slide: 3,
    name: "first_slider_feutre_double.png",
  },
  {
    slide: 4,
    name: "first_slider_marqueur.png",
  },
];
const array2 = [
  "ASSETS/first-slider_feutre_coloriage.png",

  "ASSETS/first_slider_crayon_couleur.png",

  "ASSETS/first_slider_feutre_double.png",

  "ASSETS/first_slider_marqueur.png",
];
// console.log(array2.indexOf("ASSETS/first-slider_feutre_coloriage.png"));

const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");
console.log(leftArrow);
function changePhoto() {
  alert("ok");
}
let newImg = 0;
let img = document.querySelector("#main-img-carrousel");
img.src = array2[newImg];
console.log(newImg);

leftArrow.addEventListener("click", () => {
  if (newImg === 0) {
    newImg = array2.length;
    // newImg = array2.length - 1;
  } else {
    newImg--;
    console.log(newImg);
    img.src = array2[newImg];
    console.log(img.src);
  }
});

rightArrow.addEventListener("click", () => {
  console.log(newImg);
  if (newImg === array2.length - 1) {
    newImg = 0;
  } else {
    newImg++;
    img.src = array2[newImg];
  }
});

// console.log(currentImg);

// img.src = array2[currentImg];

function slideTo(index) {}

// leftArrow.addEventListener("click", () => {
//   newImg = currentImg + 1;
//   console.log(newImg);
//   img.src = "";
//   img.src = array2[newImg];
//   console.log(img.src);
//   return newImg;
// });
