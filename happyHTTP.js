// @version 1.0
// @author Francisco Dev Studio
// @license MIT

class HappyHTTP {
	// prototypal methods
	get(url) {
		return new Promise((resolve, reject) => {
			fetch(url)
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err))
		})
	}

	// post 
	post(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(data)
			})
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err))
		})
	}
	// put
	put(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(data)
			})
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err))
		})
	}
	// delete
	delete(url) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'DELETE'
			})
				.then(res => res.json())
				.then(() => resolve('User Deleted...'))
				.catch(err => reject(err))
		})
	}
}