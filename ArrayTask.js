const array = [1, 10, [32, [47, 58, 61], 72], 5, 8, 11];

function concatNestedArrays(arr) {
    return arr.reduce((a, b) => {
        return a.concat(Array.isArray(b) ? concatNestedArrays(b) : b);
    }, [])
}

concatNestedArrays(array);