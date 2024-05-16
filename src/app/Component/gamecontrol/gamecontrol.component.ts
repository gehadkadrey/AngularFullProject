import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrl: './gamecontrol.component.scss'
})
export class GamecontrolComponent  implements OnDestroy,OnInit{
  @Output() increment=new EventEmitter<(number)>();
  number: number = 0;
  private intervalId: any;
  ngOnInit()
  {}
  StartGame()
  {
    this.intervalId = setInterval(() => {
      this.number++;
      this.increment.emit(this.number);
    }, 1000);
  }
  EndGame()
  {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      
      this.intervalId = null; // Optional: To indicate the interval is cleared
    }
  }
  ngOnDestroy(): void {
    this.EndGame(); // Ensure interval is cleared when component is destroyed
  }
}
