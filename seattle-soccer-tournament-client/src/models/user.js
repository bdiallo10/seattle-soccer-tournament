const userurl =`http://localhost:5000/api/v1`

export default class UserModel {
    static async create(data) {
        const res = await fetch(`${userurl}/auth/register`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        return await res.json()
    }

    static async login(data) {
        console.log(data)
        const res = await fetch(`${userurl}/auth/login`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(data)
        })
        return await res.json()
    }

    static async logout() {
        const res = await fetch(`${userurl}/auth/logout`, {
            method: 'DELETE',
            credentials: 'include',
        })
        return await res.json()
    }

}
