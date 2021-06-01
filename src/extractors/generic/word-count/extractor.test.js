import assert from 'assert';

import GenericWordCountExtractor from './extractor';

describe('GenericWordCountExtractor', () => {
  describe('extract({ content })', () => {
    it('counts words with a div root', () => {
      const content = `
        <div>
          <p>One two three.</p>
          <p>Four five six.</p>
          <p>Seven eight nine.</p>
          <p>Ten eleven twelve.</p>
        </div>
      `;

      const wordCount = GenericWordCountExtractor.extract({ content });

      assert.equal(wordCount, 12);
    });

    it('counts words with an article root', () => {
      const content = `
        <article>
          <p>One two three.</p>
          <p>Four five six.</p>
          <p>Seven eight nine.</p>
          <p>Ten eleven twelve.</p>
        </article>
      `;

      const wordCount = GenericWordCountExtractor.extract({ content });

      assert.equal(wordCount, 12);
    });
  });
});
