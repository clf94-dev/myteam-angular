import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {

  constructor(private _route : ActivatedRoute, private _router : Router) { }

  ngOnInit(): void {
  }
  goToContact(){
    this._router.navigate(['/contact']);
  }
}
