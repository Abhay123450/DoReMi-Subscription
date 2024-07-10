/**
 * Subscription info for three categories: MUSIC, VIDEO, PODCAST
 * All categories have three plans: FREE, PERSONAL, PREMIUM
 * Each plan has an AMOUNT (in INR) and DURATION (in months)
 */
const planInfo = Object.freeze({
    MUSIC: {
        FREE: {
            AMOUNT: 0,
            DURATION: 1 // in months
        },
        PERSONAL: {
            AMOUNT: 100,
            DURATION: 1
        },
        PREMIUM: {
            AMOUNT: 250,
            DURATION: 3
        }
    },
    VIDEO: {
        FREE: {
            AMOUNT: 0,
            DURATION: 1
        },
        PERSONAL: {
            AMOUNT: 200,
            DURATION: 1
        },
        PREMIUM: {
            AMOUNT: 500,
            DURATION: 3
        }
    },
    PODCAST: {
        FREE: {
            AMOUNT: 0,
            DURATION: 1
        },
        PERSONAL: {
            AMOUNT: 100,
            DURATION: 1
        },
        PREMIUM: {
            AMOUNT: 300,
            DURATION: 3
        }
    }
});

module.exports = { planInfo };