import React,{useEffect, useState} from 'react'
import Loader from '../../components/Loader'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
function Badge() {
    const [category,setCategory] = useState(' ');
    const [categoryList,setCategoryList] = useState([])
    const [loader, setLoader] = useState(false)
    const MySwal = withReactContent(Swal)
    useEffect(() => {
        
        
        fetchData();
    },[setCategoryList])

    const fetchData = async () => {
        const response = await fetch('/api/categories');
        const data = await response.json();
        setCategoryList(data)
    }
    const addCategory = async () => {
        setLoader(true)
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            mode: 'cors',
            body: JSON.stringify({ "title": category})
        };
        try{
            const response = await fetch('/api/categories', requestOptions);
            if(response.status !== 200 || category === ""){
                MySwal.fire({
                    title: 'Oops...',
                    text: 'Bir şeyler ters gitti. Lütfen kontrol edip tekrar deneyin.',
                    icon: 'error'
                  })
            }
            const data = await response.json();
            setCategoryList(prevState => {
                return {
                    ...prevState,
                    data
                }
            });
        }
        catch(err){
            console.log(err)
        }

        setCategory('');
        setLoader(false);
     
    }

    const deleteCategory = async (id) => {
        const response = await fetch(`/api/category/${id}`,{
            method: 'DELETE'
        });

        if(response.status === 204){
            MySwal.fire({
                title: 'Bravo...',
                text: 'İşlem başarıyla gerçekleştirildi!',
                icon: 'success'
              })
        }
        fetchData();


    }
    return (<>
        <div className="admin-section">
                                    <h1>Kategori Ekle</h1>
                                    <input type="text"  value={category} onChange={e => setCategory(e.target.value.trimStart())} placeholder="Kategori adı giriniz"/>
                                    {loader ? <Loader /> : ''}
                                    <button onClick={addCategory} className="btn btn-primary">KATEGORİ EKLE</button>
                                </div>
                                
                                <div className="admin-section">
                                    <h1>Kategoriler</h1>
                                    <ul className="admin-list">
                                        {
                                            categoryList.length === 0 ? <Loader /> : categoryList.map(categoryItem => <li key={categoryItem.id}>{categoryItem.title} <button className="btn-admin btn-delete" onClick={() => deleteCategory(categoryItem.id)}>SİL </button></li>)
                                        }
                                    </ul>
                                </div>
        </>
    )
}

export default Badge


