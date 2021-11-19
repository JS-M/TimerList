var enterbutton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
var z=0;
function length(){
	return input.value.length;
} 
function listLength(){
	return item.length;
}
function l(){
  document.getElementById(n).focus();
}
var n=0,m=0;
function createList() {
  var u=document.getElementById("mm");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li);
	input.value = ""; 
	function crossOut() {
		li.classList.toggle("done"); 
    b();
	}
	li.addEventListener("click",crossOut);
    modal.style.display = "block";
    var cf=document.createElement("input");
    n++;
    cf.setAttribute("id",n);
    cf.setAttribute("class","mi");
    cf.setAttribute("type","number");
    cf.setAttribute("maxlength","2");
    cf.setAttribute("oninput","javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)");
    cf.setAttribute("placeholder","1-99 MINUTES");
    cf.setAttribute("min","0");
	var dBtn = document.createElement("button");
  var bbtn =document.createElement("button");
  var vp=document.createElement("p");
  vp.setAttribute("class","setter");
  bbtn.appendChild(document.createTextNode("set"));
  m++;
  bbtn.setAttribute("id",m);
  bbtn.setAttribute("class","lu");
	dBtn.appendChild(document.createTextNode("x"));
  u.appendChild(cf);
  l();
  u.appendChild(bbtn);
	li.appendChild(dBtn);
  li.appendChild(vp);
  bbtn.onclick = function() {
    modal.style.display = "none";
  }
	dBtn.addEventListener("click", deleteList);
  bbtn.addEventListener("click", function(){ f(vp); });
	function deleteList(){
		li.classList.toggle("delete")
	}	
   var q=n-1;
   var k=m-1;
  var vvg=document.getElementById(q);
  u.removeChild(vvg);
  var vg=document.getElementById(k);
  u.removeChild(vg);
  
  function b(){
    g();
  }
}
function addList(){
	if (length() > 0)
     {
         		createList();
	 }
}
function AfterKeypress(event) {
	if (length() > 0 && event.which ===13) 
    {
				createList();
	} 
}
enterbutton.addEventListener("click",addList);
input.addEventListener("keypress", AfterKeypress);
function show(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var ss = "AM";
    
    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        ss = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ":" + s + " " + ss;
   document.getElementById("display").innerHTML = time;
    setTimeout(show, 1000);
}
show();               
function f(vp){
    const tl = document.getElementById(n).value;
    if((tl==0)||(tl=="")){
      vp.innerHTML ="00"+":"+"00"; 
    }
    else{
    let time = tl * 60;
    let c=setInterval(updateCountdown, 1000);
    function updateCountdown() {
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;
      
      seconds = seconds < 10 ? "0" + seconds : seconds
      if(time==0){
        myFunction()
        clearInterval(c);
        vp.innerHTML ="00"+":"+"00";
      }
      else{
       vp.innerHTML =minutes+":"+seconds;
      }
      time--;
    } 
    }
  }
  function g(){
    clearInterval(c);
    li.removeChild(vp);
   }
   function myFunction() {
    var x = document.getElementById("myAudio");
    x.play();
  }
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}