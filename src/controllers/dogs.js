const model = require('../models/dog')

function getAll (req, res, next) {
  const limit = req.query.limit
  const data = model.getAll(limit)
  res.status(200).json({ data })
}

function getOne (req, res, next) {
  const name = req.params.name
  const data = model.getOne(name)
  res.status(200).json({ data })
}

function create (req, res, next) {
  const result = model.create(req.body)

  if (result.errors) {
    return next({ status: 400, message: `Could not create new dog`, errors: result.errors })
  }

  res.status(201).json({ data: result })
}

module.exports = { getAll, getOne, create }
