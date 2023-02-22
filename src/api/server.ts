let token = '965153edb64882933aa4351e9d1ea1e0ab5f3594939c8a67'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://successful-scarlet-scowl.glitch.me/api/books`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async ( data: any = {} ) => {
        const response = await fetch(`https://successful-scarlet-scowl.glitch.me/api/books`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to send data to the server')
        }

        return await response.json()
    },

    update: async ( id: string, data: any = {} ) => {
        const response = await fetch(`https://successful-scarlet-scowl.glitch.me/api/books/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async ( id: string ) => {
        const response = await fetch(`https://successful-scarlet-scowl.glitch.me/api/books/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return await response.json()
    },
}