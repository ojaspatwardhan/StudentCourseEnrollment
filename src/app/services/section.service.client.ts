export class SectionServiceClient {
  heroku_url = "https://student-enrollment-backend.herokuapp.com";
  local_url = "http://localhost:4000";
  SECTION_URL = "http://localhost:4000/api/course/id/section";
  createSection(courseId, name, seats) {
    const section = {
      courseId: courseId,
      name: name,
      seats: seats
    };
    return fetch("https://student-enrollment-backend.herokuapp.com/api/course/" + courseId + "/section", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(section)
    });
  }

  findSectionsForCourse(courseId) {
    return fetch("https://student-enrollment-backend.herokuapp.com/api/course/" + courseId + "/section")
    .then(response => response.json());
  }

  deleteSection(sectionId) {
    console.log(sectionId);
    return fetch("https://student-enrollment-backend.herokuapp.com/api/section/" + sectionId, {
      method: "DELETE"
    });
  }

  updateSection(sectionId, name, seats) {
    const section = {
      _id: sectionId,
      name: name,
      seats: seats
    };
    return fetch("https://student-enrollment-backend.herokuapp.com/api/section/" + sectionId, {
      method: "PUT",
      body: JSON.stringify(section),
      headers: {
        "content-type": "application/json"
      },
      credentials: "include"
    }).then(response => response.json());
  }

  findSectionById(sectionId) {
    return fetch("https://student-enrollment-backend.herokuapp.com/api/section/" + sectionId)
    .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    console.log(sectionId);
    return fetch("https://student-enrollment-backend.herokuapp.com/api/student/"+ sectionId +"/section", {
      method: "POST",
      credentials: 'include', // include, same-origin, *omit
    });
  }

  unenrollStudentInSection(sectionId) {
    return fetch("https://student-enrollment-backend.herokuapp.com/api/student/"+ sectionId + "/section", {
      method: "DELETE",
      credentials: 'include', // include, same-origin, *omit
    })
      .then( (response) => {response.json()});
  }

  findSectionsForStudent() {
    return fetch('https://student-enrollment-backend.herokuapp.com/api/student/section', {
        method: "GET",
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  findEnrollmentForSection(sectionId) {
    return fetch("https://student-enrollment-backend.herokuapp.com/api/student/" + sectionId + "/findEnrollment")
    .then(response => response.json());
  }
}
