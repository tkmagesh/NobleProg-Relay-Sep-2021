import React, { Suspense } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { 
  RelayEnvironmentProvider, 
  loadQuery,
  usePreloadedQuery
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment'

import './App.css'
const PetsQuery = graphql`
  query AppPetsQuery{
    totalPets
    allPets{
      name
      weight
      category
      photo{
        full
        thumb
      }
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, PetsQuery, {});

function App(props){
  const data = usePreloadedQuery(PetsQuery, preloadedQuery);
  return (
    <div>
      <h1>Pets</h1>
      <hr></hr>
      <div>
        Total Pets : {data.totalPets}
      </div>
      <ol>
        {data.allPets.map(pet => (<li key={pet.id}>{pet.name}</li>))}
      </ol>
    </div>
  )
}

function AppRoot(props){
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;