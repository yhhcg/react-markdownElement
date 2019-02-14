import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import marked from 'marked';
import { default as prism, lightTheme, setPrismTheme } from './prism';

setPrismTheme(lightTheme);

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

function Markdown(props) {
  const { className, text, ...other } = props;

  return (
    <div
      className={classNames('markdown-body', className)}
      dangerouslySetInnerHTML={{ __html: marked(text, markedOptions) }}
      {...other}
    />
  );
}

Markdown.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default Markdown;


