$(document).ready(function () {
  $(".pencil").click(function () {
    $(".pencil").removeClass("active-anim");
    $(this).addClass("active-anim");
  });

  $("#left-arrow").on("click", function () {
    // selectionner l'image qui a la classe active
    var currentImg = $(".active");
    // aller a la prochaine image
    var prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass("active").css("z-index", -10);
      prevImg.addClass("active").css("z-index", 10);
    }
  });

  $("#right-arrow").on("click", function () {
    var currentImg = $(".active");
    var nextImg = currentImg.next();

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
