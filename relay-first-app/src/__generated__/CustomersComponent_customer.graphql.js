/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CustomersComponent_customer$ref: FragmentReference;
declare export opaque type CustomersComponent_customer$fragmentType: CustomersComponent_customer$ref;
export type CustomersComponent_customer = {|
  +name: string,
  +username: string,
  +dateCreated: ?any,
  +$refType: CustomersComponent_customer$ref,
|};
export type CustomersComponent_customer$data = CustomersComponent_customer;
export type CustomersComponent_customer$key = {
  +$data?: CustomersComponent_customer$data,
  +$fragmentRefs: CustomersComponent_customer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CustomersComponent_customer",
  "selections": [
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
  "type": "Customer",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '710cbea14b198ab82829dc3159cf5a97';

module.exports = node;
