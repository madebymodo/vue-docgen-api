const path = require('path')
const expect = require('chai').expect

const api = require('../../../dist/main')
const page = path.join(__dirname, './Page.vue')
let docPage

describe('tests page', () => {
  before(function(done) {
    this.timeout(10000)
    docPage = api.parse(page)
    done()
  })

  it('should return an object', () => {
    expect(docPage).to.be.an('object')
  })

  it('should have 2 children components', () => {
    expect(Object.keys(docPage['components']).length).to.equal(2)
  })

  it('should have a child component named DuplicateHeader', () => {
    expect(docPage['components']['DuplicateHeader']).to.be.an('object')
  })

  it('should DuplicateHeader have one tag', () => {
    expect(Object.keys(docPage['components']['DuplicateHeader']['tags']).length).to.equal(1)
  })
})
