import React,{useState} from "react";
const Index=()=>{
   
        const initialObj={
                firstName:"emma",
                lastName:"watson",
                age:10,
                };                  
        const [data,setData]=useState(initialObj);

        const changeFirstName=()=>{
            setData({
                  ...data,
                  firstName:"sagar",
            })

        }

        const changeLastName=()=>{
          setData({
                ...data,
                lastName:"varma",
          })
        }

        const changeAge=()=>{
          setData({
                ...data,
                age:22
          })
        }


    return(
             <div >
              <h1>my first name is {data.firstName}</h1>
              <button onClick={changeFirstName}>changeFirstName</button>
              <h1>my last name is {data.lastName}</h1>
              <button onClick={changeLastName}>changeLastName</button>
              <h1>my age is {data.age}</h1>
              <button onClick={changeAge}>changeAge</button>
              
            </div>
    );
    };
export default Index; 