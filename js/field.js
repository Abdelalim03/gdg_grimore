var x, i, j, l, ll, selElmnt, a, b, c;
var tab = [];
let selectField = document.getElementById("set-field")
let selectLevel = document.getElementById("set-level")
let types = document.querySelectorAll(".types span");
let field = document.querySelectorAll(".principal");
let content = document.querySelectorAll(".principal > div");
let crs = document.querySelectorAll(".principal .courses .card-content");

// let seeMore = document.querySelectorAll(".courses .box .info a");



const getQueryParams = (params, url) => {
  let href = url
  //this expression is to get the query strings
  let reg = new RegExp("[?&]" + params + "=([^&#]*)", "i")
  let queryString = reg.exec(href)
  return queryString ? queryString[1] : null
}

var selcted = getQueryParams("field", document.URL);
if (selcted>=1 & selcted<=10){
    selectField.options[selcted].selected = 'selected'
    manageFields(selectField);
}

/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//   console.log(a.innerHTML);
// if (a.innerHTML.includes("Select ")){ 
//     // k = document.getElementById("selecter");
//     // k.style.opacity = "0.4";
//     tab.push (a);
//     a.style.opacity = "0.4"
//     console.log(a);
// }else{
//     a.style.opacity = "1"
// }
  a.setAttribute("class", "select-selected");
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        // console.log(tab);
        // for (let elem of tab ){
        //     console.log(c.innerHTML);

        //     if (c.contains(elem))
        //     elem.style.opacity = "1";
        // }
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            console.log(s.options[i].value);
            selectedOptions = s.options[i].value;
            s.options[i].selected = 'selected'
            if (s == selectField)
            manageFields(s);
            else if (s == selectLevel) manageLevel(s);
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


// Start filtering


types.forEach(type=>{
	type.addEventListener("click",toggleActive);
	type.addEventListener("click",manageContent);
});

function toggleActive(){
	types.forEach(span=>{
		span.classList.remove("active");
	});
	this.classList.add("active");
}

function manageContent(){
  let i=0;
	content.forEach(div=>{
		if (i%4!==0)div.style.display="none";
    i++;
	});
  // document.querySelector(this.dataset.cont).style.display="block";
  let blocks = document.querySelectorAll(this.dataset.cont);
  console.log(blocks);
	blocks.forEach(block => {
    block.style.display = "block"
  });
}


function manageFields(s) {
  field.forEach(div=>{
		div.style.display="none";
	});
  if (document.querySelector("."+s.selectedOptions[0].value))
  document.querySelector("."+s.selectedOptions[0].value).style.display = "block"
}

function manageLevel(s) {
  crs.forEach(div=>{
		div.style.display="none";
	});
  if (document.querySelector("."+s.selectedOptions[0].value))
  document.querySelector("."+s.selectedOptions[0].value).style.display = "block"
}