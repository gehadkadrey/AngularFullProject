import { Component, Input } from '@angular/core';
import { Imeal } from '../../interface/meals';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent {
@Input() meal!:Imeal;

constructor(private toastr:ToastrService) {
  
}
DisplayMealDescription(des?:string)
{
//this.toastr.show(this.meal.description);
this.toastr.show(des);
}

}
