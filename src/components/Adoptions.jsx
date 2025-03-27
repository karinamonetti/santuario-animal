// import React from 'react';
// import AdoptionsSection from '../components/Adoptions'; // si lo hiciste como componente separado

// const Adoptions = () => <AdoptionsSection />;

// export default Adoptions;



// // src/components/Adoptions.jsx
// import React from 'react';

// const Adoptions = () => {
//   return (
//     <section className="adopciones">
//       <h1>Adopta a nuestros rescatados</h1>
//       <p className="texto-adoociones">
//         Como en Refugio Animal creemos que todos merecen una segunda oportunidad,
//         <br /> te invitamos a conocer los perfiles de los candidatos a ser el próximo miembro de tu familia.
//       </p>

//       <div className="contenedor-card">
//         <div className="container">
//           <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 borde-cartas">
//             {[
//               {
//                 nombre: 'Sparkles',
//                 descripcion: 'Perrito de raza Beagle, tiene 6 años, muy sociable.',
//                 img: '/assets/fotos-perros/perrocomiendo.jfif',
//               },
//               {
//                 nombre: 'Paca',
//                 descripcion: 'Mestiza de 9 años, super tranquila, le gusta mucho tomar sol.',
//                 img: '/assets/fotos-perros/perro3.jpg',
//               },
//               {
//                 nombre: 'Ariel',
//                 descripcion: 'Cachorro sagueso, tiene 6 meses, muy juguetón.',
//                 img: '/assets/fotos-perros/perro4.jpg',
//               },
//               {
//                 nombre: 'Bestia',
//                 descripcion: 'Mestizo de 9 años, súper obediente y con modales.',
//                 img: '/assets/fotos-perros/perrofumado.jpg',
//               },
//               {
//                 nombre: 'Norris',
//                 descripcion: 'Caniche de 6 años, le gusta salir a pasear, muy sociable.',
//                 img: '/assets/fotos-perros/perroooo.jfif',
//               },
//               {
//                 nombre: 'Kona',
//                 descripcion: 'Border collie, rescatada de un criadero. Ama las zanahorias.',
//                 img: '/assets/fotos-perros/perrobotella.jpg',
//               },
//               {
//                 nombre: 'Ciro',
//                 descripcion: 'Cachorro mestizo de 3 meses, aún no en adopción pero podés conocerlo.',
//                 img: '/assets/fotos-perros/perro555.jpg',
//               },
//               {
//                 nombre: 'Bubba',
//                 descripcion: 'Mestiza de 9 años, muy sociable y le encanta correr palomas.',
//                 img: '/assets/fotos-perros/perro1.jpg.webp',
//               },
//             ].map((perro, index) => (
//               <div className="col" key={index}>
//                 <div className="card borde-cartas" style={{ width: '18rem' }}>
//                   <img src={perro.img} className="card-img-top imagen-card" alt={perro.nombre} />
//                   <div className="card-body">
//                     <h3 className="card-title tit-carta">{perro.nombre}</h3>
//                     <p className="card-text texto-carta">{perro.descripcion}</p>
//                     <a href="#" className="btn btn-primary boton-carta">
//                       Adoptar
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Adoptions;
