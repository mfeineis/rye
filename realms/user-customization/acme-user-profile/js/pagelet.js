import { provide } from "rye-pagelet";

export const factory = (host, attrs) => {
    console.log("acme-user-profile.props", host, attrs);

    const document = host.ownerDocument;

    const tmpl = document.createElement("template");
    tmpl.innerHTML = "<pre>User Profile powered by Vanilla JS</pre>";
    host.appendChild(tmpl.content);
};

provide("acme-user-profile", factory);
