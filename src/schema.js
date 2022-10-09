const { gql } = require('apollo-server')

const typeDefs = gql`
	"Message send via contact form"
	type Message @cacheControl(maxAge: 60) {
		"Message id"
		_id: ID!
		"Name of the message author"
		name: String
		"Email of the message author"
		email: String
		"Message content"
		message: String
		"Date when the message was sent"
		date: String
		"DateString when the message was sent"
		dateString: String
	}

	type Query @cacheControl(maxAge: 60) {
		"Query to get message array"
		messages: [Message!]!
		"Fetch specific message"
		message(id: ID!): Message!
	}

	enum CacheControlScope {
		PUBLIC
		PRIVATE
	}

	directive @cacheControl(
		maxAge: Int
		scope: CacheControlScope
		inheritMaxAge: Boolean
	) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION
`

module.exports = typeDefs
