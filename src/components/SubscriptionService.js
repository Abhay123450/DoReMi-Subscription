const { addMonthToDate } = require("../utils/addMonthToDate");
const { isValidDate } = require("../utils/isValidDate");
const { subDaysFromDate } = require("../utils/subDaysFromDate");
const { planInfo } = require("../constants/planInfo");
const { topupInfo } = require("../constants/topupInfo");

class SubscriptionService {

    constructor(subscriptions) {
        this.subscriptions = subscriptions;
        this.topup = null;
    }

    findSubscription(subscription) {
        return this.subscriptions.find(sub => sub.category === subscription.category);
    }

    addSubscription(subscription) {
        const existingSubscription = this.findSubscription(subscription);
        if (existingSubscription) {
            console.log(`ADD_SUBSCRIPTION_FAILED DUPLICATE_CATEGORY`);
            process.exit(1);
        }
        if (!isValidDate(subscription.startDate)) {
            console.log(`INVALID_DATE`);
            console.log(`ADD_SUBSCRIPTION_FAILED INVALID_DATE`);
            process.exit(1);

        }
        this.subscriptions.push(subscription);
    }

    addTopup(topup) {
        if (this.topup) {
            console.log(`ADD_TOPUP_FAILED DUPLICATE_TOPUP`);
            process.exit(1);
        }
        if (this.subscriptions.length === 0) {
            console.log(`ADD_TOPUP_FAILED SUBSCRIPTIONS_NOT_FOUND`);
            console.log(`SUBSCRIPTIONS_NOT_FOUND`);
            process.exit(1);
        }
        this.topup = topup;
    }

    printRenewalDetails() {
        if (this.subscriptions.length === 0) {
            console.log(`SUBSCRIPTIONS_NOT_FOUND`);
            process.exit(1);
        }
        let totalAmount = 0;
        this.subscriptions.forEach((subscription) => {
            const plan = planInfo[subscription.category][subscription.plan];
            const amount = plan.AMOUNT;
            const duration = plan.DURATION;

            totalAmount += amount;
            const subscriptionEndDate = addMonthToDate(subscription.startDate, duration);
            const reminderDate = subDaysFromDate(subscriptionEndDate, 10);

            console.log(`RENEWAL_REMINDER ${subscription.category} ${reminderDate.getDate()}-${(reminderDate.getMonth() + 1) < 10 ? '0' : ''}${reminderDate.getMonth() + 1}-${reminderDate.getFullYear()}`);
        });

        if (this.topup) {
            const topupPlan = topupInfo[this.topup.plan];
            const topupAmount = topupPlan.COST * this.topup.duration;
            totalAmount += topupAmount;
        }

        console.log(`RENEWAL_AMOUNT ${totalAmount}`);

    }

}

module.exports = { SubscriptionService }