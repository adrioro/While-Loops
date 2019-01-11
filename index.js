//While Loop//

var i = 0;
while (i < 10) {
  document.write(i + "<br>");
  i = i + 1;
}

document.write("<br>");

//Do While Loop//

var z = 1;

do {
  document.write("This will be printed 5 times.<br>");
  z++;
}
while (z < 6);

document.write("<br>");

var w = 0

while (w < 6) {
  y = 3
  document.write(w * y + "<br>");
  w++;
}

document.write("<br>");

var g = 0

while (g < 5) {
  document.write(g * 100 + "<br>");
  g++;
}

//Breaking the Loop//

document.write("<br>");

for (num = 1; num < 9; num++) {
  document.write("This will print until broken always that the count is <9, but I'll set a break at 4.<br>");
  if (num == 4) {
    break;
  }
}

//Looping an Array//

document.write("<br>");
var myFriends = new Array("Vero", "Rafa", "Peggy", "Frank", "Cecilia");

for (index in myFriends) {
  document.write(index + myFriends[index] + "<hr/>");
  if (index == 2) {
    break;
  }
}
document.write("<br>");
//Skipping a Loop//

document.write("Skipping a Loop<br>");
document.write("<br>");

var myArrayList = ["First", "Second", "Third", "Fourth", "Fifth"];

for (index = 0; index <= 4; index++) {
  if (index == 2) {
    continue;
  }
  document.write(myArrayList[index] + "<br>");
}