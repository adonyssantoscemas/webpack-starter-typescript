# Document reference
const usersRef = db.collection('users')

# Object
```
const user = {
	name: "Jose",
	active: true,
	birthday: 0,
	salary: 200
}
```

# Insert data in Firestore
```
db.collection('users')
	.add( user )
	.then( ref => {
		console.log(ref);
	} )
	.catch( e => console.log("error", e))
```

# Update data in Firestore
```
usersRef
	.doc('wx7x0X4HWkNgflaQKWLP')
	.update({
		active: false
	})
```

# Update data in Firestore (Destructive)
```
usersRef
	.doc('wx7x0X4HWkNgflaQKWLP')
	.set({
		active: false,
		age: 17
	})
```

# Delete data in Firestore
```
usersRef
	.doc('wx7x0X4HWkNgflaQKWLP')
	.delete()
	.then( () => console.log("Deleted!") )
	.catch( e => console.log('error', e) )
```

# Get data in Firestore
```
usersRef
	.onSnapshot( returnDocuments )
```

# Get data in Firestore
```
usersRef.get().then( returnDocuments )
```
# Get data in Firestore (Condition Where)
```
usersRef.where('active', '==', true).get().then( returnDocuments )
```

# Get data in Firestore 2 (Condition Where)
```
usersRef.where('salary', '>', 1800)
	.get().then( returnDocuments )
```

# Get data in Firestore (Condition Where, And)
```
usersRef.where('salary', '>=', 1800)
		.where('salary', '<=', 2300)
			.get().then( returnDocuments )
```

# Get data in Firestore (Condition Where, And, Index)
```
usersRef.where('salary', '>=', 1800)
		.where('active', '==', true)
			.get().then( returnDocuments )
```
