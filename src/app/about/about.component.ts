import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;
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

    var delay = 500;
    $(".progress-bar").each(function(i){
        $(this).delay( delay*i ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );

        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: delay,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now)+'%');
            }
        });
    });
  }

}
