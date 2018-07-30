import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../services/user.service.client';
import { SectionServiceClient } from '../services/section.service.client';
import { User } from '../models/user.model.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private service: UserServiceClient, private sectionService: SectionServiceClient, private router: Router) { }

  user: User = new User();

  sections = [];

  ngOnInit() {
    this.service.profile().then(user => this.user = user).then(() => console.log(this.user));

    this.sectionService.findSectionsForStudent().then(sections => this.sections = sections);
  }

  logout() {
    this.service.logout().then(() => this.router.navigate(['home']));
  }

  updateUser(user: User) {
    this.service.updateUser(user).then(response => window.location.reload());
  }

  unenroll(sectionId) {
    console.log(sectionId);
    this.sectionService.unenrollStudentInSection(sectionId).then(response => window.location.reload());
  }

}
