export const elementsJson = {
  container: {
    name: "div",
    text: false,
    hasChildren: true,
    style: [],
    id: "",
    className: "",
    draggable: true,
    resizableV: true,
    resizableH: true,
    deletable: true,
    dublicate: true,
    printable: true
  },
  lable: {
    name: "label",
    text: true,
    hasChildren: true,
    style: [],
    id: "",
    className: "",
    draggable: true,
    resizableV: true,
    resizableH: true,
    deletable: true,
    dublicate: true,
    printable: true
  },
  text: {
    warpper: "container",
    name: "span",
    text: true,
    hasChildren: false,
    style: [],
    className: "",
    draggable: false,
    resizableV: false,
    resizableH: false,
    deletable: false,
    dublicate: false,
    printable: false
  }
};
