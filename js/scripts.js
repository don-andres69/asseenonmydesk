/*
* Villager of the Day Script
*/

var theDate = new Date();
var month = theDate.getMonth() + 1; 
var day = theDate.getDate();
var picid = day;
var monthid = month
var url = picid + ".png"
var content = `<img src = "../Images/Villagers/${monthid}/${url}" width="200px" height="260px" style="background-color: transparent; object-fit: contain"></img>`



var random_color = Math.floor(Math.random()*16777215).toString(16);
var colorchoice = `Villager Birthday of the day`

document.getElementById('BOTD').innerHTML = content
document.getElementById('BOTD-header').style.backgroundColor = "#" + random_color
document.getElementById('CS-header').style.backgroundColor = "#" + random_color
document.getElementById('TV-header').style.backgroundColor = "#" + random_color
document.getElementById('BOTD-header').innerHTML = colorchoice

/*
* Dropdown script
*/

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
  }