const resolvers = {
	Query: {
		messages: (_, __, context) => {
			return context.prisma.messages.findMany()
		},
		message: (_, { id }, context) => {
			return context.prisma.messages.findUnique({
				where: { id: id },
			})
		},
	},
}

module.exports = resolvers
