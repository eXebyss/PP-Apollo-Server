const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const prisma = require('./context/prisma')
const resolvers = require('./resolvers')
const serverStatusRequest = require('./utils/serverStatusRequest')

require('dotenv').config()

async function startApolloServer(typeDefs, resolvers) {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		context: { prisma },
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
