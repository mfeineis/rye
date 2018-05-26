import { map, pick, pipe, reduce } from "ramda";
import { provide } from "rye-pagelet";

const getProps = pipe(
    map(pick(["name", "value"])),
    reduce((acc, { name, value }) => {
        acc[name] = value;
        return acc;
    }, {})
);

export const factory = root => {
    const props = getProps(root.attributes);
    console.log("rye-user-profile.props", props);

    const document = root.ownerDocument;

    const tmpl = document.createElement("template");
    tmpl.innerHTML = "<pre>User Profile powered by Vanilla JS</pre>";
    root.appendChild(tmpl.content);
};

provide("rye-user-profile", factory);