Introduction:

This JavaScript file contains functions to process course-related information, assignment groups, learner submissions, and calculate weighted averages for learners based on their assignment scores.

Course Information:
Course information is stored in `CourseInfo`. It contains an `id` and a `name`.

Assignment Group:
Assignment group data is stored in `AssignmentGroup`. It includes `id`, `name`, `course_id`, `group_weight`, and an array of `assignments` containing `id`, `name`, `due_at`, and `points_possible`.

Learner Submissions:
Learner submission data is stored in `LearnerSubmissions`. It contains `learner_id`, `assignment_id`, `submission` with `submitted_at` and `score`.

Functions:

<getLearnerData(course, ag, submissions)>
Processes the provided course, assignment group, and learner submissions to calculate learners' information and total, weighted average scores for assignments.
- It verifies if the assignment group belongs to the course.
- Iterates through submissions, calculating weighted scores based on assignment and due dates.
- Creates a object with learners' IDs, their total weighted average, and scores for each assignment.

<calcWeightedAverage(submissions, assignments)>
Calculates the weighted average for learners based on their submissions and the associated assignments' information.
- Iterates through submissions and calculates the weighted scores for each assignment.
- Handles scenarios like late submissions, division by zero errors, and assignment not found errors.

Finally:

It uses the data provided to execute `getLearnerData` function and logs the results to the console.
