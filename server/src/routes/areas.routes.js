const router = require('express').Router()
const { validate } = require('../middleware/validate')
const { createAreaSchema, updateAreaSchema } = require('../schemas/areas.schema')
const { isAuthenticated } = require('../middleware/auth.js')
const { checkRole } = require('../middleware/authorize.js')
const { getAll, getById, create, update, remove } = require('../controllers/areas.controller')

router.use(isAuthenticated)

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', checkRole('admin'), validate(createAreaSchema), create)
router.put('/:id', checkRole('admin'), validate(updateAreaSchema), update)
router.delete('/:id', checkRole('admin'), remove)

module.exports = router
