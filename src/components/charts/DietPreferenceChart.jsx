"use client";

import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function DietPreferenceChart({ userData = [] }) {
  // Process user data to count dietary preferences
  const processDietData = () => {
    if (!userData || !userData.length) {
      return [];
    }
  
    const dietCounts = userData.reduce((acc, user) => {
      const preference = user.dietaryPreference || "Unknown";
      acc[preference] = (acc[preference] || 0) + 1;
      return acc;
    }, {});
  
    return Object.entries(dietCounts).map(([preference, count], index) => {
      const prefKey = preference.toLowerCase().replace(/\s+/g, "-");
      return {
        preference: prefKey,
        count: count,
        fill: `var(--color-${prefKey})`,
      };
    });
  };

  const dietData = processDietData();
  const totalUsers = userData.length;

  const generateChartConfig = () => {
    const baseConfig = {
      count: {
        label: "Users",
      }
    };

    dietData.forEach((item, index) => {
      baseConfig[item.preference] = {
        label: item.preference,
        color: `hsl(var(--chart-${index + 1}))`,
      };
    });

    return baseConfig;
  };

  const chartConfig = generateChartConfig();

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Diet Preferences</CardTitle>
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
            <Pie data={dietData} dataKey="count" nameKey="preference">
              <LabelList
                dataKey="preference"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value) =>
                  chartConfig[value]?.label || value
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
  );
}
