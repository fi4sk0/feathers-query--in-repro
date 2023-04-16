// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Foo, FooData, FooPatch, FooQuery } from './foo.schema'

export type { Foo, FooData, FooPatch, FooQuery }

export interface FooParams extends KnexAdapterParams<FooQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class FooService<ServiceParams extends Params = FooParams> extends KnexService<
  Foo,
  FooData,
  FooParams,
  FooPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'foo'
  }
}
