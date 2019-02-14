import React from 'react';
import { hot } from 'react-hot-loader';
import Markdown from 'react-prism-marked';
import 'react-prism-marked/markdown.css';

@hot(module)
class Demo extends React.Component {
  render() {
    const propsTable = `| Name | Type | Default | Description |
      |:--|:--|:--|:--|
      | className | string | |  |
      | text | string | | Markdown content. |
    `;

    const raw = preval`
      module.exports = require('fs').readFileSync(require.resolve('./index'), 'utf8')
    `;
    
    return (
      <Markdown
        text={`## Props\n${propsTable}\n## Demo Source\n\`\`\`jsx\n${raw}\n\`\`\``}
      />
    );
  }
}

export default Demo;
