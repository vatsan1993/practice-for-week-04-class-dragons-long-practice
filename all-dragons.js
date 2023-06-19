// Your code here
const Dragon = require('./classes/dragon.js');
const EvilDragon = require('./classes/evil-dragon.js');
const FriendlyDragon = require('./classes/friendly-dragon.js');

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/
let goals = [
  'save Atreyu from the swamp',
  'save Atreyu from the Nothing',
  'scare the local bullies into a dumpster',
];
const falkor = new FriendlyDragon('Falkor', 'white', goals, 'Bastian');
const evilDoings = [
  'take over your mountain kingdom',
  'steal all your dwarven gold',
  'burn down your floating village',
];
let smaug = new EvilDragon('Smaug', 'black', evilDoings, 'Dwarf King');
const allDragons = Dragon.getDragons(falkor, smaug);
try {
  module.exports.falkor = falkor;
  module.exports.smaug = smaug;
  module.exports.allDragons = allDragons;
} catch {
  module.exports = null;
}
