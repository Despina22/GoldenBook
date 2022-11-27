export class UsersAPI {
  API_USERS_URL;
  constructor(url) {
    this.API_USERS_URL = url;
  }

  async getUsers(authValue) {
    const res = await fetch(
      this.API_USERS_URL +
        `?email=${authValue.email}&password=${authValue.password}`
    );
    return await res.json();
  }

  async addUser(authValue) {
    const res = await fetch(this.API_USERS_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        email: authValue.email,
        password: authValue.password,
      }),
    });
    return await res.json();
  }
}
