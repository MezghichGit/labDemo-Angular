import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // pour pouvoir lire des data depuis un web service, on besoin d'un service http qu'on injecte dans le constructeur
  constructor(private http :HttpClient) { }

  getAllUsers()
  {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
