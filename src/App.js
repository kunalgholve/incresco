import {useState,useEffect} from 'react';
import Product from "./product";

export default function App() {
  const[data,setData]=useState([]); 
  const[mainData,setMainData]=useState([]); 
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState([]);
  const [opt, setOption] = useState("Recommended");

  

  useEffect(async()=>{
          const response= await fetch("https://demo7242716.mockable.io/products");
          const jdata= await response.json();
          setData(jdata.products);
          setMainData(jdata.products);
          setSort(jdata.sortOptions);

    },[])



    const searchfun=(e)=>{
    setSearch(e.target.value)
    const searchData = mainData.filter((product) =>
    product.productName.toLowerCase().includes(search)
  );
      setData(searchData);
    }

  const menData=()=>{
  const mendata=mainData.filter((product)=>product.gender==="Men")
    setData(mendata);  
  }

  const womenData=()=>{
    const womendata=mainData.filter((product)=>product.gender==="Women")
      setData(womendata);  
    }

  const boysData=()=>{
      const boysdata=mainData.filter((product)=>product.gender==="Boy")
        setData(boysdata);  
    }
      
  const girlsData=()=>{
      const girlsdata=mainData.filter((product)=>product.gender==="Girls")
          setData(girlsdata);  
      }

  const handleSortBY=()=>{

  }    

  return (
    <>
    <input
      type="text"
      placeholder="search"
      className="input"
      onChange={searchfun}
    />
   
    <select value={opt} onChange={(e)=>setOption(e.target.value)}>
      {
        sort.map((option)=>
                  <option value={option}>{option}</option>
                )
      }
    </select>
    <br />
    <br />
    <h4>Filters</h4>
    <div className="movie-container">

    <ul>
    <li>
      <input type="radio" value="Men" name="radio" onClick={menData}/>Men
    </li>
    <li>
      <input type="radio" value="Women" name="radio" onClick={womenData}/>Women
    </li>
    <li>
      <input type="radio" value="Boys" name="radio" onClick={boysData}/>Boys
    </li>
    <li>
      <input type="radio" value="Girls" name="radio" onClick={girlsData}/>Girls
    </li>
    </ul>

      {data.length > 0 ? (
        data.map((product) => (
          <Product Title={product.productName} Poster={product.searchImage} />
        ))
      ) : (
        <h1 style={{ color: "red" }}>Item Not Found!</h1>
      )}
    </div>
  </>
  );
}

