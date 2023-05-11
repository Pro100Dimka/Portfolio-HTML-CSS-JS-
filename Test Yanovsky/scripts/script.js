var i = 1; //  set your counter to 1
const colors = ["#61C8FF", "#FF0000", "#FAB31B"];
const MainBackground = ["02031.png", "Background2.png", "Background3.png"];
const MainHuman = ["Rectangle84.png", "Human2.png", "Human3.png"];
const SecondPhoto = [
  "Rectangle143.png",
  "SecondPhoto2.png",
  "SecondPhoto3.png",
];
const buttonColors = ["#000000", "#FFFFFF", "#000000"];
const check = ["check.png", "check2.png", "check3.png"];
const Vector = ["Vector.png", "Vector2.png", "Vector3.png"];
const Summ = ["$590.png", "$5901.png", "$5902.png"];
const Zero = ["$0.png", "a01.png", "a02.png"];

document.getElementsByClassName("mainbutton")[0].onclick = function () {
  document.getElementsByClassName("popupwindow")[0].style.visibility =
    "visible";
  //alert("Нажата кнопка");
};
document.getElementsByClassName("thirdcontainerbutton")[0].onclick =
  function () {
    document.getElementsByClassName("popupwindow")[0].style.visibility =
      "visible";
    //alert("Нажата кнопка");
  };
document.getElementsByClassName("secondcontainerbutton")[0].onclick =
  function () {
    document.getElementsByClassName("popupwindow")[0].style.visibility =
      "visible";
    //alert("Нажата кнопка");
  };
function myLoop() {
  setTimeout(function () {
    for (
      a = 0;
      a < document.getElementsByClassName("secondcontainerlistul").length;
      a++
    ) {
      document.getElementsByClassName("secondcontainerlistul")[
        a
      ].style.listStyleImage = `url(images/${Vector[i]})`;
    }
    for (
      a = 0;
      a < document.getElementsByClassName("thirdcontainerlistul").length;
      a++
    ) {
      document.getElementsByClassName("thirdcontainerlistul")[
        a
      ].style.listStyleImage = `url(images/${check[i]})`;
    }

    for (a = 0; a < document.getElementsByClassName("mainfoto").length; a++) {
      document.getElementsByClassName("mainfoto")[
        a
      ].style.background = `url(images/${MainBackground[i]}) no-repeat`;
      document.getElementsByClassName("mainfoto")[a].style.backgroundSize =
        "cover";
    }
    for (a = 0; a < document.getElementsByClassName("mainphoto").length; a++) {
      document.getElementsByClassName("mainphoto")[
        a
      ].style.background = `url(images/${MainHuman[i]}) no-repeat`;
    }
    for (
      a = 0;
      a < document.getElementsByClassName("secondcontainerphoto").length;
      a++
    ) {
      document.getElementsByClassName("secondcontainerphoto")[
        a
      ].style.background = `url(images/${SecondPhoto[i]}) no-repeat`;
      MainBackground[i];
    }
    document.getElementsByClassName("mainh1h2")[0].style.color = colors[i];
    for (a = 0; a < document.getElementsByClassName("bluespan").length; a++) {
      document.getElementsByClassName("bluespan")[a].style.color = colors[i];
    }
    for (
      a = 0;
      a < document.getElementsByClassName("bluespanandupper").length;
      a++
    ) {
      document.getElementsByClassName("bluespanandupper")[a].style.color =
        colors[i];
    }

    for (a = 0; a < document.getElementsByClassName("mainbutton").length; a++) {
      document.getElementsByClassName("mainbutton")[a].style.background =
        colors[i];
      document.getElementsByClassName("mainbuttonspan")[a].style.color =
        buttonColors[i];
      document.getElementsByClassName("secondcontainerbuttonspan")[
        a
      ].style.color = buttonColors[i];
      document.getElementsByClassName("thirdcontainerbuttonspan")[
        a
      ].style.color = buttonColors[i];
      document.getElementsByClassName("thirdcontainerdesktwo")[a].style.border =
        "1px solid " + colors[i];
      document.getElementsByClassName("thirdcontainerdesk")[a].style.border =
        "1px solid " + colors[i];
      document.getElementsByClassName("sub")[a].style.background = colors[i];
      document.getElementsByClassName("imgconteinerthre")[
        a
      ].style.background = `url(images/${Summ[i]}) no-repeat`;
      document.getElementsByClassName("imgcont")[
        a
      ].style.background = `url(images/${Zero[i]}) no-repeat`;
      document.getElementsByClassName("mobilephoto")[
        a
      ].src = `images/${MainHuman[i]}`;
      document.getElementsByClassName("mobilephototwo")[
        a
      ].src = `images/${SecondPhoto[i]}`;
    }
    for (
      a = 0;
      a < document.getElementsByClassName("secondcontainerbutton").length;
      a++
    ) {
      document.getElementsByClassName("secondcontainerbutton")[
        a
      ].style.background = colors[i];
    }
    for (
      a = 0;
      a < document.getElementsByClassName("thirdcontainerbutton").length;
      a++
    ) {
      document.getElementsByClassName("thirdcontainerbutton")[
        a
      ].style.background = colors[i];
    }
    for (
      a = 0;
      a < document.getElementsByClassName("bluespanConteinertree").length;
      a++
    ) {
      document.getElementsByClassName("bluespanConteinertree")[a].style.color =
        colors[i];
    }
    for (a = 0; a < document.getElementsByClassName("mainh1").length; a++) {
      document.getElementsByClassName("mainh1")[a].style.border =
        "1px solid " + colors[i];
    }
    i++;
    if (i == 3) {
      i = 0;
    }
    if (i < 3) {
      myLoop();
    }
  }, 3000);
}

myLoop();
