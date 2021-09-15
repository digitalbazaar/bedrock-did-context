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
  const {contexts, constants} = require(module);
  for(const [contextUrl, context] of contexts) {
    jsonLdDocumentLoader.addStatic(contextUrl, context);
  }
  for(const constant in constants) {
    bedrockConstants[constant] = constants[constant];
  }
}
