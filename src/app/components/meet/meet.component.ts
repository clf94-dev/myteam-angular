import { Component, OnInit } from '@angular/core';
import { MeetData } from './meetData';

@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.scss']
})
export class MeetComponent implements OnInit {
  public meets : MeetData[];
  constructor() { 
    this.meets = [
      new MeetData("Nikita Marks", "Founder & CEO", "“It always amazes me how much talent there is in every corner of the globe.”", "Nikita Marks", "../../../assets/images/avatar-nikita.jpg"),
      new MeetData("Cristian Duncan", "Co-founder & COO", "“Distributed teams required unique processes. You need to approach work in a new" +
              " way.”    ",
      "Cristian Duncan", "../../../assets/images/avatar-christian.jpg"),
      new MeetData("Cruz Hamer", "Co-founder & CTO", "“Technology is at the forefront of enabling distributed teams.That is where we c" +
              "ome in.”",
      "Cruz Hamer", "../../../assets/images/avatar-cruz.jpg"),
      new MeetData("Drake Heaton", "Business Development Lead", "“Hiring similar people from similar backgrounds is a surefire way to stunt innov" +
              "ation.”",
      "Drake Heaton", "../../../assets/images/avatar-drake.jpg"),
      new MeetData("Griffin Wise", "Lead Marketing", "“Unique perspectives shape unique products, which is what you need to survive th" +
              "ese days.”",
      "Griffin Wise", "../../../assets/images/avatar-griffin.jpg"),
      new MeetData("Aden Allan", "Head of Talent", "“Empowered teams create truly amazing products. Set the north star and let them " +
              "follow it.”",
      "Aden Allan", "../../../assets/images/avatar-aden.jpg")
  ];
  }

  ngOnInit(): void {
  }

}
