import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HightlightDirective {
  constructor(private el: ElementRef) { }
  // tslint:disable-next-line:no-input-rename
  @Input('appHighlight') highlightColor: string;
  @Input() defaultColor: string;
  @HostListener('mouseenter') onMouseEnter(): void { // 鼠标移入事件
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }
  @HostListener('mouseleave') onMouseLeave(): void { //  鼠标移出事件
    this.highlight('');
  }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
