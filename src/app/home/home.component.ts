import { Component, OnInit } from '@angular/core';
import {SkillsService} from '../skills.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public services = [
    {
      icon: 'fas fa-paint-brush',
      title: 'Web Design',
      content: 'Extreme attention to detail is the essence of Boo’s unique design concepts'
    },
    {
      icon: 'fas fa-code',
      title: 'Web Development',
      content: 'Extreme attention to detail is the essence of Boo’s unique design concepts'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Design',
      content: 'Extreme attention to detail is the essence of Boo’s unique design concepts'
    }
  ];
  public skills = [];

  constructor(private _skills: SkillsService) { }

  ngOnInit() {
    this.skills = this._skills.getSkills();
  }

}
