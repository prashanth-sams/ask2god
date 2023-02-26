module.exports = {
	DB : getDB()
}

function getDB() {
	if (process.env.MONGO_ENV === 'docker') {
		return 'mongodb://mongo:*port*/manager';
	} else {
		return 'mongodb://127.0.0.1:*port*/manager';
	}
}
