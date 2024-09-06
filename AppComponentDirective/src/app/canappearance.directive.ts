import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[Canappearance]',
  standalone:true
})
export class CanappearanceDirective {

  @Input() cnu_Appreance:'solid'|'stroked'="stroked";
  @HostBinding('class')
  protected get cnuClasscomputed()
  {
    return {
      [`cf-${this.cnu_Appreance}`]:true,
    }
  }


}
