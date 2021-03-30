/*!
 * Copyright (c) 2020-2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {config: {constants: bedrockConstants}} = require('bedrock');
const {jsonLdDocumentLoader} = require('bedrock-jsonld-document-loader');

const contextModules = [
  'did-context',
];

for(const module of contextModules) {
  const {contexts, constants: contextConstants} = require(module);
  for(const c in contextConstants) {
    const contextUrl = contextConstants[c];
    bedrockConstants[c] = contextUrl;
    jsonLdDocumentLoader.addStatic(contextUrl, contexts.get(contextUrl));
  }
}
