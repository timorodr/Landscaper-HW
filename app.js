const trimTools = [ //making an array of all of our tools, how much they cost, and the money they make while in use
    {name: 'Teeth', moneyMade: 1, price: 0},
    {name: 'Rusty Scissors', moneyMade: 5, price: 5},
    {name: 'Ole Push Mower', moneyMade: 50, price: 25},
    {name: 'Battery Powered Mower', moneyMade: 100, price: 250},
    {name: 'Starving Students', moneyMade: 250, price: 500},
]

const landscaper = { // this is the users starting value of money and while trimmer they have
    money: 0,
    trimmer: 0,
    gameWon: false
}

function trimLawn() { // function created to initiate a lawn trim
    const trimmer = trimTools[landscaper.trimmer] // variable created that is equal to which object our trimmer is. Array[0] essentially
    alert(`You used your ${trimmer.name} to trim this lawn and earned $${trimmer.moneyMade}.`)
    // alert message updating the user of the tool they have and how much money they currently have
    landscaper.money += trimmer.moneyMade // user money  equals user money plus which tool we're utilizing and the moneyMade value linked to that tool
}

function upgradeTrimmer() { // function created to purchase a new trimmer and upgrade from the previous trim tool.
    if(landscaper.trimmer + 1 < trimTools.length){ // if the users trimmer is less than the length of our array we will add 1 to our trimmer
        //upgrading our tool to the next value in the array and also checks if we've reached/used the last tool
        const newTool = trimTools[landscaper.trimmer + 1] //variable created for our new tool. We're adding 1 to our value of trimmer our landscaper has. Array[1]
        if(newTool.price <= landscaper.money){ //if statement saying if Array[index value] price is less than or equal to the users money 
            landscaper.money -= newTool.price //then we subtract the price of the new trimmer from our users money value
            landscaper.trimmer += 1 // and our users trimmer value increases by 1 to indiciate we are using the next tool we upgraded to
        }else {
            alert("Get your money up, not your funny up to upgrade your trimmer!") // if the 2nd 'if' statement is false the user will receive this alert.
        }
    } else {
    alert("All upgrades have been complete! No more upgrades are available.") // if the 1st 'if' statement is false then the user will receive this alert.
    }
}

function landscaperWins() { // function to create a winning scenario
    if(landscaper.trimmer === trimTools.length - 1 && landscaper.money >= 1000) { // if our landscaper trimmer is the last object in our array 
        // and our landscaper (users) money is $1000 you have won the game! You will receieve the alert below!
        alert('You have trimmed all the lawns! You bought a team of starving students...I promise this is legal! You have $1000 in your pocket! And you have won the game!!!')
        landscaper.gameWon = true // our gameWon value in our landscaper variable turns true
    }
}

alert("Welcome to your first day as a landscaper! Lets get to trimming!!!") // Alert at start of game to give user an intro.

while (!landscaper.gameWon) { // a while loop to allow the game to run in a loop and allow continuous user input until the game is complete at which we have invoked the landscaperWins function
    const userInput = prompt(`You have acquired $${landscaper.money}, do you want to continue [t]rimming lawns or [u]pgrade your trimmer?`)

    if (userInput === 't') { // takes user input to invoke function of trimming
        trimLawn()
    }

    if (userInput === 'u'){ // takes user input to invoke function of upgrading
        upgradeTrimmer()
    }

    if (userInput !== 't' && userInput !== 'u') {
        alert("Not a valid response, please type 't' or 'u'")
    }

    
    landscaperWins()
}
