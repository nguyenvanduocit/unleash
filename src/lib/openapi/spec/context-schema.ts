import { FromSchema } from 'json-schema-to-ts';
import { legalValueSchema } from './legal-value-schema';

export const contextSchema = {
    $id: '#/components/schemas/contextSchema',
    type: 'object',
    additionalProperties: false,
    required: ['name'],
    properties: {
        name: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        stickiness: {
            type: 'boolean',
        },
        sortOrder: {
            type: 'number',
        },
        createdAt: {
            type: 'string',
            format: 'date-time',
            nullable: true,
        },
        legalValues: {
            type: 'array',
            items: {
                $ref: '#/components/schemas/legalValueSchema',
            },
        },
    },
    components: {
        schemas: {
            legalValueSchema,
        },
    },
} as const;

export type ContextSchema = FromSchema<typeof contextSchema>;
