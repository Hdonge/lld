interface AuthUser {
    username: string;
    password: string;
    role: string;
    loggedInStatus: boolean;
}

class AuthManager {
    private static authInstance: AuthManager;
    private users: AuthUser[] = [];

    private constructor() {
        this.users = [
            { username: "user1", password: "password", role: "user", loggedInStatus: false },
            { username: "admin", password: "adminPass", role: "admin", loggedInStatus: false },
        ];
    }

    public static getInstance(): AuthManager {
        if (!AuthManager.authInstance) AuthManager.authInstance = new AuthManager();
        return AuthManager.authInstance;
    }

    public login(username: string, password: string): boolean {
        const user = this.users.find(u => u.username === username && u.password === password);
        if (user && user.loggedInStatus === false) {
            user.loggedInStatus = true;
            console.log("User logged in successfully with username: " + username);
            return true;
        }

        console.log("invalid username or password");
        return false;
    }

    public logout(username: string): void {
        const user = this.users.find(u => u.username === username);
        if (user && user.loggedInStatus === false) {
            user.loggedInStatus = true;
            console.log("User logged out successfully");
        }
    }

    public isAutheticated(username: string): boolean {
        const user = this.users.find(u => u.username === username);
        if (user && user.loggedInStatus === true) {
            return true;
        }

        return false;
    }
}

///////////

const authInstance1 = AuthManager.getInstance();
const authInstance2 = AuthManager.getInstance();

console.log(authInstance1 === authInstance2);

authInstance1.login("user1", "password");
authInstance2.login("admin", "adminPass");

console.log(authInstance2.isAutheticated("user1"));
console.log(authInstance2.isAutheticated("admin"));

authInstance2.logout("admin");
