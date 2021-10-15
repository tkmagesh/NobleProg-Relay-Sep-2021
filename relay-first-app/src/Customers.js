import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';

function CustomersComponent(props){
    const customer = useFragment(
        graphql`
            fragment CustomersComponent_customer on Customer {
               name,
               username,
               dateCreated
            }
        `,
        props.customer
    )
    return (
        <div>
            <h1>{customer.name}</h1>
            <p>{customer.username}</p>
            <p>{customer.dateCreated}</p>
        </div>
    )
}
export default CustomersComponent