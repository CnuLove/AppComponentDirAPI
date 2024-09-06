import { Component, HostBinding, HostListener, input, Input } from '@angular/core';

@Component({
  selector: 'button[dfButton], a[dfButton]',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() cnubtnappreance: 'solid' | 'stroked' = 'solid';
  @Input() cnucolor: 'primary' | 'secondary' = 'primary';

  @HostBinding('class')
  protected get cnucomputedHostClass() {
    return {
      [`df-${[this.cnubtnappreance]}`]: true,
      [`df-${[this.cnucolor]}`]: true
    }
  }

  @Input()
  @HostBinding('class.disabled') disabled = false;
  @HostBinding('attr.disabled')
  protected get nativeDisabled(): '' | null {
    return this.disabled ? '' : null;
  }

  @HostListener('click',['$event'])
  @HostListener('dblclick',['$event'])
  onClick(e: Event){
    console.log('Normal button Att');
    if(this.disabled){
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }


}
