import React, {Suspense} from 'react'
import PetComponent from "./Pet"
/* import PetComponent_pet from './__generated__/PetComponent_pet.graphql' */
import {useLazyLoadQuery} from 'react-relay/hooks'
import graphql from 'babel-plugin-relay/macro';

const PetsQuery = graphql`
    query PetsQuery($category: PetCategory) {
        allPets(category : $category) {
            ...PetComponent_pet
        }
    }
`;


function Pets(props){
    const data = useLazyLoadQuery(
        PetsQuery, 
        {category: props.category},
        {fetchPolicy: 'store-or-network'}
    )
    return (
        <div>
            <h3>Pets</h3>
            {data.allPets.map(pet => (<PetComponent pet={pet} key={pet.__id}></PetComponent>))}
        </div>
    )
}

function PetsComponent(props){
    return (
         <Suspense fallback={<div>Loading...</div>}>
            <Pets category={props.category}/>
        </Suspense>
    )
}
export default PetsComponent