//1. import function createPlan from plan.js module

import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/Asparagus.js';
import { createCorn } from './seeds/Corn.js';
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createSunflower } from './seeds/Sunflower.js';
import { createWheat } from './seeds/Wheat.js';


//invoke function createPlan()
//since createPlan returns a value a variable needs to be created<?>
const yearlyPlan = createPlan();

//invoke seed creation function 
const asparagusSeed = createAsparagus()
const cornSeed = createCorn()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()


console.log(asparagusSeed)
console.log(cornSeed)

// console.log("Welcome to the main module")
// console.log(yearlyPlan)
