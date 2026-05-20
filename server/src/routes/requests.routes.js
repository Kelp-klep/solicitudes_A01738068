const { validate } = require('../middleware/validate')
const { createRequestSchema, updateRequestSchema } = require('../schemas/requests.schema')
const router = require('express').Router()
const { isAuthenticated } = require('../middleware/auth.js')
const { getAll, getById, create, update, remove } = require('../controllers/requests.controller')

router.use(isAuthenticated)

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', validate(createRequestSchema), create)
router.put('/:id', validate(updateRequestSchema), update)
router.delete('/:id', remove)

module.exports = router
