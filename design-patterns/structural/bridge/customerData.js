var PCTDetails = /** @class */ (function () {
    function PCTDetails() {
    }
    PCTDetails.prototype.fetchCustomerDetails = function () {
        console.log('Fetch customer details using pct api');
    };
    return PCTDetails;
}());
var NPIDDetails = /** @class */ (function () {
    function NPIDDetails() {
    }
    NPIDDetails.prototype.fetchCustomerDetails = function () {
        console.log('Fetch customer details using npid api');
    };
    return NPIDDetails;
}());
var MailCampaignType = /** @class */ (function () {
    function MailCampaignType(customerDetailsImpl) {
        this.customerDetailsImpl = customerDetailsImpl;
    }
    MailCampaignType.prototype.fetchCustomerDetails = function () {
        this.customerDetailsImpl.fetchCustomerDetails();
    };
    return MailCampaignType;
}());
var EmailCampaignType = /** @class */ (function () {
    function EmailCampaignType(customerDetailsImpl) {
        this.customerDetailsImpl = customerDetailsImpl;
    }
    EmailCampaignType.prototype.fetchCustomerDetails = function () {
        this.customerDetailsImpl.fetchCustomerDetails();
    };
    return EmailCampaignType;
}());
////.////////////////////////////////
var mailCampaign = new MailCampaignType(new PCTDetails());
mailCampaign.fetchCustomerDetails();
var emailCampaign = new EmailCampaignType(new NPIDDetails());
emailCampaign.fetchCustomerDetails();
