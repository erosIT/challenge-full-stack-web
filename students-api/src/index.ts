import "reflect-metadata";
import {createConnection} from "typeorm";
import express from "express";
import {Request, Response} from "express";
import routes from "../routes";
import app from './app'
import { Student } from "./entities/Student";

createConnection().then(async connection => {

    app.listen(3000);

    // insert new users for test
    // await connection.manager.save(connection.manager.create(Student, {
    //   name: "Timber",
    //   email: "Saw",
    //   ra: 27,
    //   cpf: 123
    // }));
    // await connection.manager.save(connection.manager.create(Student, {
    //   name: "Phantom",
    //   email: "Assassin",
    //   ra: 27,
    //   cpf: 123
    // }));

    console.log("Express server has started on port 3000. Open http://localhost:3000/api");

}).catch(error => console.log(error));
