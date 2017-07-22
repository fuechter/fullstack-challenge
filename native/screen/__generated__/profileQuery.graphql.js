/**
 * @flow
 * @relayHash 59a83f516c1252b93860687a4f8e8ec6
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type profileQueryResponse = {|
  +user: ?{|
    +id: ?string;
    +description: ?string;
    +name: ?string;
    +screen_name: ?string;
    +tweets_count: ?number;
    +followers_count: ?number;
    +profile_image_url: ?string;
    +tweets: ?$ReadOnlyArray<?{|
      +user: ?{|
        +id: ?string;
        +screen_name: ?string;
        +profile_image_url: ?string;
      |};
      +id: ?string;
      +text: ?string;
    |}>;
  |};
|};
*/


/*
query profileQuery(
  $identity: UserIdentity!
) {
  user(identifier: name, identity: $identity) {
    id
    description
    name
    screen_name
    tweets_count
    followers_count
    profile_image_url
    tweets {
      user {
        id
        screen_name
        profile_image_url
      }
      id
      text
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "identity",
        "type": "UserIdentity!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "profileQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "identifier",
            "value": "name",
            "type": "UserIdentifier!"
          },
          {
            "kind": "Variable",
            "name": "identity",
            "variableName": "identity",
            "type": "UserIdentity!"
          }
        ],
        "concreteType": "TwitterUser",
        "name": "user",
        "plural": false,
        "selections": [
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
            "name": "description",
            "storageKey": null
          },
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
            "name": "tweets_count",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "followers_count",
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
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Tweet",
            "name": "tweets",
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
                    "name": "id",
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
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "TwitterAPI"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "profileQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "identity",
        "type": "UserIdentity!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "profileQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "identifier",
            "value": "name",
            "type": "UserIdentifier!"
          },
          {
            "kind": "Variable",
            "name": "identity",
            "variableName": "identity",
            "type": "UserIdentity!"
          }
        ],
        "concreteType": "TwitterUser",
        "name": "user",
        "plural": false,
        "selections": [
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
            "name": "description",
            "storageKey": null
          },
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
            "name": "tweets_count",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "followers_count",
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
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Tweet",
            "name": "tweets",
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
                    "name": "id",
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
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query profileQuery(\n  $identity: UserIdentity!\n) {\n  user(identifier: name, identity: $identity) {\n    id\n    description\n    name\n    screen_name\n    tweets_count\n    followers_count\n    profile_image_url\n    tweets {\n      user {\n        id\n        screen_name\n        profile_image_url\n      }\n      id\n      text\n    }\n  }\n}\n"
};

module.exports = batch;
