/*!
 * Copyright (c) 2020-2022 Digital Bazaar, Inc. All rights reserved.
 */
import {jsonLdDocumentLoader} from '@bedrock/jsonld-document-loader';
import didContext from 'did-context';

const contextModules = [
  didContext
];

for(const {contexts} of contextModules) {
  for(const [contextUrl, context] of contexts) {
    jsonLdDocumentLoader.addStatic(contextUrl, context);
  }
}

const {constants} = didContext;
export {constants};
