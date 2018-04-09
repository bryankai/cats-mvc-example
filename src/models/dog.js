const uuid = require('uuid/v4')
const dogs = []

function getAll (limit) {
  return limit ? dogs.slice(0, limit) : dogs
}

function getOne (name) {
  const dog = dogs.find(dog => dog.name === name)
  if (!dog) return { errors: `cannot find ${name}` }
  return dog
}


function create (body) {
  const errors = []
  const name = body.name

  let response
  if (!name) {
    errors.push('name is required')
    response = { errors }
  } else {
    const dog = { id: uuid(), name }
    dogs.push(dog)
    response = dog
  }

  return response
}

module.exports = { getAll, getOne, create }
