// @version 2.0
// @author Francisco Dev Studio
// @license MIT

class HappyHTTP {
	// prototypal methods
	async get(url) {
		const res = await fetch(url);
		const data = await res.json();
		return data;
	}

	// post 
	async post(url, data) {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		
		const user = await res.json();
		return user;
	}
	// put
	async put(url, data) {
		const res = await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		
		const user = await res.json();
		return user;
	}
	// delete
	async delete(url) {
		const res = await fetch(url, {
			method: 'DELETE'
		});
		
		const data = await 'Resource Deleted...';
		return data;
	}
}