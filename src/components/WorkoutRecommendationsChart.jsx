"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Function to generate data for the last 7 days
const getLast7DaysData = (workouts) => {
  const last7Days = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    date.setHours(0, 0, 0, 0);
    last7Days.push(date.toISOString().split('T')[0]);
  }

  const workoutsByDate = workouts.reduce((acc, workout) => {
    const date = new Date(workout.createdAt).toISOString().split('T')[0];
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  return last7Days.map(date => ({
    date,
    count: workoutsByDate[date] || 0
  }));
};

// Function to format date for display
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getDate()}/${date.getMonth() + 1}`;
};

const chartConfig = {
  count: {
    label: "Workout Plans",
    color: "hsl(var(--chart-2))",
  },
};

export default function WorkoutRecommendationsChart({ workoutData = [] }) {
  const processedData = getLast7DaysData(workoutData);
  const totalWorkouts = processedData.reduce((sum, day) => sum + day.count, 0);

  const calculateGrowth = () => {
    const today = processedData[6].count;
    const previousDaysSum = processedData.slice(0, 6).reduce((sum, day) => sum + day.count, 0);
    const previousDaysAvg = previousDaysSum / 6 || 0;

    if (previousDaysAvg === 0) return today > 0 ? 100 : 0;

    return ((today - previousDaysAvg) / previousDaysAvg * 100).toFixed(1);
  };

  const growthPercentage = calculateGrowth();
  const isTrendingUp = growthPercentage >= 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Workout Plans Generated</CardTitle>
        <CardDescription>Last 7 days activity</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={processedData} margin={{ top: 20 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={formatDate}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="count" fill="var(--color-count)" radius={8}>
              <LabelList dataKey="count" position="top" offset={12} className="fill-foreground" fontSize={12} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {isTrendingUp ? `Trending up by ${growthPercentage}% compared to average` : 
                         `Trending down by ${Math.abs(growthPercentage)}% compared to average`}
          <TrendingUp className={`h-4 w-4 ${!isTrendingUp ? 'transform rotate-180' : ''}`} />
        </div>
        <div className="leading-none text-muted-foreground">
          {totalWorkouts} total workout plans generated in the last 7 days
        </div>
      </CardFooter>
    </Card>
  );
}
