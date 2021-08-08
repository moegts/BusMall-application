// array contain all the name of the photos on the img folder
let imgNames = [`bag.jpg`, `banana.jpg`, `bathroom.jpg`, `boots.jpg`, `breakfast.jpg`, `bubblegum.jpg`, `chair.jpg`, `cthulhu.jpg`, `dog-duck.jpg`, `dragon.jpg`, `pen.jpg`, `pet-sweep.jpg`, `scissors.jpg`, `shark.jpg`, `sweep.png`, `tauntaun.jpg`, `unicorn.jpg`, `water-can.jpg`, `wine-glass.jpg`]

//array to store 
let all = [];
// this is for the number of the rounds each time +1
let rounds = 0;
// this is for the round number the EventListener will stop @
let numberOfRounds = 5;
// to link the HTML with the section from the js
const imageSection = document.getElementById('img-Section')

// to link the HTML with the images from the js
let leftImage = document.getElementById('leftImage')
let centerImage = document.getElementById('centerImage')
let rightImage = document.getElementById('rightImage')

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

    leftImage.src = './img/' + Rest.all[leftRandom].image;
    centerImage.src = './img/' + Rest.all[centerRandom].image;
    rightImage.src = './img/' + Rest.all[rightRandom].image;
    // sum every time you click on image
    Rest.all[leftRandom].watcher++;
    Rest.all[centerRandom].watcher++;
    Rest.all[rightRandom].watcher++;
    console.log(Rest.all);
}

// render Image invoker
renderImage();

// here we do listene to the page if any click happen we will 
imageSection.addEventListener('click', notClickHandlerxD);
function notClickHandlerxD(e) {
    if (e.target.id === (`leftImage` || e.target.id === `centerImage` || e.target.id === `rightImage`) && (rounds <= numberOfRounds)) {
        renderImage()
        rounds++;
    }
}
// this will create random num
function randomApe(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

