import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Initial tasks to seed the database with
const initialTasks = [
    {
        title: "Management Account update",
        project: "Amber North",
        description: "Update the management accounts for the end of March and cretae a forecast for the end of the year.",
        status: "OPEN" as const,
    },
    {
        title: "Reduce all costs",
        project: "OMECU",
        description: "Look at all costs in Omecu and see how any costs can be reduced to zero.",
        status: "OPEN" as const,
    },
    {
        title: "Investment Slide Deck",
        project: "SHARP GA",
        description: "Complete investment slide deck and share this with SE.",
        status: "COMPLETED" as const,
    },
    {
        title: "Data Management",
        project: "PHWL",
        description: "Complete the data management work and then invoice for additional work once done.",
        status: "OPEN" as const,
    },
];

const seed = async () => {
    // Get the start timne and let the user know that the seed is starting
    const startTime = Date.now();
    console.log("Starting the seed...");

    // Delete all existing tasks
    await prisma.task.deleteMany();

    // Insert the initial tasks
    await prisma.task.createMany({
        data: initialTasks,
    });
    
    // Log the time it took to seed the database
    const endTime = Date.now();
    console.log(`Database seeded in ${((endTime - startTime) / 1000).toFixed(2)} seconds`);

  
};

// call the seed function
seed();