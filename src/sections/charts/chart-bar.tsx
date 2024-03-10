import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = {
  series: {
    name: string;
    data: number[];
  }[];
};

export default function ChartBar({ series }: Props) {
  const chartOptions = useChart({
    stroke: { show: false },
    plotOptions: {
      bar: { horizontal: true, barHeight: '30%' },
    },
    yaxis: { labels: { minWidth: 20 } },
    xaxis: {
      title: { text: 'Revenue in $' },
      type: 'category',
      categories: [
        'Italy',
        'Japan',
        'China',
        'Canada',
        'France',
        'Germany',
        'South Korea',
        'Netherlands',
        'United States',
        'United Kingdom',
      ],
    },
  });

  return (
    <Chart
      dir="ltr"
      type="bar"
      series={series} // Removed unnecessary array wrapping
      options={chartOptions}
      width="100%"
      height={320}
    />
  );
}
