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

// function smoothScroll(target, duration){
//     // var targetPosition = target.getBoundingClientRect().top;
//     var targetPosition = target.offsetTop;

//     console.log("scroll to : " + targetPosition);

//     window.scrollTo({
//         top: targetPosition,
//         left: 0,
//         behavior: 'smooth'
//     });
// }


//variables
var nextButton = document.querySelector('.next');
var previousButton = document.querySelector('.previous');

//functions
function setSectionArray(){

    var section1 = document.querySelector('.section1');
    var section2 = document.querySelector('.section2');
    var section3 = document.querySelector('.section3');
    
    var sectionArray = [section1, section2, section3];
    return sectionArray;
}

function getCurrentSection(){
    sections = setSectionArray();
    for (let i = 0; i < sections.length; i++) {

        console.log("______");
        console.dir(sections[i].getBoundingClientRect().top);
        console.dir(sections[i].offsetTop);

        if(sections[i].getBoundingClientRect().top == 0){
            
            console.log("______");
            console.log('current section is : ');
            console.dir(sections[i]);
            console.log('current section top is : ' + sections[i].getBoundingClientRect().top);

            return sections[i];
        }

    }
}

function getNextSection(){
    sections = setSectionArray();
    const currentSection = getCurrentSection(sections);
    for (let i = 0; i < sections.length; i++) {
        if(sections[i].offsetTop > currentSection.offsetTop){
            
            console.log('next section is : ');
            console.dir(sections[i]);
            console.log('next section top is : ' + sections[i].getBoundingClientRect().top);
            
            return sections[i];
        }  
    }
}

function getPreviousSection(){
    sections = setSectionArray();
    const currentSection = getCurrentSection(sections);
    const currentSectionTop = currentSection.getBoundingClientRect().top;

    const reversedSections = sections.slice(0).reverse();

    for (let i = 0; i < reversedSections.length; i++) {
        const previousSection = reversedSections[i];
        const previousSectionTop = previousSection.getBoundingClientRect().top;

        if(previousSectionTop < currentSectionTop){

            console.log('previous section is : ');
            console.dir(reversedSections[i]);
            console.log('previous section top is : ' + reversedSections[i].getBoundingClientRect().top);

            return previousSection;
        }  
        // if(sections[i].getBoundingClientRect().top < currentSection.getBoundingClientRect().top){
        //     return sections[i];
        // }        
    }
}

function goToNextSection(){
    sections = setSectionArray();
    const nextSection = getNextSection(sections);

    console.log("go to next section : ");
    console.dir(nextSection);

    smoothScroll(nextSection, 1500);
}

function goToPreviousSection(){
    sections = setSectionArray();
    const previousSection = getPreviousSection(sections);

    console.log("go to previous section : ");
    console.dir(previousSection);

    smoothScroll(previousSection, 1500);
}

function addEventListeners(){
    var nextButtons = document.getElementsByClassName('next');
    var previousButtons = document.getElementsByClassName('previous');

    for (let i = 0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener("click", function(){
            goToNextSection();
        });
    }
    for (let i = 0; i < previousButtons.length; i++) {
        previousButtons[i].addEventListener("click", function(){
            goToPreviousSection();
        });
    }    
}

//eventlisteners
addEventListeners();

// nextButton.addEventListener('click', function(){
//     goToNextSection();
// })

// previousButton.addEventListener('click', function(){
//     goToPreviousSection();
// })



// var section1Next = document.querySelector('.section1 .next');
// var section2Next = document.querySelector('.section2 .next');
// var section2Previous = document.querySelector('.section2 .previous');
// var section3Previous = document.querySelector('.section3 .previous');


// section1Next.addEventListener('click', function(){
//     smoothScroll('.section2', 1500);
// })
// section2Next.addEventListener('click', function(){
//     smoothScroll('.section3', 1500);
// })
// section2Previous.addEventListener('click', function(){
//     smoothScroll('.section1', 1500);
// })
// section3Previous.addEventListener('click', function(){
//     smoothScroll('.section2', 1500);
// })

