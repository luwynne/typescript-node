import { Server } from './server/Server';

class Launcher{

    private server: Server;

    constructor(){
        this.server = new Server();
    }

    launchApp(){
        console.log("Something");
        this.server.createServer();
    }

}

new Launcher().launchApp();