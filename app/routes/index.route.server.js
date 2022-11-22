import { Router } from "express";
import { displayAboutPage, 
    displayContactPage, 
    displayHomePage,
    displayJoinPage 
    } from "../controllers/index.controller.server.js";

const router = Router();

router.get('/', displayHomePage);
router.get('/home', displayHomePage);
router.get('/about', displayAboutPage);
router.get('/contact', displayContactPage);
router.get('/surveys/list', displayJoinPage);

export default router;
