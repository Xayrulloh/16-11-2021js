// -----------------------------------
// 1 - misol
/*let arr = []
let array = new Array
let array2 = Array*/

// 2 - misol
/*let arr = [1]*/

// 3 - misol
/*let array = [1, 1, 1, 1, 1]
console.log(array.length);*/

// 4 - misol
/*let arr = [1, 2, 3]
arr = String(arr)
arr += ''
console.log(typeof arr);*/

// 5 - misol
/*const arr = [4, 5, 6]
arr.unshift(1, 2, 3)
arr.push(7, 8, 9)
let sum = 0
let how_much = arr.length
for (a of arr) {
    sum += a
}
let middle = sum / how_much
console.log(middle);*/

// 6 - misol
/*function getValues(arr, start, end) {
    let newArr = []
    for (a = 0; a < arr.length; a++) {
        if (a >= start && a <= end) {
            newArr.push(arr[a])
        }
    }
    return newArr
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(getValues(array, 2, 3));*/

// 7 - misol
// 1 - usul
/*let array = [1, 2, 3, 1, 5, 8, 5, 9, 2]
function delSame(array) {
    for (let a = 0; a < array.length; a++) {
        for (let b = a + 1; b < array.length; b++) {
            if (array[a] === array[b]) {
                array.splice(b, 1)
            }
        }
    }
    console.log(array);
}
delSame(array)*/

// 2 - usul
/*let array = [1, 2, 3, 1, 5, 8, 5, 9, 2]
function delSame(array) {
    let arr = []
    for (let a = 0; a < array.length; a++) {
        for (let b = a + 1; b < array.length; b++) {
            if (array[a] === array[b]) {
                array[b] = 'h' 
            }
        }
    }
    for (c of array) {
        if (typeof c !== 'string') {
            arr.push(c)
        }
    }
    console.log(arr);
}
delSame(array)*/

// 8 - misol
// 1 - usul
/*function qosh(arr1, arr2) {
    let array = []
    for (a of arr1) {
        array.push(a)
    }
    for (a of arr2) {
        array.push(a)
    }
    console.log(array);
}
qosh([1, 2, 3], [4, 5, 6])*/

// 2 - usul
/*function qosh(arr1, arr2) {
    for (a of arr2) {
        arr1.push(a)
    }
    console.log(arr1);
}
qosh([1, 2, 3], [4, 5, 6])*/

// 9 - misol
/*function sameadd(arr1, arr2) {
    let newarr = []
    for (a of arr2) {
        if (arr1.includes(a)){
            newarr.push(a)
        }
    }
    console.log(newarr);
}
sameadd([1, 2, 3], [4, 1, 2])*/

// 10 - misol

// 1 - usul

/*function empty(arr) {
    arr = []
    console.log(arr);
}
empty([1, 2, 3])*/

// 2 - usul
/*function empty(arr) {
    arr = new Array
    console.log(arr);
}
empty([1, 2, 3])*/

// 11 - misol
/*function stringToNumber(str) {
    let result = []
    for(let i of str) {
        result.push(Number(i))
    return result }
}
console.log(stringToNumber(["1","2","4"]));
function numberToString(arr) {
    let result = []
    for(let i of arr) result.push(String(i))
    return result
}
console.log(numberToString([1,2,3,4,5,6]));

function bothToBool(arr) {
    let result = []
    for(let i of arr) result.push(Boolean(i))
    return result
}
console.log(bothToBool([1,2,3,4,0,6]));*/

// 12 - misol
/*let array = ['a','b','c']
let object = Object.assign({}, array); 
console.log(object);*/

// 13 - misol
/*const array = [
    {name: 'Chris', work: 'dev'},
    {name: 'George', work: 'test'},
    {name: 'Jin', work: 'dev'},
    {name: 'Trey', work: 'test'},
];
function groupByKey(array, key) {
    console.log(array[0][key]);
}
groupByKey(array,'work')*/

// classwork
/*function potatoes(str) {
    return (str.match(/potato/g) || []).length
}
console.log(potatoes('potato'));*/

// classwork
/*function detectedWord(string) {
    let str = ''
    for (let a = 0; a < string.length; a++) {
        if (string[a] == string[a].toLowerCase()) {
            str += string[a]
        }
    }
    console.log(str);
}
detectedWord('FcJDSAJDFaKLSJFKSAJFJtD')*/

// classwork
/*function largestSwap(num, num2) {
    return num > num2 ? true : false
}
console.log(largestSwap(27, 72));*/

// classwork
/*function findCharacter(element, str) {
    let sum = 0
    for (a of str) {
        if (a === element) {
            sum ++
        }
    }
    return sum
}
console.log(findCharacter('e', 'edabit'))*/

// classwork
/*function big(num, num2) {
    if (num > num2) console.log('f');
    if (num < num2) console.log('g');
    if (num === num2) console.log('neither');
}
big(1, 2)*/

// classwork
/*function tuckIn(array, inarray) {
    let middle = array.length / 2
    inarray = inarray.reverse()
    for (a of inarray) {
        array.splice(middle, 0, a)
    }
    console.log(array);
}
tuckIn([1, 5], [2, 3, 4])*/

// homework
/*const users = [
    {
        user_id: 1,
        username: 'Xayrulloh',
        age: 19,
        email: 'Xayrullohabduvohidov713@gmail.com',
        password: 20022002
    },
    {
        user_id: 3,
        username: 'Xayrulloh',
        age: 19,
        email: 'Xayrullohabduvohidov@gmail.com',
        password: 12345678
    }
]
function composeUser(username, age, email, password) {
    let daang = new Error('Xato narsa kiritib qoydingiz\n Tori kirit xato bosh');
    let user_id = Math.round(Math.random()*9)
    try {
        if (password.length >= 8) {
            if (typeof age == 'number') {
                if (email.includes('@')) {
                    let obj = {
                        user_id,
                        username, 
                        age,
                        email, 
                        password
                    }
                    users.push(obj)
                }
                else {
                    throw(daang)
                }
            }
            else {
                throw(daang)
            }
        }
        else {
            throw(daang)
        }
    }
    catch (daang) {
        console.log(daang.message);
    }
    console.log(users);
}
// composeUser('Abbos', 36, 'Iqbol@Qoch', '12344321')

function del(user_id) {
    let nechnchi_indexda = 0
    for (a = 0; a < users.length; a++) {
        if (users[a].user_id === user_id) {
            nechnchi_indexda = a
        }
    }
    console.log(nechnchi_indexda);
    users.splice(nechnchi_indexda, 1)
    console.log(users);
}
// del(3)

function update(user_id, values) {
    let nechnchi_indexda = 0
    for (a = 0; a < users.length; a++) {
        if (users[a].user_id === user_id) {
            nechnchi_indexda = a
        }
    }
    let value = Object.values(values)
    value = String(value)
    users[nechnchi_indexda][Object.keys(values)] = value
    console.log(users);
}
// update(1, {username: 'Kallenga'})

function getUser(user_id) {
    let nechnchi_indexda = 0
    for (a = 0; a < users.length; a++) {
        if (users[a].user_id === user_id) {
            nechnchi_indexda = a
        }
    }
    console.log(users[nechnchi_indexda]);
}
// getUser(3)*/

// homework 2
/*let arr = [
    {name: "Stiv", work: "dev"},
    {name: "asad", work: "dev"},
    {name: "deft", work: "test"},
    {name: "doe", work: "test"}
]
function simple(arr, work) {
    for (a = 0; a < arr.length; a++) {
        if (arr[a].work === work) {
            console.log(arr[a]);
        }
    }
}
simple(arr, 'test')*/
