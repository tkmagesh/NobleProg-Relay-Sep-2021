import React, { Suspense } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { 
  RelayEnvironmentProvider, 
  loadQuery,
  usePreloadedQuery
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment'
import PetComponent_pet from './__generated__/PetComponent_pet.graphql'
import PetComponent from './Pet'
import './App.css'
const PetsQuery = graphql`
  query AppPetsQuery{
    totalPets
    allPets{
      ...PetComponent_pet
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
      
        {data.allPets.map(pet => (<PetComponent pet={pet}></PetComponent>))}
      
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