import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public user: any;
  public submitClicked: boolean;
  constructor() {
    this.submitClicked=false;
    this.user={
      name:"",
      email: "",
      company: "",
      title: "",
      message: ""
    }
   }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitClicked=true;
    console.log(this.user)
  }
}
