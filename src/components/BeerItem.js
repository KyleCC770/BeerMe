// import React from 'react';

// function RenderBeer({ beer }) {
//   return (
//     <div class="card mb-4">
//       <div class="embed-responsive">
//         <img class="card-img-top embed-responsive-item" src={beer.labels.contentAwareMedium} />
//       </div>
//       <div class="card-block">
//         <h4 class="card-title">{beer.name}</h4>
//         <p class="card-text">{beer.style.description}</p>
//       </div>
//     </div>
//   );
// }

// function BeerItem(props) {
//   const list = props.data.map((beer) => {
//     return (
//       <div key={beer.id}>
//         <RenderBeer beer={beer} />
//       </div>
//     );
//   });
//   console.log('heres props:' + props.data);
//   // return <div>{list}</div>;
//   return <div></div>;
// }

// export default BeerItem;

import React from 'react';

const BeerItem = ({ item }) => {
  console.log('heres props:' + item);
  return (
    <div>
      <p>{item.name}</p>
      {/* <p>{item.style.name}</p> */}
    </div>
  );
};

export default BeerItem;
