"use client";

import {
  AnimatedAxis,
  AnimatedBarSeries,
  AnimatedGrid,
  buildChartTheme,
  ThemeProvider,
  XYChart,
} from "@visx/xychart";

const data = [
  { x: "php", y: 8 },
  { x: "js", y: 14 },
  { x: "ts", y: 5 },
  { x: "python", y: 1 },
  { x: "openai", y: 1 },
  { x: "laravel", y: 12 },
  { x: "react", y: 9 },
  { x: "nextjs", y: 3 },
  { x: "nodejs", y: 6 },
  { x: "psql", y: 10 },
  { x: "mysql", y: 6 },
  { x: "redis", y: 9 },
  { x: "docker", y: 9 },
  { x: "k8s", y: 1 },
  { x: "aws", y: 9 },
  { x: "elastic", y: 9 },
].sort((a, b) => b.y - a.y);

const accessors = {
  xAccessor: (d: { x: string }) => d.x,
  yAccessor: (d: { y: number }) => d.y,
};

const theme = buildChartTheme({
  backgroundColor: "transparent",
  colors: ["oklch(93.8% 0.127 124.321 / 0.4)"],
  gridColor: "oklch(27.4% 0.072 132.109)",
  gridColorDark: "oklch(27.4% 0.072 132.109)",
  tickLength: 10,
  xAxisLineStyles: {
    stroke: "oklch(53.2% 0.157 131.589)",
  },
  yAxisLineStyles: {
    stroke: "oklch(53.2% 0.157 131.589)",
  },
  xTickLineStyles: {
    stroke: "oklch(53.2% 0.157 131.589)",
  },
  yTickLineStyles: {
    stroke: "oklch(53.2% 0.157 131.589)",
  },
  svgLabelSmall: {
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    fill: "oklch(89.7% 0.196 126.665)",
  },
});

export default function Barchart() {
  return (
    <ThemeProvider theme={theme}>
      <XYChart
        height={480}
        xScale={{ type: "band", padding: 0.2 }}
        yScale={{ type: "linear" }}
        margin={{ top: 20, left: 32, right: 0, bottom: 40 }}
      >
        <AnimatedGrid columns={false} numTicks={5} />
        <AnimatedAxis orientation="left" />
        <AnimatedBarSeries data={data} dataKey="y" {...accessors} />
        <AnimatedAxis orientation="bottom" numTicks={data.length} />
      </XYChart>
    </ThemeProvider>
  );
}
