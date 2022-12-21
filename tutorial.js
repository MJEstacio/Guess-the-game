// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }

// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const total = [[bills[0] + tips[0]], [bills[1] + tips[1]], [bills[2] + tips[2]]]
// console.log(bills, tips, total)

// const josephArray = [
//   'Mark Joseph',
//   'Estacio',
//   2022 - 1990,
//   'Front-End Developer',
//   ['Alex', 'Berrie', 'George'],
// ]

// const joseph = {
//   firstName: 'Mark Joseph',
//   lastName: 'Estacio',
//   age: 2022 - 1990,
//   job: 'Front-End Developer',
//   friends: ['Alex', 'Berrie', 'George'],
// }
// console.log(joseph)

// const nameKey = 'Name'
// console.log(joseph['first' + nameKey])
// console.log(joseph['last' + nameKey])

// const interestedIn = prompt(
//   'What do you want to know about Joseph? Choose between firstName, lastName, age, job and friends'
// )

// if (joseph[interestedIn]) {
//   console.log(joseph[interestedIn])
// } else {
//   console.log('Wrong Request')
// }

// const joseph = {
//   firstName: 'Mark Joseph',
//   lastName: 'Estacio',
//   birthYear: 1990,
//   job: 'Front-End Developer',
//   friends: ['Alex', 'Berrie', 'George'],
//   location: 'Pasig City',
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2022 - this.birthYear
//     return this.age
//   },
//   getSummary: function () {
//     return `${this.firstName} ${
//       this.lastName
//     } is a ${this.calcAge()}-year old ${this.job} and he has ${
//       this.hasDriversLicense ? 'a' : 'no'
//     } driver's license`
//   },
// }

// console.log(joseph.calcAge())
// console.log(joseph.age)

// // Challenge
// console.log(joseph.getSummary())

// const mark = {
//   firstName: 'Mark',
//   lastName: 'Miller',
//   calcFullName: function () {
//     this.fullName = this.firstName + ' ' + this.lastName
//     return this.fullName
//   },
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height)
//     return this.BMI
//   },
// }

// const john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height)
//     return this.BMI
//   },
//   calcFullName: function () {
//     this.fullName = this.firstName + ' ' + this.lastName
//     return this.fullName
//   },
// }
// mark.calcFullName()
// mark.calcBMI()
// john.calcFullName()
// john.calcBMI()

// if (mark.BMI > john.BMI) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName} (${john.BMI})`
//   )
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName} (${mark.BMI})`
//   )
// }

// Iteration the for Loop !Important

// console.log('Lifting weights repetition 1')
// console.log('Lifting weights repetition 2')
// console.log('Lifting weights repetition 3')
// console.log('Lifting weights repetition 4')
// console.log('Lifting weights repetition 5')
// console.log('Lifting weights repetition 6')
// console.log('Lifting weights repetition 7')
// console.log('Lifting weights repetition 8')
// console.log('Lifting weights repetition 9')
// console.log('Lifting weights repetition 10')

// for loop keep running while condition is TRUE
// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`Lifting weights repetition ${rep}`)
// }

// Looping Arrays, Breaking and Continuing

// const joseph = [
//   'Mark Joseph',
//   'Estacio',
//   2022 - 1990,
//   'Front-End Web Developer',
//   ['Jomari', 'Joy', 'Badette'],
//   true,
// ]

// const types = []
// for (let i = 0; i < joseph.length; i++) {
//   // Reading from joseph array
//   console.log(joseph[i], typeof joseph[i])
//   // Filling types array
//   // types[i] = typeof joseph[i]
//   types.push(typeof joseph[i])
// }
// console.log(types)

// const years = [1990, 1994, 1989, 1987]
// const ages = []

// for (let i = 0; i < years.length; i++) {
//   ages.push(2022 - years[i])
// }
// console.log(ages)

// const data1 = [17, 21, 23]
// const data2 = [12, 5, -5, 0, 4]

// const printForecast = function (arr) {
//   let str = ''
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}°C in ${i + 1} days ... `
//   }
//   console.log('...', str)
// }
// printForecast(data1)

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-----Starting exercise ${exercise}`)

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`)
// }
// let rep = 1
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep}`)
//   rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1
// console.log(dice)

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`)
// }

// ***CODING CHALLENGE 4 ***

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = []
// const totals = []

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i])
//   tips.push(tip)
//   totals.push(tip + bills[i])
// }
// console.log(bills, tips, totals)

// const calcAverage = function (arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//   }
//   return sum / arr.length
// }
