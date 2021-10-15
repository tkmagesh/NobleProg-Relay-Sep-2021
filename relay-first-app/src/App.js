import React, { Suspense } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { 
  RelayEnvironmentProvider, 
  loadQuery,
  usePreloadedQuery
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment'
import PetComponent_pet from './__generated__/PetComponent_pet.graphql'
import CustomersComponent_customer from './__generated__/CustomersComponent_customer.graphql'
import PetComponent from './Pet'
import CustomersComponent from './Customers'
import './App.css'
const PetsQuery = graphql`
  query AppPetsQuery{
    totalPets
    allPets{
      ...PetComponent_pet
    }
    allCustomers{
      ...CustomersComponent_customer
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, PetsQuery, {});

function App(props){
  const data = usePreloadedQuery(PetsQuery, preloadedQuery);
  console.log(data)
  return (
    <div>
      <h1>Pets</h1>
      <hr></hr>
      <div>
        Total Pets : {data.totalPets}
      </div>
      
        {data.allPets.map(pet => (<PetComponent pet={pet}></PetComponent>))}
        {data.allCustomers.map(customer => <CustomersComponent customer={customer}></CustomersComponent>)}
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