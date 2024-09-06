import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[Cancolor]',
  standalone:true
})
export class CancolorDirective {

  @Input() cnu_Color:'primary'|'secondary'='secondary';

  @HostBinding('class')
  protected get cnuClasscomputed()
  {
    return {
      [`cf-${this.cnu_Color}`]:true
    }
  }

}
