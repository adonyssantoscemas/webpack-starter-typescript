import firebase from 'firebase';

export const returnDocuments = ( snapshot: firebase.firestore.QuerySnapshot ) => {

	const documents: any[] = [];

		snapshot.forEach( snapChild => {
			documents.push({
				id: snapChild.id,
				...snapChild.data()
			})
		})

		console.log(documents)
		return documents;
}