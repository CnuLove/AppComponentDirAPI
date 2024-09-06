import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Candisable]',
  standalone:true
})
export class CandisableDirective {
  @Input()
  @HostBinding('class.disabled') cnu_disabled=false;
  @HostBinding('attr.disabled') 
  protected get cnuAttcomputed()
  {
    return this.cnu_disabled?'':null
  }
  @HostListener('click',['$event'])
  @HostListener('dblclick',['$event'])
  OnClick(e:Event){
    console.log('updated button')
    if(this.cnu_disabled){
      e.preventDefault();
      e.stopImmediatePropagation();
    }
   
  }

}
