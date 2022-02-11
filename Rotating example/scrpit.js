//set var timers
var bannerStatus = 1;
var bannerTimer = 4000;

window.onload = function () {
    bannerLoop();
}
//naming the the function
var startBannerLoop = setInterval(function () {
    bannerLoop();
}, bannerTimer);

//the stops the timer and keeps the picture when mouse hovers
document.getElementById("main-banner").onmouseenter = function () {
    clearInterval(startBannerLoop);
}
//resest the timer when mouse leaves
document.getElementById("main-banner").onmouseleave = function () {
    startBannerLoop = setInterval(function () {
        bannerLoop();
    }, bannerTimer);
}

//one back button
document.getElementById("imgbanbtn-prev").onclick = function () {
    if (bannerStatus === 1) {
        bannerStatus = 2;
    }
    else if (bannerStatus === 2) {
        bannerStatus = 3;
    }
    else if (bannerStatus === 3) {
        bannerStatus = 1;
    }
    bannerLoop();
}
//one next button
document.getElementById("imgbanbtn-next").onclick = function () {
    bannerLoop();
}

//the loop to rotate postions 
function bannerLoop() {
    if (bannerStatus === 1) {
        document.getElementById("imgban2").style.opacity = "0";
        //timer
        setTimeout(function () {
            document.getElementById("imgban1").style.right = "0px";
            document.getElementById("imgban1").style.zIndex = "1000px";
            //2
            document.getElementById("imgban2").style.right = "-1200px";
            document.getElementById("imgban2").style.zIndex = "1500px";
            //3
            document.getElementById("imgban3").style.right = "1200px";
            document.getElementById("imgban3").style.zIndex = "500px";
        }, 500);
        setTimeout(function () {
            document.getElementById("imgban2").style.opacity = "1";
        }, 1000);
        //banner status
        bannerStatus = 2;
    }
    else if (bannerStatus === 2) {
        document.getElementById("imgban3").style.opacity = "0";
        //timer
        setTimeout(function () {
            document.getElementById("imgban2").style.right = "0px";
            document.getElementById("imgban2").style.zIndex = "1000px";
            document.getElementById("imgban3").style.right = "-1200px";
            document.getElementById("imgban3").style.zIndex = "1500px";
            document.getElementById("imgban1").style.right = "1200px";
            document.getElementById("imgban1").style.zIndex = "500px";
        }, 500);
        setTimeout(function () {
            document.getElementById("imgban3").style.opacity = "1";
        }, 1000);
        //banner status
        bannerStatus = 3;
    }
    else if (bannerStatus === 3) {
        document.getElementById("imgban1").style.opacity = "0";
        //timer
        setTimeout(function () {
            document.getElementById("imgban3").style.right = "0px";
            document.getElementById("imgban3").style.zIndex = "1000px";
            document.getElementById("imgban1").style.right = "-1200px";
            document.getElementById("imgban1").style.zIndex = "1500px";
            document.getElementById("imgban2").style.right = "1200px";
            document.getElementById("imgban2").style.zIndex = "500px";
        }, 500);
        setTimeout(function () {
            document.getElementById("imgban1").style.opacity = "1";
        }, 1000);
        //banner status
        bannerStatus = 1;
    }
}
