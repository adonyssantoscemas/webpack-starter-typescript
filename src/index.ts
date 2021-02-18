import db from './firestore/config';
import { returnDocuments } from './helpers/show-documents';
// import { firestore } from 'firebase';

const usersRef = db.collection('users')

//Btn Next
const btnNext = document.createElement('button');
btnNext.innerText = "Next Page";
document.body.append( btnNext );

let firstDocument: any = null;
let lastDocument: any = null;
btnNext.addEventListener('click', () => {

	const querry = usersRef
		.orderBy('name')
		.startAfter( lastDocument )

	querry.limit(2).get().then( snap => {

		firstDocument = snap.docs[ 0 ] || null;
		lastDocument = snap.docs[ snap.docs.length - 1] || null;
		returnDocuments(snap);
	})

})

btnNext.click();

//Btn Previous
const btnPrevious = document.createElement('button');
btnPrevious.innerText = "Previous Page";
document.body.append( btnPrevious );

btnPrevious.addEventListener('click', () => {

	const querry = usersRef
		.orderBy('name')
		.endBefore( firstDocument )

	querry.limit(2).get().then( snap => {

		firstDocument = snap.docs[ 0 ] || null;
		lastDocument = snap.docs[ snap.docs.length - 1] || null;
		returnDocuments(snap);
	})
})
