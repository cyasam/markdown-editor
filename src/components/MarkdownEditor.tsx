import { useState, useEffect } from 'react';
import './MarkdownEditor.css';

import MarkdownInput from './MarkdownInput';
import MarkdownPreview from './MarkdownPreview';
import ThemeSelector from './ThemeSelector';

import exampleData from '../Example.md';

type MarkdownEditorProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

const onChange = (value: string, setChange: Function): void => {
  setChange(value);
};

const MarkdownEditor: React.FunctionComponent<MarkdownEditorProps> = ({
  theme,
  setTheme,
}) => {
  const [markdown, setMarkdown] = useState<string>('');

  useEffect(() => {
    const getExample = async () => {
      const response = await fetch(exampleData);
      const data = await response.text();

      setMarkdown(data);
    };

    getExample();
  }, []);

  return (
    <div className="container">
      <div className="theme-selector">
        <h1>Markdown Editor</h1>
        <ThemeSelector
          checked={theme === 'dark'}
          changeTheme={(nextChecked) =>
            setTheme(nextChecked ? 'dark' : 'light')
          }
        />
      </div>
      <MarkdownInput
        value={markdown}
        onChange={(val) => {
          onChange(val, setMarkdown);
        }}
      />
      <MarkdownPreview markdown={markdown} />
    </div>
  );
};

export default MarkdownEditor;
