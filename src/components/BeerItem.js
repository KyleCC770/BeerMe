import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

const BeerItem = ({ item }) => {
  // console.log('heres props:' + item);
  // console.log(item.style)
  // console.log(item.name);
  // console.log(item.labels);

  const locations = []

  if (item.breweries) {
  const regions = item.breweries[0].locations.map(
    (location) => location.region
  );
  regions.concat(locations)
  console.log(regions);
} else {
  console.log("nope");
}

console.log('heres locations: '+ locations)

      return (
        <div style={{width: '200px', display: 'inline-block'}}>
          <Card>
            <CardImg top width='200px' height='auto' src={item.labels ? item.labels.medium : 'https://via.placeholder.com/256'}/>
            <CardBody>
              <CardTitle tag='h3'>{item.name}</CardTitle>
              <CardSubtitle>{item.style ? item.style.shortName : 'style undefined'}</CardSubtitle>
              <CardText></CardText>
            </CardBody>
          </Card>
        </div>
      );

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
