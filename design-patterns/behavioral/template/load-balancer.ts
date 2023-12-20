interface Server {
    id: number;
    address: string;
    connections?: number;
}

//abstract class representing the template of load balancing.
abstract class LoadBalancer {
    servers: Array<Server> = [];

    addServer(server: Server): void {
        this.servers.push(server);
    }
    removeServer(serverId: number): void {
        this.servers = this.servers.filter(server => server.id !== serverId);
    }
    abstract routeRequest(): Server | null;
}

// Concrete subclass for balanicng load using round robin method.
class RoundRobinLoadBalancer extends LoadBalancer {
    constructor(private currentIndex: number = 0) {
        super();
    }

    routeRequest(): Server | null {
        if (this.servers.length === 0) {
            return null;
        }

        const nextServer = this.getNextServer();
        console.log(`Routing request to Server ${nextServer?.id} at index ${nextServer?.address}`);
        return nextServer;
    }

    private getNextServer(): Server | null {
        const nextServer = this.servers[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.servers.length;
        return nextServer;
    }
}

// Concrete subclass for balanicng load using least connection method.
class LeastConnectionLoadBalancer extends LoadBalancer {
    constructor() {
        super();
    }

    routeRequest(): Server | null {
        if (this.servers.length === 0) {
            return null;
        }

        //find server with least connections
        const selectedServer = this.servers.reduce((acc, current) => {
            if (acc.connections! > current.connections!) {
                acc = current;
            }
            return acc;
        }, this.servers[0]);

        if (selectedServer) {
            console.log(`Routing request to server ${selectedServer.id} at index ${selectedServer.address}`);
            selectedServer.connections!++;
            return selectedServer;
        }
        return null;
    }
}


/////////////////////////////////////////////////////////////////////////

const roundRobinLoadBalancer = new RoundRobinLoadBalancer();
roundRobinLoadBalancer.addServer({ id: 1, address: 'http://server1.com' });
roundRobinLoadBalancer.addServer({ id: 2, address: 'http://server2.com' });

roundRobinLoadBalancer.routeRequest();
roundRobinLoadBalancer.routeRequest();


const leastConnectionLoadBalancer = new LeastConnectionLoadBalancer();
leastConnectionLoadBalancer.addServer({ id: 1, address: 'http://server1.com', connections: 0 });
leastConnectionLoadBalancer.addServer({ id: 2, address: 'http://server2.com', connections: 0 });

leastConnectionLoadBalancer.routeRequest();
leastConnectionLoadBalancer.routeRequest();
