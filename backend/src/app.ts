import express from "express";
import cors from "cors";
import mongoose from "mongoose";

export class App {
    private express: express.Application;
    private port = 9000;

    constructor() {
        this.express = express();
        this.listen();
    }

    public getApp(): express.Application {
        return this.express;
    }

    private listen(): void {
        this.express.listen(this.port, () => {
            console.log('Servidor iniciado na porta ' + this.port);
        })
    }
}
