/*
1. Define a variable in this module whose initial value is an empty array. 
This array will store all of the plants that are growing in the field. 
Do not export the array.
2. In the module, define and export a function named addPlant.
3. The addPlant function must accept a seed object as input. The function will add the seed to the field (How do you add something to an array? Do you remember the method for it?).
4. Define and export a function named usePlants that returns a copy of the array of plants.
****Be aware that when planting corn, an array of objects will be provided instead of a single object like all the other type of seeds. Investigate the Array.isArray method to check if corn got passed in, or one of the others.
*/

// import { yearlyArray } from './tractor.js'
// let yearsPlantPlan = yearlyArray()

//define a empty array to store all plants growing in field
let plantArray = []

//declare & export function addPlant that will take an object as a parameter/input.

export const addPlant = (seedObject) => {

    if (Array.isArray(seedObject)) {
        for (let item of seedObject) {
            plantArray.push(item)
        }
    } else {
        plantArray.push(seedObject)
    }
    return seedObject
}

//declare & export function named usePlants
//return copy of array
//use .map() method to export array 
export const usePlants = () => {
    return plantArray.map(plantArray => ({ ...plantArray }))
}