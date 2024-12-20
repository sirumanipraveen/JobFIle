import { Link } from "react-router-dom";
import { useUsersQuery, useDeleteMutation } from "./FetchDataWithRtk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./Fetc.css";

export default function FetchRtkQuery() {
  const {
    data: usersData,
    error: usersError,
    isLoading: usersIsLoading,
  } = useUsersQuery();
  const [deleteuser] = useDeleteMutation();
  // const handleAddDetailsButton=()=>{
  //     setValue("firstname","xyz")

  // }

  return (
    <div className="container  d-flex flex-column justify-content-start align-items-center ">
      <div className="d-flex flex-column justify-content-start align-items-center w-100   ">
        <div className="bg-button">
          <button className="bg bg-warning adddetails-btg">
           
            <Link type="button bg-radios" to="/add">
              Add Details
            </Link>
          </button>
        </div>
        <div className=" overflow-y-scroll bg-container">
          <table className="table table-container bg bg-light">
            <thead className="col-container">
              <tr>
                <th className="bg bg-dark text-light">FirstName</th>
                <th className="bg bg-dark text-light">LastName</th>
                <th className="bg bg-dark text-light">Contact</th>
                <th className="bg bg-dark text-light">Email</th>
                <th className="bg bg-dark text-light">Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersError ? (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>
                    Error
                  </td>
                </tr>
              ) : usersIsLoading ? (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>
                    Loading...
                  </td>
                </tr>
              ) : usersData ? (
                usersData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.contact}</td>
                    <td>{item.email}</td>
                    <td>
                      <button
                        className="m-1"
                        onClick={() => deleteuser(item.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                      <button>
                        <Link to={`/edit/${item.id}`} className=" m-1">
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </Link>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>
                    No Data Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
