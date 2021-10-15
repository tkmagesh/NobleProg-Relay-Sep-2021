/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PetComponent_pet$ref = any;
export type AppPetsQueryVariables = {||};
export type AppPetsQueryResponse = {|
  +totalPets: number,
  +allPets: $ReadOnlyArray<{|
    +$fragmentRefs: PetComponent_pet$ref
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
    ...PetComponent_pet
    id
  }
}

fragment PetComponent_pet on Pet {
  id
  name
  weight
  category
  status
  photo {
    thumb
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PetComponent_pet"
          }
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "weight",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "category",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "status",
            "storageKey": null
          },
          {
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
                "name": "thumb",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cde229608cf60a0ef2527093d90a8714",
    "id": null,
    "metadata": {},
    "name": "AppPetsQuery",
    "operationKind": "query",
    "text": "query AppPetsQuery {\n  totalPets\n  allPets {\n    ...PetComponent_pet\n    id\n  }\n}\n\nfragment PetComponent_pet on Pet {\n  id\n  name\n  weight\n  category\n  status\n  photo {\n    thumb\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8773f8bc3ca277ed341c149d82bbabf7';

module.exports = node;
