
import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify'
import { marked } from 'marked';
import ReactHtmlParser from 'react-html-parser';

interface ConverterProps {
  markdown: string;
}

export const Converter = ({markdown}: ConverterProps) => {
  const html_body = marked.parse(markdown);
  const  {window} = new JSDOM(html_body);
  // @ts-ignore
  const domPurify = DOMPurify(window);

  return (
    <div>
      {ReactHtmlParser(domPurify.sanitize(html_body))}
    </div>
  )
};