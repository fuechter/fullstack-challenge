/**
 * @flow
 * @relayHash a982e06a8afac7a1a0c360a3872aaa8a
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type listTwitterQueryResponse = {|
  +search: ?$ReadOnlyArray<?{|
    +user: ?{|
      +name: ?string;
      +screen_name: ?string;
      +profile_image_url: ?string;
    |};
    +id: ?string;
    +text: ?string;
  |}>;
|};
*/


/*
query listTwitterQuery {
  search(q: "Javascript", count: 20, result_type: mixed) {
    user {
      name
      screen_name
      profile_image_url
      id
    }
    id
    text
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "listTwitterQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "count",
            "value": 20,
            "type": "Int"
          },
          {
            "kind": "Literal",
            "name": "q",
            "value": "Javascript",
            "type": "String!"
          },
          {
            "kind": "Literal",
            "name": "result_type",
            "value": "mixed",
            "type": "SearchReponse"
          }
        ],
        "concreteType": "Tweet",
        "name": "search",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "TwitterUser",
            "name": "user",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "screen_name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "profile_image_url",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "text",
            "storageKey": null
          }
        ],
        "storageKey": "search{\"count\":20,\"q\":\"Javascript\",\"result_type\":\"mixed\"}"
      }
    ],
    "type": "TwitterAPI"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "listTwitterQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "listTwitterQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "count",
            "value": 20,
            "type": "Int"
          },
          {
            "kind": "Literal",
            "name": "q",
            "value": "Javascript",
            "type": "String!"
          },
          {
            "kind": "Literal",
            "name": "result_type",
            "value": "mixed",
            "type": "SearchReponse"
          }
        ],
        "concreteType": "Tweet",
        "name": "search",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "TwitterUser",
            "name": "user",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "screen_name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "profile_image_url",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "text",
            "storageKey": null
          }
        ],
        "storageKey": "search{\"count\":20,\"q\":\"Javascript\",\"result_type\":\"mixed\"}"
      }
    ]
  },
  "text": "query listTwitterQuery {\n  search(q: \"Javascript\", count: 20, result_type: mixed) {\n    user {\n      name\n      screen_name\n      profile_image_url\n      id\n    }\n    id\n    text\n  }\n}\n"
};

module.exports = batch;
