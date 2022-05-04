import { useThemeSelector } from './utils';
import MarkdownEditor from './components/MarkdownEditor';

import './styles.css';

export default function App() {
  const [theme, setTheme] = useThemeSelector();

  return (
    <div className="app" data-theme={theme}>
      <MarkdownEditor theme={theme} setTheme={setTheme} />
    </div>
  );
}
