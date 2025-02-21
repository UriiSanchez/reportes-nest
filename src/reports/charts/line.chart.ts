import * as Utils from '../../helpers/chart-utils';

export const getLineChart = () => {
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
      {
        label: 'Movimiento de inventario',
        data: Utils.numbers({count: 6, min: -100, max: 100}),
        borderColor: Utils.NAMED_COLORS.red,
        // backgroundColor: Utils.CHART_COLORS[0],
        pointStyle: 'circle',
        pointRadius: 10,
        pointHoverRadius: 15,
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
    },
  };

  return Utils.chartJsToImage(config, { width: 500, height: 200 });
};