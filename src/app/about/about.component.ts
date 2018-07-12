import { Component, OnInit } from '@angular/core';

import {SkillsService} from '../skills.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public skills = [];

  constructor(private _skills: SkillsService) { }

  ngOnInit() {
    this.skills = this._skills.getSkills();
  }

}
