import a, { useState as u, useEffect as l } from "react";
function p({
  img: e,
  title: t,
  children: r
}) {
  return /* @__PURE__ */ a.createElement("article", { "data-card": !0 }, /* @__PURE__ */ a.createElement("img", { "data-card-img": !0, src: e.src, alt: e.alt }), /* @__PURE__ */ a.createElement("h2", null, t), r);
}
const v = a.forwardRef(
  ({ kind: e = "primary", ...t }, r) => /* @__PURE__ */ a.createElement("button", { "data-button": `kind:${e}`, ref: r, ...t })
);
const f = {
  months: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  ],
  datePattern: new RegExp(
    "(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/(\\d{4})"
  ),
  errorMessage: "Ordre des dates erronée",
  limitMessage: "La date est au dessus ou au dessous des limites définies !",
  dateFormat: "JJ/MM/AAAA",
  locales: "fr-FR",
  ambienceText: {
    addYear: "Année suivante",
    addMonth: "Mois suivant",
    removeYear: "Année précédente",
    removeMonth: "Mois précédent"
  }
};
new Date().toLocaleDateString();
const M = ({
  initialValue: e,
  placeholder: t,
  size: r = 10,
  onValueChange: s
}) => {
  const [c, o] = u(e || "");
  l(() => {
    o(e), s(e);
  }, [e, s]);
  const d = (n) => {
    o(n.target.value), s(n.target.value);
  }, i = (n) => {
    /^[a-zA-Z]$/.test(n.key) && n.preventDefault();
  };
  return /* @__PURE__ */ a.createElement(
    "input",
    {
      className: "inputDate",
      type: "text",
      size: r,
      minLength: 10,
      maxLength: 10,
      onKeyDown: i,
      placeholder: t,
      onChange: d,
      value: c
    }
  );
}, g = ({
  monthList: e,
  date: t,
  message: r
}) => r ? /* @__PURE__ */ a.createElement("div", { className: "displayer_container" }, r) : /* @__PURE__ */ a.createElement("div", { className: "displayer_container" }, `${e[t.getMonth()]} ${t.getFullYear()}`);
export {
  v as Button,
  p as Card,
  g as Displayer,
  M as Input,
  f as constants
};
