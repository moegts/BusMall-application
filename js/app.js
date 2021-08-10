`use strict`
// array of images
let imgArray = [`bag.jpg`, `banana.jpg`, `bathroom.jpg`, `boots.jpg`, `breakfast.jpg`, `bubblegum.jpg`, `chair.jpg`, `cthulhu.jpg`, `dog-duck.jpg`, `dragon.jpg`, `pen.jpg`, `pet-sweep.jpg`, `scissors.jpg`, `shark.jpg`, `sweep.png`, `tauntaun.jpg`, `unicorn.jpg`, `water-can.jpg`, `wine-glass.jpg`]

let all = [];
// get the tag we want to watch the contant that we click on it
const imageSection = document.getElementById(`imageSection`)

let leftImage = document.getElementById('leftImage')
let rightImage = document.getElementById('rightImage')
let centerImage = document.getElementById('centerImage')

let clicked = 0; // how much the user clicked
let numberOfRounds = 24; // number of rounds

function
    rest(name, imageSrc) {
    this.name = name;
    this.image = imageSrc;
    this.shown = 0; // it should start with 0 untill we start the page it will become 1 as the first time

    rest.all.push(this);
}
rest.all = [];


// split the names for every postion image name and image type in array..
for (let i = 0; i < imgArray.length; i++) {
    new rest(imgArray[i].split('.')[i], imgArray[i]);
}

//function for runder
function
    render() {
    // we create random number generator and - it with 1 (array.length will start counting from 1 and we count in programing from 0)

    let leftRandom = getRandomNumber(0, imgArray.length - 1); // left image
    let rightRandom = getRandomNumber(0, imgArray.length - 1); //  right image
    let centerRandom = getRandomNumber(0, imgArray.length - 1); // center image

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
            render();
            clicked++;
            console.log(`this is counter for clicks: ${clicked}`)
        }

    console.log(e); // here is how you console log fucntion to check what is happining
}

//**************************************************************************************/
// i think 24 is the right to use not like every one if you want 25 real round not 26 */
//************************************************************************************/
