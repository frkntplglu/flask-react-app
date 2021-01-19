import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Swal from "sweetalert2";
import axios from "axios";

function Category() {
  const [category, setCategory] = useState(" ");
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("/api/categories").then((response) => {
      setCategoryList(response.data);
    });
  };

  const addCategory = async () => {
    axios
      .post("/api/categories", { title: category })
      .then((response) => {
        fetchData();
        Swal.fire({
          title: "Tebrikler...",
          text: "Ekleme işlemi başarıyla gerçekleştirildi.",
          icon: "success",
        });
        setCategory("");
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

  const deleteCategory = async (id) => {
    axios
      .delete(`/api/category/${id}`)
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
        <h1>Kategori Ekle</h1>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value.trimStart())}
          placeholder="Kategori adı giriniz"
        />
        <button onClick={addCategory} className="btn btn-primary">
          KATEGORİ EKLE
        </button>
      </div>

      <div className="admin-section">
        <h1>Kategoriler</h1>
        <ul className="admin-list">
          {categoryList.length === 0 ? (
            <Loader />
          ) : (
            categoryList.map((categoryItem) => (
              <li key={categoryItem.id}>
                {categoryItem.title}{" "}
                <button
                  className="btn-admin btn-delete"
                  onClick={() => deleteCategory(categoryItem.id)}
                >
                  SİL{" "}
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}

export default Category;
