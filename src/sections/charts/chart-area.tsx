import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

type Props = {
  series: {
    name: string;
    data: number[];
  }[];
};
function getDatesInMonth(year: number, month: number) {
  const dates = [];
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0); // Get the last day of the month

  for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
    const formattedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    dates.push(formattedDate.toISOString());
  }

  return dates;
}
export default function ChartArea({ series }: Props) {


  const chartOptions = useChart({
    xaxis: {
      type: 'datetime',
      categories: getDatesInMonth(2024, 1),
      tickAmount: 10, // Set the number of ticks
    },
    tooltip: {
      x: {
        format: 'dd',
      },
    },
  });

  return (
    <Chart dir="ltr" type="area" series={series} options={chartOptions} width="100%" height={320} />
  );
}
