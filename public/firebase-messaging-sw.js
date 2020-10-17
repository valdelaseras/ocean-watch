// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: 'AIzaSyCMeqw1PddBtbB8cuAmXTvFTC1bYgJdZuI',
    authDomain: 'ocean-watch.firebaseapp.com',
    databaseURL: 'https://ocean-watch.firebaseio.com',
    projectId: 'ocean-watch',
    storageBucket: 'ocean-watch.appspot.com',
    messagingSenderId: '154810476409',
    appId: '1:154810476409:web:c102741626fceccb0e31a8',
    measurementId: 'G-LSYJM26YDM'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
