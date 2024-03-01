import React from "react";

export default function JavaProjects() {
    return (
        // Page content
        <div class="content">
            <h2><a href="https://github.com/lenny400/absurdle" target="_blank">Absurdle</a></h2>
            <p>Absurdle is a variation of the popular game Wordle, where the player tries to guess a five letter English
                word and is given feedback in the form of colored tiles indicating correct or incorrect letter placement.
                The difference is that Absurdle tries to prolong the game by having multiple words that can be the solution
                word instead of picking one in the beginning. This Java program utilizes sets and maps to create and manipulate
                nested collections of data. To run the program, compile the AbsurdleManager class and run AbsurdleMain.</p>

            <h2><a href="https://github.com/lenny400/20-questions" target="_blank">20 Questions</a></h2>
            <p>20 Questions is a guessing game in which one player chooses a secret object and the other player asks yes/no
                questions to try to identity the chosen object. In this version, the human will be the chooser and begin a
                round by choosing an object. The computer will be the guesser and attempt to guess that object by asking a series
                of yes/no questions until it thinks it knows the answer. Then, the computer makes a guess; if its guess is correct,
                the computer wins, and otherwise the human player wins. If the computer loses, it will add the chosen object to its
                knowledge base so it will be able to guess it the next time it plays. This Java program utilizes recursion to traverse
                the binary tree of questions and answers.</p>
        </div>
    )
}