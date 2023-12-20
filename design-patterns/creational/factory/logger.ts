interface Logger {
    log(message: string): void;
}

class DebugLogger implements Logger {
    log(message: string): void {
        console.log(message);
    }
}

class ErrorLogger implements Logger {
    log(message: string): void {
        console.log(message);
    }
}

class InfoLogger implements Logger {
    log(message: string): void {
        console.log(message);
    }
}

interface LoggerFactory {
    createLogger(): Logger;
}

class DebugLoggerFactory implements LoggerFactory {
    createLogger(): Logger {
        return new DebugLogger();
    }
}

class ErrorLoggerFactory implements LoggerFactory {
    createLogger(): Logger {
        return new ErrorLogger();
    }
}

class InfoLoggerFactory implements LoggerFactory {
    createLogger(): Logger {
        return new InfoLogger();
    }
}

class LoggerDemo {
    private loggerFactory: LoggerFactory;

    constructor(loggerFactory: LoggerFactory) {
        this.loggerFactory = loggerFactory;
    }

    public log(message: string): void {
        const logger = this.loggerFactory.createLogger();
        logger.log(message);
    }
}

const loggerDemo = new LoggerDemo(new DebugLoggerFactory());
loggerDemo.log("Debug message");
