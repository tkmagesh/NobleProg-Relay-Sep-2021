/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
export type PetCategory = "CAT" | "DOG" | "RABBIT" | "STINGRAY" | "%future added value";
export type PetStatus = "AVAILABLE" | "CHECKEDOUT" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type PetComponent_pet$ref: FragmentReference;
declare export opaque type PetComponent_pet$fragmentType: PetComponent_pet$ref;
export type PetComponent_pet = {|
  +id: string,
  +name: string,
  +weight: ?number,
  +category: PetCategory,
  +status: ?PetStatus,
  +photo: ?{|
    +thumb: ?string
  |},
  +$refType: PetComponent_pet$ref,
|};
export type PetComponent_pet$data = PetComponent_pet;
export type PetComponent_pet$key = {
  +$data?: PetComponent_pet$data,
  +$fragmentRefs: PetComponent_pet$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PetComponent_pet",
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
  "type": "Pet",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '084c0f363e6d4a3d15e1f466b4cb617a';

module.exports = node;
