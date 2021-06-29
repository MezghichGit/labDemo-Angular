import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-corps',
  templateUrl: './corps.component.html',
  styleUrls: ['./corps.component.css']
})
export class CorpsComponent implements OnInit {

  private users :any
  //injection de dépendences : par exemple le service, cad il va créer le service
  constructor(private service : UserService) { }

  //ici on utilise les services après avoir été instanciés
  ngOnInit(): void {

    this.service.getAllUsers().subscribe(
      data =>{
        this.users = data;
        console.log(this.users);
      }
    );

  }

}
