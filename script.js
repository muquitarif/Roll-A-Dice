let roll = document.getElementById("roll-btn");
let reset = document.getElementById("reset-btn");
let dice = document.getElementById("dice-image");
let diceResult = document.getElementById("result");


const resetDice = () => {
    dice.src = "./images/one.png";
    result.innerHTML = "";
}

const rollDice = () => {
    let num = Math.round(Math.random() * 5) + 1;

    let result;
    console.log(num);

    switch (num) {
        case 1: {
            dice.src = "./images/one.png";
            result = "One";
            break;
        }
        case 2: {
            dice.src = "./images/two.png";
            result = "Two";
            break;
        }
        case 3: {
            dice.src = "./images/three.png";
            result = "Three";
            break;
        }
        case 4: {
            dice.src = "./images/four.png";
            result = "Four";
            break;
        }
        case 5: {
            dice.src = "./images/five.png";
            result = "Five";
            break;
        }
        case 6: {
            dice.src = "./images/six.png";
            result = "Six";
            break;
        }
    }
    diceResult.innerHTML = `Its ${result}`;
};

roll.addEventListener("click", rollDice);
reset.addEventListener("click", resetDice);