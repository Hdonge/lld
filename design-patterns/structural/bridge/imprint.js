var SingleColorImprint = /** @class */ (function () {
    function SingleColorImprint() {
    }
    SingleColorImprint.prototype.fetchImprintData = function () {
        console.log('Fetch imprint colors for Single Color Products using api');
    };
    return SingleColorImprint;
}());
var FullColorImprint = /** @class */ (function () {
    function FullColorImprint() {
    }
    FullColorImprint.prototype.fetchImprintData = function () {
        console.log('Fetch imprint colors for Full Color Products using api');
    };
    return FullColorImprint;
}());
var MailCampaign = /** @class */ (function () {
    function MailCampaign(imprintDetailsImpl) {
        this.imprintDetailsImpl = imprintDetailsImpl;
    }
    MailCampaign.prototype.fetchImprintData = function () {
        this.imprintDetailsImpl.fetchImprintData();
    };
    return MailCampaign;
}());
var EmailCampaign = /** @class */ (function () {
    function EmailCampaign(imprintDetailsImpl) {
        this.imprintDetailsImpl = imprintDetailsImpl;
    }
    EmailCampaign.prototype.fetchImprintData = function () {
        this.imprintDetailsImpl.fetchImprintData();
    };
    return EmailCampaign;
}());
////.////////////////////////////////
var productType = 'singleColor';
if (productType.toLowerCase() === 'singlecolor') {
    var mailCampaign = new MailCampaign(new SingleColorImprint());
    mailCampaign.fetchImprintData();
}
else if (productType.toLowerCase() === 'fullcolor') {
    var emailCampaign = new EmailCampaign(new FullColorImprint());
    emailCampaign.fetchImprintData();
}
