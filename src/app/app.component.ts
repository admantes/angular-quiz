import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angu-quiz';
  choices;
  questionIndex;
  answers;

  constructor(){
    this.questionIndex = 0;
    this.choices = [
      [ "AnswerXXX", "Choice1", "Choice2", "Choice2"] ,
      [ "Choice3", "Choice1", "Choice2", "Answer"] 
      ];

      this.answers = [ 0, 4 ];
  }

  nextQuestion(){
    //alert("from app");
    this.questionIndex++;
  }
}
