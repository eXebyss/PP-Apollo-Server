const { RESTDataSource } = require('apollo-datasource-rest')

class SkillAPI extends RESTDataSource {
	constructor() {
		super()
		this.baseURL = process.env.REST_URL
	}

	async getSkills() {
		return this.get('skills/get-skills')
	}

	async getSkill(skillId) {
		return this.get(`skills/get-skills/${skillId}`)
	}
}

module.exports = SkillAPI
