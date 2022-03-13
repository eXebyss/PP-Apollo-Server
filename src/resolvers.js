const resolvers = {
	Query: {
		messages: (_, __, { dataSources }) => {
			return dataSources.messageAPI.getMessages()
		},
		message: (_, { id }, { dataSources }) => {
			return dataSources.messageAPI.getMessage(id)
		},
	},
}

module.exports = resolvers
