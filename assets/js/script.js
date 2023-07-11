
$(document).ready(function() {

    // Update the progress bars
    var progressBars = document.querySelectorAll("div.progress-bar")
    progressBars.forEach((element) => {
        const width = element.innerText;
        element.style.width = width;
    })

})
