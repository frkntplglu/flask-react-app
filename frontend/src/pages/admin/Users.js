import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Swal from "sweetalert2";
import axios from "axios";

function Users() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("/api/users").then((response) => {
      setUserList(response.data);
    });
  };

  const deleteUser = async (id) => {
    axios
      .delete(`/api/user/${id}`)
      .then((response) => {
        Swal.fire({
          title: "Tebrikler...",
          text: "Silme işlemi başarıyla gerçekleştirildi.",
          icon: "success",
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Ooops...",
          text: "Bir şeyler ters gitti.",
          icon: "error",
        });
      });
    fetchData();
  };

  return (
    <>
      <div className="admin-section">
        <h1>Kullanıcılar</h1>
        <ul className="admin-list">
          {userList.length === 0
            ? null
            : userList.map((user) => (
                <li key={user.id}>
                  <span>
                    <b>Adı : </b>
                    {user.name}
                  </span>
                  <span>
                    <b>Kullanıcı Adı : </b>
                    {user.username}
                  </span>
                  <span>
                    <b>Puan : </b> {user.user_point}
                  </span>
                  <span>
                    <b>Rütbe : </b> {user.badge}
                  </span>
                  <span>
                    {user.is_admin ? (
                      <>
                        <b>Yetki : </b> ADMİN
                      </>
                    ) : null}
                  </span>
                  <button
                    className="btn-admin btn-delete"
                    onClick={() => deleteUser(user.id)}
                  >
                    SİL{" "}
                  </button>
                </li>
              ))}
        </ul>
      </div>
    </>
  );
}

export default Users;
