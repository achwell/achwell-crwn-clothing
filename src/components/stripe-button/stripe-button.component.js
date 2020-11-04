import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForSStripe = price * 100;
    const publishableKey = 'pk_test_Ot2QTLJ2k2G0YXxrOgG7XViF00AggfBEQC';

    const onToken = token => {
        console.log(token);
        alert("Payment Successfull")
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Yout total is NOK ${price}`}
            amount={priceForSStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
            currency="NOK"

        />
    );
}

export default StripeCheckoutButton;