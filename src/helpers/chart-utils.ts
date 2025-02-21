import axios from 'axios';

interface ChartOptions {
  height?: number;
  width?: number;
}

export const chartJsToImage = async (
  chartConfig: unknown,
  options: ChartOptions = {},
) => {
  const params = new URLSearchParams();

  if (options.height) params.append('height', options.height.toString());
  if (options.width) params.append('width', options.width.toString());

  const encodedUri = encodeURIComponent(JSON.stringify(chartConfig));

  const chartUrl = `https://quickchart.io/chart?c=${encodedUri}&${params.toString()}`;

  const response = await axios.get(chartUrl, { responseType: 'arraybuffer' });

  return `data:image/png;base64,${Buffer.from(response.data).toString('base64')}`;
};

let _seed = Date.now();

export function srand(seed: any) {
  _seed = seed;
}

export function rand(min: number = 0, max: number = 0) {
  _seed = (_seed * 9301 + 49297) % 233280;
  return min + (_seed / 233280) * (max - min);
}

export const CHART_COLORS = [
  '#4dc9f6',
  '#f67019',
  '#f53794',
  '#537bc4',
  '#acc236',
  '#166a8f',
  '#00a950',
  '#727478',
  '#9756cf',
];

export const NAMED_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)',
};


export interface NumbersConfig {
  min?: number;
  max?: number;
  count?: number;
  from?: number;
  decimals?: number;
  continuity?: number;
}

export function numbers(config: NumbersConfig = {}) {
  const cfg = config || {};
  const min: number | null = cfg.min ?? 0;
  const max: number | null = cfg.max ?? 100;
  const from = cfg.from ?? [];
  const count: number | null = cfg.count ?? 8;
  const decimals: number | null = cfg.decimals ?? 8;
  const continuity:number = cfg.continuity ?? 1;
  const dfactor: number | null = Math.pow(10, decimals) || 0;
  let data: number[] | null = [];
  let i: number = 0;
  let value: number = 0;

  for (i = 0; i < count; ++i) {
    value = (from[i] || 0) + rand(min, max);
    if (rand() <= continuity) {
      data.push(Math.round(dfactor * value) / dfactor);
    }
  }

  return data;
}

const MONTHS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

interface MonthsConfig {
  count?: number;
  section?: number;
}

export function months(config: MonthsConfig = {}) {
  const cfg = config ?? {};
  const count = cfg.count ?? 12;
  const section = cfg.section;
  const values:string[] = [];
  let i: number, value: string;

  for (i = 0; i < count; ++i) {
    value = MONTHS[Math.ceil(i) % 12];
    values.push(value.substring(0, section));
  }

  return values;
}
