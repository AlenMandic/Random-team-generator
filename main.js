
let roster = ["Vulic ", "Erceg ", "Alen ", "Ivan ", "Peki ", "Roko ", "Bauk ", "Gaspar ", "Mario ", "Ante ", "Duje ", "Miha ", "Srecko ", "Tafra ", "Peter "];
let teamOne = [];
let teamTwo = [];
let teamThree = [];


let generatorButton = document.getElementById("generator");
generatorButton.addEventListener("click", generateTeams);

let showRoster = document.getElementById("roster");
showRoster.innerText = `Current players are: ${roster}`;

  function generateTeams() {
    let roster = ["Vulic ", "Erceg ", "Alen ", "Ivan ", "Peki ", "Roko ", "Bauk ", "Gaspar ", "Mario ", "Ante ", "Duje ", "Miha ", "Srecko ", "Tafra ", "Peter "];
    let teamOne = [];
    let teamTwo = [];
    let teamThree = [];
    for(let i = 0; i < 5; i++) {
      let randomIndex = Math.floor(Math.random() * roster.length)
        teamOne = teamOne + roster.splice(randomIndex, 1);
      }
      
      for(let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * roster.length)
          teamTwo = teamTwo + roster.splice(randomIndex, 1);
        }
      
        for(let i = 0; i < 5; i++) {
          let randomIndex = Math.floor(Math.random() * roster.length)
            teamThree = teamThree + roster.splice(randomIndex, 1);
          }

          let firstPara = document.getElementById("one");
          firstPara.innerText = teamOne;
      
          let secondPara = document.getElementById("two");
          secondPara.innerText = teamTwo;
      
          let thirdPara = document.getElementById("three");
          thirdPara.innerText = teamThree;

          return `Our random teams are: ${teamOne}, ${teamTwo}, ${teamThree}`;
  }



