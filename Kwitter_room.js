var firebaseConfig = {
  apiKey: "AIzaSyB6VDTlgOSxSaOHaaj98Fqc0OT0qkN7hMM",
  authDomain: "kwitter-7f5cd.firebaseapp.com",
  databaseURL: "https://kwitter-7f5cd-default-rtdb.firebaseio.com",
  projectId: "kwitter-7f5cd",
  storageBucket: "kwitter-7f5cd.appspot.com",
  messagingSenderId: "345562990374",
  appId: "1:345562990374:web:bd7eb432f42dd0218223e7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
 function addRoom() {
   room_name=document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
     purpose:"adding room name"
   });
   localStorage.setItem("room_name",room_name);
   window.location="index.html";
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     
       console.log("Room Name -"+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>;"
       document.getElementById("output").innerHTML+=row;

      });});}
getData();
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="index.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
