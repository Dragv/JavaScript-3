import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

class Connection {
    constructor() {
        const config = {
            apiKey: "AIzaSyAkEp74CMTALoPMBDp4YACc8RGIMLRYytI",
            authDomain: "ltsonar-ec94f.firebaseapp.com",
            databaseURL: "https://ltsonar-ec94f.firebaseio.com",
            projectId: "ltsonar-ec94f",
            storageBucket: "ltsonar-ec94f.appspot.com",
            messagingSenderId: "202336738590",
            appId: "1:202336738590:web:f9cfcb9647af8963917d0f",
            measurementId: "G-14E41EGLHP"
        };

        firebase.initializeApp(config);

        this.db = firebase.firestore();
    }

    async get(modelToFind = '') {
        const snapshot = await this.db.collection(modelToFind).get();

        const data = [];

        snapshot.forEach((doc) => {
            data.push(doc.data());
        });

        return data;
    }

    async post(object = {}) {
        const docRef = this.db.collection(object.constructor.name).doc();

        await docRef.set({ ...object });
    }
}

export default new Connection();
