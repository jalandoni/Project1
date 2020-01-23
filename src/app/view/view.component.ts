import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import {
  Act8ServiceService
} from '../act-8-service.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

id: number
userInfo: Array<any>= []

constructor(
private router: ActivatedRoute,
private project: Act8ServiceService
) {}

ngOnInit() {
this.id = this.router.snapshot.params['id']
return this.project.viewInfo(this.id).subscribe(data => {
this.userInfo.push(data)
})
}

}
