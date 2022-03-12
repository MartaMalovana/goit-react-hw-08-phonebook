import axios from 'axios';

const fetch = axios.create({
    baseURL: 'https://6227e62b9fd6174ca8161aef.mockapi.io/contact_list'
});

export async function fetchContactsAPI () {
    const response = await fetch.get('/contacts');
    return response ? response.data : console.log('Fetch error');
};

export async function addNewContactAPI (contact) {
    const response = await fetch.post('/contacts', contact);
    return response ? response.data : console.log('Add new contact: error');
}

export async function deleteContactAPI (id) {
    const response = await fetch.delete(`/contacts/${id}`);
    return response ? response.data : console.log('Delete contact: error');

}