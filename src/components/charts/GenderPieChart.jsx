"use client"

import { LabelList, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export function GenderPieChart({ userData = [] }) {
  // Process user data to count genders
  const processGenderData = () => {
    if (!userData || !userData.length) {
      return [];
    }

    // Count different genders
    const genderCounts = userData.reduce((acc, user) => {
      const gender = user.gender || "Unknown";
      acc[gender] = (acc[gender] || 0) + 1;
      return acc;
    }, {});

    // Convert to array format for chart with colors
    return Object.entries(genderCounts).map(([gender, count], index) => {
      const genderKey = gender.toLowerCase();
      return {
        gender: genderKey,
        count: count,
        fill: `var(--color-${genderKey})`
      };
    });
  };

  const genderData = processGenderData();
  const totalUsers = userData ? userData.length : 0;

  // Generate chart config dynamically based on available genders
  const generateChartConfig = () => {
    const baseConfig = {
      count: {
        label: "Users",
      }
    };

    // Add config for each gender type found
    genderData.forEach((item) => {
      const index = genderData.indexOf(item) + 1;
      baseConfig[item.gender] = {
        label: item.gender.charAt(0).toUpperCase() + item.gender.slice(1),
        color: `hsl(var(--chart-${index}))`
      };
    });

    return baseConfig;
  };

  const chartConfig = generateChartConfig();

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Gender Distribution</CardTitle>
        <CardDescription>Current registered users</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="count" hideLabel />}
            />
            <Pie data={genderData} dataKey="count" nameKey="gender">
              <LabelList
                dataKey="gender"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="text-sm text-center text-muted-foreground">
        Based on {totalUsers} registered users
      </CardFooter>
    </Card>
  )
}