import { Button } from '@chakra-ui/react';
import StripeCheckout from 'react-stripe-checkout';

const StripCheckoutButton = ({price}) => {
    const amount = price * 100;
    const token = (res) => {
        console.log(res);
    }
    return ( 
        <StripeCheckout
            name="ManP Shopping Center"
            currency="USD"
            amount={amount}
            shippingAddress
            billingAddress
            stripeKey="pk_test_51IIdKABa1mOYfusLh44lVHIfKQE3z5ZzNjHfjDz0EII3t3Qeszk7TtbA6BeKFgrKoScPMYVL5iwUHt7F725C6B4R00jgHOmCFR"
            token={token}
            allowRememberMe 
            panelLabel="Pay Now"
        >
            <Button colorScheme="blue">
                Pay Now
            </Button>
        </StripeCheckout> 
    );
}
 
export default StripCheckoutButton;