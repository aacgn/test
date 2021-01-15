const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'chesspuff.com',
    'disney.com',
    'dogpictures.com'
];

describe('googleSearch', () => {
    it('is searching google', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([]);
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
    });
    
    it('work with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });
    
    it('dos not return more then 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    });
})
