import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  ProductName:string="";
 // ProductImage:string="";
  ProductDescription:string="";
  ProductPrice:number=0;
  selectedFile!: File;
  uploadedImage!: string;
  @Output() newItem=new EventEmitter<({Name:string,Image:string,Price:number ,Description:string})>();
  onFileSelected(event:any): void {
    this.selectedFile = event.target.files[0];
    // Read and display the selected image
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.uploadedImage = e.target.result;
      
    };
    reader.readAsDataURL(this.selectedFile);
  }
  Add(){
  this.newItem.emit({Name:this.ProductName ,Image:this.selectedFile.name,Price:this.ProductPrice,Description:this.ProductDescription});
  }
}
