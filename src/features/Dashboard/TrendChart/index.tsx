import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const TrendChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        // Create new chart
        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Jan", "Feb", "Mar"],
            datasets: [
              {
                label: "Discovered Defects",
                data: [200, 400, 300, 350, 250, 500, 450, 400, 350, 500],
                borderColor: "#FF84B7",
                backgroundColor: "rgba(255, 132, 183, 0.2)",
                tension: 0.4,
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                mode: "index",
                intersect: false,
              },
            },
            scales: {
              y: {
                min: 100,
                max: 500,
                ticks: {
                  stepSize: 100,
                },
              },
              x: {
                grid: {
                  display: false,
                },
              },
            },
            elements: {
              point: {
                radius: 0,
                hoverRadius: 5,
              },
            },
          },
        });
      }
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};
export default TrendChart;
