import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Contacts } from "../contacts";
@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {
@Input() cont:Contacts;
@Output() deletecontact:EventEmitter<Contacts>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

delete(cont:Contacts){
this.deletecontact.emit(cont)

}

}
