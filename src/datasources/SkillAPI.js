const { RESTDataSource } = require('apollo-datasource-rest')

class SkillAPI extends RESTDataSource {
	constructor() {
		super()
		this.baseURL = process.env.REST_URL
	}

	saveSkill(name, text, rate, date) {
		return this.post(`skills/save-skill`, { name, text, rate, date })
	}

	getSkills() {
		return this.get('skills/get-skills')
	}

	getSkill(skillId) {
		return this.get(`skills/get-skills/${skillId}`)
	}

	updateSkill(skillId, name, text, rate, date) {
		return this.put(`skills/update-skill/${skillId}`, {
			name,
			text,
			rate,
			date,
		})
	}

	deleteSkill(skillId) {
		return this.delete(`skills/delete-skill/${skillId}`)
	}
}

module.exports = SkillAPI
