const uuid = require('uuid/v4')
const cats = []

function getAll (limit) {
  return limit ? cats.slice(0, limit) : cats
}

function getOne (name) {
  const cat = cats.find(cat => cat.name === name)
  if (!cat) return { errors: `cannot find ${name}` }
  return cat
}

function create (body) {
  const errors = []
  const name = body.name

  let response
  if (!name) {
    errors.push('name is required')
    response = { errors }
  } else {
    const cat = { id: uuid(), name }
    cats.push(cat)
    response = cat
  }

  return response
}

module.exports = { getAll, getOne, create }
