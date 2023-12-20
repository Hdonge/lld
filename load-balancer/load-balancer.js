var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LoadBalancer = /** @class */ (function () {
    function LoadBalancer() {
        this.servers = [];
    }
    LoadBalancer.prototype.addServer = function (server) {
        this.servers.push(server);
    };
    LoadBalancer.prototype.removeServer = function (serverId) {
        this.servers = this.servers.filter(function (server) { return server.id !== serverId; });
    };
    return LoadBalancer;
}());
var RoundRobinLoadBalancer = /** @class */ (function (_super) {
    __extends(RoundRobinLoadBalancer, _super);
    function RoundRobinLoadBalancer(currentIndex) {
        if (currentIndex === void 0) { currentIndex = 0; }
        var _this = _super.call(this) || this;
        _this.currentIndex = currentIndex;
        return _this;
    }
    RoundRobinLoadBalancer.prototype.routeRequest = function () {
        if (this.servers.length === 0) {
            return null;
        }
        var nextServer = this.getNextServer();
        console.log("Routing request to Server ".concat(nextServer === null || nextServer === void 0 ? void 0 : nextServer.id, " at index ").concat(nextServer === null || nextServer === void 0 ? void 0 : nextServer.address));
        return nextServer;
    };
    RoundRobinLoadBalancer.prototype.getNextServer = function () {
        var nextServer = this.servers[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.servers.length;
        return nextServer;
    };
    return RoundRobinLoadBalancer;
}(LoadBalancer));
var LeastConnectionLoadBalancer = /** @class */ (function (_super) {
    __extends(LeastConnectionLoadBalancer, _super);
    function LeastConnectionLoadBalancer() {
        return _super.call(this) || this;
    }
    LeastConnectionLoadBalancer.prototype.routeRequest = function () {
        if (this.servers.length === 0) {
            return null;
        }
        //find server with least connections
        var selectedServer = this.servers.reduce(function (acc, current) {
            if (acc.connections > current.connections) {
                acc = current;
            }
            return acc;
        }, this.servers[0]);
        if (selectedServer) {
            console.log("Routing request to server ".concat(selectedServer.id, " at index ").concat(selectedServer.address));
            selectedServer.connections++;
            return selectedServer;
        }
        return null;
    };
    return LeastConnectionLoadBalancer;
}(LoadBalancer));
/////////////////////////////////////////////////////////////////////////
var roundRobinLoadBalancer = new RoundRobinLoadBalancer();
roundRobinLoadBalancer.addServer({ id: 1, address: 'http://server1.com' });
roundRobinLoadBalancer.addServer({ id: 2, address: 'http://server2.com' });
roundRobinLoadBalancer.routeRequest();
roundRobinLoadBalancer.routeRequest();
var leastConnectionLoadBalancer = new LeastConnectionLoadBalancer();
leastConnectionLoadBalancer.addServer({ id: 1, address: 'http://server1.com', connections: 0 });
leastConnectionLoadBalancer.addServer({ id: 2, address: 'http://server2.com', connections: 0 });
leastConnectionLoadBalancer.routeRequest();
leastConnectionLoadBalancer.routeRequest();
