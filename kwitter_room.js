
var firebaseConfig = {
    apiKey: "AIzaSyDvvnXExoVIOWy68-O5I_1FWzGx3TzovSk",
    authDomain: "kwitter-17137.firebaseapp.com",
    databaseURL: "https://kwitter-17137-default-rtdb.firebaseio.com",
    projectId: "kwitter-17137",
    storageBucket: "kwitter-17137.appspot.com",
    messagingSenderId: "508080115280",
    appId: "1:508080115280:web:6d812c2fc9c13cba36cb55",
    measurementId: "G-CMTXMGVTGY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  username=localStorage.getItem("user_name");
  document.getElementById("username").innerHTML="username";

function addroom(){
 room_name=document.getElementById("addroom").value;
 firebase.database().ref("/").child(room_name).update({
     purpose:"adding room name"
 }); 
 localStorage.setItem("room_name", room_name);
 window.location="kwitter_page.html";
 


}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
console.log(room_name);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row;

 //End code
 });});}
getData();
function redirectToRoomName(name) { console.log(name); 
    localStorage.setItem("room_name", name); window.location = "kwitter_page.html";
 }

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
