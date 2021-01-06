# MEC TTP 2021 Winter Assignment 2: Blackjack Game Engine

## Purpose

To practice implementing core javascript principles within the framing of building a blackjack card game engine.

## Background

Blackjack is a very common, popular card game with relatively simple rules. A hand can end as quickly as only dealing 4 cards but has also given rise to advanced analysis like card counting. You can read the full rules from the United States Playing Card Company here:

[https://bicyclecards.com/how-to-play/blackjack/](https://bicyclecards.com/how-to-play/blackjack/)

## Task

You are going to recreate a javascript only version of blackjack. Be sure to utilize the project management skills we discussed in class, eg: outlining major features, creating function stubs, identifying gotchas, and writing pseudocode. Begin by forking this repo. You will develop the game engine in the `code.js` file and run it by opening the index.html file and accessing your javascript console.

## Requirements

At the very least, your code should be able to:
1. Realistically deal out cards and shuffle as needed. For example, only 1 king of spades should be dealt out to any player until the entire deck is reshuffled. Assume the deck is reshuffled after every hand.
2. The player is able to execute the following commands at their respective appropriate times: `hit()`, `stand()`, `status()`, `reset()`, `start()`.
3. The dealer AI runs automatically based on the following (standardized) rules:  
```
If the dealer's total card value is 17 or more, the dealer must stand.
If the total is 16 or under, they must hit.
The dealer must continue to take cards until the total is 17 or more,
at which point the dealer must stand.
If the dealer has an ace, and counting it as 11 would bring the total
to 17 or more (but not over 21), the dealer must count the ace as 11 and stand.
```
4. There must be some way to track the player's progress, at the very least the number of wins, losses, and ties.

## Caveats

Building a full model of a blackjack game is intense. Remember, our goal for this assignment is only to practice writing javascript code. Therefore, you can take the following caveats:

- Assume there is no betting involved, only wins, losses, and ties.
- Assume there are only 2 players: the user and the dealer AI.
- Assume aces always count as 1.
- Assume there is no option to split, double down, or buy insurance.
- Assume that both the dealer's cards are given face up (ie visible).

This should simplify the game enough that you are able to accomplish this in the time allotted. If you want extra practice, you can begin removing the assumptions one by one and implementing the necessary changes in your game engine.

## Submission

Submit a single github link before 11:59pm EST on Jan 6, 2021 using the following form. Only one student on your team needs to submit and be sure to tag all the team members when submitting.

[https://airtable.com/shrdhk3TgUWZ6pFO5](https://airtable.com/shrdhk3TgUWZ6pFO5)
