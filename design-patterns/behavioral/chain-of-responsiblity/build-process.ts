interface BuildProcessor {
    setNextHandler(nextHandler: BuildProcessor): void;
    proceedBuild(buildObject: any): void;
}

class InitiateProcessor implements BuildProcessor {
    private nextHandler: BuildProcessor | null = null;
    setNextHandler(nextHandler: BuildProcessor): void {
        this.nextHandler = nextHandler;
    }

    proceedBuild(buildObject: any): void {
        console.log('Initiating build......');

        if (this.nextHandler!== null) {
            this.nextHandler.proceedBuild(buildObject);
        }
    }
}

class ValidateInputParams implements BuildProcessor {
    private nextHandler: BuildProcessor | null = null;
    setNextHandler(nextHandler: BuildProcessor): void {
        this.nextHandler = nextHandler;
    }
    proceedBuild(buildObject: any): void {
        console.log('Validating input Parameters......');

        if (this.nextHandler!== null) {
            this.nextHandler.proceedBuild(buildObject);
        }
    }
}

class UpdateCampaignStatusDb implements BuildProcessor {
    private nextHandler: BuildProcessor | null = null;
    setNextHandler(nextHandler: BuildProcessor): void {
        this.nextHandler = nextHandler;
    }
    proceedBuild(buildObject: any): void {
        console.log('Updating Campaign Status......');

        if (this.nextHandler!== null) {
            this.nextHandler.proceedBuild(buildObject);
        }
    }
}

class FetchCampaignDetails implements BuildProcessor {
    private nextHandler: BuildProcessor | null = null;

    setNextHandler(nextHandler: BuildProcessor): void {
        this.nextHandler = nextHandler;
    }

    proceedBuild(buildObject: any): void {
        console.log('Fetching Campaign Details......');

        if (this.nextHandler!== null) {
            this.nextHandler.proceedBuild(buildObject);
        }
    }
}

class ValidateCampaignDetails implements BuildProcessor {
    private nextHandler: BuildProcessor | null = null;

    setNextHandler(nextHandler: BuildProcessor): void {
        this.nextHandler = nextHandler;
    }

    proceedBuild(buildObject: any): void {
        console.log('Validating Campaign Details......');

        if (this.nextHandler!== null) {
            this.nextHandler.proceedBuild(buildObject);
        }
    }
}

class BatchCampaigns implements BuildProcessor {
    private nextHandler: BuildProcessor | null = null;
    setNextHandler(nextHandler: BuildProcessor): void {
        this.nextHandler = nextHandler;
    }
    proceedBuild(buildObject: any): void {
        console.log('Batching Campaigns......');
        if (this.nextHandler!== null) {
            this.nextHandler.proceedBuild(buildObject);
        }
    }
}

class ConstructTriggerBuildParams implements BuildProcessor {
    private nextHandler: BuildProcessor | null = null;
    setNextHandler(nextHandler: BuildProcessor): void {
        this.nextHandler = nextHandler;
    }

    proceedBuild(buildObject: any): void {
        console.log('Constructing Trigger Build Parameters......');

        if (this.nextHandler!== null) {
            this.nextHandler.proceedBuild(buildObject);
        }
    }
}

class TriggerBuild implements BuildProcessor {
    private nextHandler: BuildProcessor | null = null;
    setNextHandler(nextHandler: BuildProcessor): void {
        this.nextHandler = nextHandler;
    }
    proceedBuild(buildObject: any): void {
        console.log('Triggering Build......');

        if (this.nextHandler!== null) {
            this.nextHandler.proceedBuild(buildObject);
        }
    }
}

const initiateProcessor = new InitiateProcessor();
const validateInputParams = new ValidateInputParams();
const updateCampaignStatusDb = new UpdateCampaignStatusDb();
const fetchCampaignDetails = new FetchCampaignDetails();
const validateCampaignDetails = new ValidateCampaignDetails();
const batchCampaigns = new BatchCampaigns();
const constructTriggerBuildParams = new ConstructTriggerBuildParams();
const triggerBuild = new TriggerBuild();


initiateProcessor.setNextHandler(validateInputParams);
validateInputParams.setNextHandler(updateCampaignStatusDb);
updateCampaignStatusDb.setNextHandler(fetchCampaignDetails);
fetchCampaignDetails.setNextHandler(validateCampaignDetails);
validateCampaignDetails.setNextHandler(batchCampaigns);
batchCampaigns.setNextHandler(constructTriggerBuildParams);
constructTriggerBuildParams.setNextHandler(triggerBuild);


const buildObject = {
    campaignCode: "ABCDE",
}

initiateProcessor.proceedBuild(buildObject);
