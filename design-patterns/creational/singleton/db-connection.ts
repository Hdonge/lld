class DatabaseConnection {
    private static dbConnectionInstance: DatabaseConnection;
    private connectionPool: string[] = [];
    private maxConnections: number = 5;


    private constructor() {
        this.connectionPool = Array.from({ length: this.maxConnections }, (_, index) => `Connection-${index + 1}`);
    }

    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.dbConnectionInstance) {
            DatabaseConnection.dbConnectionInstance = new DatabaseConnection();
        }
        return DatabaseConnection.dbConnectionInstance;
    }

    public getConnection(): string | undefined {
        if (this.connectionPool.length > 0) {
            return this.connectionPool.pop();
        }
    }

    public releaseConnection(connection: string): void {
        if (this.connectionPool.length < this.maxConnections) {
            this.connectionPool.push(connection);
        }
    }
}


////////////////////////////////////////////////////////////////

const dbInstance1 = DatabaseConnection.getInstance();
const dbInstance2= DatabaseConnection.getInstance();

console.log(dbInstance1 === dbInstance2);

const connection1 = dbInstance1.getConnection();
const connection2 = dbInstance2.getConnection();

console.log(connection1);
console.log(connection2);
