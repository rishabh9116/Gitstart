import React, { useState } from 'react'
let sum = 0;
const Products = (props) => {
    const [productId, setProductId] = useState(null);
    const [sellingPrice, setSellingPrice] = useState(null);
    const [productName, setProductName] = useState(null);
    const [list,setList] = useState([]);
     // const [worth,setWorth] = useState(0);
 

const submitHandler = (event) => {
  event.preventDefault();
  console.log("submit button clicked");
  const product = {
    productId : productId,
    sellingPrice : sellingPrice,
    productName : productName
  }
 
 
 sum += Number(sellingPrice);
  localStorage.setItem(productId , JSON.stringify(product));
  if(productId){
    setList([...list,product]);

  }
 
}


const delhandler = (e) => {    
    localStorage.removeItem(e.target.id);
    for(let i=0;i<list.length;i++){
        if(list[i].productId===e.target.id){
            sum -= Number(list[i].sellingPrice);
        }
    }
setList(list.filter((item)=> item.productId!==e.target.id));

}

    return (
        <div>

            <form onSubmit={submitHandler}>
                <label>ProductId</label>
                <input
                    type='productId'
                    value={productId}
                    onChange={(event)=>setProductId(event.target.value)}

                />

                <label>Selling Price</label>
                <input
                    type='selling'
                    value={sellingPrice}
                    onChange={ (event)=>setSellingPrice(event.target.value)}

                />

                <label>ProductName</label>
                <input
                    type='productName'
                    value={ productName}
                    onChange={(event)=>setProductName(event.target.value) }

                />

                <button>Add Product</button>
            </form>
            <h1>Products</h1>
            <div>
                {
                    list.map((item)=>{
                        return(
                            <div key ={item.productId}>

                              {item.sellingPrice}-{item.productName} <button id={item.productId} onClick={delhandler}>Delete Product</button>
                            </div>
                        )
                    })
                }
            </div>
            <div>
               <h1> Total Value Worth of Products:Rs {sum} </h1>
            </div>

        </div>
    )
}

export default Products