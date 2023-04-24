export {rps, rpsls}

function rps(shot){

    const choices = ['rock', 'paper', 'scissors'];
    const random = choices[Math.floor(Math.random() * choices.length)];


    if (shot === undefined){
        return  {"player": random}
    }

    if (!choices.includes(shot)){
        throw new RangeError("Error")
    }


    if (shot === random) {
        const result = "tie";
        return { 
        "player": shot,
        "opponent": random,
        "result": result
    }
    
      } else if (
        (shot === "paper" && random === "rock") ||
        (shot === "scissors" && random === "paper") ||
        (shot === "rock" && random === "scissors"))
        {
            const result = "win"
            return {
                "player": shot,
                "opponent": random,
                "result": result
            }
          } else {
            const result = "lose"
            return {
                "player": shot, 
                "opponent": random, 
                "result": result
            }
          }
        }


function rpsls(shot) {
  

    const choices = ['rock', 'paper', 'scissors'];
    const random = choices[Math.floor(Math.random() * choices.length)];


    if (shot === undefined){
        result = {"player": random}
    }

    if (!choices.includes(shot)){
        throw new RangeError("Error")
    }

    let result 

    
    if (shot === random) {
        const result = "tie";
        return { 
        "player": shot,
        "opponent": random,
        "result": result
    }
       
      } else if (
        (shot === "rock" && random === "scissors") ||
        (shot === "rock" && random === "lizard") ||
        (shot === "paper" && random === "rock") ||
        (shot === "paper" && random === "spock") ||
        (shot === "scissors" && random === "paper")
        (shot === "scissors" && random === "lizard") ||
        (shot === "lizard" && random === "paper") ||
        (shot === "lizard" && random === "spock") ||
        (shot === "spock" && random === "rock") ||
        (shot === "spock" && random === "scissors") 
       
      ) {
        const result = "win"
            return {
                "player": shot,
                "opponent": random,
                "result": result
            }
          } else {
            const result = "lose"
            return {
                "player": shot, 
                "opponent": random, 
                "result": result
      }
}
}



      
   