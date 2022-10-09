const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const MessageAPI = require('./datasources/MessageAPI')
const serverStatusRequest = require('./utils/serverStatusRequest')

require('dotenv').config()

async function startApolloServer(typeDefs, resolvers) {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		dataSources: () => {
			return {
				messageAPI: new MessageAPI(),
			}
		},
	})

	const { url, port } = await server.listen({ port: process.env.PORT || 4000 })
	console.log(`
      🚀  Server is running
      🔉  Listening on port ${port}
      📭  Query at ${url}
    `)

	// It will ping server to keep it from sleeping.
	serverStatusRequest()
}

startApolloServer(typeDefs, resolvers)
