//import needed functions...
import { addPlant } from "./field.js" //this functions pushes seedObjects to array (plantArray on field.js module)
import { createAsparagus } from "./seeds/Asparagus.js" //creates a object/seed
import { createCorn } from "./seeds/Corn.js"        //creates a object/seed
import { createPotato } from "./seeds/potato.js"    //creates a object/seed
import { createSoybean } from "./seeds/soybean.js"  //creates a object/seed
import { createSunflower } from "./seeds/Sunflower.js"  //creates a object/seed
import { createWheat } from "./seeds/Wheat.js"  //creates a object/seed
import { usePlantsArray } from './field.js';  //plants array from field.js

//invoke imported functions and store in variable.
const asparagusSeed = createAsparagus()
const cornSeed = createCorn()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()

//1. declare & export function plantSeeds that will accept an input (year's planting plan).
//2. iterate the row of food types to be planted (iterate through both parent/main and child/nested arrays)
//3. ----->if food is asparagus invoke the createAsparagus function to get a seed...conditional to invoke createFunction/seedObject.
//4. take the seed and add it to the array of plants in the field module  (plantArray)...Have no idea how I figured this part out.........!!!!!!!!


//declare and export a function plantSeeds input plantArray
export const plantSeeds = (plantPlanArray) => {

    //iterate the Parent array rows and invoke createSeed function whenever plant is presented.
    for (const planArray of plantPlanArray) {
        //iterate child array...Missed this detail initially...***if having trouble make sure to go back and read directions for understanding.
        for (const plan of planArray) {
            //conditional statement to invoke proper functions within arrays...
            if (plan === "Asparagus") {
                addPlant(asparagusSeed)  //used function, addPlant, with seedObject as parameter.  This creates a object...refer field.js module for details
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
    //return invoked usePlantsArray?????? 
    //Why didn't me invoking it upon importing and then returning the variable work???
    return usePlantsArray();
    //this function exports plantArray on field.js module...
}

