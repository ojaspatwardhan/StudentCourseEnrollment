 export class UserServiceClient {
   createUser(username, password) {
     const user = {
       username: username,
       password: password
     };
     return fetch("http://localhost:4000/api/user", {
       body: JSON.stringify(user),
       credentials: "include",
       method: "POST",
       headers: {
         "content-type": "application/json"
       }
     });
   }

   profile() {
     return fetch("http://localhost:4000/api/profile",{
       credentials: "include",
     }).then(response => response.json());
   }

   findUserById(userId) {
     return fetch("http://localhost:4000/api/user/" + userId).then(response => response.json());
   }

   updateUser(user) {
     return fetch("http://localhost:4000/api/profile", {
       method: "PUT",
       credentials: "include",
       body: JSON.stringify(user),
       headers: {
         "content-type": "application/json"
       }
     }).then(response => response.json());
   }

   findAllUsers() {
     return fetch("http://localhost:4000/api/user", {
       credentials: "include"
     }).then(response => response.json());
   }

   logout() {
     return fetch("http://localhost:4000/api/logout", {
       method: "POST",
       credentials: "include"
     });
   }

   login(username, password) {
     var credentials = {username, password};
     return fetch("http://localhost:4000/api/login", {
       method: "POST",
       body: JSON.stringify(credentials),
       credentials: "include",
       headers: {
         "content-type": "application/json"
       }
     }).then(response => response.json());
   }
 }
