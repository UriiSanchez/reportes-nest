import type { TDocumentDefinitions } from 'pdfmake/interfaces';

export const getCommunityReports = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    defaultStyle: {
      fontSize: 10,
    },
    content: [
      {
        // Logo - Dirección - Tabla detalles
        columns: [
          {
            image: 'src/assets/tucan-code-logo.png',
            width: 50,
          },
          {
            alignment: 'center',
            text: `Forest Admin Community SAP \n RUT: 4120.102.20\nCamino montaña KM 16, calle 23\nTeléfono: 772 888 1923`,
          },
          {
            width: 140,
            layout: 'borderBlue',
            alignment: 'right',
            table: {
              body: [
                [
                  {
                    layout: 'noBorders',
                    table: {
                      body: [
                        ['No. Factura:', '123-456'],
                        ['Fecha:', '2025-02-21'],
                        ['Versión:', '2025-01'],
                      ],
                    },
                  },
                ],
              ],
            },
          },
        ],
      },
      // Horizontal Line
      {
        margin: [0, 10],
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 515,
            y2: 5,
            lineWidth: 2,
            lineColor: '#3a4546',
          },
        ],
      },
      // Detalles del cliente
      {
        table: {
          widths: ['auto', '*', 'auto', '*'],
          body: [
            [
              {
                text: 'Datos del client',
                fillColor: '#5775e1',
                color: 'white',
                colSpan: '4',
              }, {}, {}, {},
            ],
            // Razón social
            [
              {
                text: 'Razón social',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: 'Datos de la empresa',
                fillColor: 'white',
              },
              {
                text: 'Dirección',
                fillColor: '#343a40',
                color: 'white',
              },
              {
                text: 'Calle falsa 123',
                fillColor: 'white',
              }
            ],
            [
              {
                text: 'RUT',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: '',
                fillColor: 'white',
              },
              {
                text: 'Teléfono',
                fillColor: '#343a40',
                color: 'white',
              },
              {
                text: '',
                fillColor: 'white',
              }
            ],
            [
              {
                text: 'Giro',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: '',
                fillColor: 'white',
              },
              {
                text: 'Condición de pago',
                fillColor: '#343a40',
                color: 'white',
              },
              {
                text: '',
                fillColor: 'white',
              }
            ],
          ],
        },
      },
    ],
  };
  return docDefinition;
};
