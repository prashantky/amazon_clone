import React, { useEffect, useState } from "react";
import { initialState } from "../../reducer";
import { useStateValue } from "../../StateProvider";

const Pagination = () => {
  const [{dataPagination,selectedProducts},dispatch]=useStateValue();

    console.log("data from pagination",dataPagination)
    console.log("data from pagination",selectedProducts)

  const [index, setIndex] = useState(1);
  console.log("index change kar raha", index)
  
  //const [showPerPage, setShowPerPage] = useState(15);
//  const handleClick=(event)=> {
//     setcurrentPage({currentPage:event.target.id})
    
//   }
  useEffect(() => {
    const dataSearch=dataPagination.slice((index-1)*10,index*10)
    console.log("useeffect ke andar",dataSearch)
    dispatch({
      type:"PRODUCTS",
      selectedProducts:[...initialState.selectedProducts,...dataSearch]
    })
    
  }, [index])
  
    const handleNext=(changeIndex)=>{
if(index<pageNumbers.length)
      setIndex(changeIndex)
    }
const handlePrev=(changeIndex)=>{
      if(index>1)
      setIndex(changeIndex)
    }

  // const indexOfLastUpdate = currentPage * showPerPage;
  // const indexOfFirstUpdate = indexOfLastUpdate - showPerPage;
  // const currentUpdate = dataPagination?.slice(indexOfFirstUpdate, indexOfLastUpdate);
  //logic for displaying page number
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(dataPagination.length / 10); i++) {
    pageNumbers.push(i);
  }
  
  
  return (
    <div>
      <div className="container">
        <div className="row  d-flex justify-content-between mb-3">
          <div className="col">
            <button onClick={()=>handlePrev(index-1)} >prev</button>
          </div>

          <div className="col d-flex">
            {pageNumbers.map((items) => (
              <p key={items} id={items}>{items}</p>
            ))}
          </div>

          <div className="col offset-6">
            <button onClick={()=>handleNext(index+1)}>next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pagination;
