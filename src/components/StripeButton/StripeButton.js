import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeButton({price}) {

    const priceForStripe = price * 100; //stripe asks amount in cents
    const publishableKey= 'pk_test_CXkmJ4cc7Ap4BZJDGLDH8R3A00fs1ubI6N';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Hook-n-Crook'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeButton;