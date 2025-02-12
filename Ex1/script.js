class Game {
    constructor(difficulte) {
        this.difficulte = 4 - difficulte;
        this.limit_int = 100 * difficulte;
        this.nb_guesses = 10 * this.difficulte;
        this.number_to_guess = Math.floor(Math.random() * 2 * this.limit_int - this.limit_int);
    }

    guess() {
        if(this.nb_guesses===0) {
            alert("You lost");
            return false;
        } else {
            let answer = prompt(`Le nombre est entre ${-this.limit_int} et ${this.limit_int} le nombre de tentative restante est ${this.nb_guesses}`);
            answer = Number(answer);
            if(answer<this.number_to_guess) {
                alert("Higher.");
            } else if(answer>this.number_to_guess) {
                alert("Lower.")
            } else {
                alert("You win");
                return false;
            }
            this.nb_guesses -= 1;
            return true;
        }
    }

    game_start() {
        while(this.guess());
    }
}
let play = true;
while(play) {
    let msg = "0";
    let dificulte;
    while(!([1, 2, 3].includes(Number(msg)))) {
        msg = prompt("Choisir la difficulté : facile:1, intermédiaire:2, difficile:3");
    }
    difficulte = Number(msg);
    game = new Game(difficulte);
    game.game_start();
    let play_msg = "";
    while(!(["Y", "N"].includes(play_msg))) {
        play_msg = prompt("Continue playing Yes: Y, No: N");
    }
    play = play_msg=="Y";
}
