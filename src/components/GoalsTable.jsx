import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,   
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash, Utensils, Dumbbell } from "lucide-react";
import Link from "next/link";
import React from "react";

function GoalsTable({ setGoals, goals }) {
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this goal?")) {
      try {
        const response = await fetch(
          `http://localhost:9090/api/fitnessGoals/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to delete goal: ${response.statusText}`);
        }

        setGoals(goals.filter((goal) => goal.goalId !== id));

        alert("Fitness goal deleted successfully");
      } catch (err) {
        console.error("Error deleting goal:", err);
        alert("Error deleting goal: " + err.message);
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableCaption className="mt-4 text-gray-500">
          A list of your current fitness goals.
        </TableCaption>
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead className="w-[80px] text-center">Goal ID</TableHead>
            <TableHead className="text-center">Goal Type</TableHead>
            <TableHead className="text-center">Target Weight</TableHead>
            <TableHead className="text-center">Target Body Fat</TableHead>
            <TableHead className="text-center">Start Date</TableHead>
            <TableHead className="text-center">Target Date</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {goals.map((goal) => (
            <TableRow
              key={goal?.goalId}
              className="hover:bg-gray-50 transition-colors"
            >
              <TableCell className="font-medium text-center">
                {goal?.goalId}
              </TableCell>
              <TableCell className="font-medium text-blue-600 text-center">
                <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                  {goal.goalType}
                </span>
              </TableCell>
              <TableCell className="text-center">
                {goal.targetWeight} kg
              </TableCell>
              <TableCell className="text-center">
                {goal.targetBodyFat}%
              </TableCell>
              <TableCell className="text-center">{goal.startDate}</TableCell>
              <TableCell className="text-center">{goal.targetDate}</TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => handleDelete(goal.goalId)}
                    className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium rounded-md border border-gray-200 text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash className="h-4 w-4 mr-1" />
                    Delete
                  </button>
                  <Link
                    href={`/meals/generate?userId=${goal.userId}&goalId=${goal.goalId}`}
                    className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium rounded-md border border-gray-200 text-green-500 hover:text-green-700 hover:bg-green-50"
                  >
                    <Utensils className="h-4 w-4 mr-1" />
                    Meals
                  </Link>
                  <Link
                    href={`/workouts/generate?userId=${goal.userId}&goalId=${goal.goalId}`}
                    className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium rounded-md border border-gray-200 text-purple-500 hover:text-purple-700 hover:bg-purple-50"
                  >
                    <Dumbbell className="h-4 w-4 mr-1" />
                    Workout
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default GoalsTable;
