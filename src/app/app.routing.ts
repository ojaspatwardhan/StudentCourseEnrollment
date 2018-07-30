import { Routes, RouterModule } from '@angular/router';
import { WhiteBoardComponent } from './white-board/white-board.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { RegisterComponent } from './register/register.component';
import{ ProfilePageComponent } from './profile-page/profile-page.component';
import { SectionListComponent } from './section-list/section-list.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { WidgetListComponent } from './widget-list/widget-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WhiteBoardComponent },
  { path: 'course/:courseId', component: CourseViewerComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'course/:courseId/section', component: SectionListComponent },
  { path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'widget/:lessonId', component: WidgetListComponent },
  { path: '**', component: WhiteBoardComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
