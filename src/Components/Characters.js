// Character.js

export class Character {
	constructor(name, role, health, abilities) {
		this.name = name;
		this.role = role;
		this.health = health;
		this.abilities = abilities;
	}

	getName() {
		return this.name;
	}

	getRole() {
		return this.role;
	}

	getHealth() {
		return this.health;
	}

	getAbilities() {
		return this.abilities;
	}

	setHealth(newHealth) {
		this.health = newHealth;
	}
}

export class CharacterManager {
	constructor() {
		this.characters = [];
	}

	addCharacter(character) {
		this.characters.push(character);
	}

	getCharacterByName(name) {
		return this.characters.find((character) => character.getName() === name);
	}

	getAllCharacters() {
		return this.characters;
	}
}
