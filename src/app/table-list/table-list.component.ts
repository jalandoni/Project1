import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Student }    from '../studentInfo';
import swal from 'sweetalert2';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})


export class TableListComponent implements OnInit {
  @Input() StudentInformation : Array<Student>;
  @Output() InformationEdit =new EventEmitter();


  constructor() { 
   }

  

  ngOnInit() {
  }

  onEdit(studentinfo){
   swal.fire("","You are about to edit the information!","warning")
   this.InformationEdit.emit(studentinfo);
    console.log(this.InformationEdit);
  }



}
