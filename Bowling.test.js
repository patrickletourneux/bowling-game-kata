// const Bowling = require('./Bowling.js');

class Bowling {
    scoreValue = 0 ;
    rollCountInFrame = 0 ;
    scoreFirstRoll = 0;
    scoreSecondRoll = 0;
    isStrikePreviousRoll = false;
    isSparePreviousRoll = false;
    frameCount = 0 ;

    #calculScore(numPinsKnockedDown){
        this.scoreValue += numPinsKnockedDown;
        if (this.frameCount >=10 ){
            return
        }
        if (this.isStrikePreviousRoll === true){
            this.scoreValue += numPinsKnockedDown;
            return
        }
        if (this.isSparePreviousRoll === true && this.rollCountInFrame === 1){
            this.scoreValue += numPinsKnockedDown;
            return
        }
    }
    #nextNoSpareNoStrike(){
        this.isStrikePreviousRoll = false;  
        this.isSparePreviousRoll = false;         
        this.frameCount++;  
        this.rollCountInFrame = 0; 
    }

    #strike() {
        this.isStrikePreviousRoll = true;
        this.isSparePreviousRoll = false;  
        this.frameCount++;  
        this.rollCountInFrame = 0;
    }
    #spare() {
        this.isStrikePreviousRoll = false;                  
        this.isSparePreviousRoll = true; 
        this.frameCount++;  
        this.rollCountInFrame = 0; 
    }
    
    score() {
        return this.scoreValue;
    }
    roll(numPinsKnockedDown) {
        this.rollCountInFrame++;   
 
        this.#calculScore(numPinsKnockedDown) 

        if (this.rollCountInFrame === 1 ){
            this.scoreFirstRoll = numPinsKnockedDown;
        }
        if (this.rollCountInFrame === 2 ){
            this.scoreSecondRoll = numPinsKnockedDown;
        }
        
        if (this.rollCountInFrame === 1 && numPinsKnockedDown === 10 ){
            this.#strike();
            return
        }    
        
        if (this.rollCountInFrame === 2 && (this.scoreFirstRoll + this.scoreSecondRoll) === 10){
            this.#spare();
            return
        };

        if (this.rollCountInFrame === 2 ){
            this.#nextNoSpareNoStrike();
            return      
        };
        

    }
    initialise(){
        this.scoreValue = 0;
        this.rollCountInFrame = 0;
        this.frameCount = 0;
        this.scoreFirstRoll = 0;
        this.scoreSecondRoll = 0;
        this.isStrikePreviousRoll = false;
        this.isSparePreviousRoll = false;
    }
}


describe('Bowling class', () => {
    const instanceBowling = new Bowling();

    test('score() method should return not null', () => {
      expect(instanceBowling.score()).not.toBeNull();
    });
    test('score() method should return toBeGreaterThanOrEqual(0)', () => {
        expect(instanceBowling.score()).toBeGreaterThanOrEqual(0);
      });
    test('score() method should return ToEqual(8) ', () => {
        instanceBowling.roll(4);
        instanceBowling.roll(4);
        expect(instanceBowling.score()).toEqual(8);
    });
    test('rollCountInFrame attribut should ToEqual(1) ', () => {
        instanceBowling.initialise()
        instanceBowling.roll(4);
        expect(instanceBowling.rollCountInFrame).toEqual(1);
    });
    test('frameCount attribut should ToEqual(1) ', () => {
        instanceBowling.initialise()
        instanceBowling.roll(4);
        instanceBowling.roll(4);
        expect(instanceBowling.frameCount).toEqual(1);
    });
    test('rollCountInFrame attribut should ToEqual(0) ', () => {
        instanceBowling.initialise()
        instanceBowling.roll(4);
        instanceBowling.roll(4);
        expect(instanceBowling.rollCountInFrame).toEqual(0);
    });
    test('frameCount attribut should ToEqual(10) ', () => {
        instanceBowling.initialise()
        for (let i=0; i<10; i++){
            instanceBowling.roll(4);
            instanceBowling.roll(4);
        }
        expect(instanceBowling.frameCount).toEqual(10);
    });
    test('rollCountInFrame attribut should ToEqual(0) ', () => {
        instanceBowling.initialise()
        for (let i=0; i<10; i++){
            instanceBowling.roll(4);
            instanceBowling.roll(4);
        }
        expect(instanceBowling.rollCountInFrame).toEqual(0);
    });
    test('score() method should return ToEqual(80) ', () => {
        instanceBowling.initialise()
        for (let i=0; i<10; i++){
            instanceBowling.roll(4);
            instanceBowling.roll(4);
        }
        expect(instanceBowling.score()).toEqual(80);
    });
    test('score() method should return ToEqual(80) ', () => {
        instanceBowling.initialise()
        for (let i=0; i<10; i++){
            instanceBowling.roll(4);
            instanceBowling.roll(4);
        }
        expect(instanceBowling.score()).toEqual(80);
    });
    test('frameCount attribut should ToEqual(1) ', () => {
        instanceBowling.initialise()
            instanceBowling.roll(10);
        expect(instanceBowling.frameCount).toEqual(1);
    });
    test('frameCount attribut should ToEqual(1) ', () => {
        instanceBowling.initialise()
            instanceBowling.roll(10);
        expect(instanceBowling.frameCount).toEqual(1);
    });
    test('rollCountInFrame attribut should ToEqual(0) ', () => {
        instanceBowling.initialise()
            instanceBowling.roll(0);
            instanceBowling.roll(10);
        expect(instanceBowling.rollCountInFrame).toEqual(0);
    });
    test('score() method should return ToEqual(30) ', () => {
        instanceBowling.initialise()
            instanceBowling.roll(10);
            instanceBowling.roll(5);
            instanceBowling.roll(5);
        expect(instanceBowling.score()).toEqual(30);
    });
    test('score() method should return ToEqual(34) ', () => {
        instanceBowling.initialise()
            instanceBowling.roll(5);
            instanceBowling.roll(5);
            instanceBowling.roll(5);
            instanceBowling.roll(5);
            instanceBowling.roll(3);
            instanceBowling.roll(3);
        expect(instanceBowling.score()).toEqual(34);
    });
    test('score() method should return ToEqual(46) ', () => {
        instanceBowling.initialise()
            instanceBowling.roll(10);
            instanceBowling.roll(5);
            instanceBowling.roll(5);
            instanceBowling.roll(5);
            instanceBowling.roll(3);
            instanceBowling.roll(3);
        expect(instanceBowling.score()).toEqual(46);
    });
    test('score() method should return ToEqual(190) ', () => {
        instanceBowling.initialise()
        for (let i=0; i<10; i++){
            instanceBowling.roll(10);
        }
        expect(instanceBowling.score()).toEqual(190);
    });
    test('score() method should return ToEqual(136) ', () => {
        instanceBowling.initialise()
        for (let i=0; i<10; i++){
            instanceBowling.roll(4);
            instanceBowling.roll(6);
        }
        expect(instanceBowling.score()).toEqual(136);
    });
    test('score() method should return ToEqual(220) ', () => {
        instanceBowling.initialise()
        for (let i=0; i<13; i++){
            instanceBowling.roll(10);
        }
        expect(instanceBowling.score()).toEqual(220);
    });
});