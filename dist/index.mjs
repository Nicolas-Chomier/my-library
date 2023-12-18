import t from "react";
function c({
  img: e,
  title: r,
  children: a
}) {
  return /* @__PURE__ */ t.createElement("article", { "data-card": !0 }, /* @__PURE__ */ t.createElement("img", { "data-card-img": !0, src: e.src, alt: e.alt }), /* @__PURE__ */ t.createElement("h2", null, r), a);
}
const o = t.forwardRef(
  ({ kind: e = "primary", ...r }, a) => /* @__PURE__ */ t.createElement("button", { "data-button": `kind:${e}`, ref: a, ...r })
);
export {
  o as Button,
  c as Card
};
