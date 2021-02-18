import db from './firestore/config'
import { returnDocuments } from './helpers/show-documents'

const user = {
	name: "Evelyn",
	active: true,
	birthday: 0
}

const usersRef = db.collection('users')

// db.collection('users')
// 	.add( user )
// 	.then( ref => {
// 		console.log(ref.delete());
// 	} )
// 	.catch( e => console.log("error", e))

// usersRef
// 	.doc('wx7x0X4HWkNgflaQKWLP')
// 	.update({
// 		active: false
// 	})

// usersRef
// 	.doc('wx7x0X4HWkNgflaQKWLP')
// 	.set({
// 		active: false,
// 		age: 17
// 	})

// usersRef
// 	.doc('wx7x0X4HWkNgflaQKWLP')
// 	.delete()
// 	.then( () => console.log("Deleted!") )
// 	.catch( e => console.log('error', e) )

// usersRef
// 	.onSnapshot( returnDocuments )

usersRef.get().then( returnDocuments )