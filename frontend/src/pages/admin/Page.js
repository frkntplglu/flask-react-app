import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Swal from "sweetalert2";
import axios from "axios";

function Page() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`/api/pages`).then((response) => {
      setPages(response.data);
    });
  };

  const addPage = async () => {
    axios
      .post("/api/pages", { title: title, page_content: content })
      .then((response) => {
        fetchData();
        Swal.fire({
          title: "Tebrikler...",
          text: "Ekleme işlemi başarıyla gerçekleştirildi.",
          icon: "success",
        });
        setTitle("");
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
  const deletePage = (id) => {
    axios
      .delete(`/api/page/${id}`)
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: "Oops...",
          text: "Silme işlemi başarıyla gerçekleştirildi.",
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Oops...",
          text: "Bir şeyler ters gitti. Lütfen kontrol edip tekrar deneyin.",
          icon: "error",
        });
      });
    fetchData();
  };
  return (
    <>
      <div className="admin-section">
        <h1>Sayfa Ekle</h1>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Sayfa başlığını girin"
        />
        <CKEditor
          className="fuki-editor"
          editor={ClassicEditor}
          data="<p>Sayfa içeriğini girin!</p>"
          onChange={(event, editor) => {
            setContent(editor.getData());
          }}
        />
        <button className="btn btn-primary" onClick={addPage}>
          SAYFA EKLE
        </button>
      </div>
      <div className="admin-section">
        <h1>Sayfalar</h1>
        <ul className="admin-list">
          {pages.map((page) => (
            <li key={page.id}>
              {page.title}
              <div className="buttons">
                <button
                  className="btn-admin btn-update"
                  // onClick={() => deletePage(page.id)}
                >
                  GÜNCELLE{" "}
                </button>
                <button
                  className="btn-admin btn-delete"
                  onClick={() => deletePage(page.id)}
                >
                  SİL{" "}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
