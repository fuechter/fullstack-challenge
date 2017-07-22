const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime');

const source = new RecordSource();
const store = new Store(source);

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
function fetchQuery(
  operation,
  variables,
  cacheConfig,
  uploadables,
) {
  return fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      operationName: operation.name,
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const network = Network.create(fetchQuery);

const environment = new Environment({
  network,
  store,
});

export default environment
