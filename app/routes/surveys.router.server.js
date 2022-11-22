import { Router } from "express";
import { DisplaySurveyList,  
    ProcessSurveysEditPage, 
    DisplaySurveysEditPage, 
    ProcessSurveyDeletePage,
    DisplaySurveysParticipatePage,
    ProcessSurveysParticipatePage,
    DisplaySurveyReportPage, 
    DisplaySurveysAddPage1,
    ProcessSurveysAddPage1,
    DisplaySurveysAddPage2,
    ProcessSurveysAddPage2} from "../controllers/surveys.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/survey-list', DisplaySurveyList);

router.get('/survey-add1', DisplaySurveysAddPage1);
router.post('/survey-add1', ProcessSurveysAddPage1);

router.get('/survey-add2', DisplaySurveysAddPage2 );
router.post('/survey-add2', ProcessSurveysAddPage2);

router.get('/surveys-participate/:id', DisplaySurveysParticipatePage);
router.post('/surveys-participate/:id', ProcessSurveysParticipatePage);


router.post('/survey-edit/:id', ProcessSurveysEditPage);
router.get('/survey-edit/:id', DisplaySurveysEditPage);

router.get('/survey-delete/:id', ProcessSurveyDeletePage);
router.get('/surveys-reports/:id', DisplaySurveyReportPage)

export default router;