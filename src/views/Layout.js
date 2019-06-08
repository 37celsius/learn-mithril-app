import m from "mithril";

let Layout = {
  view(vnode) {
    return m("main.layout", [
      m("nav.menu", [
        m("a[href='/list']", { oncreate: m.route.link }, "Users")
      ]),
      // This vnode.children is ref to the the children of the main.layout
      m("section", vnode.children)
    ]);
  }
};

export default Layout;
