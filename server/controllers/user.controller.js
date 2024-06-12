// exports.createOneRequest = (req, res) => {
//     if (Object.keys(req.body).length === 0) {
//         res.status(400).json({message: "Body cannot be empty!"});
//         return
//     } 
//     console.log(req.body);
//     res.status(201).json({message: "New resource created!"});
// }

// exports.readOneRequest = (req, res) => {
//     res.status(302).json({message: "Resource found!"});
// }

// exports.updateOneRequest = (req, res) => {
//     res.status(301).json({message: "Resource updated!"});
// }

// exports.deleteOneRequest = (req, res) => {
//     res.status(202).json({message: "Resource deleted!"});
// }
import service from "../service/user.service.js";
// const moduleService = require("../service/user.service");
// const service = moduleService.service;

class Controller {
    constructor(service) {
        this.service = service;
    }
    createOne = async (req, res) => {
        try {
            console.log(req.body);
            const user = await this.service.createUser(req.body);
            res.status(201).json({ message: "New resource created!", user });
        } catch (error) {
            res.status(400).json({ message: "Error!", error: error.message });
        }
    }
    deleteOne = async (req, res) => {
        try {
            await this.service.deleteUser(req.body);
            res.status(200).json({ message: "Resource deleted!" });
        } catch (error) {
            res.status(400).json({ message: "Error!", error: error.message });
        }
    }
    getAll = async (req, res) => {
        try {

            const users = await this.service.getAll();
            return res.status(200).json({ users });

        } catch (error) {
            res.status(400).json({ message: "Error!", error: error.message });
        }
    }


}


export default new Controller(service)