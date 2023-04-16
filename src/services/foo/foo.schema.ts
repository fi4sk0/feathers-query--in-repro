// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'

// Main data model schema
export const fooSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.String()
  },
  { $id: 'Foo', additionalProperties: false }
)
export type Foo = Static<typeof fooSchema>
export const fooValidator = getValidator(fooSchema, dataValidator)
export const fooResolver = resolve<Foo, HookContext>({})

export const fooExternalResolver = resolve<Foo, HookContext>({})

// Schema for creating new entries
export const fooDataSchema = Type.Pick(fooSchema, ['text'], {
  $id: 'FooData'
})
export type FooData = Static<typeof fooDataSchema>
export const fooDataValidator = getValidator(fooDataSchema, dataValidator)
export const fooDataResolver = resolve<Foo, HookContext>({})

// Schema for updating existing entries
export const fooPatchSchema = Type.Partial(fooSchema, {
  $id: 'FooPatch'
})
export type FooPatch = Static<typeof fooPatchSchema>
export const fooPatchValidator = getValidator(fooPatchSchema, dataValidator)
export const fooPatchResolver = resolve<Foo, HookContext>({})

// Schema for allowed query properties
export const fooQueryProperties = Type.Pick(fooSchema, ['id', 'text'])
export const fooQuerySchema = Type.Intersect(
  [
    querySyntax(fooQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type FooQuery = Static<typeof fooQuerySchema>
export const fooQueryValidator = getValidator(fooQuerySchema, queryValidator)
export const fooQueryResolver = resolve<FooQuery, HookContext>({})
