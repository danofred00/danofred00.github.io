
/*
    THERE IS SOME CONST i'm using in my code
*/
const WINDOW_LOADED_VERIFICATION_TIMER = 500

// this var represent the state of the window
var windowLoaded = false

$(document).ready(function() {
    /*
        In this section of code, i have added a simple verification process, to 
        check if the window is fully displayed at the screen
    */
    const loadingPage = document.getElementById("loading-page")
    setInterval(function(){
            if(windowLoaded) {
                loadingPage.style.display = "none"
                
                clearInterval();
            } else {
                // console.log("Window not loaded")
            }
    },WINDOW_LOADED_VERIFICATION_TIMER)
})

$(window).on("load",function() {

    windowLoaded = true
    console.log("Window Loaded")

    // Update the progress bars
    var progressBars = document.querySelectorAll("div.progress-bar")
    progressBars.forEach((element) => {
        const width = element.innerText;
        element.style.width = width;
    })

})
