import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';
import * as Webcam from 'webcamjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() questions;
  @Input() choices;
  @Input() answers;
  @Input() questionIndex;
  @Input() totalQuestions;
  @Input() finished;
  @Output() clickAnswer: EventEmitter<object>  = new EventEmitter();
  @Input() selectedIndex;

  webCamError;

  constructor() { 
   
    this.selectedIndex = 0;
  }

  enableCam(){
    //alert("setting webcam");

     

      Webcam.set({
        width: 240,
        height: 220,
        image_format: 'jpeg',
        jpeg_quality: 90
      });
      
      Webcam.on( 'error', function(err) {
        // an error occurred (see 'err')
        this.webCamError = true;
      } );

      let w = Webcam.attach( '#my_camera' );
     
      if(w){
       // alert("ok");
      }else{
        //this.webCamError = true;
        //alert("not ok");
      }

     
    
    

    
    
  }

 

  ngOnInit() {
    

    
  }

  ngAfterViewInit(){
    this.enableCam();
  }

  clickChoice(e){
    // alert(e.target.id);
    
   // this.selectedIndex = parseInt(e.target.id.replace("choice",""));
   // alert(this.selectedIndex);
     this.clickAnswer.emit(e);
    
  }
   
  

}
