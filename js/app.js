`use strict`
// array of images
let imgArray = [`bag.jpg`, `banana.jpg`, `bathroom.jpg`, `boots.jpg`, `breakfast.jpg`, `bubblegum.jpg`, `chair.jpg`, `cthulhu.jpg`, `dog-duck.jpg`, `dragon.jpg`, `pen.jpg`, `pet-sweep.jpg`, `scissors.jpg`, `shark.jpg`, `sweep.png`, `tauntaun.jpg`, `unicorn.jpg`, `water-can.jpg`, `wine-glass.jpg`]

// array to contain ----
let all = [];

// get the tag we want to watch the contant that we click on it
const imageSection = document.getElementById(`imageSection`)

// get the button that will show the result
let stopButton = document.getElementById('stopButton')

// get the result Ul to print on it the result
let resultUl = document.getElementById('resultUl')

// get the 3 images linked
let leftImage = document.getElementById('leftImage')
let rightImage = document.getElementById('rightImage')
let centerImage = document.getElementById('centerImage')

let vP = document.getElementById('vSpan')
// to get the random number every time and use the number of the image to enter if it clicked or not every time
let leftRandom = 0;
let rightRandom = 0;
let centerRandom = 0;

let clicked = 0; // how much the user clicked
let numberOfRounds = 24; // number of rounds

// this to count how much you do click everytime on the images for each one alone for the postion only

let leftImageCounter = 0;
let rightImageCounter = 0;
let centerImageCounter = 0;

function
    rest(name, imageSrc) {
    this.name = name;
    this.image = imageSrc;
    this.shown = 0; // it should start with 0 untill we start the page it will become 1 as the first time
    this.clicksOnImage = 0;
    rest.all.push(this);
}
rest.all = [];


// split the names for every postion image name and image type in array..
for (let i = 0; i < imgArray.length; i++) {
    new rest(imgArray[i].split('.')[0], imgArray[i]);
}

//function for runder
function
    render() {
    // we create random number generator and - it with 1 (array.length will start counting from 1 and we count in programing from 0)

    leftRandom = getRandomNumber(0, imgArray.length - 1); // left image
    rightRandom = getRandomNumber(0, imgArray.length - 1); //  right image
    centerRandom = getRandomNumber(0, imgArray.length - 1); // center image

    do {
        do {
            rightRandom = getRandomNumber(0, imgArray.length - 1); //  right image
        } while ((rightRandom === centerRandom) || (rightRandom === leftRandom))
        centerRandom = getRandomNumber(0, imgArray.length - 1); // center image
    } while ((leftRandom === rightRandom) || (leftRandom === centerRandom) || (rightRandom === centerRandom));

    console.log(leftRandom + "-" + rightRandom + "-" + centerRandom) // checker


    //here we enter the img src and decleare the name for every image postion
    console.log(leftRandom);
    leftImage.src = `./img/` + rest.all[leftRandom].image;
    rightImage.src = `./img/` + rest.all[rightRandom].image;
    centerImage.src = `./img/` + rest.all[centerRandom].image;

    // to + how much the image did showed
    rest.all[leftRandom].shown++;
    rest.all[rightRandom].shown++;
    rest.all[centerRandom].shown++;
    console.log(rest.all)

}

render()

function
    getRandomNumber(min, max) {
    // here we get random number by this line
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//here we pick the tag we want with the id first then we add click event listener so it will be linked to that tag daiminitons
imageSection.addEventListener('click', clickbot);
function
    clickbot(e) {
    if ((e.target.id === 'leftImage' || e.target.id === 'rightImage' || e.target.id === 'centerImage')
        && (clicked <= numberOfRounds)) {

        // we add the runder in the click event listener function to restart the function everytime we click (as a remote way (linked))
        clicked++;

        if (e.target.id === 'leftImage') {
            leftImageCounter++;
            rest.all[leftRandom].clicksOnImage++;
        } else if (e.target.id === 'rightImage') {
            rightImageCounter++;
            rest.all[rightRandom].clicksOnImage++;
        } else {
            centerImageCounter++;
            rest.all[centerRandom].clicksOnImage++;
        }
        render();
        console.log(rest.all)
        console.log(`this is counter for clicks: ${clicked}`)
    } else {
        console.log(e); // here is how you console log fucntion to check what is happining
    }
}


stopButton.addEventListener('click', printOnHTML)


function printOnHTML() {
    for (let i = 0; i < rest.all.length; i++) {
        let li = document.createElement('li');
        li.textContent = `${rest.all[i].name} had ${rest.all[i].clicksOnImage} votes,  and was seen ${rest.all[i].shown} times.`;
        const ul = document.getElementById('stopButton')
        resultUl.appendChild(li)
    }
    stopButton.removeEventListener('click', printOnHTML);

    startchart() // we call the chart here
}



function startchart() {
    let nameArr = [];
    let showArr = [];
    let clickArr = [];

    for (let i = 0; i < rest.all.length; i++) {
        nameArr.push(rest.all[i].name);
        showArr.push(rest.all[i].shown);
        clickArr.push(rest.all[i].clicksOnImage);
    }
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nameArr,
            datasets: [{
                label: '# Shown',
                data: showArr,
                backgroundColor: [
                    'rgba(124, 77, 52, 0.8)',
                    'rgba(190, 76, 75, 0.2)',
                    'rgba(136, 205, 86, 0.7)',
                    'rgba(158, 113, 223, 0.6)',
                    'rgba(172, 143, 89, 0.2)',
                    'rgba(86, 23, 21, 0.7)',
                    'rgba(245, 161, 135, 0.2)',
                    'rgba(153, 107, 194, 0.5)',
                    'rgba(18, 221, 180, 0.7)',
                    'rgba(194, 242, 10, 0.1)',
                    'rgba(220, 126, 81, 1)',
                    'rgba(65, 208, 65, 0.2)',
                    'rgba(135, 71, 113, 0.8)',
                    'rgba(100, 211, 170, 0.6)',
                    'rgba(2, 216, 158, 0.2)',
                    'rgba(102, 162, 104, 0.4)',
                    'rgba(59, 80, 88, 0.3)',
                    'rgba(172, 218, 117, 0.2)',
                    'rgba(165, 18, 108, 0.1)'
                ],
                borderColor: [
                    'rgba(157, 215, 104, 0.3)',
                    'rgba(89, 126, 167, 0.9)',
                    'rgba(230, 84, 120, 0.7)',
                    'rgba(172, 133, 131, 0.1)',
                    'rgba(181, 100, 148, 0.3)',
                    'rgba(145, 89, 22, 0.2)',
                    'rgba(153, 33, 138, 0.3)',
                    'rgba(73, 248, 69, 0.9)',
                    'rgba(138, 242, 50, 0)',
                    'rgba(28, 24, 151, 0.3)',
                    'rgba(28, 71, 92, 1)',
                    'rgba(192, 3, 62, 0.4)',
                    'rgba(42, 244, 17, 0.6)',
                    'rgba(57, 18, 175, 0.7)',
                    'rgba(161, 187, 138, 0.3)',
                    'rgba(130, 251, 216, 0.7)',
                    'rgba(146, 101, 7, 0.3)',
                    'rgba(190, 134, 196, 0.3)',
                    'rgba(127, 142, 161, 1)',
                    'rgba(225, 13, 30, 0.8)'
                ],
                borderWidth: 1
            },
            {
                label: '# Clicks on',
                data: clickArr,
                backgroundColor: [
                    'rgba(157, 215, 104, 0.3)',
                    'rgba(89, 126, 167, 0.9)',
                    'rgba(230, 84, 120, 0.7)',
                    'rgba(172, 133, 131, 0.1)',
                    'rgba(181, 100, 148, 0.3)',
                    'rgba(145, 89, 22, 0.2)',
                    'rgba(153, 33, 138, 0.3)',
                    'rgba(73, 248, 69, 0.9)',
                    'rgba(138, 242, 50, 0)',
                    'rgba(28, 24, 151, 0.3)',
                    'rgba(28, 71, 92, 1)',
                    'rgba(192, 3, 62, 0.4)',
                    'rgba(42, 244, 17, 0.6)',
                    'rgba(57, 18, 175, 0.7)',
                    'rgba(161, 187, 138, 0.3)',
                    'rgba(130, 251, 216, 0.7)',
                    'rgba(146, 101, 7, 0.3)',
                    'rgba(190, 134, 196, 0.3)',
                    'rgba(127, 142, 161, 1)',
                    'rgba(225, 13, 30, 0.8)'
                ],
                borderColor: [
                    'rgba(124, 77, 52, 0.8)',
                    'rgba(190, 76, 75, 0.2)',
                    'rgba(136, 205, 86, 0.7)',
                    'rgba(158, 113, 223, 0.6)',
                    'rgba(172, 143, 89, 0.2)',
                    'rgba(86, 23, 21, 0.7)',
                    'rgba(245, 161, 135, 0.2)',
                    'rgba(153, 107, 194, 0.5)',
                    'rgba(18, 221, 180, 0.7)',
                    'rgba(194, 242, 10, 0.1)',
                    'rgba(220, 126, 81, 1)',
                    'rgba(65, 208, 65, 0.2)',
                    'rgba(135, 71, 113, 0.8)',
                    'rgba(100, 211, 170, 0.6)',
                    'rgba(2, 216, 158, 0.2)',
                    'rgba(102, 162, 104, 0.4)',
                    'rgba(59, 80, 88, 0.3)',
                    'rgba(172, 218, 117, 0.2)',
                    'rgba(165, 18, 108, 0.1)'
                ],
                borderWidth: 1
            }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// how to be more DRY in line #67 in the while condition