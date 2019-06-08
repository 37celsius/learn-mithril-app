import m from "mithril";
import Layout from "./views/Layout";
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";

m.route.prefix("#");
m.route(document.body, "/list", {
  // We replace each component with a RouteResolver (object within render method)
  "/list": {
    render() {
      return m(Layout, m(UserList));
    }
  },
  "/edit/:id": {
    render(vnode) {
      // ie, this equivalent with m(UserForm, {id: 1})
      // in JSX <UserForm id={vnode.attrs.id} />
      return m(Layout, m(UserForm, vnode.attrs));
    }
  }
});
