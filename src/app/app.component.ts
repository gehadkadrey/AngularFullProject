import { AfterContentInit, AfterViewInit, Component, EventEmitter, OnInit, Output, QueryList, ViewChildren, output, viewChild, viewChildren } from '@angular/core';
import { Imeal } from './interface/meals';
import { MealsComponent } from './Component/meals/meals.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  //, AfterContentInit,AfterViewInit 
  title = 'fullDemo';

//   serverElement:any=[];
 
// AddServer(serverdata :{name:string,content:string})
// {
//   this.serverElement.push({
//     type:'server',
//     name:serverdata.name,
//     content:serverdata.content
//   })
// }

// AddBluePrint(serverdata:{name:string,content:string})
// {
//   this.serverElement.push({
//     type:'blueprint',
//     name:serverdata.name,
//     content:serverdata.content
//   })
// }

// productList:any=[
 
//   {Name:"product2",Image:"product2.jpg",Price:300 ,Description:"description2"},
//   {Name:"product3",Image:"product3.jpg",Price:600 ,Description:"description3"},
//   {Name:"product4",Image:"product4.jpg",Price:900 ,Description:"description4"},
// ]
// AddProductToList(product:any)
// {
//   console.log(product)
// this.productList.push({
//   Name:product.Name,
//   Image:product.Image,
//   Description :product.Description,
//   Price:product.Price
// })
// console.log(this.productList)
// }
////////////////////////////////////////////

constructor(private toastr:ToastrService) {

  
}


ngOnInit(): void {
  // Perform initialization tasks here, such as fetching data from a service
}
////////////////////////////////////////////////////////////////////////////////////////////
// @ViewChildren(MealsComponent) mealChildren!:QueryList<MealsComponent>;

// meals:Imeal[]=[{name:"meal1",image:"/assets/images/meal1.jpg",description:"description1"},
// {name:"meal2",image:"/assets/images/meal4.jpg",description:"description2"},
// {name:"meal3",image:"/assets/images/meal1.jpg",description:"description3"},
// {name:"meal4",image:"/assets/images/meal4.jpg",description:"description4"}
// ]
// ngAfterContentInit()
// {
//   //contentchild,content children
// }
// ngAfterViewInit()
// {
//   //view child, view children
// //  console.log(this.mealChildren)
//}

// GetRandamDescription()
// {
//   let randomIndex=Math.floor(Math.random() *this.mealChildren.length);
//   console.log(randomIndex)
//   let randomDesc=this.mealChildren.toArray()[randomIndex].meal.description;
//   //this.mealChildren.displayMealDescription(this.mealChildren[randomIndex].description)
//  // this.toastr.show(randomDesc);
//   // Accessing the first MealsComponent instance and calling DisplayMealDescription with a static value
//   const firstMealComponent = this.mealChildren.first;
//   if (firstMealComponent) {
//     firstMealComponent.DisplayMealDescription(randomDesc);
//   }
// }
/////////////////////////////////////////////////////////////////////////////////////
incremental:number[]=[];
incrementNum(num:number)
{
  
 this.incremental.push(num);
}

}
