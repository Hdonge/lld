interface CustomerDetailsSystem {
    fetchCustomerDetails(): void;
}

interface CustomerDetailsImplementation {
    fetchCustomerDetails(): void;
}

class PCTDetails implements CustomerDetailsImplementation {
    fetchCustomerDetails(): void {
        console.log('Fetch customer details using pct api');
    }
}

class NPIDDetails implements CustomerDetailsImplementation {
    fetchCustomerDetails(): void {
        console.log('Fetch customer details using npid api');
    }
}

class MailCampaignType implements CustomerDetailsSystem {
    constructor(private customerDetailsImpl: CustomerDetailsImplementation) { }
    fetchCustomerDetails(): void {
        this.customerDetailsImpl.fetchCustomerDetails();
    }
}

class EmailCampaignType implements CustomerDetailsSystem {
    constructor(private customerDetailsImpl: CustomerDetailsImplementation) { }
    fetchCustomerDetails(): void {
        this.customerDetailsImpl.fetchCustomerDetails();
    }
}

////.////////////////////////////////
const mailCampaign = new MailCampaignType(new PCTDetails());
mailCampaign.fetchCustomerDetails();

const emailCampaign = new EmailCampaignType(new NPIDDetails());
emailCampaign.fetchCustomerDetails();
