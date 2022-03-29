/*!
 * Copyright (c) 2020-2022 Digital Bazaar, Inc. All rights reserved.
 */
import {config} from 'bedrock';
import {jsonLdDocumentLoader} from 'bedrock-jsonld-document-loader';
import {contexts, constants} from 'did-context';

const {constants: bedrockConstants} = config;

for(const [contextUrl, context] of contexts) {
  jsonLdDocumentLoader.addStatic(contextUrl, context);
}
for(const constant in constants) {
  bedrockConstants[constant] = constants[constant];
}
