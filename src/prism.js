import prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import lightTheme from 'prismjs/themes/prism.css';

export { lightTheme };

let styleNode;

if (process.browser) {
  styleNode = document.createElement('style');
  styleNode.setAttribute('data-prism', 'true');
  if (document.head) {
    document.head.appendChild(styleNode);
  }
}

export function setPrismTheme(theme) {
  styleNode.textContent = theme;
}

export default prism;
