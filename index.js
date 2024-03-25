// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat (name){
    cats.push (name = "Ralph")
}

function destructivelyPrependCat (name){
    cats.unshift (name = "Bob")
}

function destructivelyRemoveLastCat (name){
    cats.pop ("Garfield")
}

function destructivelyRemoveFirstCat (name){
    cats.shift("Milo")
}

function appendCat (Kayan){
    return [...cats, Kayan]
}

function prependCat(Rafiki) {
    return [Rafiki, ...cats]
}

function removeLastCat (name){
    return cats.slice(0, -1)
}

function removeFirstCat (name){
    return cats.slice(1)

}



