import React from 'react';
import { hot } from 'react-hot-loader';
import PrismMarked from 'react-prism-marked';

const code = `
\`\`\`jsx
import React from 'react';

class Demo extends React.PureComponent {
  render() {
    return 'demo';
  }
}

export default Demo;
\`\`\`
`;

@hot(module)
class Demo extends React.Component {
  render() {
    return (
      <PrismMarked text={code} />
    );
  }
}

export default Demo;
