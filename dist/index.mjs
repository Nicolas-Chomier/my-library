import e, { forwardRef as B, createElement as F, useState as D, useRef as T, useEffect as R, useCallback as Y, useMemo as I } from "react";
function ce({
  img: t,
  title: a,
  children: n
}) {
  return /* @__PURE__ */ e.createElement("article", { "data-card": !0 }, /* @__PURE__ */ e.createElement("img", { "data-card-img": !0, src: t.src, alt: t.alt }), /* @__PURE__ */ e.createElement("h2", null, a), n);
}
const le = e.forwardRef(
  ({ kind: t = "primary", ...a }, n) => /* @__PURE__ */ e.createElement("button", { "data-button": `kind:${t}`, ref: n, ...a })
);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var j = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), $ = (t, a) => {
  const n = B(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: k = 2, absoluteStrokeWidth: E, className: m = "", children: c, ...p }, u) => F(
      "svg",
      {
        ref: u,
        ...j,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: E ? Number(k) * 24 / Number(o) : k,
        className: ["lucide", `lucide-${q(t)}`, m].join(" "),
        ...p
      },
      [
        ...a.map(([y, d]) => F(y, d)),
        ...Array.isArray(c) ? c : [c]
      ]
    )
  );
  return n.displayName = `${t}`, n;
};
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K = $("CalendarRange", [
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ["path", { d: "M17 14h-6", key: "bkmgh3" }],
  ["path", { d: "M13 18H7", key: "bb0bb7" }],
  ["path", { d: "M7 14h.01", key: "1qa3f1" }],
  ["path", { d: "M17 18h.01", key: "1bdyru" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V = $("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z = $("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H = $("ChevronsLeft", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U = $("ChevronsRight", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
const G = {
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
}, Q = [
  /* @__PURE__ */ e.createElement("tr", { className: "calendar_row", key: "semaine" }, /* @__PURE__ */ e.createElement("td", { className: "calendar_day_cell cell", key: "Lu" }, "Lu"), /* @__PURE__ */ e.createElement("td", { className: "calendar_day_cell cell", key: "Ma" }, "Ma"), /* @__PURE__ */ e.createElement("td", { className: "calendar_day_cell cell", key: "Me" }, "Me"), /* @__PURE__ */ e.createElement("td", { className: "calendar_day_cell cell", key: "Je" }, "Je"), /* @__PURE__ */ e.createElement("td", { className: "calendar_day_cell cell", key: "Ve" }, "Ve"), /* @__PURE__ */ e.createElement("td", { className: "calendar_day_cell cell", key: "Sa" }, "Sa"), /* @__PURE__ */ e.createElement("td", { className: "calendar_day_cell cell", key: "Di" }, "Di"))
], X = new Date().toLocaleDateString(), oe = ({
  limitDateMin: t,
  limitDateMax: a,
  onDateSelect: n
}) => {
  const {
    datePattern: r,
    dateFormat: o,
    months: k,
    errorMessage: E,
    limitMessage: m,
    locales: c
  } = G, [p, u] = D(new Date()), [y, d] = D(""), [i, g] = D(""), h = T(!0), [_, b] = D(!1), [w, f] = D(""), C = T(null);
  re(C, () => {
    b(!1);
  }), R(() => {
    if (y && i) {
      const s = M(y), l = M(i);
      s > l ? f(E) : (f(""), s < l && n([y, i]));
    }
  }, [y, i, E, n]);
  const N = (s) => u(
    (l) => new Date(l.getFullYear(), l.getMonth() + s, 1)
  ), v = (s) => u(
    (l) => new Date(l.getFullYear() + s, l.getMonth(), 1)
  ), x = () => {
    u(new Date()), d(""), g(""), f(""), h.current = !0;
  }, A = Y(
    (s) => {
      if (r.test(s)) {
        const l = M(s), P = L(t);
        t ? P < l ? (u(l), d(s)) : (f(m), d(" ")) : (u(l), d(s));
      }
    },
    [r, t, m]
  ), z = Y(
    (s) => {
      if (r.test(s)) {
        const l = M(s);
        L(a) > l ? (u(l), g(s)) : (f(m), g(" "));
      }
    },
    [r, a, m]
  ), W = (s) => {
    h.current ? (d(s.toLocaleDateString(c)), h.current = !1) : (g(s.toLocaleDateString(c)), h.current = !0);
  };
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      ref: C,
      onClick: () => b(!0),
      className: "datePicker_container"
    },
    /* @__PURE__ */ e.createElement("div", { className: "inputs_wrapper" }, /* @__PURE__ */ e.createElement(
      J,
      {
        placeholder: o,
        initialValue: y,
        onValueChange: A
      }
    ), /* @__PURE__ */ e.createElement(
      K,
      {
        size: 18,
        strokeWidth: 1.5,
        className: "datePicker_input_separator"
      }
    ), /* @__PURE__ */ e.createElement(
      J,
      {
        placeholder: o,
        initialValue: i,
        onValueChange: z
      }
    )),
    _ ? /* @__PURE__ */ e.createElement("div", { className: "datePicker_panel" }, /* @__PURE__ */ e.createElement(
      te,
      {
        monthList: k,
        date: p,
        message: w
      }
    ), /* @__PURE__ */ e.createElement(
      ee,
      {
        limitDateMin: t,
        limitDateMax: a,
        targetDate: p,
        startDate: y,
        endDate: i,
        handleClick: W
      }
    ), /* @__PURE__ */ e.createElement("div", { className: "button_panel" }, /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "datePicker_buttons",
        onClick: () => v(-1)
      },
      /* @__PURE__ */ e.createElement(V, { size: 22, strokeWidth: 1.4 })
    ), /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "datePicker_buttons",
        onClick: () => N(-1)
      },
      /* @__PURE__ */ e.createElement(H, { size: 25, strokeWidth: 1.3 })
    ), /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "datePicker_reset_button",
        onClick: x
      },
      /* @__PURE__ */ e.createElement("div", { className: "datePicker_reset_text" }, "Reset")
    ), /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "datePicker_buttons",
        onClick: () => N(1)
      },
      /* @__PURE__ */ e.createElement(U, { size: 25, strokeWidth: 1.3 })
    ), /* @__PURE__ */ e.createElement(
      "button",
      {
        className: "datePicker_buttons",
        onClick: () => v(1)
      },
      /* @__PURE__ */ e.createElement(Z, { size: 22, strokeWidth: 1.4 })
    ))) : null
  );
}, ee = ({
  limitDateMin: t,
  limitDateMax: a,
  targetDate: n,
  startDate: r,
  endDate: o,
  handleClick: k
}) => {
  const E = I(() => {
    const m = [...Q], c = n.getFullYear(), p = n.getMonth(), u = ne(c, p), y = new Date(c, p, 1).getDay();
    let d = 1;
    for (let i = 0; i < 6; i++) {
      const g = [];
      for (let h = 1; h < 8; h++)
        if (i === 0 && h < y || d > u)
          g.push(
            /* @__PURE__ */ e.createElement("td", { key: `${h}`, className: "cell" })
          );
        else {
          const _ = new Date(c, p, d), b = _.toLocaleDateString() === X, w = ae(_), f = O(r), C = O(o), S = t && _ < L(t), N = a && _ > L(a), v = r && w === f, x = o && w === C, A = w > f && w < C;
          S || N ? g.push(
            /* @__PURE__ */ e.createElement(
              "td",
              {
                key: `${i}-${h}`,
                className: "cell out_dates"
              },
              d++
            )
          ) : g.push(
            /* @__PURE__ */ e.createElement(
              "td",
              {
                key: `${i}-${h}`,
                onClick: () => k(_),
                className: `cell dates ${v ? "calendar_cell_start_date" : ""}	${x ? "calendar_cell_end_date" : ""}	${A ? "calendar_cell_between" : ""} ${b ? "calendar_cell_today" : ""}`
              },
              d++
            )
          );
        }
      if (m.push(
        /* @__PURE__ */ e.createElement("tr", { key: i, className: "calendar_row" }, g)
      ), d > u)
        break;
    }
    return m;
  }, [
    t,
    a,
    n,
    r,
    o,
    k
  ]);
  return /* @__PURE__ */ e.createElement("table", { className: "calendar_table" }, /* @__PURE__ */ e.createElement("tbody", null, E));
}, J = ({
  initialValue: t,
  placeholder: a,
  size: n = 10,
  onValueChange: r
}) => {
  const [o, k] = D(t || "");
  R(() => {
    k(t), r(t);
  }, [t, r]);
  const E = (c) => {
    k(c.target.value), r(c.target.value);
  }, m = (c) => {
    /^[a-zA-Z]$/.test(c.key) && c.preventDefault();
  };
  return /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "inputDate",
      type: "text",
      size: n,
      minLength: 10,
      maxLength: 10,
      onKeyDown: m,
      placeholder: a,
      onChange: E,
      value: o
    }
  );
}, te = ({ monthList: t, date: a, message: n }) => n ? /* @__PURE__ */ e.createElement("div", { className: "displayer_container" }, n) : /* @__PURE__ */ e.createElement("div", { className: "displayer_container" }, `${t[a.getMonth()]} ${a.getFullYear()}`), ae = (t) => Math.floor(t.getTime() / 1e3), ne = (t, a) => 32 - new Date(t, a, 32).getDate(), O = (t) => {
  const [a, n, r] = t.split("/").map(Number), o = new Date(r, n - 1, a);
  return Math.floor(o.getTime() / 1e3);
}, M = (t) => {
  const [a, n, r] = t.split("/").map(Number);
  return new Date(r, n - 1, a);
}, L = (t) => {
  const a = new Date();
  return t && a.setDate(a.getDate() + t), a;
}, re = (t, a) => {
  const n = (r) => {
    t.current && !t.current.contains(r.target) && a();
  };
  R(() => (document.addEventListener("click", n), () => {
    document.removeEventListener("click", n);
  }));
};
export {
  le as Button,
  ce as Card,
  oe as DatePicker
};
