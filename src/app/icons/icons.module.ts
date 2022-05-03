import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Linkedin, Github } from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Linkedin,
  Github
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }