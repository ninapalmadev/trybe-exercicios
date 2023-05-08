import React from "react";
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { userInfo: { name, email, age, obs}, handleChange, validateForm } = this.props;
    return(
      <form>
        <label htmlFor="name">Nome</label>
        <input 
          onChange={ handleChange }
          value = { name }
          type="text" 
          id="name"
          name="name"
          placeholder="Nome completo"
          required 
        />

        <label htmlFor="email">Email:</label>
        <input
          onChange={ handleChange } 
          value = { email }
          type="email" 
          id="email"
          name="email"
          placeholder="nome@servidor.com"
          required 
        />

        <label htmlFor="age">Idade</label>
        <select 
          onChange={ handleChange }
          value = { age }
          name="age" 
          id="age"
        >
          <option value="">Selecione</option>
          <option value="adult">Maior que 18</option>
          <option value="underage">Menor que 18</option>
        </select>

        <label htmlFor="obs">Observação</label>
        <textarea 
          onChange={ handleChange }
          value = { obs }
          id="obs" 
          name="obs"/>
        <button 
        type="submit"
        disabled={ !validateForm() }
        >
          Enviar
        </button>
      </form>
    )
  }  
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  userInfo: PropTypes.object.isRequired,
  validateForm: PropTypes.func.isRequired,
}
export default Form;