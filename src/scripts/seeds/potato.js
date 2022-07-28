//declare and export a function to create a seed
//function should return an object with type, height, and output values.
//function needs three parameters representing the properties above

export const createPotato = (typeValue, heightValue, outputValue) => {
    let potatoObject = { type: typeValue, height: heightValue, output: outputValue, }

    return potatoObject
}
