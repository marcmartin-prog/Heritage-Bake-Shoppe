//'esversion:6'

/*mobile menu code*/

var hamburger = document.getElementById("hamburger");
var mobileMenu = document.getElementById("mobile-menu");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var line3 = document.getElementById("line3");

hamburger.addEventListener("click", function(){
    if (mobileMenu.style.display === "block"){
      mobileMenu.style.display = "none";
      line1.classList.remove('line1clicked');
      line2.classList.remove('line2clicked');
      line3.classList.remove('line3clicked');
    } else{
      mobileMenu.style.display = "block";
      line1.classList.add('line1clicked');
      line2.classList.add('line2clicked');
      line3.classList.add('line3clicked');
    }
});


var menuItem = document.getElementsByClassName("menu-item");

for (var i = 0; i < menuItem.length; i++) {
	menuItem[i].addEventListener("click", function(){
		if (mobileMenu.style.display === "block"){
			mobileMenu.style.display = "none";
      line1.classList.remove("line1clicked");
      line2.classList.remove("line2clicked");
      line3.classList.remove("line3clicked");
		} else {
			mobileMenu.style.display = "block";
		}
	});

}

//slider code

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function goToDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("review");
    var y = document.getElementsByClassName('js-dot');
    if (n > x.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = x.length; }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].classList.remove('active');
    }
    x[slideIndex - 1].style.display = "flex";
    y[slideIndex - 1].classList.add('active');
}

function generateDots() {
    var i;
    var x = document.getElementsByClassName("review");
    for (i = 0; i < x.length; i++) {
        var dotNumber = i + 1;
        var dot = document.createElement('span');
        dot.innerHTML =
            '<button class="js-dot" onclick="goToDiv(' + dotNumber + ')">' + dotNumber + '</button>';

        document.getElementById('js-slider-dots').appendChild(dot);

    }
}
generateDots();


//snipcart product customization code
const button = document.querySelector('#add-to-cart');
const bread = document.querySelector('#bread');
const meat = document.querySelector('#meat');
const doubleMeat = document.querySelector('#d-meat');
const tripleMeat = document.querySelector('#t-meat');
const cheese = document.querySelector('#cheese');
const doubleCheese = document.querySelector('#d-cheese');
const tripleCheese = document.querySelector('#t-cheese');


function breadChoice(){
  button.setAttribute("data-item-custom1-value", bread.value);
}

function meatChoice(){
  button.setAttribute("data-item-custom2-value", meat.value);
}

function doubleMeatChoice(){
  button.setAttribute("data-item-custom3-value", doubleMeat.value);
}

function tripleMeatChoice(){
  button.setAttribute("data-item-custom4-value", tripleMeat.value);
}

function cheeseChoice(){
  button.setAttribute("data-item-custom5-value", cheese.value);
}

function doubleCheeseChoice(){
  button.setAttribute("data-item-custom6-value", doubleCheese.value);
}

function tripleCheeseChoice(){
  button.setAttribute("data-item-custom7-value", tripleCheese.value);
}

function dMeat(){
   if(document.querySelector('#double-meat').checked){
    document.querySelector('#d-meat').style.display ="inline-block";
   }else{
    document.querySelector('#d-meat').style.display = "none";
  }
}

function tMeat(){
   if(document.querySelector('#triple-meat').checked){
    document.querySelector('#t-meat').style.display ="inline-block";
   }else{
    document.querySelector('#t-meat').style.display = "none";
  }
}

function dCheese(){
   if(document.querySelector('#double-cheese').checked){
    document.querySelector('#d-cheese').style.display ="inline-block";
   }else{
    document.querySelector('#d-cheese').style.display = "none";
  }
}

function tCheese(){
   if(document.querySelector('#triple-cheese').checked){
    document.querySelector('#t-cheese').style.display ="inline-block";
   }else{
    document.querySelector('#t-cheese').style.display = "none";
  }
}
