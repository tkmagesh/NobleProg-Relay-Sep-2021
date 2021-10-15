import React, { Suspense, useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { 
  RelayEnvironmentProvider, 
  loadQuery,
  usePreloadedQuery,
  /* useQueryLoader */
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment'
/* import PetComponent_pet from './__generated__/PetComponent_pet.graphql'
import CustomersComponent_customer from './__generated__/CustomersComponent_customer.graphql' */
import PetsComponent from './Pets'
import CustomersComponent from './Customers'
import './App.css'
const AppQuery = graphql`
  query AppQuery{
    totalPets
    allCustomers{
      ...CustomersComponent_customer
    }
  }
`;

const preloadedQuery = loadQuery(RelayEnvironment, AppQuery, {});


function App(props){
  const data = usePreloadedQuery(AppQuery, preloadedQuery);
  const [selectedCategory, setSelectedCategory] = useState(null)
  return (
    <div>
      <h1>Pets</h1>
      <hr></hr>
      <div>
        Total Pets : {data.totalPets}
      </div>
        <div>
          <label>Filter : </label>
          <select onChange={ evt => setSelectedCategory(evt.target.value === '' ? null : evt.target.value)}>
            <option value="">All</option>
            <option value="CAT">Cat</option>
            <option value="DOG">Dog</option>
            <option value="RABBIT">Rabbit</option>
            <option value="STINGRAY">Stringray</option>
          </select>
        </div>
        <PetsComponent category={selectedCategory}/>
        {data.allCustomers.map(customer => <CustomersComponent key={customer.__id} customer={customer}></CustomersComponent>)}
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