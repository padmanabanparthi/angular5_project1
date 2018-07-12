import { Injectable } from '@angular/core';

@Injectable()
export class SkillsService {

  constructor() { }

  getSkills() {
    return[
      { icon: 'php.png', title: 'php', percentage: '89' },
      { icon: 'mysql.png', title: 'mysql', percentage: '75'},
      { icon: 'codeigniter.png', title: 'codeigiter', percentage: '80'},
      { icon: 'wordpress.png', title: 'wordpress', percentage: '60'},
      { icon: 'html.png', title: 'html', percentage: '89'},
      { icon: 'css.png', title: 'css', percentage: '80'},
      { icon: 'jquery.png', title: 'jquery', percentage: '70'},
      { icon: 'angular.png', title: 'angular', percentage: '60'}
    ];
  }

}
