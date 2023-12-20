var AuthManager = /** @class */ (function () {
    function AuthManager() {
        this.users = [];
        this.users = [
            { username: "user1", password: "password", role: "user", loggedInStatus: false },
            { username: "admin", password: "adminPass", role: "admin", loggedInStatus: false },
        ];
    }
    AuthManager.getInstance = function () {
        if (!AuthManager.authInstance)
            AuthManager.authInstance = new AuthManager();
        return AuthManager.authInstance;
    };
    AuthManager.prototype.login = function (username, password) {
        var user = this.users.find(function (u) { return u.username === username && u.password === password; });
        if (user && user.loggedInStatus === false) {
            user.loggedInStatus = true;
            console.log("User logged in successfully with username: " + username);
            return true;
        }
        console.log("invalid username or password");
        return false;
    };
    AuthManager.prototype.logout = function (username) {
        var user = this.users.find(function (u) { return u.username === username; });
        if (user && user.loggedInStatus === false) {
            user.loggedInStatus = true;
            console.log("User logged out successfully");
        }
    };
    AuthManager.prototype.isAutheticated = function (username) {
        var user = this.users.find(function (u) { return u.username === username; });
        if (user && user.loggedInStatus === true) {
            return true;
        }
        return false;
    };
    return AuthManager;
}());
///////////
var authInstance1 = AuthManager.getInstance();
var authInstance2 = AuthManager.getInstance();
console.log(authInstance1 === authInstance2);
authInstance1.login("user1", "password");
authInstance2.login("admin", "adminPass");
console.log(authInstance2.isAutheticated("user1"));
console.log(authInstance2.isAutheticated("admin"));
authInstance2.logout("admin");
