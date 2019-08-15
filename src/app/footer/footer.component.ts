import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() nextQuestion: EventEmitter<number>  = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onNextQuestion(){
    alert("test");
    this.nextQuestion.emit(1);
  }

  
}
