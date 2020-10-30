import { Component, OnInit } from '@angular/core';
import { FeaturesData } from '../features-home/featuresData';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {
  public features : FeaturesData[];
  constructor() { 
    this.features = [
      new FeaturesData('', 'The quality of our talent network',
      'Experienced Individuals', '../../../assets/images/icon-person.svg'),
      new FeaturesData('', 'Usage & implementation of our software',
      'Easy to Implement', '../../../assets/images/icon-cog.svg'),
      new FeaturesData('', 'How we help drive innovation',
      'Enhanced Productivity', '../../../assets/images/icon-chart.svg')
  ];
  }

  ngOnInit(): void {
  }

}
