const { gql } = require('apollo-server')

const typeDefs = gql`
	type Query @cacheControl(maxAge: 60) {
		"Query to get message array"
		messages: [Message!]!
		"Fetch specific message"
		message(id: ID!): Message!
	}

	"Message send via contact form"
	type Message @cacheControl(maxAge: 60) {
		"Message id"
		_id: ID!
		"Name of the message author"
		name: String
		"Email of the message author"
		email: String
		"Date when the message was sent"
		date: String
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
