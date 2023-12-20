//Abstraction: used as a component in any other systen
interface ImprintDetailsSystem {
    fetchImprintData(): void;
}

//implementations: actual navigation implmentation used by other systems.
interface ImprintDetailsImplementation {
    fetchImprintData(): void;
}

class SingleColorImprint implements ImprintDetailsImplementation {
    fetchImprintData(): void {
        console.log('Fetch imprint colors for Single Color Products using api');
    }
}

class FullColorImprint implements ImprintDetailsImplementation {
    fetchImprintData(): void {
        console.log('Fetch imprint colors for Full Color Products using api');
    }
}


class MailCampaign implements ImprintDetailsSystem {
    constructor(private imprintDetailsImpl: ImprintDetailsImplementation) { }
    fetchImprintData(): void {
        this.imprintDetailsImpl.fetchImprintData();
    }
}

class EmailCampaign implements ImprintDetailsSystem {
    constructor(private imprintDetailsImpl: ImprintDetailsImplementation) { }
    fetchImprintData(): void {
        this.imprintDetailsImpl.fetchImprintData();
    }
}

////.////////////////////////////////

const productType = 'singleColor';

if(productType.toLowerCase() === 'singlecolor'){
    const mailCampaign = new MailCampaign(new SingleColorImprint());
    mailCampaign.fetchImprintData();
}else if (productType.toLowerCase() === 'fullcolor'){
    const emailCampaign = new EmailCampaign(new FullColorImprint());
    emailCampaign.fetchImprintData();
}