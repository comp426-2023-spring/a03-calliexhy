export {rps, rpsls}

function rps(shot){

    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);


    if (shot === undefined){
        return  {player: choices[random]}
    }

    if (!choices.includes(shot)){
        throw new RangeError("Error")
    }

    let result 

    const opponent = choices[random]


    if (shot === "rock") {
        if(opponent === "rock" || opponent === "paper" ) 
        result = "lose";
      
        if(opponent === "scissors" ) 
        result = "win";
    }
    
    if (shot === "paper") {
        if(opponent === "rock" ) 
        result = "win";

        if(opponent === "paper" || opponent === "scissors" ) 
        result = "lose";
    } 

   if (shot === "scissors") {
       if(opponent === "rock"  || opponent === "scissors")
        result = "lose";

       if(opponent === "paper") 
        result = "win";
      
    }

   if (shot === "lizard") {
       if(opponent === "rock" || opponent === "scissors") 
        result = "lose";
       if(opponent === "paper" ) 
        result = "win"; 
    }

   if (shot === "spock") {
      if(opponent === "rock" || opponent === "scissors") 
        result = "win";
      if(opponent === "paper" ) 
        result = "lose";
    }

    return {
        player: shot,
        opponent: opponent,
        result: result
    };



  
}


function rpsls(shot) {
  

    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);


    if (shot === undefined){
        result = {player: choices[random]}
    }

    if (!choices.includes(shot)){
        throw new RangeError("Error")
    }

    let result 

    const opponent = choices[random]
    
    if (shot === "rock") {
        if(opponent === "rock" || opponent === "paper" || opponent === "spock" ) 
        result = "lose";
      
        if(opponent === "scissors" || opponent === "lizard") 
        result = "win";
    }
    
    if (shot === "paper") {
        if(opponent === "rock" || opponent === "spock") 
        result = "win";

        if(opponent === "paper" || opponent === "scissors" || opponent === "lizard") 
        result = "lose";
    } 

   if (shot === "scissors") {
       if(opponent === "rock" || opponent === "spock" || opponent === "scissors")
        result = "lose";

       if(opponent === "paper" || opponent === "lizard") 
        result = "win";
      
    }

   if (shot === "lizard") {
       if(opponent === "rock" || opponent === "scissors" || opponent === "lizard") 
        result = "lose";
       if(opponent === "paper" || opponent === "spock") 
        result = "win"; 
    }

   if (shot === "spock") {
      if(opponent === "rock" || opponent === "scissors") 
        result = "win";
      if(opponent === "paper" || opponent === "lizard" || opponent === "spock") 
        result = "lose";
    }


    return {
        player: shot,
        opponent: opponent,
        result: result
    };



}

      
   