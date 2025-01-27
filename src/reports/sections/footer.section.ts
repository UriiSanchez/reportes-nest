import { Content } from 'pdfmake/interfaces';

export const footerSection = (
  currentPage: number,
  pageCount: number,
): Content => {
  return {
    text: `Page ${currentPage.toString()} of ${pageCount}`,
    alignment: 'right',
    margin: [0, 10, 40, 0],
    bold: true,
	 fontSize:10
  };
};
