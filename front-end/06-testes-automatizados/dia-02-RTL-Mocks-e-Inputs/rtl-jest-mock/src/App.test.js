// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());
it('fetches a joke quando o botao é clicado', async () => {
  const joke1 = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
};
  global.fetch = jest.fn(async () => ({
      json: async () => joke1
    }));

    render(<App />);
    // const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
    // expect(renderedJoke).toBeInTheDocument();
    expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(1);
});

// TRES FORMAS DE FAZER O MOCK DO FETCH:

// PRIMEIRA
// it('fetches a joke', async () => {
//   const joke = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };

//   jest.spyOn(global, 'fetch');
//   global.fetch.mockResolvedValue({
//     json: jest.fn().mockResolvedValue(joke),
//   });

//   render(<App />);
//   const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
//   expect(renderedJoke).toBeInTheDocument();
//   expect(global.fetch).toHaveBeenCalledTimes(1);
//   expect(global.fetch).toHaveBeenCalledWith(
//     'https://icanhazdadjoke.com/',
//     { headers: { Accept: 'application/json' } },
//   );
// });

// SEGUNDA FORMA DE FAZER MOCK
// it('fetches a joke', async () => {
//   const joke = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };

//    // Outra forma de mock do fetch:
  // global.fetch = jest.fn(() => Promise.resolve({
  //   json: () => Promise.resolve(joke),
  // }));

//   render(<App />);
//   const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
//   expect(renderedJoke).toBeInTheDocument();
//   expect(global.fetch).toHaveBeenCalledTimes(1);
//   expect(global.fetch).toHaveBeenCalledWith(
//     'https://icanhazdadjoke.com/',
//     { headers: { Accept: 'application/json' } },
//   );
// });

// //TERCEIRA FORMA DE FAZER MOCK
// it('fetches a joke', async () => {
//   const joke = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };

//   // Outra forma de mock do fetch:
//   global.fetch = jest.fn(async () => ({
//     json: async () => joke
//   }));

//   render(<App />);
//   const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
//   expect(renderedJoke).toBeInTheDocument();
//   expect(global.fetch).toHaveBeenCalledTimes(1);
//   expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
// });