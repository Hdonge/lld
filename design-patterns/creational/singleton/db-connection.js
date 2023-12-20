var DatabaseConnection = /** @class */ (function () {
    function DatabaseConnection() {
        this.connectionPool = [];
        this.maxConnections = 5;
        this.connectionPool = Array.from({ length: this.maxConnections }, function (_, index) { return "Connection-".concat(index + 1); });
    }
    DatabaseConnection.getInstance = function () {
        if (!DatabaseConnection.dbConnectionInstance) {
            DatabaseConnection.dbConnectionInstance = new DatabaseConnection();
        }
        return DatabaseConnection.dbConnectionInstance;
    };
    DatabaseConnection.prototype.getConnection = function () {
        if (this.connectionPool.length > 0) {
            return this.connectionPool.pop();
        }
    };
    DatabaseConnection.prototype.releaseConnection = function (connection) {
        if (this.connectionPool.length < this.maxConnections) {
            this.connectionPool.push(connection);
        }
    };
    return DatabaseConnection;
}());
////////////////////////////////////////////////////////////////
var dbInstance1 = DatabaseConnection.getInstance();
var dbInstance2 = DatabaseConnection.getInstance();
console.log(dbInstance1 === dbInstance2);
var connection1 = dbInstance1.getConnection();
var connection2 = dbInstance2.getConnection();
console.log(connection1);
console.log(connection2);
