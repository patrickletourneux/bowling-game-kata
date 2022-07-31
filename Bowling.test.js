// const Bowling = require('./Bowling');

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


describe('Bowling class', () => {
    const instanceBowling = new Bowling();

    test('score() method should return not null', () => {
      expect(instanceBowling.score()).not.toBeNull();
    });
    test('score() method should return toBeGreaterThanOrEqual(0)', () => {
        expect(instanceBowling.score()).toBeGreaterThanOrEqual(0);
      });
    test('roll() method should return not null', () => {
        expect(instanceBowling.roll(0)).not.toBeNull();
    });
    test('roll() method should return ToBeLessThanOrEqual(10) ', () => {
        expect(instanceBowling.roll(0)).toBeLessThanOrEqual(10);
    });
    test('score() method should return ToBeEqual(8) ', () => {
        instanceBowling.roll(4);
        instanceBowling.roll(4);
        expect(instanceBowling.score()).toEqual(8);
    });


});