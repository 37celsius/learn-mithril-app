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
  }
};

export default User;
