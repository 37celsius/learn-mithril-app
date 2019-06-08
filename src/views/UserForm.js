import m from "mithril";
import User from "../models/User";

let UserForm = {
  oninit(vnode) {
    // vnode is Virtual DOM
    User.load(vnode.attrs.id);
  },
  view() {
    return m(
      "form",
      {
        onsubmit(e) {
          e.preventDefault();
          User.save();
        }
      },
      [
        m("label.label", "First Name"),
        m("input.input[type=text][placeholder=First name]", {
          value: User.current.firstName
        }),
        m("label.label", "Last name"),
        m("input.input[placeholder=Last name]", {
          value: User.current.lastName
        }),
        m("button.button[type=button]", "Save")
      ]
    );
  }
};

export default UserForm;
