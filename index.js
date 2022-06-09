let readlineSync = require('readline-sync');
let chalk = require('chalk');


// User Introduction
let userName = readlineSync.question('Welcome to '+chalk.bold.red('MARVEL')+' quiz game. To play the game, enter your name - ');
console.log('Hello 👋 ' + chalk.yellow.bold(userName) + ", Let's begin.");
console.log('-----------\n');


// Question List
let questionsList = [
  {
    question: "Which of these characters is NOT an Avenger ? \n\t "+chalk.cyan('a:')+" Captain America \n\t "+chalk.cyan('b:')+" Thor \n\t "+chalk.cyan('c:')+" Green Lantern \n\t "+chalk.cyan('d:')+" Black Widow \n",
    correctOption: 'c'
  },
  {
    question: "What is Captain America’s shield made of ? \n\t "+chalk.cyan('a:')+" Adamantium \n\t "+chalk.cyan('b:')+" Vibranium \n\t "+chalk.cyan('c:')+" Promethium \n\t "+chalk.cyan('d:')+" Carbonadium \n",
    correctOption: 'b'
  },
  {
    question: "What is Black Widow's real name ? \n\t "+chalk.cyan('a:')+" Natasha Romanoff \n\t "+chalk.cyan('b:')+" Natalie Rushman \n\t "+chalk.cyan('c:')+" Wanda Maximoff \n\t "+chalk.cyan('d:')+" Yelena Belova \n",
    correctOption: 'a'
  },
  {
    question: "How many Infinity Stones are there ? \n\t "+chalk.cyan('a:')+" Five \n\t "+chalk.cyan('b:')+" Six \n\t "+chalk.cyan('c:')+" Seven \n\t "+chalk.cyan('d:')+" Eight \n",
    correctOption: 'b'
  },
  {
    question: "To whom did Captain America give his shield in Avengers:Endgame ? \n\t "+chalk.cyan('a:')+" Sam Wilson \n\t "+chalk.cyan('b:')+" Bucky Barnes \n\t "+chalk.cyan('c:')+" Tony Stark \n\t "+chalk.cyan('d:')+" Bruce Banner \n",
    correctOption: 'a'
  },
  {
    question: "What type of doctor is Stephen Strange ? \n\t "+chalk.cyan('a:')+" Cardiothoracic-Surgeon \n\t "+chalk.cyan('b:')+" Trauma-Surgeon \n\t "+chalk.cyan('c:')+" Neuro-Surgeon \n\t "+chalk.cyan('d:')+" Plastic-Surgeon \n",
    correctOption: 'c'
  },
  {
    question: "What necklace does Peter buy for M.J in Spiderman: Far From Home ? \n\t "+chalk.cyan('a:')+" Black Sunflower \n\t "+chalk.cyan('b:')+" Black Dahlia \n\t "+chalk.cyan('c:')+" Saint Christpher \n\t "+chalk.cyan('d:')+" Diamond \n",
    correctOption: 'b'
  },
  {
    question: "And finally, what is the name of Thor’s hammer ? \n\t "+chalk.cyan('a:')+" Vanir \n\t "+chalk.cyan('b:')+" Normi \n\t "+chalk.cyan('c:')+" Aesir \n\t "+chalk.cyan('d:')+" Mjolnir \n",
    correctOption: 'd'
  }
]


// Highscore
let highScore = {
    name: 'Abhishek',
    score: 50 
}


let score = 0;
// game function
function game(question, answer) {  
  let userAnswer = readlineSync.question(question);
  
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score = score + 10;
    console.log('You Typed - "' + userAnswer + '"');
    console.log(chalk.greenBright('You are correct.'));
    console.log('Score: ' + chalk.blueBright(score));
    console.log('-----------\n');
  } else {
    console.log('You Typed - "' + userAnswer + '"');
    console.log(chalk.red('You are wrong.'));
    console.log('Score: ' + chalk.blueBright(score));
    console.log('-----------\n');
  }
}


// Looping Question list
for (let i=0; i<questionsList.length; i=i+1) {
  game(questionsList[i].question, questionsList[i].correctOption);
}


// Output
console.log('🔥 Quiz Over 🔥\n');
console.log('-----------');
console.log('Your final score is ' + chalk.blueBright(score) + '.');
console.log('Current highscore is ' + chalk.blueBright(highScore.score) + ' by ' + chalk.yellow(highScore.name) + '.');
console.log('-----------\n');


// Checking if highscore is broken.
if (score>highScore.score) {
  console.log('Congrats ' + chalk.yellow(userName) + ', You broke the highscore 🎊🥳🎊.\nSend me a screenshot of the score to add your name to the Highscore list.\n')
}
