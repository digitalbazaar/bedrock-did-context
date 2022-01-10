/*!
 * Copyright (c) 2019-2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {documentLoader} = require('bedrock-jsonld-document-loader');

describe('bedrock-did-context', () => {
  it('sets up did context properly', async () => {
    const {contexts, constants: contextConstants} = require('did-context');

    for(const c in contextConstants) {
      if(!c.includes('URL')) {
        continue;
      }
      // ensure that context documents are defined
      const result = await documentLoader(contextConstants[c]);
      should.exist(result);
      should.exist(result.document);
      result.document.should.be.an('object');
      result.document.should.eql(contexts.get(contextConstants[c]));
    }
  });
});
