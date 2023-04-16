// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import assert from 'assert'
import { app } from '../../../src/app'

describe('foo service', () => {
  it('registered the service', async () => {
    const service = app.service('foo')

    assert.ok(service, 'Registered the service')

    const res = await service.find({
      query: {
        text: { $in: ['foo', 'bar'] } // this should be a valid query
      }
    })

  })
})
