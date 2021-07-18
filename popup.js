document.getElementById("gBtn").addEventListener("click", googleSignIn);
document.getElementById("ytBtn").addEventListener("click", conYt);

function googleSignIn(){
    base_provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(base_provider).then(function(result){
    }).catch(function(err){
    })
}

function conYt(){
    window.location = "http://www.youtube.com";
}

var firebaseConfig = {
    apiKey: "AIzaSyBa_QAYqy4cGEC6gnWzPMYsHuNC-1nhtqE",
    authDomain: "encommentt.firebaseapp.com",
    projectId: "encommentt",
    storageBucket: "encommentt.appspot.com",
    messagingSenderId: "405847574047",
    appId: "1:405847574047:web:cb0ec926ab308b8e15b72a",
    measurementId: "G-EC2NG52WRK"
};

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("txt").textContent="Hi " + user.displayName + "!";
        document.getElementById("gBtn").style.display = 'none';
        document.getElementById("ytBtn").style.display = 'block';
    } else {
        document.getElementById("txt").textContent="Login with Google";
        document.getElementById("ytBtn").style.display = 'none';
        document.getElementById("gBtn").style.display = 'block';
    }
  });