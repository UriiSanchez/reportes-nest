import { Content } from 'pdfmake/interfaces';
import { DateFormatter } from 'src/helpers';

const logo: Content = {
  image: 'src/assets/tucan-code-logo.png',
  width: 100,
  height: 100,
  alignment: 'center',
  margin: [0, 0, 0, 20],
};

const currentDate: Content = {
  text: DateFormatter.getDDMMMMYYYY(new Date()),
  alignment: 'right',
  margin: [20, 30],
};

interface HeaderOptions {
  title?: string;
  subTitle?: string;
  showLogo?: boolean;
  showDate?: boolean;
}

export const headerSection = (options: HeaderOptions): Content => {
  const { title, subTitle, showDate = true, showLogo = true } = options;
  const headerLogo: Content = showLogo ? logo : '';
  const headerDate: Content = showDate ? currentDate : '';
  const headerSubTitle: Content = subTitle
    ? {
        text: subTitle,
        alignment: 'center',
        margin: [0, 2, 0, 0],
        style: {
          fontSize: 16,
        },
      }
    : '';

  const headerTitle: Content = title
    ? {
        stack: [
          {
            text: title,
            margin: [0, 15, 0, 0],
            alignment: 'center',
            style: {
              bold: true,
              fontSize: 22,
            },
          },
          headerSubTitle,
        ],
      }
    : '';

  return {
    columns: [headerLogo, headerTitle, headerDate],
  };
};
