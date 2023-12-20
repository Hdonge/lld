var FileLogger = /** @class */ (function () {
    function FileLogger() {
    }
    FileLogger.prototype.log = function (message) {
        console.log("File logger: ", message);
    };
    ;
    return FileLogger;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (message) {
        console.log("Console logger: ", message);
    };
    ;
    return ConsoleLogger;
}());
var FileLoggerFactory = /** @class */ (function () {
    function FileLoggerFactory() {
    }
    FileLoggerFactory.prototype.createLogger = function () {
        return new FileLogger();
    };
    return FileLoggerFactory;
}());
var ConsoleLoggerFactory = /** @class */ (function () {
    function ConsoleLoggerFactory() {
    }
    ConsoleLoggerFactory.prototype.createLogger = function () {
        return new ConsoleLogger();
    };
    return ConsoleLoggerFactory;
}());
var LoggerManager = /** @class */ (function () {
    function LoggerManager(loggerFactory) {
        this.loggerFactory = loggerFactory;
    }
    LoggerManager.prototype.log = function (message) {
        var logger = this.loggerFactory.createLogger();
        logger.log(message);
    };
    return LoggerManager;
}());
var fileLogger = new LoggerManager(new FileLoggerFactory());
fileLogger.log("File message");
var consoleLogger = new LoggerManager(new ConsoleLoggerFactory());
consoleLogger.log("Console message");
