import surveyModel from '../models/surveys.js';
import answerModel from '../models/answers.js';
import { UserDisplayName } from '../utils/index.js';
import surveys from '../models/surveys.js';

export function DisplaySurveyList(req, res, next){
    surveyModel.find(function(err, surveysCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Survey List', page: 'surveys/list', surveys: surveysCollection, displayName: UserDisplayName(req)});
    })
}

/////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////

export function DisplaySurveysAddPage1(req, res, next){

    res.render('index', { title: 'Add a survey - Template 1', page: 'surveys/edit1', survey: {}, displayName: UserDisplayName(req) });
}

export function ProcessSurveysAddPage1(req, res, next){
    
    let newSurvey = surveyModel({
        title: req.body.title,
        question1: req.body.question1,
        question2: req.body.question2,
        question3: req.body.question3,
        question4: req.body.question4,
        question5: req.body.question5,
        question6: req.body.question6,
        startDate: req.body.startDate,
        endDate : req.body.endDate,
    });

    surveyModel.create(newSurvey, (err, Survey) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/survey-list')
    } )
}

/////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////
export function DisplaySurveysAddPage2(req, res, next){

    res.render('index', { title: 'Add a survey - Template 2', page: 'surveys/edit2', survey: {}, displayName: UserDisplayName(req) });
}

export function ProcessSurveysAddPage2(req, res, next){
    
    let newSurvey = surveyModel({
        title: req.body.title,
        question1: req.body.question1,
        question2: req.body.question2,
        question3: req.body.question3,
        question4: req.body.question4,
        question5: req.body.question5,
        question6: req.body.question6,
        startDate: req.body.startDate,
        endDate : req.body.endDate,
    });

    surveyModel.create(newSurvey, (err, Survey) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/survey-list')
    } )
}

///////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////


export function DisplaySurveysEditPage(req, res, next){
    let id = req.params.id;

    surveyModel.findById(id, (err, survey) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Edit Survey', page: 'surveys/edit1', survey: survey, displayName: UserDisplayName(req) });
    });    
}

export function ProcessSurveysEditPage(req, res, next){

    let id = req.params.id;
    
    let newSurvey = surveyModel({
        _id: req.body.id,
        title: req.body.title,
        question1: req.body.question1,
        question2: req.body.question2,
        question3: req.body.question3,
        question4: req.body.question4,
        question5: req.body.question5,
        question6: req.body.question6,
        startDate: req.body.startDate,
        endDate : req.body.endDate,
    });

    surveyModel.updateOne({_id: id }, newSurvey, (err, Survey) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/survey-list')
    } )
}

export function ProcessSurveyDeletePage(req, res, next){
    let id = req.params.id;

    surveyModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/survey-list');
    })
}


/////////////////////////////////////////////////////////////////////


export function DisplaySurveysParticipatePage(req, res, next){
    let id = req.params.id;

    surveyModel.findById(id, (err, survey) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Join the Survey', page: 'surveys/participate' , survey: survey, displayName: UserDisplayName(req)});
    });    
}

export function ProcessSurveysParticipatePage(req, res, next){

    let id = req.params.id;
    
    let newAnswer = answerModel({
        _id: req.body.id,
        surveyId: req.body.surveyId,
        title: req.body.title,
        answer1: req.body.answer1,
        answer2: req.body.answer2,
        answer3: req.body.answer3,
        answer4: req.body.answer4,
        answer5: req.body.answer5,
        answer6: req.body.answer6
    });

    answerModel.create(newAnswer, (err, Answer) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/survey-list')
    } )
}

/////////////////////////////////////////////////////////////////////

export function DisplaySurveyReportPage(req,res,next){
    let id = req.params.id;

    answerModel.findById(id, (err, Answer) => {
        if(err){
            console.error(err);
            res.end(err);
        }       
            surveyModel.findById(id, (err, Survey)=>{
                if(err){
                    console.error(err);
                    res.end(err);
            }
                answerModel.find(function(err, answersCollection) {
                    if(err){
                        console.error(err);
                        res.end(err);
                    }
        res.render('index', { title: 'Survey Report', page: 'surveys/reports', answer: Answer,survey: Survey, answers:answersCollection, displayName: UserDisplayName(req) });
        })})});
}

//////////////////////////////////////////////////////////////////////