import surveyModel from '../../models/surveys.js';

export function GetList(req, res, next){
    surveyModel.find((err, surveysCollection)=>{
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Success', surveys: surveysCollection, user: req.user})
    });
}

export function Get(req, res, next){
    let id = req.params.id;

    surveyModel.findById(id, (err, movie) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Success', survey, user: req.user })
    });
}

export function Add(req, res, next){
    let newSurvey = new surveyModel({
        ...req.body
    });

    surveyModel.create(newSurvey, (err) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Add Successfully', newSurvey });
    })
}
export function Edit(req, res, next){
    let id = req.params.id;

    let updatedSurvey = new surveyModel({
        "_id": id,
        ...req.body
    });

    surveyModel.updateOne({_id: id}, updatedSurvey, (err) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Edit Successfully', updatedSurvey });
    })
}

export function Delete(req, res, next){
    let id = req.params.id;

    surveyModel.remove({_id: id}, (err)=>{
        if(err){
            console.error(err);
            res.end(err);
        }

        res.json({success: true, msg: 'Delete Successfully'})
    })
}