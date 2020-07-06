import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Post } from './Post'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {
    console.log("service is work")
   }

   getData(){
    return this.http.get<Post[]>('https://apinode33.herokuapp.com/usuarios');
   }
}

