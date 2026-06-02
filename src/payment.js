// Payment processing module
const rates = require('../config/rates.json');

function processPayment(amount, currency) {
    const rate = rates[currency] || 0.02;
    const commission = amount * rate;
    const total = amount + commission;
    return {
        amount: amount,
        commission: commission,
        total: total,
        currency: currency
    };
}

module.exports = { processPayment };
