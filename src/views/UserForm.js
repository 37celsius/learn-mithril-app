import m from "mithril";

let UserForm = {
  view() {
    return m("form", [
      m("label.label", "First Name"),
      m("input.input[type=text][placeholder=First name]"),
      m("label.label", "Last name"),
      m("input.input[placeholder=Last name]"),
      m("button.button[type=button]", "Save")
    ]);
  }
};

export default UserForm;
