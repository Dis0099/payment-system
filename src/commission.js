// Commission calculation module
function calculateCommission(amount, rate) {
    return amount * rate;
}

function calculateProgressiveCommission(amount, rate) {
    if (amount < 100) {
        return amount * rate;
    } else if (amount < 1000) {
        return amount * rate * 0.95;
    } else {
        return amount * rate * 0.9;
    }
}

module.exports = { calculateCommission, calculateProgressiveCommission };
