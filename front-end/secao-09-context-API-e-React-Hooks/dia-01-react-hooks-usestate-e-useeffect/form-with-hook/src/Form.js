import { useState } from 'react';

function Form () {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState('');


  return(
    <div>
      <form>
        <label htmlFor="name">Nome: 
          <input 
            type="text" 
            id="name" 
            value={name}
            onChange={({target}) => setName(target.value)}
          />
        </label>

        <label htmlFor="age">Idade: 
          <input 
          type="number" 
          id="age" 
          value={age}
          onChange={({target}) => setAge(target.value)}
          />
        </label>
        
        <label htmlFor="city">Cidade: 
          <input 
          type="text" 
          id="city" 
          value={city}
          onChange={({target}) => setCity(target.value)}
          />
        </label>

        <h2>Modulo: </h2>
        <label htmlFor="fund">
          Fundamentos
          <input 
          type="radio" 
          name="module" 
          id="fund" 
          value="Fundamentos"
          checked={module === 'Fundamentos'}
          onChange={({target}) => setModule(target.value)}
          />
        </label>
        <label htmlFor="front">
          Front-end
          <input 
          type="radio" 
          name="module" 
          id="front" 
          value="Front-end"
          checked={module === 'Front-end'}
          onChange={({target}) => setModule(target.value)}
          />
        </label>
        <label htmlFor="back">
          Back-end
          <input 
          type="radio" 
          name="module" 
          id="back" 
          value="Back-end"
          checked={module === 'Back-end'}
          onChange={({target}) => setModule(target.value)}
          />
        </label>
        <label htmlFor="comp">
          Ciencia da computação
          <input 
          type="radio" 
          name="module" 
          id="comp" 
          value='Ciencia da computação'
          checked={module === 'Ciencia da computação'}
          onChange={({target}) => setModule(target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Form;