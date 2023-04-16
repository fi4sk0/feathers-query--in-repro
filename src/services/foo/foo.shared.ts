// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Foo, FooData, FooPatch, FooQuery, FooService } from './foo.class'

export type { Foo, FooData, FooPatch, FooQuery }

export type FooClientService = Pick<FooService<Params<FooQuery>>, (typeof fooMethods)[number]>

export const fooPath = 'foo'

export const fooMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const fooClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(fooPath, connection.service(fooPath), {
    methods: fooMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [fooPath]: FooClientService
  }
}
