console.log("Welcome to DungeonQuest");

/*
INSTRUCTIONS:
2. Create an object for the Adventurer with properties such as: 
    - name => A string representing the adventurer's name.
    - health => A number representing the adventurer’s experience level.
    - level => A number representing how much health the adventurer has.
    - attack => A number representing how much damage the adventurer deals when attacking.
    - inventory => An empty array to store items and loot the adventurer collects during quests.
3. Add "attackMonster" method with an argument of a monster.
    - The method will subtract the adventurer’s attack power from the monster’s health.
    - If the monster's health reaches 0 or less, 
        - The monster will drop a loot. (there is a loot method in the monster object)
        - return: <adventurer> attacks <monster>! + <monster> has been defeated! + <loot>.
    - Else, return: <adventurer> attacks <monster>! + Monster's health is now <monster's health>.
*/

/*function adventurer (name, health, level, attack, inventory){
	this.name = name;
	this.health = health;
	this.level = level;
	this.attack = attacl;
	this.inventory = inventory;

	this.attackMonster = function(monster){
		monster.health -= this.attack;
		if (monster.health == 0) {
			monster.loot();
			return `${this.name} attacks ${monster.name}. ${monster.name} has been defeated! item found: ${monster.loot}`;
		}
		else {
			return `${this.name} attacks ${monster.name}!. ${monster.name}'s health is now ${monster.health}'}`;
		}
	};  

}*/


let adventurer = {
    // Properties
    name: `Warrior`,
    health: 100,
    level: 20,
    attack: 30,
    inventory: [],

    // Method to attack a monster
	attackMonster: function(monster){
		monster.health -= this.attack;
		if (monster.health <= 0) {
			monster.dropLoot(this);
			return `${this.name} attacks ${monster.name}. ${monster.name} has been defeated!. item found: ${monster.loot}. ${this.name}'s inventory: ${this.inventory}`
		}
		else {
			return `${this.name} attacks ${monster.name}!. ${monster.name}'s health is now ${monster.health}`;
		}
	},

	checkInventory: function(){
		return `${this.name}'s inventory: ${this.inventory}`;
	},  

	checkStats: function(){
		return `${this.name}'s Level: ${this.level} Health: ${this.health} Attack: ${this.attack}`;
		}
	} 



/**********************************************
 * Member 2: Wizard Object
 **********************************************/
/*
INSTRUCTIONS:
4. Create a Wizard object with properties such as:
    - name => A string representing the wizard's name.
    - level => A number representing the wizard's experience level.
    - mana => A number representing the wizard's mana, which is used to cast spells.
    - health => A number representing how much health the wizard has.
    - spells => An array containing the names of the spells the wizard can cast (e.g., 'Fireball', 'Lightning Bolt', 'Teleport').
5. Add a "castSpell" method for attacking monsters:
    - The method will receive a spell and a monster as arguments.
    - It should check if the wizard has at least 20 mana to cast a spell.
    - If the wizard has enough mana:
        - Reduce the wizard's mana by 20.
        - Subtract 30 health points from the monster's health.
        - If the monster's health reaches 0 or less
            - return: <wizard> casts <spell> on <monster>! + <monster> has been defeated!
        - Else, return: <wizard> casts <spell> on <monster>! + <monster>'s health is now <monster's health>.
    - If the wizard doesn’t have enough mana, return: <wizard> doesn't have enough mana to cast spell.
*/

let wizard = {
    // Properties
    name: `Wizard`,
    level: 20,
    health: 100,
    mana: 50,
    spells: [`Fireball`, `Lightning Bolt`, `Teleport`],
    inventory: [],

    // Method to attack a monster
	castSpell: function(spell, monster){
	if (this.spells.includes(spell) == true) {
			if (this.mana >= 20) {
					this.mana -= 20; 
					if (this.mana <= 0){
						this.mana = 0;
					}
					monster.health -= 30;
					if (monster.health <= 0) {
					monster.dropLoot(this);
					return `${this.name} casts ${spell} on ${monster.name}. ${monster.name} has been defeated! item found: ${monster.loot}. ${this.name}'s inventory: ${this.inventory} `
				}
				else {
					return `${this.name} casts ${spell} on ${monster.name}!. ${monster.name}'s health is now ${monster.health}'`;
				}
			}
			else{
				return `${this.name} has not enough mana to cast spell`;
			}
			
		}
		return `${this.name} spell not learned`;	

	},
	checkInventory: function(){
		return `${this.name}'s inventory: ${this.inventory}`;
	}  

};


/**********************************************
 * Member 3: Healer Object
 **********************************************/
/*
INSTRUCTIONS:
6. Create a Healer object with properties such as:
    - name => A string representing the healer's name.
    - health => A number representing the healer’s health points.
    - healingPotions => A number representing the quantity of healing potions the healer has available to use.
7. Add a "heal" method for restoring health to other characters:
    - The method will take a target (another character, like the adventurer) as an argument.
    - It should check if the healer has healing potions available:
        - If there are healing potions left:
            - Increase the target’s health by 30 points.
            - Decrease the healer’s healing points count by 1. 
            - return: <healer> heals <target>! + <target>'s health is now <target's health>.
        - If there are no healing potions left, return: <healer> has no healing potions left.

*/

let healer = {
	// Properties
    name: `Healer`,
    health: 150,
    healingPotions: 5,


    // Method to heal a target
   	heal: function(character){
   		if (this.healingPotions != 0){
   			character.health += 30;
   			this.healingPotions -= 1;
   			return `${this.name} heals ${character.name}!. ${character.name}'s health is now ${character.health}.`
   		}
   		return `${this.name} has no healing potions left`;
   	},
   	checkInventory: function(){
   		return `${this.name}'s inventory: ${this.inventory}`;
   	} 
};


/**********************************************
 * Member 4: Merchant Object
 **********************************************/
/*
INSTRUCTIONS:
8. Create a Merchant object with properties such as:
    - name => A string representing the merchant's name.
    - inventory => An array of items the merchant has available for sale (e.g., 'Health Potion', 'Mana Potion', 'Sword', 'Shield').
    - gold => A number representing the amount of gold the merchant has.
9. Add a "sellItem" method to handle selling items to the adventurer:
    - The method will take item and buyer (another character, like the adventurer) as an arguments.
    - It should first check if the item is available in the merchant’s inventory.
    - If the item exists in the inventory:
        - Add the item to the adventurer’s inventory. 
        - Increase the merchant’s gold by 20 (each item costs 20 gold).
        - return: <merchant> sells <item> to <buyer>! + <buyer>'s inventory: <inventory> + <merchant>'s gold: <gold>.
    - If the item is not available, return: item + " is not available for sale!".
*/

let merchant = {
	// Properties
	name: `Merchant`,
	inventory: [`Health Potion`, `Mana Potion`, `Sword`, `Shield`],
	gold: 500,

	// Method to sell an item to the adventurer
	sellItem: function(item, character) {
		if (this.inventory.includes(item)) {
			if (item === `Sword`) {
				if (character.name === "Warrior") {
					character.attack += 10;
				}
			}
			if (item === `Shield`) {
				character.health += 50;
			}

			character.inventory.push(item);
			this.gold += 20;

			return `${this.name} sells ${item} to ${character.name}!. ${character.name}'s inventory: ${character.inventory}, ${this.name}'s gold: ${this.gold};`;
		}
		return `${item} is not available for sale!`;
	},

	checkInventory: function() {
		return `${this.name}'s store: ${this.inventory}`;
	}
};


/**********************************************
 * Member 5: Monster Object
 **********************************************/
/*
INSTRUCTIONS:
10. Create a Monster object using the Object Construtor with properties such as:
    - name => A string representing the monster's name.
    - level => A number representing the monster's level (used to calculate its attack power).
    - health => A number representing how much health the monster has.
    - attack => A number representing how much damage the monster can deal to the adventurer (calculated as level * 2).
    - loot => A string representing the item(s) that the monster drops when defeated (e.g., 'Wolf Fur').
11. Add an "attackTarget" method for attacking another character:
    - The method will take target(another character, like the adventurer) as an argument.
    - It should subtract the monster’s attack power from the adventurer's health.
    - return: <monster> attacks <target>! + <target> has been defeated!
    - If the target’s health reaches 0 or less, return: <monster> attacks <target>! + <target>'s health is now is <target's health>
12. Add a "dropLoot" method to drop loot when the monster is defeated.
    - Add the loot to the adventurer’s inventory.
    - Return: <monster> drops <loot>. + <adventurer>'s inventory: <inventory>
    - Create a new instance for the monster (ex. Fenrir the Wolf, level 30, health 100, loot 'Wolf Fur')
*/

function Monster(name, level, health, loot) {
 
	this.name = name;
	this.level = level;
	this. health = health;
	this.attack = level * 2;
	this.loot = loot;

    // Method for the monster to attack the target
  	this.attackTarget = function(character){
  		character.health -= this.attack;
  		if (character.health <= 0) {
  			return `${this.name} attacks ${character.name}!. ${character.name} has been eliminated`
  		}
  		return `${this.name} attacks ${character.name}!. ${character.name}'s current health is ${character.health}`
  	};

    // Method for the monster to drop loot when defeated
    this.dropLoot = function(character){
    	if (this.health <= 0) {
    		character.inventory.push(this.loot);
    		return `${this.name} drops ${this.loot}. ${character.name}'s inventory: ${character.inventory}`
    	}
    }
      
		// Add item to adventurer's inventory

}


let fenrir = new Monster(`Fenrir the Wolf`, 30, 100, 'Wolf Fur');


console.log(adventurer.attackMonster(fenrir));
console.log(adventurer.attackMonster(fenrir));
console.log(adventurer.attackMonster(fenrir));
console.log(adventurer.attackMonster(fenrir));
console.log(adventurer.checkInventory());

/*console.log(fenrir.attackTarget(adventurer));
console.log(adventurer.attackMonster(fenrir));
console.log(wizard.castSpell("Fireball", fenrir));
console.log(wizard.castSpell("Lightning Bolt", fenrir));
console.log(adventurer.attackMonster(fenrir));
console.log(adventurer.checkInventory());*/

/*console.log(healer.heal(wizard));
console.log(healer.heal(adventurer));
console.log(healer.heal(healer));
console.log(healer.heal(healer));
console.log(healer.heal(healer));
console.log(healer.heal(healer));*/

/*let slime = new Monster(`Slime`, 15, 50, `Slime Essence`);
let fenrir = new Monster(`Fenrir the Wolf`, 30, 100, 'Wolf Fur');

console.log(fenrir.attackTarget(adventurer));
console.log(fenrir.attackTarget(adventurer));
console.log(slime.attackTarget(wizard));
console.log(slime.attackTarget(wizard));
console.log(slime.attackTarget(wizard));
console.log(slime.attackTarget(wizard));*/

/*
console.log(merchant.sellItem(`Sword`, adventurer));	
console.log(merchant.sellItem(`Shield`, adventurer));	
console.log(adventurer.checkStats());
console.log(merchant.sellItem(`Shield`, adventurer));
console.log(adventurer.checkStats());
console.log(merchant.sellItem(`TP Scroll`, adventurer));*/