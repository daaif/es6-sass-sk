/* global Greeter */
describe('Core', function() {
    it('Person class exsists', () => expect(main.Person).is.not.undefined )

    it('it must print toto', () => {
    var p = new main.Person('toto')
    expect(p.name).is.equal('toto')
    // these white spaces will be trimmed
    p.name = 'fifi'
    expect(p.name).is.equal('fifi')
    })
    it('must print Person : name = toto ', () => {
        let p = new main.Person('toto')
        expect(p + '').is.equal('Person : name = toto')
    })
    it('must print Employe : name = toto, id = 23 ', () => {
        let e = new main.Employe(23, 'toto')
        expect(e + '').is.equal('Employe : name = toto, id = 23')
    })
})