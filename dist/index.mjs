import t, { forwardRef as B, createElement as P, useMemo as U, useState as f, useEffect as A, useRef as F, useCallback as J } from "react";
function oe({
  img: e,
  title: a,
  children: n
}) {
  return /* @__PURE__ */ t.createElement("article", { "data-card": !0 }, /* @__PURE__ */ t.createElement("img", { "data-card-img": !0, src: e.src, alt: e.alt }), /* @__PURE__ */ t.createElement("h2", null, a), n);
}
const le = t.forwardRef(
  ({ kind: e = "primary", ...a }, n) => /* @__PURE__ */ t.createElement("button", { "data-button": `kind:${e}`, ref: n, ...a })
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
const q = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), $ = (e, a) => {
  const n = B(
    ({ color: r = "currentColor", size: l = 24, strokeWidth: y = 2, absoluteStrokeWidth: E, className: m = "", children: c, ...p }, u) => P(
      "svg",
      {
        ref: u,
        ...j,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: E ? Number(y) * 24 / Number(l) : y,
        className: ["lucide", `lucide-${q(e)}`, m].join(" "),
        ...p
      },
      [
        ...a.map(([k, d]) => P(k, d)),
        ...Array.isArray(c) ? c : [c]
      ]
    )
  );
  return n.displayName = `${e}`, n;
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
const G = $("ChevronsRight", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]), Q = [
  /* @__PURE__ */ t.createElement("tr", { className: "calendar_row", key: "semaine" }, /* @__PURE__ */ t.createElement("td", { className: "calendar_day_cell cell", key: "Lu" }, "Lu"), /* @__PURE__ */ t.createElement("td", { className: "calendar_day_cell cell", key: "Ma" }, "Ma"), /* @__PURE__ */ t.createElement("td", { className: "calendar_day_cell cell", key: "Me" }, "Me"), /* @__PURE__ */ t.createElement("td", { className: "calendar_day_cell cell", key: "Je" }, "Je"), /* @__PURE__ */ t.createElement("td", { className: "calendar_day_cell cell", key: "Ve" }, "Ve"), /* @__PURE__ */ t.createElement("td", { className: "calendar_day_cell cell", key: "Sa" }, "Sa"), /* @__PURE__ */ t.createElement("td", { className: "calendar_day_cell cell", key: "Di" }, "Di"))
], X = new Date().toLocaleDateString(), ee = ({
  limitDateMin: e,
  limitDateMax: a,
  targetDate: n,
  startDate: r,
  endDate: l,
  handleClick: y
}) => {
  const E = U(() => {
    const m = [...Q], c = n.getFullYear(), p = n.getMonth(), u = ae(c, p), k = new Date(c, p, 1).getDay();
    let d = 1;
    for (let i = 0; i < 6; i++) {
      const g = [];
      for (let h = 1; h < 8; h++)
        if (i === 0 && h < k || d > u)
          g.push(
            /* @__PURE__ */ t.createElement("td", { key: `${h}`, className: "cell" })
          );
        else {
          const D = new Date(c, p, d), C = D.toLocaleDateString() === X, b = te(D), w = T(r), _ = T(l), R = e && D < Y(e), N = a && D > Y(a), v = r && b === w, L = l && b === _, x = b > w && b < _;
          R || N ? g.push(
            /* @__PURE__ */ t.createElement(
              "td",
              {
                key: `${i}-${h}`,
                className: "cell out_dates"
              },
              d++
            )
          ) : g.push(
            /* @__PURE__ */ t.createElement(
              "td",
              {
                key: `${i}-${h}`,
                onClick: () => y(D),
                className: `cell dates ${v ? "calendar_cell_start_date" : ""}	${L ? "calendar_cell_end_date" : ""}	${x ? "calendar_cell_between" : ""} ${C ? "calendar_cell_today" : ""}`
              },
              d++
            )
          );
        }
      if (m.push(
        /* @__PURE__ */ t.createElement("tr", { key: i, className: "calendar_row" }, g)
      ), d > u)
        break;
    }
    return m;
  }, [
    e,
    a,
    n,
    r,
    l,
    y
  ]);
  return /* @__PURE__ */ t.createElement("table", { className: "calendar_table" }, /* @__PURE__ */ t.createElement("tbody", null, E));
}, te = (e) => Math.floor(e.getTime() / 1e3), ae = (e, a) => 32 - new Date(e, a, 32).getDate(), T = (e) => {
  const [a, n, r] = e.split("/").map(Number), l = new Date(r, n - 1, a);
  return Math.floor(l.getTime() / 1e3);
}, Y = (e) => {
  const a = new Date();
  return e && a.setDate(a.getDate() + e), a;
};
const ne = ({
  monthList: e,
  date: a,
  message: n
}) => n ? /* @__PURE__ */ t.createElement("div", { className: "container" }, n) : /* @__PURE__ */ t.createElement("div", { className: "container" }, `${e[a.getMonth()]} ${a.getFullYear()}`);
const O = ({
  initialValue: e,
  placeholder: a,
  size: n = 10,
  onValueChange: r
}) => {
  const [l, y] = f(e || "");
  A(() => {
    y(e), r(e);
  }, [e, r]);
  const E = (c) => {
    y(c.target.value), r(c.target.value);
  }, m = (c) => {
    /^[a-zA-Z]$/.test(c.key) && c.preventDefault();
  };
  return /* @__PURE__ */ t.createElement(
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
      value: l
    }
  );
}, re = (e, a) => {
  const n = (r) => {
    e.current && !e.current.contains(r.target) && a();
  };
  A(() => (document.addEventListener("click", n), () => {
    document.removeEventListener("click", n);
  }));
}, se = {
  Fr: {
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
  },
  Us: {
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    datePattern: new RegExp(
      "(0[1-9]|1[012])/(0[1-9]|[12][0-9]|3[01])/(\\d{4})"
    ),
    errorMessage: "Start Date must be lower than End Date !",
    limitMessage: "Date is above or under specified limits !",
    inputTextError: "Undefined",
    dateFormat: "mm/dd/yyyy",
    locales: "en-US",
    ambienceText: {
      addYear: "Next year",
      addMonth: "Next month",
      removeYear: "Last year",
      removeMonth: "Last month"
    }
  }
};
const de = ({
  limitDateMin: e,
  limitDateMax: a,
  onDateSelect: n
}) => {
  const {
    datePattern: r,
    dateFormat: l,
    months: y,
    errorMessage: E,
    limitMessage: m,
    locales: c
  } = se.Fr, [p, u] = f(new Date()), [k, d] = f(""), [i, g] = f(""), h = F(!0), [D, C] = f(!1), [b, w] = f("");
  console.log(D);
  const _ = F(null);
  re(_, () => {
    C(!1);
  }), A(() => {
    if (k && i) {
      const s = M(k), o = M(i);
      s > o ? w(E) : (w(""), s < o && n([k, i]));
    }
  }, [k, i, E, n]);
  const N = (s) => u(
    (o) => new Date(o.getFullYear(), o.getMonth() + s, 1)
  ), v = (s) => u(
    (o) => new Date(o.getFullYear() + s, o.getMonth(), 1)
  ), L = () => {
    u(new Date()), d(""), g(""), w(""), h.current = !0;
  }, x = J(
    (s) => {
      if (r.test(s)) {
        const o = M(s), S = z(e);
        e ? S < o ? (u(o), d(s)) : (w(m), d(" ")) : (u(o), d(s));
      }
    },
    [r, e, m]
  ), W = J(
    (s) => {
      if (r.test(s)) {
        const o = M(s);
        z(a) > o ? (u(o), g(s)) : (w(m), g(" "));
      }
    },
    [r, a, m]
  ), I = (s) => {
    h.current ? (d(s.toLocaleDateString(c)), h.current = !1) : (g(s.toLocaleDateString(c)), h.current = !0);
  };
  return /* @__PURE__ */ t.createElement(
    "div",
    {
      ref: _,
      onClick: () => C(!0),
      className: "datePicker_container"
    },
    /* @__PURE__ */ t.createElement("div", { className: "inputs_wrapper" }, /* @__PURE__ */ t.createElement(
      O,
      {
        placeholder: l,
        initialValue: k,
        onValueChange: x
      }
    ), /* @__PURE__ */ t.createElement(
      K,
      {
        size: 18,
        strokeWidth: 1.5,
        className: "datePicker_input_separator"
      }
    ), /* @__PURE__ */ t.createElement(
      O,
      {
        placeholder: l,
        initialValue: i,
        onValueChange: W
      }
    )),
    D ? /* @__PURE__ */ t.createElement("div", { className: "datePicker_panel" }, /* @__PURE__ */ t.createElement(
      ne,
      {
        monthList: y,
        date: p,
        message: b
      }
    ), /* @__PURE__ */ t.createElement(
      ee,
      {
        limitDateMin: e,
        limitDateMax: a,
        targetDate: p,
        startDate: k,
        endDate: i,
        handleClick: I
      }
    ), /* @__PURE__ */ t.createElement("div", { className: "button_panel" }, /* @__PURE__ */ t.createElement(
      "button",
      {
        className: "datePicker_buttons",
        onClick: () => v(-1)
      },
      /* @__PURE__ */ t.createElement(V, { size: 22, strokeWidth: 1.4 })
    ), /* @__PURE__ */ t.createElement(
      "button",
      {
        className: "datePicker_buttons",
        onClick: () => N(-1)
      },
      /* @__PURE__ */ t.createElement(H, { size: 25, strokeWidth: 1.3 })
    ), /* @__PURE__ */ t.createElement(
      "div",
      {
        className: "datePicker_reset_button",
        onClick: L
      },
      /* @__PURE__ */ t.createElement("div", { className: "datePicker_reset_text" }, "Reset")
    ), /* @__PURE__ */ t.createElement(
      "button",
      {
        className: "datePicker_buttons",
        onClick: () => N(1)
      },
      /* @__PURE__ */ t.createElement(G, { size: 25, strokeWidth: 1.3 })
    ), /* @__PURE__ */ t.createElement(
      "button",
      {
        className: "datePicker_buttons",
        onClick: () => v(1)
      },
      /* @__PURE__ */ t.createElement(Z, { size: 22, strokeWidth: 1.4 })
    ))) : null
  );
}, M = (e) => {
  const [a, n, r] = e.split("/").map(Number);
  return new Date(r, n - 1, a);
}, z = (e) => {
  const a = new Date();
  return e && a.setDate(a.getDate() + e), a;
};
export {
  le as Button,
  oe as Card,
  de as DatePicker
};
