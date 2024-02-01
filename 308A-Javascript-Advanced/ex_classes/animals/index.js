// === Parent or Super class
class Animal {
  constructor(eyes, legs, isAwake, isMoving) {
    this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
    // return is not needed because the new object is returned by default
  }
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  static speak(sound) {
    console.log(sound);
  }
  toString(animal = "Animal") {
    return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${
      this.isAwake ? "is" : "is not"
    } awake, and ${this.isMoving ? "is" : "is not"} moving.`;
  }
}

class Cat extends Animal {
    constructor(fur, isAwake, isMoving) {
        super(2, 4, isAwake, isMoving);
        this.fur = fur;
    }

    static speak() {
        super.speak("Meow...");
    }

    toString() {
        return super.toString('Cat');
    }
}

Cat.speak();

class Dog extends Animal {
    constructor(fur, isAwake, isMoving) {
      super(2, 4, isAwake, isMoving);
      this.fur = fur;
    }
    speak() {
      super.speak("Woof!");
    }
    toString() {
      return super.toString("Dog");
    }
  }
  
  class Cow extends Animal {
    constructor(hair, isAwake, isMoving) {
      super(2, 4, isAwake, isMoving);
      this.hair = hair;
    }
    speak() {
      super.speak("Moo.");
    }
    toString() {
      return super.toString("Cow");
    }
  }

// ==============================

const cat1 = new Cat('orange', true , false);
console.log(cat1);
// console.log(cat1.speak());

