
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Act8ServiceService
} from '../act-8-service.service'
import { list } from '../listModel';
import swal from 'sweetalert2';

@Component({
  selector: 'app-act8table',
  templateUrl: './act8table.component.html',
  styleUrls: ['./act8table.component.css']
})
export class Act8tableComponent implements OnInit {
  @Input() StudentInformation : Array<list>;
  @Output() InformationEdit =new EventEmitter();


  constructor(private Act8ServiceService:Act8ServiceService) { 
   }

  ngOnInit() {
  }

  onEdit(studentinfo){
   swal.fire("","You are about to edit the information!","warning")
   this.InformationEdit.emit(studentinfo);
    console.log(studentinfo);
  }

  onDelete(id){
    swal.fire("","Deleted!","error")
    this.Act8ServiceService.deletePeople(id).subscribe( data1=> this.StudentInformation.splice(id-1,1))  
    console.log(this.StudentInformation)
   }
   
}
