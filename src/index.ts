import { ApolloServer } from 'apollo-server'
import typeDefs from './schema'
import resolvers from './resolvers'
import MessageAPI from './datasources/MessageAPI'
import SkillAPI from './datasources/SkillAPI'

require('dotenv').config()

async function startApolloServer(typeDefs, resolvers) {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		dataSources: () => {
			return {
				messageAPI: new MessageAPI(),
				skillAPI: new SkillAPI(),
			}
		},
	})

	const { url, port } = await server.listen({ port: process.env.PORT || 4000 })
	console.log(`
      🚀  Server is running
      🔉  Listening on port ${port}
      📭  Query at ${url}
    `)
}

startApolloServer(typeDefs, resolvers)
