var InitiateProcessor = /** @class */ (function () {
    function InitiateProcessor() {
        this.nextHandler = null;
    }
    InitiateProcessor.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    InitiateProcessor.prototype.proceedBuild = function (buildObject) {
        console.log('Initiating build......');
        if (this.nextHandler !== null) {
            this.nextHandler.proceedBuild(buildObject);
        }
    };
    return InitiateProcessor;
}());
var ValidateInputParams = /** @class */ (function () {
    function ValidateInputParams() {
        this.nextHandler = null;
    }
    ValidateInputParams.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    ValidateInputParams.prototype.proceedBuild = function (buildObject) {
        console.log('Validating input Parameters......');
        if (this.nextHandler !== null) {
            this.nextHandler.proceedBuild(buildObject);
        }
    };
    return ValidateInputParams;
}());
var UpdateCampaignStatusDb = /** @class */ (function () {
    function UpdateCampaignStatusDb() {
        this.nextHandler = null;
    }
    UpdateCampaignStatusDb.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    UpdateCampaignStatusDb.prototype.proceedBuild = function (buildObject) {
        console.log('Updating Campaign Status......');
        if (this.nextHandler !== null) {
            this.nextHandler.proceedBuild(buildObject);
        }
    };
    return UpdateCampaignStatusDb;
}());
var FetchCampaignDetails = /** @class */ (function () {
    function FetchCampaignDetails() {
        this.nextHandler = null;
    }
    FetchCampaignDetails.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    FetchCampaignDetails.prototype.proceedBuild = function (buildObject) {
        console.log('Fetching Campaign Details......');
        if (this.nextHandler !== null) {
            this.nextHandler.proceedBuild(buildObject);
        }
    };
    return FetchCampaignDetails;
}());
var ValidateCampaignDetails = /** @class */ (function () {
    function ValidateCampaignDetails() {
        this.nextHandler = null;
    }
    ValidateCampaignDetails.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    ValidateCampaignDetails.prototype.proceedBuild = function (buildObject) {
        console.log('Validating Campaign Details......');
        if (this.nextHandler !== null) {
            this.nextHandler.proceedBuild(buildObject);
        }
    };
    return ValidateCampaignDetails;
}());
var BatchCampaigns = /** @class */ (function () {
    function BatchCampaigns() {
        this.nextHandler = null;
    }
    BatchCampaigns.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    BatchCampaigns.prototype.proceedBuild = function (buildObject) {
        console.log('Batching Campaigns......');
        if (this.nextHandler !== null) {
            this.nextHandler.proceedBuild(buildObject);
        }
    };
    return BatchCampaigns;
}());
var ConstructTriggerBuildParams = /** @class */ (function () {
    function ConstructTriggerBuildParams() {
        this.nextHandler = null;
    }
    ConstructTriggerBuildParams.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    ConstructTriggerBuildParams.prototype.proceedBuild = function (buildObject) {
        console.log('Constructing Trigger Build Parameters......');
        if (this.nextHandler !== null) {
            this.nextHandler.proceedBuild(buildObject);
        }
    };
    return ConstructTriggerBuildParams;
}());
var TriggerBuild = /** @class */ (function () {
    function TriggerBuild() {
        this.nextHandler = null;
    }
    TriggerBuild.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    TriggerBuild.prototype.proceedBuild = function (buildObject) {
        console.log('Triggering Build......');
        if (this.nextHandler !== null) {
            this.nextHandler.proceedBuild(buildObject);
        }
    };
    return TriggerBuild;
}());
var initiateProcessor = new InitiateProcessor();
var validateInputParams = new ValidateInputParams();
var updateCampaignStatusDb = new UpdateCampaignStatusDb();
var fetchCampaignDetails = new FetchCampaignDetails();
var validateCampaignDetails = new ValidateCampaignDetails();
var batchCampaigns = new BatchCampaigns();
var constructTriggerBuildParams = new ConstructTriggerBuildParams();
var triggerBuild = new TriggerBuild();
initiateProcessor.setNextHandler(validateInputParams);
validateInputParams.setNextHandler(updateCampaignStatusDb);
updateCampaignStatusDb.setNextHandler(fetchCampaignDetails);
fetchCampaignDetails.setNextHandler(validateCampaignDetails);
validateCampaignDetails.setNextHandler(batchCampaigns);
batchCampaigns.setNextHandler(constructTriggerBuildParams);
constructTriggerBuildParams.setNextHandler(triggerBuild);
var buildObject = {
    campaignCode: "ABCDE",
};
initiateProcessor.proceedBuild(buildObject);
