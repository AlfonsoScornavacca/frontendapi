import Config from '../Config'

class UserService{

    get = async () => {
        const response = await fetch(this.getURL('/api/products'));
        return await response.json();
    }

    getById = async (id) => {
        const response = await fetch(this.getURL(`/api/products/${id}`));
        return await response.json();
    }

    post = async (product) => {
        const response = await fetch(this.getURL(`/api/products`),
        {
            method: 'POST',
            headers: {'Content-type': 'application/json; charset=UTF-8' },
            body: JSON.stringify(product)
        });
        return await response.json();
    }

    put = async (product) => {
        const response = await fetch(this.getURL(`/api/products/${product.id}`),
        {
            method: 'PUT',
            headers: {'Content-type': 'application/json; charset=UTF-8' },
            body: JSON.stringify(product)
        });
        return await response.json();

        
    }

    delete = async (id) => {
        const response = await fetch(this.getURL(`/api/products/${id}`),
        {
            method: 'DELETE',
        });
    }

    getURL = (path) =>
    Config.apiUrl + path;
}

export default new UserService();