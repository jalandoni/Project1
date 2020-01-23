import { Component, OnInit } from '@angular/core';
import { Student }    from '../studentInfo';
import swal from 'sweetalert2';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  isValid=true;
  public studentinfo: Student;
  public fullname:string;
  public age:number;
  public email:string;
  public course:string;
  public year:string;
  public StudentList:any[]= [];

  constructor() { 
    this.studentinfo = new Student();
  }

  level=["I","II","III","IV"]



  onSubmit(sampleForm){
    swal.fire("","Successfully Submitted!","success");
    this.studentinfo = {
      name:this.fullname,
      age:this.age,
      email:this.email,
      year:this.year,
      course:this.course,
    }
    this.StudentList.push(this.studentinfo);
    sampleForm.form.reset();
  }

  

  getinformation(info){
    if(this.fullname === null && this.age === null && this.email === null && this.course === null && this.year === null){
   this.fullname=info.name;
   this.age=info.age;
   this.email=info.email;
   this.course=info.course;
   this.year=info.year;
   this.StudentList=this.StudentList.filter(student =>{
    if(student!=info){
      return student;
    }
   })
  }
  else{
    swal.fire("","You cannot edit the information since the form holds value!","error")
  }
  }

  ngOnInit() {
  }

}
