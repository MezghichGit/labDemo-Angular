import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titre:string ="Formation Angular";
  isVisible : boolean = true;
  url :string ="data:image/png;base64,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";
   //url :string ="data:image/png;base64,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"
  constructor() { }

  ngOnInit(): void {
  }

}
