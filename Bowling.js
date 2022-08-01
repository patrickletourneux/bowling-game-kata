class Bowling {
    scoreValue = 0 ;
    score() {
        return this.scoreValue;
    }
    roll(numPinsKnockedDown) {
        this.scoreValue += numPinsKnockedDown;
        return numPinsKnockedDown;
    }
}

module.export = Bowling; 
