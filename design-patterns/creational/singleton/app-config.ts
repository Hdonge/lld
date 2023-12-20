interface AppConfig{
    apiUrl: string;
    apiKey: string;
    maxConnections: number;
    //Other configuration properties................................
}

class ConfigurationManager{
    private static configInstance: ConfigurationManager;
    private config: AppConfig;

    private constructor() {
        this.config = {
            apiUrl: "",
            apiKey: "",
            maxConnections: 5
        };
    }

    static getInstance(): ConfigurationManager{
        if(!ConfigurationManager.configInstance){
            ConfigurationManager.configInstance = new ConfigurationManager();
        }
        return ConfigurationManager.configInstance;
    }

    getConfig(): AppConfig{
        return this.config;
    }

    // some additional methods for configuring
}


////////////////////////////////////////////////////////////////

const configInstance1 = ConfigurationManager.getInstance();
const configInstance2 = ConfigurationManager.getInstance();

console.log(configInstance1 === configInstance2);

const appConfig = configInstance1.getConfig();
console.log(appConfig);

