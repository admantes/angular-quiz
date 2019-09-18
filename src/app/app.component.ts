import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './models/Question';

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

      this.finished = false;
      this.answered = false;
      this.score = 0;
  }

  ngOnInit(){
    this.http.get<Question>( '../assets/questions.json').subscribe(
      data => {
        console.log(data);
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
