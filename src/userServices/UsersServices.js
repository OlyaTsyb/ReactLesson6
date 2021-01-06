export  class UsersServices {
    url = "https://jsonplaceholder.typicode.com/users";

    async user(id) {
        return await fetch(this.url + "/" + id).then(user => user.json())

    }

}