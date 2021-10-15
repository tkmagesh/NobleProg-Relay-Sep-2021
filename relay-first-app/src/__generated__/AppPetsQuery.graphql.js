/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CustomersComponent_customer$ref = any;
type PetComponent_pet$ref = any;
export type AppPetsQueryVariables = {||};
export type AppPetsQueryResponse = {|
  +totalPets: number,
  +allPets: $ReadOnlyArray<{|
    +$fragmentRefs: PetComponent_pet$ref
  |}>,
  +allCustomers: $ReadOnlyArray<{|
    +$fragmentRefs: CustomersComponent_customer$ref
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
  allCustomers {
    ...CustomersComponent_customer
  }
}

fragment CustomersComponent_customer on Customer {
  name
  username
  dateCreated
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
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Customer",
        "kind": "LinkedField",
        "name": "allCustomers",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CustomersComponent_customer"
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
          (v1/*: any*/),
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Customer",
        "kind": "LinkedField",
        "name": "allCustomers",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "username",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "dateCreated",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b18ae8b4dea53cd57fe1b6b7d631c9a3",
    "id": null,
    "metadata": {},
    "name": "AppPetsQuery",
    "operationKind": "query",
    "text": "query AppPetsQuery {\n  totalPets\n  allPets {\n    ...PetComponent_pet\n    id\n  }\n  allCustomers {\n    ...CustomersComponent_customer\n  }\n}\n\nfragment CustomersComponent_customer on Customer {\n  name\n  username\n  dateCreated\n}\n\nfragment PetComponent_pet on Pet {\n  id\n  name\n  weight\n  category\n  status\n  photo {\n    thumb\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3407303635136d8c41554db41fdfb830';

module.exports = node;
