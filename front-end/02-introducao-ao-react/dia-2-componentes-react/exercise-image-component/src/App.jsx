// import React from 'react';
import Image from './Image';
import staringCat from './staringCat.jpg';

function App() {

  return (
    <>
       <Image source={ staringCat } alternativeText="Cute cat staring"/>
    </>
  )
}

export default App

// opção alternativa
// import React from 'react';
// import Image from './Image';

// function App() {
//   const URL = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
//   return (
//     <main>
//       <Image source={ URL } alternativeText="Cute cat staring" />
//     </main>
//   );
// }

// export default App;
