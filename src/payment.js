// Payment processing module
const rates = require('../config/rates.json');

function processPayment(amount, currency) {
    const commission = rates[currency] || 0.02;
    const total = amount + (amount * commission);
    return {
        amount: amount,
        commission: commission, // БАГ! Возвращаем rate вместо суммы
        total: total,
        currency: currency
    };
}

module.exports = { processPayment };
