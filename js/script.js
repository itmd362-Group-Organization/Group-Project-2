/* Team Blue Screens
  Griselda Pasillas
  Yelitza Castro
  Mahmood Mehrjoo */

/* Slider JS */
var myIndex = 0;
chicago();

function chicago() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(chicago, 6000);
}



