import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  Gadgets='../../../assets/images/logo-gadgets-now.png';
  Jakarta='../../../assets/images/logo-jakarta-post.png';
  Tech='../../../assets/images/logo-tech-radar.png';
  TheGuardian='../../../assets/images/logo-the-guardian.png';
  Verge='../../../assets/images/logo-the-verge.png';
  constructor() { }

  ngOnInit(): void {
  }

}
