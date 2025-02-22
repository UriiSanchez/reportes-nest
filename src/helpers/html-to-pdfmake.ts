import htmlToPdfMake from 'html-to-pdfmake';
import { JSDOM } from 'jsdom';

interface ContentReplacer {
  [key: string]: string;

}

export const getHtmlContent = (html: string, replacers: ContentReplacer = {}) => {
  Object.entries(replacers).forEach(([key, value]) => {
    const key1 = `{{${key}}}`;
    html = html.replaceAll(key1, value);
  })
  const { window } = new JSDOM(html);
  return htmlToPdfMake(html, window);
};