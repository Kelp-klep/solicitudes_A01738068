const router = require('express').Router()
const { isAuthenticated } = require('../middleware/auth.js')
const { checkRole } = require('../middleware/authorize.js')
const { getAll, getById, create, update, remove } = require('../controllers/areas.controller')

router.use(isAuthenticated)

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', checkRole('admin'), create)
router.put('/:id', checkRole('admin'), update)
router.delete('/:id', checkRole('admin'), remove)

module.exports = router
