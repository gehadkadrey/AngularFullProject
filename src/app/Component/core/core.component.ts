import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss'
})
export class CoreComponent {
  serverName:string="";
  serverContent:string="";
  @Output() servercreated=new EventEmitter<({name:string,content:string})>();
  @Output() blueprintcreated=new EventEmitter<({name:string,content:string})>();
  AddServeremit()
  {
    this.servercreated.emit({name:this.serverName ,content:this.serverContent});
  }
  AddBluePrintemit()
  {
    this.blueprintcreated.emit({name:this.serverName ,content:this.serverContent});
  }
}
