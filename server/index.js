import express from 'express';
import { startSequalize } from './db/index.js';
// const express = require('express');

const app = express();

import userRouter from './routes/user.routes.js';

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({message: "Hello from my-express-app!"});
});

const PORT = 3000;

app.listen(PORT, async () => {
    await startSequalize();
    console.log(`Server listening at http://localhost:${PORT}`);
});


app.use('/users', userRouter);







/* 
let module = {};

Модульный JS (type: "module" в package.JSON)
export const asdsad = 
module.asdsad = [...];
import { asdsad } from ...;
if (asdsad.includes('smth')) {};
---------------------------------------
export { func1: func1, func2, ClassA };
module = { func1: func1, func2, ClassA };
import { ClassA } from ...;
const classInstance = new ClassA();
func1();
---------------------------------------
export default new Class();
classInstanceModule = new Class();
export default 1;
import smth from ...;
console.log(smth) // 1

import module from ...;
classInstanceModule.func1(); 


CommonJS (type: "commonjs")
exports и есть наш module. Его можно переприсвоить или дополнять, по умолчанию пустой объект.
(module).exports.key = ...; 
module.exports.userTypes = ['admin', 'common']; 
module.exports.func2 = func2;

module.exports = {key: value, ...}; module.exports = { func1, func2: func2, func3 };
module.exports = variable | value; module.export = new Class();
module.exports = 1;
console.log(module.exports) // 1
const otherModule = require('./above');
console.log(otherModule ( === his module.exports)) // 1
*/
