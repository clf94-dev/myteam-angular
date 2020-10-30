import { Component, OnInit } from '@angular/core';
import { FeaturesData } from './featuresData';

@Component({
  selector: 'app-features-home',
  templateUrl: './features-home.component.html',
  styleUrls: ['./features-home.component.scss']
})
export class FeaturesHomeComponent implements OnInit {
  public features: FeaturesData[];
  constructor() { 
    this.features= [
      new FeaturesData('Experienced Individuals','Our network is made up of highly experienced professionals who are passionate about what they do.','Experienced Individuals', '../../../assets/images/icon-person.svg'),
      new FeaturesData('Easy to Implement','Our processes have been refined over years of implementation meaning our teams always deliver.','Easy to Implement', '../../../assets/images/icon-cog.svg'),
      new FeaturesData('Enhanced Productivity','Our customized platform with in-built analytics helps you manage your distributed teams.','Enhanced Productivity', '../../../assets/images/icon-chart.svg'),
    
    ];
  }

  ngOnInit(): void {
  }

}
