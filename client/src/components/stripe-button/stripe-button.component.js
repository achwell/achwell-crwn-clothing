import React from 'react';

import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const currency = 'NOK';
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_Ot2QTLJ2k2G0YXxrOgG7XViF00AggfBEQC';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                currency: currency,
                token: token
            }
        }).then(response => {
            alert('Payment successfull');
        }).catch(error => {
            console.error('Payment error: ' + JSON.parse(error));
            alert('Payment error');
        });
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Yout total is ${currency} ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
            currency={currency}

        />
    );
}

export default StripeCheckoutButton;