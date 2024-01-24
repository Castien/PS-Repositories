// Here is the information you have been given:
console.log("================================================================================");
console.log("Plant Growth Control System Experiment");
console.log("================================================================================");

// The area in which the plants are contained is circular, with a radius of 5 meters.
const PI = 3.1415;
const radius = 5;
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
const area = PI * radius * radius;

console.log("The total area of the garden is: " + area + " meters.");

// Each plant requires a minimum space of 0.8 square meters.
const plantArea = 0.8;

// The area is starting with 20 plants.
var plantNum = 20;
console.log("We have " + plantNum + " plants, each taking " + plantArea + " square meters of space.")

let currentPlantArea = plantArea * plantNum;
console.log("The total area of the current plants is: " + currentPlantArea + " meters.");

const maxCapacity = area / plantArea;
const halfCapacity = maxCapacity / 2;
console.log("Maximum capacity is " + maxCapacity + " plants.");

console.log("================================================================================");


// The plants double in number every week.
// Predict the plant growth after a specific number of weeks.
console.log("Calculating predicted plant increase per week: ");
console.log("================================================================================");

// For Loop interating through week until week 3.
for (let week = 1; week <= 3; week++) {
    console.log("=====After Week " + week + ":======");
    plantNum *= 2;
    console.log("The current plant count is : " + plantNum + " out of " + maxCapacity);

    // Just printing the current area used by the current plant count. Probably unneeded.
    let currentPlantArea = plantArea * plantNum;
    console.log("The total area of the current plants is: " + currentPlantArea + " out of " + area);

    console.log("================================================================================");

    // Pruned, to stop them from exceeding the capacity of the garden.
    // This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
    var pruneAt = (area / 100) * 80;
    console.log("Requires pruning when plant count is greater than: " + pruneAt);

    // Monitored, if they are growing at an acceptable rate.
    // This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
    var monitorAt;

    if ((plantNum > halfCapacity) && (plantNum < (maxCapacity / 100) * 80)) {
        monitorAt = true;
    }
    else {
        monitorAt = false;
    }

    console.log("Requires monitoring if the plant count is between 50% (" + halfCapacity + ") and 80% (" + (maxCapacity / 100) * 80 + ") of the maximum capacity: " + monitorAt);

    // Planted, if there is room to plant more plants.
    // This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
    var plantAt = (plantNum < halfCapacity);
    console.log("Requires planting if the plant count after the given number of weeks is less than 50%  (" + halfCapacity + ") of the maximum capacity: " + plantAt);

    console.log("================================================================================");
    // Implement control flow to make decisions on whether the plants should be:
    console.log("=====Week " + week + " Action Plan:=====")

    if (plantNum > pruneAt) {
        // Pruned, to stop them from exceeding the capacity of the garden.
        // This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
        plantNum = pruneAt;
        console.log("Garden was pruned. Current plant count is: " + plantNum + " plants.");
    }
    else if (monitorAt == true) {
        // Monitored, if they are growing at an acceptable rate.
        // This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
        console.log("Garden was monitored.");
    }
    else if (plantAt == true) {
        // Planted, if there is room to plant more plants.
        // This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
        plantNum += 20;
        console.log("Garden was planted. Current plant count is: " + plantNum + " plants.");
    }
    else {
        console.log("No action taken.");
    }
    
    // let x = '0';
    // switch (x) {
    //     case '1':
    //         if (plantNum > pruneAt) {
    //             // Pruned, to stop them from exceeding the capacity of the garden.
    //             // This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
    //             plantNum = pruneAt;
    //             console.log("Garden was pruned. Current plant count is: " + plantNum + " plants.");
    //             break;
    //         }
    //         x++;
    //         continue;

    //     case '2':
    //         if (monitorAt == true) {
    //             // Monitored, if they are growing at an acceptable rate.
    //             // This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
    //             console.log("Garden was monitored.");
    //             break;
    //         }
    //         x++;
    //         continue;
    //     case '3':
    //         if (plantAt == true) {
    //             // Planted, if there is room to plant more plants.
    //             // This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
    //             plantNum += 20;
    //             console.log("Garden was planted. Current plant count is: " + plantNum + " plants.");
    //             break;
    //         }
    //         x++;
    //         continue;
    //     default:
    //         console.log("No action taken.")
    //         break;
    // }
    
    console.log("================================================================================");

    // Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.
}
