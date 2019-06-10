
// script.js
// btn and array
var addPlayerBtn = document.getElementById("addPlayerBtn");
var playerInfoArray = [];

// constructor
function Football(firstName,lastName,number,age,numberGoals){
    this.firstName = firstName;
    this.lastName = lastName;
    this.number = number;
    this.age = age;
    this.numberGoals = numberGoals;
    // method
    this.greatSeason = function (){
      if(this.numberGoals >= 180){
        return `The footballer ${this.firstName}, ${this.number} and ${this.age} is a great player, 
        he had score more than ${this.numberGoals} in his career.`;
        }

        else{
            return `The footballer ${this.firstName}, ${this.number} and ${this.age} is still in progress and giving
             his best to be a great player.`;
        }
        }
    }


// event on button
addPlayerBtn.addEventListener("click", function(){
    let firstName = document.getElementById("name").value;
    let lastName = document.getElementById("lastname").value;
    let number = document.getElementById("number").value;
    let age = document.getElementById("age").value;
    let numberGoals = document.getElementById("goals").value;
  if(firstName == "" && lastName == "" && numberGoals == ""){
      alert("Fields Missing");
  }
  else{
    let footballerInfo = new Football(firstName,lastName,number,age,numberGoals)
    playerInfoArray.push(footballerInfo);
    printInfo(playerInfoArray);
    clearForm(playerInfoArray);
  }
});


function printInfo(playerInfoArray){
    document.getElementById("container").innerHTML="";
    let index = 1;
    for(let i of playerInfoArray){
        document.getElementById("container").innerHTML += `
        <ul style="margin-top:20px; width:50%;">
        <li style="list-style:none; margin: 16px 0;">Players Name: ${i.firstName}</li>
        <li style="list-style:none; margin: 16px 0;">Players Last Name: ${i.lastName}</li>
        <li style="list-style:none; margin: 16px 0;">Number: ${i.number}</li>
        <li style="list-style:none; margin: 16px 0;">Players Age: ${i.age}</li>
        <li style="list-style:none; margin: 16px 0;">Goals Scored: ${i.numberGoals}</li>
        <button class="season" id="btn-season-${index}" style="margin-left:0px;">Best Footballer!</button>
        </ul>
        <p class="textP" id="paragraph-best-${index}"></p>
        `;
        index++;
    }
}

// dynamic button event
document.addEventListener("click", function(e){
if(e.target.className == "season"){
    let index = parseInt(e.target.id.split("-")[2]);
    let currentPlayer = playerInfoArray[parseInt(index)-1];
    console.log(currentPlayer);
    document.getElementById(`paragraph-best-${index}`).innerText = `${currentPlayer.greatSeason()}`;
  
}



});

// clear form
function clearForm(){
    document.getElementById("name").value = "";
     document.getElementById("lastname").value = "";
     document.getElementById("number").value ="";
     document.getElementById("age").value = "";
    document.getElementById("goals").value = "";
}