import React from 'react';
import PropTypes from 'prop-types';
class Joke extends React.Component {
  render() {
    const { jokeObj, saveJoke } = this.props;

    return (
      <div>
        <p>{jokeObj.joke}</p>
        <button type="button" onClick={saveJoke}>
          Salvar piada!
        </button>
      </div>
    );
  }
}

Joke.propTypes = {
  jokeObj: PropTypes.object.isRequired,
  saveJoke: PropTypes.func.isRequired
}

export default Joke;