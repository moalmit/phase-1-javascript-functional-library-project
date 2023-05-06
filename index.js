function myEach (collection, cb){
    if (typeof(collection) !== 'object'){
        for (let element of collection){
            cb(element);
        };
    };
    if (typeof(collection) === 'object'){
        for (let element in collection){
            cb(collection[element]);
        };
    };
return collection
};

function myMap (collection, cb){
    if (typeof(collection) === 'object'){
        collection = Object.values(collection);
        };
return collection.map(cb);
};

function myReduce (collection, cb, acc){
    if (typeof(collection) === 'object'){
        collection = Object.values(collection);
        };
    let start = 0;
    if (acc === undefined){
        acc = collection[0];
        start = 1;
        };

    for (let i = start; i < collection.length; i++){
        acc = cb(acc, collection[i], collection);
    };
return acc
};

function myFind(collection, predicate){   
return collection.find(predicate)
};

function myFilter (collection, predicate){
    let arr = []
    if (typeof(collection) === 'object'){
        collection = Object.values(collection)
    }
    for (let element of collection){
        if (predicate(element)){
            arr.push(element)
            }
    }
return  arr
}

function mySize (collection){
    let size;
    if (typeof(collection) === 'object'){
    collection = Object.keys(collection);
        };
    size = collection.length
return size
}

function myFirst (array, n=1){
    if (n === 1){
    return array[0]
    }
    else {
    return array.slice(0, n)
    }
}

function myLast (array, n=1){
    if (n === 1){
    return array[array.length - 1]
    }
    else {
    return array.slice(-n)
    }
}

function myKeys(obj){
    return Object.keys(obj)
}

function myValues(obj){
    return Object.values(obj)
}

