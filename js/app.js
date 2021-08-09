'use strict';


//array to store 
let all = [];

// this is for the number of the rounds each time +1
let rounds = 0;

// this is for the round number the EventListener will stop @
let numberOfRounds = 25;

// array contain all the name of the photos on the img folder
let imgNames = [`bag.jpg`, `banana.jpg`, `bathroom.jpg`, `boots.jpg`, `breakfast.jpg`, `bubblegum.jpg`, `chair.jpg`, `cthulhu.jpg`, `dog-duck.jpg`, `dragon.jpg`, `pen.jpg`, `pet-sweep.jpg`, `scissors.jpg`, `shark.jpg`, `sweep.png`, `tauntaun.jpg`, `unicorn.jpg`, `water-can.jpg`, `wine-glass.jpg`]

// to link the HTML with the section from the js
let results = [];
let number = [];
let clicker = 1;
let click = '';
let photoLeft;
let photoCenter;
let photoRight;
let fR = [];


// select img section by id
const imageSection = document.getElementById('img-Section')

// selct the button by id
const btnSection = document.getElementById('clickIt');

// to link the HTML with the images from the js
let leftImage = document.getElementById('leftImage')
let centerImage = document.getElementById('centerImage')
let rightImage = document.getElementById('rightImage')

let counterTracer = document.getElementById('rounds').innerHTML = `You got ${numberOfRounds - rounds} rounds left  `;
let pressIt = document.createElement("button");

let fainalPrint = [];
// we make this so every time we want to call the img name or path we use
function Rest(name, imageSrc) {
    this.name = name;
    this.image = imageSrc
    this.watcher = 0;
    Rest.all.push(this);
}

// rest array
Rest.all = [];

// this will loop the img names to split them in the rest array
for (let i = 0; i < imgNames.length; i++) {
    new Rest(imgNames[i].split('.')[0], imgNames[i]);
}

console.log(Rest.all);

// here we runder 3 images randomly  by create random number for every image by it self and recall it with with the img folder and name place in the array
function renderImage() {
    let leftRandom = randomApe(0, imgNames.length - 1);
    let centerRandom = randomApe(0, imgNames.length - 1);
    let rightRandom = randomApe(0, imgNames.length - 1);

    photoLeft = leftRandom;
    photoCenter = centerRandom
    photoRight = rightRandom
    fR = [photoLeft, photoCenter, photoRight];

    console.log(Rest.all[photoLeft].name);

    // link the imgs with the right link randomly
    leftImage.src = './img/' + Rest.all[leftRandom].image;
    centerImage.src = './img/' + Rest.all[centerRandom].image;
    rightImage.src = './img/' + Rest.all[rightRandom].image;

    // sum every time you click on image
    Rest.all[leftRandom].watcher++;
    Rest.all[centerRandom].watcher++;
    Rest.all[rightRandom].watcher++;
    console.log(Rest.all);

    for (let i = 0; i < imgNames.length; i++) {

        results[i] = Rest.all[i].name + " had " + Rest.all[i].clicker + " votes";

    }
    for (let i = 0; i < imgNames.length; i++) {

        number[i] = " and was see " + Rest.all[i].watcher + " times .";

    }


    return fR;
}

// render Image invoker
renderImage();

fR = renderImage();

// here we do listene to the page if any click happen we will 
imageSection.addEventListener('click', notClickHandlerxD);
function notClickHandlerxD(e) {
    if ((e.target.id === `leftImage` || e.target.id === `centerImage` || e.target.id === `rightImage`) && (rounds <= numberOfRounds)) {
        if (e.target.id == 'leftImage') {

            Rest.all[fR[0]].clicker++;

            console.log(Rest.all[fR[0]].name,
                Rest.all[fR[0]].clicker);
        }
        if (e.target.id == 'centerImage') {
            Rest.all[fR[1]].clicker++;

            console.log(Rest.all[fR[1]].name,
                Rest.all[fR[1]].clicker);
        }
        if (e.target.id == 'rightImage') {
            Rest.all[fR[2]].clicker++;

            console.log(Rest.all[fR[2]].name,
                Rest.all[fR[2]].clicker);
        }

        fR = renderImage() //
        rounds++;

        if (numberOfRounds - rounds !== 0) {
            counterTracer = document.getElementById('rounds').innerHTML = `You got ${numberOfRounds - rounds} rounds left  `;
        } else
            counterTracer = document.getElementById('rounds').innerHTML = `You finished this site quiz good job  `;
    }

}
if (rounds === numberOfRounds) {
    imageSection.removeEventListener('click', notClickHandlerxD);
    console.log('Hello World')
    pressIt.innerHTML = "Click Me";
    btn.appendChild(pressIt);

    pressIt.onclick = function () {
        let ulElement = document.createElement('ul');
        btn.appendChild(ulElement);
        if (rounds === numberOfRounds) {
            for (let i = 0; i < imgNames.length; i++) {
                let liElement = document.createElement('li');
                liElement.textContent = results[i] + number[i];
                ulElement.appendChild(liElement);
                rounds++;
            }
        }
    }
}


// this will create random num
function randomApe(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// name of the photo
// print how much its shown
// print how much its clicked on each photo
// show how much click on the page anywhere
