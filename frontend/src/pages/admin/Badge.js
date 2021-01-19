import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function Badge() {
  const [badge, setBadge] = useState(" ");
  const [badgeList, setBadgeList] = useState([]);

  useEffect(() => {
    fetchData();
  }, [setBadgeList]);

  const fetchData = () => {
    axios.get("/api/badges").then((response) => {
      setBadgeList(response.data);
    });
  };

  const addBadge = async () => {
    axios
      .post("/api/badges", { title: badge })
      .then((response) => {
        fetchData();
        Swal.fire({
          title: "Tebrikler...",
          text: "Ekleme işlemi başarıyla gerçekleştirildi.",
          icon: "success",
        });
        setBadge("");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Ooops...",
          text: "Bir şeyler ters gitti.",
          icon: "error",
        });
      });
  };

  const deleteBadge = async (id) => {
    axios
      .delete(`/api/badge/${id}`)
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
        <h1>Rütbe Ekle</h1>
        <input
          type="text"
          value={badge}
          onChange={(e) => setBadge(e.target.value)}
          placeholder="Rütbe adını giriniz"
        />
        <button onClick={addBadge} className="btn btn-primary">
          RÜTBE EKLE
        </button>
      </div>
      <div className="admin-section">
        <h1>Rütbeler</h1>
        <ul className="admin-list">
          {badgeList.map((badgeItem) => (
            <li key={badgeItem.id}>
              {badgeItem.title}{" "}
              <button
                className="btn-admin btn-delete"
                onClick={() => deleteBadge(badgeItem.id)}
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

export default Badge;
