const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns an error when a non-existent breed is passed in', (done) => {
    fetchBreedDescription('non-existent-breed', (error, description) => {
      assert.strictEqual(error, 'Breed "non-existent-breed" not found');
      assert.strictEqual(description, null);
      done();
    });
  });
  it('returns an error when an invalid breed is passed in', (done) => {
    fetchBreedDescription('invalid/breed', (error, description) => {
      assert.strictEqual(error, 'Invalid breed name');
      assert.strictEqual(description, null);
      done();
    });
  });
});