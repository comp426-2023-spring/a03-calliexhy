export {rps, rpsls}

function rps(shot){

    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);


    if (shot === undefined){
        return  {"player": choices[random]}
    }

    if (!choices.includes(shot)){
        throw new RangeError("Error")
    }

    //let result 

    const opponent = choices[random]


    if (shot === opponent) {
        const result = "tie";
        return {"player": shot, "opponent": opponent, "result": result}
      } else if (
        (shot === "paper" && opponent === "rock") ||
        (shot === "scissors" && opponent === "paper") ||
        (shot === "rock" && opponent === "scissors"))
        {
            const result = "win"
            return {"player": shot, "opponent": opponent, "result": result}
          } else {
            const result = "lose"
            return {"player": shot, "opponent": opponent, "result": result}
          }
        }


function rpsls(shot) {
  

    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);


    if (shot === undefined){
        result = {"player": choices[random]}
    }

    if (!choices.includes(shot)){
        throw new RangeError("Error")
    }

    let result 

    const opponent = choices[random]
    
    if (shot === opponent) {
        const result = "tie";
        return {"player": shot, "opponent": opponent, "result": result}
      } else if (
        (shot === "rock" && opponent === "scissors") ||
        (shot === "rock" && opponent === "lizard") ||
        (shot === "paper" && opponent === "rock") ||
        (shot === "paper" && opponent === "spock") ||
        (shot === "scissors" && opponent === "paper")
        (shot === "scissors" && opponent === "lizard") ||
        (shot === "lizard" && opponent === "paper") ||
        (shot === "lizard" && opponent === "spock") ||
        (shot === "spock" && opponent === "rock") ||
        (shot === "spock" && opponent === "scissors") 
       
      ) {
        const result = "win"
        return {"player": shot, "opponent": opponent, "result": result}
      } else {
        const result = "lose"
        return {"player": shot, "opponent": opponent, "result": result}
      }
}



      
   