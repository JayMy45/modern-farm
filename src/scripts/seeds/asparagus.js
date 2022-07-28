//declare and export a function to create a seed
//function should return an object with type, height, and output values.
//function needs three parameters representing the properties above

export const createAsparagus = (typeValue, heightValue, outputValue) => {
    let asparagusObject = { type: typeValue, height: heightValue, output: outputValue, }

    return asparagusObject
}
