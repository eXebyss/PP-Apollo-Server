const resolvers = {
	Query: {
		messages: (_, __, { dataSources }) => {
			return dataSources.messageAPI.getMessages()
		},
		message: (_, { id }, { dataSources }) => {
			return dataSources.messageAPI.getMessage(id)
		},
		skills: (_, __, { dataSources }) => {
			return dataSources.skillAPI.getSkills()
		},
		skill: (_, { id }, { dataSources }) => {
			return dataSources.skillAPI.getSkill(id)
		},
	},
}

module.exports = resolvers
