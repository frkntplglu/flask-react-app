import React,{useEffect, useState} from 'react'
import Loader from '../../components/Loader'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Badge() {
    const [badge,setBadge] = useState(' ');
    const [badgeList,setBadgeList] = useState([])
    const [loader, setLoader] = useState(false)

    const MySwal = withReactContent(Swal)
    useEffect(() => {
        
        fetchData();
    },[setBadgeList])

    const fetchData = async () => {
        const response = await fetch('/api/badges');
        const data = await response.json();
        setBadgeList(data)
    }

    const addBadge = async () => {
        setLoader(true)
        const requestOptions = {
            method: 'POST',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            mode: 'cors',
            body: JSON.stringify({ "title": badge})
        };
        try{
            const response = await fetch('/api/badges', requestOptions);
            if(response.status !== 200 || badge === ""){
                MySwal.fire({
                    title: 'Oops...',
                    text: 'Bir şeyler ters gitti. Lütfen kontrol edip tekrar deneyin.',
                    icon: 'error'
                  })
            }
        }
        catch(err){
            console.log(err)
        }

        setBadge('');
        setLoader(false);

        fetchData();
    }

    const deleteBadge = async (id) => {
        const response = await fetch(`/api/badge/${id}`,{
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
            <h1>Rütbe Ekle</h1>
            <input type="text" value={badge} onChange={(e) => setBadge(e.target.value)} placeholder="Rütbe adını giriniz"/>
            <button onClick={addBadge} className="btn btn-primary">RÜTBE EKLE</button>
        </div>
        <div className="admin-section">
            <h1>Rütbeler</h1>
            <ul className="admin-list">
                {badgeList.map(badgeItem => <li key={badgeItem.id}>{badgeItem.title} <button className="btn-admin btn-delete" onClick={() => deleteBadge(badgeItem.id)}>SİL </button></li>)}
            </ul>
        </div>
        </>
    )
}

export default Badge
