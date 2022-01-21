function fadeOutEffect() {

    var fadeTarget = document.getElementsByClassName('pre-loader')[0];
    var fadeEffect = setTimeout(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity = 0;
            fadeTarget.style.zIndex = -2;
        } else {
            clearInterval(fadeEffect);
        }
    }, 1300);
}

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    // setTimeout(()=>{
        fadeOutEffect();
    // },1200)
});

// $(window).on('load',()=>{
//     $('.pre-loader').fadeOut('slow');
// })