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
  answes;

  constructor(){
    this.questionIndex = 0;
    this.choices = [
      [ "Answer", "Choice1", "Choice2", "Choice2"] ,
      [ "Choice3", "Choice1", "Choice2", "Answer"] 
      ];

      this.answers = [ 0, 4 ];
  }
}
