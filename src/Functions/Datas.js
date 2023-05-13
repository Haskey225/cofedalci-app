import axios from 'axios';
import { config } from './config';

let qs = require('qs');

export function getRiverInformation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                continent: 'Africa',
                length: '6,650 km',
                outflow: 'Mediterranean'
            })
        }, 1500)
    })
}

export const getBranchListe = async () => {
    let data;
    axios.post(config.api, qs.stringify({
        'action': 'find',
        'table': 'branch'
    })).then(resp => {
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

export const setAssociation = async (datas) => {
    axios.post(config.api, qs.stringify({
        'action': 'save',
        'table': 'association',
        'val': {
            'name': datas.asso_name,
            'description': datas.asso_description,
            'fed_id': 20
        }
    })).then(resp => {
        console.log(resp.data)
    })
}

export const setMember = async (datas) => {
    axios.post(config.api, qs.stringify({
        'action': 'save',
        'table': 'member',
        'member': {
            'name': 'name',
            'birth_date': 'date',
            'birth_place': 'place',
            'nationnality': 'nation',
            'phone_number': 'tel',
            'whatsapp': 'wha',
            'email': 'email',
            'community_id': 'commune id',
            'area_name': 'Nom du quartier',
        },
        'activity': {
            'start_date': 'date',
            'min_month_ca': 'minimum month ca',
            'max_month_ca': 'max month ca',
            'min_month_customer': 'min month customer',
            'max_month_customer': 'max month customer',
            'total_fix_worker': 'total fixe worker',
            'total_contract_worker': 'contract worker',
            'total_familly_worker': 'familly worker',
            'total_intern_worker': 'intern worker',
        }
    })).then(resp => {
        console.log(resp.data)
    })
}

