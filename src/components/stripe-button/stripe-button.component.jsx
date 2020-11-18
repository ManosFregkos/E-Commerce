import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishkey = 'pk_test_51HouVTKboxSvk9k6c6Ff8beoRIbQbdks2QU7Z3pYmrfpnEtpxiSu1NbFacTewRTqN0g8mGMktoIngeLfDpMB7suv00K4abnPDm';
    const onToken = token => {
        console.log(token);
        alert('Payment SuccessFul');
    }


    return(
       <StripeCheckout 
        label="Pay Now"
        name="Clothing Ltd"
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        zipCode
        description={`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishkey}
       />
    )
}
export default StripeCheckoutButton;