import { Component, OnInit } from '@angular/core';
import { OpinionsData } from './opinionsData';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.scss']
})
export class OpinionsComponent implements OnInit {

  public opinions: OpinionsData[];
quotes='../../../assets/images/icon-quotes.svg'
  constructor() { 
    this.opinions=[
      new OpinionsData ('Kady Baker', '“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”' ,'Kady Baker' ,'Product Manager at Bookmark','../../../assets/images/avatar-kady.jpg'),
      new OpinionsData ('Aiysha Reese', '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”' ,'Aiysha Reese' ,'Founder of Manage','../../../assets/images/avatar-aiysha.jpg'),
      new OpinionsData ('Arthur Clarke', '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”' ,'Arthur Clarke' ,'Co-founder of MyPhysio','../../../assets/images/avatar-arthur.jpg')
    ];
  }

  ngOnInit(): void {
  }

}
