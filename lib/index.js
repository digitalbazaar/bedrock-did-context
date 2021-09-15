/*!
 * Copyright (c) 2020-2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

let {config: {constants: bedrockConstants}} = require('bedrock');
const {jsonLdDocumentLoader} = require('bedrock-jsonld-document-loader');

const contextModules = [
  'did-context',
];

for(const module of contextModules) {
  const {contexts, constants: moduleConstants} = require(module);
  for(const [contextUrl, context] of contexts) {
    jsonLdDocumentLoader.addStatic(contextUrl, context);
  }
  bedrockConstants = {...bedrockConstants, ...moduleConstants};
}
