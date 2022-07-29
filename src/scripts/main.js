//1. import function createPlan from plan.js module

import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/Asparagus.js';
import { createCorn } from './seeds/Corn.js';
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createSunflower } from './seeds/Sunflower.js';
import { createWheat } from './seeds/Wheat.js';
import { addPlant } from './field.js';  //function that adds plant to usePlantsArray from field.js
import { usePlantsArray } from './field.js';  //plants array from field.js
import { plantSeeds } from './tractor.js';

// import { yearsPlantPlanArray } from './tractor.js' //years plant plan array...


//invoke function createPlan()
//since createPlan returns a value a variable needs to be created<?>
const yearlyPlan = createPlan();

const testArray = [
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]
//invoke seed creation function 
const asparagusSeed = createAsparagus()
const cornSeed = createCorn()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()
const planted = plantSeeds(testArray)

console.log(planted)


// addPlant(wheatSeed)
// console.log(usePlants())

// console.log(Array.isArray(usePlants()))


// console.log(asparagusSeed)
// console.log(cornSeed)

// console.log("Welcome to the main module")
// console.log(yearlyPlan)



// Example growing plan. Actual plan is bigger.
