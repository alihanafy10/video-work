
$(".son-link div").on("click", function (e) {
  $(".son-link div").removeClass("active");
  $(this).addClass("active");
  if (e.target.classList.contains("one")) {
    $(".maragaa").addClass("d-none");
    $(".taws.maragaa").removeClass("d-none");
    $(".taws.maragaa").addClass("d-block");
  } else {
    $(".maragaa").removeClass("d-none");
    $(".maragaa").addClass("d-block");
    $(".taws.maragaa").addClass("d-none");
  }
});


/**********video************* */
 const playerr = new Plyr("#playerr", {
   controls: [
     "play-large",
     "play",
     "progress",
     "current-time",
     "captions",
     "pip",
     "airplay",
     "fullscreen",
   ],
   youtube: {
     noCookie: true,
     rel: 0,
     showinfo: 0,
     iv_load_policy: 3,
   },
 });
 