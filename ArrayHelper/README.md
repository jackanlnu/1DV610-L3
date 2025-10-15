# JS Array Helper

This module is an array helper for JavaScript. It includes several functions that help with basic array needs. The array helper always returns a copy of an array and never changes the array sent in.

## Setup

1. Download the module and place it in the project where you want to use it. 

2. Insert the code below into your file where you want to use it.
```js
import { arrayHelper} from "js-array-helper";

const helper = new arrayHelper();
```
3. You are now ready to use the array helper.

## Functions

### createArray()

Creates an array based on the length sent in.

```js
console.log(helper.createArray(5))
// Output: [1, 2, 3, 4, 5]
```
---

sortAlphabet()

Sorts the array alphabetically.

```js
const array = ['Javascript', 'Good morning', 'Hi']
console.log(helper.sortAlphabet(array))
// Output: ['Good morning', 'Hi', 'Javascript']
```
---

sortValue()

Sorts the array by value.

```js
console.log(helper.sortValue([5,0,1,17,200,2]))
// Output: [0, 1, 2, 5, 17, 200]
```
---

sortCharLength()

Sorts the array by the elements length.

```js
const array = ['Javascript', 'Good morning', 'Hi']
console.log(helper.sortAlphabet(array))
// Output: ['Hi', 'Javascript', 'Good morning']
```
---

shuffle()

Randomises the array positions.

```js
console.log(helper.shuffle([1, 2, 3, 4, 5, 6]))
// Output: [6, 3, 2, 5, 1, 4]
```
---

reverse()

Reveses the order of the array

```js
console.log(helper.reverse([1, 2, 3, 4, 5, 6]))
// Output: [6, 5, 4, 3, 2, 1]
```
---

getUnique()

Gets the unique elements from the array.

```js
console.log(helper.getUnique([1, 1, 2, 3, 3, 1, 4, 2]))
// Output: [1, 2, 3, 4]
```
---

removeFalsy()

Removes null, undefined, 0, false and empty strings from an array.

```js
console.log(helpers.removeFalsy(['a', undefined, undefined,'b','c','d','','e',null,'f',0,0,'g']))
// Output: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
```
---

removeNullUndefined()

Removes null and undefined from an array.

```js
console.log(helpers.removeNullUndefined(['a', undefined, undefined,'b','c','d','','e',null,'f',0,0,'g']))
// Output: ['a', 'b', 'c', 'd', '', 'e', 'f', 0, 0, 'g']
```
---

sum()

Gives the sum of all the numbers in the array.

```js
console.log(helper.sum([1, 2, 3, 4, 5, 6]))
// Output: 21
```
---

min()

Gives the smallest number in the array.

```js
console.log(helper.min([5,0,1,17,200,2]))
// Output: 0
```
---

max()

Gives the smallest number in the array.

```js
console.log(helper.max([5,0,1,17,200,2]))
// Output: 200
```
---

average()

Gives the average of the array.

```js
console.log(helper.average([5,0,1,17,200,2]))
// Output: 37.5
```
---

median()

Gives the median of the array.

```js
console.log(helper.median([5,0,1,17,200,2]))
// Output: 3.5
```
---

upperCaseAll()

Turns all the characters of a string in the array to uppercase.

```js
console.log(helper.upperCaseAll(['Hi', 'Javascript', 'word']))
// Output: ['HI', 'JAVASCRIPT', 'WORD']
```
---

lowerCaseAll()

Turns all the characters of a string in the array to uppercase.

```js
console.log(helper.lowerCaseAll(['Hi', 'Javascript', 'WORD']))
// Output: ['hi', 'javascript', 'word']
```
---

search()

Gets the postion of the first element that matches the element that's sent in.

```js
console.log(helper.search(['Hi', 'Javascript', 'word'], 'Javascript'))
// Output: 2
```
---

checkFrequency()

Checks how many times each unique element shows up in a array and returns an array displaying the information.

```js
console.log(helper.checkFrequency(['a','c','b','A','a','c','c','1','c','A','c','c']))
// Output: { a: 2, c: 6, b: 1, A: 2 }
```
---

getRandom()

Gets a random element in the array.

```js
console.log(helper.getRandom([1, 2, 3, 4, 5, 6]))
// Output: 4
```
---

getRandomMany()

Gets multiple random element in the array.

```js
console.log(helper.getRandomMany([1, 2, 3, 4, 5, 6, 7, 8]), 3)
// Output: [2, 8, 1]
```
---

nth()

Gets every nth element of the array.

```js
console.log(helper.nth([1, 2, 3, 4, 5, 6, 7, 8]), 3)
// Output: [3, 6]
```
---

merge()

Merges two arrays without including duplicates.

```js
const array1 = ['hi','cool','a','b','1']
const array2 = ['a','c','b','A','1']
console.log(helper.merge(array1, array2))
// Output: ['hi', 'cool', 'a',  'b', '1', 'c', 'A']
```
---

difference()

Gets every element from the first array that doesn't exist in the second array.

```js
const array1 = ['hi','cool','a','b','1']
const array2 = ['a','c','b','A','1']
console.log(helper.difference(array1, array2))
// Output: ['hi', 'cool']
```
---

similarity()

Gets every element that exist in both arrays.

```js
const array1 = ['hi','cool','a','b','1']
const array2 = ['a','c','b','A','1']
console.log(helper.similarity(array1, array2))
// Output: ['a', 'b', '1']
```
---

divide()

Divides the array into smaller arrays of a specified size.

```js
console.log(helper.nth([1, 2, 3, 4, 5, 6, 7, 8, 9]), 3)
// Output: [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]
```
---

