console.log('hello world')
console.log('is this thing on?')



let money = 0
let teeth = money + 1 // spend the day cutting grass make once singular buck. UNLIMITED. if using teeth can buy rusty scissors

let rustyScissors = money + 5 // These rusty scissors cost 5 bucks, if using rusty scissors for the day of cutting you make 
//$5 UNLIMITED
// if you are using rusty scissors you can buy a push mower for $25 only ONCE
let olePushMower = money - 25
//if using the ole push mower spend the day cutting for %50. UNLIMITED
//if at any point you use ole pushMower you can buy a battery-powered mower for $250. ONLY ONCE
let batteryMower = money - 250
//Using the the fancy battery-powered lawnmower, you can spend the day cutting lawns and make $100. 
//You can do this as much as you want.
let starvingStudents = money - 500
//At any point, if you are currently using the fancy battery-powered lawnmower, you can hire a team of starving students 
//for $500. You can do this once, assuming you have enough money.
//Using the the team of starving students, you can spend the day cutting lawns and make $250. 
//You can do this as much as you want.

//You win the game when you have a team of starving students and $1000. In this situation, send a message to 
//the user telling them, they've won.

function teethTrim() { // the purpose of my function is to trim with my teeth
    money = money + 1 // when I trim with my teeth, my money grows by a singlur buck (ie + 1 to my money)
    console.log(`You used your teeth to trim this lawn and earned one singular buck. You now have $${money}.`)
}//when I log my teeth trim the above will tell the landscaper how much money they have.
teethTrim() //calling the function to run a trim with your teeth 1
teethTrim() // 2
teethTrim() // 3
teethTrim() // 4 george washingtons in my pocket
// prompt('Cut using teeth?')

function rustyScissorTrim() {
    money = money + 5
    console.log(`Careful around the edges, tetanus is REAL! You used rusty scissors to trim this lawn and earned $5. You now have $${money}.`)
}
rustyScissorTrim()

function olePushMowerTrim() {
    money = money + 50
    console.log(`Ole push mower putting ole presidents in my pocket! You used the ole push mower to trim this lawn and earned $50. You now have $${money}.`)
}
olePushMowerTrim()

function batteryPoweredMowerTrim() {
    money = money + 100
    console.log(`Saving on gas and making this cash! You used the battery powered mower to trim this lawn and earned $100. You now have $${money}.`)
}
batteryPoweredMowerTrim()
batteryPoweredMowerTrim()

function starvingStudentsTrim() {
    money = money + 250
    console.log(`Starving students making improvements! You used the starving students to trim this lawn and earned $250. You now have $${money}.`)
}
starvingStudentsTrim()