import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../models/course.model.client';
import { SectionServiceClient } from '../services/section.service.client';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  course: Course = new Course();

  courseId;
  sections = [];
  cookieValue = "";

  constructor(private route: ActivatedRoute, private service: SectionServiceClient, private cookieService: CookieService, private router: Router) {
    this.route.params.subscribe(params =>  this.course.id = params["courseId"]);
  }

  enrollStudentInSection(sectionId) {
    this.service.enrollStudentInSection(sectionId).then(() => this.router.navigate(['profile']));
  }

  ngOnInit() {
    this.cookieValue = this.cookieService.get("username");
    this.route.params.subscribe(params => this.courseId = params["courseId"]);
    this.service.findSectionsForCourse(this.courseId)
    .then(sections => this.sections = sections);
  }

}
