const http = new HappyHTTP();

// GET USER

// http.get('https://jsonplaceholder.typicode.com/users/1')
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))

const data = {
	name: 'John Doe Doe',
	username: 'Johnny',
	email: 'johndoe@doegin.com'
}

// ADD USER

// http.post('https://jsonplaceholder.typicode.com/users', data)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))

// UPDATE USER

// http.put('https://jsonplaceholder.typicode.com/users/3', data)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))

// DELETE USER

// http.delete('https://jsonplaceholder.typicode.com/users/5')
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))