 export class UserServiceClient {
   heroku_url = "https://student-enrollment-backend.herokuapp.com";
   local_url = "http://localhost:4000";
   createUser(username, password) {
     const user = {
       username: username,
       password: password
     };
     return fetch("https://student-enrollment-backend.herokuapp.com/api/user", {
       body: JSON.stringify(user),
       credentials: "include",
       method: "POST",
       headers: {
         "content-type": "application/json"
       }
     });
   }

   profile() {
     return fetch("https://student-enrollment-backend.herokuapp.com/api/profile",{
       credentials: "include",
     }).then(response => response.json());
   }

   findUserById(userId) {
     return fetch("https://student-enrollment-backend.herokuapp.com/api/user/" + userId).then(response => response.json());
   }

   updateUser(user) {
     return fetch("https://student-enrollment-backend.herokuapp.com/api/profile", {
       method: "PUT",
       credentials: "include",
       body: JSON.stringify(user),
       headers: {
         "content-type": "application/json"
       }
     }).then(response => response.json());
   }

   findAllUsers() {
     return fetch("https://student-enrollment-backend.herokuapp.com/api/user", {
       credentials: "include"
     }).then(response => response.json());
   }

   logout() {
     return fetch("https://student-enrollment-backend.herokuapp.com/api/logout", {
       method: "POST",
       credentials: "include"
     });
   }

   login(username, password) {
     var credentials = {username, password};
     return fetch("https://student-enrollment-backend.herokuapp.com/api/login", {
       method: "POST",
       body: JSON.stringify(credentials),
       credentials: "include",
       headers: {
         "content-type": "application/json"
       }
     }).then(response => response.json());
   }
 }
