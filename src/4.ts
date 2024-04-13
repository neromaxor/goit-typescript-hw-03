class Key {
    private signature: number;
  
    constructor() {
      this.signature = Math.random();
    }
  
    getSignature(): number {
      return this.signature;
    }
  }
  
  class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
  
    getKey(): Key {
      return this.key;
    }
  }
  
  abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];
  
    constructor(key: Key) {
      this.key = key;
    }
  
    abstract openDoor(key: Key): void;
  
    comeIn(person: Person) {
      if (this.door) {
        this.tenants.push(person);
        console.log(`${person} comes into the house.`);
      } else {
        console.log("Door is closed.");
      }
    }
  }
  
  class MyHouse extends House {
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log("Door is opened.");
      } else {
        console.log("Incorrect key. Door remains closed.");
      }
    }
  }
  
  const key = new Key();
  const person = new Person(key);
  const house = new MyHouse(key);
  
  house.openDoor(person.getKey());
  house.comeIn(person);