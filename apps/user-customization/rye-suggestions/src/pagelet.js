// FIXME: It may be better to have an explicit module to define the pagelet instead
//        of the webpack loader magic.

export const PAGELET_NAME = "rye-suggestions";

export const pageletFactory = root => {
    const document = root.ownerDocument;
    //root.innerHTML = "<pre>rye-suggestions bla</pre>";

    const it = document.createElement("div");
    it.setAttribute("data-pagelet", "true");
    it.innerHTML = "<pre>rye-suggestions</pre>";

    const one = document.createElement("span");
    one.setAttribute("data-id", "1");

    const two = document.createElement("span");
    two.setAttribute("data-id", "2");

    const nodes = [it, one, two];
    nodes.forEach(node => root.appendChild(node));

    //root.parentNode.replaceChild(it, root);

    //nodes.reverse().forEach(node => (
    //    it.parentNode.insertBefore(node, it.nextSibling)
    //));
};
