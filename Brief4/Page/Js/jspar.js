





var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); 
}

//calendar 
function processData(f1){
	var v1 = document.getElementById(f1).value;
	alert(v1+"there is no hotel's avalabel in this date");
	
}


