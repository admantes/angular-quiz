import { Component, OnInit, Input} from '@angular/core';
import * as Webcam from 'webcamjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  choices;
  answers;
  questionIndex;

  constructor() { 
    this.questionIndex = 0;
    this.choices = [
      [ "Answer", "Choice1", "Choice2", "Choice2"] ,
      [ "Choice3", "Choice1", "Choice2", "Answer"] 
      ];

      this.answers = [ 0, 4 ];
    
  }

  enableCam(){
    //alert("setting webcam");

    Webcam.set({
			width: 240,
			height: 220,
			image_format: 'jpeg',
			jpeg_quality: 90
		});
		Webcam.attach( '#my_camera' );
  }

  nextQuestion(inc){
    alert(inc);
  }

  ngOnInit() {
    this.enableCam();
  }

}
