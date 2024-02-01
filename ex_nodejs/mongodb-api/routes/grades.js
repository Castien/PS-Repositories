import express from "express";
import { ObjectId } from "mongodb";
import db from "../db/conn.js";
import Grade from '../models/grades.js';

const router = express.Router();

/**
 * GET /
 */
router.get('/', async (req, res) => {
    // const collection = await db.collection("grades");
    // const result = await collection.find();
    const result = await Grade.find({});
    res.send(result);

});


/**
 * GET /:id
 */
router.get("/:id", async (req, res) => {
//   const collection = await db.collection("grades");
//   const query = { _id: new ObjectId(req.params.id) };
//   const result = await collection.findOne(query);

    const result = await Grade.findById(req.params.id);
  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

/**
 * POST /
 * Test with postman using:
 * {
    "class_id": 107,
    "learner_id": 1 
    }
 */
router.post('/', async(req, res) => {
    // const collection = await db.collection('grades');
    const newDocument = req.body;
    console.log(newDocument);

    if (newDocument.student_id) {
        newDocument.learner_id = newDocument.student_id;
        delete newDocument.student_id;
    }

    // const result = await collection.insertOne(newDocument);
    const result = await Grade.create(newDocument);
    res.send(result).status(204);
});

/**
 * GET /student/:id
 * NO need to touch this!
 */
router.get('/student/:id', async (req, res) => {
   res.redirect(`/grades/learner/${req.params.id}`);
});

/**
 * GET /learner/:id
 */
router.get('/learner/:id', async (req, res) => {
    // const collection = await db.collection("grades");
    // const query = {learner_id: Number(req.params.id)};
    // const result = await collection.find(query).toArray();
    const result = await Grade.find({learner_id: req.params.id});

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});


/**
 * GET /class/:id
 */
router.get('/class/:id', async (req, res) => {
    // const collection = await db.collection('grades');
    // const query = {class_id: Number(req.params.id)};
    // const result = await collection.find(query).toArray();
    const result = await Grade.find({class_id: req.params.id})

    if (result.length < 1) res.status(404).send("Not Found");
    else res.send(result).status(200);
});

/**
 * PATCH /:id/scores/add
 */
router.patch('/:id/scores/add', async (req, res) => {
    // find the grade to update
    const grade = await Grade.findOne({_id: req.params.id});
   
    if (!grade) return res.send('Grade not found!')
    // add the new score (req.body) to the scores array
    grade.scores.push(req.body);
    // save doc
    await grade.save();
    res.send(grade);

});

/**
 * DELETE /:id/scores/remove
 */


export default router;
