import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angu-quiz';
  questions;
  choices;
  questionIndex;
  answers;
  totalQuestions;
  selectedIndex;
  finished;
  answered;
  score;
  
  constructor( private http:HttpClient ){
    this.questionIndex = 0;
   /* this.questions = [
      "Which of the following is a reserved keyword in C#?",
      "Which of the following is correct about value type variables in C#?  ",
      "Which of the following converts a type to a double type in C#?",
      "Which of the following operator returns the size of a data type in C#?",
      "Which of the following access specifier in C# allows a class to expose its member variables and member functions to other functions and objects?"
    ];

    this.choices = [
      [ "abstract", "as", "foreach", "All of the above"] ,
      [
       "The value types directly contain data. ",
       "int, char, and float, which stores numbers, alphabets, and floating point numbers, respectively are value types.", 
       "When you declare an int type, the system allocates memory to store the value.", 
       "All of the above"
      ],
      [
        "ToDecimal",
        "ToDouble",
        "ToInt16",
        "ToInt32"
      ],
      [
        "sizeof",
        "typeof",
        "&</a>",
        "*"
      ], 
      [
        "Public",
        "Private",
        "Protected",
        "Internal"
      ],
      ];


      this.answers = [ 3, 3, 1, 0, 0 ];
      */

      this.finished = false;
      this.answered = false;
      this.score = 0;
  }

  ngOnInit(){
    this.http.get<Object>( '../assets/questions.json').subscribe(
      data => {
        this.questions = data.questions;
        this.choices = data.choices;
        this.answers = data.answers;
        this.totalQuestions = this.choices.length;
      }
    );
  }

  resetQuiz(){
    this.questionIndex = 0;
    this.finished = false;
      this.answered = false;
      this.score = 0;
  }
  nextQuestion(){
    //alert("from app");
   

   

    if(this.finished){
      //Retake the Quiz
      this.resetQuiz();

    }else{

      if(!this.answered){
        alert("Please select an answer.");
        return;
      }

      this.answered = false;
      this.checkAnswer(this.selectedIndex);

      this.selectedIndex = -1;
      if(this.questionIndex < this.totalQuestions-1){
        this.questionIndex++;
      }else{
        this.finished = true;
      }

    
    }
    
    
  }

  clickAnswer(e){
    //alert(e.target.id)
    this.answered = true;
    this.selectedIndex = parseInt(e.target.id.replace("choice",""));
  }

  checkAnswer( selectedIndex ){
    if(this.answers[this.questionIndex] == selectedIndex){
      //Answer is correct
      this.score++;
    }
  }
}
