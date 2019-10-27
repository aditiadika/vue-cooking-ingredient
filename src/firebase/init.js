import firebase from 'firebase';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyDD6GMFvaW1RZGKRNYqb_aqvYCLccuSjZY',
	authDomain: 'vue-smothies-ba237.firebaseapp.com',
	databaseURL: 'https://vue-smothies-ba237.firebaseio.com',
	projectId: 'vue-smothies-ba237',
	storageBucket: 'vue-smothies-ba237.appspot.com',
	messagingSenderId: '870025202000',
	appId: '1:870025202000:web:9279432c8ba8fcf3a08455',
	measurementId: 'G-VKP4NGLYZN'
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
