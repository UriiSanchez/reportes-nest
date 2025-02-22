import fs from 'fs';
import { Injectable } from '@nestjs/common';
import { PrinterService } from '../printer/printer.service';

import { getHtmlContent } from '../helpers';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from '../reports/sections/header.section';
import { footerSection } from '../reports/sections/footer.section';
import { getCommunityReports } from '../reports';

@Injectable()
export class ExtraReportsService {
  constructor(private readonly printService: PrinterService) {
  }

  getHtmlReport() {
    const html = fs.readFileSync('src/reports/html/basic-03.html', 'utf8');
    const content = getHtmlContent(html, {
      client: 'Antonio Sanchez'
    });
    const docDefinition: TDocumentDefinitions = {
      pageMargins: [40, 110, 40, 60],
      header: headerSection({
        title: 'HTML to PDFMake',
        subTitle: 'Convertir HTML a PDFMake',
      }),
      footer: footerSection,
      content: content,
    };
    return this.printService.createPdf(docDefinition);
  }

  getCommunityReport() {
    const docDefinition = getCommunityReports();
    return this.printService.createPdf(docDefinition);
  }

  getCustomSize() {
    return this.printService.createPdf({
      // pageSize: 'TABLOID',
      pageSize: {
        width: 150,
        height: 300
      },
      content: [
        {
          qr: 'https://devtalles.com',
          fit: 100,
          alignment: 'center'
        },
        {
          text: 'Reporte con tamaño',
          fontSize: 10,
          alignment: 'center',
          margin: [0, 20]
        }
      ]
    });
  }
}
