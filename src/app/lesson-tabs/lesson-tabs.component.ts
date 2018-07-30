import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonServiceClient } from '../services/lesson.service.client';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: LessonServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  moduleId;
  courseId;
  lessonId;
  lessons = [];

  setParams(params) {
    this.courseId = params["courseId"];
    this.moduleId = params["moduleId"];
    this.lessonId = params["lessonId"];
    this.loadLessons(this.moduleId)
  }

  loadLessons(moduleId) {
    this.service.findAllLessonsForModule(moduleId)
    .then(lessons => this.lessons = lessons);
  }

  ngOnInit() {
  }

}
