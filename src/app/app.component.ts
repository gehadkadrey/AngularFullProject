import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fullDemo';
  serverElement:any=[];
 
AddServer(serverdata :{name:string,content:string})
{
  this.serverElement.push({
    type:'server',
    name:serverdata.name,
    content:serverdata.content
  })
}

AddBluePrint(serverdata:{name:string,content:string})
{
  this.serverElement.push({
    type:'blueprint',
    name:serverdata.name,
    content:serverdata.content
  })
}

productList:any=[
 
  {Name:"product2",Image:"product2.jpg",Price:300 ,Description:"description2"},
  {Name:"product3",Image:"product3.jpg",Price:600 ,Description:"description3"},
  {Name:"product4",Image:"product4.jpg",Price:900 ,Description:"description4"},
]
AddProductToList(product:any)
{
  console.log(product)
this.productList.push({
  Name:product.Name,
  Image:product.Image,
  Description :product.Description,
  Price:product.Price
})
console.log(this.productList)
}

}
