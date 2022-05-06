import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

import '../assets/light.css';
import '../assets/dark.css';
import './MarkdownPreview.css';

type MarkdownRender = {
  __html: string;
};

type MarkdownPreviewProps = {
  markdown: string;
};

const createMarkdown = (markdown: string) => {
  const md = new MarkdownIt();

  const dom = new DOMParser();
  const document = dom.parseFromString(md.render(markdown), 'text/html');

  const allCodeElements = document.querySelectorAll<HTMLElement>('pre code');

  allCodeElements.forEach((el) => {
    hljs.highlightElement(el);
  });

  return document.body.innerHTML.toString();
};

const onMarkdownRender = (value: string): MarkdownRender => {
  const markdown = createMarkdown(value);

  return { __html: markdown };
};

const MarkdownPreview: React.FunctionComponent<MarkdownPreviewProps> = ({
  markdown,
}) => {
  return (
    <div
      className="preview"
      dangerouslySetInnerHTML={onMarkdownRender(markdown)}
    />
  );
};

export default MarkdownPreview;
