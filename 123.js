const kz = document.querySelector(".kz")

const ru = document.querySelector(".ru")

const mn = document.querySelector(".mn")

const ar = document.querySelector(".ar")

const KZ = document.querySelector(".KZ")
const RU = document.querySelector(".RU")
const MN = document.querySelector(".MN")
const AR = document.querySelector(".AR")

var actualTop = mn.offsetTop; // 绝对位置
console.log(actualTop)

var left = mn.offsetLeft; // 绝对位置
console.log(left)


let curr_opacity = 1

function fadeOut1() {
  if (curr_opacity > 0) {
    setTimeout(function () {
      curr_opacity = curr_opacity - 0.1;
      kz.style.opacity = curr_opacity;
      fadeOut1()
    }, 55)
  }
};

let curr_opacity2 = 1

function fadeOut2() {
  if (curr_opacity2 > 0) {
    setTimeout(function () {
      curr_opacity2 = curr_opacity2 - 0.1;
      ru.style.opacity = curr_opacity2;
      fadeOut2()
    }, 55)
  }
};

let curr_opacity3 = 1

function fadeOut3() {
  if (curr_opacity3 > 0) {
    setTimeout(function () {
      curr_opacity3 = curr_opacity3 - 0.1;
      mn.style.opacity = curr_opacity3;
      fadeOut3()
    }, 55)
  }
};

let curr_opacity4 = 1

function fadeOut4() {
  if (curr_opacity4 > 0) {
    setTimeout(function () {
      curr_opacity4 = curr_opacity4 - 0.1;
      ar.style.opacity = curr_opacity4;
      fadeOut4()
    }, 55)
  }
};


kz.addEventListener(
  "click",
  function () {

    kz.style.top = 240 + "px";
    kz.style.left = 290 + "px";

    var actualTop = kz.offsetTop; // 绝对位置
    console.log(actualTop)

    var left = kz.offsetLeft; // 绝对位置
    console.log(left)

    fadeOut2()
    setTimeout(() => {
      ru.hidden = true
    }, 1500);

    fadeOut3()
    setTimeout(() => {
      mn.hidden = true
    }, 1500);

    fadeOut4()
    setTimeout(() => {
      ar.hidden = true
    }, 1500);
    var a = document.querySelector("#a");
    a.style.display = "block";
    getComputedStyle(a).opacity;
    a.style.opacity = "1";

    KZ.classList.add("kzSvg")

    // 獲取圖像和 SVG 對象
    var svg = document.getElementById("mySvg");

    // 觸發 SVG 圖形的放大效果
    svg.classList.add("zoomed1");

    var a1 = document.querySelector("#a1");
    a1.style.display = "block";
    getComputedStyle(a1).opacity;
    a1.style.opacity = "1";


  }
)

ru.addEventListener(
  "click",
  function () {

    ru.style.top = 340 + "px";
    ru.style.left = 390 + "px";

    var actualTop = ru.offsetTop; // 绝对位置
    console.log(actualTop)

    var left = ru.offsetLeft; // 绝对位置
    console.log(left)

    fadeOut1()
    setTimeout(() => {
      kz.hidden = true
    }, 1500);

    fadeOut3()
    setTimeout(() => {
      mn.hidden = true
    }, 1500);

    fadeOut4()
    setTimeout(() => {
      ar.hidden = true
    }, 1500);

    var b = document.querySelector("#b")
    b.style.display = "block";
    getComputedStyle(b).opacity;
    b.style.opacity = "1";

    RU.classList.add("ruSvg")
    var svg = document.getElementById("mySvg");
    svg.classList.add("zoomed2");

    var b1 = document.querySelector("#b1");
    b1.style.display = "block";
    getComputedStyle(b1).opacity;
    b1.style.opacity = "1";
  }
);



mn.addEventListener(
  "click",
  function () {

    mn.style.top = 240 + "px";
    mn.style.left = 670 + "px";

    var actualTop = mn.offsetTop; // 绝对位置
    console.log(actualTop)

    var left = mn.offsetLeft; // 绝对位置
    console.log(left)

    fadeOut1()
    setTimeout(() => {
      kz.hidden = true
    }, 1500);

    fadeOut2()
    setTimeout(() => {
      ru.hidden = true
    }, 1500);

    fadeOut4()
    setTimeout(() => {
      ar.hidden = true
    }, 1500);
    var c = document.querySelector("#c")
    c.style.display = "block";
    getComputedStyle(c).opacity;
    c.style.opacity = "1";

    MN.classList.add("mnSvg")
    var svg = document.getElementById("mySvg");
    svg.classList.add("zoomed3");

    var c1 = document.querySelector("#c1");
    c1.style.display = "block";
    getComputedStyle(c1).opacity;
    c1.style.opacity = "1";
  }
);

ar.addEventListener(
  "click",
  function () {

    ar.style.top = 251 + "px";
    ar.style.left = 624 + "px";

    var actualTop = ar.offsetTop; // 绝对位置
    console.log(actualTop)

    var left = ar.offsetLeft; // 绝对位置
    console.log(left)

    fadeOut1()
    setTimeout(() => {
      kz.hidden = true
    }, 1500);

    fadeOut2()
    setTimeout(() => {
      ru.hidden = true
    }, 1500);

    fadeOut3()
    setTimeout(() => {
      mn.hidden = true
    }, 1500);

    var d = document.querySelector("#d")
    d.style.display = "block";
    getComputedStyle(d).opacity;
    d.style.opacity = "1";
    AR.classList.add("arSvg")

    var svg = document.getElementById("mySvg");
    svg.classList.add("zoomed4");

    var d1 = document.querySelector("#d1");
    d1.style.display = "block";
    getComputedStyle(d1).opacity;
    d1.style.opacity = "1";

  }
);

kz.addEventListener("dblclick",function(){
  window.location.href = "https://www.google.com/maps/@50.357649,83.5657842,3a,90y,327.98h,79.81t/data=!3m6!1e1!3m4!1sQeML2ta_6btFBxRpVGNX9g!2e0!7i16384!8i8192?entry=ttu"

})

ru.addEventListener("dblclick",function(){
  window.location.href = "https://www.google.com/maps/@50.3313073,87.4630814,3a,90y,297.4h,90.53t/data=!3m6!1e1!3m4!1s768cK-w0WT5Cr0MsesAs7w!2e0!7i13312!8i6656?entry=ttu"

})

mn.addEventListener("dblclick",function(){
  window.location.href = "https://www.google.com/maps/@46.5373912,93.6173286,2a,90y,2.73h,92.15t/data=!3m6!1e1!3m4!1sw384ozSqcTMLOJUZJuU2QQ!2e0!7i16384!8i8192?entry=ttu"

})


