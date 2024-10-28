import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useCovidData } from '../../../helpers/useChartData';
import { Box } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = ({location}:{location:string|null}) => {
    const chartData = useCovidData({location})

  const data = {
    labels: ["Total Cases", "Recovered","Death"],
    datasets: [
      {
        data: chartData,
        backgroundColor: [
          '#3279b5',
          '#eead4e',
          '#da524f'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box width={'450px'}>
        <Pie data={data} />
    </Box>
  )
}
