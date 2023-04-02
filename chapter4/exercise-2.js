// ! I don't know if my answer is correct but things start to be making sense now

function arrayToList(array) {

    if (array.length === 1) {
        return { value: array[0], rest: null }
    }


    if (array.length === 0) {
        return null;
    }


    return { value: array[0], rest: { value: array[1], rest: arrayToList([...array.slice(2)]) } }


}

const newArray = []

function listToArray(arrayToList) {
    // !when rest is null, first push the last value remaining and then return
    if (!arrayToList.rest) {
        newArray.push(arrayToList.value)
        return
    }

    newArray.push(arrayToList.value)
    listToArray(arrayToList.rest)
    // console.log(newArray)
    return newArray
}

// console.log(listToArray(arrayToList([10,20,30,40])))



// ! prepend

function prepend(element, arrayList) {
    // if(arrayList.rest===null){
    //     return {value:element,rest:null}
    // }

    if(arrayList.rest===null){
        return {value:element,rest:{value:arrayList.value,rest:null}}
    }

    console.log(arrayList.value)
    console.log(arrayList.rest)

    return {value:element,rest:prepend(arrayList.value,arrayList.rest)}
}

console.log(prepend(10, prepend(20,arrayToList([30,40]))))



