import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = {
  series: number[];
};

export default function ChartPie({ series }: Props) {
  const chartOptions = useChart({
    labels: ['E-Commerce', 'Saas Products', 'Podcast', 'Influencer'],
    legend: {
      position: 'right',
      offsetX: -20,
      offsetY: 64,
      itemMargin: {
        vertical: 8,
      },
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false,
      },
    },
    tooltip: {
      fillSeriesColor: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
  });

  return (
    <Chart dir="ltr" type="pie" series={series} options={chartOptions} width={400} height="auto" />
  );
}
