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
  totalQuestions;
  selectedIndex;
  finished;

  constructor(){
    this.questionIndex = 0;
    this.choices = [
      [ "AnswerXXX", "Choice1", "Choice2", "Choice2"] ,
      [ "Choice3", "Choice1", "Choice2", "Answer"] 
      ];
    this.totalQuestions = this.choices.length;

      this.answers = [ 0, 4 ];
      this.finished = false;
  }

  nextQuestion(){
    //alert("from app");
    this.selectedIndex = -1;
    if(this.questionIndex < this.totalQuestions-1){
      this.questionIndex++;
    }else{
      this.finished = true;
    }
    
  }

  clickAnswer(e){
    //alert(e.target.id)
    this.selectedIndex = parseInt(e.target.id.replace("choice",""));
  }
}
