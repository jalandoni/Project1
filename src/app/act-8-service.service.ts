import { Injectable } from '@angular/core';
import { list } from './listModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Act8ServiceService {

  constructor(private http: HttpClient) { }
  private api = "https://jsonplaceholder.typicode.com/users"

  getInfo() {
    return this.http.get<list>(this.api);
  }

  viewInfo(id): Observable<any>{
    return this.http.get(`${this.api}/${id}`);
    }


  addPeople(info: list) {
    return this.http.post(this.api, info)
  }

  updatedata(params: list, listid){
    return this.http.put<list>(this.api+"/"+listid,params)
    }

  deletePeople(id: number){
    return this.http.delete(`${this.api}/${id}`)
  }

  updateInfo(info: list, id) {
    return this.http.put(`${this.api}/${id}`, info);
  }

}

