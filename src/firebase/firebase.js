import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBdA2tQ9seuHspq4FJ34hNEpeLG6nBkygM",
    authDomain: "expensify-6d91e.firebaseapp.com",
    databaseURL: "https://expensify-6d91e.firebaseio.com",
    projectId: "expensify-6d91e",
    storageBucket: "expensify-6d91e.appspot.com",
    messagingSenderId: "569713645074"
  };

firebase.initializeApp(config);

const database = firebase.database()

database.ref().set({
    name: 'Nuwan Goonewardena',
    age: 25,
    isSingle: false,
    location: {
        city: 'Colombo',
        country: 'Sri Lanka'
    }
});

// database.ref().set('this is my data.');

database.ref('age').set(27);
database.ref('location/city').set('New York');

// attributes
//  height = cm
//  weight = kg

database.ref('attributes').set({
        height: 174,
        weight: 80
});