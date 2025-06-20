// console.log("Hello World");

/*
1. In the S31 folder, create an activity folder and an index.html and index.js file inside of it.
	- Create an index.html file to attach our index.js file
	- Copy the template provided by your Instructor and paste it in an index.js file.
	- Update your local sessions git repository and push to git with the commit message of Add template code s31.
	- Console log the message Hello World to ensure that the script file is properly associated with the html file.
*/

/**********************************************
 * TASK ASSIGNMENT FOR MEMBERS - Dungeon Quest
 **********************************************/

/**********************************************
 * Member 1: Adventurer Object
 **********************************************/
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

let adventurer = {
    // Properties
    

    // Method to attack a monster
    
};


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
    

    // Method to cast a spell
    
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
    

    // Method to heal a target
   
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
    

    // Method to sell an item to the adventurer
    
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

function Monster() {
 

    // Method for the monster to attack the target
  

    // Method for the monster to drop loot when defeated
    
      
		// Add item to adventurer's inventory

    
}

// Create a new instance for the monster (e.g., Fenrir the Wolf, level 30, health 100, loot 'Wolf Fur')





//Do not modify
//For exporting to test.js
try{
    module.exports = {

        // Member 1: Adventurer
        adventurer: typeof adventurer !== 'undefined' ? adventurer : null,

        // Member 2: Wizard
        wizard: typeof wizard !== 'undefined' ? wizard : null,

        // Member 3: Healer
        healer: typeof healer !== 'undefined' ? healer : null,

        // Member 4: Merchant
        merchant: typeof merchant !== 'undefined' ? merchant : null,

        // Member 5: Monster and Fenrir
        Monster: typeof Monster !== 'undefined' ? Monster : null,
        fenrir: typeof fenrir !== 'undefined' ? fenrir : null,


    }
} catch(err){

}