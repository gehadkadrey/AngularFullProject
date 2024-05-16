import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivatedService {
activeList:string[]=["gehad","mohamad","eman","donia"];
UnactiveList:string[]=["nadeen","eyad","omar","selia"];
  constructor() { }
  activeUser(userName:string)
  {
this.activeList.push(userName);
//after add user to active list should remove it from un active
const index = this.UnactiveList.indexOf(userName);
if (index > -1) {
  this.UnactiveList.splice(index, 1);
}
  }
  UnactiveUser(userName:string)
  {
this.UnactiveList.push(userName);
const index = this.activeList.indexOf(userName);
if (index > -1) {
  this.activeList.splice(index, 1);
}
  }
}
