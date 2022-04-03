/*!
 * Copyright (c) 2020-2022 Digital Bazaar, Inc. All rights reserved.
 */
import {documentLoader} from '@bedrock/jsonld-document-loader';

describe('bedrock-did-context', () => {
  it('sets up did context properly', async () => {
    const {contexts} = await import('did-context');
    for(const [contextUrl, context] of contexts) {
      // ensure that context document is defined
      const result = await documentLoader(contextUrl);
      should.exist(result);
      should.exist(result.document);
      result.document.should.be.an('object');
      result.document.should.eql(context);
      should.exist(result.tag);
      result.tag.should.eql('static');
    }
  });
});
