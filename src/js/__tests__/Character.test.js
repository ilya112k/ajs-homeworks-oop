import Character, {Bowerman, Daemon, Magician, Swordsman, Undead, Zombie} from '../Character';


describe('Character', () => {
  test('should be correct Character', () => {
    const result = new Character('name', 'Bowerman');

    expect(result.name).toBe('name');
    expect(result.type).toBe('Bowerman');
  });

  test('should be incorrect name', () => {
    expect(() => new Character('n', 'Bowerman')).toThrowError('имя не корректное');
  });


  test('should be incorrect type', () => {
    expect(() => new Character('name', '123')).toThrowError('тип не корректный');
  });

  test('level up should be correct', () => {
    const result = new Character('name', 'Bowerman');
    result.health = 50;
    result.attack = 10;
    result.defence = 10;
    result.levelUp();

    expect(result.level).toBe(2);
    expect(result.health).toBe(100);
    expect(result.attack).toBe(12);
    expect(result.defence).toBe(12);
  });

  test('level up should be incorrect', () => {
    const result = new Character('name', 'Bowerman');
    result.health = 0;

    expect(() =>   result.levelUp()).toThrowError('нельзя повысить левел умершего');
  });

  test('level up should be incorrect', () => {
    const result = new Character('name', 'Bowerman');
    result.health = 0;

    expect(() =>   result.levelUp()).toThrowError('нельзя повысить левел умершего');
  });

  test('damage should be correct', () => {
    const result = new Character('name', 'Bowerman');
    result.health = 50;
    result.attack = 10;
    result.defence = 10;
    result.damage(10);

    expect(result.health).toBe(41);
  })


  test('damage should be incorrect', () => {
    const result = new Character('name', 'Bowerman');
    result.health = -1;
    result.attack = 10;
    result.defence = 10;
    result.damage(10);

    expect(result.health).toBe(-1);
  })
})

describe('Bowerman', () => {
  test('class should correct', () => {
    const result = new Bowerman('name');

    expect(result.name).toBe('name');
    expect(result.type).toBe('Bowerman');
    expect(result.attack).toBe(25);
    expect(result.defence).toBe(25);
  })
})


describe('Swordsman', () => {
  test('class should correct', () => {
    const result = new Swordsman('name');

    expect(result.name).toBe('name');
    expect(result.type).toBe('Swordsman');
    expect(result.attack).toBe(40);
    expect(result.defence).toBe(10);
  })
})

describe('Magician', () => {
  test('class should correct', () => {
    const result = new Magician('name');

    expect(result.name).toBe('name');
    expect(result.type).toBe('Magician');
    expect(result.attack).toBe(10);
    expect(result.defence).toBe(40);
  })
})

describe('Undead', () => {
  test('class should correct', () => {
    const result = new Undead('name');

    expect(result.name).toBe('name');
    expect(result.type).toBe('Undead');
    expect(result.attack).toBe(25);
    expect(result.defence).toBe(25);
  })
})

describe('Zombie', () => {
  test('class should correct', () => {
    const result = new Zombie('name');

    expect(result.name).toBe('name');
    expect(result.type).toBe('Zombie');
    expect(result.attack).toBe(40);
    expect(result.defence).toBe(10);
  })
})

describe('Daemon', () => {
  test('class should correct', () => {
    const result = new Daemon('name');

    expect(result.name).toBe('name');
    expect(result.type).toBe('Daemon');
    expect(result.attack).toBe(10);
    expect(result.defence).toBe(40);
  })
})
