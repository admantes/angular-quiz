import { Component, OnInit, Input, QueryList} from '@angular/core';
import * as Webcam from 'webcamjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() choices;
  @Input() answers;
  @Input() questionIndex;
  
  constructor() { 
    
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

 

  ngOnInit() {
    this.enableCam();
  }

}
