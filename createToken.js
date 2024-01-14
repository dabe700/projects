const jwt = require('jsonwebtoken')
require('dotenv').config()

function createToken(user) {
  const payload = {
    subject: user.phone_number,
    username: user.first_name + ' ' + user.last_name,
    role: user.role,
    country: user.country,
    business_data_added: user.business_data_added,
    financial_data_added: user.financial_data_added,
    personal_data_added: user.personal_data_added
  }

  const options = {
    expiresIn: '1y',
  }
  const result = jwt.sign(payload, process.env.SECRET, options)

  return result
}

module.exports = createToken
