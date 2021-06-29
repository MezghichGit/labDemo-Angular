import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-corps',
  templateUrl: './corps.component.html',
  styleUrls: ['./corps.component.css']
})
export class CorpsComponent implements OnInit {

  private users :any

  valInitiale:string="Bonjour";

  v1 :number = -1;
  v2 : number = -1;
  somme :number =0;

  section:string = "les pipes";

  section2:string = "LES PIPES PERSO";
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

  som(){
    this.somme = Number(this.v1) + Number(this.v2);
  }
  //
  infoFormation()
  {
    alert("Formation Angular avec NodeJS");
  }

  add()
  {
    alert("Ok")
  }
}
