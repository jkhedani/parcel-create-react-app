class TK421 {
	
	GetToken(key) {
		const token = localStorage.getItem(key)
		return token
	}
	SetToken(key, value) {
		localStorage.setItem(key, value)
	}
	RemoveToken(key) {
		localStorage.removeItem(key)
	}

	isAuthenticated() {
		if ( this.GetToken("isAuthenticated") ) {
			return true
		}
		return false
	}

	Login(username, password) {
		return new Promise((resolve, reject) => {
			if ( username === "areametrics" && password === "statman808!" ) {
				this.SetToken("isAuthenticated", "true")
				resolve(true)
			}
			reject(false)
		})
	}
	Logout() {
		return new Promise((resolve, reject) => {
			this.RemoveToken("isAuthenticated")
			resolve(true)
		})
	}
}

export default new TK421()