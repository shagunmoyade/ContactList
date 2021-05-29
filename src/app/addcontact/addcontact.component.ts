import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Contacts } from "../contacts";
@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
Name:string;
Number:number;
@Output() addcontact:EventEmitter<Contacts>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
submit(){
  const contact={
    Name: this.Name,
    Number:this.Number

  }
this.addcontact.emit(contact)
}
}
