export default class Character  {
  name;
  type;
  level = 1;
  health = 100;
  attack = 1;
  defence = 1;

  constructor(name, type) {
    if (name.length < 2 || type.length > 10) {
      throw new Error('имя не корректное')
    }

    if (
      !(type === 'Bowerman' ||
      type === 'Swordsman' ||
      type === 'Magician' ||
      type === 'Daemon' ||
      type === 'Undead' ||
      type === 'Zombie'
    )) {
      throw new Error('тип не корректный')
    }

    this.name = name;
    this.type = type;
  }

  levelUp() {
    if (this.health <= 0 ) {
      throw new Error('нельзя повысить левел умершего')
    }
    this.level += 1;
    this.health = 100;
    this.attack = this.attack * 1.2;
    this.defence = this.defence * 1.2;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100)
    }
  }
}

export class Bowerman extends Character {
  constructor(name) {
    super(name, 'Bowerman');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
