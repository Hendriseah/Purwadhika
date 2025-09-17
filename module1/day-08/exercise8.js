// Employee Salary
class Employee {
  constructor(name) {
    this.name = name;
    this.workingHoursPerDay = 0;
  }

  addWorkingHours(hours) {
    this.workingHoursPerDay = hours;
  }

  calculateSalary() {
    return 0;
  }
}

class FulltimeEmployee extends Employee {
  constructor(name) {
    super(name);
  }

  calculateSalary() {
    let rate = this.workingHoursPerDay > 6 ? 75000 : 100000;
    return this.workingHoursPerDay * rate;
  }
}

// Part-time Employee Class
class ParttimeEmployee extends Employee {
  constructor(name) {
    super(name);
  }

  calculateSalary() {
    let rate = this.workingHoursPerDay > 6 ? 30000 : 50000;
    return this.workingHoursPerDay * rate;
  }
}

const emp1 = new FulltimeEmployee("John");
emp1.addWorkingHours(8);
console.log(`${emp1.name} salary: IDR ${emp1.calculateSalary()}`);

const emp2 = new ParttimeEmployee("Jane");
emp2.addWorkingHours(5); 
console.log(`${emp2.name} salary: IDR ${emp2.calculateSalary()}`);

//Shooting Game
// Player class
class Player {
  constructor(name, health = 100, power = 10) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  // Apply damage from another player's power
  damage(power) {
    this.health -= power;
  }

  // Use random item (increase health or power)
  useItem(item) {
    this.health += item.health;
    this.power += item.power;
  }

  // Show current status
  showStatus() {
    console.log(
      `${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  }
}

// ShootingGame class
class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  // Return random item: either health +10 or power +10
  getRandomItem() {
    const health = Math.random() < 0.5 ? 0 : 10; // 50% chance
    const power = health === 0 ? 10 : 0;         // if not health then power
    return { health, power };
  }

  start() {
    console.log("=== Game Start ===");

    let attacker = this.player1;
    let defender = this.player2;

    while (this.player1.health > 0 && this.player2.health > 0) {
      console.log("\n--- Turn ---");
      // Show status before shooting
      attacker.showStatus();
      defender.showStatus();

      // Each player gets random item
      attacker.useItem(this.getRandomItem());
      defender.useItem(this.getRandomItem());

      console.log("After picking items:");
      attacker.showStatus();
      defender.showStatus();

      // Attacker shoots defender
      console.log(`${attacker.name} attacks ${defender.name}!`);
      defender.damage(attacker.power);

      // Switch turns
      [attacker, defender] = [defender, attacker];
    }

    // Determine winner
    const winner =
      this.player1.health > 0 ? this.player1.name : this.player2.name;
    console.log(`\n🎉 Winner is: ${winner} 🎉`);
  }
}

const playerA = new Player("Player A");
const playerB = new Player("Player B");

const game = new ShootingGame(playerA, playerB);
game.start();
