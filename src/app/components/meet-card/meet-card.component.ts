import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meet-card',
  templateUrl: './meet-card.component.html',
  styleUrls: ['./meet-card.component.scss']
})
export class MeetCardComponent implements OnInit {
@Input() name:string;

@Input() position:string;
@Input() description:string;
@Input() src:string;
@Input() ImgAlt:string;


public imgSrc : string;
    public imgAlt : string;
    public classes: string ;
    public card1Classes: string;
    public card2Classes: string;

    Plus = '../../../assets/images/icon-cross.svg';
    Cross = '../../../assets/images/icon-close.svg';
    public click : boolean;
  constructor() { 
    this.click = false;
    this.imgSrc = this.Plus;
        this.imgAlt = "More";
        this.classes= "btn coral";
        this.card1Classes="show";
        this.card2Classes="hide";
  }

  ngOnInit(): void {
  }
  changeState() {
    this.click = !this.click;
    if (!this.click) {
        this.imgSrc = this.Plus;
        this.imgAlt = "More";
        this.classes= "btn coral";
        this.card1Classes="show";
        this.card2Classes="hide";
    } else {
        this.imgSrc = this.Cross;
        this.imgAlt = "Close";
        this.classes=" btn light-blue";
        this.card1Classes="hide";
        this.card2Classes="show";
    }
}

}
