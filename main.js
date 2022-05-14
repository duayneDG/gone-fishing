let prompt = require('prompt-sync')(); 
/*
* You make at least three commits in git (after completing parts of the project)
* The user is able to 'catch' fish with randomly generated names, weights, and values
* The time of day is shown to the user
* The user can only fish for six hours
* The user can only catch at maximum 10 lbs of fish
* Each turn, the sum of the user's caught fishes' weight and value is displayed
* At the end of the game, all the fish that the user caught are displayed along
with a sum of their weight and value 
*/

let fishWeight = 0; 
let caughtFishCollection = [];
let hourCount = 0; 
console.log(caughtFishCollection, "caught fish collection after hour count")
console.log(hourCount, "hour Count")

let flag = true

while (flag){

    welcomeDisplay()

    function welcomeDisplay(){

        console.log("we are going fishing today. Here are the rules: you have 6 hours to fish and you cannot exceed 10lbs per USDA reguations section 4c-103\n");

        let fishingStart = Number(prompt(`Would you like to start fishing? PRESS: 1 'YES' OR Press enter for 'No' `)); 

        if(fishingStart === 1 ){
            fishingGame()
        }else {
            return fishingGameDecision()
            } 
    }    

    function fishingGame(){

        let flag = true; 
        while(flag){

            let cast = prompt('Press enter when you are ready to cast ')
            console.log(cast)
            let fish = generateRandomFish();
            let caughtFishMessage = `Congrats, you caught a ${fish.name} weighting ${fish.weight}lbs with a value of: $${fish.price}`
            console.log(caughtFishMessage)

            let keepOrNot = Number(prompt("Would you like to keep this catch? 1 for 'Yes' press enter for 'No' "))

             // adds fish and weights after confirmation
            
            if (keepOrNot === 1){
                console.log(hourCount, "hour")
            }else{
                caughtFishCollection.pop()
                console.log(caughtFishCollection, 'fish collection')
                console.log(gameDisplay()) 
                 
            }  
            flag = false  
            
        }
        
    }

    

    function generateRandomFish(){
        let fishName = [
            "oscar", "majarra", "Apche Trout","articGreyling", "Atlantic Herring","American Gizzard", "Atlantic Salmon", "Bigeye", 'Black Crappie', "Chain Pickerel", "Redear Sunfish", "Saugeye"];

        let fishWeight = [2.00, 2.02, 5.00, 9.00, 2.00, 1.6, 2, 3.08, 2, 4, 1, 4];
        let fishPrice = [ 3.99, 9.62, 70.00, 24.99, 12.50, 9.99, 3.99, 3.99, 4.99, 11.99, 6.99, 18.99]
        
        let randomNumber = (Math.random(fishWeight.length)*fishWeight.length).toFixed()
        
        let randomFish = fishName[randomNumber]
        let randomWeight = fishWeight[randomNumber]
        let randomFishPrice = fishPrice[randomNumber]

        let fish = {
            'name': randomFish,
            'weight': randomWeight,
            'price': randomFishPrice
        }

        fishWeight += fish.weight;
        caughtFishCollection.push(fish)
        hourCount += 1;
        return fish

        // console.log(randomFish,randomWeight,randomFishPrice)
    }

    
    function gameDisplay(){

       let displayMessage = console.log(`Total fish Caught ${caughtFishCollection.length} \n Fish Total Weighing: ${fishWeight}`)
       console.log(prompt(`${displayMessage}`))
       let endFishing = fishingGameDecision()

        if(endFishing === true){
            return endFishing
        }
        
    }

    function fishingGameDecision(){

        if(caughtFishCollection === 0){
            let newFisherman = Number(prompt('Is this your first time? Press 1 for "Yes" otherwise press enter '))
            if(newFisherman === 1){
                return true
            } 
        }else{
            let fishingContinuation = Number(prompt('Would you like to continue fishing? Press 1 for "Yes" otherwise press enter '))
        
            if(fishingContinuation === 1 && caughtFishCollection > 0){
                fishingContinuation = true;
                return fishingContinuation
            }else{
               exitGame()
            }
            
        }
        function exitGame (){

            exitMessage = prompt('thank you for playing press enter to exit..')
            return false
        }
        
    }

    flag = exitGame()
}

    
 





    

    

    
