// This is a module to store the states
import m from "mithril";

let User = {
  list: [],
  // load some data from the server
  loadList() {
    return m
      .request({
        method: "GET",
        url: "https://rem-rest-api.herokuapp.com/api/users",
        withCredentials: true
      })
      .then(result => (User.list = result.data));
  },
  current: {},
  load(id) {
    return m
      .request({
        method: "GET",
        url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
        withCredentials: true
      })
      .then(result => (User.current = result));
  },
  save() {
    return m.request({
      method: "PUT",
      url: "https://rem-rest-api-herokuapp.com/api/users/" + User.current.id,
      data: User.current,
      withCredentials: true
    });
  }
};

export default User;
