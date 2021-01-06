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

function CREATE_GAME() {
    let game_created = {
        'wins': 0,
        'losses': 0,
        'ties': 0,
        'player_turn': true,
        'bot_hand': [],
        'player_hand': [],
        'game_status': true
    }
    return game_created;
}

function DECK_OF_CARDS() {
    let number = 1;
    let array = [];
    for (let i = 0; i < 52; i++) {
        if (number === 14) {
            number = 1;
        }
        array.push(number);
        number++;
    }

    return array;
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


function HIT(game, cards) {
    let index = 0;
    let card = cards.pop(index);
    if (game['player_turn'] == true) {
        game['player_hand'].push(card);
        console.log('Players new card is ' + card);
    } else if (game['player_turn'] == false) {
        console.log('Bots new card is ' + card);
        game['bot_hand'].push(card);
    }

}

function START(game) {
    const cards = DECK_OF_CARDS();
    HIT(game, cards);
    HIT(game, cards);
    console.log('Your cards are: ', game['player_hand']);
    game['player_turn'] = !game['player_turn'];
    HIT(game, cards);
    HIT(game, cards);
}

function getHandTotal(hand) {
    const handTotal = hand.reduce((a, b) => a + b, 0);
    return handTotal;
}

function COMPARE_HANDS(game) {
    if (player_1_score > player_2_score) {
        wins += 1;
        return 'YOU WIN CONGRATS';
    } else if (player_2_score > player_1_score) {
        losses += 1;
        return 'SORRY YOU LOSE';
    } else {
        ties += 1;
        return 'ITS A TIE';
    }
}


function STAND(game) {
    if (player_turn == true) {
        player_turn = false;
        return player_turn;
    } else if (player_turn == false) {
        COMPARE_HANDS();
    }
}

function CHECK(choice) {
    if (choice === "hit") {
        HIT();
    } else if (choice === "stand") {
        STAND();
    } else {
        choice = prompt('Invalid option, please choose "hit" or "stand."');
    }
}

function STATUS() {
    console.log('Wins: ' + wins);
    console.log('losses: ' + losses);
    console.log('ties: ' + ties);
}

function checkForAce(card) {
    if (card == 1) {
        return true;
    } else {
        return false;
    }
}



function main() {
    const game = CREATE_GAME()
    while (game_status === true) {
        document.write('Welcome to Blackjack!');
        document.write('1. Start game');
        document.write('2. Check your record');
        document.write('3. Quit');
        let x = prompt('Choose an option:');
        if (game_status === true) {
            switch (x) {
                case 1:
                    START();
                    let choice = prompt('Choose if you want to "hit" or "stand."');
                    CHECK(choice);

                    //players turn
                    if (player_turn = 0) {
                        if (checkForAce() == true) {
                            if ((player_2_score >= 17) || (player_2_score <= 21)) {
                                player_2_score += 10;
                                STAND();
                            }
                        } else if ((checkForAce == false) && (player_2_score < 17)) {
                            HIT();
                        } else {
                            HIT();
                        }
                    }
                    //bots turn

                    break;
                case 2:
                    STATUS()
                    return;
                    break;
                case 3:
                    console.log('Thanks for playing!');
                    game_status = false;
                    break;
            }
        }
    }

}
main();