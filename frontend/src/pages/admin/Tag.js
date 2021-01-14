import React,{useEffect, useState} from 'react'
import Loader from '../../components/Loader'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
function Badge() {
    const [tag,setTag] = useState(' ');
    const [tagList,setTagList] = useState([])
    const [loader, setLoader] = useState(false)

    const MySwal = withReactContent(Swal)
    useEffect(() => {
        
        fetchData();
    },[setTagList])

    const fetchData = async () => {
        const response = await fetch('/api/tags');
        const data = await response.json();
        setTagList(data)
    }

    const addTag = async () => {
        setLoader(true)
        const requestOptions = {
            method: 'POST',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            mode: 'cors',
            body: JSON.stringify({ "title": tag})
        };
        try{
            const response = await fetch('/api/tags', requestOptions);
            
        }
        catch(err){
            console.log(err)
        }

        setTag('');
        setLoader(false);

        fetchData();
    }

    const deleteTag = async (id) => {
        const response = await fetch(`/api/tag/${id}`,{
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
                                    <h1>Etiket Ekle</h1>
                                    <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} placeholder="Etiket adı giriniz"/>
                                    <button onClick={addTag} className="btn btn-primary">ETİKET EKLE</button>
                                </div>
                                <div className="admin-section">
                                    <h1>Etiketler</h1>
                                    <ul className="admin-list">
                                        {tagList.map(tagItem => <li key={tagItem.id}>{tagItem.title} <button className="btn-admin btn-delete" onClick={() => deleteTag(tagItem.id)}>SİL </button></li>)}
                                    </ul>
                                </div>
        </>
    )
}

export default Badge


