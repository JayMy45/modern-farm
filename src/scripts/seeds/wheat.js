//declare and export a function to create a seed
//function should return an object with type, height, and output values.
//function needs three parameters representing the properties above

export const createWheat = (typeValue, heightValue, outputValue) => {
    let wheatObject = { type: typeValue, height: heightValue, output: outputValue, }

    return wheatObject
}
