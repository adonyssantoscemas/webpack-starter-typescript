import db from './firestore/config';
import { returnDocuments } from './helpers/show-documents';
// import { firestore } from 'firebase';

const usersRef = db.collection('users')

usersRef
	.orderBy('name')
	.orderBy('salary')
	.get().then( returnDocuments )