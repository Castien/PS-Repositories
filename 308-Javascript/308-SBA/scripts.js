// copy of scripts.js before I attempt to make changes

// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};

// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];

// function getLearnerData(course, ag, submissions) {
//   // here, we would process this data to achieve the desired result.
//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
//   ];
// }

// This function will calculate the weighted average
// the learner’s total, weighted average "avg": number from the "getLearnerData" function above
// assignments with more points_possible should be counted for more
// e.g. a learner with 50/100 on one assignment and 
// 190/200 on another would have a weighted average score of 240/300 = 80%.


// Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission])

function getLearnerData(course, ag, submissions) {

    // If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error, letting the user know that the input was invalid. Similar data validation should occur elsewhere within the program.

    if (ag.course_id !== course.id) {
        throw new Error("Invalid input: Assignment group doesn't match course id.");
    }

    // all assignments from AssignmentGroup

    const assignments = ag.assignments;

    // initialize variable as an object that stores information about learners.
    // this creates the list of students and prevents duplicates

    const learners = {};

    // for loop to print all the students return info
    // for each submission in LearnerSubmissions

    //Error "Jump target cannot cross function boundary"? :
    submissions.forEach(submission => {

        // id is the key - checks if a learner"s info is among those stored in "learners" object

        if (learners[submission.learner_id]) {

            // Continue if id is found
            console.log("Found Learner ID");
            continue;
        }

        //Fix for error causes more problems...
        //   for (const submission of submissions) {
        //     // id is the key - checks if a learner's info is among those stored in the "learners" object
        //     if (learners[submission.learner_id]) {
        //         // Continue if id is found
        //         continue;
        //     }

        //     Code inside the loop
        // }


        //if this learner is not already in the array
        else if (!learners[submission.learner_id]) {

            // add the learner to the learner object, initializing default values
            learners[submission.learner_id] = {
                id: submission.learner_id,
                totalScore: 0,
                totalPossible: 0,
                scores: {}
            };
        }

        // takes learner"s data (if it exists) from the "learners" object 
        // using learner_id of the current submission.
        const learner = learners[submission.learner_id];

        // finds the assignment for current submission"s assignment_id in the assignments array.
        const assignment = assignments.find(assignment => assignment.id === submission.assignment_id);

        // if the assignment associated with the current submission exists.

        if (assignment) {

            // similar process to calculateWeightedAverage, calculating for individual learners:
            // checks if the submission is late by comparing the submission"s date to the assignment"s due date.

            const lateSubmission = new Date(submission.submission.submitted_at) > new Date(assignment.due_at);

            // points_possible must be at least 1 to avoid division by zero
            try {
                let pointsPossible;
                if (assignment.points_possible === 0) {
                    pointsPossible = 1;
                } else {
                    pointsPossible = assignment.points_possible;
                }
            } catch (error) {
                // Handle division by zero errors
                console.error("Division by zero error");
            }



            // Calculates the points with late submission - deducting 10% if late.
            // late points are at least zero to prevent negative values.

            const latePoints = lateSubmission ? Math.max(0, assignment.points_possible - (assignment.points_possible * 0.1)) : assignment.points_possible;

            // Adds to learner data:
            // calculating the weighted score for the assignment

            learner.totalScore += (submission.submission.score / pointsPossible) * latePoints;

            // adds the late points to total possible points

            learner.totalPossible += latePoints;

            // saves percentage score ot learner "scores" of the assignment if not late

            if (!lateSubmission) {
                learner.scores[assignment.id] = submission.submission.score / pointsPossible;
            }
        }
    });

    // returns an array containing the values from the learners object
    // iterates through the objects in the array.

    const result = Object.values(learners).map(learner => {

        // calculates the average score for current learner, same as calculateWeightedAverage
        let avg;
        if (learner.totalPossible === 0) {
            avg = 0;
        } else {
            avg = learner.totalScore / learner.totalPossible;
        }

        // gets the assignment ID key from the learner.scores
        // makes a new "scores" object with keys/value pairs of current learner
        // consolidates all assignment IDs and their scores for the current learner 
        // returns an array of objects

        const scores = Object.keys(learner.scores).reduce((consolidate, assignmentId) => {
            consolidate[assignmentId] = learner.scores[assignmentId];
            return consolidate;
        }, {});

        // returns the formatted result, which should be an array of objects.

        return {

            // the ID of the learner for which this data has been collected - "id": number,
            // (this needs nothing else except data)

            id: learner.id,

            // the learner’s total, weighted average, - "avg": number
            //we need to calculate the weighted average on another function - "calculateWeightedAverage function"

            avg: avg,

            // each assignment should have a key with its ID, and the value associated with it should be the percentage that
            // the learner scored on the assignment (submission.score / points_possible) - <assignment_id>: number
            // (assigning the full list of key/values to the variable "scores")

            ...scores
        };
    });

    return result;

}

function calcWeightedAverage(submissions, assignments) {
    let totalScore = 0;
    let totalPossiblePts = 0;

    // totalScore is current score for the course
    // earned score for submission / total possible points for that assignment

    //for each assignment submission in [LearnerSubmissions]
    submissions.forEach(submission => {
        try {
            // compare the ID of the submitted assignment to the assignment in AssignmentGroup
            // if they are the same ID, it assigns it to the variable "assignment"

            const assignment = assignments.find(assignment => assignment.id === submission.assignment_id);
            if (!assignment) {
                throw new Error("Assignment not found.");
            }
            // if it found the assignment and assigned it to the variable successfully

            else if (assignment) {

                // it will check if the assignment is late by comparing the submission and due dates
                // // if an assignment is not yet due, it should not be included 
                // in either the average or the keyed dictionary of scores

                // creating late variable to verify dates

                let lateSubmission = false;

                try {

                    // getting the submitted date and assigning to variable

                    const submittedDate = new Date(submission.submission.submitted_at);

                    // getting the due date and assigning to variable

                    const dueDate = new Date(assignment.due_at);

                    // if the date submitted is after the due date, it"s late
                    if (submittedDate > dueDate) {
                        lateSubmission = true;
                    }

                    // else it"s on time and nothing happens
                    else {
                        lateSubmission = false;
                    }
                } catch (ConversionError) {

                    // Handle date conversion errors

                    console.ConversionError("Date conversion error");
                }
                try {
                    // You should also account for potential errors in the data that your program receives. 
                    // What if points_possible is 0? You cannot divide by zero. 
                    // What if a value that you are expecting to be a number is instead a string?

                    let pointsPossible;

                    // if the points possible on the assignment is 0, assign 1 to that pointsPossible variable

                    if (assignment.points_possible === 0) {
                        pointsPossible = 1;
                    }

                    // else the assignment"s possible points are equal to whatever was inputted

                    else {
                        pointsPossible = assignment.points_possible;
                    }
                } catch (DivideByZeroError) {

                    // Handle division by zero errors

                    console.error("Division by zero error");
                }

                // Additionally, if the learner’s submission is late (submitted_at is past due_at), 
                // deduct 10 percent of the total points possible from their score for that assignment.

                let latePoints;

                // if lateSubmission from above is true:

                if (lateSubmission) {

                    // we calculate the amount of late points of the possible points - 10% = 0.1

                    const lateValue = assignment.points_possible - (assignment.points_possible * 0.1);

                    // nested if statement - if the number is negative then there"s no late points added
                    // if your score is less than 0, you failed anyway.

                    if (latePoints < 0) {
                        latePoints = 0;
                    }

                    // nested else statement - else the lateValue calculated is the amount of latePoints

                    else {
                        latePoints = lateValue;
                    }
                }

                // else there"s no late points and the score is normal

                else {

                    latePoints = assignment.points_possible;
                }

                // calculating the amount of possible latePoints we"re subtracting
                // from the score to get the assignment late points
                // then calculating the total possible after subtracting late points
                // will result in the totalScore / totalPossiblePts for the late assignment

                totalScore += (submission.submission.score / pointsPossible) * latePoints;
                totalPossiblePts += latePoints;
            }

        } catch (AssignmentError) {

            // Handle assignment not found errors

            console.AssignmentError("Assignment not found");
        }
    });

    // waaaaaaaay down here we finally are going to calculate the avg 
    // that will be returned by "getLearnerData" function

    let avg = 0;

    if (totalPossiblePts === 0) {
        avg = 0;
    } else {
        avg = totalScore / totalPossiblePts;
    }

    return totalPossiblePts;
    // end of calculateWeightedAverage
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
