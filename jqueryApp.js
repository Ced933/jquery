$(document).ready(function () {
  $("#left-arrow").on("click", function () {
    // selectionner l'image qui à la classe active
    var currentImg = $(".active");
    // Aller à la prochaine image
    var prevImg = currentImg.prev();

    // On va faire la meme chose que pour les image du carousel on selectionne celui qui a la classe active-anime
    var currentImgAnim = $(".active-anim");
    // L'ordre est inversé à cause de notre section à 270° on va donc devoir faire next() pour avoir l'image precédente et non pas prev()
    var prevImgAnim = currentImgAnim.next();

    console.log(prevImg.attr("alt"));
    // Je recupère le nom du stylo grâce à alt
    $("#name").html(prevImg.attr("alt"));
    $("#name-responsive").html(prevImg.attr("alt"));
    if (prevImg.attr("alt") === "Feutre double") {
      $("#name").css("color", "#028149");
      $("#name").css("fontFamily", "Broadcast_Matter");
      $("#name").css("fontSize", "45px");
      // name responsive
      $("#name-responsive").css("color", "#028149");
      $("#name-responsive").css("fontFamily", "Broadcast_Matter");
      $("#name-responsive").css("fontSize", "35px");
    } else if (prevImg.attr("alt") === "Marqueur") {
      $("#name").css("color", "#4D5FAB");
      $("#name").css("fontFamily", "animeace");
      $("#name").css("fontSize", "19px");
      // name responsive
      $("#name-responsive").css("color", "#4D5FAB");
      $("#name-responsive").css("fontFamily", "animeace");
      $("#name-responsive").css("fontSize", "16px");
    } else if (prevImg.attr("alt") === "Feutre de coloriage") {
      $("#name").css("color", "#C7669C");
      $("#name").css("fontFamily", "Lumios-Marker");
      $("#name").css("fontSize", "40px");
      // name responsive
      $("#name-responsive").css("color", "#C7669C");
      $("#name-responsive").css("fontFamily", "Lumios-Marker");
      $("#name-responsive").css("fontSize", "30px");
    } else if (prevImg.attr("alt") === "Crayon couleur") {
      $("#name").css("color", "#EB9731");
      $("#name").css("fontFamily", "Chalkduster");
      $("#name").css("fontSize", "25px");
      // name responsive
      $("#name-responsive").css("color", "#EB9731");
      $("#name-responsive").css("fontFamily", "Chalkduster");
      $("#name-responsive").css("fontSize", "19px");
    }

    if (prevImg.length) {
      // on remove la classe active de l'element qui est actif
      currentImg.removeClass("active").css("z-index", -10);
      //   et on l'attribut au prochain élément qui est notre élement actuel
      prevImg.addClass("active").css("z-index", 10);

      //   c'est exactement le même procédé que pour les images
      currentImgAnim.removeClass("active-anim");
      prevImgAnim.addClass("active-anim");
    }
  });

  $("#right-arrow").on("click", function () {
    var currentImg = $(".active");
    var nextImg = currentImg.next();

    console.log(nextImg.attr("alt"));

    $("#name").html(nextImg.attr("alt"));
    $("#name-responsive").html(nextImg.attr("alt"));
    if (nextImg.attr("alt") === "Feutre double") {
      $("#name").css("color", "#028149");
      $("#name").css("fontFamily", "Broadcast_Matter");
      $("#name").css("fontSize", "45px");
      // name responsive
      $("#name-responsive").css("color", "#028149");
      $("#name-responsive").css("fontFamily", "Broadcast_Matter");
      $("#name-responsive").css("fontSize", "35px");
    } else if (nextImg.attr("alt") === "Marqueur") {
      $("#name").css("color", "#4D5FAB");
      $("#name").css("fontFamily", "animeace");
      $("#name").css("fontSize", "19px");
      // name responsive
      $("#name-responsive").css("color", "#4D5FAB");
      $("#name-responsive").css("fontFamily", "animeace");
      $("#name-responsive").css("fontSize", "16px");
    } else if (nextImg.attr("alt") === "Feutre de coloriage") {
      $("#name").css("color", "#C7669C");
      $("#name").css("fontFamily", "Lumios-Marker");
      $("#name").css("fontSize", "40px");
      // name responsive
      $("#name-responsive").css("color", "#C7669C");
      $("#name-responsive").css("fontFamily", "Lumios-Marker");
      $("#name-responsive").css("fontSize", "30px");
    } else if (nextImg.attr("alt") === "Crayon couleur") {
      $("#name").css("color", "#EB9731");
      $("#name").css("fontFamily", "Chalkduster");
      $("#name").css("fontSize", "25px");
      // name responsive
      $("#name-responsive").css("color", "#EB9731");
      $("#name-responsive").css("fontFamily", "Chalkduster");
      $("#name-responsive").css("fontSize", "19px");
    }

    var currentImgAnim = $(".active-anim");
    var nextImgAnim = currentImgAnim.prev();
    // console.log(nextImg.length);
    if (nextImg.length) {
      currentImg.removeClass("active").css("z-index", -10);
      nextImg.addClass("active").css("z-index", 10);

      currentImgAnim.removeClass("active-anim");
      nextImgAnim.addClass("active-anim");
    }
  });
});
