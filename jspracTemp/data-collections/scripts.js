// Part 3: Feeling Loopy

// As a final task, solve the following practical problem regarding string processing.
// Context: A CSV file, or “Comma-Separated Values” file is traditionally used to store tabular data. You may be familiar with CSVs through past use of programs such as Microsoft Excel or Google Sheets. While each of these programs save their data in different formats to preserve style (e.g., font color or cell backgrounds), at their core, they are storing CSV data.
// CSV data looks like this:
// ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
// Not very nice to look at. The “\n” is an escaped Line Feed, which indicates that the following data should begin on a new line:
// As you may have guessed, these values being “comma-separated” means that each comma is also a delimiter. 
// This is why this type of data is traditionally viewed in tables.

// Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.

// const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26/n";

// // Store each “cell” of data in a variable.
// // When you encounter a comma, move to the next cell.
// // When you encounter the “\r\n” sequence, move to the next “row.”

// let currentCell = 1
// let cell1 = '';
// let cell2 = '';
// let cell3 = '';
// let cell4 = '';

// // Log each row of data.
// // You do not need to format the data, the following works well.
// // console.log(cell1, cell2, cell3, cell4);
// // You can make the following assumptions:
// // There will only be 4 cells per row.
// // There will be no escaped characters other than “\n”.

// for (let i = 0; i < csv.length; i++) {
//     if (csv[i] === ",") {
//         currentcell++
//     } else if (csv[i] === "\n") {
//         console.log(cell1, cell2, cell3, cell4);
//         currentCell = 1;
//         cell1 = '';
//         cell2 = '';
//         cell3 = '';
//         cell4 = '';

//     } else {
//         if (currentCell === 1) {
//         }
//     }
// }

// Use the example string provided above to test your program. Once you are confident it is working correctly, try the following string to see if your program works properly with other data.
// Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232

//-------------------------------------------------------------------------------------

//Part 1: Refactoring Old Code
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.

const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
console.log(csv);

//splitting up into rows from line separator
let csvRows = csv.split(`\n`);
// console.log(csvRows);

//declaring array
let csvArray = [];

//for loops to split up data into columns of array per row by comma
for (let row of csvRows) {
    let rowArray = row.split(`,`);
    csvArray.push(rowArray);
}
    // console.log(rowArray);
    // console.log("==============");
    console.log(csvArray);

//Part 2: Expanding Functionality

// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns.
// This should be calculated dynamically based on the first row of data.
// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.

let csvRowNum = 0;
let rowsLength = csvArray.length;
//should print 5 for this example
console.log(rowsLength);


csvRows.forEach((row, i) => {
	csvRowNum++;
    // console.log(i);
    if (i == rowsLength) {
        console.log(csvRowNum);
    }
});

// Part 3: Transforming Data

// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

//take the first row of csvArray and convert it into key for key/value pair
//assign to columns
//https://stackoverflow.com/questions/66982431/convert-a-2d-array-with-first-rows-a-headers-to-object-javascript

//Separate Keys and Values into different variables
const [keysCSV, ...valuesCSV] = csvArray;

//Loop through the values list
const result = valuesCSV.map (values => {
  let obj = {};

  //Since each element in values list is a list again
  //loop through the list and add them to the `obj` object
  values.forEach((val, i) => {
    obj[keysCSV[i]] = val
  });

  //return the object
  return obj;
});

console.log(result);


// Part 4: Sorting and Manipulating Data

// It is important to know how to work with data in this format, an array of objects, as it is one of the most commonly used data formats in JavaScript.
// Using array methods, accomplish the following tasks, in order upon the result of Part 3:

let csvArray2 = csvArray;
console.log(csvArray2);

//Separate Keys and Values into different variables
const [keysCSV2, ...valuesCSV2] = csvArray2;

//Loop through the values list
const result2 = valuesCSV2.map (values => {
  let obj = {};

  //Since each element in values list is a list again
  //loop through the list and add them to the `obj` object
  values.forEach((val, i) => {
    obj[keysCSV2[i]] = val
  });

  //return the object
  return obj;
});

console.log(result2);

let csvObj2Array = result2;
console.log(csvObj2Array);
// Remove the last element from the sorted array.
csvObj2Array.pop(5);

// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
csvObj2Array.splice(2, 0, { ID: "48", Name: "Barry", Occupation: "Runner", Age: "25" });

// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
csvObj2Array.push({ ID: "7", Name: "Bilbo", Occupation: "None", Age: "111" });

// Part 5: Full Circle
// As a final task, transform the final set of data back into CSV format.

//https://dev.to/samueldjones/convert-an-array-of-objects-to-csv-string-in-javascript-337d

const csvString = [
    ["ID", "Name", "Occupation", "Age"],
    ...csvObj2Array.map(item => [
      item.ID,
      item.Name,
      item.Occupation,
      item.Age
    ])
  ]
   .map(e => e.join(",")) 
   .join("\n");

console.log(csvString);