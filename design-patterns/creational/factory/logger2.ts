interface Logger {
    log(message: string): void;
}

class FileLogger implements Logger {
    log(message: string): void {
        console.log("File logger: ", message);
    };
}

class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log("Console logger: ", message);
    };
}

interface LoggerFactory {
    createLogger(): Logger;
}

class FileLoggerFactory implements LoggerFactory {
    createLogger(): Logger {
        return new FileLogger();
    }
}

class ConsoleLoggerFactory implements LoggerFactory {
    createLogger(): Logger {
        return new ConsoleLogger();
    }
}

class LoggerManager {
    private loggerFactory: LoggerFactory;
    constructor(loggerFactory: LoggerFactory) {
        this.loggerFactory = loggerFactory;
    }
    public log(message: string): void {
        const logger = this.loggerFactory.createLogger();
        logger.log(message);
    }
}

const fileLogger = new LoggerManager(new FileLoggerFactory());
fileLogger.log("File message");

const consoleLogger = new LoggerManager(new ConsoleLoggerFactory());
consoleLogger.log("Console message");