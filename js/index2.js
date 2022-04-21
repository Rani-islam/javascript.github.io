const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');



setInterval(function(){
let day = new Date();

let hh = day.getHours();
let mm = day.getMinutes();	
let ss = day.getSeconds();

let hhr = hh * (360/12) + mm/2;
let mmr = mm * (360/60);
let ssr = ss * (360/60);




hr.style.transform = `rotateZ(${hhr}deg)`;
min.style.transform = `rotateZ(${mmr}deg)`;
sec.style.transform = `rotateZ(${ssr}deg)`;
	
});

