import Config from '../Config'

class vendedorService{

    get = async () => {
        const response = await fetch(this.getURL('/api/vendedores'));
        return await response.json();
    }

    getById = async (id) => {
        const response = await fetch(this.getURL(`/api/vendedores/${id}`));
        return await response.json();
    }

    post = async (vendedor) => {
        const response = await fetch(this.getURL(`/api/vendedores`),
        {
            method: 'POST',
            headers: {'Content-type': 'application/json; charset=UTF-8' },
            body: JSON.stringify(vendedor)
        });
        return await response.json();
    }

    put = async (vendedor) => {
        const response = await fetch(this.getURL(`/api/vendedores/${vendedor.id}`),
        {
            method: 'PUT',
            headers: {'Content-type': 'application/json; charset=UTF-8' },
            body: JSON.stringify(vendedor)
        });
        return await response.json();

        
    }

    delete = async (id) => {
        const response = await fetch(this.getURL(`/api/vendedores/baja/${id}`),
        {
            method: 'PUT',
        });
    }

    getURL = (path) =>
    Config.apiUrl + path;
}

export default new vendedorService();