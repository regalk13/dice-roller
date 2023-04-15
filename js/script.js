const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');


const rollBtn1 = document.querySelector('#roll_1');
const rollBtn2 = document.querySelector('#roll_2');
const rollBtn3 = document.querySelector('#roll_3');
const rollBtn4 = document.querySelector('#roll_4');
const rollBtn5 = document.querySelector('#roll_5');
const rollBtn6 = document.querySelector('#roll_6');



const randomDice = () => {

    const random = Math.floor(Math.random() * 10);

    if (random >= 1 && random <= 6) {
        rollDice(random);
    }
    else {
        randomDice();
    }
}

const rollDice = random => {

    dice.style.animation = 'rolling 4s';

    setTimeout(() => {

        switch (random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;

            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;

            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;

            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;

            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;

            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;

            default:
                break;
        }

        dice.style.animation = 'none';

    }, 4050);

}
rollBtn1.addEventListener('click', () => rollDice(1));
rollBtn2.addEventListener('click', () => rollDice(2));
rollBtn3.addEventListener('click', () => rollDice(3));
rollBtn4.addEventListener('click', () => rollDice(4));
rollBtn5.addEventListener('click', () => rollDice(5));
rollBtn6.addEventListener('click', () => rollDice(6));
