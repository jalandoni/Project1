import { Component, OnInit } from '@angular/core';
import {
  Act8ServiceService
} from '../act-8-service.service'
import { list } from '../listModel';
import swal from 'sweetalert2';

@Component({
  selector: 'app-act8-register',
  templateUrl: './act8-register.component.html',
  styleUrls: ['./act8-register.component.css']
})
export class Act8RegisterComponent implements OnInit {

  isValid = true;

  public idEdit: number;
  public fullname: string;
  public phone: string;
  public email: string;
  public fullnameEdit: string;
  public emailEdit: string;
  public phoneEdit: string;
  public listInform: list;
  isEdit = false;
  editData: any
  newList:any
  index: number
  public listInfo: any[];

  constructor(private FirstService: Act8ServiceService) {

  }

  clear(sampleForm){
    swal.fire("", "Clear!", "success");
    sampleForm.form.reset();

  }


  EditedClear(editForm){
    swal.fire("SUCCESSFULLY", "Cleared!", "success");
    editForm.form.reset();
  }


  onSubmit(sampleForm) {
    swal.fire("", "Successfully Submitted!", "success");
    this.listInform = {
      id: this.listInfo.reduce((max, array) => (array.id > max ? array.id : max),
        this.listInfo[0].id) + 1,
      name: this.fullname,
      phone: this.phone,
      email: this.email,

    }
    this.FirstService.addPeople(this.listInform).subscribe(data1 => this.listInfo.push(data1))
    console.log(this.listInfo);
    sampleForm.form.reset();
  }

  EditedInfo() {
    swal.fire("SUCCESSFULLY", "UPDATED!", "success");
    this.isEdit=false;
    for (var i in this.listInfo) {
      console.log(this.listInfo[i].id)
      if (this.listInfo[i].id === this.editData.id) {
        this.newList= {
          id: this.idEdit,
          name: this.fullnameEdit,
          email: this.emailEdit,
          phone: this.phoneEdit,
        }
        this.FirstService.updatedata(this.newList, this.listInfo[i].id)
          .subscribe(data =>
            this.listInfo[i] = this.newList
          );
        console.log(this.listInfo)
        break;
      }
    }
  }

  getinformation(info) {
    this.isEdit = true;
    this.idEdit = info.id;
    this.fullnameEdit = info.name;
    this.phoneEdit = info.phone;
    console.log(info.phone)
    this.emailEdit = info.email;
  }


  ngOnInit() {
    this.FirstService.getInfo()
      .subscribe((data: any) =>
        this.listInfo = data
      );
  }

}
