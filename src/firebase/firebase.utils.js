
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBIfDvSIY6-Z36F67Hh2uh3UV35-X6rer0",
    authDomain: "fvnn-13e81.firebaseapp.com",
    projectId: "fvnn-13e81",
    storageBucket: "fvnn-13e81.appspot.com",
    messagingSenderId: "689733588925",
    appId: "1:689733588925:web:65c03f78e35e44df95e4d4",
    measurementId: "G-KSQ36QGX9V"
};


// moving shop data to firebase. This method can be used to add any new collection and/or docs to our db PROGRAMMATICALLY!
/*export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = db.collection(collectionKey);
    //console.log(collectionRef);

    const batch = db.batch();
    //forEach is the same as .map(), except this does not return a new array as .map()
    objectsToAdd.forEach(obj => {
        // we want it to get the doc at an empty string. What this will do is that firebase will give me a new document reference in this collection and randomly generate an id for me
        const newDocRef = collectionRef.doc();
        // we can use the title instead of the id, but to ensure unique keys, we'll use an id
        // const newDocRef = collectionRef.doc(obj.title);
        // console.log(newDocRef);
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};*/


export const getDataFromDb = async () => {
    /*const categoryRef = db.collection('categories').doc('RpHJhOmRsvH8gL5nIMjf');
    //console.log(categoryRef);
    const categoryDocs = await categoryRef.get();

    if(!categoryDocs.exists) {
        console.log('no document found');
    }
    else {
        console.log('document data: ', categoryDocs.data());
    }*/

    // an array of 3 objects
    const myDocs = await db.collection('categories')
        .get()
        .then(querySnapshot => {
            //const documents = querySnapshot.docs.map(doc => doc.data());
            const documents = querySnapshot.docs.map(doc => {

                const { imageSource, title, items } = doc.data();

                // fruits, vegies, nuts
                return {
                    id: doc.id,
                    title: title,
                    items: items,
                    imageSource: imageSource
                }
            });
            // do something with documents
            // console.log('documents: ', documents);
            return documents;
        });

    /*myDocs.map((category) => {
        console.log(category); // returns an object each time
    });*/

    return myDocs;

    /*console.log(myDocs[0]);
    const {title, items} = myDocs[0];
    console.log(title); // returns a string
    console.log(items); // returns an array of objects*/
};

// made for thunk
export const getDataFromDbV2 = (categories) => {

    // an array of 3 objects
    const data = categories.docs.map(doc => {

        const { imageSource, title, items } = doc.data();

        // fruits, vegies, nuts
        return {
            id: doc.id,
            title: title,
            items: items,
            imageSource: imageSource
        }
    });

    return data;
};

// returns an array of length 3 containing the auto-generated ids in the db
/*export const getDocsIds = async () => {
    const docsIds = await db.collection('categories')
        .get()
        .then(querySnapshot => {
            const documentsIds = querySnapshot.docs.map(doc => doc.id);
            // do something with documents
            //console.log('documents: ', documents);
            return documentsIds;
        });
    
    return docsIds;
};*/


firebase.initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

export const db = firebase.firestore();

export default firebase;
