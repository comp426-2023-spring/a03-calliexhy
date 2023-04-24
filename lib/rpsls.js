export {rps, rpsls}

function rps(shot){

  const choices = ['rock', 'paper', 'scissors'];
  const random = choices[Math.floor(Math.random() * choices.length)];

  if (shot === undefined) {
      return { player: random};
  } else if (!choices.includes(shot)){
      throw new RangeError()
  } else {
    
      var result
    
      if (shot === 'rock') {
          if(random === 'rock') {
              result = 'tie';
    }else if (random === 'paper') {
              result = 'lose';
          }else if (random === 'scissors') {
              result = 'win';
          }
      } else if (shot === 'paper') {
          if (random === 'rock') {
              result = 'win';
          } else if (random === 'paper') {
              result = 'tie';
          } else if (random === 'scissors') {
              result = 'lose';
          }
 
      } else if (shot === 'scissors') {
          if (random === 'rock') {
              result = 'lose';
          } else if (random === 'paper') {
              result = 'win';
          } else if (random === 'scissors') {
              result = 'tie';
          }
      }
      return {
          player: shot,
          opponent: random,
          result: result
      };
  }
}

function rpsls(shot) {
 
  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  const random = choices[Math.floor(Math.random() * choices.length)];

  if (shot === undefined) {
    
      return {
          player: random
      };
  } else if (!choices.includes(shot)) {
 
      throw new RangeError();
  }
  else {
         var result
      if (shot === 'rock') {
          if (random === 'rock') {
              result = 'tie';
          } else if (random === 'paper') {
              result = 'lose';
          } else if (random === 'scissors') {
              result = 'win';
          } else if (random === 'lizard') {
              result = 'win';
          } else if (random === 'spock') {
              result = 'lose';
          }
      } else if (shot === 'paper') {
          if (random === 'rock') {
              result = 'win';
          } else if (random === 'paper') {
              result = 'tie';
          } else if (random === 'scissors') {
              result = 'lose';
          } else if (random === 'lizard') {
              result = 'lose';
          } else if (random === 'spock') {
              result = 'win';
          }
      } else if (shot === 'scissors') {
          if (random === 'rock') {
              result = 'lose';
          } else if (random === 'paper') {
              result = 'win';
          } else if (random === 'scissors') {
              result = 'tie';
          } else if (random === 'lizard') {
              result = 'win';
          } else if (random === 'spock') {
              result = 'lose';
          }
      } else if (shot === 'lizard') {
          if (random === 'rock') {
              result = 'lose';
          } else if (random === 'paper') {
              result = 'win';
          } else if (random === 'scissors') {
              result = 'lose';
          } else if (random === 'lizard') {
              result = 'tie';
          } else if (random === 'spock') {
              result = 'win';
          }
      } else if (shot === 'spock') {
          if (random === 'rock') {
              result = 'lose';
          } else if (random === 'paper') {
              result = 'win';
          } else if (random === 'scissors') {
              result = 'win';
          } else if (random === 'lizard') {
              result = 'lose';
          } else if (random === 'spock') {
              result = 'tie';
          }
      }
      return {
          player: shot,
          opponent: random,
          result: result
      };
  }
}