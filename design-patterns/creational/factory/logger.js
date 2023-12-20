var DebugLogger = /** @class */ (function () {
    function DebugLogger() {
    }
    DebugLogger.prototype.log = function (message) {
        console.log(message);
    };
    return DebugLogger;
}());
var ErrorLogger = /** @class */ (function () {
    function ErrorLogger() {
    }
    ErrorLogger.prototype.log = function (message) {
        console.log(message);
    };
    return ErrorLogger;
}());
var InfoLogger = /** @class */ (function () {
    function InfoLogger() {
    }
    InfoLogger.prototype.log = function (message) {
        console.log(message);
    };
    return InfoLogger;
}());
var DebugLoggerFactory = /** @class */ (function () {
    function DebugLoggerFactory() {
    }
    DebugLoggerFactory.prototype.createLogger = function () {
        return new DebugLogger();
    };
    return DebugLoggerFactory;
}());
var ErrorLoggerFactory = /** @class */ (function () {
    function ErrorLoggerFactory() {
    }
    ErrorLoggerFactory.prototype.createLogger = function () {
        return new ErrorLogger();
    };
    return ErrorLoggerFactory;
}());
var InfoLoggerFactory = /** @class */ (function () {
    function InfoLoggerFactory() {
    }
    InfoLoggerFactory.prototype.createLogger = function () {
        return new InfoLogger();
    };
    return InfoLoggerFactory;
}());
var LoggerDemo = /** @class */ (function () {
    function LoggerDemo(loggerFactory) {
        this.loggerFactory = loggerFactory;
    }
    LoggerDemo.prototype.log = function (message) {
        var logger = this.loggerFactory.createLogger();
        logger.log(message);
    };
    return LoggerDemo;
}());
var loggerDemo = new LoggerDemo(new DebugLoggerFactory());
loggerDemo.log("Debug message");
