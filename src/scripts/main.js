//1. import function createPlan from plan.js module

import { createPlan } from './plan.js'
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js';
import { catalog } from './catalog.js';
// import { yearsPlantPlanArray } from './tractor.js' //years plant plan array...


//invoke function createPlan()
//since createPlan returns a value a variable needs to be created<?>
const yearlyPlan = createPlan();
console.log(yearlyPlan)

const planted = plantSeeds(yearlyPlan)
// console.log(planted)

const harvestedPlants = harvestPlants(planted)
// console.log(harvestedPlants)

const plantCatalog = catalog(harvestedPlants)
// console.log(plantCatalog)

const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = catalog(harvestedPlants)
