// View module for user list
import m from "mithril";
import User from "../models/User";

let UserList = {
  oninit: User.loadList,
  view() {
    // The .user-list represent class, when tag is not specified div is the equivalent
    return m(
      ".user-list",
      User.list.map(user => {
        return m(
          ".user-list-item",
          { href: `/edit/${user.id}`, oncreate: m.route.link },
          `${user.firstName} ${user.lastName}`
        );
      })
    );
  }
};

export default UserList;
