/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PetCategory = "CAT" | "DOG" | "RABBIT" | "STINGRAY" | "%future added value";
export type AppPetsQueryVariables = {||};
export type AppPetsQueryResponse = {|
  +totalPets: number,
  +allPets: $ReadOnlyArray<{|
    +name: string,
    +weight: ?number,
    +category: PetCategory,
    +photo: ?{|
      +full: ?string,
      +thumb: ?string,
    |},
  |}>,
|};
export type AppPetsQuery = {|
  variables: AppPetsQueryVariables,
  response: AppPetsQueryResponse,
|};
*/


/*
query AppPetsQuery {
  totalPets
  allPets {
    name
    weight
    category
    photo {
      full
      thumb
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalPets",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "weight",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "category",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "Photo",
  "kind": "LinkedField",
  "name": "photo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "full",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "thumb",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppPetsQuery",
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Pet",
        "kind": "LinkedField",
        "name": "allPets",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppPetsQuery",
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Pet",
        "kind": "LinkedField",
        "name": "allPets",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a7dbb9c633f8cebd75c42f1e5bf46c3a",
    "id": null,
    "metadata": {},
    "name": "AppPetsQuery",
    "operationKind": "query",
    "text": "query AppPetsQuery {\n  totalPets\n  allPets {\n    name\n    weight\n    category\n    photo {\n      full\n      thumb\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '59719ddda9bc8539e49be2e4e70ca6c2';

module.exports = node;
