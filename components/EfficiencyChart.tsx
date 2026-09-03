"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

type EfficiencyData = {
  name: string;
  value: number;
};

type EfficiencyChartProps = {
  data: EfficiencyData[];
};

export default function EfficiencyChart({ data }: EfficiencyChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="relative h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={90}
            paddingAngle={3}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  index === 0 ? "#10b981" : index === 1 ? "#f59e0b" : "#ef4444"
                }
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
              backgroundColor: "#ffffff",
              fontSize: "12px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Center Value */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-slate-900 dark:text-white">
          {total}
        </span>

        <span className="text-[10px] font-medium text-slate-400">
          Total Products
        </span>
      </div>
    </div>
  );
}
