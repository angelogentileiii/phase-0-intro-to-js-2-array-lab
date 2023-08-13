// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push("Ralph");
};

function destructivelyPrependCat(name){
    return cats.unshift("Bob");
};

function destructivelyRemoveLastCat(){
    return cats.pop();
};

function destructivelyRemoveFirstCat(){
    return cats.shift();
};

function appendCat(name){
    const Broom = [...cats,"Broom"];
    return Broom;
};

function prependCat(name){
    const Arnold = ["Arnold", ...cats];
    return Arnold;
};

function removeLastCat(){
    return cats.slice(0,-1);
};

function removeFirstCat(){
    return cats.slice(1);
};

