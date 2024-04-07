import React from 'react'
import { useEffect,useState} from "react";
import '../Components/UsersList.css'

const UsersList = () => {
  
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/users/");

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch(url);
          const result = await response.json();
          setData(result);
      }
      fetchData();
  }, [url]);


  return (
    <div>
        <div className="filter">
            <button  onClick={() => setUrl("http://localhost:8000/users")}>All Persons</button>
            <button onClick={() => setUrl("http://localhost:8000/users?Indian=1")} >Indians Only</button>
            <button onClick={() => setUrl("http://localhost:8000/users?Indian=0")}>Non Indians</button>
        </div>
        <div className='container'>  
        { data && data.map((d) => (
             <div className="card" key={d.Id}>
                    <h2>{d.name}</h2>
                    <img
                      src={d.imageUrl}
                      alt={'Photo of ' + d.name}
                    />
                    <p>{d.description}</p>   
            </div>       
        )) }
       </div> 
    </div>
  )
}

export default UsersList