const { z } = require('zod');
const { create } = require('../controllers/requests.controller');

const createRequestSchema = z.object({
    title: z.string().min(1, 'El título es requerido'),
    description: z.string().optional(),
    area_id: z.number().int(),
    category_id: z.number().int().optional(),
    priority: z.enum(['baja', 'normal', 'alta']).default('normal'),
})

const updateRequestSchema = z.object({
    title: z.string().min(1).optional(),
    description: z.string().optional(),
    area_id: z.number().int().optional(),
    category_id: z.number().int().optional(),
    priority: z.enum(['baja', 'normal', 'alta']).default('normal').optional(),
})

module.exports = { createRequestSchema, updateRequestSchema }