function googleSignIn(){
    base_provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(base_provider).then(function(result){
        console.log("1");
    }).catch(function(err){
        console.log("2");
    })
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
        console.log("greetings, continue to youtube");
    } else {
        document.querySelector('#showBtn').innerHTML =`
        <button type="submit" class="btn btn-outline" onclick="googleSignIn()">
            <img width="20px" style="margin-bottom:3px; margin-right:5px" alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
            Login with Google
        </button>
        `
    }
  });