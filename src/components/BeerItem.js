// import React from 'react';

// function RenderBeer({ item }) {
//   return (
//     <div class="card mb-4">
//       <div class="embed-responsive">
//         <img class="card-img-top embed-responsive-item" src={beer.labels.contentAwareMedium} />
//       </div>
//       <div class="card-block">
//         <h4 class="card-title">{item.name}</h4>
//         <p class="card-text">{item.style.description}</p>
//       </div>
//     </div>
//   );
// }

// function BeerItem(props) {
//   const list = props.data.map((item) => {
//     return (
//       <div key={item.id}>
//         <RenderBeer item={item} />
//       </div>
//     );
//   });
//   console.log('heres props:' + props.data);
//   return <div>{list}</div>;
//   // return <div></div>;
// }

// export default BeerItem;

import React from 'react';

const BeerItem = ({ item }) => {
  // console.log('heres props:' + item);
  // console.log(item.style)
  console.log(item.name)
  console.log(item.labels)


  if(item.style){

    if(item.labels) {

    console.log('heres label: ' + item.labels.icon)
    return (
    // <div>
    //   <p>{item.name}</p>
    //   <p>{item.style.shortName}</p>
    // </div>
    <div className="card mb-4">
       <div className="embed-responsive">
         <img src={item.labels.medium} />
     </div>
     <div className="card-block">
         <h4 className="card-title">{item.name}</h4>
         <p className="card-text">{item.style.shortName}</p>
       </div>
     </div>
  );
    } else {
      return (
        <div class="card mb-4">
       <div class="embed-responsive">
         {/* <img class="card-img-top embed-responsive-item" src={item.labels.icon} /> */}
     </div>
     <div class="card-block">
         <h4 class="card-title">{item.name}</h4>
         <p class="card-text">{item.style.shortName}</p>
       </div>
     </div>
      )

    }
  } else {
    return (
      <div>
      <p>{item.name}</p>
      <p>style undefined</p>
      </div>
    )
  }
};

export default BeerItem;
