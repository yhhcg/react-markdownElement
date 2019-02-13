import React from 'react';
import { hot } from 'react-hot-loader';
import demo from 'react-prism-marked';

/**
 * Export a form call api with post method
 */
@hot(module)
class Demo extends React.Component {
  text = demo();

  /**
   * Render Something.
   * @return {Node}
   */
  render() {
    return <div>{this.text}</div>;
  }
}

export default Demo;
