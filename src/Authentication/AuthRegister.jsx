/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [newData, setNewData] = useState([]);
  const navigate = useNavigate()

const handleLogout =()=>{
  localStorage.removeItem("token")
  navigate("/")
}

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("https://api.escuelajs.co/api/v1/auth/profile", header)
      .then((res) => {
        
        setNewData([...newData, res]);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <>
    <div className="container position-static">
    <div className="position-absolute top-0 end-0 m-3 w-100%" >
    <button className="bg bg-danger text-white rounded" onClick={handleLogout}>LogOut</button>
    </div>
      <div className="w-100 h-80">
        <h5>profile</h5>
       <p> Name : {newData[0]?.data?.name}</p>
       <p> Email : {newData[0]?.data?.email}</p>
       <p> Password : {newData[0]?.data?.password}</p>
      </div> 
       </div>
    </>
  );
}

export default Profile;
