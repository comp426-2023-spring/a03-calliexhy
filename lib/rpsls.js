export {rps, rpsls}

function rps(shot){

    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);


    if (shot === undefined){
        result = {player: choices[random]}
    }

    if (!choices.includes(shot)){
        throw new RangeError("Error")
    }

    let result 

    if (shot === "rock") {
        if(random === "rock" || random === "paper" ) 
        result = "lose";
      
        if(random === "scissors" ) 
        result = "win";
    }
    
    if (shot === "paper") {
        if(random === "rock" ) 
        result = "win";

        if(random === "paper" || random === "scissors" ) 
        result = "lose";
    } 

   if (shot === "scissors") {
       if(random === "rock"  || random === "scissors")
        result = "lose";

       if(random === "paper") 
        result = "win";
      
    }

   if (shot === "lizard") {
       if(random === "rock" || random === "scissors") 
        result = "lose";
       if(random === "paper" ) 
        result = "win"; 
    }

   if (shot === "spock") {
      if(random === "rock" || random === "scissors") 
        result = "win";
      if(random === "paper" ) 
        result = "lose";
    }

    return {
        player: shot,
        opponent: random,
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
    
    if (shot === "rock") {
        if(random === "rock" || random === "paper" || random === "spock" ) 
        result = "lose";
      
        if(random === "scissors" || random === "lizard") 
        result = "win";
    }
    
    if (shot === "paper") {
        if(random === "rock" || random === "spock") 
        result = "win";

        if(random === "paper" || random === "scissors" || random === "lizard") 
        result = "lose";
    } 

   if (shot === "scissors") {
       if(random === "rock" || random === "spock" || random === "scissors")
        result = "lose";

       if(random === "paper" || random === "lizard") 
        result = "win";
      
    }

   if (shot === "lizard") {
       if(random === "rock" || random === "scissors" || random === "lizard") 
        result = "lose";
       if(random === "paper" || random === "spock") 
        result = "win"; 
    }

   if (shot === "spock") {
      if(random === "rock" || random === "scissors") 
        result = "win";
      if(random === "paper" || random === "lizard" || random === "spock") 
        result = "lose";
    }


    return {
        player: shot,
        opponent: random,
        result: result
    };



}

      
   