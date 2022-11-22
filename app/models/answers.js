import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AnswersSchema = new Schema({

surveyId: String,
// surveyTemplate_id:Number,
// answers: [String]
title: String,
answer1: String,
answer2: String,
answer3: String,
answer4: String,
answer5: String,
answer6: String,

}, {
    timestamps: true,
    collection: 'answers'
});

export default mongoose.model('Answers', AnswersSchema);