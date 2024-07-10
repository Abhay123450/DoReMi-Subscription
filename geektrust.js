const fs = require("fs");
const path = require("path");
const { SubscriptionService } = require("./src/components/SubscriptionService");

function main(data) {
    const subscriptions = [];
    const subscriptionService = new SubscriptionService(subscriptions);

    const inputLines = data.trim().split("\n");
    let subscriptionStartDate;
    inputLines.forEach(line => {
        const data = line.split(" ");
        switch (data[0]) {
            case "START_SUBSCRIPTION":
                subscriptionStartDate = data[1].trim();
                break;
            case "ADD_SUBSCRIPTION":
                const subscription = {};
                subscription.category = data[1].trim();
                subscription.plan = data[2].trim();
                subscription.startDate = subscriptionStartDate;
                subscriptionService.addSubscription(subscription);
                break;
            case "ADD_TOPUP":
                const topup = {};
                topup.plan = data[1].trim();
                topup.duration = Number(data[2].trim());
                subscriptionService.addTopup(topup);
                break;
            case "PRINT_RENEWAL_DETAILS":
                subscriptionService.printRenewalDetails();
                break;
        }
    });
}

const filename = process.argv[2];
const data = fs.readFileSync(path.resolve(filename)).toString();
main(data);
