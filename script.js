//Destructuring assignment
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;
console.log(y);

let [firstName, surname] = "Ilya Kantor".split(' ');
console.log(firstName);
console.log(surname); 

console.log(`******************************************`)
//unite Unique ([1,2,3], [3,4,1,5], [6,7,8,5])// Answer: [1,2,3,4,5,6,7,8]
let number = ([1,2,3,3,4,1,5,6,7,8,5])
const uniteUnique = new Set (number)
const uniteUnique2 = [...new Set(number)]
console.log(uniteUnique)
console.log(uniteUnique2)

//ok
let arguments = [1,2,3, [3,4,1,5, [6,7,8,5]]]
arguments.flat(Infinity)
console.log(arguments)

//ok
let arr1 = [1, 2, ,3, 4];
arr1.flat();
console.log(arr1)

//ok
let arguments2 = [[1,2,3], [3,4,1,5], [6,7,8,5]]

function uniteArray(arguments2){
	return [...new Set(arguments2.flat(Infinity))]
}

console.log(uniteArray(arguments2))

//ok
// let arguments3 = [[1,2,3], [3,4,1,5], [6,7,8,5]]

// function uniteArray3(arguments3){
// 	return Array.from (new Set(arguments3.flat(Infinity)))
// }

// console.log(uniteArray3(arguments3))

console.log(`******************************************`)
//show the numbers that add up to 5 // из массива вывести числа которые в сумме дают 5
let arr = [2, 5, 6, 7, 8, 9, 3, 4, 1];

function getFive(arr){
	let newArr = [];

	for(let i= 0; i < arr.length; i++){
		for(let j= i+1; j < arr.length; j++){ 
					//j= i+1 когда нужно прибавлять/вычать/умножать к активному числу те, которые идут за ним
			if (arr[i]+arr[j]=== 5){
				newArr.push([arr[i], arr[j]])
			}
		}
	} 
	return newArr;
}
console.log(getFive(arr))
console.log(`******************************************`)
//Multiplication Table

for (let i = 2; i <10; i ++){
	for (let k = 1; k<10; k++){
		console.log(`${i}*${k}=${i+k}`)
	} console.log(`------`)
}
console.log(`******************************************`)

//find the shortest word in the sentence

const text = "the smales word in sentence"

const findWord = string=>
	string
		.split(" ")
		.sort((a,b) => a.length -b.length)[0];
		
console.log(findWord(text))

console.log(`******************************************`)

//find a palindrom word 

let palidrom = "texet" //true
palidrom = "natallia"//false

const isPalindrom = string =>
	string === string.split("").reverse().join("")

console.log(isPalindrom(palidrom))

console.log(`******************************************`)

//create initials 

let initials = "natallia Krupnik"

const createInitials = name =>
		name
			.split(" ")
			.map(item => `${item.slice(0, 1).toUpperCase()}.`)
			.join(" ")
			console.log(createInitials(initials))

console.log(`******************************************`)
//conat array 

let array = [[1,2,3],[4,5,6],[7]]

let concatArray = array.reduce((accum, item)=>{
	return accum.concat(item)
})

console.log(concatArray)

console.log(`******************************************`)

let obj = [
	{id:55, city:"Berlin"},
	{id:45, city:"London"}
]

let objResult = obj.reduce((accum, item)=>{
	accum.push(item.id);
	return accum
},[])

console.log(objResult)

console.log(`******************************************`)
// find index of the biggest number REDUCE
let index = [2, 12, 4, 8, 1, 30]

let res = index.reduce((accum, item, index)=>{
	if (item > accum[1]){
		return [index, item]
	}
	else{
		return accum
	}
},[0, index[0]])

console.log(res)

console.log(`******************************************`)

let index2 = [2, 12, 4, 8, 1, 30]

let res2 = index.indexOf(Math.max(...index))

console.log(res2)

console.log(`******************************************`)

let numb = [2, 12, 4, 8, 1, 30]

let result = numb.reduce((accum, item)=>{
	if (accum<item){
		return item
	}
	else{
		return accum
	}
})

console.log(result)
console.log(`******************************************`)
//get the sum of the numbers 99 REDUCE
//variant 1
const summDigit = number =>
		number
		.toString()
		.split("")
		.reduce((accum, item)=>Number(accum) + Number(item))	
console.log(summDigit(99))

//variant 2
const summDigit2 = number =>
			Math.abs(number)
			.toString()
			.split("")
			.reduce((accum, item)=>Number(accum) + Number(item))
console.log(summDigit2(-19))

console.log(`******************************************`)
//get the sum of the positiv numbers from Array
//variant 1  !!!WITH REDUCE!!!

let arrayMinus = [-22, 1, 3, 10, -28]

let resultSumMinus = arrayMinus.reduce((accum, item)=>{
	if (item > 0){
		return accum + item
	}
	else return accum
}, 0)
console.log(resultSumMinus)

//variant 2 !!!WITH REDUCE!!!

const sumPlus2 = arrayMinus.reduce((accum, item) => item>0? accum + item: accum, 0)

console.log(sumPlus2)

//variant 3 !!!WITH FILTER and REDUCE!!! 
const sumPlus = number =>
		number 
		.filter(item => item > 0)
		.reduce((accum, item) => accum +item)

console.log(sumPlus(arrayMinus))

console.log(`******************************************`)
//get the sum of numbers
let summ = [22, 23, 1, 5]

let resSumm = summ.reduce((accum, item)=> accum+item)

console.log(resSumm)

console.log(`******************************************`)
// get posiv number 
//variant 1
const arR = [1,2,3,4,-6,10,-5,78];
const resulT = arR.filter(item => item > 0)
				.sort((a, b) => a - b);

console.log(resulT)


console.log(`******************************************`)
// get min and max number 

// const getMinMAx = number =>
// 		[Math.min(...number), Math.max(...number)]

// console.log(getMinMAx([78, 2, 0, 56, 23, 99, 11, 1]))

const getMinMAx = number =>
		`${Math.min(...number)}, ${Math.max(...number)}`

console.log(getMinMAx([78, 2, 0, 56, 23, 99, 11, 1]))

console.log(`******************************************`)

// "Abcd" answer: A-Bb-Ccc-Dddd

const duplicate = letter =>
		letter
			.split("")
			.map((element, index)=>`${element.toUpperCase()}${element.repeat(index)}`).join("-")

console.log(duplicate("Abcd"))

console.log(`******************************************`)
// return index of the uppercase letter
//"codEWaRs" answer: 3,4,6
//variant 1
const capiTals = letter=>
		letter
			.split("")
			.reduce((accum, item, index)=>{
				if (item === item.toUpperCase()){
					accum.push(index)
				} return accum
			},[])

console.log(capiTals("codEWaRs"))

//variant 2
let strinG = "codEWaRs"
let aRr = []

for(let i = 0; i < strinG.length; i++){
	if(strinG[i] === strinG[i].toUpperCase()){
		aRr.push(i)
	}
}
console.log(aRr)

// console.log(capitals("codEWaRs"))
console.log(`******************************************`)
// foo - multiple of 3
// bar - multiple of 5
// fooBar - multiple of 3 und 5

for ( i=5; i< 16; i++){
	if(i%3 === 0 && i%5 === 0){
		console.log("fooBar")
	}
	else if(i%3 === 0){
		console.log("foo")
	}
	else if(i%5 === 0){
		console.log("bar")
	}
	else (console.log(i))
}
console.log(`******************************************`)
