let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".inner-container");
const msg=document.querySelector("#message-play");
const div_msg=document.querySelector(".message")
const user_para=document.querySelector("#user-score");
const comp_para=document.querySelector("#comp-score");

const computerchoice = () => {
  const options = ["Scissor", "Paper", "Rock"];
  const ran_num = Math.floor(Math.random() * 3);
  return options[ran_num];
};

const winnerscore=(userwin,userchoice,comchoice) =>
{
    if(userwin)
        {   userScore++;
            user_para.innerText=userScore;
            console.log("You win");
            msg.innerText=`You Won 🎉 ! Your choice is  ${userchoice} and Computer choice is ${comchoice}` ;
            div_msg.style.backgroundColor="#A1DD70";
        }
        else
        {
            comScore++;
            comp_para.innerText=comScore;
            console.log("you lose");
            msg.innerText=`You lost 😔Your choice is  ${userchoice} and Computer choice is ${comchoice}`   ;
            div_msg.style.backgroundColor="#FA7070";
        }
};

const playgame = (userchoice) => {
  console.log("user choice " + userchoice);
  const comchoice = computerchoice();
  console.log("Computer choice " + comchoice);
  if (userchoice === comchoice) {
    console.log("Game is draw");
    msg.innerText="Game is draw. Play again"
    div_msg.style.backgroundColor="violet";
    
  } else {
    let userwin = true;
    if (userchoice === "Rock") {
      userwin = comchoice === "Paper" ? false : true;
    } else if (userchoice === "Paper") {
      userwin = comchoice === "Scissor" ? false : true;
    } else {
      userwin = comchoice === "Rock" ? false : true;
    }
    winnerscore(userwin,userchoice,comchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
