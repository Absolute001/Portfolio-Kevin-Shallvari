const  spinner = document.getElementById('vinyl');
let rotateCount = 0;
let startTime = null;
let rAF;
let animationStatus = 0;


function draw(timestamp) {
    if(!startTime) {
        startTime=timestamp;
    }

    rotateCount = (timestamp - startTime)/3;

if(rotateCount>359) {
    rotateCount %= 360;
}

spinner.style.transform = `rotate(${rotateCount}deg)`;
rAF = requestAnimationFrame(draw);
}

draw();

document.body.addEventListener('click',() => {
    if (animationStatus === 0) {
        cancelAnimationFrame(rAF);    
        animationStatus = 1;
    }
    
    else {
        rAF = requestAnimationFrame(draw);
        animationStatus = 0;
    }
})