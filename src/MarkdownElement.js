import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import marked from 'marked';
import prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';

const markedOptions = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight(code, lang) {
    let language;
    switch (lang) {
      case 'css':
        language = prism.languages.css;
        break;

      case 'js':
      case 'jsx':
      default:
        language = prism.languages.jsx;
        break;
    }

    return prism.highlight(code, language);
  },
  renderer: new marked.Renderer(),
};

function MarkdownElement(props) {
  const { className, text, ...other } = props;

  return (
    <div
      className={classNames('markdown-body', className)}
      dangerouslySetInnerHTML={{ __html: marked(text, markedOptions) }}
      {...other}
    />
  );
}

MarkdownElement.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default MarkdownElement;
