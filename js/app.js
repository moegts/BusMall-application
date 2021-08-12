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
    
    do{do{
            rightRandom = getRandomNumber(0, imgArray.length - 1); //  right image
        }while((rightRandom === centerRandom) || (rightRandom === leftRandom))
        centerRandom = getRandomNumber(0, imgArray.length - 1); // center image
    }while((leftRandom === rightRandom) || (leftRandom === centerRandom) || (rightRandom === centerRandom));
   
    console.log (leftRandom +"-"+ rightRandom +"-"+ centerRandom) // checker


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
        if((e.target.id === 'leftImage' || e.target.id === 'rightImage' || e.target.id === 'centerImage')
        && (clicked <= numberOfRounds)){

            // we add the runder in the click event listener function to restart the function everytime we click (as a remote way (linked))
            clicked++;

            if (e.target.id === 'leftImage'){
                leftImageCounter++;
                rest.all[leftRandom].clicksOnImage++;
            }else if (e.target.id === 'rightImage'){
                rightImageCounter++;
                rest.all[rightRandom].clicksOnImage++;
            }else{
                centerImageCounter++;
                rest.all[centerRandom].clicksOnImage++;
            }
            render();
            console.log(rest.all)
            console.log(`this is counter for clicks: ${clicked}`)
        }else{
            console.log(e); // here is how you console log fucntion to check what is happining
        }
}


stopButton.addEventListener('click', printOnHTML)


function printOnHTML(){
    for(let i = 0; i < rest.all.length; i++){
    let li = document.createElement('li');
    li.textContent = `${rest.all[i].name} had ${rest.all[i].clicksOnImage} votes,  and was seen ${rest.all[i].shown} times.`;
    const ul = document.getElementById('stopButton')
    resultUl.appendChild(li)
    }
    startchart() // we call the chart here
}


function startchart(){
    let nameArr = [];
    let showArr = [];

    for (let i = 0; i < rest.all.length; i++) {
        nameArr.push(rest.all[i].name);
        showArr.push(rest.all[i].shown);
        
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
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
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