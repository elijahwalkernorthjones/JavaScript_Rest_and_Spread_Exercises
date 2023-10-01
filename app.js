
//Rest 

// creates array of everything put in before it or after it

const sum = (...numsArr) => {
    if (!numsArr.length){return undefined;}
    return numsArr.reduce((acc, currNum) => acc + currNum);
}

const makeFamily = (parent1, parent2, ...children) => {
    return {
        parents: [parent1, parent2],
        kids: children.length ? children : 0
    };
}

const filterByType = (type, ...vals) => {
    return vals.filter(v => typeof v === type);
};



//-----------------------------------------------

//Spread 
// Unlike 'rest', spread can be used in the middle of statements.
// function getNums(1,2,...spread, 4, 5)
// MORE VERSATILE THAN REST

const nums = [3,4,6,68,79]
Math.max(nums) // returns NaN
Math.max(...nums) // returns 79 


//

const palette = ['lavender berry', 'sunflower yellow', 'orchid orange'];

const paletteCopy = [...palette, 'poopoo brown']; // creates a genuine copy into this new array & adds poopoo brown to end


// you can also take multiple arrays and group them together into a larger new array using the spread function
//Ex.

const greenTeas = ['Jasmine', 'fragrant leaf'];
const oolongTeas = ['honey orchid', 'winter sprout'];
const herbalTeas = ['african solstice', 'marshmellowroot', 'throat-coat'];
const coffees = ['snow leopard blend', 'goat', 'guatamala red cat'];

const allTeas = [...herbalTeas, ...oolongTeas, ...greenTeas];



//spread with objects


const tea = {
    type    : 'oolong',
    name    : 'Winter Sprout',
    origin    : 'Taiwan'
}

const tea2 = {...tea.type}


//--------------------------------------------

//Exercises 

/* ES2015 Version */

const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

//findMin 
const findMin = (...args) => Math.min(...args)

//mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

// SLICE AND DICE
/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }
  
  /** Return a new array with every item in array1 and array2. */
  
  const extend = (array1, array2) => {
    return [...array1, ...array2];
  }
  
  /** Return a new object with all the keys and values
  from obj and a new key/value pair */
  
  const addKeyVal = (obj, key, val) => {
  
    // OPTION 1
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
  
    // OPTION 2 (uses an object enhancement you'll see in the next unit)
    // return { ...obj, [key]: val };
  }
  
  /** Return a new object with a key removed. */
  
  const removeKey = (obj, key) => {
  
    // OPTION 1
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
  
    // OPTION 2 (uses an object enhancement you'll see in the next unit)
    // ({ [key]: undefined, ...obj } = obj);
    // return obj;
  }
  
  /** Combine two objects and return a new object. */
  
  const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }
  
  /** Return a new object with a modified key and value. */
  
  const update = (obj, key, val) => {
  
    // OPTION 1
  
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
  
    // OPTION 2 this uses an object enhancement you'll see in the next unit)
    // return { ...obj, [key]: val };
  }