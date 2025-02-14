import React,{useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const sem  = useLoaderData();
    // const [data,setdata] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/arpitbytes507')
    //     .then(response => response.json())
    //     .then(data => {console.log(data)
    //         setdata(data)
    //     },[]); 
    // })
    if (!sem) {
        return <div>Loading...</div>;
    }
  return (
    <div className='text-center m-4 bg-gray-600 text-red p-5 text-4xl'>
        Github Followers : {sem.followers} 
        <img src={sem.avatar_url} alt="profile photo" width={100}/>
    </div>
  )
}

export default Github;
// githubinfo.js or within the same file
export const githubinfo = async () => {
    const response = await fetch('https://api.github.com/users/arpitbytes507');
    if (!response.ok) {
      throw new Error("Failed to fetch GitHub data");
    }
    const data = await response.json();  // as the data key is in string format convert it into the json so readable
    return data; 
 }
  