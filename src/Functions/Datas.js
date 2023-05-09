import axios from 'axios';

export const getBranchListe = async () => {
    let data;
    await axios.get('http://localhost/cofedal-api/api/', {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => {
        data = resp.data;
        // data = rp.split('-');
        // console.log(data);
    });
    return data;
}