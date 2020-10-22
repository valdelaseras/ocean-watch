import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: 'AIzaSyCMeqw1PddBtbB8cuAmXTvFTC1bYgJdZuI',
  authDomain: 'ocean-watch.firebaseapp.com',
  databaseURL: 'https://ocean-watch.firebaseio.com',
  projectId: 'ocean-watch',
  storageBucket: 'ocean-watch.appspot.com',
  messagingSenderId: '154810476409',
  appId: '1:154810476409:web:c102741626fceccb0e31a8',
  measurementId: 'G-LSYJM26YDM',
};

const isPushNotificationSupported = (): boolean => {
  return 'serviceWorker' in navigator && 'PushManager' in window;
};

const registerServiceWorker = (path: string): Promise<ServiceWorkerRegistration> => {
  return navigator.serviceWorker.register(path);
};
const askUserPermission = async (): Promise<NotificationPermission> => {
  return await Notification.requestPermission();
};

/**
 * Initialise Firebase App as well as Messaging and Analytics.
 */
export const initialiseFirebase = (): void => {
  firebase.initializeApp(firebaseConfig);
  initialiseFirebaseMessaging();
  initialiseAnalytics();

  if (isPushNotificationSupported()) {
    registerServiceWorker('/firebase-messaging-sw.js')
      .then(function (registration) {
        console.log('Registration successful, scope is:', registration.scope);
      })
      .catch(function (err) {
        console.log('Service worker registration failed, error:', err);
      });
  }
};

/**
 * Initialise Firebase Messaging if the user grants permission for push notifications.
 */
const initialiseFirebaseMessaging = () => {
  askUserPermission()
    .then(async () => {
      // Initialise Firebase Messaging
      const messaging = firebase.messaging();

      // Request FCM token for this browser
      const token = await messaging.getToken();

      // Log push notifications while on foreground
      messaging.onMessage((payload) => {
        console.log('Message received. ', payload);
      });

      // FCM token required to target this specific machine
      console.log(token);
    })
    .catch(function (err) {
      console.log('Unable to get permission to notify.', err);
    });
};

export const initialiseAnalytics = firebase.analytics;
