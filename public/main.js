//create an array and push the images to the array//
let cardData = [];
cardData.push("skeleton.jpeg", "mouth.jpeg", "hand.jpeg", "girl.jpeg", "ghost.jpeg", "fruit.jpeg", "boy.jpeg", "bath.jpeg");
let copyArray = [];

//use a for loop to duplicate the data to fill all the boxes//
for (let index = 0; index < cardData.length; index++) {
    const element = cardData[index];
    copyArray.push(element);
    copyArray.push(element);
}

//replace the old array with the new duplicated one//
cardData = copyArray;

//function with a for loop to shuffle the array//
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//calls the shuffle function//
shuffleArray(cardData);
console.log(cardData);


let cardsWon = []
let cardsChosen = [];
let cardsChosenId = [];
let block = false;

//function that get the ID when card is clicked on//
function cardFlip(id) {
    if (cardsChosenId.length === 1 & cardsChosenId[0] === id) return
    if (block) return
    let cardView = document.getElementById(id);
    cardView.style.backgroundImage = "url(images/" + cardData[id] + ")";
    console.log(id);
    cardsChosen.push(cardData[id]);
    console.log(cardsChosen);
    cardsChosenId.push(id);

    if (cardsChosen.length === 2) {
        block = true;
        setTimeout(checkForMatch, 500)
    }
}

function checkForMatch() {
    block = false;
    const optionOne = cardsChosen[0];
    const optionTwo = cardsChosen[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        //alert("You found a match")//
        cardsWon.push(cardsChosen[0]);
        cardsWon.push(cardsChosen[1]);
        if (cardsWon.length === cardData.length) {
            alert("You won the game!")
            for (let index = 0; index < cardData.length; index++) {
                const element = index;
                let cardView = document.getElementById(element);
                cardView.style.backgroundImage = "url()";
            }
            shuffleArray(cardData);
            cardsWon = [];
        }
    } else {
        //alert('Sorry, try again');//
        for (let index = 0; index < cardsChosenId.length; index++) {
            const element = cardsChosenId[index];
            let cardView = document.getElementById(element);
            cardView.style.backgroundImage = "url()";

        }
    }


    cardsChosen = [];
    cardsChosenId = [];
}