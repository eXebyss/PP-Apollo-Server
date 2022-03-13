const { RESTDataSource } = require('apollo-datasource-rest')

class MessageAPI extends RESTDataSource {
	constructor() {
		super()
		this.baseURL = process.env.URL
	}

	getMessages() {
		return this.get('get-messages')
	}

	getMessage(messageId) {
		return this.get(`get-messages/${messageId}`)
	}
}

module.exports = MessageAPI
