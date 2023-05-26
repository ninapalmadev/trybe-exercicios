import React from 'react';

class Image extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { source, alternativeText } = this.props;
    return <img src={ source } alt={ alternativeText } />;
  }
}

export default Image;