const axios = require('axios')

function serverStatusRequest() {
	async function doCheckRequest() {
		try {
			let res = await axios.get(process.env.SERVER_STATUS)

			let data = res.data
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	// By default, it should be not bigger than 5 minutes.
	const delay = process.env.REQUEST_DELAY || 299998

	setInterval(doCheckRequest, delay)
}

module.exports = serverStatusRequest
