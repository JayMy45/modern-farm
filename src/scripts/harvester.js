//import { usePlantsArray } from './field.js';  //plants array from field.js
//const plantArray = usePlantsArray()
/*
In this module, define and export a harvestPlants function.
The harvestPlants function must accept the plants array as input.
The function will return an array of seed objects.
Iterate the array of growing plants. 
On each plant, get the value of the output property.
Add that many of the plant objects to the array that the function returns. For example, if the current plant is a peanut object with an output of 2...
*/
const harvestPlantArray = []
//declare export function named harvestPlants that accepts plantArray as input
//import plant array from field.js (import {usePlantArray})(??????)
// export const harvestPlants = (plantArray) => {
//     //iterate the array of growing plants (plantArray)

//     for (const plant of plantArray) {
//         //iterate the objects for the output property...i don't think this output is nested so no need to have to iteration/for...of statements
//         // for (const outPlant of plant) {
//         //add as many in output to array

//         //using spreader operator to push the correct amount of object to array starting with corn...
//         if (plant.output === 1) {
//             harvestPlantArray.push(plant)

//         } else if (plant.output === 2) {
//             harvestPlantArray.push(plant, plant)

//         } else if (plant.output === 3) {
//             harvestPlantArray.push(plant, plant, plant)

//         } else if (plant.output === 4) {
//             harvestPlantArray.push(plant, plant, plant, plant)

//         } else if (plant.output === 5) {
//             harvestPlantArray.push(plant, plant, plant, plant, plant)
//             cd
//         } else if (plant.output === 6 && plant.type === 'Corn') {
//             harvestPlantArray.push(plant, plant, plant)

//         } else if (plant.output === 6 && plant.type !== 'Corn') {
//             harvestPlantArray.push(plant, plant, plant, plant, plant, plant)

//         }
//     }
//     return harvestPlantArray    //return an array of seed objects (seedObjectArray is a placeholder)
// }


const harvestedSeeds = [];

export const harvestPlants = (planting) => {

    for (const plant of planting) {
        // console.log(plant)
        if (plant.type === 'Corn') {
            for (let i = 0; i < plant.output / 2; i++) {
                // plant.output = plant.output / 2
                harvestedSeeds.push(plant);
            }
        } else {
            for (let j = 0; j < plant.output; j++) {
                harvestedSeeds.push(plant);
            }
        }
    }
    console.log(harvestedSeeds)
    return harvestedSeeds;
};