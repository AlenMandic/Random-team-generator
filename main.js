let player1 = document.getElementById("name-one");
let player2 = document.getElementById("name-two");
let player3 = document.getElementById("name-three");
let player4 = document.getElementById("name-four");
let player5 = document.getElementById("name-five");
let player6 = document.getElementById("name-six");
let player7 = document.getElementById("name-seven");
let player8 = document.getElementById("name-eight");
let player9 = document.getElementById("name-nine");
let player10 = document.getElementById("name-ten");

let generatorButton = document.getElementById("generator");
generatorButton.addEventListener("click", generateTeams);

  function generateTeams() {
      // This needs to be refactored into something shorter
     let playerOne = player1.value + " ";
     let playerTwo = player2.value + " ";
     let playerThree = player3.value + " ";
     let playerFour = player4.value+ " ";
     let playerFive = player5.value+ " ";
     let playerSix = player6.value + " ";
     let playerSeven = player7.value + " ";
     let playerEight = player8.value + " ";
     let playerNine = player9.value + " ";
     let playerTen = player10.value + " ";
     // This also needs to be refactored into something shorter, code will be sick then
     let roster = []
     roster.push(playerOne);
     roster.push(playerTwo);
     roster.push(playerThree);
     roster.push(playerFour);
     roster.push(playerFive);
     roster.push(playerSix);
     roster.push(playerSeven);
     roster.push(playerEight);
     roster.push(playerNine);
     roster.push(playerTen);

    let teamOne = [];
    let teamTwo = [];
    for(let i = 0; i < 5; i++) {
      let randomIndex = Math.floor(Math.random() * roster.length)
        teamOne = teamOne + roster.splice(randomIndex, 1);
      }
      for(let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * roster.length)
          teamTwo = teamTwo + roster.splice(randomIndex, 1);
        }
      

          let firstPara = document.getElementById("one");
          firstPara.innerText = "Team one is: " + teamOne;
      
          let secondPara = document.getElementById("two");
          secondPara.innerText = "Team two is: " + teamTwo;

          return `Our random teams are: ${teamOne}, ${teamTwo}`;
  }


