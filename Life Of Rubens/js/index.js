var currentSectionNumber = 1;
var homeButton = document.querySelector(".homeButton");
homeButton.addEventListener("mousedown", function(){
    smoothScroll(document.querySelector(".section1"), 1500);
    currentSectionNumber = 1;
});
addEventListenersToButtons();

var animButton = document.querySelector(".animTest");
animButton.addEventListener("mousedown", function(){
    animatePanel1();
})

// Animations
function animatePanel1(){
    var svg = document.querySelector(".illustrationPanel1");
    

}

// Scroll functions
function smoothScroll(target, duration){
    var targetPosition = target.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d){
        t /= d/2;
        if (t < 1) return c/2*t*t*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t*t*t + 2) + b;
    }
    requestAnimationFrame(animation);
}

function addEventListenersToButtons(){
    var nextButtons = document.getElementsByClassName('next');
    var previousButtons = document.getElementsByClassName('previous');

    for (let i = 0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener("mousedown", function(){
            goToNextSection();
        });
    }
    for (let i = 0; i < previousButtons.length; i++) {
        previousButtons[i].addEventListener("mousedown", function(){
            goToPreviousSection();
        });
    }    
}

function goToNextSection(){
    const nextSection = document.querySelector('.section' + (currentSectionNumber + 1));
    console.log(nextSection);
  
    smoothScroll(nextSection, 1500);
    currentSectionNumber++;
}

function goToPreviousSection(){
    const previousSection = document.querySelector('.section' + (currentSectionNumber - 1));
    smoothScroll(previousSection, 1500);
    currentSectionNumber--;
}
