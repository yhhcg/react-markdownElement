import React from 'react';
import { hot } from 'react-hot-loader';
import PrismMarked from 'react-prism-marked';

@hot(module)
class Demo extends React.Component {
  render() {
    const raw = preval`
      module.exports = require('fs').readFileSync(require.resolve('./index'), 'utf8')
    `;

    return (
      <PrismMarked
        text={`\`\`\`jsx\n${raw}\n\`\`\``}
      />
    );
  }
}

export default Demo;
