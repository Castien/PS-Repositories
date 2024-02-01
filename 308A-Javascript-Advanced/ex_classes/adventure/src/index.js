class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  }


class Adventurer extends Character {
    companion = {name: '', type: ''};
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }

    set companion(newCompanion) {
        this.companion.name = newCompanion.name;
        this.companion.type = newCompanion.type;
    }
  }

  const robin = new Adventurer('Robin', 'Healer');

  class Companion {
    constructor(name, type) {
        this.name = name;
        this.type = type
    }
  }

  const leo = new Companion('Leo', 'cat');
  console.log(leo);

  robin.companion = leo;
  console.log(robin);