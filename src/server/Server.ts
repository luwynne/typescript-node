import { createServer, IncomingMessage, ServerResponse } from 'http'

export class Server{

    public createServer(){
        createServer((req: IncomingMessage, res: ServerResponse) => {
            console.log("Got request from: "+req.method)
            res.end();
        }).listen(8080)
        console.log("Server conected");
    }

}