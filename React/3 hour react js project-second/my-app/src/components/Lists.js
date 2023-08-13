import React from 'react'
import ListItem from './ListItem';
const DUMMY_Shirts = [
    {
      id: 's1',
      name: 'Navy Blue Armani Tshirt',
      description: '100% cotton',
      large:100,
      medium:20,
      small:1,
      price: 1299,
    },
    {
        id: 's2',
        name: 'Gucchi Tshirt',
        description: '100% cotton',
        large:50,
        medium:30,
        small:11,
        price: 2000,
    }
   
  ];
  
const Lists = () => {
    const shirtsList = DUMMY_Shirts.map((shirt) =>
    <ListItem 
    id ={shirt.id}
     key={shirt.id} 
     name={shirt.name}  
     price={shirt.price} 
     description={shirt.description} 
     large={shirt.large}
     medium={shirt.medium}
     small={shirt.small}
     />
    );
  return (
    <section>
        <ul>{shirtsList}</ul>
    </section>
  )
}

export default Lists