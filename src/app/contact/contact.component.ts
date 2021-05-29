import { Component, OnInit } from '@angular/core';
import { Contacts } from "../contacts";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
localItem:string;
contact:Contacts[];
  constructor() {
    this.localItem=localStorage.getItem("contact")
    if(this.localItem==null){
    this.contact=[]
    }
else{
  this.contact = JSON.parse(this.localItem)
}
  }

  ngOnInit(): void {
  }

contactdelete(contact:Contacts){
  const index = this.contact.indexOf(contact);
  this.contact.splice(index,1)
  localStorage.setItem("contact",JSON.stringify(this.contact))
}
contactadd(contact:Contacts){
  this.contact.push(contact);
  localStorage.setItem("contact",JSON.stringify(this.contact))
}

}
