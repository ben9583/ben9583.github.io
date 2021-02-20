window.addEventListener("load", function() {
	setTimeout(function() {
		document.getElementById("website-title").style.opacity = 1;
	}, 500);
	setTimeout(function() {
		document.getElementById("first-line").style.opacity = 1;
		document.getElementById("website-subtitle").style.opacity = 1;
	}, 1500);
	setTimeout(function() {
		document.getElementById("skip-button").style.opacity = 1;
		document.getElementById("block1-section1").style.opacity = 1;
		document.getElementById("block1-section2").style.opacity = 1;
		document.getElementById("block1-section3").style.opacity = 1;
	}, 2000);
	
	var delay = 2750;
	document.getElementById("skip-button").addEventListener("click", function(elem) {
		noAnim = true
		timeouts.forEach(function(i) {
			clearTimeout(i);
		});
		document.getElementById("aboutme-description").innerHTML = aboutMeText;
		document.getElementById("projects-description").innerHTML = projectsFinal;
		document.getElementById("project-list").style.opacity = 1;
		
		elem.target.removeEventListener(elem.type, arguments.callee);
	});
	
	animateTextArray(aboutMeArr, document.getElementById("aboutme-description"), delay);
	var newDelay = animateTextArray(projectsArr, document.getElementById("projects-description"), delay);
	setTimeout(function() {
		document.getElementById("projects-description").innerHTML = projectsFinal;
		document.getElementById("project-list").style.opacity = 1;
	}, newDelay);
	
});

function animateTextArray(text, elem, delay) {
	var i = 0;
	while(i < text.length) {
		delay += 50;
		if(i > 0)
			switch(text[i - 1]) {
				case ",":
					delay += 100;
					break;
				case ".":
					delay += 200;
					break;
			}

		if(!noAnim)
			timeouts.push(setTimeout(function(i) {
				elem.innerHTML += text[i]
			}, delay, i));

		i += 1
	}
	
	return delay;
}

const aboutMeText = "My name is Ben Plate, and I am part of the class of 2024 at UC Berkeley. I've lived in Arizona basically all my life and I'm interested in all things computers. I am experienced in HTML, CSS, JavaScript, Java, Lua, Python, and Bash and familiar with C, C++, C#, Docker, JQuery, and NodeJS. Beyond programming, I am a big fan of strategy games (Paradox GS in particular) and enjoy working with redstone on Minecraft.";
const projectsText = "These can be viewed on GitHub, but here are some of my favorites:";

const projectsFinal = "These can be viewed on <a href=\"https://github.com/ben9583/repositories\">GitHub</a>, but here are some of my favorites:"

const aboutMeArr = aboutMeText.split("");
const projectsArr = projectsText.split("");

var noAnim = false;
var timeouts = [];

