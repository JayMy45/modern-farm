//import needed functions...
import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/Asparagus.js"
import { createCorn } from "./seeds/Corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/Sunflower.js"
import { createWheat } from "./seeds/Wheat.js"
import { usePlantsArray } from './field.js';  //plants array from field.js


const asparagusSeed = createAsparagus()
const cornSeed = createCorn()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()
// const plantArray = usePlantsArray()

//declare & export function plantSeeds that will accept an input (year's planting plan).
//iterate the row of food types to be planted
//----->if food is asparagus invoke the createAsparagus function to get a seed)
//take the seed and add it to the array of plants in the field module  (plantArray).


//declare and export a function plantSeeds
//input actPlantPlan
export const plantSeeds = (plantPlanArray) => {

    //import seed functions to be invoked and store in variables to be used.
    //iterate the array rows and invoke createSeed function whenever plant is presented.
    for (const planArray of plantPlanArray) {
        for (const plan of planArray) {
            //conditional statement to invoke proper functions within arrays...
            //example if the index is asparagus then .push createAsparagus function?
            if (plan === "Asparagus") {
                addPlant(asparagusSeed)  //using variable declared to invoke function on main.js to push...!
            } else if (plan === "Corn") {
                addPlant(cornSeed)
            } else if (plan === "Potato") {
                addPlant(potatoSeed)
            } else if (plan === "Soybean") {
                addPlant(soybeanSeed)
            } else if (plan === "Sunflower") {
                addPlant(sunflowerSeed)
            } else if (plan === "Wheat") {
                addPlant(wheatSeed)
            }
        }
    }
    return usePlantsArray();
}


// //export years plant plan array...
// export const yearlyArray = () => {
    //     return actPlantPlan.map(actPlantPlan => ({ ...actPlantPlan }))
    // }