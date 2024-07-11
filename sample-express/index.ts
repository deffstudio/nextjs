import { routeHello, routeAPINames, routeWeather } from './routes.js';
import express, {Request, Response} from "express";

const server = express();
const port = 3005;

server.get('/hello', function(_req: Request, res: Response): void{
    const response = routeHello();
    res.send(response);
});

server.get("/api/names", async function (_req: Request, res: Response): Promise<void>{
    let response: string;
    try {
        response = await routeAPINames();
    } catch (error) {
        console.log(error);
    }
    res.send(response);
});

server.get("/api/weather/:zipcode",
    function(req: Request, res: Response): void {
        const response = routeWeather({zipcode: req.params.zipcode});
        res.send(response);
    }
);

server.listen(port, function(){
    console.log('Listening on ' + port);
});