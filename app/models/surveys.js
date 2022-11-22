import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SurveySchema = new Schema({

//surveyId:Number,
// surveyTemplate_id:Number,
//user_id: Number,
// surveyTemplateNumber: Number,
title: String,
question1: String,
question2: String,
question3: String,
question4: String,
question5: String,
question6: String,
startDate: Date,
endDate: Date,

}, {
    timestamps: true,
    collection: 'surveys'
});

export default mongoose.model('Surveys', SurveySchema);