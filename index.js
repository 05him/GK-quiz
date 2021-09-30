 var readlineSync = require("readline-sync");
// var audic =require("audic");
var chalk = require("chalk");
console.log(chalk.bgCyan.bold("\t\t\t\t\t  Welcome To Mark2!  "), chalk.dim("\n \t\t\t\t\t  (It's an GK quiz)"));
var ask= readlineSync.question(chalk.inverse("\n\t To Exit press 'e' to Start the quiz press any other key ")+"  " );
if (ask==="e"){
  console.log(chalk.italic("\n\tThanks for comming here.\n\t Have a nice day  ;)"))
}
else {


 var questionsList =[{
   question: "What is the capital of INDIA?",
   a: "Mumbai",
   b:"Kolkata",
   c:"Delhi",
   d:"Bengalore",
   ans:"c",
   ans2: "C"
 },
 {
   question:"Who was the first president of INDIA?",
   a:"Jawaharlal Nehru",
   b:"Rajendra Prasad",
   c:"Mahatma Gandi",
   d:"Subash Chandra Bose",
   ans:"b",
   abs2:"B"
 },
 {
   question:"Who was the first human to step on the moon?",
   a:"Jeff Bezos",
   b:"Mark Zukerberg",
   c:"Nelson Mandela",
   d:"Neil Armstrong",
   ans:"d",
   ans2: "D"
 },
 {
   question:"How many continents are there in the world?",
   a:"7",
   b:"6",
   c:"5",
   d:"9",
   ans:"a",
   ans2: "A"
 },
 {
  question:"Who is the CEO of neoG Camp?",
  a:"Swapnil Agarwal",
  b:"Elon Musk",
  c:"Tanay Pratap",
  d:"Tanvi Priya",
  ans:"d",
 ans2:"D"
 },
 {
   question:"How manny bones are there in an adult human body?",
   a:"206",
   b:"231",
   c:"205",
   d:"241",
   ans:"a",
   ans2:"A"
 },
 {
   question:"How many keys a keyboard have?",
   a:"204",
   b:"103",
   c:"203",
   d:"104",
   ans:"d",
   ans2:"D"
 },
 {
   question:"Which city is also known as pink city?",
   a:"Jaipur",
   b:"Nagpur",
   c:"Jhansi",
   d:"Ahemdabad",
   ans:"a",
   ans2:"A"
 },
 {
   question:"Who is the founder of neoG Camp?",
   a:"Elon Musk",
   b:"Tanvi Priya",
   c:"Swapnil Agrawal",
   d:"Tanay Pratap",
   ans:"b",
   ans2:"B"
 },
 {
   question:"Who is the founder of Microsoft?",
   a:"Jeff Bezos",
   b:"Mark Zukerberg",
   c:"Bill Gates",
   d:"Elon Musk",
   ans:"c",
   ans2:"C"
 }
 ]
  var score=0;
  // var aa = new audic("https://replit.com/@05him/Mark-2#start.mp3");
  // aa.play();
  function print(arr){
  for(var i=0; i<arr.length;i++){
    console.log( chalk.italic("\nQ"+(i+1)+".)"),arr[i].question ,chalk.italic("\n \ta.)"),arr[i].a, "\t", chalk.italic("b.)"),arr[i].b, chalk.italic("\n\tc.)"),arr[i].c,chalk.italic("\td.)"),arr[i].d);
    var userAns= readlineSync.question(chalk.dim.italic("\tYour ans:"));

      if(userAns===arr[i].ans || userAns=== arr[i].ans2 ){
        score+=1;
        console.log(chalk.italic("\tYou are Correct!!! \n\tYour Sore:"+score));
      }
    else if(userAns==="a"|| userAns==="A"|| userAns==="b"|| userAns==="B"|| userAns==="c"|| userAns==="C" || userAns==="d"|| userAns==="D"){
      score-=1;
      console.log(chalk.italic("\tOopss!! Wrong Answer.\n\tCorrect Answer is option:'")+(arr[i].ans)+("'\n\t Your Score:")+score);
    }
    else {
      console.log(chalk.italic("\tPlease Choose from the given options"));
    }
  }
  }
    print(questionsList);
    console.log(chalk.inverse("\n Your final score is :"+score+ " "));
    var highScore=2;
    var highUser="Alexa";
    if(score>highScore){
      console.log(chalk.bold.underline("\nCongrats!! You have beaten the high score of "+highUser+" \n"), chalk.italic.dim("(To update the high score send the screen shot of your score to the developer)") );
    }
  console.log(chalk.italic("\nThank You for visiting!!  :)\n\n"));
}