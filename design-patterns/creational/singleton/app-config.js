var ConfigurationManager = /** @class */ (function () {
    function ConfigurationManager() {
        this.config = {
            apiUrl: "",
            apiKey: "",
            maxConnections: 5
        };
    }
    ConfigurationManager.getInstance = function () {
        if (!ConfigurationManager.configInstance) {
            ConfigurationManager.configInstance = new ConfigurationManager();
        }
        return ConfigurationManager.configInstance;
    };
    ConfigurationManager.prototype.getConfig = function () {
        return this.config;
    };
    return ConfigurationManager;
}());
////////////////////////////////////////////////////////////////
var configInstance1 = ConfigurationManager.getInstance();
var configInstance2 = ConfigurationManager.getInstance();
console.log(configInstance1 === configInstance2);
var appConfig = configInstance1.getConfig();
console.log(appConfig);
