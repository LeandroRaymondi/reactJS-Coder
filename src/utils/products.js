import { collection, getDocs, getDoc, getFirestore, doc, query, where } from "firebase/firestore";

export const getAllProducts = () => {

    const database = getFirestore();

    const collectionReference = collection(database, "items");

    return getDocs(collectionReference)
        .then((snapshot) => {
            const list = snapshot
                .docs
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
            return list;
        })
        .catch(err => console.warn(err));
}

export const getProduct = (id) => {
    const database = getFirestore();
    const itemReference = doc(database, 'items', id);
    return getDoc(itemReference)
      .then(snapshot => {
        if(snapshot.exists()) {
          const item = {
            id: snapshot.id,
            ...snapshot.data()
          };
          return item;
        }
      })
      .catch(err => console.warn(err));
    
  };

export const getProductsByCategory = (categoryId) => {
    const database = getFirestore();
    const collectionReference = collection(database, "items");
    const collectionQuery = query(collectionReference, where('category', '==', categoryId));

    return getDocs(collectionQuery)
        .then((snapshot) => {
            const list = snapshot
                .docs
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
            return list;
        })
        .catch(err => console.warn(err));
}