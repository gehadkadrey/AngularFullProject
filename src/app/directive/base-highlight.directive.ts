import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2, input } from '@angular/core';

@Directive({
  selector: '[appBaseHighlight]',
  exportAs:'high'
})
export class BaseHighlightDirective {

  constructor(private element:ElementRef, private render:Renderer2) { 
    //make all element take this directive in header make background color blue
    //way1
   // this.element.nativeElement.style.backgroundColor="blue";
   //way2
  // this.render.setStyle(this.element.nativeElement,"background-color","blue")
  }
  ///////////////////////////////////////////////////////////////////////////
  //all element take this directive in header make background color blue when mouse enter to this element
  // @HostListener('mouseenter') mouseOver (eventData:Event)
  // {
  //   this.render.setStyle(this.element.nativeElement,"background-color","blue")
  // }
  // //all element take this directive in header make background color white when mouse leave to this element
  // //when enter to element so background color become blue so use this when leave to return color to white
  // @HostListener('mouseleave') mouseLeave (eventData:Event)
  // {
  //   this.render.setStyle(this.element.nativeElement,"background-color","white")
  // }
///////////////////////////////////////////////////////////////////////////
// @HostBinding('style.backgroundColor') background!:string;
//  @HostListener('mouseenter') mouseOver (eventData:Event)
//   {
//    this.background="blue";
//   }
////////////////////////////////////////////////////////////////////////////////
// @Input() defaultColor:string="white";
// @Input() highligth:string="gray";
// @HostBinding('style.backgroundColor') background:string=this.defaultColor;
// @HostListener('mouseenter') mouseOver (eventData:Event)
//   {
//    this.background=this.highligth;
//   }
//   @HostListener('mouseleave') mouseLeave (eventData:Event)
//   {
//     this.background=this.defaultColor;
//   }
///////////////////////////////////////////////////////////////////////////
//make all element contain this directive take class 
// @HostBinding('className')
// set cssClass() {
//   return 'highlight';
// }
// @HostBinding('class.highlight')
// get cssClass() {
//   return 'true';
// }
///////////////////
toggle()
{
  console.log("g");
}


}
