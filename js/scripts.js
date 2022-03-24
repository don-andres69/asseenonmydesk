/*!
* Start Bootstrap - Blog Home v5.0.7 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


var theDate = new Date();
var month = theDate.getMonth() + 1; 
var day = theDate.getDate();
var picid = day;
var monthid = month
var url = picid + ".jpg"
var content = `<img src = "../Images/Villagers/${monthid}/${url}" width="115" height="200"></img>`



var random_color = Math.floor(Math.random()*16777215).toString(16);
var colorchoice = `Villager Birthday of the day`

document.getElementById('BOTD').innerHTML = content
document.getElementById('BOTD-header').style.backgroundColor = "#" + random_color
document.getElementById('CS-header').style.backgroundColor = "#" + random_color
document.getElementById('TV-header').style.backgroundColor = "#" + random_color
document.getElementById('BOTD-header').innerHTML = colorchoice
