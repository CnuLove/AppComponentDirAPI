import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { CancolorDirective } from '../cancolor.directive';
import { CanappearanceDirective } from '../canappearance.directive';
import { CandisableDirective } from '../candisable.directive';

@Component({
  selector: 'button[cfButton]',
  templateUrl: './updatedbutton.component.html',
  styleUrl: './updatedbutton.component.scss',
  hostDirectives: [
    //CanappearanceDirective,
    //CancolorDirective
    //CanappearanceDirective
    {
      directive: CandisableDirective,
      inputs: ['cnu_disabled']
    },
    {
      directive: CancolorDirective,
      inputs: ['cnu_Color']
    },
    {
      directive: CanappearanceDirective,
      inputs: ['cnu_Appreance']
    }
  ]
})
export class UpdatedbuttonComponent {

}
