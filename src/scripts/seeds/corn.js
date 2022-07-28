//declare and export a function to create a seed
///function should return an array with two objects contain same values (type, height, and output)
//function needs three parameters representing the properties above

export const createCorn = (typeValue, heightValue, outputValue) => {
    let cornArray = [{ type: typeValue, height: heightValue, output: outputValue, }, { type: typeValue, height: heightValue, output: outputValue, }]

    return cornArray
}
