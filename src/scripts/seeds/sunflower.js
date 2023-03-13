//declare and export a function to create a seed
//function should return an object with type, height, and output values.
//function needs three parameters representing the properties above
const sunflowerObject = { type: 'Sunflower', height: 380, output: 3 }

export const createSunflower = () => {

    return sunflowerObject
}


console.log(createSunflower())