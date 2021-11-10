import React , { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  "./style.css";


const Data = () => {
    
useEffect(() => {
getCovidData();

},[]);     //this empty array means that when first time page loads at that time only useEffect will be auto called.
     


const getCovidData = async ()=>{
   const res = await fetch('https://data.covid19india.org/data.json');
   const actualData = await res.json();
  console.log(actualData.statewise);
  setData(actualData.statewise);
};


const [data,setData] = useState([]);




    return (
        <>
           <div className="container-fluid mt-5">
               <div className="main-heading">
                   <h1 className="mb-5 text-center"><span className="font-weight-bold">INDIA</span> COVID-19 DASHBOARD</h1>
               </div>
              
              <div className="table-responsive">
                  <table className="table table-hover">
                      <thead className="thead-dark">
                          <tr>
                              <th> State </th>
                              <th> Confirmed </th>
                              <th> Recovered </th>
                              <th> Deaths </th>
                              <th> Active </th>
                              <th> Updated </th>
                          </tr>
                      </thead>

                      <tbody>
                     
                          {
                              data.map((curelem,ind)=>{
                                   return (
                                                    <tr key={ind}>
                                                      <th>{curelem.state}</th>
                                                      <td>{curelem.confirmed}</td>
                                                      <td>{curelem.recovered}</td>
                                                      <td>{curelem.deaths}</td>
                                                      <td>{curelem.active}</td>
                                                      <td>{curelem.lastupdatedtime}</td>
                                                    </tr>
                                           );
                              })
                          }

                     
                      </tbody>
                  </table>
              </div>
           </div>
        </>
    )
}

export default Data
