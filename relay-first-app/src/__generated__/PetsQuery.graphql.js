/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PetComponent_pet$ref = any;
export type PetCategory = "CAT" | "DOG" | "RABBIT" | "STINGRAY" | "%future added value";
export type PetsQueryVariables = {|
  category?: ?PetCategory
|};
export type PetsQueryResponse = {|
  +allPets: $ReadOnlyArray<{|
    +$fragmentRefs: PetComponent_pet$ref
  |}>
|};
export type PetsQuery = {|
  variables: PetsQueryVariables,
  response: PetsQueryResponse,
|};
*/


/*
query PetsQuery(
  $category: PetCategory
) {
  allPets(category: $category) {
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "category"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "category",
    "variableName": "category"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PetsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PetsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
    "cacheID": "3e09279800d92af7e128f3f0f2161822",
    "id": null,
    "metadata": {},
    "name": "PetsQuery",
    "operationKind": "query",
    "text": "query PetsQuery(\n  $category: PetCategory\n) {\n  allPets(category: $category) {\n    ...PetComponent_pet\n    id\n  }\n}\n\nfragment PetComponent_pet on Pet {\n  id\n  name\n  weight\n  category\n  status\n  photo {\n    thumb\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2a17de40dd95cd8effc0596985d45f3e';

module.exports = node;
