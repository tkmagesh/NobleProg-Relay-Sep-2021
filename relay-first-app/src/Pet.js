import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';

function PetComponent(props){
    const pet = useFragment(
        graphql`
            fragment PetComponent_pet on Pet {
                id,
                name,
                weight,
                category,
                status,
                photo {
                    thumb
                }
            }
        `,
        props.pet
    )
    return (
        <div>
            <h3>{pet.name}</h3>
            <img src={pet.photo.thumb} alt={pet.name}></img>
            <div>
                <label>Weight : </label>
                <span>{pet.weight}</span>
            </div>
            <div>
                <label>Category : </label>
                <span>{pet.category}</span>
            </div>
             <div>
                <label>Status : </label>
                <span>{pet.status}</span>
            </div>
        </div>
    )
}
export default PetComponent