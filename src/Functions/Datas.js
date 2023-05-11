import axios from 'axios';
import { config } from './config';

let qs = require('qs');


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

export const setBranch = async (name = 'test', description = 'test') => {

    axios.post(config.api, qs.stringify({
        'action': 'save',
        'table': 'branch',
        'val': {
            'name': name,
            'description': description
        }

    })).then(resp => {
        console.log(resp.data)
    })
}
export const setFederation = async (datas) => {

    axios.post(config.api, qs.stringify({
        'action': 'save',
        'table': 'federation',
        'val': {
            'short_name': datas.s_name,
            'full_name': datas.f_name,
            'president': datas.presi,
            'branch': 2,
            'description': datas.description
        }

    })).then(resp => {
        console.log(resp.data)
    })
}

