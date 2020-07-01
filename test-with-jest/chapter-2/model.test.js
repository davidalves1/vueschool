const Model = require('./model')

describe('Test Model class', () => {
  it('should exists a Model instance', () => {
    expect(new Model).toBeInstanceOf(Model)
  })

  it('should model has a structure', () => {
    expect(new Model).toEqual(expect.objectContaining({
      $collection: expect.any(Array),
      store: expect.any(Function),
      all: expect.any(Function),
      find: expect.any(Function),
      update: expect.any(Function),
    }))
  })
})
