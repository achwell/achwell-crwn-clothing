import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

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
            alert('succesful payment');
        }).catch(error => {
            console.error('Payment Error: ', JSON.parse(error));
            alert('There was an issue with your payment! Please make sure you use the provided credit card.');
        });
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is ${currency} ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            currency={currency}

        />
    );
};

export default StripeCheckoutButton;