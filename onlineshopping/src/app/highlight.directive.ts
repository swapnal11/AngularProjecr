import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public elemRef : ElementRef) { }

ngOnInit(){
 this.elemRef.nativeElement.style.border="2px solid red";
 this.elemRef.nativeElement.style.borderRadius="5px";
 this.elemRef.nativeElement.style.margin="5px";
 this.elemRef.nativeElement.style.padding="5px";
 this.elemRef.nativeElement.style.background="white";
}
@HostListener('mouseenter')
CalledOnMouseEnter()
{
  this.elemRef.nativeElement.style.background="orange";
}

@HostListener('mouseleave')
CalledOnMouseEnterLeave()
{
  this.elemRef.nativeElement.style.background="grey";
}
}