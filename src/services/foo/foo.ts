// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  fooDataValidator,
  fooPatchValidator,
  fooQueryValidator,
  fooResolver,
  fooExternalResolver,
  fooDataResolver,
  fooPatchResolver,
  fooQueryResolver
} from './foo.schema'

import type { Application } from '../../declarations'
import { FooService, getOptions } from './foo.class'
import { fooPath, fooMethods } from './foo.shared'

export * from './foo.class'
export * from './foo.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const foo = (app: Application) => {
  // Register our service on the Feathers application
  app.use(fooPath, new FooService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: fooMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(fooPath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(fooExternalResolver), schemaHooks.resolveResult(fooResolver)]
    },
    before: {
      all: [schemaHooks.validateQuery(fooQueryValidator), schemaHooks.resolveQuery(fooQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(fooDataValidator), schemaHooks.resolveData(fooDataResolver)],
      patch: [schemaHooks.validateData(fooPatchValidator), schemaHooks.resolveData(fooPatchResolver)],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [fooPath]: FooService
  }
}
