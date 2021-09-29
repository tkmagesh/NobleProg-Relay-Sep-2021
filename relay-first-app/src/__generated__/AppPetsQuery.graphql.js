/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppPetsQueryVariables = {||};
export type AppPetsQueryResponse = {|
  +totalPets: number
|};
export type AppPetsQuery = {|
  variables: AppPetsQueryVariables,
  response: AppPetsQueryResponse,
|};
*/


/*
query AppPetsQuery {
  totalPets
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalPets",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppPetsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppPetsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "78c02c96a8b7b44f0268707c1c28d9d9",
    "id": null,
    "metadata": {},
    "name": "AppPetsQuery",
    "operationKind": "query",
    "text": "query AppPetsQuery {\n  totalPets\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1bd86b7273343ea844f778925979666a';

module.exports = node;
