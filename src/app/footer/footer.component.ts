import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() nextQuestion: EventEmitter<number>  = new EventEmitter();
@Input() totalQuestions;
@Input() questionIndex;
@Input() finished;

  constructor() { }

  ngOnInit() {
  }

  onNextQuestion(){
    this.nextQuestion.emit(1);
  }

  
}
