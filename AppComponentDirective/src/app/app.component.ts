import { Component } from '@angular/core';
import { CancolorDirective } from './cancolor.directive';
import { CanappearanceDirective } from './canappearance.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'AppComponentDirective';
  checkClick(){
    console.log("Normal Click Operation")
  }
  checkClickUpdate(){
    console.log("Normal Click Operation")
  }
}
