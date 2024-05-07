import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.scss'
})
export class ServerElementComponent {
@Input() element:any=[];
}
