export type Project = "AMBER NORTH" | "OMECU" | "SHARP GA" | "PHWL"

export interface Task {
    id: string;
    title: string;
    project: Project;
    description: string;
    completed: boolean;
}

export const initialTasks: Task[] = [
    {
        id: "1",
        title: "Management Account update",
        project: "AMBER NORTH",
        description: "Update the management accounts for the end of March and cretae a forecast for the end of the year.",
        completed: false,
    },
    {
        id: "2",  
        title: "Reduce all costs",
        project: "OMECU",
        description: "Look at all costs in Omecu and see how any costs can be reduced to zero.",
        completed: false,
    },
    {
        id: "3",
        title: "Investment Slide Deck",
        project: "SHARP GA",
        description: "Complete investment slide deck and share this with SE.",
        completed: true,
    },
    {
        id: "4",
        title: "Data Management",
        project: "PHWL",
        description: "Complete the data management work and then invoice for additional work once done.",
        completed: false,
    },
];