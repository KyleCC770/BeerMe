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
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

const BeerItem = ({ item }) => {
  // console.log('heres props:' + item);
  // console.log(item.style)
  console.log(item.name);
  console.log(item.labels);

  if (item.style) {
    if (item.labels) {
      console.log('heres label: ' + item.labels.icon);
      return (
        // <div>
        //   <p>{item.name}</p>
        //   <p>{item.style.shortName}</p>
        // </div>
        // <div className="home-container">
        //   <div className="home-card">
        //     <div className="embed-responsive">
        //       <img src={item.labels.medium} />
        //     </div>
        //     <div className="card-block">
        //       <h4 className="card-title">{item.name}</h4>
        //       <p className="card-text">{item.style.shortName}</p>
        //     </div>
        //   </div>
        // </div>
        <div>
          <Card>
            <CardImg top width='200px' src={item.labels.medium}/>
            <CardBody>
              <CardTitle tag='h3'>{item.name}</CardTitle>
              <CardSubtitle>{item.style.shortName}</CardSubtitle>
              <CardText></CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return (
        <div className="home-container">
          <div className="home-card">
            <div className="embed-responsive">
              <img src={'https://via.placeholder.com/256'} />
            </div>
            <div className="card-block">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">{item.style.shortName}</p>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div>
        <p>{item.name}</p>
        <p>style undefined</p>
      </div>
    );
  }
};

export default BeerItem;

// if (item.breweries) {
//   const regions = item.breweries[0].locations.map(
//     (location) => location.region
//   );
//   console.log(regions);
// } else {
//   console.log("nope");
// }
