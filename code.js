/*
   MEC TTP 2021 Winter Assignment 2: Blackjack Game Engine

   Use this js file to write your project outline and your core game logic.
   You will use your browser's javascript console to interact with the game.

 */
/*
// Purpose: To practice implementing core javascript principles within the framing of building a blackjack card game engine.

/* FEATURES 
player starts with 2 cards
DECK_OF_CARDS()
HIT()
STAND()
COMPARE_HANDS()
USER_CARDS()
AI_CARDS()
CHECK()
START()
STATUS()
*/

/*
cards range 1-13
Assume there is no betting involved, only wins, losses, and ties.
Assume there are only 2 players: the user and the dealer AI.
Assume aces always count as 1.
Assume there is no option to split, double down, or buy insurance.
Assume that both the dealer's cards are given face up (ie visible).
*/


// function CREATE_GAME() {
//     let game = {
//         'wins': 0,
//         'losses': 0,
//         'ties': 0,
//         'player_turn': true,
//         'bot_hand': [],
//         'player_hand': [],
//         'status': true
//     }
//     return game;
// }
// //this works
// function DECK_OF_CARDS() {
//     let number = 1;
//     const array = [];
//     for (let i = 0; i < 52; i++) {
//         if (number === 14) {
//             number = 1;
//         }
//         array.push(number);
//         number += 1;
//     }
//     console.log('Array: ', array);
//     return array;
// }
// let deck=DECK_OF_CARDS();
// //this works
// const shuffleArray = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array;
// }

// function getHandTotal(hand) {
//     const handTotal = hand.reduce((a, b) => a + b, 0);
//     return handTotal;
// }

// function HIT(game, cards) {
//     let index = 0;
//     cards = cards.pop(index);
//     if (game.player_turn === true) {
//         game.player_hand.push(cards);
//         console.log('Players new card is ' + cards);
//         if(getHandTotal(game.player_hand)>21){
//             console.log('GAME OVER BOT WINS!');
//             game.losses += 1;
//         }
//     } else if (game.player_turn === false) {
//         console.log('Bots new card is ' + cards);
//         game.bot_hand.push(cards);
//         if(getHandTotal(game.bot_hand)>21){
//             console.log('GAME OVER YOU WIN!')
//             game.wins += 1;
//         }
        
//     }

// }
// // let game=CREATE_GAME();
// function START(game) {
    
//     const cards = deck;
//     shuffleArray(cards);
//     HIT(game, cards);
//     HIT(game, cards);
//     console.log('Your cards are: ' + game.player_hand);
//     game.player_turn = !game.player_turn;
//     HIT(game, cards);
//     HIT(game, cards);
//     console.log('Bots cards are: ' + game.bot_hand)
// }


// function COMPARE_HANDS(game) {
//     game.player_score = getHandTotal(game.player_hand);
//     game.bot_score = getHandTotal(game.bot_hand);
//     if (game.player_score > game.bot_score) {
//         game.wins += 1;
//         return 'YOU WIN CONGRATS';
//     } else if (game.player_score < game.bot_score) {
//         game.losses += 1;
//         return 'SORRY YOU LOSE';
//     } else {
//         game.ties += 1;
//         return 'ITS A TIE';
//     }
// }


// function STAND(game) {
//     if (game.player_turn === true) {
//         game.player_turn = !game.player_turn;
//         return game.player_turn;
//     } 
//     else if (game.player_turn == false) {
//         COMPARE_HANDS(game);
//     }
// }

// function getPrompt(typeOfPrompt) {
//     let _prompt = null;
//     if (typeOfPrompt === 'option') {
//         _prompt = parseInt(prompt('Enter an option'));
//         return _prompt;
//     }
//     if (typeOfPrompt === 'choice') {
//         _prompt = prompt('Please choose to "hit" or "stand"');
//         return _prompt;
//     }
//     if (typeOfPrompt === 'invalid choice') {
//         _prompt = prompt('Invalid option, please choose "hit" or "stand."');
//         return _prompt;
//     }
// }

// function CHECK(choice,game,cards) {
//     if (choice === "hit") {
//         HIT(game,cards);
//         choice = getPrompt(typeOfPrompt='choice')
//         CHECK(choice,game,cards);
//     } else if (choice === "stand") {
//         STAND(game);
//     } else {
//         choice = getPrompt(typeOfPrompt='invalid choice');
//         CHECK(choice,game,cards);
//     }
// }

// function BOT_CHECK(game,cards){
//         console.log('*Bots turn*');
//         while(getHandTotal(game.bot_hand)< 17){
//             HIT(game,cards);
//         }
//         STAND(game);
//     }

// function STATUS(game) {
//     console.log('Wins: ' + game.wins);
//     console.log('losses: ' + game.losses);
//     console.log('ties: ' + game.ties);
// }

// function checkForAce(card) {
//     if (card == 1) {
//         return true;
//     } else {
//         return false;
//     }
// }
// game=CREATE_GAME();
// START(game);
// function main() {
    // const game = CREATE_GAME();
    // console.log('Welcome to Blackjack!');
    // console.log('1. Start game');
    // console.log('2. Check your record');
    // console.log('3. Quit');
//     let x = getPrompt(typeOfPrompt='option');
//     switch (x) {
//         case 1:
//             //players turn
//             START(game);
//             let choice = getPrompt(typeOfPrompt='choice');
//             CHECK(choice);
//             //bots turn
//             if (game.player_turn === false) {
//                 BOT_CHECK(game,cards)
//             }
//             break;
//         case 2:
//             STATUS(game);
//             break;
//         case 3:
//             console.log('Thanks for playing!');
//             game.status = false;
//             break;
//     }

// }

// main();



function CREATE_GAME() {
    let game = {
        'wins': 0,
        'losses': 0,
        'ties': 0,
        'player_turn': true,
        'bot_hand': [],
        'player_hand': [],
        'status': true
    }
    return game;
}

function DECK_OF_CARDS() {
    let number = 1;
    const array = [];
    for (let i = 0; i < 52; i++) {
        if (number === 14) {
            number = 1;
        }
        array.push(number);
        number += 1;
    }
    console.log('Array: ', array);
    return array;
}
let deck=DECK_OF_CARDS();
//this works
function reset(){
    game = START(game,deck);
}
function getHandTotal(hand) {
    const handTotal = hand.reduce((a, b) => a + b, 0);
    return handTotal;
}
function HIT(game, cards) {
    let index = 0;
    cards = cards.pop(index);
    if (game.player_turn === true) {
        game.player_hand.push(cards);
        console.log('Players new card is ' + cards);
        if(getHandTotal(game.player_hand)>21){
            console.log('GAME OVER BOT WINS!');
            game.losses += 1;
        }
    } else if (game.player_turn === false) {
        console.log('Bots new card is ' + cards);
        game.bot_hand.push(cards);
        if(getHandTotal(game.bot_hand)>21){
            console.log('GAME OVER YOU WIN!')
            game.wins += 1;
        }
        
    }

}


const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function START(game) {
    const cards = shuffleArray(deck);
    HIT(game, cards);
    HIT(game, cards);
    console.log('Your cards are: ' + game.player_hand);
    game.player_turn = false;
    HIT(game, cards);
    HIT(game, cards);
    console.log('Bots cards are: ' + game.bot_hand)
    game.player_turn = true;
}
function COMPARE_HANDS(game) {
    game.player_score = getHandTotal(game.player_hand);
    game.bot_score = getHandTotal(game.bot_hand);
    if (game.player_score > game.bot_score) {
        game.wins += 1;
        return 'YOU WIN CONGRATS';
    } else if (game.player_score < game.bot_score) {
        game.losses += 1;
        return 'SORRY YOU LOSE';
    } else {
        game.ties += 1;
        return 'ITS A TIE';
    }
}
function BOT_CHECK(game,cards){
    console.log('*Bots turn*');
    while(getHandTotal(game.bot_hand)< 17){
        HIT(game,cards);
    }
    STAND(game);
    COMPARE_HANDS(game);
}
function STAND(game) {
    if (game.player_turn === true) {
        game.player_turn = false;
        BOT_CHECK(game,deck);
    } 
    else if (game.player_turn == false) {
        COMPARE_HANDS(game);
    }
}




let game=CREATE_GAME();
START(game);
