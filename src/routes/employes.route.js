import { Router} from "express";
import {
    createEmployee,
    deleteEmployee,
    getEmployee,
    getEmployees,
    updateEmployees
} from "../controllers/employees.controller.js";

const router = Router();
router.get('/employees', getEmployees)

router.get('/employees/:id', getEmployee)


router.post('/employees', createEmployee)

router.patch('/employees/:id', updateEmployees)

router.delete('/employees/:id', deleteEmployee)

export default router
