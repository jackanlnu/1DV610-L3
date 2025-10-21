export class arrayHelper{
	// Creation Functions
	createArray(arrayLength){
		const arr = []
		for (let i = 1; i <= arrayLength; i++) {
			arr.push(i)
		}
		return arr
	}

	// Sorting Functions
	sortAlphabet(arr){
		return [...arr].sort()
	}

	sortValue(arr){
		return [...arr].sort((a, b) => a - b)
	}

	sortCharLength(arr){
		return [...arr].sort((a, b) => a.length - b.length)
	}

	shuffle(arr){
		const orderedArray = [...arr]
		const shuffledArray = []
		while (orderedArray.length > 0){
			const random = Math.floor(Math.random() * (orderedArray.length))
			shuffledArray.push(orderedArray.splice(random, 1)[0])
		}
		return shuffledArray
	}

	reverse(arr){
		const reversed = []
		for (let i = arr.length - 1; i >= 0; i--) {
			reversed.push(arr[i])
		}
		return reversed
	}

	// Clean up Functions

	/**
	 * Removes duplicates from an array.
	 */
	getUnique(arr){
		const uniqueArr = [arr[0]]
		for (let i = 0; i < arr.length; i++) {
			let newUnique = true
			for (let j = 0; j < uniqueArr.length; j++) {
				if (arr[i] === uniqueArr[j]) {
					newUnique = false
				}
			}
			if(newUnique){
				uniqueArr.push(arr[i])
			}
		}
		return uniqueArr
	}

	/**
	 * Removes null, undefined, 0, false and empty strings from an array.
	 */
	removeFalsy(arr){
		const falsyList = [null, undefined, 0, false, ""]
		return this.removeElements(arr, falsyList)
	}

	/**
	 * Removes null and undefined from an array.
	 */
	removeNullUndefined(arr){
		const falsyList = [null, undefined]
		return this.removeElements(arr, falsyList)
	}

	/**
	 * Remove specific elements from the array sent in.
	 * 
	 * @param {Array} conditions - List of elements that should be removed from the array.
	 */
	removeElements(arr, conditions){
		const cleanArr = [...arr]
		for(let i = 0; i < cleanArr.length; i++){
			if(conditions.includes(cleanArr[i])) {
				cleanArr.splice(i, 1)
				i--
			}
		}
		return cleanArr
	}

	// Math functions
	sum(arr) {
		let arrSum = 0
		for (let i = 0; i < arr.length; i++) {
			arrSum += arr[i]
		}
		return arrSum
	}

	min(arr) {
		let arrayMin = arr[0]
		for (let i = 1; i < arr.length; i++) {
			if(arr[i] < arrayMin) {
				arrayMin = arr[i]
			}
		}
		return arrayMin
	}

	max(arr) {
		let arrayMax = arr[0]
		for (let i = 1; i < arr.length; i++) {
			if(arr[i] > arrayMax) {
				arrayMax = arr[i]
			}
		}
		return arrayMax
	}

	average(arr) {
		let arrSum = 0
		for (let i = 0; i < arr.length; i++) {
			arrSum += arr[i]
		}
		return arrSum/arr.length
	}

	median(arr) {
		const sortedArray = this.sortValue([...arr])
		let med
		if (sortedArray.length % 2 !== 0) {
			med = sortedArray[(sortedArray.length - 1) / 2]
		} else {
			med = (sortedArray[sortedArray.length / 2 - 1] + sortedArray[sortedArray.length / 2]) / 2
		}
		return med
	}

	// String functions
 upperCaseAll(arr){
		const upperCaseArr = [...arr]
		for (let i = 0; i < upperCaseArr.length; i++) {
			upperCaseArr[i] = upperCaseArr[i].toUpperCase()
		}
		return upperCaseArr
	}

	lowerCaseAll(arr){
		const lowerCaseArr = [...arr]
		for (let i = 0; i < lowerCaseArr.length; i++) {
			lowerCaseArr[i] = lowerCaseArr[i].toLowerCase()
		}
		return lowerCaseArr
	}

	// Search/Info Functions

	/**
	 * Gets the postion of the first element that matches the element that's sent in.
	 */
	search(arr, condition){
		let position
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === condition) {
				position = i
			}
		}
		return position
	}

	/**
	 * Checks how many times each unique element shows up in a array
	 * 
	 * @returns {object} - Object showcasing how many times the elements appear.
	 */
	checkFrequency(arr){
		const frequencyList = {}
		const uniqueList = this.getUnique(arr)
		for (let i = 0; i < uniqueList.length; i++) {
			frequencyList[uniqueList[i]] = 0
		}
		for (let i = 0; i < arr.length; i++) {
			if(uniqueList.includes(arr[i])){
				frequencyList[arr[i]]++
			}
		}
		return frequencyList
	}

	getRandom(arr){
		const random = Math.floor(Math.random() * (arr.length))
		return [...arr][random]
	}

	getRandomMany(arr, amount){
		const shuffledArray = this.shuffle([...arr])
		return shuffledArray.slice(0, amount)
	}

	/**
	 * Gets every nth element. 
	 */
	nth(arr, n){
		const nthArray = []
		for (let i = n - 1; i < arr.length; i += n) {
			nthArray.push([...arr][i])
		}
		return nthArray
	}

	// Comparing/Altering multiple arrays Functions

	/**
	 * Merges two arrays without including duplicates.
	 */
	merge(arr1, arr2) {
		let newArray = [arr1, arr2]
		newArray = this.getUnique(newArray.flat())
		return newArray
	}

	/**
	 * Gets every element from the first array that doesn't exist in the second array.
	 */
	difference(arr1, arr2){
		const differenceArray = []
		const arrayCopy = this.getUnique(arr1)
		for (let i = 0; i < arrayCopy.length; i++) {
			if(!arr2.includes(arrayCopy[i])){
				differenceArray.push(arrayCopy[i])
			}
		}
		return differenceArray
	}

	/**
	 * Gets every element that exist in both arrays.
	 */
	similarity(arr1, arr2) {
		const similarityArray = []
		const arrayCopy = this.getUnique(arr1)
		for (let i = 0; i < arrayCopy.length; i++) {
			if(arr2.includes(arrayCopy[i])){
				similarityArray.push(arrayCopy[i])
			}
		}
		return similarityArray
	}

	// Mutation/Transformation Functions

	/**
	 * Divides the array into smaller arrays of a specified size.
	 */
	divide(arr, size) {
		const arrayCopy = [...arr]
		const dividedArray = []
		for (let i = 0; i < arrayCopy.length; i += size) {
			if (i + size < arrayCopy.length){
				dividedArray.push(arrayCopy.slice(i, i + size))
			} else {
				dividedArray.push([])
				while(i < arrayCopy.length){
					dividedArray[dividedArray.length - 1].push(arrayCopy[i])
					i++
				}
			}
		}
		return dividedArray
	}
}