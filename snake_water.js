// //SNAKE WATER GUN GAME
//USING JS ALERT, PROMPT  AND  CONFIRM FUNCTIONS

function game() {

   let user_score = 0
   let comp_score = 0
   const num = Math.floor(Math.random() * 3) + 1;
   console.log(num)
   let alpha
   if (num == 1) {
     alpha = 's'
 
 
   }
   else if (num == 2) {
     alpha = 'w'
 
   }
   else {
     alpha = 'g'
   }
   while (true) {
 
 
     let choice = prompt("Enter your choice : \n Press 's' for snake \n Press 'w' for water \n Press 'g' for Gun")
 
     if (alpha == 's' && choice == 's') {
       alert("Computer chose snake & You also  chose snake")
       alert("Its a DRAW!")
     }
     else if (alpha == 's' && choice == 'g') {
       alert("Computer chose snake & You chose gun")
       alert("Congratulations You WIN !!")
       user_score++
 
     }
     else if (alpha == 's' && choice == 'w') {
       alert("Computer chose snake & You  chose water")
       alert("You Lose !!")
       comp_score++
     }
     else if (alpha == 'g' && choice == 's') {
       alert("Computer chose Gun & You  chose snake")
       alert("You Lose !!")
       comp_score++
 
     }
     else if (alpha == 'g' && choice == 'w') {
       alert("Computer chose Gun & You  chose water")
       alert("Congratulations You WIN !!")
       user_score++
 
     }
     else if (alpha == 'g' && choice == 'g') {
       alert("Computer chose Gun & You also  chose gun")
       alert("Its a DRAW!")
 
     }
     else if (alpha == 'w' && choice == 's') {
       alert("Computer chose Water & You  chose snake")
       alert("Congratulations You WIN !!")
       user_score++
 
     }
     else if (alpha == 'w' && choice == 'w') {
       alert("Computer chose Water & You also  chose water")
       alert("Its a DRAW !!")
     }
     else if (alpha == 'w' && choice == 'g') {
       alert("Computer chose Water & You chose gun")
       alert(" You lose")
       comp_score++
 
     }
     else {
       prompt("Enter a valid Option Please  ")
     }
 
     const playAgain = confirm("Do you want to play again?");
     if (!playAgain) {
       console.log(`Computer Score : ${comp_score} `, `Your Score : ${user_score}`)
 
     }
 
   }
 
 }
 
 game()
 