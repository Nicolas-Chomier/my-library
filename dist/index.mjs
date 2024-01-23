import N, { forwardRef as CM, createElement as Dx, useState as ar, useCallback as zn, useRef as vv, useEffect as $n, useMemo as hv } from "react";
function I_({
  img: d,
  title: v,
  children: m
}) {
  return /* @__PURE__ */ N.createElement("article", { "data-card": !0 }, /* @__PURE__ */ N.createElement("img", { "data-card-img": !0, src: d.src, alt: d.alt }), /* @__PURE__ */ N.createElement("h2", null, v), m);
}
const F_ = N.forwardRef(
  ({ kind: d = "primary", ...v }, m) => /* @__PURE__ */ N.createElement("button", { "data-button": `kind:${d}`, ref: m, ...v })
);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var TM = {
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
const xM = (d) => d.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), $r = (d, v) => {
  const m = CM(
    ({ color: C = "currentColor", size: x = 24, strokeWidth: w = 2, absoluteStrokeWidth: y, className: k = "", children: L, ...b }, A) => Dx(
      "svg",
      {
        ref: A,
        ...TM,
        width: x,
        height: x,
        stroke: C,
        strokeWidth: y ? Number(w) * 24 / Number(x) : w,
        className: ["lucide", `lucide-${xM(d)}`, k].join(" "),
        ...b
      },
      [
        ...v.map(([M, U]) => Dx(M, U)),
        ...Array.isArray(L) ? L : [L]
      ]
    )
  );
  return m.displayName = `${d}`, m;
};
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wM = $r("AtSign", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8", key: "7n84p3" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RM = $r("CalendarCheck", [
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kM = $r("CalendarRange", [
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
const DM = $r("CaseLower", [
  ["circle", { cx: "7", cy: "12", r: "3", key: "12clwm" }],
  ["path", { d: "M10 9v6", key: "17i7lo" }],
  ["circle", { cx: "17", cy: "12", r: "3", key: "gl7c2s" }],
  ["path", { d: "M14 7v8", key: "dl84cr" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const By = $r("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bM = $r("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NM = $r("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MM = $r("ChevronsLeft", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LM = $r("ChevronsRight", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _M = $r("CopyCheck", [
  ["path", { d: "m12 15 2 2 4-4", key: "2c609p" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OM = $r("Hash", [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zM = $r("KeyRound", [
  ["path", { d: "M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z", key: "167ctg" }],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", key: "1kog09" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UM = $r("MoreHorizontal", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AM = $r("Power", [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HM = $r("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pf = $r("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), B_ = ({
  children: d,
  disabled: v = !1,
  className: m,
  handleClick: C
}) => {
  const [x, w] = ar(!1), y = zn(
    (L) => {
      let b = N.Children.toArray(L);
      if (b.length === 0)
        return /* @__PURE__ */ N.createElement(
          AM,
          {
            size: 24,
            strokeWidth: 1.7,
            className: "customizableButton-power-icon"
          }
        );
      if (b.length === 1)
        return L;
      if (b.length === 2)
        return x ? b[0] : b[1];
    },
    [x]
  ), k = zn(
    (L) => {
      L.preventDefault(), C && (w(!x), C(L));
    },
    [x, C]
  );
  return /* @__PURE__ */ N.createElement(
    "button",
    {
      disabled: v,
      className: `customizableButton-mandatory-class
			${m ?? "customizableButton-button"}`,
      onClick: k
    },
    y(d)
  );
};
const IM = {
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
  errorMessage: "Ordre des dates erroné !",
  limitMessage: "La date est hors des limites définies !",
  locales: "fr-FR"
}, FM = [
  /* @__PURE__ */ N.createElement("tr", { className: "datePicker-calendar-row", key: "week" }, /* @__PURE__ */ N.createElement(
    "td",
    {
      className: "datePicker-calendar-day-text datePicker-calendar-cell",
      key: "Lu"
    },
    "Lu"
  ), /* @__PURE__ */ N.createElement(
    "td",
    {
      className: "datePicker-calendar-day-text datePicker-calendar-cell",
      key: "Ma"
    },
    "Ma"
  ), /* @__PURE__ */ N.createElement(
    "td",
    {
      className: "datePicker-calendar-day-text datePicker-calendar-cell",
      key: "Me"
    },
    "Me"
  ), /* @__PURE__ */ N.createElement(
    "td",
    {
      className: "datePicker-calendar-day-text datePicker-calendar-cell",
      key: "Je"
    },
    "Je"
  ), /* @__PURE__ */ N.createElement(
    "td",
    {
      className: "datePicker-calendar-day-text datePicker-calendar-cell",
      key: "Ve"
    },
    "Ve"
  ), /* @__PURE__ */ N.createElement(
    "td",
    {
      className: "datePicker-calendar-day-text datePicker-calendar-cell",
      key: "Sa"
    },
    "Sa"
  ), /* @__PURE__ */ N.createElement(
    "td",
    {
      className: "datePicker-calendar-day-text datePicker-calendar-cell",
      key: "Di"
    },
    "Di"
  ))
], BM = new Date().toLocaleDateString(), V_ = ({
  placeholder: d = "jj/mm/aaaa",
  limitDateMin: v,
  limitDateMax: m,
  isSubmit: C,
  isValid: x,
  open: w = !1,
  disabled: y = !1,
  size: k = "standard",
  isBeautiful: L = !0,
  className: b,
  onFieldChange: A
}) => {
  const { datePattern: M, months: U, errorMessage: j, limitMessage: Z, locales: H } = IM, [Q, V] = ar(new Date()), [q, X] = ar(""), [fe, G] = ar(""), W = vv(!0), [ae, ve] = ar(w), [Se, me] = ar(""), Ce = vv(null);
  YM(Ce, () => ve(!1));
  const Ve = (ne, Fe) => {
    V(
      (Xe) => new Date(Xe.getFullYear(), Xe.getMonth() + Fe, 1)
    ), ne.preventDefault();
  }, Me = (ne, Fe) => {
    V(
      (Xe) => new Date(Xe.getFullYear() + Fe, Xe.getMonth(), 1)
    ), ne.preventDefault();
  }, he = (ne, Fe) => Fe === "small" ? /* @__PURE__ */ N.createElement(
    UM,
    {
      size: 12,
      strokeWidth: 1.4,
      className: "datePicker-input-separator"
    }
  ) : ne ? /* @__PURE__ */ N.createElement(
    RM,
    {
      size: 19,
      strokeWidth: 1.4,
      className: "datePicker-middle-icon-valid"
    }
  ) : /* @__PURE__ */ N.createElement(
    kM,
    {
      size: 18,
      strokeWidth: 1.5,
      className: "datePicker-middle-icon"
    }
  ), ke = zn(
    (ne) => {
      V(new Date()), X(""), G(""), me(""), A(void 0), W.current = !0, ne.preventDefault();
    },
    [A]
  ), Ue = zn(
    (ne) => {
      if (M.test(ne)) {
        const Fe = Ny(ne);
        v ? zy(v) < Fe ? (V(Fe), X(ne)) : (me(Z), X(" ")) : (V(Fe), X(ne));
      } else
        X(ne);
    },
    [M, v, Z]
  ), ht = zn(
    (ne) => {
      if (M.test(ne)) {
        const Fe = Ny(ne);
        if (m) {
          const Xe = zy(m);
          Fe < Xe ? (V(Fe), G(ne)) : (me(Z), G(" "));
        } else
          V(Fe), G(ne);
      } else
        G(ne);
    },
    [M, m, Z]
  ), ue = (ne) => {
    W.current ? (X(ne.toLocaleDateString(H)), W.current = !1) : (G(ne.toLocaleDateString(H)), W.current = !0);
  }, De = (ne) => {
    ve(!0), ne.preventDefault();
  };
  return $n(() => {
    if (M.test(q) && M.test(fe)) {
      const ne = Ny(q), Fe = Ny(fe);
      ne > Fe ? me(j) : (me(""), ne < Fe && A([ne, Fe]));
    }
  }, [q, fe, j, M, A]), $n(() => {
    C && (V(new Date()), X(""), G(""), me(""), A(void 0), W.current = !0);
  }, [C, A]), /* @__PURE__ */ N.createElement(
    "div",
    {
      ref: Ce,
      className: `datePicker-container  datePicker-format-${k} ${b}`
    },
    /* @__PURE__ */ N.createElement(
      "button",
      {
        className: "datePicker-inputs-wrapper",
        disabled: y,
        onClick: De
      },
      /* @__PURE__ */ N.createElement(
        bx,
        {
          placeholder: d,
          initialValue: q,
          disabled: y,
          onValueChange: Ue
        }
      ),
      he(x, k),
      /* @__PURE__ */ N.createElement(
        bx,
        {
          placeholder: d,
          initialValue: fe,
          disabled: y,
          onValueChange: ht
        }
      )
    ),
    ae ? /* @__PURE__ */ N.createElement(
      "div",
      {
        className: `datePicker-panel ${L ? "beautiful-background" : ""} `
      },
      /* @__PURE__ */ N.createElement(
        jM,
        {
          monthList: U,
          date: Q,
          message: Se
        }
      ),
      /* @__PURE__ */ N.createElement(
        VM,
        {
          limitDateMin: v,
          limitDateMax: m,
          targetDate: Q,
          startDate: q,
          endDate: fe,
          handleClick: ue
        }
      ),
      /* @__PURE__ */ N.createElement("div", { className: "datePicker-button-wrapper" }, /* @__PURE__ */ N.createElement(
        "button",
        {
          className: "datePicker-action-button",
          onClick: (ne) => Me(ne, -1)
        },
        /* @__PURE__ */ N.createElement(MM, { size: 22, strokeWidth: 1.4 })
      ), /* @__PURE__ */ N.createElement(
        "button",
        {
          className: "datePicker-action-button",
          onClick: (ne) => Ve(ne, -1)
        },
        /* @__PURE__ */ N.createElement(bM, { size: 25, strokeWidth: 1.3 })
      ), /* @__PURE__ */ N.createElement(
        "button",
        {
          className: "datePicker-reset-button",
          onClick: ke
        },
        k === "small" ? /* @__PURE__ */ N.createElement(
          Pf,
          {
            size: 19,
            strokeWidth: 1.3,
            className: "datePicker-reset-button-content"
          }
        ) : /* @__PURE__ */ N.createElement("div", { className: "datePicker-reset-button-content" }, "Reset")
      ), /* @__PURE__ */ N.createElement(
        "button",
        {
          className: "datePicker-action-button",
          onClick: (ne) => Ve(ne, 1)
        },
        /* @__PURE__ */ N.createElement(NM, { size: 25, strokeWidth: 1.3 })
      ), /* @__PURE__ */ N.createElement(
        "button",
        {
          className: "datePicker-action-button",
          onClick: (ne) => Me(ne, 1)
        },
        /* @__PURE__ */ N.createElement(LM, { size: 22, strokeWidth: 1.4 })
      ))
    ) : null
  );
}, VM = ({
  limitDateMin: d,
  limitDateMax: v,
  targetDate: m,
  startDate: C,
  endDate: x,
  handleClick: w
}) => {
  const y = zn(
    (A) => {
      const M = A.toLocaleDateString() === BM, U = PM(A), j = Nx(C), Z = Nx(x), H = d && A < zy(d), Q = v && A > zy(v), V = C && U === j, q = x && U === Z, X = U > j && U < Z;
      return {
        isToday: M,
        isDayUnderLimitDateMin: H,
        isDayAboveLimitDateMax: Q,
        isStartDate: V,
        isEndDate: q,
        isBetweenDates: X
      };
    },
    [C, x, d, v]
  ), k = zn(
    (A, M, U, j, Z) => {
      const H = new Date(j, Z, U), Q = y(H), V = `datePicker-calendar-cell datePicker-calendar-dates ${Q.isStartDate ? "datePicker-calendar-start-date" : ""} ${Q.isEndDate ? "datePicker-calendar-end-date" : ""} ${Q.isBetweenDates ? "datePicker-calendar-date-between" : ""} ${Q.isToday ? "datePicker-calendar-today" : ""}`;
      return Q.isDayUnderLimitDateMin || Q.isDayAboveLimitDateMax ? /* @__PURE__ */ N.createElement(
        "td",
        {
          key: `${A}-${M}`,
          className: "datePicker-calendar-cell datePicker-calendar-dates-none"
        },
        U
      ) : /* @__PURE__ */ N.createElement(
        "td",
        {
          key: `${A}-${M}`,
          onClick: () => w(H),
          className: V
        },
        U
      );
    },
    [w, y]
  ), L = zn(
    (A, M, U, j, Z, H) => {
      const Q = [];
      for (let V = 1; V < 8; V++)
        A === 0 && V < j || M > U ? Q.push(
          /* @__PURE__ */ N.createElement(
            "td",
            {
              key: `${V}`,
              className: "datePicker-calendar-cell"
            }
          )
        ) : (Q.push(k(A, V, M, Z, H)), M++);
      return Q;
    },
    [k]
  ), b = hv(() => {
    const A = [...FM], M = m.getFullYear(), U = m.getMonth(), j = $M(M, U), Z = new Date(M, U, 1).getDay();
    let H = 1;
    for (let Q = 0; Q < 5; Q++) {
      const V = L(
        Q,
        H,
        j,
        Z,
        M,
        U
      );
      if (A.push(
        /* @__PURE__ */ N.createElement("tr", { key: Q, className: "datePicker-calendar-row" }, V)
      ), H > j)
        break;
      H += V.filter((q) => q.props.children).length;
    }
    return A;
  }, [m, L]);
  return /* @__PURE__ */ N.createElement("table", null, /* @__PURE__ */ N.createElement("tbody", null, b));
}, bx = ({
  initialValue: d,
  placeholder: v,
  size: m = 12,
  disabled: C = !1,
  onValueChange: x
}) => {
  const [w, y] = ar(d || "");
  $n(() => {
    y(d), x(d);
  }, [d, x]);
  const k = (b) => {
    y(b.target.value), x(b.target.value);
  }, L = (b) => {
    /^[a-zA-Z]$/.test(b.key) && b.preventDefault();
  };
  return /* @__PURE__ */ N.createElement(
    "input",
    {
      className: "datePicker-inputs-dates",
      type: "text",
      size: m,
      minLength: 10,
      maxLength: 10,
      onKeyDown: L,
      placeholder: v,
      onChange: k,
      value: w,
      disabled: C
    }
  );
}, jM = ({ monthList: d, date: v, message: m }) => {
  if (m)
    return /* @__PURE__ */ N.createElement("div", { className: "datePicker-error-message" }, m);
  const C = `${d[v.getMonth()]} ${v.getFullYear()}`;
  return /* @__PURE__ */ N.createElement("div", { className: "datePicker-displayer" }, C);
}, PM = (d) => Math.floor(d.getTime() / 1e3), $M = (d, v) => 32 - new Date(d, v, 32).getDate(), Nx = (d) => {
  const [v, m, C] = d.split("/").map(Number), x = new Date(C, m - 1, v);
  return Math.floor(x.getTime() / 1e3);
}, Ny = (d) => {
  const [v, m, C] = d.split("/").map(Number);
  return new Date(C, m - 1, v);
}, zy = (d) => {
  const v = new Date();
  return d && v.setDate(v.getDate() + d - 1), v;
}, YM = (d, v) => {
  const m = (C) => {
    d.current && !d.current.contains(C.target) && v();
  };
  $n(() => (document.addEventListener("click", m), () => {
    document.removeEventListener("click", m);
  }));
};
const j_ = ({
  isValid: d,
  isSubmit: v,
  placeholder: m = "Validation",
  disabled: C = !1,
  className: x
}) => {
  const w = v ? /* @__PURE__ */ N.createElement("span", { className: "formButton_spinner" }) : /* @__PURE__ */ N.createElement(
    "span",
    {
      className: `formButton_text ${d && !C ? "formButton_text_valid" : ""}`
    },
    m
  );
  return /* @__PURE__ */ N.createElement(
    "button",
    {
      type: "submit",
      disabled: C || !d,
      className: `formButton_container ${x}`
    },
    w
  );
};
const P_ = ({
  placeholder: d = "My number here!",
  size: v = 16,
  errors: m = "",
  step: C = "1",
  min: x = "-99999",
  max: w = "99999",
  outputNumber: y = !0,
  isSubmit: k = !1,
  isValid: L = !1,
  disabled: b = !1,
  className: A = void 0,
  onFieldChange: M
}) => {
  const [U, j] = ar(""), Z = (V) => {
    M(y ? parseFloat(V.target.value) : V.target.value), j(V.target.value);
  }, H = zn(
    (V) => {
      j(""), M(void 0), V.preventDefault();
    },
    [M]
  ), Q = zn(
    (V, q) => {
      const X = "inputNumber-icon-wrapper";
      return V ? /* @__PURE__ */ N.createElement("div", { className: X }, /* @__PURE__ */ N.createElement(
        By,
        {
          size: 20,
          strokeWidth: 1.8,
          className: "inputNumber-valid-icon"
        }
      )) : q ? /* @__PURE__ */ N.createElement("button", { className: X, onClick: H }, /* @__PURE__ */ N.createElement(
        Pf,
        {
          size: 23,
          strokeWidth: 1.6,
          className: "inputNumber-reset-icon"
        }
      )) : /* @__PURE__ */ N.createElement("div", { className: X }, /* @__PURE__ */ N.createElement(
        OM,
        {
          size: 18,
          strokeWidth: 1.5,
          className: `inputNumber-ambiance-icon ${b ? "inputString-icon-disabled" : ""}`
        }
      ));
    },
    [H, b]
  );
  return $n(() => {
    k && (j(""), M(void 0));
  }, [k, M]), $n(() => {
    b && (j(""), M(void 0));
  }, [b, M]), /* @__PURE__ */ N.createElement("div", { className: `inputNumber-container ${A}` }, /* @__PURE__ */ N.createElement(
    "input",
    {
      type: "number",
      step: C,
      min: x,
      max: w,
      placeholder: d,
      onChange: Z,
      value: U,
      disabled: b,
      className: "inputNumber-text-field",
      style: { inlineSize: `${v * 8.1}px` }
    }
  ), Q(L, U), /* @__PURE__ */ N.createElement(GM, { message: m, disabled: b }));
}, GM = ({
  message: d,
  disabled: v
}) => !d || v ? null : /* @__PURE__ */ N.createElement("div", { className: "inputNumber-error-message" }, d);
const $_ = ({
  type: d = "text",
  regex: v = void 0,
  placeholder: m = "My text here!",
  errors: C = "",
  size: x = 16,
  isSubmit: w = !1,
  isValid: y = !1,
  disabled: k = !1,
  className: L = void 0,
  onFieldChange: b
}) => {
  const [A, M] = ar(""), U = (Q) => {
    if (v) {
      const V = Q.target.value.replace(v, "");
      M(V), b(V);
    } else
      M(Q.target.value), b(Q.target.value);
  }, j = zn(
    (Q) => {
      M(""), b(void 0), Q.preventDefault();
    },
    [b]
  ), Z = zn(() => {
    let Q;
    switch (d) {
      case "password":
        Q = /* @__PURE__ */ N.createElement(
          zM,
          {
            size: 18,
            strokeWidth: 1.8,
            className: ` inputString-password-icon ${k ? "inputString-icon-disabled" : ""}`
          }
        );
        break;
      case "email":
        Q = /* @__PURE__ */ N.createElement(
          wM,
          {
            size: 19,
            strokeWidth: 1.6,
            className: ` inputString-email-icon ${k ? "inputString-icon-disabled" : ""}`
          }
        );
        break;
      default:
        Q = /* @__PURE__ */ N.createElement(
          DM,
          {
            size: 25,
            strokeWidth: 1.2,
            className: ` inputString-text-icon ${k ? "inputString-icon-disabled" : ""}`
          }
        );
        break;
    }
    return Q;
  }, [d, k]), H = zn(
    (Q, V) => {
      const q = "inputString-icon-wrapper";
      return Q ? /* @__PURE__ */ N.createElement("div", { className: q }, /* @__PURE__ */ N.createElement(
        By,
        {
          size: 20,
          strokeWidth: 1.8,
          className: "inputString-valid-icon"
        }
      )) : V ? /* @__PURE__ */ N.createElement("button", { className: q, onClick: j }, /* @__PURE__ */ N.createElement(
        Pf,
        {
          size: 23,
          strokeWidth: 1.6,
          className: "inputString-reset-icon"
        }
      )) : /* @__PURE__ */ N.createElement("div", { className: q }, Z());
    },
    [j, Z]
  );
  return $n(() => {
    w && (M(""), b(void 0));
  }, [w, b]), $n(() => {
    k && (M(""), b(void 0));
  }, [k, b]), /* @__PURE__ */ N.createElement("div", { className: `inputString-container ${L}` }, /* @__PURE__ */ N.createElement(
    "input",
    {
      type: d,
      placeholder: m,
      onChange: U,
      value: A,
      size: x < 10 ? 10 : x,
      disabled: k,
      className: "inputString-text-field"
    }
  ), H(y, A), /* @__PURE__ */ N.createElement(WM, { message: C, disabled: k }));
}, WM = ({
  message: d,
  disabled: v
}) => !d || v ? null : /* @__PURE__ */ N.createElement("div", { className: "inputString-error-message" }, d);
const Y_ = ({
  children: d,
  style: v = void 0,
  isShadow: m = !1,
  className: C = ""
}) => {
  const x = v === "background" ? "magicCard-beautiful-background" : "", w = v === "border" ? "magicCard-styled-border" : "", y = v ? "" : "magicCard-no-style-selected";
  return /* @__PURE__ */ N.createElement(
    "div",
    {
      className: `magicCard-container-mandatory-style
			${C || "magicCard-container"}
			${x}
			${w} 
			${y}
			${m ? "magicCard-shadow-effect" : "magicCard-shadow-border"}`
    },
    d
  );
};
function QM(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var L1 = {}, KM = {
  get exports() {
    return L1;
  },
  set exports(d) {
    L1 = d;
  }
}, Ma = {}, Uy = {}, qM = {
  get exports() {
    return Uy;
  },
  set exports(d) {
    Uy = d;
  }
}, R1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mx;
function XM() {
  return Mx || (Mx = 1, function(d) {
    function v(ue, De) {
      var ne = ue.length;
      ue.push(De);
      e:
        for (; 0 < ne; ) {
          var Fe = ne - 1 >>> 1, Xe = ue[Fe];
          if (0 < x(Xe, De))
            ue[Fe] = De, ue[ne] = Xe, ne = Fe;
          else
            break e;
        }
    }
    function m(ue) {
      return ue.length === 0 ? null : ue[0];
    }
    function C(ue) {
      if (ue.length === 0)
        return null;
      var De = ue[0], ne = ue.pop();
      if (ne !== De) {
        ue[0] = ne;
        e:
          for (var Fe = 0, Xe = ue.length, yn = Xe >>> 1; Fe < yn; ) {
            var Un = 2 * (Fe + 1) - 1, ir = ue[Un], ce = Un + 1, rt = ue[ce];
            if (0 > x(ir, ne))
              ce < Xe && 0 > x(rt, ir) ? (ue[Fe] = rt, ue[ce] = ne, Fe = ce) : (ue[Fe] = ir, ue[Un] = ne, Fe = Un);
            else if (ce < Xe && 0 > x(rt, ne))
              ue[Fe] = rt, ue[ce] = ne, Fe = ce;
            else
              break e;
          }
      }
      return De;
    }
    function x(ue, De) {
      var ne = ue.sortIndex - De.sortIndex;
      return ne !== 0 ? ne : ue.id - De.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var w = performance;
      d.unstable_now = function() {
        return w.now();
      };
    } else {
      var y = Date, k = y.now();
      d.unstable_now = function() {
        return y.now() - k;
      };
    }
    var L = [], b = [], A = 1, M = null, U = 3, j = !1, Z = !1, H = !1, Q = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function X(ue) {
      for (var De = m(b); De !== null; ) {
        if (De.callback === null)
          C(b);
        else if (De.startTime <= ue)
          C(b), De.sortIndex = De.expirationTime, v(L, De);
        else
          break;
        De = m(b);
      }
    }
    function fe(ue) {
      if (H = !1, X(ue), !Z)
        if (m(L) !== null)
          Z = !0, Ue(G);
        else {
          var De = m(b);
          De !== null && ht(fe, De.startTime - ue);
        }
    }
    function G(ue, De) {
      Z = !1, H && (H = !1, V(ve), ve = -1), j = !0;
      var ne = U;
      try {
        for (X(De), M = m(L); M !== null && (!(M.expirationTime > De) || ue && !Ce()); ) {
          var Fe = M.callback;
          if (typeof Fe == "function") {
            M.callback = null, U = M.priorityLevel;
            var Xe = Fe(M.expirationTime <= De);
            De = d.unstable_now(), typeof Xe == "function" ? M.callback = Xe : M === m(L) && C(L), X(De);
          } else
            C(L);
          M = m(L);
        }
        if (M !== null)
          var yn = !0;
        else {
          var Un = m(b);
          Un !== null && ht(fe, Un.startTime - De), yn = !1;
        }
        return yn;
      } finally {
        M = null, U = ne, j = !1;
      }
    }
    var W = !1, ae = null, ve = -1, Se = 5, me = -1;
    function Ce() {
      return !(d.unstable_now() - me < Se);
    }
    function Ve() {
      if (ae !== null) {
        var ue = d.unstable_now();
        me = ue;
        var De = !0;
        try {
          De = ae(!0, ue);
        } finally {
          De ? Me() : (W = !1, ae = null);
        }
      } else
        W = !1;
    }
    var Me;
    if (typeof q == "function")
      Me = function() {
        q(Ve);
      };
    else if (typeof MessageChannel < "u") {
      var he = new MessageChannel(), ke = he.port2;
      he.port1.onmessage = Ve, Me = function() {
        ke.postMessage(null);
      };
    } else
      Me = function() {
        Q(Ve, 0);
      };
    function Ue(ue) {
      ae = ue, W || (W = !0, Me());
    }
    function ht(ue, De) {
      ve = Q(function() {
        ue(d.unstable_now());
      }, De);
    }
    d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(ue) {
      ue.callback = null;
    }, d.unstable_continueExecution = function() {
      Z || j || (Z = !0, Ue(G));
    }, d.unstable_forceFrameRate = function(ue) {
      0 > ue || 125 < ue ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Se = 0 < ue ? Math.floor(1e3 / ue) : 5;
    }, d.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, d.unstable_getFirstCallbackNode = function() {
      return m(L);
    }, d.unstable_next = function(ue) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var De = 3;
          break;
        default:
          De = U;
      }
      var ne = U;
      U = De;
      try {
        return ue();
      } finally {
        U = ne;
      }
    }, d.unstable_pauseExecution = function() {
    }, d.unstable_requestPaint = function() {
    }, d.unstable_runWithPriority = function(ue, De) {
      switch (ue) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ue = 3;
      }
      var ne = U;
      U = ue;
      try {
        return De();
      } finally {
        U = ne;
      }
    }, d.unstable_scheduleCallback = function(ue, De, ne) {
      var Fe = d.unstable_now();
      switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? Fe + ne : Fe) : ne = Fe, ue) {
        case 1:
          var Xe = -1;
          break;
        case 2:
          Xe = 250;
          break;
        case 5:
          Xe = 1073741823;
          break;
        case 4:
          Xe = 1e4;
          break;
        default:
          Xe = 5e3;
      }
      return Xe = ne + Xe, ue = { id: A++, callback: De, priorityLevel: ue, startTime: ne, expirationTime: Xe, sortIndex: -1 }, ne > Fe ? (ue.sortIndex = ne, v(b, ue), m(L) === null && ue === m(b) && (H ? (V(ve), ve = -1) : H = !0, ht(fe, ne - Fe))) : (ue.sortIndex = Xe, v(L, ue), Z || j || (Z = !0, Ue(G))), ue;
    }, d.unstable_shouldYield = Ce, d.unstable_wrapCallback = function(ue) {
      var De = U;
      return function() {
        var ne = U;
        U = De;
        try {
          return ue.apply(this, arguments);
        } finally {
          U = ne;
        }
      };
    };
  }(R1)), R1;
}
var k1 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lx;
function ZM() {
  return Lx || (Lx = 1, function(d) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var v = !1, m = !1, C = 5;
      function x(Ee, Ye) {
        var ct = Ee.length;
        Ee.push(Ye), k(Ee, Ye, ct);
      }
      function w(Ee) {
        return Ee.length === 0 ? null : Ee[0];
      }
      function y(Ee) {
        if (Ee.length === 0)
          return null;
        var Ye = Ee[0], ct = Ee.pop();
        return ct !== Ye && (Ee[0] = ct, L(Ee, ct, 0)), Ye;
      }
      function k(Ee, Ye, ct) {
        for (var zt = ct; zt > 0; ) {
          var dn = zt - 1 >>> 1, lr = Ee[dn];
          if (b(lr, Ye) > 0)
            Ee[dn] = Ye, Ee[zt] = lr, zt = dn;
          else
            return;
        }
      }
      function L(Ee, Ye, ct) {
        for (var zt = ct, dn = Ee.length, lr = dn >>> 1; zt < lr; ) {
          var kn = (zt + 1) * 2 - 1, sa = Ee[kn], nn = kn + 1, Ja = Ee[nn];
          if (b(sa, Ye) < 0)
            nn < dn && b(Ja, sa) < 0 ? (Ee[zt] = Ja, Ee[nn] = Ye, zt = nn) : (Ee[zt] = sa, Ee[kn] = Ye, zt = kn);
          else if (nn < dn && b(Ja, Ye) < 0)
            Ee[zt] = Ja, Ee[nn] = Ye, zt = nn;
          else
            return;
        }
      }
      function b(Ee, Ye) {
        var ct = Ee.sortIndex - Ye.sortIndex;
        return ct !== 0 ? ct : Ee.id - Ye.id;
      }
      var A = 1, M = 2, U = 3, j = 4, Z = 5;
      function H(Ee, Ye) {
      }
      var Q = typeof performance == "object" && typeof performance.now == "function";
      if (Q) {
        var V = performance;
        d.unstable_now = function() {
          return V.now();
        };
      } else {
        var q = Date, X = q.now();
        d.unstable_now = function() {
          return q.now() - X;
        };
      }
      var fe = 1073741823, G = -1, W = 250, ae = 5e3, ve = 1e4, Se = fe, me = [], Ce = [], Ve = 1, Me = null, he = U, ke = !1, Ue = !1, ht = !1, ue = typeof setTimeout == "function" ? setTimeout : null, De = typeof clearTimeout == "function" ? clearTimeout : null, ne = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Fe(Ee) {
        for (var Ye = w(Ce); Ye !== null; ) {
          if (Ye.callback === null)
            y(Ce);
          else if (Ye.startTime <= Ee)
            y(Ce), Ye.sortIndex = Ye.expirationTime, x(me, Ye);
          else
            return;
          Ye = w(Ce);
        }
      }
      function Xe(Ee) {
        if (ht = !1, Fe(Ee), !Ue)
          if (w(me) !== null)
            Ue = !0, za(yn);
          else {
            var Ye = w(Ce);
            Ye !== null && Yn(Xe, Ye.startTime - Ee);
          }
      }
      function yn(Ee, Ye) {
        Ue = !1, ht && (ht = !1, oa()), ke = !0;
        var ct = he;
        try {
          var zt;
          if (!m)
            return Un(Ee, Ye);
        } finally {
          Me = null, he = ct, ke = !1;
        }
      }
      function Un(Ee, Ye) {
        var ct = Ye;
        for (Fe(ct), Me = w(me); Me !== null && !v && !(Me.expirationTime > ct && (!Ee || Xa())); ) {
          var zt = Me.callback;
          if (typeof zt == "function") {
            Me.callback = null, he = Me.priorityLevel;
            var dn = Me.expirationTime <= ct, lr = zt(dn);
            ct = d.unstable_now(), typeof lr == "function" ? Me.callback = lr : Me === w(me) && y(me), Fe(ct);
          } else
            y(me);
          Me = w(me);
        }
        if (Me !== null)
          return !0;
        var kn = w(Ce);
        return kn !== null && Yn(Xe, kn.startTime - ct), !1;
      }
      function ir(Ee, Ye) {
        switch (Ee) {
          case A:
          case M:
          case U:
          case j:
          case Z:
            break;
          default:
            Ee = U;
        }
        var ct = he;
        he = Ee;
        try {
          return Ye();
        } finally {
          he = ct;
        }
      }
      function ce(Ee) {
        var Ye;
        switch (he) {
          case A:
          case M:
          case U:
            Ye = U;
            break;
          default:
            Ye = he;
            break;
        }
        var ct = he;
        he = Ye;
        try {
          return Ee();
        } finally {
          he = ct;
        }
      }
      function rt(Ee) {
        var Ye = he;
        return function() {
          var ct = he;
          he = Ye;
          try {
            return Ee.apply(this, arguments);
          } finally {
            he = ct;
          }
        };
      }
      function st(Ee, Ye, ct) {
        var zt = d.unstable_now(), dn;
        if (typeof ct == "object" && ct !== null) {
          var lr = ct.delay;
          typeof lr == "number" && lr > 0 ? dn = zt + lr : dn = zt;
        } else
          dn = zt;
        var kn;
        switch (Ee) {
          case A:
            kn = G;
            break;
          case M:
            kn = W;
            break;
          case Z:
            kn = Se;
            break;
          case j:
            kn = ve;
            break;
          case U:
          default:
            kn = ae;
            break;
        }
        var sa = dn + kn, nn = {
          id: Ve++,
          callback: Ye,
          priorityLevel: Ee,
          startTime: dn,
          expirationTime: sa,
          sortIndex: -1
        };
        return dn > zt ? (nn.sortIndex = dn, x(Ce, nn), w(me) === null && nn === w(Ce) && (ht ? oa() : ht = !0, Yn(Xe, dn - zt))) : (nn.sortIndex = sa, x(me, nn), !Ue && !ke && (Ue = !0, za(yn))), nn;
      }
      function Ct() {
      }
      function tn() {
        !Ue && !ke && (Ue = !0, za(yn));
      }
      function Gt() {
        return w(me);
      }
      function Mt(Ee) {
        Ee.callback = null;
      }
      function qt() {
        return he;
      }
      var wn = !1, fn = null, Wt = -1, mr = C, br = -1;
      function Xa() {
        var Ee = d.unstable_now() - br;
        return !(Ee < mr);
      }
      function Za() {
      }
      function Yr(Ee) {
        if (Ee < 0 || Ee > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Ee > 0 ? mr = Math.floor(1e3 / Ee) : mr = C;
      }
      var Nr = function() {
        if (fn !== null) {
          var Ee = d.unstable_now();
          br = Ee;
          var Ye = !0, ct = !0;
          try {
            ct = fn(Ye, Ee);
          } finally {
            ct ? Rn() : (wn = !1, fn = null);
          }
        } else
          wn = !1;
      }, Rn;
      if (typeof ne == "function")
        Rn = function() {
          ne(Nr);
        };
      else if (typeof MessageChannel < "u") {
        var Oa = new MessageChannel(), Gr = Oa.port2;
        Oa.port1.onmessage = Nr, Rn = function() {
          Gr.postMessage(null);
        };
      } else
        Rn = function() {
          ue(Nr, 0);
        };
      function za(Ee) {
        fn = Ee, wn || (wn = !0, Rn());
      }
      function Yn(Ee, Ye) {
        Wt = ue(function() {
          Ee(d.unstable_now());
        }, Ye);
      }
      function oa() {
        De(Wt), Wt = -1;
      }
      var Nl = Za, ua = null;
      d.unstable_IdlePriority = Z, d.unstable_ImmediatePriority = A, d.unstable_LowPriority = j, d.unstable_NormalPriority = U, d.unstable_Profiling = ua, d.unstable_UserBlockingPriority = M, d.unstable_cancelCallback = Mt, d.unstable_continueExecution = tn, d.unstable_forceFrameRate = Yr, d.unstable_getCurrentPriorityLevel = qt, d.unstable_getFirstCallbackNode = Gt, d.unstable_next = ce, d.unstable_pauseExecution = Ct, d.unstable_requestPaint = Nl, d.unstable_runWithPriority = ir, d.unstable_scheduleCallback = st, d.unstable_shouldYield = Xa, d.unstable_wrapCallback = rt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(k1)), k1;
}
var _x;
function ew() {
  return _x || (_x = 1, function(d) {
    process.env.NODE_ENV === "production" ? d.exports = XM() : d.exports = ZM();
  }(qM)), Uy;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ox;
function JM() {
  if (Ox)
    return Ma;
  Ox = 1;
  var d = N, v = ew();
  function m(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var C = /* @__PURE__ */ new Set(), x = {};
  function w(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (x[n] = r, n = 0; n < r.length; n++)
      C.add(r[n]);
  }
  var k = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), L = Object.prototype.hasOwnProperty, b = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, A = {}, M = {};
  function U(n) {
    return L.call(M, n) ? !0 : L.call(A, n) ? !1 : b.test(n) ? M[n] = !0 : (A[n] = !0, !1);
  }
  function j(n, r, l, u) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Z(n, r, l, u) {
    if (r === null || typeof r > "u" || j(n, r, l, u))
      return !0;
    if (u)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function H(n, r, l, u, c, p, S) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = p, this.removeEmptyString = S;
  }
  var Q = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Q[n] = new H(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Q[r] = new H(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Q[n] = new H(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Q[n] = new H(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Q[n] = new H(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Q[n] = new H(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Q[n] = new H(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Q[n] = new H(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Q[n] = new H(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var V = /[\-:]([a-z])/g;
  function q(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      V,
      q
    );
    Q[r] = new H(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(V, q);
    Q[r] = new H(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(V, q);
    Q[r] = new H(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Q[n] = new H(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Q.xlinkHref = new H("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Q[n] = new H(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function X(n, r, l, u) {
    var c = Q.hasOwnProperty(r) ? Q[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Z(r, l, c, u) && (l = null), u || c === null ? U(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, u = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, u ? n.setAttributeNS(u, r, l) : n.setAttribute(r, l))));
  }
  var fe = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, G = Symbol.for("react.element"), W = Symbol.for("react.portal"), ae = Symbol.for("react.fragment"), ve = Symbol.for("react.strict_mode"), Se = Symbol.for("react.profiler"), me = Symbol.for("react.provider"), Ce = Symbol.for("react.context"), Ve = Symbol.for("react.forward_ref"), Me = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), ke = Symbol.for("react.memo"), Ue = Symbol.for("react.lazy"), ht = Symbol.for("react.offscreen"), ue = Symbol.iterator;
  function De(n) {
    return n === null || typeof n != "object" ? null : (n = ue && n[ue] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ne = Object.assign, Fe;
  function Xe(n) {
    if (Fe === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        Fe = r && r[1] || "";
      }
    return `
` + Fe + n;
  }
  var yn = !1;
  function Un(n, r) {
    if (!n || yn)
      return "";
    yn = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (K) {
            var u = K;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (K) {
            u = K;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (K) {
          u = K;
        }
        n();
      }
    } catch (K) {
      if (K && u && typeof K.stack == "string") {
        for (var c = K.stack.split(`
`), p = u.stack.split(`
`), S = c.length - 1, R = p.length - 1; 1 <= S && 0 <= R && c[S] !== p[R]; )
          R--;
        for (; 1 <= S && 0 <= R; S--, R--)
          if (c[S] !== p[R]) {
            if (S !== 1 || R !== 1)
              do
                if (S--, R--, 0 > R || c[S] !== p[R]) {
                  var D = `
` + c[S].replace(" at new ", " at ");
                  return n.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", n.displayName)), D;
                }
              while (1 <= S && 0 <= R);
            break;
          }
      }
    } finally {
      yn = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? Xe(n) : "";
  }
  function ir(n) {
    switch (n.tag) {
      case 5:
        return Xe(n.type);
      case 16:
        return Xe("Lazy");
      case 13:
        return Xe("Suspense");
      case 19:
        return Xe("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Un(n.type, !1), n;
      case 11:
        return n = Un(n.type.render, !1), n;
      case 1:
        return n = Un(n.type, !0), n;
      default:
        return "";
    }
  }
  function ce(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case ae:
        return "Fragment";
      case W:
        return "Portal";
      case Se:
        return "Profiler";
      case ve:
        return "StrictMode";
      case Me:
        return "Suspense";
      case he:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Ce:
          return (n.displayName || "Context") + ".Consumer";
        case me:
          return (n._context.displayName || "Context") + ".Provider";
        case Ve:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case ke:
          return r = n.displayName || null, r !== null ? r : ce(n.type) || "Memo";
        case Ue:
          r = n._payload, n = n._init;
          try {
            return ce(n(r));
          } catch {
          }
      }
    return null;
  }
  function rt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ce(r);
      case 8:
        return r === ve ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function st(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Ct(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function tn(n) {
    var r = Ct(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, p = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(S) {
        u = "" + S, p.call(this, S);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(S) {
        u = "" + S;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Gt(n) {
    n._valueTracker || (n._valueTracker = tn(n));
  }
  function Mt(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), u = "";
    return n && (u = Ct(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== l ? (r.setValue(n), !0) : !1;
  }
  function qt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function wn(n, r) {
    var l = r.checked;
    return ne({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function fn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    l = st(r.value != null ? r.value : l), n._wrapperState = { initialChecked: u, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Wt(n, r) {
    r = r.checked, r != null && X(n, "checked", r, !1);
  }
  function mr(n, r) {
    Wt(n, r);
    var l = st(r.value), u = r.type;
    if (l != null)
      u === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Xa(n, r.type, l) : r.hasOwnProperty("defaultValue") && Xa(n, r.type, st(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function br(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Xa(n, r, l) {
    (r !== "number" || qt(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Za = Array.isArray;
  function Yr(n, r, l, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && u && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + st(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Nr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(m(91));
    return ne({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Rn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(m(92));
        if (Za(l)) {
          if (1 < l.length)
            throw Error(m(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: st(l) };
  }
  function Oa(n, r) {
    var l = st(r.value), u = st(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), u != null && (n.defaultValue = "" + u);
  }
  function Gr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function za(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Yn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? za(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var oa, Nl = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, u, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (oa = oa || document.createElement("div"), oa.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = oa.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ua(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Ee = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ye = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ee).forEach(function(n) {
    Ye.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Ee[r] = Ee[n];
    });
  });
  function ct(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Ee.hasOwnProperty(n) && Ee[n] ? ("" + r).trim() : r + "px";
  }
  function zt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var u = l.indexOf("--") === 0, c = ct(l, r[l], u);
        l === "float" && (l = "cssFloat"), u ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var dn = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function lr(n, r) {
    if (r) {
      if (dn[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(m(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(m(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(m(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(m(62));
    }
  }
  function kn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var sa = null;
  function nn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Ja = null, gn = null, rn = null;
  function wv(n) {
    if (n = es(n)) {
      if (typeof Ja != "function")
        throw Error(m(280));
      var r = n.stateNode;
      r && (r = Pe(r), Ja(n.stateNode, n.type, r));
    }
  }
  function $s(n) {
    gn ? rn ? rn.push(n) : rn = [n] : gn = n;
  }
  function Ys() {
    if (gn) {
      var n = gn, r = rn;
      if (rn = gn = null, wv(n), r)
        for (n = 0; n < r.length; n++)
          wv(r[n]);
    }
  }
  function Rv(n, r) {
    return n(r);
  }
  function kv() {
  }
  var Gs = !1;
  function Gf(n, r, l) {
    if (Gs)
      return n(r, l);
    Gs = !0;
    try {
      return Rv(n, r, l);
    } finally {
      Gs = !1, (gn !== null || rn !== null) && (kv(), Ys());
    }
  }
  function Mu(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var u = Pe(l);
    if (u === null)
      return null;
    l = u[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(m(231, r, typeof l));
    return l;
  }
  var Ws = !1;
  if (k)
    try {
      var Ml = {};
      Object.defineProperty(Ml, "passive", { get: function() {
        Ws = !0;
      } }), window.addEventListener("test", Ml, Ml), window.removeEventListener("test", Ml, Ml);
    } catch {
      Ws = !1;
    }
  function xo(n, r, l, u, c, p, S, R, D) {
    var K = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, K);
    } catch (le) {
      this.onError(le);
    }
  }
  var Ua = !1, mi = null, wo = !1, Lu = null, Wf = { onError: function(n) {
    Ua = !0, mi = n;
  } };
  function Qf(n, r, l, u, c, p, S, R, D) {
    Ua = !1, mi = null, xo.apply(Wf, arguments);
  }
  function Ro(n, r, l, u, c, p, S, R, D) {
    if (Qf.apply(this, arguments), Ua) {
      if (Ua) {
        var K = mi;
        Ua = !1, mi = null;
      } else
        throw Error(m(198));
      wo || (wo = !0, Lu = K);
    }
  }
  function ei(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function _u(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function ko(n) {
    if (ei(n) !== n)
      throw Error(m(188));
  }
  function yr(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ei(n), r === null)
        throw Error(m(188));
      return r !== n ? null : n;
    }
    for (var l = n, u = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var p = c.alternate;
      if (p === null) {
        if (u = c.return, u !== null) {
          l = u;
          continue;
        }
        break;
      }
      if (c.child === p.child) {
        for (p = c.child; p; ) {
          if (p === l)
            return ko(c), n;
          if (p === u)
            return ko(c), r;
          p = p.sibling;
        }
        throw Error(m(188));
      }
      if (l.return !== u.return)
        l = c, u = p;
      else {
        for (var S = !1, R = c.child; R; ) {
          if (R === l) {
            S = !0, l = c, u = p;
            break;
          }
          if (R === u) {
            S = !0, u = c, l = p;
            break;
          }
          R = R.sibling;
        }
        if (!S) {
          for (R = p.child; R; ) {
            if (R === l) {
              S = !0, l = p, u = c;
              break;
            }
            if (R === u) {
              S = !0, u = p, l = c;
              break;
            }
            R = R.sibling;
          }
          if (!S)
            throw Error(m(189));
        }
      }
      if (l.alternate !== u)
        throw Error(m(190));
    }
    if (l.tag !== 3)
      throw Error(m(188));
    return l.stateNode.current === l ? n : r;
  }
  function Dv(n) {
    return n = yr(n), n !== null ? bv(n) : null;
  }
  function bv(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = bv(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Kf = v.unstable_scheduleCallback, Nv = v.unstable_cancelCallback, Gy = v.unstable_shouldYield, Wy = v.unstable_requestPaint, an = v.unstable_now, Qy = v.unstable_getCurrentPriorityLevel, yi = v.unstable_ImmediatePriority, ft = v.unstable_UserBlockingPriority, Wi = v.unstable_NormalPriority, Mv = v.unstable_LowPriority, qf = v.unstable_IdlePriority, Ou = null, Aa = null;
  function Lv(n) {
    if (Aa && typeof Aa.onCommitFiberRoot == "function")
      try {
        Aa.onCommitFiberRoot(Ou, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var ca = Math.clz32 ? Math.clz32 : Ky, _v = Math.log, Ov = Math.LN2;
  function Ky(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (_v(n) / Ov | 0) | 0;
  }
  var Qs = 64, Do = 4194304;
  function Ll(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ha(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var u = 0, c = n.suspendedLanes, p = n.pingedLanes, S = l & 268435455;
    if (S !== 0) {
      var R = S & ~c;
      R !== 0 ? u = Ll(R) : (p &= S, p !== 0 && (u = Ll(p)));
    } else
      S = l & ~c, S !== 0 ? u = Ll(S) : p !== 0 && (u = Ll(p));
    if (u === 0)
      return 0;
    if (r !== 0 && r !== u && !(r & c) && (c = u & -u, p = r & -r, c >= p || c === 16 && (p & 4194240) !== 0))
      return r;
    if (u & 4 && (u |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= u; 0 < r; )
        l = 31 - ca(r), c = 1 << l, u |= n[l], r &= ~c;
    return u;
  }
  function Xf(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ks(n, r) {
    for (var l = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, p = n.pendingLanes; 0 < p; ) {
      var S = 31 - ca(p), R = 1 << S, D = c[S];
      D === -1 ? (!(R & l) || R & u) && (c[S] = Xf(R, r)) : D <= r && (n.expiredLanes |= R), p &= ~R;
    }
  }
  function Zf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function qs() {
    var n = Qs;
    return Qs <<= 1, !(Qs & 4194240) && (Qs = 64), n;
  }
  function Jf(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function _l(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - ca(r), n[r] = l;
  }
  function qy(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - ca(l), p = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, l &= ~p;
    }
  }
  function zu(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var u = 31 - ca(l), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), l &= ~c;
    }
  }
  var Nt = 0;
  function ed(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var zv, Xs, Ut, Uv, td, nt = !1, Uu = [], Sn = null, fa = null, da = null, Au = /* @__PURE__ */ new Map(), Dn = /* @__PURE__ */ new Map(), Lt = [], Xy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ia(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Sn = null;
        break;
      case "dragenter":
      case "dragleave":
        fa = null;
        break;
      case "mouseover":
      case "mouseout":
        da = null;
        break;
      case "pointerover":
      case "pointerout":
        Au.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Dn.delete(r.pointerId);
    }
  }
  function or(n, r, l, u, c, p) {
    return n === null || n.nativeEvent !== p ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: u, nativeEvent: p, targetContainers: [c] }, r !== null && (r = es(r), r !== null && Xs(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Qi(n, r, l, u, c) {
    switch (r) {
      case "focusin":
        return Sn = or(Sn, n, r, l, u, c), !0;
      case "dragenter":
        return fa = or(fa, n, r, l, u, c), !0;
      case "mouseover":
        return da = or(da, n, r, l, u, c), !0;
      case "pointerover":
        var p = c.pointerId;
        return Au.set(p, or(Au.get(p) || null, n, r, l, u, c)), !0;
      case "gotpointercapture":
        return p = c.pointerId, Dn.set(p, or(Dn.get(p) || null, n, r, l, u, c)), !0;
    }
    return !1;
  }
  function Av(n) {
    var r = va(n.target);
    if (r !== null) {
      var l = ei(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = _u(l), r !== null) {
            n.blockedOn = r, td(n.priority, function() {
              Ut(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function bo(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ec(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var u = new l.constructor(l.type, l);
        sa = u, l.target.dispatchEvent(u), sa = null;
      } else
        return r = es(l), r !== null && Xs(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function nd(n, r, l) {
    bo(n) && l.delete(r);
  }
  function Hv() {
    nt = !1, Sn !== null && bo(Sn) && (Sn = null), fa !== null && bo(fa) && (fa = null), da !== null && bo(da) && (da = null), Au.forEach(nd), Dn.forEach(nd);
  }
  function Hu(n, r) {
    n.blockedOn === r && (n.blockedOn = null, nt || (nt = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, Hv)));
  }
  function Iu(n) {
    function r(c) {
      return Hu(c, n);
    }
    if (0 < Uu.length) {
      Hu(Uu[0], n);
      for (var l = 1; l < Uu.length; l++) {
        var u = Uu[l];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Sn !== null && Hu(Sn, n), fa !== null && Hu(fa, n), da !== null && Hu(da, n), Au.forEach(r), Dn.forEach(r), l = 0; l < Lt.length; l++)
      u = Lt[l], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Lt.length && (l = Lt[0], l.blockedOn === null); )
      Av(l), l.blockedOn === null && Lt.shift();
  }
  var No = fe.ReactCurrentBatchConfig, Ol = !0;
  function Iv(n, r, l, u) {
    var c = Nt, p = No.transition;
    No.transition = null;
    try {
      Nt = 1, Js(n, r, l, u);
    } finally {
      Nt = c, No.transition = p;
    }
  }
  function Zs(n, r, l, u) {
    var c = Nt, p = No.transition;
    No.transition = null;
    try {
      Nt = 4, Js(n, r, l, u);
    } finally {
      Nt = c, No.transition = p;
    }
  }
  function Js(n, r, l, u) {
    if (Ol) {
      var c = ec(n, r, l, u);
      if (c === null)
        dc(n, r, u, Fu, l), Ia(n, u);
      else if (Qi(c, n, r, l, u))
        u.stopPropagation();
      else if (Ia(n, u), r & 4 && -1 < Xy.indexOf(n)) {
        for (; c !== null; ) {
          var p = es(c);
          if (p !== null && zv(p), p = ec(n, r, l, u), p === null && dc(n, r, u, Fu, l), p === c)
            break;
          c = p;
        }
        c !== null && u.stopPropagation();
      } else
        dc(n, r, u, null, l);
    }
  }
  var Fu = null;
  function ec(n, r, l, u) {
    if (Fu = null, n = nn(u), n = va(n), n !== null)
      if (r = ei(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = _u(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Fu = n, null;
  }
  function rd(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Qy()) {
          case yi:
            return 1;
          case ft:
            return 4;
          case Wi:
          case Mv:
            return 16;
          case qf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var gi = null, Bu = null, Vu = null;
  function ad() {
    if (Vu)
      return Vu;
    var n, r = Bu, l = r.length, u, c = "value" in gi ? gi.value : gi.textContent, p = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var S = l - n;
    for (u = 1; u <= S && r[l - u] === c[p - u]; u++)
      ;
    return Vu = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function Mo(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ju() {
    return !0;
  }
  function Fv() {
    return !1;
  }
  function Wr(n) {
    function r(l, u, c, p, S) {
      this._reactName = l, this._targetInst = c, this.type = u, this.nativeEvent = p, this.target = S, this.currentTarget = null;
      for (var R in n)
        n.hasOwnProperty(R) && (l = n[R], this[R] = l ? l(p) : p[R]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? ju : Fv, this.isPropagationStopped = Fv, this;
    }
    return ne(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ju);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ju);
    }, persist: function() {
    }, isPersistent: ju }), r;
  }
  var Ki = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, tc = Wr(Ki), Lo = ne({}, Ki, { view: 0, detail: 0 }), Bv = Wr(Lo), nc, id, Pu, An = ne({}, Lo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: sd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Pu && (Pu && n.type === "mousemove" ? (nc = n.screenX - Pu.screenX, id = n.screenY - Pu.screenY) : id = nc = 0, Pu = n), nc);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : id;
  } }), rc = Wr(An), Vv = ne({}, An, { dataTransfer: 0 }), jv = Wr(Vv), Zy = ne({}, Lo, { relatedTarget: 0 }), qi = Wr(Zy), ld = ne({}, Ki, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Pv = Wr(ld), Jy = ne({}, Ki, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), eg = Wr(Jy), tg = ne({}, Ki, { data: 0 }), od = Wr(tg), ud = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, $v = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Yv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Gv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Yv[n]) ? !!r[n] : !1;
  }
  function sd() {
    return Gv;
  }
  var Si = ne({}, Lo, { key: function(n) {
    if (n.key) {
      var r = ud[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Mo(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? $v[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: sd, charCode: function(n) {
    return n.type === "keypress" ? Mo(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Mo(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ng = Wr(Si), cd = ne({}, An, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ac = Wr(cd), fd = ne({}, Lo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: sd }), rg = Wr(fd), ic = ne({}, Ki, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wv = Wr(ic), Mr = ne({}, An, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ei = Wr(Mr), En = [9, 13, 27, 32], Fa = k && "CompositionEvent" in window, zl = null;
  k && "documentMode" in document && (zl = document.documentMode);
  var lc = k && "TextEvent" in window && !zl, Qv = k && (!Fa || zl && 8 < zl && 11 >= zl), _o = String.fromCharCode(32), Kv = !1;
  function qv(n, r) {
    switch (n) {
      case "keyup":
        return En.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function oc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Oo = !1;
  function ag(n, r) {
    switch (n) {
      case "compositionend":
        return oc(r);
      case "keypress":
        return r.which !== 32 ? null : (Kv = !0, _o);
      case "textInput":
        return n = r.data, n === _o && Kv ? null : n;
      default:
        return null;
    }
  }
  function ig(n, r) {
    if (Oo)
      return n === "compositionend" || !Fa && qv(n, r) ? (n = ad(), Vu = Bu = gi = null, Oo = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Qv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Xv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Zv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Xv[n.type] : r === "textarea";
  }
  function Jv(n, r, l, u) {
    $s(u), r = Xu(r, "onChange"), 0 < r.length && (l = new tc("onChange", "change", null, l, u), n.push({ event: l, listeners: r }));
  }
  var $u = null, zo = null;
  function Uo(n) {
    fc(n, 0);
  }
  function Ao(n) {
    var r = Io(n);
    if (Mt(r))
      return n;
  }
  function eh(n, r) {
    if (n === "change")
      return r;
  }
  var dd = !1;
  if (k) {
    var pd;
    if (k) {
      var vd = "oninput" in document;
      if (!vd) {
        var th = document.createElement("div");
        th.setAttribute("oninput", "return;"), vd = typeof th.oninput == "function";
      }
      pd = vd;
    } else
      pd = !1;
    dd = pd && (!document.documentMode || 9 < document.documentMode);
  }
  function nh() {
    $u && ($u.detachEvent("onpropertychange", rh), zo = $u = null);
  }
  function rh(n) {
    if (n.propertyName === "value" && Ao(zo)) {
      var r = [];
      Jv(r, zo, n, nn(n)), Gf(Uo, r);
    }
  }
  function lg(n, r, l) {
    n === "focusin" ? (nh(), $u = r, zo = l, $u.attachEvent("onpropertychange", rh)) : n === "focusout" && nh();
  }
  function og(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Ao(zo);
  }
  function ug(n, r) {
    if (n === "click")
      return Ao(r);
  }
  function ah(n, r) {
    if (n === "input" || n === "change")
      return Ao(r);
  }
  function sg(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var pa = typeof Object.is == "function" ? Object.is : sg;
  function Yu(n, r) {
    if (pa(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), u = Object.keys(r);
    if (l.length !== u.length)
      return !1;
    for (u = 0; u < l.length; u++) {
      var c = l[u];
      if (!L.call(r, c) || !pa(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function ih(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function lh(n, r) {
    var l = ih(n);
    n = 0;
    for (var u; l; ) {
      if (l.nodeType === 3) {
        if (u = n + l.textContent.length, n <= r && u >= r)
          return { node: l, offset: r - n };
        n = u;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = ih(l);
    }
  }
  function oh(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? oh(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function uc() {
    for (var n = window, r = qt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = qt(n.document);
    }
    return r;
  }
  function Ci(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function sc(n) {
    var r = uc(), l = n.focusedElem, u = n.selectionRange;
    if (r !== l && l && l.ownerDocument && oh(l.ownerDocument.documentElement, l)) {
      if (u !== null && Ci(l)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, p = Math.min(u.start, c);
          u = u.end === void 0 ? p : Math.min(u.end, c), !n.extend && p > u && (c = u, u = p, p = c), c = lh(l, p);
          var S = lh(
            l,
            u
          );
          c && S && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== S.node || n.focusOffset !== S.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), p > u ? (n.addRange(r), n.extend(S.node, S.offset)) : (r.setEnd(S.node, S.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var uh = k && "documentMode" in document && 11 >= document.documentMode, Ba = null, hd = null, Gu = null, md = !1;
  function sh(n, r, l) {
    var u = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    md || Ba == null || Ba !== qt(u) || (u = Ba, "selectionStart" in u && Ci(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Gu && Yu(Gu, u) || (Gu = u, u = Xu(hd, "onSelect"), 0 < u.length && (r = new tc("onSelect", "select", null, r, l), n.push({ event: r, listeners: u }), r.target = Ba)));
  }
  function cc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Ul = { animationend: cc("Animation", "AnimationEnd"), animationiteration: cc("Animation", "AnimationIteration"), animationstart: cc("Animation", "AnimationStart"), transitionend: cc("Transition", "TransitionEnd") }, yd = {}, gd = {};
  k && (gd = document.createElement("div").style, "AnimationEvent" in window || (delete Ul.animationend.animation, delete Ul.animationiteration.animation, delete Ul.animationstart.animation), "TransitionEvent" in window || delete Ul.transitionend.transition);
  function Hn(n) {
    if (yd[n])
      return yd[n];
    if (!Ul[n])
      return n;
    var r = Ul[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in gd)
        return yd[n] = r[l];
    return n;
  }
  var Sd = Hn("animationend"), ch = Hn("animationiteration"), fh = Hn("animationstart"), dh = Hn("transitionend"), ph = /* @__PURE__ */ new Map(), vh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ti(n, r) {
    ph.set(n, r), w(r, [n]);
  }
  for (var Wu = 0; Wu < vh.length; Wu++) {
    var Al = vh[Wu], cg = Al.toLowerCase(), Qu = Al[0].toUpperCase() + Al.slice(1);
    Ti(cg, "on" + Qu);
  }
  Ti(Sd, "onAnimationEnd"), Ti(ch, "onAnimationIteration"), Ti(fh, "onAnimationStart"), Ti("dblclick", "onDoubleClick"), Ti("focusin", "onFocus"), Ti("focusout", "onBlur"), Ti(dh, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), w("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), w("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), w("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), w("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ku = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), fg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ku));
  function hh(n, r, l) {
    var u = n.type || "unknown-event";
    n.currentTarget = l, Ro(u, r, void 0, n), n.currentTarget = null;
  }
  function fc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var u = n[l], c = u.event;
      u = u.listeners;
      e: {
        var p = void 0;
        if (r)
          for (var S = u.length - 1; 0 <= S; S--) {
            var R = u[S], D = R.instance, K = R.currentTarget;
            if (R = R.listener, D !== p && c.isPropagationStopped())
              break e;
            hh(c, R, K), p = D;
          }
        else
          for (S = 0; S < u.length; S++) {
            if (R = u[S], D = R.instance, K = R.currentTarget, R = R.listener, D !== p && c.isPropagationStopped())
              break e;
            hh(c, R, K), p = D;
          }
      }
    }
    if (wo)
      throw n = Lu, wo = !1, Lu = null, n;
  }
  function At(n, r) {
    var l = r[kd];
    l === void 0 && (l = r[kd] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    l.has(u) || (mh(r, n, 2, !1), l.add(u));
  }
  function Xi(n, r, l) {
    var u = 0;
    r && (u |= 4), mh(l, n, u, r);
  }
  var xi = "_reactListening" + Math.random().toString(36).slice(2);
  function Ho(n) {
    if (!n[xi]) {
      n[xi] = !0, C.forEach(function(l) {
        l !== "selectionchange" && (fg.has(l) || Xi(l, !1, n), Xi(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[xi] || (r[xi] = !0, Xi("selectionchange", !1, r));
    }
  }
  function mh(n, r, l, u) {
    switch (rd(r)) {
      case 1:
        var c = Iv;
        break;
      case 4:
        c = Zs;
        break;
      default:
        c = Js;
    }
    l = c.bind(null, r, l, n), c = void 0, !Ws || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function dc(n, r, l, u, c) {
    var p = u;
    if (!(r & 1) && !(r & 2) && u !== null)
      e:
        for (; ; ) {
          if (u === null)
            return;
          var S = u.tag;
          if (S === 3 || S === 4) {
            var R = u.stateNode.containerInfo;
            if (R === c || R.nodeType === 8 && R.parentNode === c)
              break;
            if (S === 4)
              for (S = u.return; S !== null; ) {
                var D = S.tag;
                if ((D === 3 || D === 4) && (D = S.stateNode.containerInfo, D === c || D.nodeType === 8 && D.parentNode === c))
                  return;
                S = S.return;
              }
            for (; R !== null; ) {
              if (S = va(R), S === null)
                return;
              if (D = S.tag, D === 5 || D === 6) {
                u = p = S;
                continue e;
              }
              R = R.parentNode;
            }
          }
          u = u.return;
        }
    Gf(function() {
      var K = p, le = nn(l), oe = [];
      e: {
        var ie = ph.get(n);
        if (ie !== void 0) {
          var we = tc, _e = n;
          switch (n) {
            case "keypress":
              if (Mo(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              we = ng;
              break;
            case "focusin":
              _e = "focus", we = qi;
              break;
            case "focusout":
              _e = "blur", we = qi;
              break;
            case "beforeblur":
            case "afterblur":
              we = qi;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              we = rc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              we = jv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              we = rg;
              break;
            case Sd:
            case ch:
            case fh:
              we = Pv;
              break;
            case dh:
              we = Wv;
              break;
            case "scroll":
              we = Bv;
              break;
            case "wheel":
              we = Ei;
              break;
            case "copy":
            case "cut":
            case "paste":
              we = eg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              we = ac;
          }
          var Ae = (r & 4) !== 0, vn = !Ae && n === "scroll", I = Ae ? ie !== null ? ie + "Capture" : null : ie;
          Ae = [];
          for (var O = K, P; O !== null; ) {
            P = O;
            var pe = P.stateNode;
            if (P.tag === 5 && pe !== null && (P = pe, I !== null && (pe = Mu(O, I), pe != null && Ae.push(qu(O, pe, P)))), vn)
              break;
            O = O.return;
          }
          0 < Ae.length && (ie = new we(ie, _e, null, l, le), oe.push({ event: ie, listeners: Ae }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ie = n === "mouseover" || n === "pointerover", we = n === "mouseout" || n === "pointerout", ie && l !== sa && (_e = l.relatedTarget || l.fromElement) && (va(_e) || _e[wi]))
            break e;
          if ((we || ie) && (ie = le.window === le ? le : (ie = le.ownerDocument) ? ie.defaultView || ie.parentWindow : window, we ? (_e = l.relatedTarget || l.toElement, we = K, _e = _e ? va(_e) : null, _e !== null && (vn = ei(_e), _e !== vn || _e.tag !== 5 && _e.tag !== 6) && (_e = null)) : (we = null, _e = K), we !== _e)) {
            if (Ae = rc, pe = "onMouseLeave", I = "onMouseEnter", O = "mouse", (n === "pointerout" || n === "pointerover") && (Ae = ac, pe = "onPointerLeave", I = "onPointerEnter", O = "pointer"), vn = we == null ? ie : Io(we), P = _e == null ? ie : Io(_e), ie = new Ae(pe, O + "leave", we, l, le), ie.target = vn, ie.relatedTarget = P, pe = null, va(le) === K && (Ae = new Ae(I, O + "enter", _e, l, le), Ae.target = P, Ae.relatedTarget = vn, pe = Ae), vn = pe, we && _e)
              t: {
                for (Ae = we, I = _e, O = 0, P = Ae; P; P = Hl(P))
                  O++;
                for (P = 0, pe = I; pe; pe = Hl(pe))
                  P++;
                for (; 0 < O - P; )
                  Ae = Hl(Ae), O--;
                for (; 0 < P - O; )
                  I = Hl(I), P--;
                for (; O--; ) {
                  if (Ae === I || I !== null && Ae === I.alternate)
                    break t;
                  Ae = Hl(Ae), I = Hl(I);
                }
                Ae = null;
              }
            else
              Ae = null;
            we !== null && Ed(oe, ie, we, Ae, !1), _e !== null && vn !== null && Ed(oe, vn, _e, Ae, !0);
          }
        }
        e: {
          if (ie = K ? Io(K) : window, we = ie.nodeName && ie.nodeName.toLowerCase(), we === "select" || we === "input" && ie.type === "file")
            var Ie = eh;
          else if (Zv(ie))
            if (dd)
              Ie = ah;
            else {
              Ie = og;
              var Oe = lg;
            }
          else
            (we = ie.nodeName) && we.toLowerCase() === "input" && (ie.type === "checkbox" || ie.type === "radio") && (Ie = ug);
          if (Ie && (Ie = Ie(n, K))) {
            Jv(oe, Ie, l, le);
            break e;
          }
          Oe && Oe(n, ie, K), n === "focusout" && (Oe = ie._wrapperState) && Oe.controlled && ie.type === "number" && Xa(ie, "number", ie.value);
        }
        switch (Oe = K ? Io(K) : window, n) {
          case "focusin":
            (Zv(Oe) || Oe.contentEditable === "true") && (Ba = Oe, hd = K, Gu = null);
            break;
          case "focusout":
            Gu = hd = Ba = null;
            break;
          case "mousedown":
            md = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            md = !1, sh(oe, l, le);
            break;
          case "selectionchange":
            if (uh)
              break;
          case "keydown":
          case "keyup":
            sh(oe, l, le);
        }
        var je;
        if (Fa)
          e: {
            switch (n) {
              case "compositionstart":
                var Je = "onCompositionStart";
                break e;
              case "compositionend":
                Je = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Je = "onCompositionUpdate";
                break e;
            }
            Je = void 0;
          }
        else
          Oo ? qv(n, l) && (Je = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Je = "onCompositionStart");
        Je && (Qv && l.locale !== "ko" && (Oo || Je !== "onCompositionStart" ? Je === "onCompositionEnd" && Oo && (je = ad()) : (gi = le, Bu = "value" in gi ? gi.value : gi.textContent, Oo = !0)), Oe = Xu(K, Je), 0 < Oe.length && (Je = new od(Je, n, null, l, le), oe.push({ event: Je, listeners: Oe }), je ? Je.data = je : (je = oc(l), je !== null && (Je.data = je)))), (je = lc ? ag(n, l) : ig(n, l)) && (K = Xu(K, "onBeforeInput"), 0 < K.length && (le = new od("onBeforeInput", "beforeinput", null, l, le), oe.push({ event: le, listeners: K }), le.data = je));
      }
      fc(oe, r);
    });
  }
  function qu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function Xu(n, r) {
    for (var l = r + "Capture", u = []; n !== null; ) {
      var c = n, p = c.stateNode;
      c.tag === 5 && p !== null && (c = p, p = Mu(n, l), p != null && u.unshift(qu(n, p, c)), p = Mu(n, r), p != null && u.push(qu(n, p, c))), n = n.return;
    }
    return u;
  }
  function Hl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Ed(n, r, l, u, c) {
    for (var p = r._reactName, S = []; l !== null && l !== u; ) {
      var R = l, D = R.alternate, K = R.stateNode;
      if (D !== null && D === u)
        break;
      R.tag === 5 && K !== null && (R = K, c ? (D = Mu(l, p), D != null && S.unshift(qu(l, D, R))) : c || (D = Mu(l, p), D != null && S.push(qu(l, D, R)))), l = l.return;
    }
    S.length !== 0 && n.push({ event: r, listeners: S });
  }
  var Cd = /\r\n?/g, dg = /\u0000|\uFFFD/g;
  function Td(n) {
    return (typeof n == "string" ? n : "" + n).replace(Cd, `
`).replace(dg, "");
  }
  function pc(n, r, l) {
    if (r = Td(r), Td(n) !== r && l)
      throw Error(m(425));
  }
  function vc() {
  }
  var xd = null, Il = null;
  function Zu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Fl = typeof setTimeout == "function" ? setTimeout : void 0, yh = typeof clearTimeout == "function" ? clearTimeout : void 0, wd = typeof Promise == "function" ? Promise : void 0, Rd = typeof queueMicrotask == "function" ? queueMicrotask : typeof wd < "u" ? function(n) {
    return wd.resolve(null).then(n).catch(pg);
  } : Fl;
  function pg(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Zi(n, r) {
    var l = r, u = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (u === 0) {
            n.removeChild(c), Iu(r);
            return;
          }
          u--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || u++;
      l = c;
    } while (l);
    Iu(r);
  }
  function Va(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function Ju(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Ji = Math.random().toString(36).slice(2), ti = "__reactFiber$" + Ji, Bl = "__reactProps$" + Ji, wi = "__reactContainer$" + Ji, kd = "__reactEvents$" + Ji, vg = "__reactListeners$" + Ji, Dd = "__reactHandles$" + Ji;
  function va(n) {
    var r = n[ti];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[wi] || l[ti]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = Ju(n); n !== null; ) {
            if (l = n[ti])
              return l;
            n = Ju(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function es(n) {
    return n = n[ti] || n[wi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Io(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(m(33));
  }
  function Pe(n) {
    return n[Bl] || null;
  }
  var el = [], Bt = -1;
  function at(n) {
    return { current: n };
  }
  function Rt(n) {
    0 > Bt || (n.current = el[Bt], el[Bt] = null, Bt--);
  }
  function Dt(n, r) {
    Bt++, el[Bt] = n.current, n.current = r;
  }
  var ni = {}, Ze = at(ni), ln = at(!1), Lr = ni;
  function ha(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return ni;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r)
      return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, p;
    for (p in l)
      c[p] = r[p];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Qt(n) {
    return n = n.childContextTypes, n != null;
  }
  function ma() {
    Rt(ln), Rt(Ze);
  }
  function tl(n, r, l) {
    if (Ze.current !== ni)
      throw Error(m(168));
    Dt(Ze, r), Dt(ln, l);
  }
  function ts(n, r, l) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function")
      return l;
    u = u.getChildContext();
    for (var c in u)
      if (!(c in r))
        throw Error(m(108, rt(n) || "Unknown", c));
    return ne({}, l, u);
  }
  function hc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ni, Lr = Ze.current, Dt(Ze, n), Dt(ln, ln.current), !0;
  }
  function gh(n, r, l) {
    var u = n.stateNode;
    if (!u)
      throw Error(m(169));
    l ? (n = ts(n, r, Lr), u.__reactInternalMemoizedMergedChildContext = n, Rt(ln), Rt(Ze), Dt(Ze, n)) : Rt(ln), Dt(ln, l);
  }
  var Qr = null, In = !1, ns = !1;
  function bd(n) {
    Qr === null ? Qr = [n] : Qr.push(n);
  }
  function Nd(n) {
    In = !0, bd(n);
  }
  function _r() {
    if (!ns && Qr !== null) {
      ns = !0;
      var n = 0, r = Nt;
      try {
        var l = Qr;
        for (Nt = 1; n < l.length; n++) {
          var u = l[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Qr = null, In = !1;
      } catch (c) {
        throw Qr !== null && (Qr = Qr.slice(n + 1)), Kf(yi, _r), c;
      } finally {
        Nt = r, ns = !1;
      }
    }
    return null;
  }
  var nl = [], Or = 0, Vl = null, Fo = 0, zr = [], ur = 0, ya = null, Gn = 1, Ri = "";
  function Kr(n, r) {
    nl[Or++] = Fo, nl[Or++] = Vl, Vl = n, Fo = r;
  }
  function Md(n, r, l) {
    zr[ur++] = Gn, zr[ur++] = Ri, zr[ur++] = ya, ya = n;
    var u = Gn;
    n = Ri;
    var c = 32 - ca(u) - 1;
    u &= ~(1 << c), l += 1;
    var p = 32 - ca(r) + c;
    if (30 < p) {
      var S = c - c % 5;
      p = (u & (1 << S) - 1).toString(32), u >>= S, c -= S, Gn = 1 << 32 - ca(r) + c | l << c | u, Ri = p + n;
    } else
      Gn = 1 << p | l << c | u, Ri = n;
  }
  function mc(n) {
    n.return !== null && (Kr(n, 1), Md(n, 1, 0));
  }
  function Ld(n) {
    for (; n === Vl; )
      Vl = nl[--Or], nl[Or] = null, Fo = nl[--Or], nl[Or] = null;
    for (; n === ya; )
      ya = zr[--ur], zr[ur] = null, Ri = zr[--ur], zr[ur] = null, Gn = zr[--ur], zr[ur] = null;
  }
  var qr = null, Ur = null, Vt = !1, ga = null;
  function _d(n, r) {
    var l = wa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Sh(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, qr = n, Ur = Va(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, qr = n, Ur = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ya !== null ? { id: Gn, overflow: Ri } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = wa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, qr = n, Ur = null, !0) : !1;
      default:
        return !1;
    }
  }
  function yc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function gc(n) {
    if (Vt) {
      var r = Ur;
      if (r) {
        var l = r;
        if (!Sh(n, r)) {
          if (yc(n))
            throw Error(m(418));
          r = Va(l.nextSibling);
          var u = qr;
          r && Sh(n, r) ? _d(u, l) : (n.flags = n.flags & -4097 | 2, Vt = !1, qr = n);
        }
      } else {
        if (yc(n))
          throw Error(m(418));
        n.flags = n.flags & -4097 | 2, Vt = !1, qr = n;
      }
    }
  }
  function Eh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    qr = n;
  }
  function Sc(n) {
    if (n !== qr)
      return !1;
    if (!Vt)
      return Eh(n), Vt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Zu(n.type, n.memoizedProps)), r && (r = Ur)) {
      if (yc(n))
        throw Ch(), Error(m(418));
      for (; r; )
        _d(n, r), r = Va(r.nextSibling);
    }
    if (Eh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(m(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Ur = Va(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Ur = null;
      }
    } else
      Ur = qr ? Va(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Ch() {
    for (var n = Ur; n; )
      n = Va(n.nextSibling);
  }
  function Xt() {
    Ur = qr = null, Vt = !1;
  }
  function Od(n) {
    ga === null ? ga = [n] : ga.push(n);
  }
  var Ec = fe.ReactCurrentBatchConfig;
  function Xr(n, r) {
    if (n && n.defaultProps) {
      r = ne({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var ri = at(null), Cc = null, rl = null, zd = null;
  function Ud() {
    zd = rl = Cc = null;
  }
  function al(n) {
    var r = ri.current;
    Rt(ri), n._currentValue = r;
  }
  function Fn(n, r, l) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function ye(n, r) {
    Cc = n, zd = rl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Cn = !0), n.firstContext = null);
  }
  function pn(n) {
    var r = n._currentValue;
    if (zd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, rl === null) {
        if (Cc === null)
          throw Error(m(308));
        rl = n, Cc.dependencies = { lanes: 0, firstContext: n };
      } else
        rl = rl.next = n;
    return r;
  }
  var Wn = null;
  function Ad(n) {
    Wn === null ? Wn = [n] : Wn.push(n);
  }
  function Th(n, r, l, u) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Ad(r)) : (l.next = c.next, c.next = l), r.interleaved = l, ki(n, u);
  }
  function ki(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var il = !1;
  function Hd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function bn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Di(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function ll(n, r, l) {
    var u = n.updateQueue;
    if (u === null)
      return null;
    if (u = u.shared, dt & 2) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, ki(n, l);
    }
    return c = u.interleaved, c === null ? (r.next = r, Ad(u)) : (r.next = c.next, c.next = r), u.interleaved = r, ki(n, l);
  }
  function Tc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, zu(n, l);
    }
  }
  function Id(n, r) {
    var l = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, l === u)) {
      var c = null, p = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var S = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          p === null ? c = p = S : p = p.next = S, l = l.next;
        } while (l !== null);
        p === null ? c = p = r : p = p.next = r;
      } else
        c = p = r;
      l = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: p, shared: u.shared, effects: u.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function ol(n, r, l, u) {
    var c = n.updateQueue;
    il = !1;
    var p = c.firstBaseUpdate, S = c.lastBaseUpdate, R = c.shared.pending;
    if (R !== null) {
      c.shared.pending = null;
      var D = R, K = D.next;
      D.next = null, S === null ? p = K : S.next = K, S = D;
      var le = n.alternate;
      le !== null && (le = le.updateQueue, R = le.lastBaseUpdate, R !== S && (R === null ? le.firstBaseUpdate = K : R.next = K, le.lastBaseUpdate = D));
    }
    if (p !== null) {
      var oe = c.baseState;
      S = 0, le = K = D = null, R = p;
      do {
        var ie = R.lane, we = R.eventTime;
        if ((u & ie) === ie) {
          le !== null && (le = le.next = {
            eventTime: we,
            lane: 0,
            tag: R.tag,
            payload: R.payload,
            callback: R.callback,
            next: null
          });
          e: {
            var _e = n, Ae = R;
            switch (ie = r, we = l, Ae.tag) {
              case 1:
                if (_e = Ae.payload, typeof _e == "function") {
                  oe = _e.call(we, oe, ie);
                  break e;
                }
                oe = _e;
                break e;
              case 3:
                _e.flags = _e.flags & -65537 | 128;
              case 0:
                if (_e = Ae.payload, ie = typeof _e == "function" ? _e.call(we, oe, ie) : _e, ie == null)
                  break e;
                oe = ne({}, oe, ie);
                break e;
              case 2:
                il = !0;
            }
          }
          R.callback !== null && R.lane !== 0 && (n.flags |= 64, ie = c.effects, ie === null ? c.effects = [R] : ie.push(R));
        } else
          we = { eventTime: we, lane: ie, tag: R.tag, payload: R.payload, callback: R.callback, next: null }, le === null ? (K = le = we, D = oe) : le = le.next = we, S |= ie;
        if (R = R.next, R === null) {
          if (R = c.shared.pending, R === null)
            break;
          ie = R, R = ie.next, ie.next = null, c.lastBaseUpdate = ie, c.shared.pending = null;
        }
      } while (1);
      if (le === null && (D = oe), c.baseState = D, c.firstBaseUpdate = K, c.lastBaseUpdate = le, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          S |= c.lane, c = c.next;
        while (c !== r);
      } else
        p === null && (c.shared.lanes = 0);
      Li |= S, n.lanes = S, n.memoizedState = oe;
    }
  }
  function jl(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var u = n[r], c = u.callback;
        if (c !== null) {
          if (u.callback = null, u = l, typeof c != "function")
            throw Error(m(191, c));
          c.call(u);
        }
      }
  }
  var xh = new d.Component().refs;
  function Fd(n, r, l, u) {
    r = n.memoizedState, l = l(u, r), l = l == null ? r : ne({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var xc = { isMounted: function(n) {
    return (n = n._reactInternals) ? ei(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var u = dr(), c = Tn(n), p = Di(u, c);
    p.payload = r, l != null && (p.callback = l), r = ll(n, p, c), r !== null && (pr(r, n, c, u), Tc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var u = dr(), c = Tn(n), p = Di(u, c);
    p.tag = 1, p.payload = r, l != null && (p.callback = l), r = ll(n, p, c), r !== null && (pr(r, n, c, u), Tc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = dr(), u = Tn(n), c = Di(l, u);
    c.tag = 2, r != null && (c.callback = r), r = ll(n, c, u), r !== null && (pr(r, n, u, l), Tc(r, n, u));
  } };
  function wh(n, r, l, u, c, p, S) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, p, S) : r.prototype && r.prototype.isPureReactComponent ? !Yu(l, u) || !Yu(c, p) : !0;
  }
  function Rh(n, r, l) {
    var u = !1, c = ni, p = r.contextType;
    return typeof p == "object" && p !== null ? p = pn(p) : (c = Qt(r) ? Lr : Ze.current, u = r.contextTypes, p = (u = u != null) ? ha(n, c) : ni), r = new r(l, p), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = xc, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = p), r;
  }
  function kh(n, r, l, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, u), r.state !== n && xc.enqueueReplaceState(r, r.state, null);
  }
  function wc(n, r, l, u) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = xh, Hd(n);
    var p = r.contextType;
    typeof p == "object" && p !== null ? c.context = pn(p) : (p = Qt(r) ? Lr : Ze.current, c.context = ha(n, p)), c.state = n.memoizedState, p = r.getDerivedStateFromProps, typeof p == "function" && (Fd(n, r, p, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && xc.enqueueReplaceState(c, c.state, null), ol(n, l, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Bo(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(m(309));
          var u = l.stateNode;
        }
        if (!u)
          throw Error(m(147, n));
        var c = u, p = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === p ? r.ref : (r = function(S) {
          var R = c.refs;
          R === xh && (R = c.refs = {}), S === null ? delete R[p] : R[p] = S;
        }, r._stringRef = p, r);
      }
      if (typeof n != "string")
        throw Error(m(284));
      if (!l._owner)
        throw Error(m(290, n));
    }
    return n;
  }
  function Rc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(m(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Dh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function bh(n) {
    function r(I, O) {
      if (n) {
        var P = I.deletions;
        P === null ? (I.deletions = [O], I.flags |= 16) : P.push(O);
      }
    }
    function l(I, O) {
      if (!n)
        return null;
      for (; O !== null; )
        r(I, O), O = O.sibling;
      return null;
    }
    function u(I, O) {
      for (I = /* @__PURE__ */ new Map(); O !== null; )
        O.key !== null ? I.set(O.key, O) : I.set(O.index, O), O = O.sibling;
      return I;
    }
    function c(I, O) {
      return I = hl(I, O), I.index = 0, I.sibling = null, I;
    }
    function p(I, O, P) {
      return I.index = P, n ? (P = I.alternate, P !== null ? (P = P.index, P < O ? (I.flags |= 2, O) : P) : (I.flags |= 2, O)) : (I.flags |= 1048576, O);
    }
    function S(I) {
      return n && I.alternate === null && (I.flags |= 2), I;
    }
    function R(I, O, P, pe) {
      return O === null || O.tag !== 6 ? (O = Cs(P, I.mode, pe), O.return = I, O) : (O = c(O, P), O.return = I, O);
    }
    function D(I, O, P, pe) {
      var Ie = P.type;
      return Ie === ae ? le(I, O, P.props.children, pe, P.key) : O !== null && (O.elementType === Ie || typeof Ie == "object" && Ie !== null && Ie.$$typeof === Ue && Dh(Ie) === O.type) ? (pe = c(O, P.props), pe.ref = Bo(I, O, P), pe.return = I, pe) : (pe = rf(P.type, P.key, P.props, null, I.mode, pe), pe.ref = Bo(I, O, P), pe.return = I, pe);
    }
    function K(I, O, P, pe) {
      return O === null || O.tag !== 4 || O.stateNode.containerInfo !== P.containerInfo || O.stateNode.implementation !== P.implementation ? (O = oo(P, I.mode, pe), O.return = I, O) : (O = c(O, P.children || []), O.return = I, O);
    }
    function le(I, O, P, pe, Ie) {
      return O === null || O.tag !== 7 ? (O = lo(P, I.mode, pe, Ie), O.return = I, O) : (O = c(O, P), O.return = I, O);
    }
    function oe(I, O, P) {
      if (typeof O == "string" && O !== "" || typeof O == "number")
        return O = Cs("" + O, I.mode, P), O.return = I, O;
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case G:
            return P = rf(O.type, O.key, O.props, null, I.mode, P), P.ref = Bo(I, null, O), P.return = I, P;
          case W:
            return O = oo(O, I.mode, P), O.return = I, O;
          case Ue:
            var pe = O._init;
            return oe(I, pe(O._payload), P);
        }
        if (Za(O) || De(O))
          return O = lo(O, I.mode, P, null), O.return = I, O;
        Rc(I, O);
      }
      return null;
    }
    function ie(I, O, P, pe) {
      var Ie = O !== null ? O.key : null;
      if (typeof P == "string" && P !== "" || typeof P == "number")
        return Ie !== null ? null : R(I, O, "" + P, pe);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case G:
            return P.key === Ie ? D(I, O, P, pe) : null;
          case W:
            return P.key === Ie ? K(I, O, P, pe) : null;
          case Ue:
            return Ie = P._init, ie(
              I,
              O,
              Ie(P._payload),
              pe
            );
        }
        if (Za(P) || De(P))
          return Ie !== null ? null : le(I, O, P, pe, null);
        Rc(I, P);
      }
      return null;
    }
    function we(I, O, P, pe, Ie) {
      if (typeof pe == "string" && pe !== "" || typeof pe == "number")
        return I = I.get(P) || null, R(O, I, "" + pe, Ie);
      if (typeof pe == "object" && pe !== null) {
        switch (pe.$$typeof) {
          case G:
            return I = I.get(pe.key === null ? P : pe.key) || null, D(O, I, pe, Ie);
          case W:
            return I = I.get(pe.key === null ? P : pe.key) || null, K(O, I, pe, Ie);
          case Ue:
            var Oe = pe._init;
            return we(I, O, P, Oe(pe._payload), Ie);
        }
        if (Za(pe) || De(pe))
          return I = I.get(P) || null, le(O, I, pe, Ie, null);
        Rc(O, pe);
      }
      return null;
    }
    function _e(I, O, P, pe) {
      for (var Ie = null, Oe = null, je = O, Je = O = 0, jn = null; je !== null && Je < P.length; Je++) {
        je.index > Je ? (jn = je, je = null) : jn = je.sibling;
        var Et = ie(I, je, P[Je], pe);
        if (Et === null) {
          je === null && (je = jn);
          break;
        }
        n && je && Et.alternate === null && r(I, je), O = p(Et, O, Je), Oe === null ? Ie = Et : Oe.sibling = Et, Oe = Et, je = jn;
      }
      if (Je === P.length)
        return l(I, je), Vt && Kr(I, Je), Ie;
      if (je === null) {
        for (; Je < P.length; Je++)
          je = oe(I, P[Je], pe), je !== null && (O = p(je, O, Je), Oe === null ? Ie = je : Oe.sibling = je, Oe = je);
        return Vt && Kr(I, Je), Ie;
      }
      for (je = u(I, je); Je < P.length; Je++)
        jn = we(je, I, Je, P[Je], pe), jn !== null && (n && jn.alternate !== null && je.delete(jn.key === null ? Je : jn.key), O = p(jn, O, Je), Oe === null ? Ie = jn : Oe.sibling = jn, Oe = jn);
      return n && je.forEach(function(ml) {
        return r(I, ml);
      }), Vt && Kr(I, Je), Ie;
    }
    function Ae(I, O, P, pe) {
      var Ie = De(P);
      if (typeof Ie != "function")
        throw Error(m(150));
      if (P = Ie.call(P), P == null)
        throw Error(m(151));
      for (var Oe = Ie = null, je = O, Je = O = 0, jn = null, Et = P.next(); je !== null && !Et.done; Je++, Et = P.next()) {
        je.index > Je ? (jn = je, je = null) : jn = je.sibling;
        var ml = ie(I, je, Et.value, pe);
        if (ml === null) {
          je === null && (je = jn);
          break;
        }
        n && je && ml.alternate === null && r(I, je), O = p(ml, O, Je), Oe === null ? Ie = ml : Oe.sibling = ml, Oe = ml, je = jn;
      }
      if (Et.done)
        return l(
          I,
          je
        ), Vt && Kr(I, Je), Ie;
      if (je === null) {
        for (; !Et.done; Je++, Et = P.next())
          Et = oe(I, Et.value, pe), Et !== null && (O = p(Et, O, Je), Oe === null ? Ie = Et : Oe.sibling = Et, Oe = Et);
        return Vt && Kr(I, Je), Ie;
      }
      for (je = u(I, je); !Et.done; Je++, Et = P.next())
        Et = we(je, I, Je, Et.value, pe), Et !== null && (n && Et.alternate !== null && je.delete(Et.key === null ? Je : Et.key), O = p(Et, O, Je), Oe === null ? Ie = Et : Oe.sibling = Et, Oe = Et);
      return n && je.forEach(function(zg) {
        return r(I, zg);
      }), Vt && Kr(I, Je), Ie;
    }
    function vn(I, O, P, pe) {
      if (typeof P == "object" && P !== null && P.type === ae && P.key === null && (P = P.props.children), typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case G:
            e: {
              for (var Ie = P.key, Oe = O; Oe !== null; ) {
                if (Oe.key === Ie) {
                  if (Ie = P.type, Ie === ae) {
                    if (Oe.tag === 7) {
                      l(I, Oe.sibling), O = c(Oe, P.props.children), O.return = I, I = O;
                      break e;
                    }
                  } else if (Oe.elementType === Ie || typeof Ie == "object" && Ie !== null && Ie.$$typeof === Ue && Dh(Ie) === Oe.type) {
                    l(I, Oe.sibling), O = c(Oe, P.props), O.ref = Bo(I, Oe, P), O.return = I, I = O;
                    break e;
                  }
                  l(I, Oe);
                  break;
                } else
                  r(I, Oe);
                Oe = Oe.sibling;
              }
              P.type === ae ? (O = lo(P.props.children, I.mode, pe, P.key), O.return = I, I = O) : (pe = rf(P.type, P.key, P.props, null, I.mode, pe), pe.ref = Bo(I, O, P), pe.return = I, I = pe);
            }
            return S(I);
          case W:
            e: {
              for (Oe = P.key; O !== null; ) {
                if (O.key === Oe)
                  if (O.tag === 4 && O.stateNode.containerInfo === P.containerInfo && O.stateNode.implementation === P.implementation) {
                    l(I, O.sibling), O = c(O, P.children || []), O.return = I, I = O;
                    break e;
                  } else {
                    l(I, O);
                    break;
                  }
                else
                  r(I, O);
                O = O.sibling;
              }
              O = oo(P, I.mode, pe), O.return = I, I = O;
            }
            return S(I);
          case Ue:
            return Oe = P._init, vn(I, O, Oe(P._payload), pe);
        }
        if (Za(P))
          return _e(I, O, P, pe);
        if (De(P))
          return Ae(I, O, P, pe);
        Rc(I, P);
      }
      return typeof P == "string" && P !== "" || typeof P == "number" ? (P = "" + P, O !== null && O.tag === 6 ? (l(I, O.sibling), O = c(O, P), O.return = I, I = O) : (l(I, O), O = Cs(P, I.mode, pe), O.return = I, I = O), S(I)) : l(I, O);
    }
    return vn;
  }
  var Vo = bh(!0), Nh = bh(!1), rs = {}, ja = at(rs), as = at(rs), jo = at(rs);
  function Pl(n) {
    if (n === rs)
      throw Error(m(174));
    return n;
  }
  function Bd(n, r) {
    switch (Dt(jo, r), Dt(as, n), Dt(ja, rs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Yn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Yn(r, n);
    }
    Rt(ja), Dt(ja, r);
  }
  function ul() {
    Rt(ja), Rt(as), Rt(jo);
  }
  function Ge(n) {
    Pl(jo.current);
    var r = Pl(ja.current), l = Yn(r, n.type);
    r !== l && (Dt(as, n), Dt(ja, l));
  }
  function ut(n) {
    as.current === n && (Rt(ja), Rt(as));
  }
  var We = at(0);
  function Zt(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Sa = [];
  function kc() {
    for (var n = 0; n < Sa.length; n++)
      Sa[n]._workInProgressVersionPrimary = null;
    Sa.length = 0;
  }
  var Dc = fe.ReactCurrentDispatcher, Vd = fe.ReactCurrentBatchConfig, $l = 0, jt = null, te = null, mt = null, Ke = !1, ai = !1, Zr = 0, Yl = 0;
  function Pt() {
    throw Error(m(321));
  }
  function Gl(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!pa(n[l], r[l]))
        return !1;
    return !0;
  }
  function sl(n, r, l, u, c, p) {
    if ($l = p, jt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Dc.current = n === null || n.memoizedState === null ? mg : yg, n = l(u, c), ai) {
      p = 0;
      do {
        if (ai = !1, Zr = 0, 25 <= p)
          throw Error(m(301));
        p += 1, mt = te = null, r.updateQueue = null, Dc.current = Pd, n = l(u, c);
      } while (ai);
    }
    if (Dc.current = Pc, r = te !== null && te.next !== null, $l = 0, mt = te = jt = null, Ke = !1, r)
      throw Error(m(300));
    return n;
  }
  function Wl() {
    var n = Zr !== 0;
    return Zr = 0, n;
  }
  function Ea() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return mt === null ? jt.memoizedState = mt = n : mt = mt.next = n, mt;
  }
  function Ar() {
    if (te === null) {
      var n = jt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = te.next;
    var r = mt === null ? jt.memoizedState : mt.next;
    if (r !== null)
      mt = r, te = n;
    else {
      if (n === null)
        throw Error(m(310));
      te = n, n = { memoizedState: te.memoizedState, baseState: te.baseState, baseQueue: te.baseQueue, queue: te.queue, next: null }, mt === null ? jt.memoizedState = mt = n : mt = mt.next = n;
    }
    return mt;
  }
  function Ql(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function is(n) {
    var r = Ar(), l = r.queue;
    if (l === null)
      throw Error(m(311));
    l.lastRenderedReducer = n;
    var u = te, c = u.baseQueue, p = l.pending;
    if (p !== null) {
      if (c !== null) {
        var S = c.next;
        c.next = p.next, p.next = S;
      }
      u.baseQueue = c = p, l.pending = null;
    }
    if (c !== null) {
      p = c.next, u = u.baseState;
      var R = S = null, D = null, K = p;
      do {
        var le = K.lane;
        if (($l & le) === le)
          D !== null && (D = D.next = { lane: 0, action: K.action, hasEagerState: K.hasEagerState, eagerState: K.eagerState, next: null }), u = K.hasEagerState ? K.eagerState : n(u, K.action);
        else {
          var oe = {
            lane: le,
            action: K.action,
            hasEagerState: K.hasEagerState,
            eagerState: K.eagerState,
            next: null
          };
          D === null ? (R = D = oe, S = u) : D = D.next = oe, jt.lanes |= le, Li |= le;
        }
        K = K.next;
      } while (K !== null && K !== p);
      D === null ? S = u : D.next = R, pa(u, r.memoizedState) || (Cn = !0), r.memoizedState = u, r.baseState = S, r.baseQueue = D, l.lastRenderedState = u;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        p = c.lane, jt.lanes |= p, Li |= p, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function ls(n) {
    var r = Ar(), l = r.queue;
    if (l === null)
      throw Error(m(311));
    l.lastRenderedReducer = n;
    var u = l.dispatch, c = l.pending, p = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var S = c = c.next;
      do
        p = n(p, S.action), S = S.next;
      while (S !== c);
      pa(p, r.memoizedState) || (Cn = !0), r.memoizedState = p, r.baseQueue === null && (r.baseState = p), l.lastRenderedState = p;
    }
    return [p, u];
  }
  function bc() {
  }
  function Nc(n, r) {
    var l = jt, u = Ar(), c = r(), p = !pa(u.memoizedState, c);
    if (p && (u.memoizedState = c, Cn = !0), u = u.queue, os(_c.bind(null, l, u, n), [n]), u.getSnapshot !== r || p || mt !== null && mt.memoizedState.tag & 1) {
      if (l.flags |= 2048, Kl(9, Lc.bind(null, l, u, c, r), void 0, null), Jt === null)
        throw Error(m(349));
      $l & 30 || Mc(l, r, c);
    }
    return c;
  }
  function Mc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = jt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, jt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Lc(n, r, l, u) {
    r.value = l, r.getSnapshot = u, Oc(r) && zc(n);
  }
  function _c(n, r, l) {
    return l(function() {
      Oc(r) && zc(n);
    });
  }
  function Oc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !pa(n, l);
    } catch {
      return !0;
    }
  }
  function zc(n) {
    var r = ki(n, 1);
    r !== null && pr(r, n, 1, -1);
  }
  function Uc(n) {
    var r = Ea();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ql, lastRenderedState: n }, r.queue = n, n = n.dispatch = jc.bind(null, jt, n), [r.memoizedState, n];
  }
  function Kl(n, r, l, u) {
    return n = { tag: n, create: r, destroy: l, deps: u, next: null }, r = jt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, jt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (u = l.next, l.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function Ac() {
    return Ar().memoizedState;
  }
  function ql(n, r, l, u) {
    var c = Ea();
    jt.flags |= n, c.memoizedState = Kl(1 | r, l, void 0, u === void 0 ? null : u);
  }
  function bi(n, r, l, u) {
    var c = Ar();
    u = u === void 0 ? null : u;
    var p = void 0;
    if (te !== null) {
      var S = te.memoizedState;
      if (p = S.destroy, u !== null && Gl(u, S.deps)) {
        c.memoizedState = Kl(r, l, p, u);
        return;
      }
    }
    jt.flags |= n, c.memoizedState = Kl(1 | r, l, p, u);
  }
  function Hc(n, r) {
    return ql(8390656, 8, n, r);
  }
  function os(n, r) {
    return bi(2048, 8, n, r);
  }
  function Ic(n, r) {
    return bi(4, 2, n, r);
  }
  function Fc(n, r) {
    return bi(4, 4, n, r);
  }
  function jd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Po(n, r, l) {
    return l = l != null ? l.concat([n]) : null, bi(4, 4, jd.bind(null, r, n), l);
  }
  function Bc() {
  }
  function $o(n, r) {
    var l = Ar();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Gl(r, u[1]) ? u[0] : (l.memoizedState = [n, r], n);
  }
  function cl(n, r) {
    var l = Ar();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Gl(r, u[1]) ? u[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Hr(n, r, l) {
    return $l & 21 ? (pa(l, r) || (l = qs(), jt.lanes |= l, Li |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Cn = !0), n.memoizedState = l);
  }
  function hg(n, r) {
    var l = Nt;
    Nt = l !== 0 && 4 > l ? l : 4, n(!0);
    var u = Vd.transition;
    Vd.transition = {};
    try {
      n(!1), r();
    } finally {
      Nt = l, Vd.transition = u;
    }
  }
  function Ht() {
    return Ar().memoizedState;
  }
  function Vc(n, r, l) {
    var u = Tn(n);
    if (l = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null }, Yo(n))
      us(r, l);
    else if (l = Th(n, r, l, u), l !== null) {
      var c = dr();
      pr(l, n, u, c), Mh(l, r, u);
    }
  }
  function jc(n, r, l) {
    var u = Tn(n), c = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Yo(n))
      us(r, c);
    else {
      var p = n.alternate;
      if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = r.lastRenderedReducer, p !== null))
        try {
          var S = r.lastRenderedState, R = p(S, l);
          if (c.hasEagerState = !0, c.eagerState = R, pa(R, S)) {
            var D = r.interleaved;
            D === null ? (c.next = c, Ad(r)) : (c.next = D.next, D.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Th(n, r, c, u), l !== null && (c = dr(), pr(l, n, u, c), Mh(l, r, u));
    }
  }
  function Yo(n) {
    var r = n.alternate;
    return n === jt || r !== null && r === jt;
  }
  function us(n, r) {
    ai = Ke = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Mh(n, r, l) {
    if (l & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, zu(n, l);
    }
  }
  var Pc = { readContext: pn, useCallback: Pt, useContext: Pt, useEffect: Pt, useImperativeHandle: Pt, useInsertionEffect: Pt, useLayoutEffect: Pt, useMemo: Pt, useReducer: Pt, useRef: Pt, useState: Pt, useDebugValue: Pt, useDeferredValue: Pt, useTransition: Pt, useMutableSource: Pt, useSyncExternalStore: Pt, useId: Pt, unstable_isNewReconciler: !1 }, mg = { readContext: pn, useCallback: function(n, r) {
    return Ea().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: pn, useEffect: Hc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, ql(
      4194308,
      4,
      jd.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return ql(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return ql(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Ea();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var u = Ea();
    return r = l !== void 0 ? l(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Vc.bind(null, jt, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Ea();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Uc, useDebugValue: Bc, useDeferredValue: function(n) {
    return Ea().memoizedState = n;
  }, useTransition: function() {
    var n = Uc(!1), r = n[0];
    return n = hg.bind(null, n[1]), Ea().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var u = jt, c = Ea();
    if (Vt) {
      if (l === void 0)
        throw Error(m(407));
      l = l();
    } else {
      if (l = r(), Jt === null)
        throw Error(m(349));
      $l & 30 || Mc(u, r, l);
    }
    c.memoizedState = l;
    var p = { value: l, getSnapshot: r };
    return c.queue = p, Hc(_c.bind(
      null,
      u,
      p,
      n
    ), [n]), u.flags |= 2048, Kl(9, Lc.bind(null, u, p, l, r), void 0, null), l;
  }, useId: function() {
    var n = Ea(), r = Jt.identifierPrefix;
    if (Vt) {
      var l = Ri, u = Gn;
      l = (u & ~(1 << 32 - ca(u) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Zr++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = Yl++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, yg = {
    readContext: pn,
    useCallback: $o,
    useContext: pn,
    useEffect: os,
    useImperativeHandle: Po,
    useInsertionEffect: Ic,
    useLayoutEffect: Fc,
    useMemo: cl,
    useReducer: is,
    useRef: Ac,
    useState: function() {
      return is(Ql);
    },
    useDebugValue: Bc,
    useDeferredValue: function(n) {
      var r = Ar();
      return Hr(r, te.memoizedState, n);
    },
    useTransition: function() {
      var n = is(Ql)[0], r = Ar().memoizedState;
      return [n, r];
    },
    useMutableSource: bc,
    useSyncExternalStore: Nc,
    useId: Ht,
    unstable_isNewReconciler: !1
  }, Pd = { readContext: pn, useCallback: $o, useContext: pn, useEffect: os, useImperativeHandle: Po, useInsertionEffect: Ic, useLayoutEffect: Fc, useMemo: cl, useReducer: ls, useRef: Ac, useState: function() {
    return ls(Ql);
  }, useDebugValue: Bc, useDeferredValue: function(n) {
    var r = Ar();
    return te === null ? r.memoizedState = n : Hr(r, te.memoizedState, n);
  }, useTransition: function() {
    var n = ls(Ql)[0], r = Ar().memoizedState;
    return [n, r];
  }, useMutableSource: bc, useSyncExternalStore: Nc, useId: Ht, unstable_isNewReconciler: !1 };
  function Go(n, r) {
    try {
      var l = "", u = r;
      do
        l += ir(u), u = u.return;
      while (u);
      var c = l;
    } catch (p) {
      c = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function ss(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function $c(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var gg = typeof WeakMap == "function" ? WeakMap : Map;
  function Lh(n, r, l) {
    l = Di(-1, l), l.tag = 3, l.payload = { element: null };
    var u = r.value;
    return l.callback = function() {
      Xc || (Xc = !0, to = u), $c(n, r);
    }, l;
  }
  function cs(n, r, l) {
    l = Di(-1, l), l.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      l.payload = function() {
        return u(c);
      }, l.callback = function() {
        $c(n, r);
      };
    }
    var p = n.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (l.callback = function() {
      $c(n, r), typeof u != "function" && (oi === null ? oi = /* @__PURE__ */ new Set([this]) : oi.add(this));
      var S = r.stack;
      this.componentDidCatch(r.value, { componentStack: S !== null ? S : "" });
    }), l;
  }
  function _h(n, r, l) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new gg();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else
      c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(l) || (c.add(l), n = Rg.bind(null, n, r, l), r.then(n, n));
  }
  function $d(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Yd(n, r, l, u, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Di(-1, 1), r.tag = 2, ll(l, r, 1))), l.lanes |= 1), n);
  }
  var Sg = fe.ReactCurrentOwner, Cn = !1;
  function Nn(n, r, l, u) {
    r.child = n === null ? Nh(r, null, l, u) : Vo(r, n.child, l, u);
  }
  function fl(n, r, l, u, c) {
    l = l.render;
    var p = r.ref;
    return ye(r, c), u = sl(n, r, l, u, p, c), l = Wl(), n !== null && !Cn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Qn(n, r, c)) : (Vt && l && mc(r), r.flags |= 1, Nn(n, r, u, c), r.child);
  }
  function Yc(n, r, l, u, c) {
    if (n === null) {
      var p = l.type;
      return typeof p == "function" && !cp(p) && p.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = p, Ir(n, r, p, u, c)) : (n = rf(l.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (p = n.child, !(n.lanes & c)) {
      var S = p.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Yu, l(S, u) && n.ref === r.ref)
        return Qn(n, r, c);
    }
    return r.flags |= 1, n = hl(p, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Ir(n, r, l, u, c) {
    if (n !== null) {
      var p = n.memoizedProps;
      if (Yu(p, u) && n.ref === r.ref)
        if (Cn = !1, r.pendingProps = u = p, (n.lanes & c) !== 0)
          n.flags & 131072 && (Cn = !0);
        else
          return r.lanes = n.lanes, Qn(n, r, c);
    }
    return Wo(n, r, l, u, c);
  }
  function Xl(n, r, l) {
    var u = r.pendingProps, c = u.children, p = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Dt(Jo, Jr), Jr |= l;
      else {
        if (!(l & 1073741824))
          return n = p !== null ? p.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Dt(Jo, Jr), Jr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = p !== null ? p.baseLanes : l, Dt(Jo, Jr), Jr |= u;
      }
    else
      p !== null ? (u = p.baseLanes | l, r.memoizedState = null) : u = l, Dt(Jo, Jr), Jr |= u;
    return Nn(n, r, c, l), r.child;
  }
  function it(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Wo(n, r, l, u, c) {
    var p = Qt(l) ? Lr : Ze.current;
    return p = ha(r, p), ye(r, c), l = sl(n, r, l, u, p, c), u = Wl(), n !== null && !Cn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Qn(n, r, c)) : (Vt && u && mc(r), r.flags |= 1, Nn(n, r, l, c), r.child);
  }
  function Gd(n, r, l, u, c) {
    if (Qt(l)) {
      var p = !0;
      hc(r);
    } else
      p = !1;
    if (ye(r, c), r.stateNode === null)
      sr(n, r), Rh(r, l, u), wc(r, l, u, c), u = !0;
    else if (n === null) {
      var S = r.stateNode, R = r.memoizedProps;
      S.props = R;
      var D = S.context, K = l.contextType;
      typeof K == "object" && K !== null ? K = pn(K) : (K = Qt(l) ? Lr : Ze.current, K = ha(r, K));
      var le = l.getDerivedStateFromProps, oe = typeof le == "function" || typeof S.getSnapshotBeforeUpdate == "function";
      oe || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (R !== u || D !== K) && kh(r, S, u, K), il = !1;
      var ie = r.memoizedState;
      S.state = ie, ol(r, u, S, c), D = r.memoizedState, R !== u || ie !== D || ln.current || il ? (typeof le == "function" && (Fd(r, l, le, u), D = r.memoizedState), (R = il || wh(r, l, R, u, ie, D, K)) ? (oe || typeof S.UNSAFE_componentWillMount != "function" && typeof S.componentWillMount != "function" || (typeof S.componentWillMount == "function" && S.componentWillMount(), typeof S.UNSAFE_componentWillMount == "function" && S.UNSAFE_componentWillMount()), typeof S.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = D), S.props = u, S.state = D, S.context = K, u = R) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      S = r.stateNode, bn(n, r), R = r.memoizedProps, K = r.type === r.elementType ? R : Xr(r.type, R), S.props = K, oe = r.pendingProps, ie = S.context, D = l.contextType, typeof D == "object" && D !== null ? D = pn(D) : (D = Qt(l) ? Lr : Ze.current, D = ha(r, D));
      var we = l.getDerivedStateFromProps;
      (le = typeof we == "function" || typeof S.getSnapshotBeforeUpdate == "function") || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (R !== oe || ie !== D) && kh(r, S, u, D), il = !1, ie = r.memoizedState, S.state = ie, ol(r, u, S, c);
      var _e = r.memoizedState;
      R !== oe || ie !== _e || ln.current || il ? (typeof we == "function" && (Fd(r, l, we, u), _e = r.memoizedState), (K = il || wh(r, l, K, u, ie, _e, D) || !1) ? (le || typeof S.UNSAFE_componentWillUpdate != "function" && typeof S.componentWillUpdate != "function" || (typeof S.componentWillUpdate == "function" && S.componentWillUpdate(u, _e, D), typeof S.UNSAFE_componentWillUpdate == "function" && S.UNSAFE_componentWillUpdate(u, _e, D)), typeof S.componentDidUpdate == "function" && (r.flags |= 4), typeof S.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof S.componentDidUpdate != "function" || R === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || R === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = _e), S.props = u, S.state = _e, S.context = D, u = K) : (typeof S.componentDidUpdate != "function" || R === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || R === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Oh(n, r, l, u, p, c);
  }
  function Oh(n, r, l, u, c, p) {
    it(n, r);
    var S = (r.flags & 128) !== 0;
    if (!u && !S)
      return c && gh(r, l, !1), Qn(n, r, p);
    u = r.stateNode, Sg.current = r;
    var R = S && typeof l.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && S ? (r.child = Vo(r, n.child, null, p), r.child = Vo(r, null, R, p)) : Nn(n, r, R, p), r.memoizedState = u.state, c && gh(r, l, !0), r.child;
  }
  function zh(n) {
    var r = n.stateNode;
    r.pendingContext ? tl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && tl(n, r.context, !1), Bd(n, r.containerInfo);
  }
  function Gc(n, r, l, u, c) {
    return Xt(), Od(c), r.flags |= 256, Nn(n, r, l, u), r.child;
  }
  var Zl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Wd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Qd(n, r, l) {
    var u = r.pendingProps, c = We.current, p = !1, S = (r.flags & 128) !== 0, R;
    if ((R = S) || (R = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), R ? (p = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Dt(We, c & 1), n === null)
      return gc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (S = u.children, n = u.fallback, p ? (u = r.mode, p = r.child, S = { mode: "hidden", children: S }, !(u & 1) && p !== null ? (p.childLanes = 0, p.pendingProps = S) : p = Es(S, u, 0, null), n = lo(n, u, l, null), p.return = r, n.return = r, p.sibling = n, r.child = p, r.child.memoizedState = Wd(l), r.memoizedState = Zl, n) : Kd(r, S));
    if (c = n.memoizedState, c !== null && (R = c.dehydrated, R !== null))
      return Eg(n, r, S, u, R, c, l);
    if (p) {
      p = u.fallback, S = r.mode, c = n.child, R = c.sibling;
      var D = { mode: "hidden", children: u.children };
      return !(S & 1) && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = D, r.deletions = null) : (u = hl(c, D), u.subtreeFlags = c.subtreeFlags & 14680064), R !== null ? p = hl(R, p) : (p = lo(p, S, l, null), p.flags |= 2), p.return = r, u.return = r, u.sibling = p, r.child = u, u = p, p = r.child, S = n.child.memoizedState, S = S === null ? Wd(l) : { baseLanes: S.baseLanes | l, cachePool: null, transitions: S.transitions }, p.memoizedState = S, p.childLanes = n.childLanes & ~l, r.memoizedState = Zl, u;
    }
    return p = n.child, n = p.sibling, u = hl(p, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = l), u.return = r, u.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function Kd(n, r) {
    return r = Es({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Qo(n, r, l, u) {
    return u !== null && Od(u), Vo(r, n.child, null, l), n = Kd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Eg(n, r, l, u, c, p, S) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, u = ss(Error(m(422))), Qo(n, r, S, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (p = u.fallback, c = r.mode, u = Es({ mode: "visible", children: u.children }, c, 0, null), p = lo(p, c, S, null), p.flags |= 2, u.return = r, p.return = r, u.sibling = p, r.child = u, r.mode & 1 && Vo(r, n.child, null, S), r.child.memoizedState = Wd(S), r.memoizedState = Zl, p);
    if (!(r.mode & 1))
      return Qo(n, r, S, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u)
        var R = u.dgst;
      return u = R, p = Error(m(419)), u = ss(p, u, void 0), Qo(n, r, S, u);
    }
    if (R = (S & n.childLanes) !== 0, Cn || R) {
      if (u = Jt, u !== null) {
        switch (S & -S) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (u.suspendedLanes | S) ? 0 : c, c !== 0 && c !== p.retryLane && (p.retryLane = c, ki(n, c), pr(u, n, c, -1));
      }
      return op(), u = ss(Error(m(421))), Qo(n, r, S, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = kg.bind(null, n), c._reactRetry = r, null) : (n = p.treeContext, Ur = Va(c.nextSibling), qr = r, Vt = !0, ga = null, n !== null && (zr[ur++] = Gn, zr[ur++] = Ri, zr[ur++] = ya, Gn = n.id, Ri = n.overflow, ya = r), r = Kd(r, u.children), r.flags |= 4096, r);
  }
  function qd(n, r, l) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Fn(n.return, r, l);
  }
  function Wc(n, r, l, u, c) {
    var p = n.memoizedState;
    p === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: l, tailMode: c } : (p.isBackwards = r, p.rendering = null, p.renderingStartTime = 0, p.last = u, p.tail = l, p.tailMode = c);
  }
  function Xd(n, r, l) {
    var u = r.pendingProps, c = u.revealOrder, p = u.tail;
    if (Nn(n, r, u.children, l), u = We.current, u & 2)
      u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && qd(n, l, r);
            else if (n.tag === 19)
              qd(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      u &= 1;
    }
    if (Dt(We, u), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && Zt(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Wc(r, !1, c, l, p);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Zt(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          Wc(r, !0, l, null, p);
          break;
        case "together":
          Wc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function sr(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Qn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Li |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(m(153));
    if (r.child !== null) {
      for (n = r.child, l = hl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = hl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Ni(n, r, l) {
    switch (r.tag) {
      case 3:
        zh(r), Xt();
        break;
      case 5:
        Ge(r);
        break;
      case 1:
        Qt(r.type) && hc(r);
        break;
      case 4:
        Bd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        Dt(ri, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Dt(We, We.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Qd(n, r, l) : (Dt(We, We.current & 1), n = Qn(n, r, l), n !== null ? n.sibling : null);
        Dt(We, We.current & 1);
        break;
      case 19:
        if (u = (l & r.childLanes) !== 0, n.flags & 128) {
          if (u)
            return Xd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Dt(We, We.current), u)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Xl(n, r, l);
    }
    return Qn(n, r, l);
  }
  var fs, Jl, Ca, Mn;
  fs = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Jl = function() {
  }, Ca = function(n, r, l, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, Pl(ja.current);
      var p = null;
      switch (l) {
        case "input":
          c = wn(n, c), u = wn(n, u), p = [];
          break;
        case "select":
          c = ne({}, c, { value: void 0 }), u = ne({}, u, { value: void 0 }), p = [];
          break;
        case "textarea":
          c = Nr(n, c), u = Nr(n, u), p = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = vc);
      }
      lr(l, u);
      var S;
      l = null;
      for (K in c)
        if (!u.hasOwnProperty(K) && c.hasOwnProperty(K) && c[K] != null)
          if (K === "style") {
            var R = c[K];
            for (S in R)
              R.hasOwnProperty(S) && (l || (l = {}), l[S] = "");
          } else
            K !== "dangerouslySetInnerHTML" && K !== "children" && K !== "suppressContentEditableWarning" && K !== "suppressHydrationWarning" && K !== "autoFocus" && (x.hasOwnProperty(K) ? p || (p = []) : (p = p || []).push(K, null));
      for (K in u) {
        var D = u[K];
        if (R = c != null ? c[K] : void 0, u.hasOwnProperty(K) && D !== R && (D != null || R != null))
          if (K === "style")
            if (R) {
              for (S in R)
                !R.hasOwnProperty(S) || D && D.hasOwnProperty(S) || (l || (l = {}), l[S] = "");
              for (S in D)
                D.hasOwnProperty(S) && R[S] !== D[S] && (l || (l = {}), l[S] = D[S]);
            } else
              l || (p || (p = []), p.push(
                K,
                l
              )), l = D;
          else
            K === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, R = R ? R.__html : void 0, D != null && R !== D && (p = p || []).push(K, D)) : K === "children" ? typeof D != "string" && typeof D != "number" || (p = p || []).push(K, "" + D) : K !== "suppressContentEditableWarning" && K !== "suppressHydrationWarning" && (x.hasOwnProperty(K) ? (D != null && K === "onScroll" && At("scroll", n), p || R === D || (p = [])) : (p = p || []).push(K, D));
      }
      l && (p = p || []).push("style", l);
      var K = p;
      (r.updateQueue = K) && (r.flags |= 4);
    }
  }, Mn = function(n, r, l, u) {
    l !== u && (r.flags |= 4);
  };
  function ds(n, r) {
    if (!Vt)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var u = null; l !== null; )
            l.alternate !== null && (u = l), l = l.sibling;
          u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
      }
  }
  function cr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, u = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = l, r;
  }
  function Cg(n, r, l) {
    var u = r.pendingProps;
    switch (Ld(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return cr(r), null;
      case 1:
        return Qt(r.type) && ma(), cr(r), null;
      case 3:
        return u = r.stateNode, ul(), Rt(ln), Rt(Ze), kc(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Sc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ga !== null && (Ss(ga), ga = null))), Jl(n, r), cr(r), null;
      case 5:
        ut(r);
        var c = Pl(jo.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Ca(n, r, l, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null)
              throw Error(m(166));
            return cr(r), null;
          }
          if (n = Pl(ja.current), Sc(r)) {
            u = r.stateNode, l = r.type;
            var p = r.memoizedProps;
            switch (u[ti] = r, u[Bl] = p, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                At("cancel", u), At("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                At("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Ku.length; c++)
                  At(Ku[c], u);
                break;
              case "source":
                At("error", u);
                break;
              case "img":
              case "image":
              case "link":
                At(
                  "error",
                  u
                ), At("load", u);
                break;
              case "details":
                At("toggle", u);
                break;
              case "input":
                fn(u, p), At("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!p.multiple }, At("invalid", u);
                break;
              case "textarea":
                Rn(u, p), At("invalid", u);
            }
            lr(l, p), c = null;
            for (var S in p)
              if (p.hasOwnProperty(S)) {
                var R = p[S];
                S === "children" ? typeof R == "string" ? u.textContent !== R && (p.suppressHydrationWarning !== !0 && pc(u.textContent, R, n), c = ["children", R]) : typeof R == "number" && u.textContent !== "" + R && (p.suppressHydrationWarning !== !0 && pc(
                  u.textContent,
                  R,
                  n
                ), c = ["children", "" + R]) : x.hasOwnProperty(S) && R != null && S === "onScroll" && At("scroll", u);
              }
            switch (l) {
              case "input":
                Gt(u), br(u, p, !0);
                break;
              case "textarea":
                Gt(u), Gr(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (u.onclick = vc);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            S = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = za(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = S.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = S.createElement(l, { is: u.is }) : (n = S.createElement(l), l === "select" && (S = n, u.multiple ? S.multiple = !0 : u.size && (S.size = u.size))) : n = S.createElementNS(n, l), n[ti] = r, n[Bl] = u, fs(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (S = kn(l, u), l) {
                case "dialog":
                  At("cancel", n), At("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  At("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Ku.length; c++)
                    At(Ku[c], n);
                  c = u;
                  break;
                case "source":
                  At("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  At(
                    "error",
                    n
                  ), At("load", n), c = u;
                  break;
                case "details":
                  At("toggle", n), c = u;
                  break;
                case "input":
                  fn(n, u), c = wn(n, u), At("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = ne({}, u, { value: void 0 }), At("invalid", n);
                  break;
                case "textarea":
                  Rn(n, u), c = Nr(n, u), At("invalid", n);
                  break;
                default:
                  c = u;
              }
              lr(l, c), R = c;
              for (p in R)
                if (R.hasOwnProperty(p)) {
                  var D = R[p];
                  p === "style" ? zt(n, D) : p === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, D != null && Nl(n, D)) : p === "children" ? typeof D == "string" ? (l !== "textarea" || D !== "") && ua(n, D) : typeof D == "number" && ua(n, "" + D) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (x.hasOwnProperty(p) ? D != null && p === "onScroll" && At("scroll", n) : D != null && X(n, p, D, S));
                }
              switch (l) {
                case "input":
                  Gt(n), br(n, u, !1);
                  break;
                case "textarea":
                  Gt(n), Gr(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + st(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, p = u.value, p != null ? Yr(n, !!u.multiple, p, !1) : u.defaultValue != null && Yr(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = vc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return cr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Mn(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null)
            throw Error(m(166));
          if (l = Pl(jo.current), Pl(ja.current), Sc(r)) {
            if (u = r.stateNode, l = r.memoizedProps, u[ti] = r, (p = u.nodeValue !== l) && (n = qr, n !== null))
              switch (n.tag) {
                case 3:
                  pc(u.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && pc(u.nodeValue, l, (n.mode & 1) !== 0);
              }
            p && (r.flags |= 4);
          } else
            u = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(u), u[ti] = r, r.stateNode = u;
        }
        return cr(r), null;
      case 13:
        if (Rt(We), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Vt && Ur !== null && r.mode & 1 && !(r.flags & 128))
            Ch(), Xt(), r.flags |= 98560, p = !1;
          else if (p = Sc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!p)
                throw Error(m(318));
              if (p = r.memoizedState, p = p !== null ? p.dehydrated : null, !p)
                throw Error(m(317));
              p[ti] = r;
            } else
              Xt(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            cr(r), p = !1;
          } else
            ga !== null && (Ss(ga), ga = null), p = !0;
          if (!p)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || We.current & 1 ? _n === 0 && (_n = 3) : op())), r.updateQueue !== null && (r.flags |= 4), cr(r), null);
      case 4:
        return ul(), Jl(n, r), n === null && Ho(r.stateNode.containerInfo), cr(r), null;
      case 10:
        return al(r.type._context), cr(r), null;
      case 17:
        return Qt(r.type) && ma(), cr(r), null;
      case 19:
        if (Rt(We), p = r.memoizedState, p === null)
          return cr(r), null;
        if (u = (r.flags & 128) !== 0, S = p.rendering, S === null)
          if (u)
            ds(p, !1);
          else {
            if (_n !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (S = Zt(n), S !== null) {
                  for (r.flags |= 128, ds(p, !1), u = S.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = l, l = r.child; l !== null; )
                    p = l, n = u, p.flags &= 14680066, S = p.alternate, S === null ? (p.childLanes = 0, p.lanes = n, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = S.childLanes, p.lanes = S.lanes, p.child = S.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = S.memoizedProps, p.memoizedState = S.memoizedState, p.updateQueue = S.updateQueue, p.type = S.type, n = S.dependencies, p.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Dt(We, We.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            p.tail !== null && an() > tu && (r.flags |= 128, u = !0, ds(p, !1), r.lanes = 4194304);
          }
        else {
          if (!u)
            if (n = Zt(S), n !== null) {
              if (r.flags |= 128, u = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), ds(p, !0), p.tail === null && p.tailMode === "hidden" && !S.alternate && !Vt)
                return cr(r), null;
            } else
              2 * an() - p.renderingStartTime > tu && l !== 1073741824 && (r.flags |= 128, u = !0, ds(p, !1), r.lanes = 4194304);
          p.isBackwards ? (S.sibling = r.child, r.child = S) : (l = p.last, l !== null ? l.sibling = S : r.child = S, p.last = S);
        }
        return p.tail !== null ? (r = p.tail, p.rendering = r, p.tail = r.sibling, p.renderingStartTime = an(), r.sibling = null, l = We.current, Dt(We, u ? l & 1 | 2 : l & 1), r) : (cr(r), null);
      case 22:
      case 23:
        return lp(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? Jr & 1073741824 && (cr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : cr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, r.tag));
  }
  function Zd(n, r) {
    switch (Ld(r), r.tag) {
      case 1:
        return Qt(r.type) && ma(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return ul(), Rt(ln), Rt(Ze), kc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return ut(r), null;
      case 13:
        if (Rt(We), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(m(340));
          Xt();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Rt(We), null;
      case 4:
        return ul(), null;
      case 10:
        return al(r.type._context), null;
      case 22:
      case 23:
        return lp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ps = !1, Ln = !1, Uh = typeof WeakSet == "function" ? WeakSet : Set, Le = null;
  function Ko(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          un(n, r, u);
        }
      else
        l.current = null;
  }
  function vs(n, r, l) {
    try {
      l();
    } catch (u) {
      un(n, r, u);
    }
  }
  var Ah = !1;
  function Hh(n, r) {
    if (xd = Ol, n = uc(), Ci(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var u = l.getSelection && l.getSelection();
          if (u && u.rangeCount !== 0) {
            l = u.anchorNode;
            var c = u.anchorOffset, p = u.focusNode;
            u = u.focusOffset;
            try {
              l.nodeType, p.nodeType;
            } catch {
              l = null;
              break e;
            }
            var S = 0, R = -1, D = -1, K = 0, le = 0, oe = n, ie = null;
            t:
              for (; ; ) {
                for (var we; oe !== l || c !== 0 && oe.nodeType !== 3 || (R = S + c), oe !== p || u !== 0 && oe.nodeType !== 3 || (D = S + u), oe.nodeType === 3 && (S += oe.nodeValue.length), (we = oe.firstChild) !== null; )
                  ie = oe, oe = we;
                for (; ; ) {
                  if (oe === n)
                    break t;
                  if (ie === l && ++K === c && (R = S), ie === p && ++le === u && (D = S), (we = oe.nextSibling) !== null)
                    break;
                  oe = ie, ie = oe.parentNode;
                }
                oe = we;
              }
            l = R === -1 || D === -1 ? null : { start: R, end: D };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (Il = { focusedElem: n, selectionRange: l }, Ol = !1, Le = r; Le !== null; )
      if (r = Le, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Le = n;
      else
        for (; Le !== null; ) {
          r = Le;
          try {
            var _e = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (_e !== null) {
                    var Ae = _e.memoizedProps, vn = _e.memoizedState, I = r.stateNode, O = I.getSnapshotBeforeUpdate(r.elementType === r.type ? Ae : Xr(r.type, Ae), vn);
                    I.__reactInternalSnapshotBeforeUpdate = O;
                  }
                  break;
                case 3:
                  var P = r.stateNode.containerInfo;
                  P.nodeType === 1 ? P.textContent = "" : P.nodeType === 9 && P.documentElement && P.removeChild(P.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (pe) {
            un(r, r.return, pe);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Le = n;
            break;
          }
          Le = r.return;
        }
    return _e = Ah, Ah = !1, _e;
  }
  function hs(n, r, l) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var p = c.destroy;
          c.destroy = void 0, p !== void 0 && vs(r, l, p);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function ms(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var u = l.create;
          l.destroy = u();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Jd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function ep(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, ep(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ti], delete r[Bl], delete r[kd], delete r[vg], delete r[Dd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ih(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Qc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Ih(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function qo(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = vc));
    else if (u !== 4 && (n = n.child, n !== null))
      for (qo(n, r, l), n = n.sibling; n !== null; )
        qo(n, r, l), n = n.sibling;
  }
  function ii(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null))
      for (ii(n, r, l), n = n.sibling; n !== null; )
        ii(n, r, l), n = n.sibling;
  }
  var Kt = null, Bn = !1;
  function Ta(n, r, l) {
    for (l = l.child; l !== null; )
      Xo(n, r, l), l = l.sibling;
  }
  function Xo(n, r, l) {
    if (Aa && typeof Aa.onCommitFiberUnmount == "function")
      try {
        Aa.onCommitFiberUnmount(Ou, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        Ln || Ko(l, r);
      case 6:
        var u = Kt, c = Bn;
        Kt = null, Ta(n, r, l), Kt = u, Bn = c, Kt !== null && (Bn ? (n = Kt, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Kt.removeChild(l.stateNode));
        break;
      case 18:
        Kt !== null && (Bn ? (n = Kt, l = l.stateNode, n.nodeType === 8 ? Zi(n.parentNode, l) : n.nodeType === 1 && Zi(n, l), Iu(n)) : Zi(Kt, l.stateNode));
        break;
      case 4:
        u = Kt, c = Bn, Kt = l.stateNode.containerInfo, Bn = !0, Ta(n, r, l), Kt = u, Bn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ln && (u = l.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var p = c, S = p.destroy;
            p = p.tag, S !== void 0 && (p & 2 || p & 4) && vs(l, r, S), c = c.next;
          } while (c !== u);
        }
        Ta(n, r, l);
        break;
      case 1:
        if (!Ln && (Ko(l, r), u = l.stateNode, typeof u.componentWillUnmount == "function"))
          try {
            u.props = l.memoizedProps, u.state = l.memoizedState, u.componentWillUnmount();
          } catch (R) {
            un(l, r, R);
          }
        Ta(n, r, l);
        break;
      case 21:
        Ta(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Ln = (u = Ln) || l.memoizedState !== null, Ta(n, r, l), Ln = u) : Ta(n, r, l);
        break;
      default:
        Ta(n, r, l);
    }
  }
  function Mi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Uh()), r.forEach(function(u) {
        var c = Dg.bind(null, n, u);
        l.has(u) || (l.add(u), u.then(c, c));
      });
    }
  }
  function Pa(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var u = 0; u < l.length; u++) {
        var c = l[u];
        try {
          var p = n, S = r, R = S;
          e:
            for (; R !== null; ) {
              switch (R.tag) {
                case 5:
                  Kt = R.stateNode, Bn = !1;
                  break e;
                case 3:
                  Kt = R.stateNode.containerInfo, Bn = !0;
                  break e;
                case 4:
                  Kt = R.stateNode.containerInfo, Bn = !0;
                  break e;
              }
              R = R.return;
            }
          if (Kt === null)
            throw Error(m(160));
          Xo(p, S, c), Kt = null, Bn = !1;
          var D = c.alternate;
          D !== null && (D.return = null), c.return = null;
        } catch (K) {
          un(c, r, K);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Fh(r, n), r = r.sibling;
  }
  function Fh(n, r) {
    var l = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Pa(r, n), li(n), u & 4) {
          try {
            hs(3, n, n.return), ms(3, n);
          } catch (Ae) {
            un(n, n.return, Ae);
          }
          try {
            hs(5, n, n.return);
          } catch (Ae) {
            un(n, n.return, Ae);
          }
        }
        break;
      case 1:
        Pa(r, n), li(n), u & 512 && l !== null && Ko(l, l.return);
        break;
      case 5:
        if (Pa(r, n), li(n), u & 512 && l !== null && Ko(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ua(c, "");
          } catch (Ae) {
            un(n, n.return, Ae);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var p = n.memoizedProps, S = l !== null ? l.memoizedProps : p, R = n.type, D = n.updateQueue;
          if (n.updateQueue = null, D !== null)
            try {
              R === "input" && p.type === "radio" && p.name != null && Wt(c, p), kn(R, S);
              var K = kn(R, p);
              for (S = 0; S < D.length; S += 2) {
                var le = D[S], oe = D[S + 1];
                le === "style" ? zt(c, oe) : le === "dangerouslySetInnerHTML" ? Nl(c, oe) : le === "children" ? ua(c, oe) : X(c, le, oe, K);
              }
              switch (R) {
                case "input":
                  mr(c, p);
                  break;
                case "textarea":
                  Oa(c, p);
                  break;
                case "select":
                  var ie = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!p.multiple;
                  var we = p.value;
                  we != null ? Yr(c, !!p.multiple, we, !1) : ie !== !!p.multiple && (p.defaultValue != null ? Yr(
                    c,
                    !!p.multiple,
                    p.defaultValue,
                    !0
                  ) : Yr(c, !!p.multiple, p.multiple ? [] : "", !1));
              }
              c[Bl] = p;
            } catch (Ae) {
              un(n, n.return, Ae);
            }
        }
        break;
      case 6:
        if (Pa(r, n), li(n), u & 4) {
          if (n.stateNode === null)
            throw Error(m(162));
          c = n.stateNode, p = n.memoizedProps;
          try {
            c.nodeValue = p;
          } catch (Ae) {
            un(n, n.return, Ae);
          }
        }
        break;
      case 3:
        if (Pa(r, n), li(n), u & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Iu(r.containerInfo);
          } catch (Ae) {
            un(n, n.return, Ae);
          }
        break;
      case 4:
        Pa(r, n), li(n);
        break;
      case 13:
        Pa(r, n), li(n), c = n.child, c.flags & 8192 && (p = c.memoizedState !== null, c.stateNode.isHidden = p, !p || c.alternate !== null && c.alternate.memoizedState !== null || (rp = an())), u & 4 && Mi(n);
        break;
      case 22:
        if (le = l !== null && l.memoizedState !== null, n.mode & 1 ? (Ln = (K = Ln) || le, Pa(r, n), Ln = K) : Pa(r, n), li(n), u & 8192) {
          if (K = n.memoizedState !== null, (n.stateNode.isHidden = K) && !le && n.mode & 1)
            for (Le = n, le = n.child; le !== null; ) {
              for (oe = Le = le; Le !== null; ) {
                switch (ie = Le, we = ie.child, ie.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    hs(4, ie, ie.return);
                    break;
                  case 1:
                    Ko(ie, ie.return);
                    var _e = ie.stateNode;
                    if (typeof _e.componentWillUnmount == "function") {
                      u = ie, l = ie.return;
                      try {
                        r = u, _e.props = r.memoizedProps, _e.state = r.memoizedState, _e.componentWillUnmount();
                      } catch (Ae) {
                        un(u, l, Ae);
                      }
                    }
                    break;
                  case 5:
                    Ko(ie, ie.return);
                    break;
                  case 22:
                    if (ie.memoizedState !== null) {
                      tp(oe);
                      continue;
                    }
                }
                we !== null ? (we.return = ie, Le = we) : tp(oe);
              }
              le = le.sibling;
            }
          e:
            for (le = null, oe = n; ; ) {
              if (oe.tag === 5) {
                if (le === null) {
                  le = oe;
                  try {
                    c = oe.stateNode, K ? (p = c.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (R = oe.stateNode, D = oe.memoizedProps.style, S = D != null && D.hasOwnProperty("display") ? D.display : null, R.style.display = ct("display", S));
                  } catch (Ae) {
                    un(n, n.return, Ae);
                  }
                }
              } else if (oe.tag === 6) {
                if (le === null)
                  try {
                    oe.stateNode.nodeValue = K ? "" : oe.memoizedProps;
                  } catch (Ae) {
                    un(n, n.return, Ae);
                  }
              } else if ((oe.tag !== 22 && oe.tag !== 23 || oe.memoizedState === null || oe === n) && oe.child !== null) {
                oe.child.return = oe, oe = oe.child;
                continue;
              }
              if (oe === n)
                break e;
              for (; oe.sibling === null; ) {
                if (oe.return === null || oe.return === n)
                  break e;
                le === oe && (le = null), oe = oe.return;
              }
              le === oe && (le = null), oe.sibling.return = oe.return, oe = oe.sibling;
            }
        }
        break;
      case 19:
        Pa(r, n), li(n), u & 4 && Mi(n);
        break;
      case 21:
        break;
      default:
        Pa(
          r,
          n
        ), li(n);
    }
  }
  function li(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Ih(l)) {
              var u = l;
              break e;
            }
            l = l.return;
          }
          throw Error(m(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (ua(c, ""), u.flags &= -33);
            var p = Qc(n);
            ii(n, p, c);
            break;
          case 3:
          case 4:
            var S = u.stateNode.containerInfo, R = Qc(n);
            qo(n, R, S);
            break;
          default:
            throw Error(m(161));
        }
      } catch (D) {
        un(n, n.return, D);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Bh(n, r, l) {
    Le = n, Zo(n);
  }
  function Zo(n, r, l) {
    for (var u = (n.mode & 1) !== 0; Le !== null; ) {
      var c = Le, p = c.child;
      if (c.tag === 22 && u) {
        var S = c.memoizedState !== null || ps;
        if (!S) {
          var R = c.alternate, D = R !== null && R.memoizedState !== null || Ln;
          R = ps;
          var K = Ln;
          if (ps = S, (Ln = D) && !K)
            for (Le = c; Le !== null; )
              S = Le, D = S.child, S.tag === 22 && S.memoizedState !== null ? jh(c) : D !== null ? (D.return = S, Le = D) : jh(c);
          for (; p !== null; )
            Le = p, Zo(p), p = p.sibling;
          Le = c, ps = R, Ln = K;
        }
        Vh(n);
      } else
        c.subtreeFlags & 8772 && p !== null ? (p.return = c, Le = p) : Vh(n);
    }
  }
  function Vh(n) {
    for (; Le !== null; ) {
      var r = Le;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Ln || ms(5, r);
                break;
              case 1:
                var u = r.stateNode;
                if (r.flags & 4 && !Ln)
                  if (l === null)
                    u.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : Xr(r.type, l.memoizedProps);
                    u.componentDidUpdate(c, l.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
                  }
                var p = r.updateQueue;
                p !== null && jl(r, p, u);
                break;
              case 3:
                var S = r.updateQueue;
                if (S !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  jl(r, S, l);
                }
                break;
              case 5:
                var R = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = R;
                  var D = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      D.autoFocus && l.focus();
                      break;
                    case "img":
                      D.src && (l.src = D.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var K = r.alternate;
                  if (K !== null) {
                    var le = K.memoizedState;
                    if (le !== null) {
                      var oe = le.dehydrated;
                      oe !== null && Iu(oe);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(m(163));
            }
          Ln || r.flags & 512 && Jd(r);
        } catch (ie) {
          un(r, r.return, ie);
        }
      }
      if (r === n) {
        Le = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Le = l;
        break;
      }
      Le = r.return;
    }
  }
  function tp(n) {
    for (; Le !== null; ) {
      var r = Le;
      if (r === n) {
        Le = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Le = l;
        break;
      }
      Le = r.return;
    }
  }
  function jh(n) {
    for (; Le !== null; ) {
      var r = Le;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              ms(4, r);
            } catch (D) {
              un(r, l, D);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (D) {
                un(r, c, D);
              }
            }
            var p = r.return;
            try {
              Jd(r);
            } catch (D) {
              un(r, p, D);
            }
            break;
          case 5:
            var S = r.return;
            try {
              Jd(r);
            } catch (D) {
              un(r, S, D);
            }
        }
      } catch (D) {
        un(r, r.return, D);
      }
      if (r === n) {
        Le = null;
        break;
      }
      var R = r.sibling;
      if (R !== null) {
        R.return = r.return, Le = R;
        break;
      }
      Le = r.return;
    }
  }
  var Kc = Math.ceil, ys = fe.ReactCurrentDispatcher, np = fe.ReactCurrentOwner, fr = fe.ReactCurrentBatchConfig, dt = 0, Jt = null, on = null, Vn = 0, Jr = 0, Jo = at(0), _n = 0, gs = null, Li = 0, qc = 0, eu = 0, eo = null, gr = null, rp = 0, tu = 1 / 0, _i = null, Xc = !1, to = null, oi = null, dl = !1, pl = null, Zc = 0, nu = 0, Jc = null, no = -1, ro = 0;
  function dr() {
    return dt & 6 ? an() : no !== -1 ? no : no = an();
  }
  function Tn(n) {
    return n.mode & 1 ? dt & 2 && Vn !== 0 ? Vn & -Vn : Ec.transition !== null ? (ro === 0 && (ro = qs()), ro) : (n = Nt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : rd(n.type)), n) : 1;
  }
  function pr(n, r, l, u) {
    if (50 < nu)
      throw nu = 0, Jc = null, Error(m(185));
    _l(n, l, u), (!(dt & 2) || n !== Jt) && (n === Jt && (!(dt & 2) && (qc |= l), _n === 4 && xa(n, Vn)), vr(n, u), l === 1 && dt === 0 && !(r.mode & 1) && (tu = an() + 500, In && _r()));
  }
  function vr(n, r) {
    var l = n.callbackNode;
    Ks(n, r);
    var u = Ha(n, n === Jt ? Vn : 0);
    if (u === 0)
      l !== null && Nv(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (l != null && Nv(l), r === 1)
        n.tag === 0 ? Nd(Ph.bind(null, n)) : bd(Ph.bind(null, n)), Rd(function() {
          !(dt & 6) && _r();
        }), l = null;
      else {
        switch (ed(u)) {
          case 1:
            l = yi;
            break;
          case 4:
            l = ft;
            break;
          case 16:
            l = Wi;
            break;
          case 536870912:
            l = qf;
            break;
          default:
            l = Wi;
        }
        l = sp(l, ru.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function ru(n, r) {
    if (no = -1, ro = 0, dt & 6)
      throw Error(m(327));
    var l = n.callbackNode;
    if (iu() && n.callbackNode !== l)
      return null;
    var u = Ha(n, n === Jt ? Vn : 0);
    if (u === 0)
      return null;
    if (u & 30 || u & n.expiredLanes || r)
      r = tf(n, u);
    else {
      r = u;
      var c = dt;
      dt |= 2;
      var p = ef();
      (Jt !== n || Vn !== r) && (_i = null, tu = an() + 500, ao(n, r));
      do
        try {
          xg();
          break;
        } catch (R) {
          $h(n, R);
        }
      while (1);
      Ud(), ys.current = p, dt = c, on !== null ? r = 0 : (Jt = null, Vn = 0, r = _n);
    }
    if (r !== 0) {
      if (r === 2 && (c = Zf(n), c !== 0 && (u = c, r = ap(n, c))), r === 1)
        throw l = gs, ao(n, 0), xa(n, u), vr(n, an()), l;
      if (r === 6)
        xa(n, u);
      else {
        if (c = n.current.alternate, !(u & 30) && !ip(c) && (r = tf(n, u), r === 2 && (p = Zf(n), p !== 0 && (u = p, r = ap(n, p))), r === 1))
          throw l = gs, ao(n, 0), xa(n, u), vr(n, an()), l;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            io(n, gr, _i);
            break;
          case 3:
            if (xa(n, u), (u & 130023424) === u && (r = rp + 500 - an(), 10 < r)) {
              if (Ha(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                dr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Fl(io.bind(null, n, gr, _i), r);
              break;
            }
            io(n, gr, _i);
            break;
          case 4:
            if (xa(n, u), (u & 4194240) === u)
              break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var S = 31 - ca(u);
              p = 1 << S, S = r[S], S > c && (c = S), u &= ~p;
            }
            if (u = c, u = an() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Kc(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Fl(io.bind(null, n, gr, _i), u);
              break;
            }
            io(n, gr, _i);
            break;
          case 5:
            io(n, gr, _i);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return vr(n, an()), n.callbackNode === l ? ru.bind(null, n) : null;
  }
  function ap(n, r) {
    var l = eo;
    return n.current.memoizedState.isDehydrated && (ao(n, r).flags |= 256), n = tf(n, r), n !== 2 && (r = gr, gr = l, r !== null && Ss(r)), n;
  }
  function Ss(n) {
    gr === null ? gr = n : gr.push.apply(gr, n);
  }
  function ip(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var u = 0; u < l.length; u++) {
            var c = l[u], p = c.getSnapshot;
            c = c.value;
            try {
              if (!pa(p(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function xa(n, r) {
    for (r &= ~eu, r &= ~qc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - ca(r), u = 1 << l;
      n[l] = -1, r &= ~u;
    }
  }
  function Ph(n) {
    if (dt & 6)
      throw Error(m(327));
    iu();
    var r = Ha(n, 0);
    if (!(r & 1))
      return vr(n, an()), null;
    var l = tf(n, r);
    if (n.tag !== 0 && l === 2) {
      var u = Zf(n);
      u !== 0 && (r = u, l = ap(n, u));
    }
    if (l === 1)
      throw l = gs, ao(n, 0), xa(n, r), vr(n, an()), l;
    if (l === 6)
      throw Error(m(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, io(n, gr, _i), vr(n, an()), null;
  }
  function au(n, r) {
    var l = dt;
    dt |= 1;
    try {
      return n(r);
    } finally {
      dt = l, dt === 0 && (tu = an() + 500, In && _r());
    }
  }
  function vl(n) {
    pl !== null && pl.tag === 0 && !(dt & 6) && iu();
    var r = dt;
    dt |= 1;
    var l = fr.transition, u = Nt;
    try {
      if (fr.transition = null, Nt = 1, n)
        return n();
    } finally {
      Nt = u, fr.transition = l, dt = r, !(dt & 6) && _r();
    }
  }
  function lp() {
    Jr = Jo.current, Rt(Jo);
  }
  function ao(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, yh(l)), on !== null)
      for (l = on.return; l !== null; ) {
        var u = l;
        switch (Ld(u), u.tag) {
          case 1:
            u = u.type.childContextTypes, u != null && ma();
            break;
          case 3:
            ul(), Rt(ln), Rt(Ze), kc();
            break;
          case 5:
            ut(u);
            break;
          case 4:
            ul();
            break;
          case 13:
            Rt(We);
            break;
          case 19:
            Rt(We);
            break;
          case 10:
            al(u.type._context);
            break;
          case 22:
          case 23:
            lp();
        }
        l = l.return;
      }
    if (Jt = n, on = n = hl(n.current, null), Vn = Jr = r, _n = 0, gs = null, eu = qc = Li = 0, gr = eo = null, Wn !== null) {
      for (r = 0; r < Wn.length; r++)
        if (l = Wn[r], u = l.interleaved, u !== null) {
          l.interleaved = null;
          var c = u.next, p = l.pending;
          if (p !== null) {
            var S = p.next;
            p.next = c, u.next = S;
          }
          l.pending = u;
        }
      Wn = null;
    }
    return n;
  }
  function $h(n, r) {
    do {
      var l = on;
      try {
        if (Ud(), Dc.current = Pc, Ke) {
          for (var u = jt.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Ke = !1;
        }
        if ($l = 0, mt = te = jt = null, ai = !1, Zr = 0, np.current = null, l === null || l.return === null) {
          _n = 1, gs = r, on = null;
          break;
        }
        e: {
          var p = n, S = l.return, R = l, D = r;
          if (r = Vn, R.flags |= 32768, D !== null && typeof D == "object" && typeof D.then == "function") {
            var K = D, le = R, oe = le.tag;
            if (!(le.mode & 1) && (oe === 0 || oe === 11 || oe === 15)) {
              var ie = le.alternate;
              ie ? (le.updateQueue = ie.updateQueue, le.memoizedState = ie.memoizedState, le.lanes = ie.lanes) : (le.updateQueue = null, le.memoizedState = null);
            }
            var we = $d(S);
            if (we !== null) {
              we.flags &= -257, Yd(we, S, R, p, r), we.mode & 1 && _h(p, K, r), r = we, D = K;
              var _e = r.updateQueue;
              if (_e === null) {
                var Ae = /* @__PURE__ */ new Set();
                Ae.add(D), r.updateQueue = Ae;
              } else
                _e.add(D);
              break e;
            } else {
              if (!(r & 1)) {
                _h(p, K, r), op();
                break e;
              }
              D = Error(m(426));
            }
          } else if (Vt && R.mode & 1) {
            var vn = $d(S);
            if (vn !== null) {
              !(vn.flags & 65536) && (vn.flags |= 256), Yd(vn, S, R, p, r), Od(Go(D, R));
              break e;
            }
          }
          p = D = Go(D, R), _n !== 4 && (_n = 2), eo === null ? eo = [p] : eo.push(p), p = S;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, r &= -r, p.lanes |= r;
                var I = Lh(p, D, r);
                Id(p, I);
                break e;
              case 1:
                R = D;
                var O = p.type, P = p.stateNode;
                if (!(p.flags & 128) && (typeof O.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && (oi === null || !oi.has(P)))) {
                  p.flags |= 65536, r &= -r, p.lanes |= r;
                  var pe = cs(p, R, r);
                  Id(p, pe);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        up(l);
      } catch (Ie) {
        r = Ie, on === l && l !== null && (on = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function ef() {
    var n = ys.current;
    return ys.current = Pc, n === null ? Pc : n;
  }
  function op() {
    (_n === 0 || _n === 3 || _n === 2) && (_n = 4), Jt === null || !(Li & 268435455) && !(qc & 268435455) || xa(Jt, Vn);
  }
  function tf(n, r) {
    var l = dt;
    dt |= 2;
    var u = ef();
    (Jt !== n || Vn !== r) && (_i = null, ao(n, r));
    do
      try {
        Tg();
        break;
      } catch (c) {
        $h(n, c);
      }
    while (1);
    if (Ud(), dt = l, ys.current = u, on !== null)
      throw Error(m(261));
    return Jt = null, Vn = 0, _n;
  }
  function Tg() {
    for (; on !== null; )
      Yh(on);
  }
  function xg() {
    for (; on !== null && !Gy(); )
      Yh(on);
  }
  function Yh(n) {
    var r = Wh(n.alternate, n, Jr);
    n.memoizedProps = n.pendingProps, r === null ? up(n) : on = r, np.current = null;
  }
  function up(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Zd(l, r), l !== null) {
          l.flags &= 32767, on = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          _n = 6, on = null;
          return;
        }
      } else if (l = Cg(l, r, Jr), l !== null) {
        on = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        on = r;
        return;
      }
      on = r = n;
    } while (r !== null);
    _n === 0 && (_n = 5);
  }
  function io(n, r, l) {
    var u = Nt, c = fr.transition;
    try {
      fr.transition = null, Nt = 1, wg(n, r, l, u);
    } finally {
      fr.transition = c, Nt = u;
    }
    return null;
  }
  function wg(n, r, l, u) {
    do
      iu();
    while (pl !== null);
    if (dt & 6)
      throw Error(m(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(m(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var p = l.lanes | l.childLanes;
    if (qy(n, p), n === Jt && (on = Jt = null, Vn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || dl || (dl = !0, sp(Wi, function() {
      return iu(), null;
    })), p = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || p) {
      p = fr.transition, fr.transition = null;
      var S = Nt;
      Nt = 1;
      var R = dt;
      dt |= 4, np.current = null, Hh(n, l), Fh(l, n), sc(Il), Ol = !!xd, Il = xd = null, n.current = l, Bh(l), Wy(), dt = R, Nt = S, fr.transition = p;
    } else
      n.current = l;
    if (dl && (dl = !1, pl = n, Zc = c), p = n.pendingLanes, p === 0 && (oi = null), Lv(l.stateNode), vr(n, an()), r !== null)
      for (u = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (Xc)
      throw Xc = !1, n = to, to = null, n;
    return Zc & 1 && n.tag !== 0 && iu(), p = n.pendingLanes, p & 1 ? n === Jc ? nu++ : (nu = 0, Jc = n) : nu = 0, _r(), null;
  }
  function iu() {
    if (pl !== null) {
      var n = ed(Zc), r = fr.transition, l = Nt;
      try {
        if (fr.transition = null, Nt = 16 > n ? 16 : n, pl === null)
          var u = !1;
        else {
          if (n = pl, pl = null, Zc = 0, dt & 6)
            throw Error(m(331));
          var c = dt;
          for (dt |= 4, Le = n.current; Le !== null; ) {
            var p = Le, S = p.child;
            if (Le.flags & 16) {
              var R = p.deletions;
              if (R !== null) {
                for (var D = 0; D < R.length; D++) {
                  var K = R[D];
                  for (Le = K; Le !== null; ) {
                    var le = Le;
                    switch (le.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hs(8, le, p);
                    }
                    var oe = le.child;
                    if (oe !== null)
                      oe.return = le, Le = oe;
                    else
                      for (; Le !== null; ) {
                        le = Le;
                        var ie = le.sibling, we = le.return;
                        if (ep(le), le === K) {
                          Le = null;
                          break;
                        }
                        if (ie !== null) {
                          ie.return = we, Le = ie;
                          break;
                        }
                        Le = we;
                      }
                  }
                }
                var _e = p.alternate;
                if (_e !== null) {
                  var Ae = _e.child;
                  if (Ae !== null) {
                    _e.child = null;
                    do {
                      var vn = Ae.sibling;
                      Ae.sibling = null, Ae = vn;
                    } while (Ae !== null);
                  }
                }
                Le = p;
              }
            }
            if (p.subtreeFlags & 2064 && S !== null)
              S.return = p, Le = S;
            else
              e:
                for (; Le !== null; ) {
                  if (p = Le, p.flags & 2048)
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hs(9, p, p.return);
                    }
                  var I = p.sibling;
                  if (I !== null) {
                    I.return = p.return, Le = I;
                    break e;
                  }
                  Le = p.return;
                }
          }
          var O = n.current;
          for (Le = O; Le !== null; ) {
            S = Le;
            var P = S.child;
            if (S.subtreeFlags & 2064 && P !== null)
              P.return = S, Le = P;
            else
              e:
                for (S = O; Le !== null; ) {
                  if (R = Le, R.flags & 2048)
                    try {
                      switch (R.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ms(9, R);
                      }
                    } catch (Ie) {
                      un(R, R.return, Ie);
                    }
                  if (R === S) {
                    Le = null;
                    break e;
                  }
                  var pe = R.sibling;
                  if (pe !== null) {
                    pe.return = R.return, Le = pe;
                    break e;
                  }
                  Le = R.return;
                }
          }
          if (dt = c, _r(), Aa && typeof Aa.onPostCommitFiberRoot == "function")
            try {
              Aa.onPostCommitFiberRoot(Ou, n);
            } catch {
            }
          u = !0;
        }
        return u;
      } finally {
        Nt = l, fr.transition = r;
      }
    }
    return !1;
  }
  function Gh(n, r, l) {
    r = Go(l, r), r = Lh(n, r, 1), n = ll(n, r, 1), r = dr(), n !== null && (_l(n, 1, r), vr(n, r));
  }
  function un(n, r, l) {
    if (n.tag === 3)
      Gh(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Gh(r, n, l);
          break;
        } else if (r.tag === 1) {
          var u = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (oi === null || !oi.has(u))) {
            n = Go(l, n), n = cs(r, n, 1), r = ll(r, n, 1), n = dr(), r !== null && (_l(r, 1, n), vr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Rg(n, r, l) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = dr(), n.pingedLanes |= n.suspendedLanes & l, Jt === n && (Vn & l) === l && (_n === 4 || _n === 3 && (Vn & 130023424) === Vn && 500 > an() - rp ? ao(n, 0) : eu |= l), vr(n, r);
  }
  function nf(n, r) {
    r === 0 && (n.mode & 1 ? (r = Do, Do <<= 1, !(Do & 130023424) && (Do = 4194304)) : r = 1);
    var l = dr();
    n = ki(n, r), n !== null && (_l(n, r, l), vr(n, l));
  }
  function kg(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), nf(n, l);
  }
  function Dg(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    u !== null && u.delete(r), nf(n, l);
  }
  var Wh;
  Wh = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || ln.current)
        Cn = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return Cn = !1, Ni(n, r, l);
        Cn = !!(n.flags & 131072);
      }
    else
      Cn = !1, Vt && r.flags & 1048576 && Md(r, Fo, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        sr(n, r), n = r.pendingProps;
        var c = ha(r, Ze.current);
        ye(r, l), c = sl(null, r, u, n, c, l);
        var p = Wl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Qt(u) ? (p = !0, hc(r)) : p = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Hd(r), c.updater = xc, r.stateNode = c, c._reactInternals = r, wc(r, u, n, l), r = Oh(null, r, u, !0, p, l)) : (r.tag = 0, Vt && p && mc(r), Nn(null, r, c, l), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (sr(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = Ng(u), n = Xr(u, n), c) {
            case 0:
              r = Wo(null, r, u, n, l);
              break e;
            case 1:
              r = Gd(null, r, u, n, l);
              break e;
            case 11:
              r = fl(null, r, u, n, l);
              break e;
            case 14:
              r = Yc(null, r, u, Xr(u.type, n), l);
              break e;
          }
          throw Error(m(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : Xr(u, c), Wo(n, r, u, c, l);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : Xr(u, c), Gd(n, r, u, c, l);
      case 3:
        e: {
          if (zh(r), n === null)
            throw Error(m(387));
          u = r.pendingProps, p = r.memoizedState, c = p.element, bn(n, r), ol(r, u, null, l);
          var S = r.memoizedState;
          if (u = S.element, p.isDehydrated)
            if (p = { element: u, isDehydrated: !1, cache: S.cache, pendingSuspenseBoundaries: S.pendingSuspenseBoundaries, transitions: S.transitions }, r.updateQueue.baseState = p, r.memoizedState = p, r.flags & 256) {
              c = Go(Error(m(423)), r), r = Gc(n, r, u, l, c);
              break e;
            } else if (u !== c) {
              c = Go(Error(m(424)), r), r = Gc(n, r, u, l, c);
              break e;
            } else
              for (Ur = Va(r.stateNode.containerInfo.firstChild), qr = r, Vt = !0, ga = null, l = Nh(r, null, u, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Xt(), u === c) {
              r = Qn(n, r, l);
              break e;
            }
            Nn(n, r, u, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Ge(r), n === null && gc(r), u = r.type, c = r.pendingProps, p = n !== null ? n.memoizedProps : null, S = c.children, Zu(u, c) ? S = null : p !== null && Zu(u, p) && (r.flags |= 32), it(n, r), Nn(n, r, S, l), r.child;
      case 6:
        return n === null && gc(r), null;
      case 13:
        return Qd(n, r, l);
      case 4:
        return Bd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = Vo(r, null, u, l) : Nn(n, r, u, l), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : Xr(u, c), fl(n, r, u, c, l);
      case 7:
        return Nn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Nn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Nn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, p = r.memoizedProps, S = c.value, Dt(ri, u._currentValue), u._currentValue = S, p !== null)
            if (pa(p.value, S)) {
              if (p.children === c.children && !ln.current) {
                r = Qn(n, r, l);
                break e;
              }
            } else
              for (p = r.child, p !== null && (p.return = r); p !== null; ) {
                var R = p.dependencies;
                if (R !== null) {
                  S = p.child;
                  for (var D = R.firstContext; D !== null; ) {
                    if (D.context === u) {
                      if (p.tag === 1) {
                        D = Di(-1, l & -l), D.tag = 2;
                        var K = p.updateQueue;
                        if (K !== null) {
                          K = K.shared;
                          var le = K.pending;
                          le === null ? D.next = D : (D.next = le.next, le.next = D), K.pending = D;
                        }
                      }
                      p.lanes |= l, D = p.alternate, D !== null && (D.lanes |= l), Fn(
                        p.return,
                        l,
                        r
                      ), R.lanes |= l;
                      break;
                    }
                    D = D.next;
                  }
                } else if (p.tag === 10)
                  S = p.type === r.type ? null : p.child;
                else if (p.tag === 18) {
                  if (S = p.return, S === null)
                    throw Error(m(341));
                  S.lanes |= l, R = S.alternate, R !== null && (R.lanes |= l), Fn(S, l, r), S = p.sibling;
                } else
                  S = p.child;
                if (S !== null)
                  S.return = p;
                else
                  for (S = p; S !== null; ) {
                    if (S === r) {
                      S = null;
                      break;
                    }
                    if (p = S.sibling, p !== null) {
                      p.return = S.return, S = p;
                      break;
                    }
                    S = S.return;
                  }
                p = S;
              }
          Nn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, ye(r, l), c = pn(c), u = u(c), r.flags |= 1, Nn(n, r, u, l), r.child;
      case 14:
        return u = r.type, c = Xr(u, r.pendingProps), c = Xr(u.type, c), Yc(n, r, u, c, l);
      case 15:
        return Ir(n, r, r.type, r.pendingProps, l);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : Xr(u, c), sr(n, r), r.tag = 1, Qt(u) ? (n = !0, hc(r)) : n = !1, ye(r, l), Rh(r, u, c), wc(r, u, c, l), Oh(null, r, u, !0, n, l);
      case 19:
        return Xd(n, r, l);
      case 22:
        return Xl(n, r, l);
    }
    throw Error(m(156, r.tag));
  };
  function sp(n, r) {
    return Kf(n, r);
  }
  function bg(n, r, l, u) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function wa(n, r, l, u) {
    return new bg(n, r, l, u);
  }
  function cp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Ng(n) {
    if (typeof n == "function")
      return cp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Ve)
        return 11;
      if (n === ke)
        return 14;
    }
    return 2;
  }
  function hl(n, r) {
    var l = n.alternate;
    return l === null ? (l = wa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function rf(n, r, l, u, c, p) {
    var S = 2;
    if (u = n, typeof n == "function")
      cp(n) && (S = 1);
    else if (typeof n == "string")
      S = 5;
    else
      e:
        switch (n) {
          case ae:
            return lo(l.children, c, p, r);
          case ve:
            S = 8, c |= 8;
            break;
          case Se:
            return n = wa(12, l, r, c | 2), n.elementType = Se, n.lanes = p, n;
          case Me:
            return n = wa(13, l, r, c), n.elementType = Me, n.lanes = p, n;
          case he:
            return n = wa(19, l, r, c), n.elementType = he, n.lanes = p, n;
          case ht:
            return Es(l, c, p, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case me:
                  S = 10;
                  break e;
                case Ce:
                  S = 9;
                  break e;
                case Ve:
                  S = 11;
                  break e;
                case ke:
                  S = 14;
                  break e;
                case Ue:
                  S = 16, u = null;
                  break e;
              }
            throw Error(m(130, n == null ? n : typeof n, ""));
        }
    return r = wa(S, l, r, c), r.elementType = n, r.type = u, r.lanes = p, r;
  }
  function lo(n, r, l, u) {
    return n = wa(7, n, u, r), n.lanes = l, n;
  }
  function Es(n, r, l, u) {
    return n = wa(22, n, u, r), n.elementType = ht, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Cs(n, r, l) {
    return n = wa(6, n, null, r), n.lanes = l, n;
  }
  function oo(n, r, l) {
    return r = wa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Mg(n, r, l, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Jf(0), this.expirationTimes = Jf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jf(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function af(n, r, l, u, c, p, S, R, D) {
    return n = new Mg(n, r, l, R, D), r === 1 ? (r = 1, p === !0 && (r |= 8)) : r = 0, p = wa(3, null, null, r), n.current = p, p.stateNode = n, p.memoizedState = { element: u, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Hd(p), n;
  }
  function Qh(n, r, l) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: W, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: l };
  }
  function fp(n) {
    if (!n)
      return ni;
    n = n._reactInternals;
    e: {
      if (ei(n) !== n || n.tag !== 1)
        throw Error(m(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Qt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(m(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Qt(l))
        return ts(n, l, r);
    }
    return r;
  }
  function Kh(n, r, l, u, c, p, S, R, D) {
    return n = af(l, u, !0, n, c, p, S, R, D), n.context = fp(null), l = n.current, u = dr(), c = Tn(l), p = Di(u, c), p.callback = r ?? null, ll(l, p, c), n.current.lanes = c, _l(n, c, u), vr(n, u), n;
  }
  function Ts(n, r, l, u) {
    var c = r.current, p = dr(), S = Tn(c);
    return l = fp(l), r.context === null ? r.context = l : r.pendingContext = l, r = Di(p, S), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = ll(c, r, S), n !== null && (pr(n, c, S, p), Tc(n, c, S)), S;
  }
  function lf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function qh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function dp(n, r) {
    qh(n, r), (n = n.alternate) && qh(n, r);
  }
  function Xh() {
    return null;
  }
  var pp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function of(n) {
    this._internalRoot = n;
  }
  Oi.prototype.render = of.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(m(409));
    Ts(n, r, null, null);
  }, Oi.prototype.unmount = of.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      vl(function() {
        Ts(null, n, null, null);
      }), r[wi] = null;
    }
  };
  function Oi(n) {
    this._internalRoot = n;
  }
  Oi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Uv();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Lt.length && r !== 0 && r < Lt[l].priority; l++)
        ;
      Lt.splice(l, 0, n), l === 0 && Av(n);
    }
  };
  function vp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function uf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Zh() {
  }
  function Lg(n, r, l, u, c) {
    if (c) {
      if (typeof u == "function") {
        var p = u;
        u = function() {
          var K = lf(S);
          p.call(K);
        };
      }
      var S = Kh(r, u, n, 0, null, !1, !1, "", Zh);
      return n._reactRootContainer = S, n[wi] = S.current, Ho(n.nodeType === 8 ? n.parentNode : n), vl(), S;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof u == "function") {
      var R = u;
      u = function() {
        var K = lf(D);
        R.call(K);
      };
    }
    var D = af(n, 0, !1, null, null, !1, !1, "", Zh);
    return n._reactRootContainer = D, n[wi] = D.current, Ho(n.nodeType === 8 ? n.parentNode : n), vl(function() {
      Ts(r, D, l, u);
    }), D;
  }
  function sf(n, r, l, u, c) {
    var p = l._reactRootContainer;
    if (p) {
      var S = p;
      if (typeof c == "function") {
        var R = c;
        c = function() {
          var D = lf(S);
          R.call(D);
        };
      }
      Ts(r, S, n, c);
    } else
      S = Lg(l, r, n, c, u);
    return lf(S);
  }
  zv = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Ll(r.pendingLanes);
          l !== 0 && (zu(r, l | 1), vr(r, an()), !(dt & 6) && (tu = an() + 500, _r()));
        }
        break;
      case 13:
        vl(function() {
          var u = ki(n, 1);
          if (u !== null) {
            var c = dr();
            pr(u, n, 1, c);
          }
        }), dp(n, 1);
    }
  }, Xs = function(n) {
    if (n.tag === 13) {
      var r = ki(n, 134217728);
      if (r !== null) {
        var l = dr();
        pr(r, n, 134217728, l);
      }
      dp(n, 134217728);
    }
  }, Ut = function(n) {
    if (n.tag === 13) {
      var r = Tn(n), l = ki(n, r);
      if (l !== null) {
        var u = dr();
        pr(l, n, r, u);
      }
      dp(n, r);
    }
  }, Uv = function() {
    return Nt;
  }, td = function(n, r) {
    var l = Nt;
    try {
      return Nt = n, r();
    } finally {
      Nt = l;
    }
  }, Ja = function(n, r, l) {
    switch (r) {
      case "input":
        if (mr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var u = l[r];
            if (u !== n && u.form === n.form) {
              var c = Pe(u);
              if (!c)
                throw Error(m(90));
              Mt(u), mr(u, c);
            }
          }
        }
        break;
      case "textarea":
        Oa(n, l);
        break;
      case "select":
        r = l.value, r != null && Yr(n, !!l.multiple, r, !1);
    }
  }, Rv = au, kv = vl;
  var _g = { usingClientEntryPoint: !1, Events: [es, Io, Pe, $s, Ys, au] }, lu = { findFiberByHostInstance: va, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Og = { bundleType: lu.bundleType, version: lu.version, rendererPackageName: lu.rendererPackageName, rendererConfig: lu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: fe.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Dv(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: lu.findFiberByHostInstance || Xh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var cf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!cf.isDisabled && cf.supportsFiber)
      try {
        Ou = cf.inject(Og), Aa = cf;
      } catch {
      }
  }
  return Ma.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _g, Ma.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!vp(r))
      throw Error(m(200));
    return Qh(n, r, null, l);
  }, Ma.createRoot = function(n, r) {
    if (!vp(n))
      throw Error(m(299));
    var l = !1, u = "", c = pp;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = af(n, 1, !1, null, null, l, !1, u, c), n[wi] = r.current, Ho(n.nodeType === 8 ? n.parentNode : n), new of(r);
  }, Ma.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(m(188)) : (n = Object.keys(n).join(","), Error(m(268, n)));
    return n = Dv(r), n = n === null ? null : n.stateNode, n;
  }, Ma.flushSync = function(n) {
    return vl(n);
  }, Ma.hydrate = function(n, r, l) {
    if (!uf(r))
      throw Error(m(200));
    return sf(null, n, r, !0, l);
  }, Ma.hydrateRoot = function(n, r, l) {
    if (!vp(n))
      throw Error(m(405));
    var u = l != null && l.hydratedSources || null, c = !1, p = "", S = pp;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (p = l.identifierPrefix), l.onRecoverableError !== void 0 && (S = l.onRecoverableError)), r = Kh(r, null, n, 1, l ?? null, c, !1, p, S), n[wi] = r.current, Ho(n), u)
      for (n = 0; n < u.length; n++)
        l = u[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Oi(r);
  }, Ma.render = function(n, r, l) {
    if (!uf(r))
      throw Error(m(200));
    return sf(null, n, r, !1, l);
  }, Ma.unmountComponentAtNode = function(n) {
    if (!uf(n))
      throw Error(m(40));
    return n._reactRootContainer ? (vl(function() {
      sf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[wi] = null;
      });
    }), !0) : !1;
  }, Ma.unstable_batchedUpdates = au, Ma.unstable_renderSubtreeIntoContainer = function(n, r, l, u) {
    if (!uf(l))
      throw Error(m(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(m(38));
    return sf(n, r, l, !1, u);
  }, Ma.version = "18.2.0-next-9e3b772b8-20220608", Ma;
}
var La = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zx;
function eL() {
  return zx || (zx = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var d = N, v = ew(), m = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, C = !1;
    function x(e) {
      C = e;
    }
    function w(e) {
      if (!C) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        k("warn", e, a);
      }
    }
    function y(e) {
      if (!C) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        k("error", e, a);
      }
    }
    function k(e, t, a) {
      {
        var i = m.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var L = 0, b = 1, A = 2, M = 3, U = 4, j = 5, Z = 6, H = 7, Q = 8, V = 9, q = 10, X = 11, fe = 12, G = 13, W = 14, ae = 15, ve = 16, Se = 17, me = 18, Ce = 19, Ve = 21, Me = 22, he = 23, ke = 24, Ue = 25, ht = !0, ue = !1, De = !1, ne = !1, Fe = !1, Xe = !0, yn = !1, Un = !1, ir = !0, ce = !0, rt = !0, st = /* @__PURE__ */ new Set(), Ct = {}, tn = {};
    function Gt(e, t) {
      Mt(e, t), Mt(e + "Capture", t);
    }
    function Mt(e, t) {
      Ct[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ct[e] = t;
      {
        var a = e.toLowerCase();
        tn[a] = e, e === "onDoubleClick" && (tn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        st.add(t[i]);
    }
    var qt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", wn = Object.prototype.hasOwnProperty;
    function fn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Wt(e) {
      try {
        return mr(e), !1;
      } catch {
        return !0;
      }
    }
    function mr(e) {
      return "" + e;
    }
    function br(e, t) {
      if (Wt(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, fn(e)), mr(e);
    }
    function Xa(e) {
      if (Wt(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fn(e)), mr(e);
    }
    function Za(e, t) {
      if (Wt(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, fn(e)), mr(e);
    }
    function Yr(e, t) {
      if (Wt(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, fn(e)), mr(e);
    }
    function Nr(e) {
      if (Wt(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", fn(e)), mr(e);
    }
    function Rn(e) {
      if (Wt(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", fn(e)), mr(e);
    }
    var Oa = 0, Gr = 1, za = 2, Yn = 3, oa = 4, Nl = 5, ua = 6, Ee = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ye = Ee + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ct = new RegExp("^[" + Ee + "][" + Ye + "]*$"), zt = {}, dn = {};
    function lr(e) {
      return wn.call(dn, e) ? !0 : wn.call(zt, e) ? !1 : ct.test(e) ? (dn[e] = !0, !0) : (zt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function kn(e, t, a) {
      return t !== null ? t.type === Oa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function sa(e, t, a, i) {
      if (a !== null && a.type === Oa)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var o = e.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function nn(e, t, a, i) {
      if (t === null || typeof t > "u" || sa(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Yn:
            return !t;
          case oa:
            return t === !1;
          case Nl:
            return isNaN(t);
          case ua:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Ja(e) {
      return rn.hasOwnProperty(e) ? rn[e] : null;
    }
    function gn(e, t, a, i, o, s, f) {
      this.acceptsBooleans = t === za || t === Yn || t === oa, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var rn = {}, wv = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    wv.forEach(function(e) {
      rn[e] = new gn(
        e,
        Oa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      rn[t] = new gn(
        t,
        Gr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      rn[e] = new gn(
        e,
        za,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      rn[e] = new gn(
        e,
        za,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      rn[e] = new gn(
        e,
        Yn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      rn[e] = new gn(
        e,
        Yn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      rn[e] = new gn(
        e,
        oa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      rn[e] = new gn(
        e,
        ua,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      rn[e] = new gn(
        e,
        Nl,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var $s = /[\-\:]([a-z])/g, Ys = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace($s, Ys);
      rn[t] = new gn(
        t,
        Gr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace($s, Ys);
      rn[t] = new gn(
        t,
        Gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace($s, Ys);
      rn[t] = new gn(
        t,
        Gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      rn[e] = new gn(
        e,
        Gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Rv = "xlinkHref";
    rn[Rv] = new gn(
      "xlinkHref",
      Gr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      rn[e] = new gn(
        e,
        Gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var kv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Gs = !1;
    function Gf(e) {
      !Gs && kv.test(e) && (Gs = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Mu(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        br(a, t), i.sanitizeURL && Gf("" + a);
        var s = i.attributeName, f = null;
        if (i.type === oa) {
          if (e.hasAttribute(s)) {
            var h = e.getAttribute(s);
            return h === "" ? !0 : nn(t, a, i, !1) ? h : h === "" + a ? a : h;
          }
        } else if (e.hasAttribute(s)) {
          if (nn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Yn)
            return a;
          f = e.getAttribute(s);
        }
        return nn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function Ws(e, t, a, i) {
      {
        if (!lr(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return br(a, t), o === "" + a ? a : o;
      }
    }
    function Ml(e, t, a, i) {
      var o = Ja(t);
      if (!kn(t, o, i)) {
        if (nn(t, a, o, i) && (a = null), i || o === null) {
          if (lr(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (br(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = o.mustUseProperty;
        if (f) {
          var h = o.propertyName;
          if (a === null) {
            var g = o.type;
            e[h] = g === Yn ? !1 : "";
          } else
            e[h] = a;
          return;
        }
        var E = o.attributeName, T = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(E);
        else {
          var z = o.type, _;
          z === Yn || z === oa && a === !0 ? _ = "" : (br(a, E), _ = "" + a, o.sanitizeURL && Gf(_.toString())), T ? e.setAttributeNS(T, E, _) : e.setAttribute(E, _);
        }
      }
    }
    var xo = Symbol.for("react.element"), Ua = Symbol.for("react.portal"), mi = Symbol.for("react.fragment"), wo = Symbol.for("react.strict_mode"), Lu = Symbol.for("react.profiler"), Wf = Symbol.for("react.provider"), Qf = Symbol.for("react.context"), Ro = Symbol.for("react.forward_ref"), ei = Symbol.for("react.suspense"), _u = Symbol.for("react.suspense_list"), ko = Symbol.for("react.memo"), yr = Symbol.for("react.lazy"), Dv = Symbol.for("react.scope"), bv = Symbol.for("react.debug_trace_mode"), Kf = Symbol.for("react.offscreen"), Nv = Symbol.for("react.legacy_hidden"), Gy = Symbol.for("react.cache"), Wy = Symbol.for("react.tracing_marker"), an = Symbol.iterator, Qy = "@@iterator";
    function yi(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = an && e[an] || e[Qy];
      return typeof t == "function" ? t : null;
    }
    var ft = Object.assign, Wi = 0, Mv, qf, Ou, Aa, Lv, ca, _v;
    function Ov() {
    }
    Ov.__reactDisabledLog = !0;
    function Ky() {
      {
        if (Wi === 0) {
          Mv = console.log, qf = console.info, Ou = console.warn, Aa = console.error, Lv = console.group, ca = console.groupCollapsed, _v = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ov,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Wi++;
      }
    }
    function Qs() {
      {
        if (Wi--, Wi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ft({}, e, {
              value: Mv
            }),
            info: ft({}, e, {
              value: qf
            }),
            warn: ft({}, e, {
              value: Ou
            }),
            error: ft({}, e, {
              value: Aa
            }),
            group: ft({}, e, {
              value: Lv
            }),
            groupCollapsed: ft({}, e, {
              value: ca
            }),
            groupEnd: ft({}, e, {
              value: _v
            })
          });
        }
        Wi < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Do = m.ReactCurrentDispatcher, Ll;
    function Ha(e, t, a) {
      {
        if (Ll === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            Ll = i && i[1] || "";
          }
        return `
` + Ll + e;
      }
    }
    var Xf = !1, Ks;
    {
      var Zf = typeof WeakMap == "function" ? WeakMap : Map;
      Ks = new Zf();
    }
    function qs(e, t) {
      if (!e || Xf)
        return "";
      {
        var a = Ks.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Xf = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Do.current, Do.current = null, Ky();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (Y) {
              i = Y;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (Y) {
              i = Y;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            i = Y;
          }
          e();
        }
      } catch (Y) {
        if (Y && i && typeof Y.stack == "string") {
          for (var h = Y.stack.split(`
`), g = i.stack.split(`
`), E = h.length - 1, T = g.length - 1; E >= 1 && T >= 0 && h[E] !== g[T]; )
            T--;
          for (; E >= 1 && T >= 0; E--, T--)
            if (h[E] !== g[T]) {
              if (E !== 1 || T !== 1)
                do
                  if (E--, T--, T < 0 || h[E] !== g[T]) {
                    var z = `
` + h[E].replace(" at new ", " at ");
                    return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && Ks.set(e, z), z;
                  }
                while (E >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        Xf = !1, Do.current = s, Qs(), Error.prepareStackTrace = o;
      }
      var _ = e ? e.displayName || e.name : "", $ = _ ? Ha(_) : "";
      return typeof e == "function" && Ks.set(e, $), $;
    }
    function Jf(e, t, a) {
      return qs(e, !0);
    }
    function _l(e, t, a) {
      return qs(e, !1);
    }
    function qy(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function zu(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return qs(e, qy(e));
      if (typeof e == "string")
        return Ha(e);
      switch (e) {
        case ei:
          return Ha("Suspense");
        case _u:
          return Ha("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ro:
            return _l(e.render);
          case ko:
            return zu(e.type, t, a);
          case yr: {
            var i = e, o = i._payload, s = i._init;
            try {
              return zu(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Nt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case j:
          return Ha(e.type);
        case ve:
          return Ha("Lazy");
        case G:
          return Ha("Suspense");
        case Ce:
          return Ha("SuspenseList");
        case L:
        case A:
        case ae:
          return _l(e.type);
        case X:
          return _l(e.type.render);
        case b:
          return Jf(e.type);
        default:
          return "";
      }
    }
    function ed(e) {
      try {
        var t = "", a = e;
        do
          t += Nt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function zv(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function Xs(e) {
      return e.displayName || "Context";
    }
    function Ut(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case mi:
          return "Fragment";
        case Ua:
          return "Portal";
        case Lu:
          return "Profiler";
        case wo:
          return "StrictMode";
        case ei:
          return "Suspense";
        case _u:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Qf:
            var t = e;
            return Xs(t) + ".Consumer";
          case Wf:
            var a = e;
            return Xs(a._context) + ".Provider";
          case Ro:
            return zv(e, e.render, "ForwardRef");
          case ko:
            var i = e.displayName || null;
            return i !== null ? i : Ut(e.type) || "Memo";
          case yr: {
            var o = e, s = o._payload, f = o._init;
            try {
              return Ut(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Uv(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function td(e) {
      return e.displayName || "Context";
    }
    function nt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case ke:
          return "Cache";
        case V:
          var i = a;
          return td(i) + ".Consumer";
        case q:
          var o = a;
          return td(o._context) + ".Provider";
        case me:
          return "DehydratedFragment";
        case X:
          return Uv(a, a.render, "ForwardRef");
        case H:
          return "Fragment";
        case j:
          return a;
        case U:
          return "Portal";
        case M:
          return "Root";
        case Z:
          return "Text";
        case ve:
          return Ut(a);
        case Q:
          return a === wo ? "StrictMode" : "Mode";
        case Me:
          return "Offscreen";
        case fe:
          return "Profiler";
        case Ve:
          return "Scope";
        case G:
          return "Suspense";
        case Ce:
          return "SuspenseList";
        case Ue:
          return "TracingMarker";
        case b:
        case L:
        case Se:
        case A:
        case W:
        case ae:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Uu = m.ReactDebugCurrentFrame, Sn = null, fa = !1;
    function da() {
      {
        if (Sn === null)
          return null;
        var e = Sn._debugOwner;
        if (e !== null && typeof e < "u")
          return nt(e);
      }
      return null;
    }
    function Au() {
      return Sn === null ? "" : ed(Sn);
    }
    function Dn() {
      Uu.getCurrentStack = null, Sn = null, fa = !1;
    }
    function Lt(e) {
      Uu.getCurrentStack = e === null ? null : Au, Sn = e, fa = !1;
    }
    function Xy() {
      return Sn;
    }
    function Ia(e) {
      fa = e;
    }
    function or(e) {
      return "" + e;
    }
    function Qi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Rn(e), e;
        default:
          return "";
      }
    }
    var Av = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function bo(e, t) {
      Av[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function nd(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Hv(e) {
      return e._valueTracker;
    }
    function Hu(e) {
      e._valueTracker = null;
    }
    function Iu(e) {
      var t = "";
      return e && (nd(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function No(e) {
      var t = nd(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Rn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(h) {
            Rn(h), i = "" + h, s.call(this, h);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(h) {
            Rn(h), i = "" + h;
          },
          stopTracking: function() {
            Hu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ol(e) {
      Hv(e) || (e._valueTracker = No(e));
    }
    function Iv(e) {
      if (!e)
        return !1;
      var t = Hv(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Iu(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Zs(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Js = !1, Fu = !1, ec = !1, rd = !1;
    function gi(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Bu(e, t) {
      var a = e, i = t.checked, o = ft({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function Vu(e, t) {
      bo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Fu && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", da() || "A component", t.type), Fu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Js && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", da() || "A component", t.type), Js = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Qi(t.value != null ? t.value : i),
        controlled: gi(t)
      };
    }
    function ad(e, t) {
      var a = e, i = t.checked;
      i != null && Ml(a, "checked", i, !1);
    }
    function Mo(e, t) {
      var a = e;
      {
        var i = gi(t);
        !a._wrapperState.controlled && i && !rd && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), rd = !0), a._wrapperState.controlled && !i && !ec && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ec = !0);
      }
      ad(e, t);
      var o = Qi(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = or(o)) : a.value !== or(o) && (a.value = or(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ki(a, t.type, o) : t.hasOwnProperty("defaultValue") && Ki(a, t.type, Qi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ju(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = or(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var h = i.name;
      h !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, h !== "" && (i.name = h);
    }
    function Fv(e, t) {
      var a = e;
      Mo(a, t), Wr(a, t);
    }
    function Wr(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        br(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var f = o[s];
          if (!(f === e || f.form !== e.form)) {
            var h = hm(f);
            if (!h)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Iv(f), Mo(f, h);
          }
        }
      }
    }
    function Ki(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Zs(e.ownerDocument) !== e) && (a == null ? e.defaultValue = or(e._wrapperState.initialValue) : e.defaultValue !== or(a) && (e.defaultValue = or(a)));
    }
    var tc = !1, Lo = !1, Bv = !1;
    function nc(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? d.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Lo || (Lo = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Bv || (Bv = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !tc && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), tc = !0);
    }
    function id(e, t) {
      t.value != null && e.setAttribute("value", or(Qi(t.value)));
    }
    var Pu = Array.isArray;
    function An(e) {
      return Pu(e);
    }
    var rc;
    rc = !1;
    function Vv() {
      var e = da();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var jv = ["value", "defaultValue"];
    function Zy(e) {
      {
        bo("select", e);
        for (var t = 0; t < jv.length; t++) {
          var a = jv[t];
          if (e[a] != null) {
            var i = An(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Vv()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Vv());
          }
        }
      }
    }
    function qi(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, f = {}, h = 0; h < s.length; h++)
          f["$" + s[h]] = !0;
        for (var g = 0; g < o.length; g++) {
          var E = f.hasOwnProperty("$" + o[g].value);
          o[g].selected !== E && (o[g].selected = E), E && i && (o[g].defaultSelected = !0);
        }
      } else {
        for (var T = or(Qi(a)), z = null, _ = 0; _ < o.length; _++) {
          if (o[_].value === T) {
            o[_].selected = !0, i && (o[_].defaultSelected = !0);
            return;
          }
          z === null && !o[_].disabled && (z = o[_]);
        }
        z !== null && (z.selected = !0);
      }
    }
    function ld(e, t) {
      return ft({}, t, {
        value: void 0
      });
    }
    function Pv(e, t) {
      var a = e;
      Zy(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !rc && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), rc = !0);
    }
    function Jy(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? qi(a, !!t.multiple, i, !1) : t.defaultValue != null && qi(a, !!t.multiple, t.defaultValue, !0);
    }
    function eg(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? qi(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? qi(a, !!t.multiple, t.defaultValue, !0) : qi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function tg(e, t) {
      var a = e, i = t.value;
      i != null && qi(a, !!t.multiple, i, !1);
    }
    var od = !1;
    function ud(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ft({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: or(a._wrapperState.initialValue)
      });
      return i;
    }
    function $v(e, t) {
      var a = e;
      bo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !od && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", da() || "A component"), od = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (An(o)) {
              if (o.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              o = o[0];
            }
            s = o;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Qi(i)
      };
    }
    function Yv(e, t) {
      var a = e, i = Qi(t.value), o = Qi(t.defaultValue);
      if (i != null) {
        var s = or(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = or(o));
    }
    function Gv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function sd(e, t) {
      Yv(e, t);
    }
    var Si = "http://www.w3.org/1999/xhtml", ng = "http://www.w3.org/1998/Math/MathML", cd = "http://www.w3.org/2000/svg";
    function ac(e) {
      switch (e) {
        case "svg":
          return cd;
        case "math":
          return ng;
        default:
          return Si;
      }
    }
    function fd(e, t) {
      return e == null || e === Si ? ac(t) : e === cd && t === "foreignObject" ? Si : e;
    }
    var rg = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, ic, Wv = rg(function(e, t) {
      if (e.namespaceURI === cd && !("innerHTML" in e)) {
        ic = ic || document.createElement("div"), ic.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = ic.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Mr = 1, Ei = 3, En = 8, Fa = 9, zl = 11, lc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ei) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Qv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, _o = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Kv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var qv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(_o).forEach(function(e) {
      qv.forEach(function(t) {
        _o[Kv(t, e)] = _o[e];
      });
    });
    function oc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(_o.hasOwnProperty(e) && _o[e]) ? t + "px" : (Yr(t, e), ("" + t).trim());
    }
    var Oo = /([A-Z])/g, ag = /^ms-/;
    function ig(e) {
      return e.replace(Oo, "-$1").toLowerCase().replace(ag, "-ms-");
    }
    var Xv = function() {
    };
    {
      var Zv = /^(?:webkit|moz|o)[A-Z]/, Jv = /^-ms-/, $u = /-(.)/g, zo = /;\s*$/, Uo = {}, Ao = {}, eh = !1, dd = !1, pd = function(e) {
        return e.replace($u, function(t, a) {
          return a.toUpperCase();
        });
      }, vd = function(e) {
        Uo.hasOwnProperty(e) && Uo[e] || (Uo[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          pd(e.replace(Jv, "ms-"))
        ));
      }, th = function(e) {
        Uo.hasOwnProperty(e) && Uo[e] || (Uo[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, nh = function(e, t) {
        Ao.hasOwnProperty(t) && Ao[t] || (Ao[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(zo, "")));
      }, rh = function(e, t) {
        eh || (eh = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, lg = function(e, t) {
        dd || (dd = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Xv = function(e, t) {
        e.indexOf("-") > -1 ? vd(e) : Zv.test(e) ? th(e) : zo.test(t) && nh(e, t), typeof t == "number" && (isNaN(t) ? rh(e, t) : isFinite(t) || lg(e, t));
      };
    }
    var og = Xv;
    function ug(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : ig(i)) + ":", t += oc(i, o, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function ah(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = i.indexOf("--") === 0;
          o || og(i, t[i]);
          var s = oc(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function sg(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function pa(e) {
      var t = {};
      for (var a in e)
        for (var i = Qv[a] || [a], o = 0; o < i.length; o++)
          t[i[o]] = a;
      return t;
    }
    function Yu(e, t) {
      {
        if (!t)
          return;
        var a = pa(e), i = pa(t), o = {};
        for (var s in a) {
          var f = a[s], h = i[s];
          if (h && f !== h) {
            var g = f + "," + h;
            if (o[g])
              continue;
            o[g] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", sg(e[f]) ? "Removing" : "Updating", f, h);
          }
        }
      }
    }
    var ih = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, lh = ft({
      menuitem: !0
    }, ih), oh = "__html";
    function uc(e, t) {
      if (t) {
        if (lh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(oh in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ci(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var sc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, uh = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ba = {}, hd = new RegExp("^(aria)-[" + Ye + "]*$"), Gu = new RegExp("^(aria)[A-Z][" + Ye + "]*$");
    function md(e, t) {
      {
        if (wn.call(Ba, t) && Ba[t])
          return !0;
        if (Gu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = uh.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ba[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Ba[t] = !0, !0;
        }
        if (hd.test(t)) {
          var o = t.toLowerCase(), s = uh.hasOwnProperty(o) ? o : null;
          if (s == null)
            return Ba[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Ba[t] = !0, !0;
        }
      }
      return !0;
    }
    function sh(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = md(e, i);
          o || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function cc(e, t) {
      Ci(e, t) || sh(e, t);
    }
    var Ul = !1;
    function yd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Ul && (Ul = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var gd = function() {
    };
    {
      var Hn = {}, Sd = /^on./, ch = /^on[^A-Z]/, fh = new RegExp("^(aria)-[" + Ye + "]*$"), dh = new RegExp("^(aria)[A-Z][" + Ye + "]*$");
      gd = function(e, t, a, i) {
        if (wn.call(Hn, t) && Hn[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Hn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var h = f.hasOwnProperty(o) ? f[o] : null;
          if (h != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, h), Hn[t] = !0, !0;
          if (Sd.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), Hn[t] = !0, !0;
        } else if (Sd.test(t))
          return ch.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Hn[t] = !0, !0;
        if (fh.test(t) || dh.test(t))
          return !0;
        if (o === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Hn[t] = !0, !0;
        if (o === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Hn[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Hn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Hn[t] = !0, !0;
        var g = Ja(t), E = g !== null && g.type === Oa;
        if (sc.hasOwnProperty(o)) {
          var T = sc[o];
          if (T !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, T), Hn[t] = !0, !0;
        } else if (!E && t !== o)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), Hn[t] = !0, !0;
        return typeof a == "boolean" && sa(t, a, g, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Hn[t] = !0, !0) : E ? !0 : sa(t, a, g, !1) ? (Hn[t] = !0, !1) : ((a === "false" || a === "true") && g !== null && g.type === Yn && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Hn[t] = !0), !0);
      };
    }
    var ph = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var s = gd(e, o, t[o], a);
          s || i.push(o);
        }
        var f = i.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function vh(e, t, a) {
      Ci(e, t) || ph(e, t, a);
    }
    var Ti = 1, Wu = 1 << 1, Al = 1 << 2, cg = Ti | Wu | Al, Qu = null;
    function Ku(e) {
      Qu !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Qu = e;
    }
    function fg() {
      Qu === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Qu = null;
    }
    function hh(e) {
      return e === Qu;
    }
    function fc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ei ? t.parentNode : t;
    }
    var At = null, Xi = null, xi = null;
    function Ho(e) {
      var t = su(e);
      if (t) {
        if (typeof At != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = hm(a);
          At(t.stateNode, t.type, i);
        }
      }
    }
    function mh(e) {
      At = e;
    }
    function dc(e) {
      Xi ? xi ? xi.push(e) : xi = [e] : Xi = e;
    }
    function qu() {
      return Xi !== null || xi !== null;
    }
    function Xu() {
      if (Xi) {
        var e = Xi, t = xi;
        if (Xi = null, xi = null, Ho(e), t)
          for (var a = 0; a < t.length; a++)
            Ho(t[a]);
      }
    }
    var Hl = function(e, t) {
      return e(t);
    }, Ed = function() {
    }, Cd = !1;
    function dg() {
      var e = qu();
      e && (Ed(), Xu());
    }
    function Td(e, t, a) {
      if (Cd)
        return e(t, a);
      Cd = !0;
      try {
        return Hl(e, t, a);
      } finally {
        Cd = !1, dg();
      }
    }
    function pc(e, t, a) {
      Hl = e, Ed = a;
    }
    function vc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function xd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && vc(t));
        default:
          return !1;
      }
    }
    function Il(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = hm(a);
      if (i === null)
        return null;
      var o = i[t];
      if (xd(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var Zu = !1;
    if (qt)
      try {
        var Fl = {};
        Object.defineProperty(Fl, "passive", {
          get: function() {
            Zu = !0;
          }
        }), window.addEventListener("test", Fl, Fl), window.removeEventListener("test", Fl, Fl);
      } catch {
        Zu = !1;
      }
    function yh(e, t, a, i, o, s, f, h, g) {
      var E = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, E);
      } catch (T) {
        this.onError(T);
      }
    }
    var wd = yh;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Rd = document.createElement("react");
      wd = function(t, a, i, o, s, f, h, g, E) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), z = !1, _ = !0, $ = window.event, Y = Object.getOwnPropertyDescriptor(window, "event");
        function J() {
          Rd.removeEventListener(ee, $e, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = $);
        }
        var be = Array.prototype.slice.call(arguments, 3);
        function $e() {
          z = !0, J(), a.apply(i, be), _ = !1;
        }
        var Be, gt = !1, pt = !1;
        function F(B) {
          if (Be = B.error, gt = !0, Be === null && B.colno === 0 && B.lineno === 0 && (pt = !0), B.defaultPrevented && Be != null && typeof Be == "object")
            try {
              Be._suppressLogging = !0;
            } catch {
            }
        }
        var ee = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", F), Rd.addEventListener(ee, $e, !1), T.initEvent(ee, !1, !1), Rd.dispatchEvent(T), Y && Object.defineProperty(window, "event", Y), z && _ && (gt ? pt && (Be = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Be = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Be)), window.removeEventListener("error", F), !z)
          return J(), yh.apply(this, arguments);
      };
    }
    var pg = wd, Zi = !1, Va = null, Ju = !1, Ji = null, ti = {
      onError: function(e) {
        Zi = !0, Va = e;
      }
    };
    function Bl(e, t, a, i, o, s, f, h, g) {
      Zi = !1, Va = null, pg.apply(ti, arguments);
    }
    function wi(e, t, a, i, o, s, f, h, g) {
      if (Bl.apply(this, arguments), Zi) {
        var E = Dd();
        Ju || (Ju = !0, Ji = E);
      }
    }
    function kd() {
      if (Ju) {
        var e = Ji;
        throw Ju = !1, Ji = null, e;
      }
    }
    function vg() {
      return Zi;
    }
    function Dd() {
      if (Zi) {
        var e = Va;
        return Zi = !1, Va = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function va(e) {
      return e._reactInternals;
    }
    function es(e) {
      return e._reactInternals !== void 0;
    }
    function Io(e, t) {
      e._reactInternals = t;
    }
    var Pe = (
      /*                      */
      0
    ), el = (
      /*                */
      1
    ), Bt = (
      /*                    */
      2
    ), at = (
      /*                       */
      4
    ), Rt = (
      /*                */
      16
    ), Dt = (
      /*                 */
      32
    ), ni = (
      /*                     */
      64
    ), Ze = (
      /*                   */
      128
    ), ln = (
      /*            */
      256
    ), Lr = (
      /*                          */
      512
    ), ha = (
      /*                     */
      1024
    ), Qt = (
      /*                      */
      2048
    ), ma = (
      /*                    */
      4096
    ), tl = (
      /*                   */
      8192
    ), ts = (
      /*             */
      16384
    ), hc = Qt | at | ni | Lr | ha | ts, gh = (
      /*               */
      32767
    ), Qr = (
      /*                   */
      32768
    ), In = (
      /*                */
      65536
    ), ns = (
      /* */
      131072
    ), bd = (
      /*                       */
      1048576
    ), Nd = (
      /*                    */
      2097152
    ), _r = (
      /*                 */
      4194304
    ), nl = (
      /*                */
      8388608
    ), Or = (
      /*               */
      16777216
    ), Vl = (
      /*              */
      33554432
    ), Fo = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      at | ha | 0
    ), zr = Bt | at | Rt | Dt | Lr | ma | tl, ur = at | ni | Lr | tl, ya = Qt | Rt, Gn = _r | nl | Nd, Ri = m.ReactCurrentOwner;
    function Kr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Bt | ma)) !== Pe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === M ? a : null;
    }
    function Md(e) {
      if (e.tag === G) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function mc(e) {
      return e.tag === M ? e.stateNode.containerInfo : null;
    }
    function Ld(e) {
      return Kr(e) === e;
    }
    function qr(e) {
      {
        var t = Ri.current;
        if (t !== null && t.tag === b) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", nt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = va(e);
      return o ? Kr(o) === o : !1;
    }
    function Ur(e) {
      if (Kr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Vt(e) {
      var t = e.alternate;
      if (!t) {
        var a = Kr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, o = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var h = s.return;
          if (h !== null) {
            i = o = h;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var g = s.child; g; ) {
            if (g === i)
              return Ur(s), e;
            if (g === o)
              return Ur(s), t;
            g = g.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = s, o = f;
        else {
          for (var E = !1, T = s.child; T; ) {
            if (T === i) {
              E = !0, i = s, o = f;
              break;
            }
            if (T === o) {
              E = !0, o = s, i = f;
              break;
            }
            T = T.sibling;
          }
          if (!E) {
            for (T = f.child; T; ) {
              if (T === i) {
                E = !0, i = f, o = s;
                break;
              }
              if (T === o) {
                E = !0, o = f, i = s;
                break;
              }
              T = T.sibling;
            }
            if (!E)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== M)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ga(e) {
      var t = Vt(e);
      return t !== null ? _d(t) : null;
    }
    function _d(e) {
      if (e.tag === j || e.tag === Z)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = _d(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Sh(e) {
      var t = Vt(e);
      return t !== null ? yc(t) : null;
    }
    function yc(e) {
      if (e.tag === j || e.tag === Z)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== U) {
          var a = yc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var gc = v.unstable_scheduleCallback, Eh = v.unstable_cancelCallback, Sc = v.unstable_shouldYield, Ch = v.unstable_requestPaint, Xt = v.unstable_now, Od = v.unstable_getCurrentPriorityLevel, Ec = v.unstable_ImmediatePriority, Xr = v.unstable_UserBlockingPriority, ri = v.unstable_NormalPriority, Cc = v.unstable_LowPriority, rl = v.unstable_IdlePriority, zd = v.unstable_yieldValue, Ud = v.unstable_setDisableYieldValue, al = null, Fn = null, ye = null, pn = !1, Wn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Ad(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ir && (e = ft({}, e, {
          getLaneLabelMap: ll,
          injectProfilingHooks: Di
        })), al = t.inject(e), Fn = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Th(e, t) {
      if (Fn && typeof Fn.onScheduleFiberRoot == "function")
        try {
          Fn.onScheduleFiberRoot(al, e, t);
        } catch (a) {
          pn || (pn = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function ki(e, t) {
      if (Fn && typeof Fn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ze) === Ze;
          if (ce) {
            var i;
            switch (t) {
              case sr:
                i = Ec;
                break;
              case Qn:
                i = Xr;
                break;
              case Ni:
                i = ri;
                break;
              case fs:
                i = rl;
                break;
              default:
                i = ri;
                break;
            }
            Fn.onCommitFiberRoot(al, e, i, a);
          }
        } catch (o) {
          pn || (pn = !0, y("React instrumentation encountered an error: %s", o));
        }
    }
    function il(e) {
      if (Fn && typeof Fn.onPostCommitFiberRoot == "function")
        try {
          Fn.onPostCommitFiberRoot(al, e);
        } catch (t) {
          pn || (pn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Hd(e) {
      if (Fn && typeof Fn.onCommitFiberUnmount == "function")
        try {
          Fn.onCommitFiberUnmount(al, e);
        } catch (t) {
          pn || (pn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function bn(e) {
      if (typeof zd == "function" && (Ud(e), x(e)), Fn && typeof Fn.setStrictMode == "function")
        try {
          Fn.setStrictMode(al, e);
        } catch (t) {
          pn || (pn = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Di(e) {
      ye = e;
    }
    function ll() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < jt; a++) {
          var i = hg(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Tc(e) {
      ye !== null && typeof ye.markCommitStarted == "function" && ye.markCommitStarted(e);
    }
    function Id() {
      ye !== null && typeof ye.markCommitStopped == "function" && ye.markCommitStopped();
    }
    function ol(e) {
      ye !== null && typeof ye.markComponentRenderStarted == "function" && ye.markComponentRenderStarted(e);
    }
    function jl() {
      ye !== null && typeof ye.markComponentRenderStopped == "function" && ye.markComponentRenderStopped();
    }
    function xh(e) {
      ye !== null && typeof ye.markComponentPassiveEffectMountStarted == "function" && ye.markComponentPassiveEffectMountStarted(e);
    }
    function Fd() {
      ye !== null && typeof ye.markComponentPassiveEffectMountStopped == "function" && ye.markComponentPassiveEffectMountStopped();
    }
    function xc(e) {
      ye !== null && typeof ye.markComponentPassiveEffectUnmountStarted == "function" && ye.markComponentPassiveEffectUnmountStarted(e);
    }
    function wh() {
      ye !== null && typeof ye.markComponentPassiveEffectUnmountStopped == "function" && ye.markComponentPassiveEffectUnmountStopped();
    }
    function Rh(e) {
      ye !== null && typeof ye.markComponentLayoutEffectMountStarted == "function" && ye.markComponentLayoutEffectMountStarted(e);
    }
    function kh() {
      ye !== null && typeof ye.markComponentLayoutEffectMountStopped == "function" && ye.markComponentLayoutEffectMountStopped();
    }
    function wc(e) {
      ye !== null && typeof ye.markComponentLayoutEffectUnmountStarted == "function" && ye.markComponentLayoutEffectUnmountStarted(e);
    }
    function Bo() {
      ye !== null && typeof ye.markComponentLayoutEffectUnmountStopped == "function" && ye.markComponentLayoutEffectUnmountStopped();
    }
    function Rc(e, t, a) {
      ye !== null && typeof ye.markComponentErrored == "function" && ye.markComponentErrored(e, t, a);
    }
    function Dh(e, t, a) {
      ye !== null && typeof ye.markComponentSuspended == "function" && ye.markComponentSuspended(e, t, a);
    }
    function bh(e) {
      ye !== null && typeof ye.markLayoutEffectsStarted == "function" && ye.markLayoutEffectsStarted(e);
    }
    function Vo() {
      ye !== null && typeof ye.markLayoutEffectsStopped == "function" && ye.markLayoutEffectsStopped();
    }
    function Nh(e) {
      ye !== null && typeof ye.markPassiveEffectsStarted == "function" && ye.markPassiveEffectsStarted(e);
    }
    function rs() {
      ye !== null && typeof ye.markPassiveEffectsStopped == "function" && ye.markPassiveEffectsStopped();
    }
    function ja(e) {
      ye !== null && typeof ye.markRenderStarted == "function" && ye.markRenderStarted(e);
    }
    function as() {
      ye !== null && typeof ye.markRenderYielded == "function" && ye.markRenderYielded();
    }
    function jo() {
      ye !== null && typeof ye.markRenderStopped == "function" && ye.markRenderStopped();
    }
    function Pl(e) {
      ye !== null && typeof ye.markRenderScheduled == "function" && ye.markRenderScheduled(e);
    }
    function Bd(e, t) {
      ye !== null && typeof ye.markForceUpdateScheduled == "function" && ye.markForceUpdateScheduled(e, t);
    }
    function ul(e, t) {
      ye !== null && typeof ye.markStateUpdateScheduled == "function" && ye.markStateUpdateScheduled(e, t);
    }
    var Ge = (
      /*                         */
      0
    ), ut = (
      /*                 */
      1
    ), We = (
      /*                    */
      2
    ), Zt = (
      /*               */
      8
    ), Sa = (
      /*              */
      16
    ), kc = Math.clz32 ? Math.clz32 : $l, Dc = Math.log, Vd = Math.LN2;
    function $l(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Dc(t) / Vd | 0) | 0;
    }
    var jt = 31, te = (
      /*                        */
      0
    ), mt = (
      /*                          */
      0
    ), Ke = (
      /*                        */
      1
    ), ai = (
      /*    */
      2
    ), Zr = (
      /*             */
      4
    ), Yl = (
      /*            */
      8
    ), Pt = (
      /*                     */
      16
    ), Gl = (
      /*                */
      32
    ), sl = (
      /*                       */
      4194240
    ), Wl = (
      /*                        */
      64
    ), Ea = (
      /*                        */
      128
    ), Ar = (
      /*                        */
      256
    ), Ql = (
      /*                        */
      512
    ), is = (
      /*                        */
      1024
    ), ls = (
      /*                        */
      2048
    ), bc = (
      /*                        */
      4096
    ), Nc = (
      /*                        */
      8192
    ), Mc = (
      /*                        */
      16384
    ), Lc = (
      /*                       */
      32768
    ), _c = (
      /*                       */
      65536
    ), Oc = (
      /*                       */
      131072
    ), zc = (
      /*                       */
      262144
    ), Uc = (
      /*                       */
      524288
    ), Kl = (
      /*                       */
      1048576
    ), Ac = (
      /*                       */
      2097152
    ), ql = (
      /*                            */
      130023424
    ), bi = (
      /*                             */
      4194304
    ), Hc = (
      /*                             */
      8388608
    ), os = (
      /*                             */
      16777216
    ), Ic = (
      /*                             */
      33554432
    ), Fc = (
      /*                             */
      67108864
    ), jd = bi, Po = (
      /*          */
      134217728
    ), Bc = (
      /*                          */
      268435455
    ), $o = (
      /*               */
      268435456
    ), cl = (
      /*                        */
      536870912
    ), Hr = (
      /*                   */
      1073741824
    );
    function hg(e) {
      {
        if (e & Ke)
          return "Sync";
        if (e & ai)
          return "InputContinuousHydration";
        if (e & Zr)
          return "InputContinuous";
        if (e & Yl)
          return "DefaultHydration";
        if (e & Pt)
          return "Default";
        if (e & Gl)
          return "TransitionHydration";
        if (e & sl)
          return "Transition";
        if (e & ql)
          return "Retry";
        if (e & Po)
          return "SelectiveHydration";
        if (e & $o)
          return "IdleHydration";
        if (e & cl)
          return "Idle";
        if (e & Hr)
          return "Offscreen";
      }
    }
    var Ht = -1, Vc = Wl, jc = bi;
    function Yo(e) {
      switch (Cn(e)) {
        case Ke:
          return Ke;
        case ai:
          return ai;
        case Zr:
          return Zr;
        case Yl:
          return Yl;
        case Pt:
          return Pt;
        case Gl:
          return Gl;
        case Wl:
        case Ea:
        case Ar:
        case Ql:
        case is:
        case ls:
        case bc:
        case Nc:
        case Mc:
        case Lc:
        case _c:
        case Oc:
        case zc:
        case Uc:
        case Kl:
        case Ac:
          return e & sl;
        case bi:
        case Hc:
        case os:
        case Ic:
        case Fc:
          return e & ql;
        case Po:
          return Po;
        case $o:
          return $o;
        case cl:
          return cl;
        case Hr:
          return Hr;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function us(e, t) {
      var a = e.pendingLanes;
      if (a === te)
        return te;
      var i = te, o = e.suspendedLanes, s = e.pingedLanes, f = a & Bc;
      if (f !== te) {
        var h = f & ~o;
        if (h !== te)
          i = Yo(h);
        else {
          var g = f & s;
          g !== te && (i = Yo(g));
        }
      } else {
        var E = a & ~o;
        E !== te ? i = Yo(E) : s !== te && (i = Yo(s));
      }
      if (i === te)
        return te;
      if (t !== te && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === te) {
        var T = Cn(i), z = Cn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= z || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === Pt && (z & sl) !== te
        )
          return t;
      }
      (i & Zr) !== te && (i |= a & Pt);
      var _ = e.entangledLanes;
      if (_ !== te)
        for (var $ = e.entanglements, Y = i & _; Y > 0; ) {
          var J = fl(Y), be = 1 << J;
          i |= $[J], Y &= ~be;
        }
      return i;
    }
    function Mh(e, t) {
      for (var a = e.eventTimes, i = Ht; t > 0; ) {
        var o = fl(t), s = 1 << o, f = a[o];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Pc(e, t) {
      switch (e) {
        case Ke:
        case ai:
        case Zr:
          return t + 250;
        case Yl:
        case Pt:
        case Gl:
        case Wl:
        case Ea:
        case Ar:
        case Ql:
        case is:
        case ls:
        case bc:
        case Nc:
        case Mc:
        case Lc:
        case _c:
        case Oc:
        case zc:
        case Uc:
        case Kl:
        case Ac:
          return t + 5e3;
        case bi:
        case Hc:
        case os:
        case Ic:
        case Fc:
          return Ht;
        case Po:
        case $o:
        case cl:
        case Hr:
          return Ht;
        default:
          return y("Should have found matching lanes. This is a bug in React."), Ht;
      }
    }
    function mg(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var h = fl(f), g = 1 << h, E = s[h];
        E === Ht ? ((g & i) === te || (g & o) !== te) && (s[h] = Pc(g, t)) : E <= t && (e.expiredLanes |= g), f &= ~g;
      }
    }
    function yg(e) {
      return Yo(e.pendingLanes);
    }
    function Pd(e) {
      var t = e.pendingLanes & ~Hr;
      return t !== te ? t : t & Hr ? Hr : te;
    }
    function Go(e) {
      return (e & Ke) !== te;
    }
    function ss(e) {
      return (e & Bc) !== te;
    }
    function $c(e) {
      return (e & ql) === e;
    }
    function gg(e) {
      var t = Ke | Zr | Pt;
      return (e & t) === te;
    }
    function Lh(e) {
      return (e & sl) === e;
    }
    function cs(e, t) {
      var a = ai | Zr | Yl | Pt;
      return (t & a) !== te;
    }
    function _h(e, t) {
      return (t & e.expiredLanes) !== te;
    }
    function $d(e) {
      return (e & sl) !== te;
    }
    function Yd() {
      var e = Vc;
      return Vc <<= 1, (Vc & sl) === te && (Vc = Wl), e;
    }
    function Sg() {
      var e = jc;
      return jc <<= 1, (jc & ql) === te && (jc = bi), e;
    }
    function Cn(e) {
      return e & -e;
    }
    function Nn(e) {
      return Cn(e);
    }
    function fl(e) {
      return 31 - kc(e);
    }
    function Yc(e) {
      return fl(e);
    }
    function Ir(e, t) {
      return (e & t) !== te;
    }
    function Xl(e, t) {
      return (e & t) === t;
    }
    function it(e, t) {
      return e | t;
    }
    function Wo(e, t) {
      return e & ~t;
    }
    function Gd(e, t) {
      return e & t;
    }
    function Oh(e) {
      return e;
    }
    function zh(e, t) {
      return e !== mt && e < t ? e : t;
    }
    function Gc(e) {
      for (var t = [], a = 0; a < jt; a++)
        t.push(e);
      return t;
    }
    function Zl(e, t, a) {
      e.pendingLanes |= t, t !== cl && (e.suspendedLanes = te, e.pingedLanes = te);
      var i = e.eventTimes, o = Yc(t);
      i[o] = a;
    }
    function Wd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = fl(i), s = 1 << o;
        a[o] = Ht, i &= ~s;
      }
    }
    function Qd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Kd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = te, e.pingedLanes = te, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var h = fl(f), g = 1 << h;
        i[h] = te, o[h] = Ht, s[h] = Ht, f &= ~g;
      }
    }
    function Qo(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = fl(o), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~f;
      }
    }
    function Eg(e, t) {
      var a = Cn(t), i;
      switch (a) {
        case Zr:
          i = ai;
          break;
        case Pt:
          i = Yl;
          break;
        case Wl:
        case Ea:
        case Ar:
        case Ql:
        case is:
        case ls:
        case bc:
        case Nc:
        case Mc:
        case Lc:
        case _c:
        case Oc:
        case zc:
        case Uc:
        case Kl:
        case Ac:
        case bi:
        case Hc:
        case os:
        case Ic:
        case Fc:
          i = Gl;
          break;
        case cl:
          i = $o;
          break;
        default:
          i = mt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== mt ? mt : i;
    }
    function qd(e, t, a) {
      if (Wn)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = Yc(a), s = 1 << o, f = i[o];
          f.add(t), a &= ~s;
        }
    }
    function Wc(e, t) {
      if (Wn)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = Yc(t), s = 1 << o, f = a[o];
          f.size > 0 && (f.forEach(function(h) {
            var g = h.alternate;
            (g === null || !i.has(g)) && i.add(h);
          }), f.clear()), t &= ~s;
        }
    }
    function Xd(e, t) {
      return null;
    }
    var sr = Ke, Qn = Zr, Ni = Pt, fs = cl, Jl = mt;
    function Ca() {
      return Jl;
    }
    function Mn(e) {
      Jl = e;
    }
    function ds(e, t) {
      var a = Jl;
      try {
        return Jl = e, t();
      } finally {
        Jl = a;
      }
    }
    function cr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Cg(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Zd(e, t) {
      return e !== 0 && e < t;
    }
    function ps(e) {
      var t = Cn(e);
      return Zd(sr, t) ? Zd(Qn, t) ? ss(t) ? Ni : fs : Qn : sr;
    }
    function Ln(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Uh;
    function Le(e) {
      Uh = e;
    }
    function Ko(e) {
      Uh(e);
    }
    var vs;
    function Ah(e) {
      vs = e;
    }
    var Hh;
    function hs(e) {
      Hh = e;
    }
    var ms;
    function Jd(e) {
      ms = e;
    }
    var ep;
    function Ih(e) {
      ep = e;
    }
    var Qc = !1, qo = [], ii = null, Kt = null, Bn = null, Ta = /* @__PURE__ */ new Map(), Xo = /* @__PURE__ */ new Map(), Mi = [], Pa = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Fh(e) {
      return Pa.indexOf(e) > -1;
    }
    function li(e, t, a, i, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [i]
      };
    }
    function Bh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ii = null;
          break;
        case "dragenter":
        case "dragleave":
          Kt = null;
          break;
        case "mouseover":
        case "mouseout":
          Bn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ta.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Xo.delete(i);
          break;
        }
      }
    }
    function Zo(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = li(t, a, i, o, s);
        if (t !== null) {
          var h = su(t);
          h !== null && vs(h);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var g = e.targetContainers;
      return o !== null && g.indexOf(o) === -1 && g.push(o), e;
    }
    function Vh(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var s = o;
          return ii = Zo(ii, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = o;
          return Kt = Zo(Kt, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var h = o;
          return Bn = Zo(Bn, e, t, a, i, h), !0;
        }
        case "pointerover": {
          var g = o, E = g.pointerId;
          return Ta.set(E, Zo(Ta.get(E) || null, e, t, a, i, g)), !0;
        }
        case "gotpointercapture": {
          var T = o, z = T.pointerId;
          return Xo.set(z, Zo(Xo.get(z) || null, e, t, a, i, T)), !0;
        }
      }
      return !1;
    }
    function tp(e) {
      var t = Rs(e.target);
      if (t !== null) {
        var a = Kr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === G) {
            var o = Md(a);
            if (o !== null) {
              e.blockedOn = o, ep(e.priority, function() {
                Hh(a);
              });
              return;
            }
          } else if (i === M) {
            var s = a.stateNode;
            if (Ln(s)) {
              e.blockedOn = mc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function jh(e) {
      for (var t = ms(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Mi.length && Zd(t, Mi[i].priority); i++)
        ;
      Mi.splice(i, 0, a), i === 0 && tp(a);
    }
    function Kc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = eo(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          Ku(s), o.target.dispatchEvent(s), fg();
        } else {
          var f = su(i);
          return f !== null && vs(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function ys(e, t, a) {
      Kc(e) && a.delete(t);
    }
    function np() {
      Qc = !1, ii !== null && Kc(ii) && (ii = null), Kt !== null && Kc(Kt) && (Kt = null), Bn !== null && Kc(Bn) && (Bn = null), Ta.forEach(ys), Xo.forEach(ys);
    }
    function fr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Qc || (Qc = !0, v.unstable_scheduleCallback(v.unstable_NormalPriority, np)));
    }
    function dt(e) {
      if (qo.length > 0) {
        fr(qo[0], e);
        for (var t = 1; t < qo.length; t++) {
          var a = qo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ii !== null && fr(ii, e), Kt !== null && fr(Kt, e), Bn !== null && fr(Bn, e);
      var i = function(h) {
        return fr(h, e);
      };
      Ta.forEach(i), Xo.forEach(i);
      for (var o = 0; o < Mi.length; o++) {
        var s = Mi[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Mi.length > 0; ) {
        var f = Mi[0];
        if (f.blockedOn !== null)
          break;
        tp(f), f.blockedOn === null && Mi.shift();
      }
    }
    var Jt = m.ReactCurrentBatchConfig, on = !0;
    function Vn(e) {
      on = !!e;
    }
    function Jr() {
      return on;
    }
    function Jo(e, t, a) {
      var i = gr(t), o;
      switch (i) {
        case sr:
          o = _n;
          break;
        case Qn:
          o = gs;
          break;
        case Ni:
        default:
          o = Li;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function _n(e, t, a, i) {
      var o = Ca(), s = Jt.transition;
      Jt.transition = null;
      try {
        Mn(sr), Li(e, t, a, i);
      } finally {
        Mn(o), Jt.transition = s;
      }
    }
    function gs(e, t, a, i) {
      var o = Ca(), s = Jt.transition;
      Jt.transition = null;
      try {
        Mn(Qn), Li(e, t, a, i);
      } finally {
        Mn(o), Jt.transition = s;
      }
    }
    function Li(e, t, a, i) {
      on && qc(e, t, a, i);
    }
    function qc(e, t, a, i) {
      var o = eo(e, t, a, i);
      if (o === null) {
        Vg(e, t, i, eu, a), Bh(e, i);
        return;
      }
      if (Vh(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Bh(e, i), t & Al && Fh(e)) {
        for (; o !== null; ) {
          var s = su(o);
          s !== null && Ko(s);
          var f = eo(e, t, a, i);
          if (f === null && Vg(e, t, i, eu, a), f === o)
            break;
          o = f;
        }
        o !== null && i.stopPropagation();
        return;
      }
      Vg(e, t, i, null, a);
    }
    var eu = null;
    function eo(e, t, a, i) {
      eu = null;
      var o = fc(i), s = Rs(o);
      if (s !== null) {
        var f = Kr(s);
        if (f === null)
          s = null;
        else {
          var h = f.tag;
          if (h === G) {
            var g = Md(f);
            if (g !== null)
              return g;
            s = null;
          } else if (h === M) {
            var E = f.stateNode;
            if (Ln(E))
              return mc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return eu = s, null;
    }
    function gr(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return sr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Qn;
        case "message": {
          var t = Od();
          switch (t) {
            case Ec:
              return sr;
            case Xr:
              return Qn;
            case ri:
            case Cc:
              return Ni;
            case rl:
              return fs;
            default:
              return Ni;
          }
        }
        default:
          return Ni;
      }
    }
    function rp(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function tu(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function _i(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Xc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var to = null, oi = null, dl = null;
    function pl(e) {
      return to = e, oi = Jc(), !0;
    }
    function Zc() {
      to = null, oi = null, dl = null;
    }
    function nu() {
      if (dl)
        return dl;
      var e, t = oi, a = t.length, i, o = Jc(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === o[s - i]; i++)
        ;
      var h = i > 1 ? 1 - i : void 0;
      return dl = o.slice(e, h), dl;
    }
    function Jc() {
      return "value" in to ? to.value : to.textContent;
    }
    function no(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function ro() {
      return !0;
    }
    function dr() {
      return !1;
    }
    function Tn(e) {
      function t(a, i, o, s, f) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var h in e)
          if (e.hasOwnProperty(h)) {
            var g = e[h];
            g ? this[h] = g(s) : this[h] = s[h];
          }
        var E = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return E ? this.isDefaultPrevented = ro : this.isDefaultPrevented = dr, this.isPropagationStopped = dr, this;
      }
      return ft(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ro);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ro);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: ro
      }), t;
    }
    var pr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, vr = Tn(pr), ru = ft({}, pr, {
      view: 0,
      detail: 0
    }), ap = Tn(ru), Ss, ip, xa;
    function Ph(e) {
      e !== xa && (xa && e.type === "mousemove" ? (Ss = e.screenX - xa.screenX, ip = e.screenY - xa.screenY) : (Ss = 0, ip = 0), xa = e);
    }
    var au = ft({}, ru, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: nf,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ph(e), Ss);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : ip;
      }
    }), vl = Tn(au), lp = ft({}, au, {
      dataTransfer: 0
    }), ao = Tn(lp), $h = ft({}, ru, {
      relatedTarget: 0
    }), ef = Tn($h), op = ft({}, pr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), tf = Tn(op), Tg = ft({}, pr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), xg = Tn(Tg), Yh = ft({}, pr, {
      data: 0
    }), up = Tn(Yh), io = up, wg = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, iu = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Gh(e) {
      if (e.key) {
        var t = wg[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = no(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? iu[e.keyCode] || "Unidentified" : "";
    }
    var un = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Rg(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = un[e];
      return i ? !!a[i] : !1;
    }
    function nf(e) {
      return Rg;
    }
    var kg = ft({}, ru, {
      key: Gh,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: nf,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? no(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? no(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Dg = Tn(kg), Wh = ft({}, au, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), sp = Tn(Wh), bg = ft({}, ru, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: nf
    }), wa = Tn(bg), cp = ft({}, pr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ng = Tn(cp), hl = ft({}, au, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), rf = Tn(hl), lo = [9, 13, 27, 32], Es = 229, Cs = qt && "CompositionEvent" in window, oo = null;
    qt && "documentMode" in document && (oo = document.documentMode);
    var Mg = qt && "TextEvent" in window && !oo, af = qt && (!Cs || oo && oo > 8 && oo <= 11), Qh = 32, fp = String.fromCharCode(Qh);
    function Kh() {
      Gt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Gt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Gt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Gt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ts = !1;
    function lf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function qh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function dp(e, t) {
      return e === "keydown" && t.keyCode === Es;
    }
    function Xh(e, t) {
      switch (e) {
        case "keyup":
          return lo.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Es;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function pp(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function of(e) {
      return e.locale === "ko";
    }
    var Oi = !1;
    function vp(e, t, a, i, o) {
      var s, f;
      if (Cs ? s = qh(t) : Oi ? Xh(t, i) && (s = "onCompositionEnd") : dp(t, i) && (s = "onCompositionStart"), !s)
        return null;
      af && !of(i) && (!Oi && s === "onCompositionStart" ? Oi = pl(o) : s === "onCompositionEnd" && Oi && (f = nu()));
      var h = nm(a, s);
      if (h.length > 0) {
        var g = new up(s, t, null, i, o);
        if (e.push({
          event: g,
          listeners: h
        }), f)
          g.data = f;
        else {
          var E = pp(i);
          E !== null && (g.data = E);
        }
      }
    }
    function uf(e, t) {
      switch (e) {
        case "compositionend":
          return pp(t);
        case "keypress":
          var a = t.which;
          return a !== Qh ? null : (Ts = !0, fp);
        case "textInput":
          var i = t.data;
          return i === fp && Ts ? null : i;
        default:
          return null;
      }
    }
    function Zh(e, t) {
      if (Oi) {
        if (e === "compositionend" || !Cs && Xh(e, t)) {
          var a = nu();
          return Zc(), Oi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!lf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return af && !of(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Lg(e, t, a, i, o) {
      var s;
      if (Mg ? s = uf(t, i) : s = Zh(t, i), !s)
        return null;
      var f = nm(a, "onBeforeInput");
      if (f.length > 0) {
        var h = new io("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: h,
          listeners: f
        }), h.data = s;
      }
    }
    function sf(e, t, a, i, o, s, f) {
      vp(e, t, a, i, o), Lg(e, t, a, i, o);
    }
    var _g = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function lu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!_g[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Og(e) {
      if (!qt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function cf() {
      Gt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      dc(i);
      var o = nm(t, "onChange");
      if (o.length > 0) {
        var s = new vr("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: o
        });
      }
    }
    var r = null, l = null;
    function u(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, fc(e)), Td(p, t);
    }
    function p(e) {
      iE(e, 0);
    }
    function S(e) {
      var t = mf(e);
      if (Iv(t))
        return e;
    }
    function R(e, t) {
      if (e === "change")
        return t;
    }
    var D = !1;
    qt && (D = Og("input") && (!document.documentMode || document.documentMode > 9));
    function K(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", oe);
    }
    function le() {
      r && (r.detachEvent("onpropertychange", oe), r = null, l = null);
    }
    function oe(e) {
      e.propertyName === "value" && S(l) && c(e);
    }
    function ie(e, t, a) {
      e === "focusin" ? (le(), K(t, a)) : e === "focusout" && le();
    }
    function we(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return S(l);
    }
    function _e(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ae(e, t) {
      if (e === "click")
        return S(t);
    }
    function vn(e, t) {
      if (e === "input" || e === "change")
        return S(t);
    }
    function I(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ki(e, "number", e.value);
    }
    function O(e, t, a, i, o, s, f) {
      var h = a ? mf(a) : window, g, E;
      if (u(h) ? g = R : lu(h) ? D ? g = vn : (g = we, E = ie) : _e(h) && (g = Ae), g) {
        var T = g(t, a);
        if (T) {
          n(e, T, i, o);
          return;
        }
      }
      E && E(t, h, a), t === "focusout" && I(h);
    }
    function P() {
      Mt("onMouseEnter", ["mouseout", "mouseover"]), Mt("onMouseLeave", ["mouseout", "mouseover"]), Mt("onPointerEnter", ["pointerout", "pointerover"]), Mt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function pe(e, t, a, i, o, s, f) {
      var h = t === "mouseover" || t === "pointerover", g = t === "mouseout" || t === "pointerout";
      if (h && !hh(i)) {
        var E = i.relatedTarget || i.fromElement;
        if (E && (Rs(E) || bp(E)))
          return;
      }
      if (!(!g && !h)) {
        var T;
        if (o.window === o)
          T = o;
        else {
          var z = o.ownerDocument;
          z ? T = z.defaultView || z.parentWindow : T = window;
        }
        var _, $;
        if (g) {
          var Y = i.relatedTarget || i.toElement;
          if (_ = a, $ = Y ? Rs(Y) : null, $ !== null) {
            var J = Kr($);
            ($ !== J || $.tag !== j && $.tag !== Z) && ($ = null);
          }
        } else
          _ = null, $ = a;
        if (_ !== $) {
          var be = vl, $e = "onMouseLeave", Be = "onMouseEnter", gt = "mouse";
          (t === "pointerout" || t === "pointerover") && (be = sp, $e = "onPointerLeave", Be = "onPointerEnter", gt = "pointer");
          var pt = _ == null ? T : mf(_), F = $ == null ? T : mf($), ee = new be($e, gt + "leave", _, i, o);
          ee.target = pt, ee.relatedTarget = F;
          var B = null, se = Rs(o);
          if (se === a) {
            var Ne = new be(Be, gt + "enter", $, i, o);
            Ne.target = F, Ne.relatedTarget = pt, B = Ne;
          }
          eR(e, ee, B, _, $);
        }
      }
    }
    function Ie(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Oe = typeof Object.is == "function" ? Object.is : Ie;
    function je(e, t) {
      if (Oe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!wn.call(t, s) || !Oe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Je(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function jn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Et(e, t) {
      for (var a = Je(e), i = 0, o = 0; a; ) {
        if (a.nodeType === Ei) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = Je(jn(a));
      }
    }
    function ml(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, f = i.focusNode, h = i.focusOffset;
      try {
        o.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return zg(e, o, s, f, h);
    }
    function zg(e, t, a, i, o) {
      var s = 0, f = -1, h = -1, g = 0, E = 0, T = e, z = null;
      e:
        for (; ; ) {
          for (var _ = null; T === t && (a === 0 || T.nodeType === Ei) && (f = s + a), T === i && (o === 0 || T.nodeType === Ei) && (h = s + o), T.nodeType === Ei && (s += T.nodeValue.length), (_ = T.firstChild) !== null; )
            z = T, T = _;
          for (; ; ) {
            if (T === e)
              break e;
            if (z === t && ++g === a && (f = s), z === i && ++E === o && (h = s), (_ = T.nextSibling) !== null)
              break;
            T = z, z = T.parentNode;
          }
          T = _;
        }
      return f === -1 || h === -1 ? null : {
        start: f,
        end: h
      };
    }
    function Uw(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), h = t.end === void 0 ? f : Math.min(t.end, s);
        if (!o.extend && f > h) {
          var g = h;
          h = f, f = g;
        }
        var E = Et(e, f), T = Et(e, h);
        if (E && T) {
          if (o.rangeCount === 1 && o.anchorNode === E.node && o.anchorOffset === E.offset && o.focusNode === T.node && o.focusOffset === T.offset)
            return;
          var z = a.createRange();
          z.setStart(E.node, E.offset), o.removeAllRanges(), f > h ? (o.addRange(z), o.extend(T.node, T.offset)) : (z.setEnd(T.node, T.offset), o.addRange(z));
        }
      }
    }
    function W1(e) {
      return e && e.nodeType === Ei;
    }
    function Q1(e, t) {
      return !e || !t ? !1 : e === t ? !0 : W1(e) ? !1 : W1(t) ? Q1(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function Aw(e) {
      return e && e.ownerDocument && Q1(e.ownerDocument.documentElement, e);
    }
    function Hw(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function K1() {
      for (var e = window, t = Zs(); t instanceof e.HTMLIFrameElement; ) {
        if (Hw(t))
          e = t.contentWindow;
        else
          return t;
        t = Zs(e.document);
      }
      return t;
    }
    function Ug(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Iw() {
      var e = K1();
      return {
        focusedElem: e,
        selectionRange: Ug(e) ? Bw(e) : null
      };
    }
    function Fw(e) {
      var t = K1(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && Aw(a)) {
        i !== null && Ug(a) && Vw(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === Mr && o.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < o.length; f++) {
          var h = o[f];
          h.element.scrollLeft = h.left, h.element.scrollTop = h.top;
        }
      }
    }
    function Bw(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = ml(e), t || {
        start: 0,
        end: 0
      };
    }
    function Vw(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Uw(e, t);
    }
    var jw = qt && "documentMode" in document && document.documentMode <= 11;
    function Pw() {
      Gt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var ff = null, Ag = null, hp = null, Hg = !1;
    function $w(e) {
      if ("selectionStart" in e && Ug(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function Yw(e) {
      return e.window === e ? e.document : e.nodeType === Fa ? e : e.ownerDocument;
    }
    function q1(e, t, a) {
      var i = Yw(a);
      if (!(Hg || ff == null || ff !== Zs(i))) {
        var o = $w(ff);
        if (!hp || !je(hp, o)) {
          hp = o;
          var s = nm(Ag, "onSelect");
          if (s.length > 0) {
            var f = new vr("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = ff;
          }
        }
      }
    }
    function Gw(e, t, a, i, o, s, f) {
      var h = a ? mf(a) : window;
      switch (t) {
        case "focusin":
          (lu(h) || h.contentEditable === "true") && (ff = h, Ag = a, hp = null);
          break;
        case "focusout":
          ff = null, Ag = null, hp = null;
          break;
        case "mousedown":
          Hg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Hg = !1, q1(e, i, o);
          break;
        case "selectionchange":
          if (jw)
            break;
        case "keydown":
        case "keyup":
          q1(e, i, o);
      }
    }
    function Jh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var df = {
      animationend: Jh("Animation", "AnimationEnd"),
      animationiteration: Jh("Animation", "AnimationIteration"),
      animationstart: Jh("Animation", "AnimationStart"),
      transitionend: Jh("Transition", "TransitionEnd")
    }, Ig = {}, X1 = {};
    qt && (X1 = document.createElement("div").style, "AnimationEvent" in window || (delete df.animationend.animation, delete df.animationiteration.animation, delete df.animationstart.animation), "TransitionEvent" in window || delete df.transitionend.transition);
    function em(e) {
      if (Ig[e])
        return Ig[e];
      if (!df[e])
        return e;
      var t = df[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in X1)
          return Ig[e] = t[a];
      return e;
    }
    var Z1 = em("animationend"), J1 = em("animationiteration"), eE = em("animationstart"), tE = em("transitionend"), nE = /* @__PURE__ */ new Map(), rE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function ou(e, t) {
      nE.set(e, t), Gt(t, [e]);
    }
    function Ww() {
      for (var e = 0; e < rE.length; e++) {
        var t = rE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        ou(a, "on" + i);
      }
      ou(Z1, "onAnimationEnd"), ou(J1, "onAnimationIteration"), ou(eE, "onAnimationStart"), ou("dblclick", "onDoubleClick"), ou("focusin", "onFocus"), ou("focusout", "onBlur"), ou(tE, "onTransitionEnd");
    }
    function Qw(e, t, a, i, o, s, f) {
      var h = nE.get(t);
      if (h !== void 0) {
        var g = vr, E = t;
        switch (t) {
          case "keypress":
            if (no(i) === 0)
              return;
          case "keydown":
          case "keyup":
            g = Dg;
            break;
          case "focusin":
            E = "focus", g = ef;
            break;
          case "focusout":
            E = "blur", g = ef;
            break;
          case "beforeblur":
          case "afterblur":
            g = ef;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = vl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = ao;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = wa;
            break;
          case Z1:
          case J1:
          case eE:
            g = tf;
            break;
          case tE:
            g = Ng;
            break;
          case "scroll":
            g = ap;
            break;
          case "wheel":
            g = rf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = xg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = sp;
            break;
        }
        var T = (s & Al) !== 0;
        {
          var z = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", _ = Zw(a, h, i.type, T, z);
          if (_.length > 0) {
            var $ = new g(h, E, null, i, o);
            e.push({
              event: $,
              listeners: _
            });
          }
        }
      }
    }
    Ww(), P(), cf(), Pw(), Kh();
    function Kw(e, t, a, i, o, s, f) {
      Qw(e, t, a, i, o, s);
      var h = (s & cg) === 0;
      h && (pe(e, t, a, i, o), O(e, t, a, i, o), Gw(e, t, a, i, o), sf(e, t, a, i, o));
    }
    var mp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Fg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(mp));
    function aE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, wi(i, t, void 0, e), e.currentTarget = null;
    }
    function qw(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], f = s.instance, h = s.currentTarget, g = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          aE(e, g, h), i = f;
        }
      else
        for (var E = 0; E < t.length; E++) {
          var T = t[E], z = T.instance, _ = T.currentTarget, $ = T.listener;
          if (z !== i && e.isPropagationStopped())
            return;
          aE(e, $, _), i = z;
        }
    }
    function iE(e, t) {
      for (var a = (t & Al) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, f = o.listeners;
        qw(s, f, a);
      }
      kd();
    }
    function Xw(e, t, a, i, o) {
      var s = fc(a), f = [];
      Kw(f, e, i, a, s, t), iE(f, t);
    }
    function en(e, t) {
      Fg.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Dk(t), o = tR(e, a);
      i.has(o) || (lE(t, e, Wu, a), i.add(o));
    }
    function Bg(e, t, a) {
      Fg.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Al), lE(a, e, i, t);
    }
    var tm = "_reactListening" + Math.random().toString(36).slice(2);
    function yp(e) {
      if (!e[tm]) {
        e[tm] = !0, st.forEach(function(a) {
          a !== "selectionchange" && (Fg.has(a) || Bg(a, !1, e), Bg(a, !0, e));
        });
        var t = e.nodeType === Fa ? e : e.ownerDocument;
        t !== null && (t[tm] || (t[tm] = !0, Bg("selectionchange", !1, t)));
      }
    }
    function lE(e, t, a, i, o) {
      var s = Jo(e, t, a), f = void 0;
      Zu && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? _i(e, t, s, f) : tu(e, t, s) : f !== void 0 ? Xc(e, t, s, f) : rp(e, t, s);
    }
    function oE(e, t) {
      return e === t || e.nodeType === En && e.parentNode === t;
    }
    function Vg(e, t, a, i, o) {
      var s = i;
      if (!(t & Ti) && !(t & Wu)) {
        var f = o;
        if (i !== null) {
          var h = i;
          e:
            for (; ; ) {
              if (h === null)
                return;
              var g = h.tag;
              if (g === M || g === U) {
                var E = h.stateNode.containerInfo;
                if (oE(E, f))
                  break;
                if (g === U)
                  for (var T = h.return; T !== null; ) {
                    var z = T.tag;
                    if (z === M || z === U) {
                      var _ = T.stateNode.containerInfo;
                      if (oE(_, f))
                        return;
                    }
                    T = T.return;
                  }
                for (; E !== null; ) {
                  var $ = Rs(E);
                  if ($ === null)
                    return;
                  var Y = $.tag;
                  if (Y === j || Y === Z) {
                    h = s = $;
                    continue e;
                  }
                  E = E.parentNode;
                }
              }
              h = h.return;
            }
        }
      }
      Td(function() {
        return Xw(e, t, a, s);
      });
    }
    function gp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Zw(e, t, a, i, o, s) {
      for (var f = t !== null ? t + "Capture" : null, h = i ? f : t, g = [], E = e, T = null; E !== null; ) {
        var z = E, _ = z.stateNode, $ = z.tag;
        if ($ === j && _ !== null && (T = _, h !== null)) {
          var Y = Il(E, h);
          Y != null && g.push(gp(E, Y, T));
        }
        if (o)
          break;
        E = E.return;
      }
      return g;
    }
    function nm(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, f = s.stateNode, h = s.tag;
        if (h === j && f !== null) {
          var g = f, E = Il(o, a);
          E != null && i.unshift(gp(o, E, g));
          var T = Il(o, t);
          T != null && i.push(gp(o, T, g));
        }
        o = o.return;
      }
      return i;
    }
    function pf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== j);
      return e || null;
    }
    function Jw(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = pf(s))
        o++;
      for (var f = 0, h = i; h; h = pf(h))
        f++;
      for (; o - f > 0; )
        a = pf(a), o--;
      for (; f - o > 0; )
        i = pf(i), f--;
      for (var g = o; g--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = pf(a), i = pf(i);
      }
      return null;
    }
    function uE(e, t, a, i, o) {
      for (var s = t._reactName, f = [], h = a; h !== null && h !== i; ) {
        var g = h, E = g.alternate, T = g.stateNode, z = g.tag;
        if (E !== null && E === i)
          break;
        if (z === j && T !== null) {
          var _ = T;
          if (o) {
            var $ = Il(h, s);
            $ != null && f.unshift(gp(h, $, _));
          } else if (!o) {
            var Y = Il(h, s);
            Y != null && f.push(gp(h, Y, _));
          }
        }
        h = h.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function eR(e, t, a, i, o) {
      var s = i && o ? Jw(i, o) : null;
      i !== null && uE(e, t, i, s, !1), o !== null && a !== null && uE(e, a, o, s, !0);
    }
    function tR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ra = !1, Sp = "dangerouslySetInnerHTML", rm = "suppressContentEditableWarning", uu = "suppressHydrationWarning", sE = "autoFocus", xs = "children", ws = "style", am = "__html", jg, im, Ep, cE, lm, fE, dE;
    jg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, im = function(e, t) {
      cc(e, t), yd(e, t), vh(e, t, {
        registrationNameDependencies: Ct,
        possibleRegistrationNames: tn
      });
    }, fE = qt && !document.documentMode, Ep = function(e, t, a) {
      if (!Ra) {
        var i = om(a), o = om(t);
        o !== i && (Ra = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, cE = function(e) {
      if (!Ra) {
        Ra = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, lm = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, dE = function(e, t) {
      var a = e.namespaceURI === Si ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var nR = /\r\n?/g, rR = /\u0000|\uFFFD/g;
    function om(e) {
      Nr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(nR, `
`).replace(rR, "");
    }
    function um(e, t, a, i) {
      var o = om(t), s = om(e);
      if (s !== o && (i && (Ra || (Ra = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && ht))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function pE(e) {
      return e.nodeType === Fa ? e : e.ownerDocument;
    }
    function aR() {
    }
    function sm(e) {
      e.onclick = aR;
    }
    function iR(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === ws)
            f && Object.freeze(f), ah(t, f);
          else if (s === Sp) {
            var h = f ? f[am] : void 0;
            h != null && Wv(t, h);
          } else if (s === xs)
            if (typeof f == "string") {
              var g = e !== "textarea" || f !== "";
              g && lc(t, f);
            } else
              typeof f == "number" && lc(t, "" + f);
          else
            s === rm || s === uu || s === sE || (Ct.hasOwnProperty(s) ? f != null && (typeof f != "function" && lm(s, f), s === "onScroll" && en("scroll", t)) : f != null && Ml(t, s, f, o));
        }
    }
    function lR(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], f = t[o + 1];
        s === ws ? ah(e, f) : s === Sp ? Wv(e, f) : s === xs ? lc(e, f) : Ml(e, s, f, i);
      }
    }
    function oR(e, t, a, i) {
      var o, s = pE(a), f, h = i;
      if (h === Si && (h = ac(e)), h === Si) {
        if (o = Ci(e, t), !o && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var g = s.createElement("div");
          g.innerHTML = "<script><\/script>";
          var E = g.firstChild;
          f = g.removeChild(E);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var T = f;
          t.multiple ? T.multiple = !0 : t.size && (T.size = t.size);
        }
      } else
        f = s.createElementNS(h, e);
      return h === Si && !o && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !wn.call(jg, e) && (jg[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function uR(e, t) {
      return pE(t).createTextNode(e);
    }
    function sR(e, t, a, i) {
      var o = Ci(t, a);
      im(t, a);
      var s;
      switch (t) {
        case "dialog":
          en("cancel", e), en("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          en("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < mp.length; f++)
            en(mp[f], e);
          s = a;
          break;
        case "source":
          en("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          en("error", e), en("load", e), s = a;
          break;
        case "details":
          en("toggle", e), s = a;
          break;
        case "input":
          Vu(e, a), s = Bu(e, a), en("invalid", e);
          break;
        case "option":
          nc(e, a), s = a;
          break;
        case "select":
          Pv(e, a), s = ld(e, a), en("invalid", e);
          break;
        case "textarea":
          $v(e, a), s = ud(e, a), en("invalid", e);
          break;
        default:
          s = a;
      }
      switch (uc(t, s), iR(t, e, i, s, o), t) {
        case "input":
          Ol(e), ju(e, a, !1);
          break;
        case "textarea":
          Ol(e), Gv(e);
          break;
        case "option":
          id(e, a);
          break;
        case "select":
          Jy(e, a);
          break;
        default:
          typeof s.onClick == "function" && sm(e);
          break;
      }
    }
    function cR(e, t, a, i, o) {
      im(t, i);
      var s = null, f, h;
      switch (t) {
        case "input":
          f = Bu(e, a), h = Bu(e, i), s = [];
          break;
        case "select":
          f = ld(e, a), h = ld(e, i), s = [];
          break;
        case "textarea":
          f = ud(e, a), h = ud(e, i), s = [];
          break;
        default:
          f = a, h = i, typeof f.onClick != "function" && typeof h.onClick == "function" && sm(e);
          break;
      }
      uc(t, h);
      var g, E, T = null;
      for (g in f)
        if (!(h.hasOwnProperty(g) || !f.hasOwnProperty(g) || f[g] == null))
          if (g === ws) {
            var z = f[g];
            for (E in z)
              z.hasOwnProperty(E) && (T || (T = {}), T[E] = "");
          } else
            g === Sp || g === xs || g === rm || g === uu || g === sE || (Ct.hasOwnProperty(g) ? s || (s = []) : (s = s || []).push(g, null));
      for (g in h) {
        var _ = h[g], $ = f != null ? f[g] : void 0;
        if (!(!h.hasOwnProperty(g) || _ === $ || _ == null && $ == null))
          if (g === ws)
            if (_ && Object.freeze(_), $) {
              for (E in $)
                $.hasOwnProperty(E) && (!_ || !_.hasOwnProperty(E)) && (T || (T = {}), T[E] = "");
              for (E in _)
                _.hasOwnProperty(E) && $[E] !== _[E] && (T || (T = {}), T[E] = _[E]);
            } else
              T || (s || (s = []), s.push(g, T)), T = _;
          else if (g === Sp) {
            var Y = _ ? _[am] : void 0, J = $ ? $[am] : void 0;
            Y != null && J !== Y && (s = s || []).push(g, Y);
          } else
            g === xs ? (typeof _ == "string" || typeof _ == "number") && (s = s || []).push(g, "" + _) : g === rm || g === uu || (Ct.hasOwnProperty(g) ? (_ != null && (typeof _ != "function" && lm(g, _), g === "onScroll" && en("scroll", e)), !s && $ !== _ && (s = [])) : (s = s || []).push(g, _));
      }
      return T && (Yu(T, h[ws]), (s = s || []).push(ws, T)), s;
    }
    function fR(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && ad(e, o);
      var s = Ci(a, i), f = Ci(a, o);
      switch (lR(e, t, s, f), a) {
        case "input":
          Mo(e, o);
          break;
        case "textarea":
          Yv(e, o);
          break;
        case "select":
          eg(e, o);
          break;
      }
    }
    function dR(e) {
      {
        var t = e.toLowerCase();
        return sc.hasOwnProperty(t) && sc[t] || null;
      }
    }
    function pR(e, t, a, i, o, s, f) {
      var h, g;
      switch (h = Ci(t, a), im(t, a), t) {
        case "dialog":
          en("cancel", e), en("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          en("load", e);
          break;
        case "video":
        case "audio":
          for (var E = 0; E < mp.length; E++)
            en(mp[E], e);
          break;
        case "source":
          en("error", e);
          break;
        case "img":
        case "image":
        case "link":
          en("error", e), en("load", e);
          break;
        case "details":
          en("toggle", e);
          break;
        case "input":
          Vu(e, a), en("invalid", e);
          break;
        case "option":
          nc(e, a);
          break;
        case "select":
          Pv(e, a), en("invalid", e);
          break;
        case "textarea":
          $v(e, a), en("invalid", e);
          break;
      }
      uc(t, a);
      {
        g = /* @__PURE__ */ new Set();
        for (var T = e.attributes, z = 0; z < T.length; z++) {
          var _ = T[z].name.toLowerCase();
          switch (_) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              g.add(T[z].name);
          }
        }
      }
      var $ = null;
      for (var Y in a)
        if (a.hasOwnProperty(Y)) {
          var J = a[Y];
          if (Y === xs)
            typeof J == "string" ? e.textContent !== J && (a[uu] !== !0 && um(e.textContent, J, s, f), $ = [xs, J]) : typeof J == "number" && e.textContent !== "" + J && (a[uu] !== !0 && um(e.textContent, J, s, f), $ = [xs, "" + J]);
          else if (Ct.hasOwnProperty(Y))
            J != null && (typeof J != "function" && lm(Y, J), Y === "onScroll" && en("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof h == "boolean") {
            var be = void 0, $e = h && yn ? null : Ja(Y);
            if (a[uu] !== !0) {
              if (!(Y === rm || Y === uu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Y === "value" || Y === "checked" || Y === "selected")) {
                if (Y === Sp) {
                  var Be = e.innerHTML, gt = J ? J[am] : void 0;
                  if (gt != null) {
                    var pt = dE(e, gt);
                    pt !== Be && Ep(Y, Be, pt);
                  }
                } else if (Y === ws) {
                  if (g.delete(Y), fE) {
                    var F = ug(J);
                    be = e.getAttribute("style"), F !== be && Ep(Y, be, F);
                  }
                } else if (h && !yn)
                  g.delete(Y.toLowerCase()), be = Ws(e, Y, J), J !== be && Ep(Y, be, J);
                else if (!kn(Y, $e, h) && !nn(Y, J, $e, h)) {
                  var ee = !1;
                  if ($e !== null)
                    g.delete($e.attributeName), be = Mu(e, Y, J, $e);
                  else {
                    var B = i;
                    if (B === Si && (B = ac(t)), B === Si)
                      g.delete(Y.toLowerCase());
                    else {
                      var se = dR(Y);
                      se !== null && se !== Y && (ee = !0, g.delete(se)), g.delete(Y);
                    }
                    be = Ws(e, Y, J);
                  }
                  var Ne = yn;
                  !Ne && J !== be && !ee && Ep(Y, be, J);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      g.size > 0 && a[uu] !== !0 && cE(g), t) {
        case "input":
          Ol(e), ju(e, a, !0);
          break;
        case "textarea":
          Ol(e), Gv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && sm(e);
          break;
      }
      return $;
    }
    function vR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Pg(e, t) {
      {
        if (Ra)
          return;
        Ra = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function $g(e, t) {
      {
        if (Ra)
          return;
        Ra = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Yg(e, t, a) {
      {
        if (Ra)
          return;
        Ra = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Gg(e, t) {
      {
        if (t === "" || Ra)
          return;
        Ra = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function hR(e, t, a) {
      switch (t) {
        case "input":
          Fv(e, a);
          return;
        case "textarea":
          sd(e, a);
          return;
        case "select":
          tg(e, a);
          return;
      }
    }
    var Cp = function() {
    }, Tp = function() {
    };
    {
      var mR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], vE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], yR = vE.concat(["button"]), gR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], hE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Tp = function(e, t) {
        var a = ft({}, e || hE), i = {
          tag: t
        };
        return vE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), yR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), mR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var SR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return gR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, ER = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, mE = {};
      Cp = function(e, t, a) {
        a = a || hE;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = SR(e, o) ? null : i, f = s ? null : ER(e, a), h = s || f;
        if (h) {
          var g = h.tag, E = !!s + "|" + e + "|" + g;
          if (!mE[E]) {
            mE[E] = !0;
            var T = e, z = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", z = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", s) {
              var _ = "";
              g === "table" && e === "tr" && (_ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, g, z, _);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, g);
          }
        }
      };
    }
    var cm = "suppressHydrationWarning", fm = "$", dm = "/$", xp = "$?", wp = "$!", CR = "style", Wg = null, Qg = null;
    function TR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Fa:
        case zl: {
          t = i === Fa ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : fd(null, "");
          break;
        }
        default: {
          var s = i === En ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = fd(f, t);
          break;
        }
      }
      {
        var h = t.toLowerCase(), g = Tp(null, h);
        return {
          namespace: a,
          ancestorInfo: g
        };
      }
    }
    function xR(e, t, a) {
      {
        var i = e, o = fd(i.namespace, t), s = Tp(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function z_(e) {
      return e;
    }
    function wR(e) {
      Wg = Jr(), Qg = Iw();
      var t = null;
      return Vn(!1), t;
    }
    function RR(e) {
      Fw(Qg), Vn(Wg), Wg = null, Qg = null;
    }
    function kR(e, t, a, i, o) {
      var s;
      {
        var f = i;
        if (Cp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var h = "" + t.children, g = Tp(f.ancestorInfo, e);
          Cp(null, h, g);
        }
        s = f.namespace;
      }
      var E = oR(e, t, a, s);
      return Dp(o, E), nS(E, t), E;
    }
    function DR(e, t) {
      e.appendChild(t);
    }
    function bR(e, t, a, i, o) {
      switch (sR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function NR(e, t, a, i, o, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var h = "" + i.children, g = Tp(f.ancestorInfo, t);
          Cp(null, h, g);
        }
      }
      return cR(e, t, a, i);
    }
    function Kg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function MR(e, t, a, i) {
      {
        var o = a;
        Cp(null, e, o.ancestorInfo);
      }
      var s = uR(e, t);
      return Dp(i, s), s;
    }
    function LR() {
      var e = window.event;
      return e === void 0 ? Ni : gr(e.type);
    }
    var qg = typeof setTimeout == "function" ? setTimeout : void 0, _R = typeof clearTimeout == "function" ? clearTimeout : void 0, Xg = -1, yE = typeof Promise == "function" ? Promise : void 0, OR = typeof queueMicrotask == "function" ? queueMicrotask : typeof yE < "u" ? function(e) {
      return yE.resolve(null).then(e).catch(zR);
    } : qg;
    function zR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function UR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function AR(e, t, a, i, o, s) {
      fR(e, t, a, i, o), nS(e, o);
    }
    function gE(e) {
      lc(e, "");
    }
    function HR(e, t, a) {
      e.nodeValue = a;
    }
    function IR(e, t) {
      e.appendChild(t);
    }
    function FR(e, t) {
      var a;
      e.nodeType === En ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && sm(a);
    }
    function BR(e, t, a) {
      e.insertBefore(t, a);
    }
    function VR(e, t, a) {
      e.nodeType === En ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function jR(e, t) {
      e.removeChild(t);
    }
    function PR(e, t) {
      e.nodeType === En ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Zg(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === En) {
          var s = o.data;
          if (s === dm)
            if (i === 0) {
              e.removeChild(o), dt(t);
              return;
            } else
              i--;
          else
            (s === fm || s === xp || s === wp) && i++;
        }
        a = o;
      } while (a);
      dt(t);
    }
    function $R(e, t) {
      e.nodeType === En ? Zg(e.parentNode, t) : e.nodeType === Mr && Zg(e, t), dt(e);
    }
    function YR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function GR(e) {
      e.nodeValue = "";
    }
    function WR(e, t) {
      e = e;
      var a = t[CR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = oc("display", i);
    }
    function QR(e, t) {
      e.nodeValue = t;
    }
    function KR(e) {
      e.nodeType === Mr ? e.textContent = "" : e.nodeType === Fa && e.documentElement && e.removeChild(e.documentElement);
    }
    function qR(e, t, a) {
      return e.nodeType !== Mr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function XR(e, t) {
      return t === "" || e.nodeType !== Ei ? null : e;
    }
    function ZR(e) {
      return e.nodeType !== En ? null : e;
    }
    function SE(e) {
      return e.data === xp;
    }
    function Jg(e) {
      return e.data === wp;
    }
    function JR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function ek(e, t) {
      e._reactRetry = t;
    }
    function pm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Mr || t === Ei)
          break;
        if (t === En) {
          var a = e.data;
          if (a === fm || a === wp || a === xp)
            break;
          if (a === dm)
            return null;
        }
      }
      return e;
    }
    function Rp(e) {
      return pm(e.nextSibling);
    }
    function tk(e) {
      return pm(e.firstChild);
    }
    function nk(e) {
      return pm(e.firstChild);
    }
    function rk(e) {
      return pm(e.nextSibling);
    }
    function ak(e, t, a, i, o, s, f) {
      Dp(s, e), nS(e, a);
      var h;
      {
        var g = o;
        h = g.namespace;
      }
      var E = (s.mode & ut) !== Ge;
      return pR(e, t, a, h, i, E, f);
    }
    function ik(e, t, a, i) {
      return Dp(a, e), a.mode & ut, vR(e, t);
    }
    function lk(e, t) {
      Dp(t, e);
    }
    function ok(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === En) {
          var i = t.data;
          if (i === dm) {
            if (a === 0)
              return Rp(t);
            a--;
          } else
            (i === fm || i === wp || i === xp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function EE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === En) {
          var i = t.data;
          if (i === fm || i === wp || i === xp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === dm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function uk(e) {
      dt(e);
    }
    function sk(e) {
      dt(e);
    }
    function ck(e) {
      return e !== "head" && e !== "body";
    }
    function fk(e, t, a, i) {
      var o = !0;
      um(t.nodeValue, a, i, o);
    }
    function dk(e, t, a, i, o, s) {
      if (t[cm] !== !0) {
        var f = !0;
        um(i.nodeValue, o, s, f);
      }
    }
    function pk(e, t) {
      t.nodeType === Mr ? Pg(e, t) : t.nodeType === En || $g(e, t);
    }
    function vk(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Mr ? Pg(a, t) : t.nodeType === En || $g(a, t));
      }
    }
    function hk(e, t, a, i, o) {
      (o || t[cm] !== !0) && (i.nodeType === Mr ? Pg(a, i) : i.nodeType === En || $g(a, i));
    }
    function mk(e, t, a) {
      Yg(e, t);
    }
    function yk(e, t) {
      Gg(e, t);
    }
    function gk(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Yg(i, t);
      }
    }
    function Sk(e, t) {
      {
        var a = e.parentNode;
        a !== null && Gg(a, t);
      }
    }
    function Ek(e, t, a, i, o, s) {
      (s || t[cm] !== !0) && Yg(a, i);
    }
    function Ck(e, t, a, i, o) {
      (o || t[cm] !== !0) && Gg(a, i);
    }
    function Tk(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function xk(e) {
      yp(e);
    }
    var vf = Math.random().toString(36).slice(2), hf = "__reactFiber$" + vf, eS = "__reactProps$" + vf, kp = "__reactContainer$" + vf, tS = "__reactEvents$" + vf, wk = "__reactListeners$" + vf, Rk = "__reactHandles$" + vf;
    function kk(e) {
      delete e[hf], delete e[eS], delete e[tS], delete e[wk], delete e[Rk];
    }
    function Dp(e, t) {
      t[hf] = e;
    }
    function vm(e, t) {
      t[kp] = e;
    }
    function CE(e) {
      e[kp] = null;
    }
    function bp(e) {
      return !!e[kp];
    }
    function Rs(e) {
      var t = e[hf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[kp] || a[hf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = EE(e); o !== null; ) {
              var s = o[hf];
              if (s)
                return s;
              o = EE(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function su(e) {
      var t = e[hf] || e[kp];
      return t && (t.tag === j || t.tag === Z || t.tag === G || t.tag === M) ? t : null;
    }
    function mf(e) {
      if (e.tag === j || e.tag === Z)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function hm(e) {
      return e[eS] || null;
    }
    function nS(e, t) {
      e[eS] = t;
    }
    function Dk(e) {
      var t = e[tS];
      return t === void 0 && (t = e[tS] = /* @__PURE__ */ new Set()), t;
    }
    var TE = {}, xE = m.ReactDebugCurrentFrame;
    function mm(e) {
      if (e) {
        var t = e._owner, a = zu(e.type, e._source, t ? t.type : null);
        xE.setExtraStackFrame(a);
      } else
        xE.setExtraStackFrame(null);
    }
    function zi(e, t, a, i, o) {
      {
        var s = Function.call.bind(wn);
        for (var f in e)
          if (s(e, f)) {
            var h = void 0;
            try {
              if (typeof e[f] != "function") {
                var g = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              h = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              h = E;
            }
            h && !(h instanceof Error) && (mm(o), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof h), mm(null)), h instanceof Error && !(h.message in TE) && (TE[h.message] = !0, mm(o), y("Failed %s type: %s", a, h.message), mm(null));
          }
      }
    }
    var rS = [], ym;
    ym = [];
    var uo = -1;
    function cu(e) {
      return {
        current: e
      };
    }
    function Fr(e, t) {
      if (uo < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== ym[uo] && y("Unexpected Fiber popped."), e.current = rS[uo], rS[uo] = null, ym[uo] = null, uo--;
    }
    function Br(e, t, a) {
      uo++, rS[uo] = e.current, ym[uo] = a, e.current = t;
    }
    var aS;
    aS = {};
    var $a = {};
    Object.freeze($a);
    var so = cu($a), yl = cu(!1), iS = $a;
    function yf(e, t, a) {
      return a && gl(t) ? iS : so.current;
    }
    function wE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function gf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return $a;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var h = nt(e) || "Unknown";
          zi(i, s, "context", h);
        }
        return o && wE(e, t, s), s;
      }
    }
    function gm() {
      return yl.current;
    }
    function gl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Sm(e) {
      Fr(yl, e), Fr(so, e);
    }
    function lS(e) {
      Fr(yl, e), Fr(so, e);
    }
    function RE(e, t, a) {
      {
        if (so.current !== $a)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Br(so, t, e), Br(yl, a, e);
      }
    }
    function kE(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = nt(e) || "Unknown";
            aS[s] || (aS[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var h in f)
          if (!(h in o))
            throw new Error((nt(e) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
        {
          var g = nt(e) || "Unknown";
          zi(o, f, "child context", g);
        }
        return ft({}, a, f);
      }
    }
    function Em(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || $a;
        return iS = so.current, Br(so, a, e), Br(yl, yl.current, e), !0;
      }
    }
    function DE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = kE(e, t, iS);
          i.__reactInternalMemoizedMergedChildContext = o, Fr(yl, e), Fr(so, e), Br(so, o, e), Br(yl, a, e);
        } else
          Fr(yl, e), Br(yl, a, e);
      }
    }
    function bk(e) {
      {
        if (!Ld(e) || e.tag !== b)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case M:
              return t.stateNode.context;
            case b: {
              var a = t.type;
              if (gl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var fu = 0, Cm = 1, co = null, oS = !1, uS = !1;
    function bE(e) {
      co === null ? co = [e] : co.push(e);
    }
    function Nk(e) {
      oS = !0, bE(e);
    }
    function NE() {
      oS && du();
    }
    function du() {
      if (!uS && co !== null) {
        uS = !0;
        var e = 0, t = Ca();
        try {
          var a = !0, i = co;
          for (Mn(sr); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          co = null, oS = !1;
        } catch (s) {
          throw co !== null && (co = co.slice(e + 1)), gc(Ec, du), s;
        } finally {
          Mn(t), uS = !1;
        }
      }
      return null;
    }
    var Sf = [], Ef = 0, Tm = null, xm = 0, ui = [], si = 0, ks = null, fo = 1, po = "";
    function Mk(e) {
      return bs(), (e.flags & bd) !== Pe;
    }
    function Lk(e) {
      return bs(), xm;
    }
    function _k() {
      var e = po, t = fo, a = t & ~Ok(t);
      return a.toString(32) + e;
    }
    function Ds(e, t) {
      bs(), Sf[Ef++] = xm, Sf[Ef++] = Tm, Tm = e, xm = t;
    }
    function ME(e, t, a) {
      bs(), ui[si++] = fo, ui[si++] = po, ui[si++] = ks, ks = e;
      var i = fo, o = po, s = wm(i) - 1, f = i & ~(1 << s), h = a + 1, g = wm(t) + s;
      if (g > 30) {
        var E = s - s % 5, T = (1 << E) - 1, z = (f & T).toString(32), _ = f >> E, $ = s - E, Y = wm(t) + $, J = h << $, be = J | _, $e = z + o;
        fo = 1 << Y | be, po = $e;
      } else {
        var Be = h << s, gt = Be | f, pt = o;
        fo = 1 << g | gt, po = pt;
      }
    }
    function sS(e) {
      bs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ds(e, a), ME(e, a, i);
      }
    }
    function wm(e) {
      return 32 - kc(e);
    }
    function Ok(e) {
      return 1 << wm(e) - 1;
    }
    function cS(e) {
      for (; e === Tm; )
        Tm = Sf[--Ef], Sf[Ef] = null, xm = Sf[--Ef], Sf[Ef] = null;
      for (; e === ks; )
        ks = ui[--si], ui[si] = null, po = ui[--si], ui[si] = null, fo = ui[--si], ui[si] = null;
    }
    function zk() {
      return bs(), ks !== null ? {
        id: fo,
        overflow: po
      } : null;
    }
    function Uk(e, t) {
      bs(), ui[si++] = fo, ui[si++] = po, ui[si++] = ks, fo = t.id, po = t.overflow, ks = e;
    }
    function bs() {
      Er() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Sr = null, ci = null, Ui = !1, Ns = !1, pu = null;
    function Ak() {
      Ui && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function LE() {
      Ns = !0;
    }
    function Hk() {
      return Ns;
    }
    function Ik(e) {
      var t = e.stateNode.containerInfo;
      return ci = nk(t), Sr = e, Ui = !0, pu = null, Ns = !1, !0;
    }
    function Fk(e, t, a) {
      return ci = rk(t), Sr = e, Ui = !0, pu = null, Ns = !1, a !== null && Uk(e, a), !0;
    }
    function _E(e, t) {
      switch (e.tag) {
        case M: {
          pk(e.stateNode.containerInfo, t);
          break;
        }
        case j: {
          var a = (e.mode & ut) !== Ge;
          hk(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case G: {
          var i = e.memoizedState;
          i.dehydrated !== null && vk(i.dehydrated, t);
          break;
        }
      }
    }
    function OE(e, t) {
      _E(e, t);
      var a = jN();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Rt) : i.push(a);
    }
    function fS(e, t) {
      {
        if (Ns)
          return;
        switch (e.tag) {
          case M: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case j:
                var i = t.type;
                t.pendingProps, mk(a, i);
                break;
              case Z:
                var o = t.pendingProps;
                yk(a, o);
                break;
            }
            break;
          }
          case j: {
            var s = e.type, f = e.memoizedProps, h = e.stateNode;
            switch (t.tag) {
              case j: {
                var g = t.type, E = t.pendingProps, T = (e.mode & ut) !== Ge;
                Ek(
                  s,
                  f,
                  h,
                  g,
                  E,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case Z: {
                var z = t.pendingProps, _ = (e.mode & ut) !== Ge;
                Ck(
                  s,
                  f,
                  h,
                  z,
                  // TODO: Delete this argument when we remove the legacy root API.
                  _
                );
                break;
              }
            }
            break;
          }
          case G: {
            var $ = e.memoizedState, Y = $.dehydrated;
            if (Y !== null)
              switch (t.tag) {
                case j:
                  var J = t.type;
                  t.pendingProps, gk(Y, J);
                  break;
                case Z:
                  var be = t.pendingProps;
                  Sk(Y, be);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function zE(e, t) {
      t.flags = t.flags & ~ma | Bt, fS(e, t);
    }
    function UE(e, t) {
      switch (e.tag) {
        case j: {
          var a = e.type;
          e.pendingProps;
          var i = qR(t, a);
          return i !== null ? (e.stateNode = i, Sr = e, ci = tk(i), !0) : !1;
        }
        case Z: {
          var o = e.pendingProps, s = XR(t, o);
          return s !== null ? (e.stateNode = s, Sr = e, ci = null, !0) : !1;
        }
        case G: {
          var f = ZR(t);
          if (f !== null) {
            var h = {
              dehydrated: f,
              treeContext: zk(),
              retryLane: Hr
            };
            e.memoizedState = h;
            var g = PN(f);
            return g.return = e, e.child = g, Sr = e, ci = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function dS(e) {
      return (e.mode & ut) !== Ge && (e.flags & Ze) === Pe;
    }
    function pS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function vS(e) {
      if (Ui) {
        var t = ci;
        if (!t) {
          dS(e) && (fS(Sr, e), pS()), zE(Sr, e), Ui = !1, Sr = e;
          return;
        }
        var a = t;
        if (!UE(e, t)) {
          dS(e) && (fS(Sr, e), pS()), t = Rp(a);
          var i = Sr;
          if (!t || !UE(e, t)) {
            zE(Sr, e), Ui = !1, Sr = e;
            return;
          }
          OE(i, a);
        }
      }
    }
    function Bk(e, t, a) {
      var i = e.stateNode, o = !Ns, s = ak(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function Vk(e) {
      var t = e.stateNode, a = e.memoizedProps, i = ik(t, a, e);
      if (i) {
        var o = Sr;
        if (o !== null)
          switch (o.tag) {
            case M: {
              var s = o.stateNode.containerInfo, f = (o.mode & ut) !== Ge;
              fk(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case j: {
              var h = o.type, g = o.memoizedProps, E = o.stateNode, T = (o.mode & ut) !== Ge;
              dk(
                h,
                g,
                E,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                T
              );
              break;
            }
          }
      }
      return i;
    }
    function jk(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      lk(a, e);
    }
    function Pk(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return ok(a);
    }
    function AE(e) {
      for (var t = e.return; t !== null && t.tag !== j && t.tag !== M && t.tag !== G; )
        t = t.return;
      Sr = t;
    }
    function Rm(e) {
      if (e !== Sr)
        return !1;
      if (!Ui)
        return AE(e), Ui = !0, !1;
      if (e.tag !== M && (e.tag !== j || ck(e.type) && !Kg(e.type, e.memoizedProps))) {
        var t = ci;
        if (t)
          if (dS(e))
            HE(e), pS();
          else
            for (; t; )
              OE(e, t), t = Rp(t);
      }
      return AE(e), e.tag === G ? ci = Pk(e) : ci = Sr ? Rp(e.stateNode) : null, !0;
    }
    function $k() {
      return Ui && ci !== null;
    }
    function HE(e) {
      for (var t = ci; t; )
        _E(e, t), t = Rp(t);
    }
    function Cf() {
      Sr = null, ci = null, Ui = !1, Ns = !1;
    }
    function IE() {
      pu !== null && (_T(pu), pu = null);
    }
    function Er() {
      return Ui;
    }
    function hS(e) {
      pu === null ? pu = [e] : pu.push(e);
    }
    var Yk = m.ReactCurrentBatchConfig, Gk = null;
    function Wk() {
      return Yk.transition;
    }
    var Ai = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Qk = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Zt && (t = a), a = a.return;
        return t;
      }, Ms = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Np = [], Mp = [], Lp = [], _p = [], Op = [], zp = [], Ls = /* @__PURE__ */ new Set();
      Ai.recordUnsafeLifecycleWarnings = function(e, t) {
        Ls.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Np.push(e), e.mode & Zt && typeof t.UNSAFE_componentWillMount == "function" && Mp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Lp.push(e), e.mode & Zt && typeof t.UNSAFE_componentWillReceiveProps == "function" && _p.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Op.push(e), e.mode & Zt && typeof t.UNSAFE_componentWillUpdate == "function" && zp.push(e));
      }, Ai.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Np.length > 0 && (Np.forEach(function(_) {
          e.add(nt(_) || "Component"), Ls.add(_.type);
        }), Np = []);
        var t = /* @__PURE__ */ new Set();
        Mp.length > 0 && (Mp.forEach(function(_) {
          t.add(nt(_) || "Component"), Ls.add(_.type);
        }), Mp = []);
        var a = /* @__PURE__ */ new Set();
        Lp.length > 0 && (Lp.forEach(function(_) {
          a.add(nt(_) || "Component"), Ls.add(_.type);
        }), Lp = []);
        var i = /* @__PURE__ */ new Set();
        _p.length > 0 && (_p.forEach(function(_) {
          i.add(nt(_) || "Component"), Ls.add(_.type);
        }), _p = []);
        var o = /* @__PURE__ */ new Set();
        Op.length > 0 && (Op.forEach(function(_) {
          o.add(nt(_) || "Component"), Ls.add(_.type);
        }), Op = []);
        var s = /* @__PURE__ */ new Set();
        if (zp.length > 0 && (zp.forEach(function(_) {
          s.add(nt(_) || "Component"), Ls.add(_.type);
        }), zp = []), t.size > 0) {
          var f = Ms(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var h = Ms(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, h);
        }
        if (s.size > 0) {
          var g = Ms(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, g);
        }
        if (e.size > 0) {
          var E = Ms(e);
          w(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, E);
        }
        if (a.size > 0) {
          var T = Ms(a);
          w(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (o.size > 0) {
          var z = Ms(o);
          w(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, z);
        }
      };
      var km = /* @__PURE__ */ new Map(), FE = /* @__PURE__ */ new Set();
      Ai.recordLegacyContextWarning = function(e, t) {
        var a = Qk(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!FE.has(e.type)) {
          var i = km.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], km.set(a, i)), i.push(e));
        }
      }, Ai.flushLegacyContextWarning = function() {
        km.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(nt(s) || "Component"), FE.add(s.type);
            });
            var o = Ms(i);
            try {
              Lt(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              Dn();
            }
          }
        });
      }, Ai.discardPendingWarnings = function() {
        Np = [], Mp = [], Lp = [], _p = [], Op = [], zp = [], km = /* @__PURE__ */ new Map();
      };
    }
    function Hi(e, t) {
      if (e && e.defaultProps) {
        var a = ft({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var mS = cu(null), yS;
    yS = {};
    var Dm = null, Tf = null, gS = null, bm = !1;
    function Nm() {
      Dm = null, Tf = null, gS = null, bm = !1;
    }
    function BE() {
      bm = !0;
    }
    function VE() {
      bm = !1;
    }
    function jE(e, t, a) {
      Br(mS, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== yS && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = yS;
    }
    function SS(e, t) {
      var a = mS.current;
      Fr(mS, t), e._currentValue = a;
    }
    function ES(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (Xl(i.childLanes, t) ? o !== null && !Xl(o.childLanes, t) && (o.childLanes = it(o.childLanes, t)) : (i.childLanes = it(i.childLanes, t), o !== null && (o.childLanes = it(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Kk(e, t, a) {
      qk(e, t, a);
    }
    function qk(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === b) {
                var h = Nn(a), g = vo(Ht, h);
                g.tag = Lm;
                var E = i.updateQueue;
                if (E !== null) {
                  var T = E.shared, z = T.pending;
                  z === null ? g.next = g : (g.next = z.next, z.next = g), T.pending = g;
                }
              }
              i.lanes = it(i.lanes, a);
              var _ = i.alternate;
              _ !== null && (_.lanes = it(_.lanes, a)), ES(i.return, a, e), s.lanes = it(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === q)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === me) {
          var $ = i.return;
          if ($ === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          $.lanes = it($.lanes, a);
          var Y = $.alternate;
          Y !== null && (Y.lanes = it(Y.lanes, a)), ES($, a, e), o = i.sibling;
        } else
          o = i.child;
        if (o !== null)
          o.return = i;
        else
          for (o = i; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            var J = o.sibling;
            if (J !== null) {
              J.return = o.return, o = J;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function xf(e, t) {
      Dm = e, Tf = null, gS = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Ir(a.lanes, t) && Qp(), a.firstContext = null);
      }
    }
    function Pn(e) {
      bm && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (gS !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Tf === null) {
          if (Dm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Tf = a, Dm.dependencies = {
            lanes: te,
            firstContext: a
          };
        } else
          Tf = Tf.next = a;
      }
      return t;
    }
    var _s = null;
    function CS(e) {
      _s === null ? _s = [e] : _s.push(e);
    }
    function Xk() {
      if (_s !== null) {
        for (var e = 0; e < _s.length; e++) {
          var t = _s[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, o = t.pending;
            if (o !== null) {
              var s = o.next;
              o.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        _s = null;
      }
    }
    function PE(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, CS(t)) : (a.next = o.next, o.next = a), t.interleaved = a, Mm(e, i);
    }
    function Zk(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, CS(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function Jk(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, CS(t)) : (a.next = o.next, o.next = a), t.interleaved = a, Mm(e, i);
    }
    function ka(e, t) {
      return Mm(e, t);
    }
    var eD = Mm;
    function Mm(e, t) {
      e.lanes = it(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = it(a.lanes, t)), a === null && (e.flags & (Bt | ma)) !== Pe && $T(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = it(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = it(a.childLanes, t) : (o.flags & (Bt | ma)) !== Pe && $T(e), i = o, o = o.return;
      if (i.tag === M) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var $E = 0, YE = 1, Lm = 2, TS = 3, _m = !1, xS, Om;
    xS = !1, Om = null;
    function wS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: te
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function GE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var o = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = o;
      }
    }
    function vo(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: $E,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function vu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (Om === o && !xS && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), xS = !0), eN()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, eD(e, a);
      } else
        return Jk(e, o, t, a);
    }
    function zm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if ($d(a)) {
          var s = o.lanes;
          s = Gd(s, e.pendingLanes);
          var f = it(s, a);
          o.lanes = f, Qo(e, f);
        }
      }
    }
    function RS(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var s = null, f = null, h = a.firstBaseUpdate;
          if (h !== null) {
            var g = h;
            do {
              var E = {
                eventTime: g.eventTime,
                lane: g.lane,
                tag: g.tag,
                payload: g.payload,
                callback: g.callback,
                next: null
              };
              f === null ? s = f = E : (f.next = E, f = E), g = g.next;
            } while (g !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: o.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: o.shared,
            effects: o.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var T = a.lastBaseUpdate;
      T === null ? a.firstBaseUpdate = t : T.next = t, a.lastBaseUpdate = t;
    }
    function tD(e, t, a, i, o, s) {
      switch (a.tag) {
        case YE: {
          var f = a.payload;
          if (typeof f == "function") {
            BE();
            var h = f.call(s, i, o);
            {
              if (e.mode & Zt) {
                bn(!0);
                try {
                  f.call(s, i, o);
                } finally {
                  bn(!1);
                }
              }
              VE();
            }
            return h;
          }
          return f;
        }
        case TS:
          e.flags = e.flags & ~In | Ze;
        case $E: {
          var g = a.payload, E;
          if (typeof g == "function") {
            BE(), E = g.call(s, i, o);
            {
              if (e.mode & Zt) {
                bn(!0);
                try {
                  g.call(s, i, o);
                } finally {
                  bn(!1);
                }
              }
              VE();
            }
          } else
            E = g;
          return E == null ? i : ft({}, i, E);
        }
        case Lm:
          return _m = !0, i;
      }
      return i;
    }
    function Um(e, t, a, i) {
      var o = e.updateQueue;
      _m = !1, Om = o.shared;
      var s = o.firstBaseUpdate, f = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var g = h, E = g.next;
        g.next = null, f === null ? s = E : f.next = E, f = g;
        var T = e.alternate;
        if (T !== null) {
          var z = T.updateQueue, _ = z.lastBaseUpdate;
          _ !== f && (_ === null ? z.firstBaseUpdate = E : _.next = E, z.lastBaseUpdate = g);
        }
      }
      if (s !== null) {
        var $ = o.baseState, Y = te, J = null, be = null, $e = null, Be = s;
        do {
          var gt = Be.lane, pt = Be.eventTime;
          if (Xl(i, gt)) {
            if ($e !== null) {
              var ee = {
                eventTime: pt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: mt,
                tag: Be.tag,
                payload: Be.payload,
                callback: Be.callback,
                next: null
              };
              $e = $e.next = ee;
            }
            $ = tD(e, o, Be, $, t, a);
            var B = Be.callback;
            if (B !== null && // If the update was already committed, we should not queue its
            // callback again.
            Be.lane !== mt) {
              e.flags |= ni;
              var se = o.effects;
              se === null ? o.effects = [Be] : se.push(Be);
            }
          } else {
            var F = {
              eventTime: pt,
              lane: gt,
              tag: Be.tag,
              payload: Be.payload,
              callback: Be.callback,
              next: null
            };
            $e === null ? (be = $e = F, J = $) : $e = $e.next = F, Y = it(Y, gt);
          }
          if (Be = Be.next, Be === null) {
            if (h = o.shared.pending, h === null)
              break;
            var Ne = h, Te = Ne.next;
            Ne.next = null, Be = Te, o.lastBaseUpdate = Ne, o.shared.pending = null;
          }
        } while (!0);
        $e === null && (J = $), o.baseState = J, o.firstBaseUpdate = be, o.lastBaseUpdate = $e;
        var qe = o.shared.interleaved;
        if (qe !== null) {
          var tt = qe;
          do
            Y = it(Y, tt.lane), tt = tt.next;
          while (tt !== qe);
        } else
          s === null && (o.shared.lanes = te);
        lv(Y), e.lanes = Y, e.memoizedState = $;
      }
      Om = null;
    }
    function nD(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function WE() {
      _m = !1;
    }
    function Am() {
      return _m;
    }
    function QE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], f = s.callback;
          f !== null && (s.callback = null, nD(f, a));
        }
    }
    var kS = {}, KE = new d.Component().refs, DS, bS, NS, MS, LS, qE, Hm, _S, OS, zS;
    {
      DS = /* @__PURE__ */ new Set(), bS = /* @__PURE__ */ new Set(), NS = /* @__PURE__ */ new Set(), MS = /* @__PURE__ */ new Set(), _S = /* @__PURE__ */ new Set(), LS = /* @__PURE__ */ new Set(), OS = /* @__PURE__ */ new Set(), zS = /* @__PURE__ */ new Set();
      var XE = /* @__PURE__ */ new Set();
      Hm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          XE.has(a) || (XE.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, qE = function(e, t) {
        if (t === void 0) {
          var a = Ut(e) || "Component";
          LS.has(a) || (LS.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(kS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(kS);
    }
    function US(e, t, a, i) {
      var o = e.memoizedState, s = a(i, o);
      {
        if (e.mode & Zt) {
          bn(!0);
          try {
            s = a(i, o);
          } finally {
            bn(!1);
          }
        }
        qE(t, s);
      }
      var f = s == null ? o : ft({}, o, s);
      if (e.memoizedState = f, e.lanes === te) {
        var h = e.updateQueue;
        h.baseState = f;
      }
    }
    var AS = {
      isMounted: qr,
      enqueueSetState: function(e, t, a) {
        var i = va(e), o = na(), s = Tu(i), f = vo(o, s);
        f.payload = t, a != null && (Hm(a, "setState"), f.callback = a);
        var h = vu(i, f, s);
        h !== null && (nr(h, i, s, o), zm(h, i, s)), ul(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = va(e), o = na(), s = Tu(i), f = vo(o, s);
        f.tag = YE, f.payload = t, a != null && (Hm(a, "replaceState"), f.callback = a);
        var h = vu(i, f, s);
        h !== null && (nr(h, i, s, o), zm(h, i, s)), ul(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = va(e), i = na(), o = Tu(a), s = vo(i, o);
        s.tag = Lm, t != null && (Hm(t, "forceUpdate"), s.callback = t);
        var f = vu(a, s, o);
        f !== null && (nr(f, a, o, i), zm(f, a, o)), Bd(a, o);
      }
    };
    function ZE(e, t, a, i, o, s, f) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        var g = h.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Zt) {
            bn(!0);
            try {
              g = h.shouldComponentUpdate(i, s, f);
            } finally {
              bn(!1);
            }
          }
          g === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ut(t) || "Component");
        }
        return g;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !je(a, i) || !je(o, s) : !0;
    }
    function rD(e, t, a) {
      var i = e.stateNode;
      {
        var o = Ut(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !OS.has(t) && (OS.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ut(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var f = i.props !== a;
        i.props !== void 0 && f && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !NS.has(t) && (NS.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ut(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var h = i.state;
        h && (typeof h != "object" || An(h)) && y("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function JE(e, t) {
      t.updater = AS, e.stateNode = t, Io(t, e), t._reactInternalInstance = kS;
    }
    function eC(e, t, a) {
      var i = !1, o = $a, s = $a, f = t.contextType;
      if ("contextType" in t) {
        var h = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === Qf && f._context === void 0
        );
        if (!h && !zS.has(t)) {
          zS.add(t);
          var g = "";
          f === void 0 ? g = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? g = " However, it is set to a " + typeof f + "." : f.$$typeof === Wf ? g = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? g = " Did you accidentally pass the Context.Consumer instead?" : g = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ut(t) || "Component", g);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Pn(f);
      else {
        o = yf(e, t, !0);
        var E = t.contextTypes;
        i = E != null, s = i ? gf(e, o) : $a;
      }
      var T = new t(a, s);
      if (e.mode & Zt) {
        bn(!0);
        try {
          T = new t(a, s);
        } finally {
          bn(!1);
        }
      }
      var z = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      JE(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && z === null) {
          var _ = Ut(t) || "Component";
          bS.has(_) || (bS.add(_), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, T.state === null ? "null" : "undefined", _));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var $ = null, Y = null, J = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? $ = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && ($ = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? J = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (J = "UNSAFE_componentWillUpdate"), $ !== null || Y !== null || J !== null) {
            var be = Ut(t) || "Component", $e = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            MS.has(be) || (MS.add(be), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, be, $e, $ !== null ? `
  ` + $ : "", Y !== null ? `
  ` + Y : "", J !== null ? `
  ` + J : ""));
          }
        }
      }
      return i && wE(e, o, s), T;
    }
    function aD(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", nt(e) || "Component"), AS.enqueueReplaceState(t, t.state, null));
    }
    function tC(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = nt(e) || "Component";
          DS.has(s) || (DS.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        AS.enqueueReplaceState(t, t.state, null);
      }
    }
    function HS(e, t, a, i) {
      rD(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = KE, wS(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = Pn(s);
      else {
        var f = yf(e, t, !0);
        o.context = gf(e, f);
      }
      {
        if (o.state === a) {
          var h = Ut(t) || "Component";
          _S.has(h) || (_S.add(h), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", h));
        }
        e.mode & Zt && Ai.recordLegacyContextWarning(e, o), Ai.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var g = t.getDerivedStateFromProps;
      if (typeof g == "function" && (US(e, t, g, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (aD(e, o), Um(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var E = at;
        E |= _r, (e.mode & Sa) !== Ge && (E |= Or), e.flags |= E;
      }
    }
    function iD(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var f = o.context, h = t.contextType, g = $a;
      if (typeof h == "object" && h !== null)
        g = Pn(h);
      else {
        var E = yf(e, t, !0);
        g = gf(e, E);
      }
      var T = t.getDerivedStateFromProps, z = typeof T == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !z && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || f !== g) && tC(e, o, a, g), WE();
      var _ = e.memoizedState, $ = o.state = _;
      if (Um(e, a, o, i), $ = e.memoizedState, s === a && _ === $ && !gm() && !Am()) {
        if (typeof o.componentDidMount == "function") {
          var Y = at;
          Y |= _r, (e.mode & Sa) !== Ge && (Y |= Or), e.flags |= Y;
        }
        return !1;
      }
      typeof T == "function" && (US(e, t, T, a), $ = e.memoizedState);
      var J = Am() || ZE(e, t, s, a, _, $, g);
      if (J) {
        if (!z && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var be = at;
          be |= _r, (e.mode & Sa) !== Ge && (be |= Or), e.flags |= be;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var $e = at;
          $e |= _r, (e.mode & Sa) !== Ge && ($e |= Or), e.flags |= $e;
        }
        e.memoizedProps = a, e.memoizedState = $;
      }
      return o.props = a, o.state = $, o.context = g, J;
    }
    function lD(e, t, a, i, o) {
      var s = t.stateNode;
      GE(e, t);
      var f = t.memoizedProps, h = t.type === t.elementType ? f : Hi(t.type, f);
      s.props = h;
      var g = t.pendingProps, E = s.context, T = a.contextType, z = $a;
      if (typeof T == "object" && T !== null)
        z = Pn(T);
      else {
        var _ = yf(t, a, !0);
        z = gf(t, _);
      }
      var $ = a.getDerivedStateFromProps, Y = typeof $ == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !Y && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== g || E !== z) && tC(t, s, i, z), WE();
      var J = t.memoizedState, be = s.state = J;
      if (Um(t, i, s, o), be = t.memoizedState, f === g && J === be && !gm() && !Am() && !De)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= at), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= ha), !1;
      typeof $ == "function" && (US(t, a, $, i), be = t.memoizedState);
      var $e = Am() || ZE(t, a, h, i, J, be, z) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      De;
      return $e ? (!Y && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, be, z), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, be, z)), typeof s.componentDidUpdate == "function" && (t.flags |= at), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= ha)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= at), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= ha), t.memoizedProps = i, t.memoizedState = be), s.props = i, s.state = be, s.context = z, $e;
    }
    var IS, FS, BS, VS, jS, nC = function(e, t) {
    };
    IS = !1, FS = !1, BS = {}, VS = {}, jS = {}, nC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = nt(t) || "Component";
        VS[a] || (VS[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Up(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Zt || Un) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var o = nt(e) || "Component";
          BS[o] || (y('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), BS[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var h = s;
            if (h.tag !== b)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = h.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var g = f;
          Za(i, "ref");
          var E = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === E)
            return t.ref;
          var T = function(z) {
            var _ = g.refs;
            _ === KE && (_ = g.refs = {}), z === null ? delete _[E] : _[E] = z;
          };
          return T._stringRef = E, T;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Im(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Fm(e) {
      {
        var t = nt(e) || "Component";
        if (jS[t])
          return;
        jS[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function rC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function aC(e) {
      function t(F, ee) {
        if (e) {
          var B = F.deletions;
          B === null ? (F.deletions = [ee], F.flags |= Rt) : B.push(ee);
        }
      }
      function a(F, ee) {
        if (!e)
          return null;
        for (var B = ee; B !== null; )
          t(F, B), B = B.sibling;
        return null;
      }
      function i(F, ee) {
        for (var B = /* @__PURE__ */ new Map(), se = ee; se !== null; )
          se.key !== null ? B.set(se.key, se) : B.set(se.index, se), se = se.sibling;
        return B;
      }
      function o(F, ee) {
        var B = Bs(F, ee);
        return B.index = 0, B.sibling = null, B;
      }
      function s(F, ee, B) {
        if (F.index = B, !e)
          return F.flags |= bd, ee;
        var se = F.alternate;
        if (se !== null) {
          var Ne = se.index;
          return Ne < ee ? (F.flags |= Bt, ee) : Ne;
        } else
          return F.flags |= Bt, ee;
      }
      function f(F) {
        return e && F.alternate === null && (F.flags |= Bt), F;
      }
      function h(F, ee, B, se) {
        if (ee === null || ee.tag !== Z) {
          var Ne = h1(B, F.mode, se);
          return Ne.return = F, Ne;
        } else {
          var Te = o(ee, B);
          return Te.return = F, Te;
        }
      }
      function g(F, ee, B, se) {
        var Ne = B.type;
        if (Ne === mi)
          return T(F, ee, B.props.children, se, B.key);
        if (ee !== null && (ee.elementType === Ne || // Keep this check inline so it only runs on the false path:
        QT(ee, B) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ne == "object" && Ne !== null && Ne.$$typeof === yr && rC(Ne) === ee.type)) {
          var Te = o(ee, B.props);
          return Te.ref = Up(F, ee, B), Te.return = F, Te._debugSource = B._source, Te._debugOwner = B._owner, Te;
        }
        var qe = v1(B, F.mode, se);
        return qe.ref = Up(F, ee, B), qe.return = F, qe;
      }
      function E(F, ee, B, se) {
        if (ee === null || ee.tag !== U || ee.stateNode.containerInfo !== B.containerInfo || ee.stateNode.implementation !== B.implementation) {
          var Ne = m1(B, F.mode, se);
          return Ne.return = F, Ne;
        } else {
          var Te = o(ee, B.children || []);
          return Te.return = F, Te;
        }
      }
      function T(F, ee, B, se, Ne) {
        if (ee === null || ee.tag !== H) {
          var Te = wu(B, F.mode, se, Ne);
          return Te.return = F, Te;
        } else {
          var qe = o(ee, B);
          return qe.return = F, qe;
        }
      }
      function z(F, ee, B) {
        if (typeof ee == "string" && ee !== "" || typeof ee == "number") {
          var se = h1("" + ee, F.mode, B);
          return se.return = F, se;
        }
        if (typeof ee == "object" && ee !== null) {
          switch (ee.$$typeof) {
            case xo: {
              var Ne = v1(ee, F.mode, B);
              return Ne.ref = Up(F, null, ee), Ne.return = F, Ne;
            }
            case Ua: {
              var Te = m1(ee, F.mode, B);
              return Te.return = F, Te;
            }
            case yr: {
              var qe = ee._payload, tt = ee._init;
              return z(F, tt(qe), B);
            }
          }
          if (An(ee) || yi(ee)) {
            var Ot = wu(ee, F.mode, B, null);
            return Ot.return = F, Ot;
          }
          Im(F, ee);
        }
        return typeof ee == "function" && Fm(F), null;
      }
      function _(F, ee, B, se) {
        var Ne = ee !== null ? ee.key : null;
        if (typeof B == "string" && B !== "" || typeof B == "number")
          return Ne !== null ? null : h(F, ee, "" + B, se);
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case xo:
              return B.key === Ne ? g(F, ee, B, se) : null;
            case Ua:
              return B.key === Ne ? E(F, ee, B, se) : null;
            case yr: {
              var Te = B._payload, qe = B._init;
              return _(F, ee, qe(Te), se);
            }
          }
          if (An(B) || yi(B))
            return Ne !== null ? null : T(F, ee, B, se, null);
          Im(F, B);
        }
        return typeof B == "function" && Fm(F), null;
      }
      function $(F, ee, B, se, Ne) {
        if (typeof se == "string" && se !== "" || typeof se == "number") {
          var Te = F.get(B) || null;
          return h(ee, Te, "" + se, Ne);
        }
        if (typeof se == "object" && se !== null) {
          switch (se.$$typeof) {
            case xo: {
              var qe = F.get(se.key === null ? B : se.key) || null;
              return g(ee, qe, se, Ne);
            }
            case Ua: {
              var tt = F.get(se.key === null ? B : se.key) || null;
              return E(ee, tt, se, Ne);
            }
            case yr:
              var Ot = se._payload, Tt = se._init;
              return $(F, ee, B, Tt(Ot), Ne);
          }
          if (An(se) || yi(se)) {
            var On = F.get(B) || null;
            return T(ee, On, se, Ne, null);
          }
          Im(ee, se);
        }
        return typeof se == "function" && Fm(ee), null;
      }
      function Y(F, ee, B) {
        {
          if (typeof F != "object" || F === null)
            return ee;
          switch (F.$$typeof) {
            case xo:
            case Ua:
              nC(F, B);
              var se = F.key;
              if (typeof se != "string")
                break;
              if (ee === null) {
                ee = /* @__PURE__ */ new Set(), ee.add(se);
                break;
              }
              if (!ee.has(se)) {
                ee.add(se);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", se);
              break;
            case yr:
              var Ne = F._payload, Te = F._init;
              Y(Te(Ne), ee, B);
              break;
          }
        }
        return ee;
      }
      function J(F, ee, B, se) {
        for (var Ne = null, Te = 0; Te < B.length; Te++) {
          var qe = B[Te];
          Ne = Y(qe, Ne, F);
        }
        for (var tt = null, Ot = null, Tt = ee, On = 0, xt = 0, xn = null; Tt !== null && xt < B.length; xt++) {
          Tt.index > xt ? (xn = Tt, Tt = null) : xn = Tt.sibling;
          var jr = _(F, Tt, B[xt], se);
          if (jr === null) {
            Tt === null && (Tt = xn);
            break;
          }
          e && Tt && jr.alternate === null && t(F, Tt), On = s(jr, On, xt), Ot === null ? tt = jr : Ot.sibling = jr, Ot = jr, Tt = xn;
        }
        if (xt === B.length) {
          if (a(F, Tt), Er()) {
            var Dr = xt;
            Ds(F, Dr);
          }
          return tt;
        }
        if (Tt === null) {
          for (; xt < B.length; xt++) {
            var Ga = z(F, B[xt], se);
            Ga !== null && (On = s(Ga, On, xt), Ot === null ? tt = Ga : Ot.sibling = Ga, Ot = Ga);
          }
          if (Er()) {
            var ra = xt;
            Ds(F, ra);
          }
          return tt;
        }
        for (var aa = i(F, Tt); xt < B.length; xt++) {
          var Pr = $(aa, F, xt, B[xt], se);
          Pr !== null && (e && Pr.alternate !== null && aa.delete(Pr.key === null ? xt : Pr.key), On = s(Pr, On, xt), Ot === null ? tt = Pr : Ot.sibling = Pr, Ot = Pr);
        }
        if (e && aa.forEach(function(Bf) {
          return t(F, Bf);
        }), Er()) {
          var Eo = xt;
          Ds(F, Eo);
        }
        return tt;
      }
      function be(F, ee, B, se) {
        var Ne = yi(B);
        if (typeof Ne != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          B[Symbol.toStringTag] === "Generator" && (FS || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), FS = !0), B.entries === Ne && (IS || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), IS = !0);
          var Te = Ne.call(B);
          if (Te)
            for (var qe = null, tt = Te.next(); !tt.done; tt = Te.next()) {
              var Ot = tt.value;
              qe = Y(Ot, qe, F);
            }
        }
        var Tt = Ne.call(B);
        if (Tt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var On = null, xt = null, xn = ee, jr = 0, Dr = 0, Ga = null, ra = Tt.next(); xn !== null && !ra.done; Dr++, ra = Tt.next()) {
          xn.index > Dr ? (Ga = xn, xn = null) : Ga = xn.sibling;
          var aa = _(F, xn, ra.value, se);
          if (aa === null) {
            xn === null && (xn = Ga);
            break;
          }
          e && xn && aa.alternate === null && t(F, xn), jr = s(aa, jr, Dr), xt === null ? On = aa : xt.sibling = aa, xt = aa, xn = Ga;
        }
        if (ra.done) {
          if (a(F, xn), Er()) {
            var Pr = Dr;
            Ds(F, Pr);
          }
          return On;
        }
        if (xn === null) {
          for (; !ra.done; Dr++, ra = Tt.next()) {
            var Eo = z(F, ra.value, se);
            Eo !== null && (jr = s(Eo, jr, Dr), xt === null ? On = Eo : xt.sibling = Eo, xt = Eo);
          }
          if (Er()) {
            var Bf = Dr;
            Ds(F, Bf);
          }
          return On;
        }
        for (var fv = i(F, xn); !ra.done; Dr++, ra = Tt.next()) {
          var kl = $(fv, F, Dr, ra.value, se);
          kl !== null && (e && kl.alternate !== null && fv.delete(kl.key === null ? Dr : kl.key), jr = s(kl, jr, Dr), xt === null ? On = kl : xt.sibling = kl, xt = kl);
        }
        if (e && fv.forEach(function(EM) {
          return t(F, EM);
        }), Er()) {
          var SM = Dr;
          Ds(F, SM);
        }
        return On;
      }
      function $e(F, ee, B, se) {
        if (ee !== null && ee.tag === Z) {
          a(F, ee.sibling);
          var Ne = o(ee, B);
          return Ne.return = F, Ne;
        }
        a(F, ee);
        var Te = h1(B, F.mode, se);
        return Te.return = F, Te;
      }
      function Be(F, ee, B, se) {
        for (var Ne = B.key, Te = ee; Te !== null; ) {
          if (Te.key === Ne) {
            var qe = B.type;
            if (qe === mi) {
              if (Te.tag === H) {
                a(F, Te.sibling);
                var tt = o(Te, B.props.children);
                return tt.return = F, tt._debugSource = B._source, tt._debugOwner = B._owner, tt;
              }
            } else if (Te.elementType === qe || // Keep this check inline so it only runs on the false path:
            QT(Te, B) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof qe == "object" && qe !== null && qe.$$typeof === yr && rC(qe) === Te.type) {
              a(F, Te.sibling);
              var Ot = o(Te, B.props);
              return Ot.ref = Up(F, Te, B), Ot.return = F, Ot._debugSource = B._source, Ot._debugOwner = B._owner, Ot;
            }
            a(F, Te);
            break;
          } else
            t(F, Te);
          Te = Te.sibling;
        }
        if (B.type === mi) {
          var Tt = wu(B.props.children, F.mode, se, B.key);
          return Tt.return = F, Tt;
        } else {
          var On = v1(B, F.mode, se);
          return On.ref = Up(F, ee, B), On.return = F, On;
        }
      }
      function gt(F, ee, B, se) {
        for (var Ne = B.key, Te = ee; Te !== null; ) {
          if (Te.key === Ne)
            if (Te.tag === U && Te.stateNode.containerInfo === B.containerInfo && Te.stateNode.implementation === B.implementation) {
              a(F, Te.sibling);
              var qe = o(Te, B.children || []);
              return qe.return = F, qe;
            } else {
              a(F, Te);
              break;
            }
          else
            t(F, Te);
          Te = Te.sibling;
        }
        var tt = m1(B, F.mode, se);
        return tt.return = F, tt;
      }
      function pt(F, ee, B, se) {
        var Ne = typeof B == "object" && B !== null && B.type === mi && B.key === null;
        if (Ne && (B = B.props.children), typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case xo:
              return f(Be(F, ee, B, se));
            case Ua:
              return f(gt(F, ee, B, se));
            case yr:
              var Te = B._payload, qe = B._init;
              return pt(F, ee, qe(Te), se);
          }
          if (An(B))
            return J(F, ee, B, se);
          if (yi(B))
            return be(F, ee, B, se);
          Im(F, B);
        }
        return typeof B == "string" && B !== "" || typeof B == "number" ? f($e(F, ee, "" + B, se)) : (typeof B == "function" && Fm(F), a(F, ee));
      }
      return pt;
    }
    var wf = aC(!0), iC = aC(!1);
    function oD(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Bs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Bs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function uD(e, t) {
      for (var a = e.child; a !== null; )
        HN(a, t), a = a.sibling;
    }
    var Ap = {}, hu = cu(Ap), Hp = cu(Ap), Bm = cu(Ap);
    function Vm(e) {
      if (e === Ap)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function lC() {
      var e = Vm(Bm.current);
      return e;
    }
    function PS(e, t) {
      Br(Bm, t, e), Br(Hp, e, e), Br(hu, Ap, e);
      var a = TR(t);
      Fr(hu, e), Br(hu, a, e);
    }
    function Rf(e) {
      Fr(hu, e), Fr(Hp, e), Fr(Bm, e);
    }
    function $S() {
      var e = Vm(hu.current);
      return e;
    }
    function oC(e) {
      Vm(Bm.current);
      var t = Vm(hu.current), a = xR(t, e.type);
      t !== a && (Br(Hp, e, e), Br(hu, a, e));
    }
    function YS(e) {
      Hp.current === e && (Fr(hu, e), Fr(Hp, e));
    }
    var sD = 0, uC = 1, sC = 1, Ip = 2, Ii = cu(sD);
    function GS(e, t) {
      return (e & t) !== 0;
    }
    function kf(e) {
      return e & uC;
    }
    function WS(e, t) {
      return e & uC | t;
    }
    function cD(e, t) {
      return e | t;
    }
    function mu(e, t) {
      Br(Ii, t, e);
    }
    function Df(e) {
      Fr(Ii, e);
    }
    function fD(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function jm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === G) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || SE(i) || Jg(i))
              return t;
          }
        } else if (t.tag === Ce && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & Ze) !== Pe;
          if (o)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Da = (
      /*   */
      0
    ), Kn = (
      /* */
      1
    ), Sl = (
      /*  */
      2
    ), qn = (
      /*    */
      4
    ), Cr = (
      /*   */
      8
    ), QS = [];
    function KS() {
      for (var e = 0; e < QS.length; e++) {
        var t = QS[e];
        t._workInProgressVersionPrimary = null;
      }
      QS.length = 0;
    }
    function dD(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Re = m.ReactCurrentDispatcher, Fp = m.ReactCurrentBatchConfig, qS, bf;
    qS = /* @__PURE__ */ new Set();
    var Os = te, _t = null, Xn = null, Zn = null, Pm = !1, Bp = !1, Vp = 0, pD = 0, vD = 25, re = null, fi = null, yu = -1, XS = !1;
    function bt() {
      {
        var e = re;
        fi === null ? fi = [e] : fi.push(e);
      }
    }
    function ge() {
      {
        var e = re;
        fi !== null && (yu++, fi[yu] !== e && hD(e));
      }
    }
    function Nf(e) {
      e != null && !An(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", re, typeof e);
    }
    function hD(e) {
      {
        var t = nt(_t);
        if (!qS.has(t) && (qS.add(t), fi !== null)) {
          for (var a = "", i = 30, o = 0; o <= yu; o++) {
            for (var s = fi[o], f = o === yu ? e : s, h = o + 1 + ". " + s; h.length < i; )
              h += " ";
            h += f + `
`, a += h;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Vr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function ZS(e, t) {
      if (XS)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", re), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, re, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Oe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Mf(e, t, a, i, o, s) {
      Os = s, _t = t, fi = e !== null ? e._debugHookTypes : null, yu = -1, XS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = te, e !== null && e.memoizedState !== null ? Re.current = LC : fi !== null ? Re.current = MC : Re.current = NC;
      var f = a(i, o);
      if (Bp) {
        var h = 0;
        do {
          if (Bp = !1, Vp = 0, h >= vD)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          h += 1, XS = !1, Xn = null, Zn = null, t.updateQueue = null, yu = -1, Re.current = _C, f = a(i, o);
        } while (Bp);
      }
      Re.current = ny, t._debugHookTypes = fi;
      var g = Xn !== null && Xn.next !== null;
      if (Os = te, _t = null, Xn = null, Zn = null, re = null, fi = null, yu = -1, e !== null && (e.flags & Gn) !== (t.flags & Gn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ut) !== Ge && y("Internal React error: Expected static flag was missing. Please notify the React team."), Pm = !1, g)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Lf() {
      var e = Vp !== 0;
      return Vp = 0, e;
    }
    function cC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Sa) !== Ge ? t.flags &= ~(Vl | Or | Qt | at) : t.flags &= ~(Qt | at), e.lanes = Wo(e.lanes, a);
    }
    function fC() {
      if (Re.current = ny, Pm) {
        for (var e = _t.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Pm = !1;
      }
      Os = te, _t = null, Xn = null, Zn = null, fi = null, yu = -1, re = null, wC = !1, Bp = !1, Vp = 0;
    }
    function El() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Zn === null ? _t.memoizedState = Zn = e : Zn = Zn.next = e, Zn;
    }
    function di() {
      var e;
      if (Xn === null) {
        var t = _t.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Xn.next;
      var a;
      if (Zn === null ? a = _t.memoizedState : a = Zn.next, a !== null)
        Zn = a, a = Zn.next, Xn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Xn = e;
        var i = {
          memoizedState: Xn.memoizedState,
          baseState: Xn.baseState,
          baseQueue: Xn.baseQueue,
          queue: Xn.queue,
          next: null
        };
        Zn === null ? _t.memoizedState = Zn = i : Zn = Zn.next = i;
      }
      return Zn;
    }
    function dC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function JS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function e0(e, t, a) {
      var i = El(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var s = {
        pending: null,
        interleaved: null,
        lanes: te,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = s;
      var f = s.dispatch = SD.bind(null, _t, s);
      return [i.memoizedState, f];
    }
    function t0(e, t, a) {
      var i = di(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = Xn, f = s.baseQueue, h = o.pending;
      if (h !== null) {
        if (f !== null) {
          var g = f.next, E = h.next;
          f.next = E, h.next = g;
        }
        s.baseQueue !== f && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = h, o.pending = null;
      }
      if (f !== null) {
        var T = f.next, z = s.baseState, _ = null, $ = null, Y = null, J = T;
        do {
          var be = J.lane;
          if (Xl(Os, be)) {
            if (Y !== null) {
              var Be = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: mt,
                action: J.action,
                hasEagerState: J.hasEagerState,
                eagerState: J.eagerState,
                next: null
              };
              Y = Y.next = Be;
            }
            if (J.hasEagerState)
              z = J.eagerState;
            else {
              var gt = J.action;
              z = e(z, gt);
            }
          } else {
            var $e = {
              lane: be,
              action: J.action,
              hasEagerState: J.hasEagerState,
              eagerState: J.eagerState,
              next: null
            };
            Y === null ? ($ = Y = $e, _ = z) : Y = Y.next = $e, _t.lanes = it(_t.lanes, be), lv(be);
          }
          J = J.next;
        } while (J !== null && J !== T);
        Y === null ? _ = z : Y.next = $, Oe(z, i.memoizedState) || Qp(), i.memoizedState = z, i.baseState = _, i.baseQueue = Y, o.lastRenderedState = z;
      }
      var pt = o.interleaved;
      if (pt !== null) {
        var F = pt;
        do {
          var ee = F.lane;
          _t.lanes = it(_t.lanes, ee), lv(ee), F = F.next;
        } while (F !== pt);
      } else
        f === null && (o.lanes = te);
      var B = o.dispatch;
      return [i.memoizedState, B];
    }
    function n0(e, t, a) {
      var i = di(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = o.dispatch, f = o.pending, h = i.memoizedState;
      if (f !== null) {
        o.pending = null;
        var g = f.next, E = g;
        do {
          var T = E.action;
          h = e(h, T), E = E.next;
        } while (E !== g);
        Oe(h, i.memoizedState) || Qp(), i.memoizedState = h, i.baseQueue === null && (i.baseState = h), o.lastRenderedState = h;
      }
      return [h, s];
    }
    function U_(e, t, a) {
    }
    function A_(e, t, a) {
    }
    function r0(e, t, a) {
      var i = _t, o = El(), s, f = Er();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), bf || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), bf = !0);
      } else {
        if (s = t(), !bf) {
          var h = t();
          Oe(s, h) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), bf = !0);
        }
        var g = Ey();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        cs(g, Os) || pC(i, t, s);
      }
      o.memoizedState = s;
      var E = {
        value: s,
        getSnapshot: t
      };
      return o.queue = E, Qm(hC.bind(null, i, E, e), [e]), i.flags |= Qt, jp(Kn | Cr, vC.bind(null, i, E, s, t), void 0, null), s;
    }
    function $m(e, t, a) {
      var i = _t, o = di(), s = t();
      if (!bf) {
        var f = t();
        Oe(s, f) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), bf = !0);
      }
      var h = o.memoizedState, g = !Oe(h, s);
      g && (o.memoizedState = s, Qp());
      var E = o.queue;
      if ($p(hC.bind(null, i, E, e), [e]), E.getSnapshot !== t || g || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Zn !== null && Zn.memoizedState.tag & Kn) {
        i.flags |= Qt, jp(Kn | Cr, vC.bind(null, i, E, s, t), void 0, null);
        var T = Ey();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        cs(T, Os) || pC(i, t, s);
      }
      return s;
    }
    function pC(e, t, a) {
      e.flags |= ts;
      var i = {
        getSnapshot: t,
        value: a
      }, o = _t.updateQueue;
      if (o === null)
        o = dC(), _t.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function vC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, mC(t) && yC(e);
    }
    function hC(e, t, a) {
      var i = function() {
        mC(t) && yC(e);
      };
      return a(i);
    }
    function mC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Oe(a, i);
      } catch {
        return !0;
      }
    }
    function yC(e) {
      var t = ka(e, Ke);
      t !== null && nr(t, e, Ke, Ht);
    }
    function Ym(e) {
      var t = El();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: te,
        dispatch: null,
        lastRenderedReducer: JS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = ED.bind(null, _t, a);
      return [t.memoizedState, i];
    }
    function a0(e) {
      return t0(JS);
    }
    function i0(e) {
      return n0(JS);
    }
    function jp(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = _t.updateQueue;
      if (s === null)
        s = dC(), _t.updateQueue = s, s.lastEffect = o.next = o;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = o.next = o;
        else {
          var h = f.next;
          f.next = o, o.next = h, s.lastEffect = o;
        }
      }
      return o;
    }
    function l0(e) {
      var t = El();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Gm(e) {
      var t = di();
      return t.memoizedState;
    }
    function Pp(e, t, a, i) {
      var o = El(), s = i === void 0 ? null : i;
      _t.flags |= e, o.memoizedState = jp(Kn | t, a, void 0, s);
    }
    function Wm(e, t, a, i) {
      var o = di(), s = i === void 0 ? null : i, f = void 0;
      if (Xn !== null) {
        var h = Xn.memoizedState;
        if (f = h.destroy, s !== null) {
          var g = h.deps;
          if (ZS(s, g)) {
            o.memoizedState = jp(t, a, f, s);
            return;
          }
        }
      }
      _t.flags |= e, o.memoizedState = jp(Kn | t, a, f, s);
    }
    function Qm(e, t) {
      return (_t.mode & Sa) !== Ge ? Pp(Vl | Qt | nl, Cr, e, t) : Pp(Qt | nl, Cr, e, t);
    }
    function $p(e, t) {
      return Wm(Qt, Cr, e, t);
    }
    function o0(e, t) {
      return Pp(at, Sl, e, t);
    }
    function Km(e, t) {
      return Wm(at, Sl, e, t);
    }
    function u0(e, t) {
      var a = at;
      return a |= _r, (_t.mode & Sa) !== Ge && (a |= Or), Pp(a, qn, e, t);
    }
    function qm(e, t) {
      return Wm(at, qn, e, t);
    }
    function gC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var o = t;
        o.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
        var s = e();
        return o.current = s, function() {
          o.current = null;
        };
      }
    }
    function s0(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = at;
      return o |= _r, (_t.mode & Sa) !== Ge && (o |= Or), Pp(o, qn, gC.bind(null, t, e), i);
    }
    function Xm(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Wm(at, qn, gC.bind(null, t, e), i);
    }
    function mD(e, t) {
    }
    var Zm = mD;
    function c0(e, t) {
      var a = El(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Jm(e, t) {
      var a = di(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (ZS(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function f0(e, t) {
      var a = El(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function ey(e, t) {
      var a = di(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (ZS(i, s))
          return o[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function d0(e) {
      var t = El();
      return t.memoizedState = e, e;
    }
    function SC(e) {
      var t = di(), a = Xn, i = a.memoizedState;
      return CC(t, i, e);
    }
    function EC(e) {
      var t = di();
      if (Xn === null)
        return t.memoizedState = e, e;
      var a = Xn.memoizedState;
      return CC(t, a, e);
    }
    function CC(e, t, a) {
      var i = !gg(Os);
      if (i) {
        if (!Oe(a, t)) {
          var o = Yd();
          _t.lanes = it(_t.lanes, o), lv(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Qp()), e.memoizedState = a, a;
    }
    function yD(e, t, a) {
      var i = Ca();
      Mn(cr(i, Qn)), e(!0);
      var o = Fp.transition;
      Fp.transition = {};
      var s = Fp.transition;
      Fp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Mn(i), Fp.transition = o, o === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && w("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function p0() {
      var e = Ym(!1), t = e[0], a = e[1], i = yD.bind(null, a), o = El();
      return o.memoizedState = i, [t, i];
    }
    function TC() {
      var e = a0(), t = e[0], a = di(), i = a.memoizedState;
      return [t, i];
    }
    function xC() {
      var e = i0(), t = e[0], a = di(), i = a.memoizedState;
      return [t, i];
    }
    var wC = !1;
    function gD() {
      return wC;
    }
    function v0() {
      var e = El(), t = Ey(), a = t.identifierPrefix, i;
      if (Er()) {
        var o = _k();
        i = ":" + a + "R" + o;
        var s = Vp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = pD++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function ty() {
      var e = di(), t = e.memoizedState;
      return t;
    }
    function SD(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Tu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (RC(e))
        kC(t, o);
      else {
        var s = PE(e, t, o, i);
        if (s !== null) {
          var f = na();
          nr(s, e, i, f), DC(s, t, i);
        }
      }
      bC(e, i);
    }
    function ED(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Tu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (RC(e))
        kC(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === te && (s === null || s.lanes === te)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var h;
            h = Re.current, Re.current = Fi;
            try {
              var g = t.lastRenderedState, E = f(g, a);
              if (o.hasEagerState = !0, o.eagerState = E, Oe(E, g)) {
                Zk(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              Re.current = h;
            }
          }
        }
        var T = PE(e, t, o, i);
        if (T !== null) {
          var z = na();
          nr(T, e, i, z), DC(T, t, i);
        }
      }
      bC(e, i);
    }
    function RC(e) {
      var t = e.alternate;
      return e === _t || t !== null && t === _t;
    }
    function kC(e, t) {
      Bp = Pm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function DC(e, t, a) {
      if ($d(a)) {
        var i = t.lanes;
        i = Gd(i, e.pendingLanes);
        var o = it(i, a);
        t.lanes = o, Qo(e, o);
      }
    }
    function bC(e, t, a) {
      ul(e, t);
    }
    var ny = {
      readContext: Pn,
      useCallback: Vr,
      useContext: Vr,
      useEffect: Vr,
      useImperativeHandle: Vr,
      useInsertionEffect: Vr,
      useLayoutEffect: Vr,
      useMemo: Vr,
      useReducer: Vr,
      useRef: Vr,
      useState: Vr,
      useDebugValue: Vr,
      useDeferredValue: Vr,
      useTransition: Vr,
      useMutableSource: Vr,
      useSyncExternalStore: Vr,
      useId: Vr,
      unstable_isNewReconciler: ue
    }, NC = null, MC = null, LC = null, _C = null, Cl = null, Fi = null, ry = null;
    {
      var h0 = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, et = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      NC = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", bt(), Nf(t), c0(e, t);
        },
        useContext: function(e) {
          return re = "useContext", bt(), Pn(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", bt(), Nf(t), Qm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", bt(), Nf(a), s0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", bt(), Nf(t), o0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", bt(), Nf(t), u0(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", bt(), Nf(t);
          var a = Re.current;
          Re.current = Cl;
          try {
            return f0(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", bt();
          var i = Re.current;
          Re.current = Cl;
          try {
            return e0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", bt(), l0(e);
        },
        useState: function(e) {
          re = "useState", bt();
          var t = Re.current;
          Re.current = Cl;
          try {
            return Ym(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", bt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", bt(), d0(e);
        },
        useTransition: function() {
          return re = "useTransition", bt(), p0();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", bt(), r0(e, t, a);
        },
        useId: function() {
          return re = "useId", bt(), v0();
        },
        unstable_isNewReconciler: ue
      }, MC = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", ge(), c0(e, t);
        },
        useContext: function(e) {
          return re = "useContext", ge(), Pn(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", ge(), Qm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", ge(), s0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", ge(), o0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", ge(), u0(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", ge();
          var a = Re.current;
          Re.current = Cl;
          try {
            return f0(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", ge();
          var i = Re.current;
          Re.current = Cl;
          try {
            return e0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", ge(), l0(e);
        },
        useState: function(e) {
          re = "useState", ge();
          var t = Re.current;
          Re.current = Cl;
          try {
            return Ym(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", ge(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", ge(), d0(e);
        },
        useTransition: function() {
          return re = "useTransition", ge(), p0();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", ge(), r0(e, t, a);
        },
        useId: function() {
          return re = "useId", ge(), v0();
        },
        unstable_isNewReconciler: ue
      }, LC = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", ge(), Jm(e, t);
        },
        useContext: function(e) {
          return re = "useContext", ge(), Pn(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", ge(), $p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", ge(), Xm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", ge(), Km(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", ge(), qm(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", ge();
          var a = Re.current;
          Re.current = Fi;
          try {
            return ey(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", ge();
          var i = Re.current;
          Re.current = Fi;
          try {
            return t0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", ge(), Gm();
        },
        useState: function(e) {
          re = "useState", ge();
          var t = Re.current;
          Re.current = Fi;
          try {
            return a0(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", ge(), Zm();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", ge(), SC(e);
        },
        useTransition: function() {
          return re = "useTransition", ge(), TC();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", ge(), $m(e, t);
        },
        useId: function() {
          return re = "useId", ge(), ty();
        },
        unstable_isNewReconciler: ue
      }, _C = {
        readContext: function(e) {
          return Pn(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", ge(), Jm(e, t);
        },
        useContext: function(e) {
          return re = "useContext", ge(), Pn(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", ge(), $p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", ge(), Xm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", ge(), Km(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", ge(), qm(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", ge();
          var a = Re.current;
          Re.current = ry;
          try {
            return ey(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", ge();
          var i = Re.current;
          Re.current = ry;
          try {
            return n0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", ge(), Gm();
        },
        useState: function(e) {
          re = "useState", ge();
          var t = Re.current;
          Re.current = ry;
          try {
            return i0(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", ge(), Zm();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", ge(), EC(e);
        },
        useTransition: function() {
          return re = "useTransition", ge(), xC();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", ge(), $m(e, t);
        },
        useId: function() {
          return re = "useId", ge(), ty();
        },
        unstable_isNewReconciler: ue
      }, Cl = {
        readContext: function(e) {
          return h0(), Pn(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", et(), bt(), c0(e, t);
        },
        useContext: function(e) {
          return re = "useContext", et(), bt(), Pn(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", et(), bt(), Qm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", et(), bt(), s0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", et(), bt(), o0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", et(), bt(), u0(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", et(), bt();
          var a = Re.current;
          Re.current = Cl;
          try {
            return f0(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", et(), bt();
          var i = Re.current;
          Re.current = Cl;
          try {
            return e0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", et(), bt(), l0(e);
        },
        useState: function(e) {
          re = "useState", et(), bt();
          var t = Re.current;
          Re.current = Cl;
          try {
            return Ym(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", et(), bt(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", et(), bt(), d0(e);
        },
        useTransition: function() {
          return re = "useTransition", et(), bt(), p0();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", et(), bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", et(), bt(), r0(e, t, a);
        },
        useId: function() {
          return re = "useId", et(), bt(), v0();
        },
        unstable_isNewReconciler: ue
      }, Fi = {
        readContext: function(e) {
          return h0(), Pn(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", et(), ge(), Jm(e, t);
        },
        useContext: function(e) {
          return re = "useContext", et(), ge(), Pn(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", et(), ge(), $p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", et(), ge(), Xm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", et(), ge(), Km(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", et(), ge(), qm(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", et(), ge();
          var a = Re.current;
          Re.current = Fi;
          try {
            return ey(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", et(), ge();
          var i = Re.current;
          Re.current = Fi;
          try {
            return t0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", et(), ge(), Gm();
        },
        useState: function(e) {
          re = "useState", et(), ge();
          var t = Re.current;
          Re.current = Fi;
          try {
            return a0(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", et(), ge(), Zm();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", et(), ge(), SC(e);
        },
        useTransition: function() {
          return re = "useTransition", et(), ge(), TC();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", et(), ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", et(), ge(), $m(e, t);
        },
        useId: function() {
          return re = "useId", et(), ge(), ty();
        },
        unstable_isNewReconciler: ue
      }, ry = {
        readContext: function(e) {
          return h0(), Pn(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", et(), ge(), Jm(e, t);
        },
        useContext: function(e) {
          return re = "useContext", et(), ge(), Pn(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", et(), ge(), $p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", et(), ge(), Xm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", et(), ge(), Km(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", et(), ge(), qm(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", et(), ge();
          var a = Re.current;
          Re.current = Fi;
          try {
            return ey(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", et(), ge();
          var i = Re.current;
          Re.current = Fi;
          try {
            return n0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", et(), ge(), Gm();
        },
        useState: function(e) {
          re = "useState", et(), ge();
          var t = Re.current;
          Re.current = Fi;
          try {
            return i0(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", et(), ge(), Zm();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", et(), ge(), EC(e);
        },
        useTransition: function() {
          return re = "useTransition", et(), ge(), xC();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", et(), ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", et(), ge(), $m(e, t);
        },
        useId: function() {
          return re = "useId", et(), ge(), ty();
        },
        unstable_isNewReconciler: ue
      };
    }
    var gu = v.unstable_now, OC = 0, ay = -1, Yp = -1, iy = -1, m0 = !1, ly = !1;
    function zC() {
      return m0;
    }
    function CD() {
      ly = !0;
    }
    function TD() {
      m0 = !1, ly = !1;
    }
    function xD() {
      m0 = ly, ly = !1;
    }
    function UC() {
      return OC;
    }
    function AC() {
      OC = gu();
    }
    function y0(e) {
      Yp = gu(), e.actualStartTime < 0 && (e.actualStartTime = gu());
    }
    function HC(e) {
      Yp = -1;
    }
    function oy(e, t) {
      if (Yp >= 0) {
        var a = gu() - Yp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Yp = -1;
      }
    }
    function Tl(e) {
      if (ay >= 0) {
        var t = gu() - ay;
        ay = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case M:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case fe:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function g0(e) {
      if (iy >= 0) {
        var t = gu() - iy;
        iy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case M:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case fe:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function xl() {
      ay = gu();
    }
    function S0() {
      iy = gu();
    }
    function E0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function zs(e, t) {
      return {
        value: e,
        source: t,
        stack: ed(t),
        digest: null
      };
    }
    function C0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function wD(e, t) {
      return !0;
    }
    function T0(e, t) {
      try {
        var a = wD(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === b)
            return;
          console.error(i);
        }
        var h = o ? nt(o) : null, g = h ? "The above error occurred in the <" + h + "> component:" : "The above error occurred in one of your React components:", E;
        if (e.tag === M)
          E = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = nt(e) || "Anonymous";
          E = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var z = g + `
` + f + `

` + ("" + E);
        console.error(z);
      } catch (_) {
        setTimeout(function() {
          throw _;
        });
      }
    }
    var RD = typeof WeakMap == "function" ? WeakMap : Map;
    function IC(e, t, a) {
      var i = vo(Ht, a);
      i.tag = TS, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        yN(o), T0(e, t);
      }, i;
    }
    function x0(e, t, a) {
      var i = vo(Ht, a);
      i.tag = TS;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          KT(e), T0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        KT(e), T0(e, t), typeof o != "function" && hN(this);
        var g = t.value, E = t.stack;
        this.componentDidCatch(g, {
          componentStack: E !== null ? E : ""
        }), typeof o != "function" && (Ir(e.lanes, Ke) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", nt(e) || "Unknown"));
      }), i;
    }
    function FC(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new RD(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = gN.bind(null, e, t, a);
        Wn && ov(e, a), t.then(s, s);
      }
    }
    function kD(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function DD(e, t) {
      var a = e.tag;
      if ((e.mode & ut) === Ge && (a === L || a === X || a === ae)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function BC(e) {
      var t = e;
      do {
        if (t.tag === G && fD(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function VC(e, t, a, i, o) {
      if ((e.mode & ut) === Ge) {
        if (e === t)
          e.flags |= In;
        else {
          if (e.flags |= Ze, a.flags |= ns, a.flags &= ~(hc | Qr), a.tag === b) {
            var s = a.alternate;
            if (s === null)
              a.tag = Se;
            else {
              var f = vo(Ht, Ke);
              f.tag = Lm, vu(a, f, Ke);
            }
          }
          a.lanes = it(a.lanes, Ke);
        }
        return e;
      }
      return e.flags |= In, e.lanes = o, e;
    }
    function bD(e, t, a, i, o) {
      if (a.flags |= Qr, Wn && ov(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        DD(a), Er() && a.mode & ut && LE();
        var f = BC(t);
        if (f !== null) {
          f.flags &= ~ln, VC(f, t, a, e, o), f.mode & ut && FC(e, s, o), kD(f, e, s);
          return;
        } else {
          if (!Go(o)) {
            FC(e, s, o), n1();
            return;
          }
          var h = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = h;
        }
      } else if (Er() && a.mode & ut) {
        LE();
        var g = BC(t);
        if (g !== null) {
          (g.flags & In) === Pe && (g.flags |= ln), VC(g, t, a, e, o), hS(zs(i, a));
          return;
        }
      }
      i = zs(i, a), oN(i);
      var E = t;
      do {
        switch (E.tag) {
          case M: {
            var T = i;
            E.flags |= In;
            var z = Nn(o);
            E.lanes = it(E.lanes, z);
            var _ = IC(E, T, z);
            RS(E, _);
            return;
          }
          case b:
            var $ = i, Y = E.type, J = E.stateNode;
            if ((E.flags & Ze) === Pe && (typeof Y.getDerivedStateFromError == "function" || J !== null && typeof J.componentDidCatch == "function" && !BT(J))) {
              E.flags |= In;
              var be = Nn(o);
              E.lanes = it(E.lanes, be);
              var $e = x0(E, $, be);
              RS(E, $e);
              return;
            }
            break;
        }
        E = E.return;
      } while (E !== null);
    }
    function ND() {
      return null;
    }
    var Gp = m.ReactCurrentOwner, Bi = !1, w0, Wp, R0, k0, D0, Us, b0, uy;
    w0 = {}, Wp = {}, R0 = {}, k0 = {}, D0 = {}, Us = !1, b0 = {}, uy = {};
    function ea(e, t, a, i) {
      e === null ? t.child = iC(t, null, a, i) : t.child = wf(t, e.child, a, i);
    }
    function MD(e, t, a, i) {
      t.child = wf(t, e.child, null, i), t.child = wf(t, null, a, i);
    }
    function jC(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && zi(
          s,
          i,
          // Resolved props
          "prop",
          Ut(a)
        );
      }
      var f = a.render, h = t.ref, g, E;
      xf(t, o), ol(t);
      {
        if (Gp.current = t, Ia(!0), g = Mf(e, t, f, i, h, o), E = Lf(), t.mode & Zt) {
          bn(!0);
          try {
            g = Mf(e, t, f, i, h, o), E = Lf();
          } finally {
            bn(!1);
          }
        }
        Ia(!1);
      }
      return jl(), e !== null && !Bi ? (cC(e, t, o), ho(e, t, o)) : (Er() && E && sS(t), t.flags |= el, ea(e, t, g, o), t.child);
    }
    function PC(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (UN(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Ff(s), t.tag = ae, t.type = f, L0(t, s), $C(e, t, f, i, o);
        }
        {
          var h = s.propTypes;
          h && zi(
            h,
            i,
            // Resolved props
            "prop",
            Ut(s)
          );
        }
        var g = p1(a.type, null, i, t, t.mode, o);
        return g.ref = t.ref, g.return = t, t.child = g, g;
      }
      {
        var E = a.type, T = E.propTypes;
        T && zi(
          T,
          i,
          // Resolved props
          "prop",
          Ut(E)
        );
      }
      var z = e.child, _ = H0(e, o);
      if (!_) {
        var $ = z.memoizedProps, Y = a.compare;
        if (Y = Y !== null ? Y : je, Y($, i) && e.ref === t.ref)
          return ho(e, t, o);
      }
      t.flags |= el;
      var J = Bs(z, i);
      return J.ref = t.ref, J.return = t, t.child = J, J;
    }
    function $C(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === yr) {
          var f = s, h = f._payload, g = f._init;
          try {
            s = g(h);
          } catch {
            s = null;
          }
          var E = s && s.propTypes;
          E && zi(
            E,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ut(s)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (je(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Bi = !1, t.pendingProps = i = T, H0(e, o))
            (e.flags & ns) !== Pe && (Bi = !0);
          else
            return t.lanes = e.lanes, ho(e, t, o);
      }
      return N0(e, t, a, i, o);
    }
    function YC(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ne)
        if ((t.mode & ut) === Ge) {
          var f = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Cy(t, a);
        } else if (Ir(a, Hr)) {
          var z = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = z;
          var _ = s !== null ? s.baseLanes : a;
          Cy(t, _);
        } else {
          var h = null, g;
          if (s !== null) {
            var E = s.baseLanes;
            g = it(E, a);
          } else
            g = a;
          t.lanes = t.childLanes = Hr;
          var T = {
            baseLanes: g,
            cachePool: h,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, Cy(t, g), null;
        }
      else {
        var $;
        s !== null ? ($ = it(s.baseLanes, a), t.memoizedState = null) : $ = a, Cy(t, $);
      }
      return ea(e, t, o, a), t.child;
    }
    function LD(e, t, a) {
      var i = t.pendingProps;
      return ea(e, t, i, a), t.child;
    }
    function _D(e, t, a) {
      var i = t.pendingProps.children;
      return ea(e, t, i, a), t.child;
    }
    function OD(e, t, a) {
      {
        t.flags |= at;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return ea(e, t, s, a), t.child;
    }
    function GC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Lr, t.flags |= Nd);
    }
    function N0(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && zi(
          s,
          i,
          // Resolved props
          "prop",
          Ut(a)
        );
      }
      var f;
      {
        var h = yf(t, a, !0);
        f = gf(t, h);
      }
      var g, E;
      xf(t, o), ol(t);
      {
        if (Gp.current = t, Ia(!0), g = Mf(e, t, a, i, f, o), E = Lf(), t.mode & Zt) {
          bn(!0);
          try {
            g = Mf(e, t, a, i, f, o), E = Lf();
          } finally {
            bn(!1);
          }
        }
        Ia(!1);
      }
      return jl(), e !== null && !Bi ? (cC(e, t, o), ho(e, t, o)) : (Er() && E && sS(t), t.flags |= el, ea(e, t, g, o), t.child);
    }
    function WC(e, t, a, i, o) {
      {
        switch (qN(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, h = new f(t.memoizedProps, s.context), g = h.state;
            s.updater.enqueueSetState(s, g, null);
            break;
          }
          case !0: {
            t.flags |= Ze, t.flags |= In;
            var E = new Error("Simulated error coming from DevTools"), T = Nn(o);
            t.lanes = it(t.lanes, T);
            var z = x0(t, zs(E, t), T);
            RS(t, z);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var _ = a.propTypes;
          _ && zi(
            _,
            i,
            // Resolved props
            "prop",
            Ut(a)
          );
        }
      }
      var $;
      gl(a) ? ($ = !0, Em(t)) : $ = !1, xf(t, o);
      var Y = t.stateNode, J;
      Y === null ? (cy(e, t), eC(t, a, i), HS(t, a, i, o), J = !0) : e === null ? J = iD(t, a, i, o) : J = lD(e, t, a, i, o);
      var be = M0(e, t, a, J, $, o);
      {
        var $e = t.stateNode;
        J && $e.props !== i && (Us || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", nt(t) || "a component"), Us = !0);
      }
      return be;
    }
    function M0(e, t, a, i, o, s) {
      GC(e, t);
      var f = (t.flags & Ze) !== Pe;
      if (!i && !f)
        return o && DE(t, a, !1), ho(e, t, s);
      var h = t.stateNode;
      Gp.current = t;
      var g;
      if (f && typeof a.getDerivedStateFromError != "function")
        g = null, HC();
      else {
        ol(t);
        {
          if (Ia(!0), g = h.render(), t.mode & Zt) {
            bn(!0);
            try {
              h.render();
            } finally {
              bn(!1);
            }
          }
          Ia(!1);
        }
        jl();
      }
      return t.flags |= el, e !== null && f ? MD(e, t, g, s) : ea(e, t, g, s), t.memoizedState = h.state, o && DE(t, a, !0), t.child;
    }
    function QC(e) {
      var t = e.stateNode;
      t.pendingContext ? RE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && RE(e, t.context, !1), PS(e, t.containerInfo);
    }
    function zD(e, t, a) {
      if (QC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      GE(e, t), Um(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var h = f.element;
      if (o.isDehydrated) {
        var g = {
          element: h,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, E = t.updateQueue;
        if (E.baseState = g, t.memoizedState = g, t.flags & ln) {
          var T = zs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return KC(e, t, h, a, T);
        } else if (h !== s) {
          var z = zs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return KC(e, t, h, a, z);
        } else {
          Ik(t);
          var _ = iC(t, null, h, a);
          t.child = _;
          for (var $ = _; $; )
            $.flags = $.flags & ~Bt | ma, $ = $.sibling;
        }
      } else {
        if (Cf(), h === s)
          return ho(e, t, a);
        ea(e, t, h, a);
      }
      return t.child;
    }
    function KC(e, t, a, i, o) {
      return Cf(), hS(o), t.flags |= ln, ea(e, t, a, i), t.child;
    }
    function UD(e, t, a) {
      oC(t), e === null && vS(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = o.children, h = Kg(i, o);
      return h ? f = null : s !== null && Kg(i, s) && (t.flags |= Dt), GC(e, t), ea(e, t, f, a), t.child;
    }
    function AD(e, t) {
      return e === null && vS(t), null;
    }
    function HD(e, t, a, i) {
      cy(e, t);
      var o = t.pendingProps, s = a, f = s._payload, h = s._init, g = h(f);
      t.type = g;
      var E = t.tag = AN(g), T = Hi(g, o), z;
      switch (E) {
        case L:
          return L0(t, g), t.type = g = Ff(g), z = N0(null, t, g, T, i), z;
        case b:
          return t.type = g = o1(g), z = WC(null, t, g, T, i), z;
        case X:
          return t.type = g = u1(g), z = jC(null, t, g, T, i), z;
        case W: {
          if (t.type !== t.elementType) {
            var _ = g.propTypes;
            _ && zi(
              _,
              T,
              // Resolved for outer only
              "prop",
              Ut(g)
            );
          }
          return z = PC(
            null,
            t,
            g,
            Hi(g.type, T),
            // The inner type can have defaults too
            i
          ), z;
        }
      }
      var $ = "";
      throw g !== null && typeof g == "object" && g.$$typeof === yr && ($ = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + g + ". " + ("Lazy element type must resolve to a class or function." + $));
    }
    function ID(e, t, a, i, o) {
      cy(e, t), t.tag = b;
      var s;
      return gl(a) ? (s = !0, Em(t)) : s = !1, xf(t, o), eC(t, a, i), HS(t, a, i, o), M0(null, t, a, !0, s, o);
    }
    function FD(e, t, a, i) {
      cy(e, t);
      var o = t.pendingProps, s;
      {
        var f = yf(t, a, !1);
        s = gf(t, f);
      }
      xf(t, i);
      var h, g;
      ol(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var E = Ut(a) || "Unknown";
          w0[E] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", E, E), w0[E] = !0);
        }
        t.mode & Zt && Ai.recordLegacyContextWarning(t, null), Ia(!0), Gp.current = t, h = Mf(null, t, a, o, s, i), g = Lf(), Ia(!1);
      }
      if (jl(), t.flags |= el, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0) {
        var T = Ut(a) || "Unknown";
        Wp[T] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), Wp[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0
      ) {
        {
          var z = Ut(a) || "Unknown";
          Wp[z] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", z, z, z), Wp[z] = !0);
        }
        t.tag = b, t.memoizedState = null, t.updateQueue = null;
        var _ = !1;
        return gl(a) ? (_ = !0, Em(t)) : _ = !1, t.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, wS(t), JE(t, h), HS(t, a, o, i), M0(null, t, a, !0, _, i);
      } else {
        if (t.tag = L, t.mode & Zt) {
          bn(!0);
          try {
            h = Mf(null, t, a, o, s, i), g = Lf();
          } finally {
            bn(!1);
          }
        }
        return Er() && g && sS(t), ea(null, t, h, i), L0(t, a), t.child;
      }
    }
    function L0(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = da();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", s = e._debugSource;
          s && (o = s.fileName + ":" + s.lineNumber), D0[o] || (D0[o] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = Ut(t) || "Unknown";
          k0[f] || (y("%s: Function components do not support getDerivedStateFromProps.", f), k0[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var h = Ut(t) || "Unknown";
          R0[h] || (y("%s: Function components do not support contextType.", h), R0[h] = !0);
        }
      }
    }
    var _0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: mt
    };
    function O0(e) {
      return {
        baseLanes: e,
        cachePool: ND(),
        transitions: null
      };
    }
    function BD(e, t) {
      var a = null;
      return {
        baseLanes: it(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function VD(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return GS(e, Ip);
    }
    function jD(e, t) {
      return Wo(e.childLanes, t);
    }
    function qC(e, t, a) {
      var i = t.pendingProps;
      XN(t) && (t.flags |= Ze);
      var o = Ii.current, s = !1, f = (t.flags & Ze) !== Pe;
      if (f || VD(o, e) ? (s = !0, t.flags &= ~Ze) : (e === null || e.memoizedState !== null) && (o = cD(o, sC)), o = kf(o), mu(t, o), e === null) {
        vS(t);
        var h = t.memoizedState;
        if (h !== null) {
          var g = h.dehydrated;
          if (g !== null)
            return WD(t, g);
        }
        var E = i.children, T = i.fallback;
        if (s) {
          var z = PD(t, E, T, a), _ = t.child;
          return _.memoizedState = O0(a), t.memoizedState = _0, z;
        } else
          return z0(t, E);
      } else {
        var $ = e.memoizedState;
        if ($ !== null) {
          var Y = $.dehydrated;
          if (Y !== null)
            return QD(e, t, f, i, Y, $, a);
        }
        if (s) {
          var J = i.fallback, be = i.children, $e = YD(e, t, be, J, a), Be = t.child, gt = e.child.memoizedState;
          return Be.memoizedState = gt === null ? O0(a) : BD(gt, a), Be.childLanes = jD(e, a), t.memoizedState = _0, $e;
        } else {
          var pt = i.children, F = $D(e, t, pt, a);
          return t.memoizedState = null, F;
        }
      }
    }
    function z0(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, s = U0(o, i);
      return s.return = e, e.child = s, s;
    }
    function PD(e, t, a, i) {
      var o = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, h, g;
      return (o & ut) === Ge && s !== null ? (h = s, h.childLanes = te, h.pendingProps = f, e.mode & We && (h.actualDuration = 0, h.actualStartTime = -1, h.selfBaseDuration = 0, h.treeBaseDuration = 0), g = wu(a, o, i, null)) : (h = U0(f, o), g = wu(a, o, i, null)), h.return = e, g.return = e, h.sibling = g, e.child = h, g;
    }
    function U0(e, t, a) {
      return XT(e, t, te, null);
    }
    function XC(e, t) {
      return Bs(e, t);
    }
    function $D(e, t, a, i) {
      var o = e.child, s = o.sibling, f = XC(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ut) === Ge && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var h = t.deletions;
        h === null ? (t.deletions = [s], t.flags |= Rt) : h.push(s);
      }
      return t.child = f, f;
    }
    function YD(e, t, a, i, o) {
      var s = t.mode, f = e.child, h = f.sibling, g = {
        mode: "hidden",
        children: a
      }, E;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ut) === Ge && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var T = t.child;
        E = T, E.childLanes = te, E.pendingProps = g, t.mode & We && (E.actualDuration = 0, E.actualStartTime = -1, E.selfBaseDuration = f.selfBaseDuration, E.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        E = XC(f, g), E.subtreeFlags = f.subtreeFlags & Gn;
      var z;
      return h !== null ? z = Bs(h, i) : (z = wu(i, s, o, null), z.flags |= Bt), z.return = t, E.return = t, E.sibling = z, t.child = E, z;
    }
    function sy(e, t, a, i) {
      i !== null && hS(i), wf(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, f = z0(t, s);
      return f.flags |= Bt, t.memoizedState = null, f;
    }
    function GD(e, t, a, i, o) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, h = U0(f, s), g = wu(i, s, o, null);
      return g.flags |= Bt, h.return = t, g.return = t, h.sibling = g, t.child = h, (t.mode & ut) !== Ge && wf(t, e.child, null, o), g;
    }
    function WD(e, t, a) {
      return (e.mode & ut) === Ge ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ke) : Jg(t) ? e.lanes = Yl : e.lanes = Hr, null;
    }
    function QD(e, t, a, i, o, s, f) {
      if (a)
        if (t.flags & ln) {
          t.flags &= ~ln;
          var F = C0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return sy(e, t, f, F);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ze, null;
          var ee = i.children, B = i.fallback, se = GD(e, t, ee, B, f), Ne = t.child;
          return Ne.memoizedState = O0(f), t.memoizedState = _0, se;
        }
      else {
        if (Ak(), (t.mode & ut) === Ge)
          return sy(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Jg(o)) {
          var h, g, E;
          {
            var T = JR(o);
            h = T.digest, g = T.message, E = T.stack;
          }
          var z;
          g ? z = new Error(g) : z = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var _ = C0(z, h, E);
          return sy(e, t, f, _);
        }
        var $ = Ir(f, e.childLanes);
        if (Bi || $) {
          var Y = Ey();
          if (Y !== null) {
            var J = Eg(Y, f);
            if (J !== mt && J !== s.retryLane) {
              s.retryLane = J;
              var be = Ht;
              ka(e, J), nr(Y, e, J, be);
            }
          }
          n1();
          var $e = C0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return sy(e, t, f, $e);
        } else if (SE(o)) {
          t.flags |= Ze, t.child = e.child;
          var Be = SN.bind(null, e);
          return ek(o, Be), null;
        } else {
          Fk(t, o, s.treeContext);
          var gt = i.children, pt = z0(t, gt);
          return pt.flags |= ma, pt;
        }
      }
    }
    function ZC(e, t, a) {
      e.lanes = it(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = it(i.lanes, t)), ES(e.return, t, a);
    }
    function KD(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === G) {
          var o = i.memoizedState;
          o !== null && ZC(i, a, e);
        } else if (i.tag === Ce)
          ZC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function qD(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && jm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function XD(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !b0[e])
        if (b0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function ZD(e, t) {
      e !== void 0 && !uy[e] && (e !== "collapsed" && e !== "hidden" ? (uy[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (uy[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function JC(e, t) {
      {
        var a = An(e), i = !a && typeof yi(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function JD(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (An(e)) {
          for (var a = 0; a < e.length; a++)
            if (!JC(e[a], a))
              return;
        } else {
          var i = yi(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), f = 0; !s.done; s = o.next()) {
                if (!JC(s.value, f))
                  return;
                f++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function A0(e, t, a, i, o) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = o);
    }
    function eT(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, f = i.children;
      XD(o), ZD(s, o), JD(f, o), ea(e, t, f, a);
      var h = Ii.current, g = GS(h, Ip);
      if (g)
        h = WS(h, Ip), t.flags |= Ze;
      else {
        var E = e !== null && (e.flags & Ze) !== Pe;
        E && KD(t, t.child, a), h = kf(h);
      }
      if (mu(t, h), (t.mode & ut) === Ge)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var T = qD(t.child), z;
            T === null ? (z = t.child, t.child = null) : (z = T.sibling, T.sibling = null), A0(
              t,
              !1,
              // isBackwards
              z,
              T,
              s
            );
            break;
          }
          case "backwards": {
            var _ = null, $ = t.child;
            for (t.child = null; $ !== null; ) {
              var Y = $.alternate;
              if (Y !== null && jm(Y) === null) {
                t.child = $;
                break;
              }
              var J = $.sibling;
              $.sibling = _, _ = $, $ = J;
            }
            A0(
              t,
              !0,
              // isBackwards
              _,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            A0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function eb(e, t, a) {
      PS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = wf(t, null, i, a) : ea(e, t, i, a), t.child;
    }
    var tT = !1;
    function tb(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, f = t.memoizedProps, h = s.value;
      {
        "value" in s || tT || (tT = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var g = t.type.propTypes;
        g && zi(g, s, "prop", "Context.Provider");
      }
      if (jE(t, o, h), f !== null) {
        var E = f.value;
        if (Oe(E, h)) {
          if (f.children === s.children && !gm())
            return ho(e, t, a);
        } else
          Kk(t, o, a);
      }
      var T = s.children;
      return ea(e, t, T, a), t.child;
    }
    var nT = !1;
    function nb(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (nT || (nT = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), xf(t, a);
      var f = Pn(i);
      ol(t);
      var h;
      return Gp.current = t, Ia(!0), h = s(f), Ia(!1), jl(), t.flags |= el, ea(e, t, h, a), t.child;
    }
    function Qp() {
      Bi = !0;
    }
    function cy(e, t) {
      (t.mode & ut) === Ge && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Bt);
    }
    function ho(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), HC(), lv(t.lanes), Ir(a, t.childLanes) ? (oD(e, t), t.child) : null;
    }
    function rb(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw new Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw new Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Rt) : s.push(e), a.flags |= Bt, a;
      }
    }
    function H0(e, t) {
      var a = e.lanes;
      return !!Ir(a, t);
    }
    function ab(e, t, a) {
      switch (t.tag) {
        case M:
          QC(t), t.stateNode, Cf();
          break;
        case j:
          oC(t);
          break;
        case b: {
          var i = t.type;
          gl(i) && Em(t);
          break;
        }
        case U:
          PS(t, t.stateNode.containerInfo);
          break;
        case q: {
          var o = t.memoizedProps.value, s = t.type._context;
          jE(t, s, o);
          break;
        }
        case fe:
          {
            var f = Ir(a, t.childLanes);
            f && (t.flags |= at);
            {
              var h = t.stateNode;
              h.effectDuration = 0, h.passiveEffectDuration = 0;
            }
          }
          break;
        case G: {
          var g = t.memoizedState;
          if (g !== null) {
            if (g.dehydrated !== null)
              return mu(t, kf(Ii.current)), t.flags |= Ze, null;
            var E = t.child, T = E.childLanes;
            if (Ir(a, T))
              return qC(e, t, a);
            mu(t, kf(Ii.current));
            var z = ho(e, t, a);
            return z !== null ? z.sibling : null;
          } else
            mu(t, kf(Ii.current));
          break;
        }
        case Ce: {
          var _ = (e.flags & Ze) !== Pe, $ = Ir(a, t.childLanes);
          if (_) {
            if ($)
              return eT(e, t, a);
            t.flags |= Ze;
          }
          var Y = t.memoizedState;
          if (Y !== null && (Y.rendering = null, Y.tail = null, Y.lastEffect = null), mu(t, Ii.current), $)
            break;
          return null;
        }
        case Me:
        case he:
          return t.lanes = te, YC(e, t, a);
      }
      return ho(e, t, a);
    }
    function rT(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return rb(e, t, p1(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || gm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Bi = !0;
        else {
          var s = H0(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ze) === Pe)
            return Bi = !1, ab(e, t, a);
          (e.flags & ns) !== Pe ? Bi = !0 : Bi = !1;
        }
      } else if (Bi = !1, Er() && Mk(t)) {
        var f = t.index, h = Lk();
        ME(t, h, f);
      }
      switch (t.lanes = te, t.tag) {
        case A:
          return FD(e, t, t.type, a);
        case ve: {
          var g = t.elementType;
          return HD(e, t, g, a);
        }
        case L: {
          var E = t.type, T = t.pendingProps, z = t.elementType === E ? T : Hi(E, T);
          return N0(e, t, E, z, a);
        }
        case b: {
          var _ = t.type, $ = t.pendingProps, Y = t.elementType === _ ? $ : Hi(_, $);
          return WC(e, t, _, Y, a);
        }
        case M:
          return zD(e, t, a);
        case j:
          return UD(e, t, a);
        case Z:
          return AD(e, t);
        case G:
          return qC(e, t, a);
        case U:
          return eb(e, t, a);
        case X: {
          var J = t.type, be = t.pendingProps, $e = t.elementType === J ? be : Hi(J, be);
          return jC(e, t, J, $e, a);
        }
        case H:
          return LD(e, t, a);
        case Q:
          return _D(e, t, a);
        case fe:
          return OD(e, t, a);
        case q:
          return tb(e, t, a);
        case V:
          return nb(e, t, a);
        case W: {
          var Be = t.type, gt = t.pendingProps, pt = Hi(Be, gt);
          if (t.type !== t.elementType) {
            var F = Be.propTypes;
            F && zi(
              F,
              pt,
              // Resolved for outer only
              "prop",
              Ut(Be)
            );
          }
          return pt = Hi(Be.type, pt), PC(e, t, Be, pt, a);
        }
        case ae:
          return $C(e, t, t.type, t.pendingProps, a);
        case Se: {
          var ee = t.type, B = t.pendingProps, se = t.elementType === ee ? B : Hi(ee, B);
          return ID(e, t, ee, se, a);
        }
        case Ce:
          return eT(e, t, a);
        case Ve:
          break;
        case Me:
          return YC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function _f(e) {
      e.flags |= at;
    }
    function aT(e) {
      e.flags |= Lr, e.flags |= Nd;
    }
    var iT, I0, lT, oT;
    iT = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === j || o.tag === Z)
          DR(e, o.stateNode);
        else if (o.tag !== U) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === t)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, I0 = function(e, t) {
    }, lT = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, h = $S(), g = NR(f, a, s, i, o, h);
        t.updateQueue = g, g && _f(t);
      }
    }, oT = function(e, t, a, i) {
      a !== i && _f(t);
    };
    function Kp(e, t) {
      if (!Er())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var o = e.tail, s = null; o !== null; )
              o.alternate !== null && (s = o), o = o.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Tr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = te, i = Pe;
      if (t) {
        if ((e.mode & We) !== Ge) {
          for (var g = e.selfBaseDuration, E = e.child; E !== null; )
            a = it(a, it(E.lanes, E.childLanes)), i |= E.subtreeFlags & Gn, i |= E.flags & Gn, g += E.treeBaseDuration, E = E.sibling;
          e.treeBaseDuration = g;
        } else
          for (var T = e.child; T !== null; )
            a = it(a, it(T.lanes, T.childLanes)), i |= T.subtreeFlags & Gn, i |= T.flags & Gn, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & We) !== Ge) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = it(a, it(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, o += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var h = e.child; h !== null; )
            a = it(a, it(h.lanes, h.childLanes)), i |= h.subtreeFlags, i |= h.flags, h.return = e, h = h.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function ib(e, t, a) {
      if ($k() && (t.mode & ut) !== Ge && (t.flags & Ze) === Pe)
        return HE(t), Cf(), t.flags |= ln | Qr | In, !1;
      var i = Rm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (jk(t), Tr(t), (t.mode & We) !== Ge) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Cf(), (t.flags & Ze) === Pe && (t.memoizedState = null), t.flags |= at, Tr(t), (t.mode & We) !== Ge) {
            var f = a !== null;
            if (f) {
              var h = t.child;
              h !== null && (t.treeBaseDuration -= h.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return IE(), !0;
    }
    function uT(e, t, a) {
      var i = t.pendingProps;
      switch (cS(t), t.tag) {
        case A:
        case ve:
        case ae:
        case L:
        case X:
        case H:
        case Q:
        case fe:
        case V:
        case W:
          return Tr(t), null;
        case b: {
          var o = t.type;
          return gl(o) && Sm(t), Tr(t), null;
        }
        case M: {
          var s = t.stateNode;
          if (Rf(t), lS(t), KS(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Rm(t);
            if (f)
              _f(t);
            else if (e !== null) {
              var h = e.memoizedState;
              // Check if this is a client root
              (!h.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & ln) !== Pe) && (t.flags |= ha, IE());
            }
          }
          return I0(e, t), Tr(t), null;
        }
        case j: {
          YS(t);
          var g = lC(), E = t.type;
          if (e !== null && t.stateNode != null)
            lT(e, t, E, i, g), e.ref !== t.ref && aT(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Tr(t), null;
            }
            var T = $S(), z = Rm(t);
            if (z)
              Bk(t, g, T) && _f(t);
            else {
              var _ = kR(E, i, g, T, t);
              iT(_, t, !1, !1), t.stateNode = _, bR(_, E, i, g) && _f(t);
            }
            t.ref !== null && aT(t);
          }
          return Tr(t), null;
        }
        case Z: {
          var $ = i;
          if (e && t.stateNode != null) {
            var Y = e.memoizedProps;
            oT(e, t, Y, $);
          } else {
            if (typeof $ != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var J = lC(), be = $S(), $e = Rm(t);
            $e ? Vk(t) && _f(t) : t.stateNode = MR($, J, be, t);
          }
          return Tr(t), null;
        }
        case G: {
          Df(t);
          var Be = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var gt = ib(e, t, Be);
            if (!gt)
              return t.flags & In ? t : null;
          }
          if ((t.flags & Ze) !== Pe)
            return t.lanes = a, (t.mode & We) !== Ge && E0(t), t;
          var pt = Be !== null, F = e !== null && e.memoizedState !== null;
          if (pt !== F && pt) {
            var ee = t.child;
            if (ee.flags |= tl, (t.mode & ut) !== Ge) {
              var B = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Fe);
              B || GS(Ii.current, sC) ? lN() : n1();
            }
          }
          var se = t.updateQueue;
          if (se !== null && (t.flags |= at), Tr(t), (t.mode & We) !== Ge && pt) {
            var Ne = t.child;
            Ne !== null && (t.treeBaseDuration -= Ne.treeBaseDuration);
          }
          return null;
        }
        case U:
          return Rf(t), I0(e, t), e === null && xk(t.stateNode.containerInfo), Tr(t), null;
        case q:
          var Te = t.type._context;
          return SS(Te, t), Tr(t), null;
        case Se: {
          var qe = t.type;
          return gl(qe) && Sm(t), Tr(t), null;
        }
        case Ce: {
          Df(t);
          var tt = t.memoizedState;
          if (tt === null)
            return Tr(t), null;
          var Ot = (t.flags & Ze) !== Pe, Tt = tt.rendering;
          if (Tt === null)
            if (Ot)
              Kp(tt, !1);
            else {
              var On = uN() && (e === null || (e.flags & Ze) === Pe);
              if (!On)
                for (var xt = t.child; xt !== null; ) {
                  var xn = jm(xt);
                  if (xn !== null) {
                    Ot = !0, t.flags |= Ze, Kp(tt, !1);
                    var jr = xn.updateQueue;
                    return jr !== null && (t.updateQueue = jr, t.flags |= at), t.subtreeFlags = Pe, uD(t, a), mu(t, WS(Ii.current, Ip)), t.child;
                  }
                  xt = xt.sibling;
                }
              tt.tail !== null && Xt() > NT() && (t.flags |= Ze, Ot = !0, Kp(tt, !1), t.lanes = jd);
            }
          else {
            if (!Ot) {
              var Dr = jm(Tt);
              if (Dr !== null) {
                t.flags |= Ze, Ot = !0;
                var Ga = Dr.updateQueue;
                if (Ga !== null && (t.updateQueue = Ga, t.flags |= at), Kp(tt, !0), tt.tail === null && tt.tailMode === "hidden" && !Tt.alternate && !Er())
                  return Tr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Xt() * 2 - tt.renderingStartTime > NT() && a !== Hr && (t.flags |= Ze, Ot = !0, Kp(tt, !1), t.lanes = jd);
            }
            if (tt.isBackwards)
              Tt.sibling = t.child, t.child = Tt;
            else {
              var ra = tt.last;
              ra !== null ? ra.sibling = Tt : t.child = Tt, tt.last = Tt;
            }
          }
          if (tt.tail !== null) {
            var aa = tt.tail;
            tt.rendering = aa, tt.tail = aa.sibling, tt.renderingStartTime = Xt(), aa.sibling = null;
            var Pr = Ii.current;
            return Ot ? Pr = WS(Pr, Ip) : Pr = kf(Pr), mu(t, Pr), aa;
          }
          return Tr(t), null;
        }
        case Ve:
          break;
        case Me:
        case he: {
          t1(t);
          var Eo = t.memoizedState, Bf = Eo !== null;
          if (e !== null) {
            var fv = e.memoizedState, kl = fv !== null;
            kl !== Bf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ne && (t.flags |= tl);
          }
          return !Bf || (t.mode & ut) === Ge ? Tr(t) : Ir(Rl, Hr) && (Tr(t), t.subtreeFlags & (Bt | at) && (t.flags |= tl)), null;
        }
        case ke:
          return null;
        case Ue:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function lb(e, t, a) {
      switch (cS(t), t.tag) {
        case b: {
          var i = t.type;
          gl(i) && Sm(t);
          var o = t.flags;
          return o & In ? (t.flags = o & ~In | Ze, (t.mode & We) !== Ge && E0(t), t) : null;
        }
        case M: {
          t.stateNode, Rf(t), lS(t), KS();
          var s = t.flags;
          return (s & In) !== Pe && (s & Ze) === Pe ? (t.flags = s & ~In | Ze, t) : null;
        }
        case j:
          return YS(t), null;
        case G: {
          Df(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Cf();
          }
          var h = t.flags;
          return h & In ? (t.flags = h & ~In | Ze, (t.mode & We) !== Ge && E0(t), t) : null;
        }
        case Ce:
          return Df(t), null;
        case U:
          return Rf(t), null;
        case q:
          var g = t.type._context;
          return SS(g, t), null;
        case Me:
        case he:
          return t1(t), null;
        case ke:
          return null;
        default:
          return null;
      }
    }
    function sT(e, t, a) {
      switch (cS(t), t.tag) {
        case b: {
          var i = t.type.childContextTypes;
          i != null && Sm(t);
          break;
        }
        case M: {
          t.stateNode, Rf(t), lS(t), KS();
          break;
        }
        case j: {
          YS(t);
          break;
        }
        case U:
          Rf(t);
          break;
        case G:
          Df(t);
          break;
        case Ce:
          Df(t);
          break;
        case q:
          var o = t.type._context;
          SS(o, t);
          break;
        case Me:
        case he:
          t1(t);
          break;
      }
    }
    var cT = null;
    cT = /* @__PURE__ */ new Set();
    var fy = !1, xr = !1, ob = typeof WeakSet == "function" ? WeakSet : Set, ze = null, Of = null, zf = null;
    function ub(e) {
      Bl(null, function() {
        throw e;
      }), Dd();
    }
    var sb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & We)
        try {
          xl(), t.componentWillUnmount();
        } finally {
          Tl(e);
        }
      else
        t.componentWillUnmount();
    };
    function fT(e, t) {
      try {
        Su(qn, e);
      } catch (a) {
        $t(e, t, a);
      }
    }
    function F0(e, t, a) {
      try {
        sb(e, a);
      } catch (i) {
        $t(e, t, i);
      }
    }
    function cb(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        $t(e, t, i);
      }
    }
    function dT(e, t) {
      try {
        vT(e);
      } catch (a) {
        $t(e, t, a);
      }
    }
    function Uf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (ce && rt && e.mode & We)
              try {
                xl(), i = a(null);
              } finally {
                Tl(e);
              }
            else
              i = a(null);
          } catch (o) {
            $t(e, t, o);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", nt(e));
        } else
          a.current = null;
    }
    function dy(e, t, a) {
      try {
        a();
      } catch (i) {
        $t(e, t, i);
      }
    }
    var pT = !1;
    function fb(e, t) {
      wR(e.containerInfo), ze = t, db();
      var a = pT;
      return pT = !1, a;
    }
    function db() {
      for (; ze !== null; ) {
        var e = ze, t = e.child;
        (e.subtreeFlags & Fo) !== Pe && t !== null ? (t.return = e, ze = t) : pb();
      }
    }
    function pb() {
      for (; ze !== null; ) {
        var e = ze;
        Lt(e);
        try {
          vb(e);
        } catch (a) {
          $t(e, e.return, a);
        }
        Dn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ze = t;
          return;
        }
        ze = e.return;
      }
    }
    function vb(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ha) !== Pe) {
        switch (Lt(e), e.tag) {
          case L:
          case X:
          case ae:
            break;
          case b: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Us && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Hi(e.type, i), o);
              {
                var h = cT;
                f === void 0 && !h.has(e.type) && (h.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", nt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case M: {
            {
              var g = e.stateNode;
              KR(g.containerInfo);
            }
            break;
          }
          case j:
          case Z:
          case U:
          case Se:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Dn();
      }
    }
    function Vi(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var h = f.destroy;
            f.destroy = void 0, h !== void 0 && ((e & Cr) !== Da ? xc(t) : (e & qn) !== Da && wc(t), (e & Sl) !== Da && uv(!0), dy(t, a, h), (e & Sl) !== Da && uv(!1), (e & Cr) !== Da ? wh() : (e & qn) !== Da && Bo());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Su(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & Cr) !== Da ? xh(t) : (e & qn) !== Da && Rh(t);
            var f = s.create;
            (e & Sl) !== Da && uv(!0), s.destroy = f(), (e & Sl) !== Da && uv(!1), (e & Cr) !== Da ? Fd() : (e & qn) !== Da && kh();
            {
              var h = s.destroy;
              if (h !== void 0 && typeof h != "function") {
                var g = void 0;
                (s.tag & qn) !== Pe ? g = "useLayoutEffect" : (s.tag & Sl) !== Pe ? g = "useInsertionEffect" : g = "useEffect";
                var E = void 0;
                h === null ? E = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof h.then == "function" ? E = `

It looks like you wrote ` + g + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + g + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : E = " You returned: " + h, y("%s must not return anything besides a function, which is used for clean-up.%s", g, E);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function hb(e, t) {
      if ((t.flags & at) !== Pe)
        switch (t.tag) {
          case fe: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, f = UC(), h = t.alternate === null ? "mount" : "update";
            zC() && (h = "nested-update"), typeof s == "function" && s(o, h, a, f);
            var g = t.return;
            e:
              for (; g !== null; ) {
                switch (g.tag) {
                  case M:
                    var E = g.stateNode;
                    E.passiveEffectDuration += a;
                    break e;
                  case fe:
                    var T = g.stateNode;
                    T.passiveEffectDuration += a;
                    break e;
                }
                g = g.return;
              }
            break;
          }
        }
    }
    function mb(e, t, a, i) {
      if ((a.flags & ur) !== Pe)
        switch (a.tag) {
          case L:
          case X:
          case ae: {
            if (!xr)
              if (a.mode & We)
                try {
                  xl(), Su(qn | Kn, a);
                } finally {
                  Tl(a);
                }
              else
                Su(qn | Kn, a);
            break;
          }
          case b: {
            var o = a.stateNode;
            if (a.flags & at && !xr)
              if (t === null)
                if (a.type === a.elementType && !Us && (o.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(a) || "instance"), o.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(a) || "instance")), a.mode & We)
                  try {
                    xl(), o.componentDidMount();
                  } finally {
                    Tl(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Hi(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Us && (o.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(a) || "instance"), o.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(a) || "instance")), a.mode & We)
                  try {
                    xl(), o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Tl(a);
                  }
                else
                  o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
              }
            var h = a.updateQueue;
            h !== null && (a.type === a.elementType && !Us && (o.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", nt(a) || "instance"), o.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", nt(a) || "instance")), QE(a, h, o));
            break;
          }
          case M: {
            var g = a.updateQueue;
            if (g !== null) {
              var E = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case j:
                    E = a.child.stateNode;
                    break;
                  case b:
                    E = a.child.stateNode;
                    break;
                }
              QE(a, g, E);
            }
            break;
          }
          case j: {
            var T = a.stateNode;
            if (t === null && a.flags & at) {
              var z = a.type, _ = a.memoizedProps;
              UR(T, z, _);
            }
            break;
          }
          case Z:
            break;
          case U:
            break;
          case fe: {
            {
              var $ = a.memoizedProps, Y = $.onCommit, J = $.onRender, be = a.stateNode.effectDuration, $e = UC(), Be = t === null ? "mount" : "update";
              zC() && (Be = "nested-update"), typeof J == "function" && J(a.memoizedProps.id, Be, a.actualDuration, a.treeBaseDuration, a.actualStartTime, $e);
              {
                typeof Y == "function" && Y(a.memoizedProps.id, Be, be, $e), pN(a);
                var gt = a.return;
                e:
                  for (; gt !== null; ) {
                    switch (gt.tag) {
                      case M:
                        var pt = gt.stateNode;
                        pt.effectDuration += be;
                        break e;
                      case fe:
                        var F = gt.stateNode;
                        F.effectDuration += be;
                        break e;
                    }
                    gt = gt.return;
                  }
              }
            }
            break;
          }
          case G: {
            wb(e, a);
            break;
          }
          case Ce:
          case Se:
          case Ve:
          case Me:
          case he:
          case Ue:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      xr || a.flags & Lr && vT(a);
    }
    function yb(e) {
      switch (e.tag) {
        case L:
        case X:
        case ae: {
          if (e.mode & We)
            try {
              xl(), fT(e, e.return);
            } finally {
              Tl(e);
            }
          else
            fT(e, e.return);
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && cb(e, e.return, t), dT(e, e.return);
          break;
        }
        case j: {
          dT(e, e.return);
          break;
        }
      }
    }
    function gb(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === j) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? YR(o) : WR(i.stateNode, i.memoizedProps);
            } catch (f) {
              $t(e, e.return, f);
            }
          }
        } else if (i.tag === Z) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? GR(s) : QR(s, i.memoizedProps);
            } catch (f) {
              $t(e, e.return, f);
            }
        } else if (!((i.tag === Me || i.tag === he) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function vT(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case j:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & We)
            try {
              xl(), o = t(i);
            } finally {
              Tl(e);
            }
          else
            o = t(i);
          typeof o == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", nt(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", nt(e)), t.current = i;
      }
    }
    function Sb(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function hT(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, hT(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === j) {
          var a = e.stateNode;
          a !== null && kk(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Eb(e) {
      for (var t = e.return; t !== null; ) {
        if (mT(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function mT(e) {
      return e.tag === j || e.tag === M || e.tag === U;
    }
    function yT(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || mT(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== j && t.tag !== Z && t.tag !== me; ) {
            if (t.flags & Bt || t.child === null || t.tag === U)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Bt))
            return t.stateNode;
        }
    }
    function Cb(e) {
      var t = Eb(e);
      switch (t.tag) {
        case j: {
          var a = t.stateNode;
          t.flags & Dt && (gE(a), t.flags &= ~Dt);
          var i = yT(e);
          V0(e, i, a);
          break;
        }
        case M:
        case U: {
          var o = t.stateNode.containerInfo, s = yT(e);
          B0(e, s, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function B0(e, t, a) {
      var i = e.tag, o = i === j || i === Z;
      if (o) {
        var s = e.stateNode;
        t ? VR(a, s, t) : FR(a, s);
      } else if (i !== U) {
        var f = e.child;
        if (f !== null) {
          B0(f, t, a);
          for (var h = f.sibling; h !== null; )
            B0(h, t, a), h = h.sibling;
        }
      }
    }
    function V0(e, t, a) {
      var i = e.tag, o = i === j || i === Z;
      if (o) {
        var s = e.stateNode;
        t ? BR(a, s, t) : IR(a, s);
      } else if (i !== U) {
        var f = e.child;
        if (f !== null) {
          V0(f, t, a);
          for (var h = f.sibling; h !== null; )
            V0(h, t, a), h = h.sibling;
        }
      }
    }
    var wr = null, ji = !1;
    function Tb(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case j: {
                wr = i.stateNode, ji = !1;
                break e;
              }
              case M: {
                wr = i.stateNode.containerInfo, ji = !0;
                break e;
              }
              case U: {
                wr = i.stateNode.containerInfo, ji = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (wr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        gT(e, t, a), wr = null, ji = !1;
      }
      Sb(a);
    }
    function Eu(e, t, a) {
      for (var i = a.child; i !== null; )
        gT(e, t, i), i = i.sibling;
    }
    function gT(e, t, a) {
      switch (Hd(a), a.tag) {
        case j:
          xr || Uf(a, t);
        case Z: {
          {
            var i = wr, o = ji;
            wr = null, Eu(e, t, a), wr = i, ji = o, wr !== null && (ji ? PR(wr, a.stateNode) : jR(wr, a.stateNode));
          }
          return;
        }
        case me: {
          wr !== null && (ji ? $R(wr, a.stateNode) : Zg(wr, a.stateNode));
          return;
        }
        case U: {
          {
            var s = wr, f = ji;
            wr = a.stateNode.containerInfo, ji = !0, Eu(e, t, a), wr = s, ji = f;
          }
          return;
        }
        case L:
        case X:
        case W:
        case ae: {
          if (!xr) {
            var h = a.updateQueue;
            if (h !== null) {
              var g = h.lastEffect;
              if (g !== null) {
                var E = g.next, T = E;
                do {
                  var z = T, _ = z.destroy, $ = z.tag;
                  _ !== void 0 && (($ & Sl) !== Da ? dy(a, t, _) : ($ & qn) !== Da && (wc(a), a.mode & We ? (xl(), dy(a, t, _), Tl(a)) : dy(a, t, _), Bo())), T = T.next;
                } while (T !== E);
              }
            }
          }
          Eu(e, t, a);
          return;
        }
        case b: {
          if (!xr) {
            Uf(a, t);
            var Y = a.stateNode;
            typeof Y.componentWillUnmount == "function" && F0(a, t, Y);
          }
          Eu(e, t, a);
          return;
        }
        case Ve: {
          Eu(e, t, a);
          return;
        }
        case Me: {
          if (
            // TODO: Remove this dead flag
            a.mode & ut
          ) {
            var J = xr;
            xr = J || a.memoizedState !== null, Eu(e, t, a), xr = J;
          } else
            Eu(e, t, a);
          break;
        }
        default: {
          Eu(e, t, a);
          return;
        }
      }
    }
    function xb(e) {
      e.memoizedState;
    }
    function wb(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && sk(s);
          }
        }
      }
    }
    function ST(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new ob()), t.forEach(function(i) {
          var o = EN.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Wn)
              if (Of !== null && zf !== null)
                ov(zf, Of);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function Rb(e, t, a) {
      Of = a, zf = e, Lt(t), ET(t, e), Lt(t), Of = null, zf = null;
    }
    function Pi(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            Tb(e, t, s);
          } catch (g) {
            $t(s, t, g);
          }
        }
      var f = Xy();
      if (t.subtreeFlags & zr)
        for (var h = t.child; h !== null; )
          Lt(h), ET(h, e), h = h.sibling;
      Lt(f);
    }
    function ET(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case L:
        case X:
        case W:
        case ae: {
          if (Pi(t, e), wl(e), o & at) {
            try {
              Vi(Sl | Kn, e, e.return), Su(Sl | Kn, e);
            } catch (qe) {
              $t(e, e.return, qe);
            }
            if (e.mode & We) {
              try {
                xl(), Vi(qn | Kn, e, e.return);
              } catch (qe) {
                $t(e, e.return, qe);
              }
              Tl(e);
            } else
              try {
                Vi(qn | Kn, e, e.return);
              } catch (qe) {
                $t(e, e.return, qe);
              }
          }
          return;
        }
        case b: {
          Pi(t, e), wl(e), o & Lr && i !== null && Uf(i, i.return);
          return;
        }
        case j: {
          Pi(t, e), wl(e), o & Lr && i !== null && Uf(i, i.return);
          {
            if (e.flags & Dt) {
              var s = e.stateNode;
              try {
                gE(s);
              } catch (qe) {
                $t(e, e.return, qe);
              }
            }
            if (o & at) {
              var f = e.stateNode;
              if (f != null) {
                var h = e.memoizedProps, g = i !== null ? i.memoizedProps : h, E = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    AR(f, T, E, g, h, e);
                  } catch (qe) {
                    $t(e, e.return, qe);
                  }
              }
            }
          }
          return;
        }
        case Z: {
          if (Pi(t, e), wl(e), o & at) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var z = e.stateNode, _ = e.memoizedProps, $ = i !== null ? i.memoizedProps : _;
            try {
              HR(z, $, _);
            } catch (qe) {
              $t(e, e.return, qe);
            }
          }
          return;
        }
        case M: {
          if (Pi(t, e), wl(e), o & at && i !== null) {
            var Y = i.memoizedState;
            if (Y.isDehydrated)
              try {
                uk(t.containerInfo);
              } catch (qe) {
                $t(e, e.return, qe);
              }
          }
          return;
        }
        case U: {
          Pi(t, e), wl(e);
          return;
        }
        case G: {
          Pi(t, e), wl(e);
          var J = e.child;
          if (J.flags & tl) {
            var be = J.stateNode, $e = J.memoizedState, Be = $e !== null;
            if (be.isHidden = Be, Be) {
              var gt = J.alternate !== null && J.alternate.memoizedState !== null;
              gt || iN();
            }
          }
          if (o & at) {
            try {
              xb(e);
            } catch (qe) {
              $t(e, e.return, qe);
            }
            ST(e);
          }
          return;
        }
        case Me: {
          var pt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ut
          ) {
            var F = xr;
            xr = F || pt, Pi(t, e), xr = F;
          } else
            Pi(t, e);
          if (wl(e), o & tl) {
            var ee = e.stateNode, B = e.memoizedState, se = B !== null, Ne = e;
            if (ee.isHidden = se, se && !pt && (Ne.mode & ut) !== Ge) {
              ze = Ne;
              for (var Te = Ne.child; Te !== null; )
                ze = Te, Db(Te), Te = Te.sibling;
            }
            gb(Ne, se);
          }
          return;
        }
        case Ce: {
          Pi(t, e), wl(e), o & at && ST(e);
          return;
        }
        case Ve:
          return;
        default: {
          Pi(t, e), wl(e);
          return;
        }
      }
    }
    function wl(e) {
      var t = e.flags;
      if (t & Bt) {
        try {
          Cb(e);
        } catch (a) {
          $t(e, e.return, a);
        }
        e.flags &= ~Bt;
      }
      t & ma && (e.flags &= ~ma);
    }
    function kb(e, t, a) {
      Of = a, zf = t, ze = e, CT(e, t, a), Of = null, zf = null;
    }
    function CT(e, t, a) {
      for (var i = (e.mode & ut) !== Ge; ze !== null; ) {
        var o = ze, s = o.child;
        if (o.tag === Me && i) {
          var f = o.memoizedState !== null, h = f || fy;
          if (h) {
            j0(e, t, a);
            continue;
          } else {
            var g = o.alternate, E = g !== null && g.memoizedState !== null, T = E || xr, z = fy, _ = xr;
            fy = h, xr = T, xr && !_ && (ze = o, bb(o));
            for (var $ = s; $ !== null; )
              ze = $, CT(
                $,
                // New root; bubble back up to here and stop.
                t,
                a
              ), $ = $.sibling;
            ze = o, fy = z, xr = _, j0(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & ur) !== Pe && s !== null ? (s.return = o, ze = s) : j0(e, t, a);
      }
    }
    function j0(e, t, a) {
      for (; ze !== null; ) {
        var i = ze;
        if ((i.flags & ur) !== Pe) {
          var o = i.alternate;
          Lt(i);
          try {
            mb(t, o, i, a);
          } catch (f) {
            $t(i, i.return, f);
          }
          Dn();
        }
        if (i === e) {
          ze = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ze = s;
          return;
        }
        ze = i.return;
      }
    }
    function Db(e) {
      for (; ze !== null; ) {
        var t = ze, a = t.child;
        switch (t.tag) {
          case L:
          case X:
          case W:
          case ae: {
            if (t.mode & We)
              try {
                xl(), Vi(qn, t, t.return);
              } finally {
                Tl(t);
              }
            else
              Vi(qn, t, t.return);
            break;
          }
          case b: {
            Uf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && F0(t, t.return, i);
            break;
          }
          case j: {
            Uf(t, t.return);
            break;
          }
          case Me: {
            var o = t.memoizedState !== null;
            if (o) {
              TT(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ze = a) : TT(e);
      }
    }
    function TT(e) {
      for (; ze !== null; ) {
        var t = ze;
        if (t === e) {
          ze = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ze = a;
          return;
        }
        ze = t.return;
      }
    }
    function bb(e) {
      for (; ze !== null; ) {
        var t = ze, a = t.child;
        if (t.tag === Me) {
          var i = t.memoizedState !== null;
          if (i) {
            xT(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ze = a) : xT(e);
      }
    }
    function xT(e) {
      for (; ze !== null; ) {
        var t = ze;
        Lt(t);
        try {
          yb(t);
        } catch (i) {
          $t(t, t.return, i);
        }
        if (Dn(), t === e) {
          ze = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ze = a;
          return;
        }
        ze = t.return;
      }
    }
    function Nb(e, t, a, i) {
      ze = t, Mb(t, e, a, i);
    }
    function Mb(e, t, a, i) {
      for (; ze !== null; ) {
        var o = ze, s = o.child;
        (o.subtreeFlags & ya) !== Pe && s !== null ? (s.return = o, ze = s) : Lb(e, t, a, i);
      }
    }
    function Lb(e, t, a, i) {
      for (; ze !== null; ) {
        var o = ze;
        if ((o.flags & Qt) !== Pe) {
          Lt(o);
          try {
            _b(t, o, a, i);
          } catch (f) {
            $t(o, o.return, f);
          }
          Dn();
        }
        if (o === e) {
          ze = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, ze = s;
          return;
        }
        ze = o.return;
      }
    }
    function _b(e, t, a, i) {
      switch (t.tag) {
        case L:
        case X:
        case ae: {
          if (t.mode & We) {
            S0();
            try {
              Su(Cr | Kn, t);
            } finally {
              g0(t);
            }
          } else
            Su(Cr | Kn, t);
          break;
        }
      }
    }
    function Ob(e) {
      ze = e, zb();
    }
    function zb() {
      for (; ze !== null; ) {
        var e = ze, t = e.child;
        if ((ze.flags & Rt) !== Pe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              ze = o, Hb(o, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var h = f.sibling;
                    f.sibling = null, f = h;
                  } while (f !== null);
                }
              }
            }
            ze = e;
          }
        }
        (e.subtreeFlags & ya) !== Pe && t !== null ? (t.return = e, ze = t) : Ub();
      }
    }
    function Ub() {
      for (; ze !== null; ) {
        var e = ze;
        (e.flags & Qt) !== Pe && (Lt(e), Ab(e), Dn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ze = t;
          return;
        }
        ze = e.return;
      }
    }
    function Ab(e) {
      switch (e.tag) {
        case L:
        case X:
        case ae: {
          e.mode & We ? (S0(), Vi(Cr | Kn, e, e.return), g0(e)) : Vi(Cr | Kn, e, e.return);
          break;
        }
      }
    }
    function Hb(e, t) {
      for (; ze !== null; ) {
        var a = ze;
        Lt(a), Fb(a, t), Dn();
        var i = a.child;
        i !== null ? (i.return = a, ze = i) : Ib(e);
      }
    }
    function Ib(e) {
      for (; ze !== null; ) {
        var t = ze, a = t.sibling, i = t.return;
        if (hT(t), t === e) {
          ze = null;
          return;
        }
        if (a !== null) {
          a.return = i, ze = a;
          return;
        }
        ze = i;
      }
    }
    function Fb(e, t) {
      switch (e.tag) {
        case L:
        case X:
        case ae: {
          e.mode & We ? (S0(), Vi(Cr, e, t), g0(e)) : Vi(Cr, e, t);
          break;
        }
      }
    }
    function Bb(e) {
      switch (e.tag) {
        case L:
        case X:
        case ae: {
          try {
            Su(qn | Kn, e);
          } catch (a) {
            $t(e, e.return, a);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            $t(e, e.return, a);
          }
          break;
        }
      }
    }
    function Vb(e) {
      switch (e.tag) {
        case L:
        case X:
        case ae: {
          try {
            Su(Cr | Kn, e);
          } catch (t) {
            $t(e, e.return, t);
          }
          break;
        }
      }
    }
    function jb(e) {
      switch (e.tag) {
        case L:
        case X:
        case ae: {
          try {
            Vi(qn | Kn, e, e.return);
          } catch (a) {
            $t(e, e.return, a);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && F0(e, e.return, t);
          break;
        }
      }
    }
    function Pb(e) {
      switch (e.tag) {
        case L:
        case X:
        case ae:
          try {
            Vi(Cr | Kn, e, e.return);
          } catch (t) {
            $t(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var qp = Symbol.for;
      qp("selector.component"), qp("selector.has_pseudo_class"), qp("selector.role"), qp("selector.test_id"), qp("selector.text");
    }
    var $b = [];
    function Yb() {
      $b.forEach(function(e) {
        return e();
      });
    }
    var Gb = m.ReactCurrentActQueue;
    function Wb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function wT() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Gb.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Qb = Math.ceil, P0 = m.ReactCurrentDispatcher, $0 = m.ReactCurrentOwner, Rr = m.ReactCurrentBatchConfig, $i = m.ReactCurrentActQueue, Jn = (
      /*             */
      0
    ), RT = (
      /*               */
      1
    ), kr = (
      /*                */
      2
    ), pi = (
      /*                */
      4
    ), mo = 0, Xp = 1, As = 2, py = 3, Zp = 4, kT = 5, Y0 = 6, yt = Jn, ta = null, hn = null, er = te, Rl = te, G0 = cu(te), tr = mo, Jp = null, vy = te, ev = te, hy = te, tv = null, ba = null, W0 = 0, DT = 500, bT = 1 / 0, Kb = 500, yo = null;
    function nv() {
      bT = Xt() + Kb;
    }
    function NT() {
      return bT;
    }
    var my = !1, Q0 = null, Af = null, Hs = !1, Cu = null, rv = te, K0 = [], q0 = null, qb = 50, av = 0, X0 = null, Z0 = !1, yy = !1, Xb = 50, Hf = 0, gy = null, iv = Ht, Sy = te, MT = !1;
    function Ey() {
      return ta;
    }
    function na() {
      return (yt & (kr | pi)) !== Jn ? Xt() : (iv !== Ht || (iv = Xt()), iv);
    }
    function Tu(e) {
      var t = e.mode;
      if ((t & ut) === Ge)
        return Ke;
      if ((yt & kr) !== Jn && er !== te)
        return Nn(er);
      var a = Wk() !== Gk;
      if (a) {
        if (Rr.transition !== null) {
          var i = Rr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Sy === mt && (Sy = Yd()), Sy;
      }
      var o = Ca();
      if (o !== mt)
        return o;
      var s = LR();
      return s;
    }
    function Zb(e) {
      var t = e.mode;
      return (t & ut) === Ge ? Ke : Sg();
    }
    function nr(e, t, a, i) {
      TN(), MT && y("useInsertionEffect must not schedule updates."), Z0 && (yy = !0), Zl(e, a, i), (yt & kr) !== te && e === ta ? RN(t) : (Wn && qd(e, t, a), kN(t), e === ta && ((yt & kr) === Jn && (ev = it(ev, a)), tr === Zp && xu(e, er)), Na(e, i), a === Ke && yt === Jn && (t.mode & ut) === Ge && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !$i.isBatchingLegacy && (nv(), NE()));
    }
    function Jb(e, t, a) {
      var i = e.current;
      i.lanes = t, Zl(e, t, a), Na(e, a);
    }
    function eN(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (yt & kr) !== Jn
      );
    }
    function Na(e, t) {
      var a = e.callbackNode;
      mg(e, t);
      var i = us(e, e === ta ? er : te);
      if (i === te) {
        a !== null && GT(a), e.callbackNode = null, e.callbackPriority = mt;
        return;
      }
      var o = Cn(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !($i.current !== null && a !== i1)) {
        a == null && s !== Ke && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && GT(a);
      var f;
      if (o === Ke)
        e.tag === fu ? ($i.isBatchingLegacy !== null && ($i.didScheduleLegacyUpdate = !0), Nk(OT.bind(null, e))) : bE(OT.bind(null, e)), $i.current !== null ? $i.current.push(du) : OR(function() {
          (yt & (kr | pi)) === Jn && du();
        }), f = null;
      else {
        var h;
        switch (ps(i)) {
          case sr:
            h = Ec;
            break;
          case Qn:
            h = Xr;
            break;
          case Ni:
            h = ri;
            break;
          case fs:
            h = rl;
            break;
          default:
            h = ri;
            break;
        }
        f = l1(h, LT.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = f;
    }
    function LT(e, t) {
      if (TD(), iv = Ht, Sy = te, (yt & (kr | pi)) !== Jn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = So();
      if (i && e.callbackNode !== a)
        return null;
      var o = us(e, e === ta ? er : te);
      if (o === te)
        return null;
      var s = !cs(e, o) && !_h(e, o) && !t, f = s ? cN(e, o) : Ty(e, o);
      if (f !== mo) {
        if (f === As) {
          var h = Pd(e);
          h !== te && (o = h, f = J0(e, h));
        }
        if (f === Xp) {
          var g = Jp;
          throw Is(e, te), xu(e, o), Na(e, Xt()), g;
        }
        if (f === Y0)
          xu(e, o);
        else {
          var E = !cs(e, o), T = e.current.alternate;
          if (E && !nN(T)) {
            if (f = Ty(e, o), f === As) {
              var z = Pd(e);
              z !== te && (o = z, f = J0(e, z));
            }
            if (f === Xp) {
              var _ = Jp;
              throw Is(e, te), xu(e, o), Na(e, Xt()), _;
            }
          }
          e.finishedWork = T, e.finishedLanes = o, tN(e, f, o);
        }
      }
      return Na(e, Xt()), e.callbackNode === a ? LT.bind(null, e) : null;
    }
    function J0(e, t) {
      var a = tv;
      if (Ln(e)) {
        var i = Is(e, t);
        i.flags |= ln, Tk(e.containerInfo);
      }
      var o = Ty(e, t);
      if (o !== As) {
        var s = ba;
        ba = a, s !== null && _T(s);
      }
      return o;
    }
    function _T(e) {
      ba === null ? ba = e : ba.push.apply(ba, e);
    }
    function tN(e, t, a) {
      switch (t) {
        case mo:
        case Xp:
          throw new Error("Root did not complete. This is a bug in React.");
        case As: {
          Fs(e, ba, yo);
          break;
        }
        case py: {
          if (xu(e, a), $c(a) && // do not delay if we're inside an act() scope
          !WT()) {
            var i = W0 + DT - Xt();
            if (i > 10) {
              var o = us(e, te);
              if (o !== te)
                break;
              var s = e.suspendedLanes;
              if (!Xl(s, a)) {
                na(), Qd(e, s);
                break;
              }
              e.timeoutHandle = qg(Fs.bind(null, e, ba, yo), i);
              break;
            }
          }
          Fs(e, ba, yo);
          break;
        }
        case Zp: {
          if (xu(e, a), Lh(a))
            break;
          if (!WT()) {
            var f = Mh(e, a), h = f, g = Xt() - h, E = CN(g) - g;
            if (E > 10) {
              e.timeoutHandle = qg(Fs.bind(null, e, ba, yo), E);
              break;
            }
          }
          Fs(e, ba, yo);
          break;
        }
        case kT: {
          Fs(e, ba, yo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function nN(e) {
      for (var t = e; ; ) {
        if (t.flags & ts) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], f = s.getSnapshot, h = s.value;
                try {
                  if (!Oe(f(), h))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var g = t.child;
        if (t.subtreeFlags & ts && g !== null) {
          g.return = t, t = g;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function xu(e, t) {
      t = Wo(t, hy), t = Wo(t, ev), Wd(e, t);
    }
    function OT(e) {
      if (xD(), (yt & (kr | pi)) !== Jn)
        throw new Error("Should not already be working.");
      So();
      var t = us(e, te);
      if (!Ir(t, Ke))
        return Na(e, Xt()), null;
      var a = Ty(e, t);
      if (e.tag !== fu && a === As) {
        var i = Pd(e);
        i !== te && (t = i, a = J0(e, i));
      }
      if (a === Xp) {
        var o = Jp;
        throw Is(e, te), xu(e, t), Na(e, Xt()), o;
      }
      if (a === Y0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Fs(e, ba, yo), Na(e, Xt()), null;
    }
    function rN(e, t) {
      t !== te && (Qo(e, it(t, Ke)), Na(e, Xt()), (yt & (kr | pi)) === Jn && (nv(), du()));
    }
    function e1(e, t) {
      var a = yt;
      yt |= RT;
      try {
        return e(t);
      } finally {
        yt = a, yt === Jn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !$i.isBatchingLegacy && (nv(), NE());
      }
    }
    function aN(e, t, a, i, o) {
      var s = Ca(), f = Rr.transition;
      try {
        return Rr.transition = null, Mn(sr), e(t, a, i, o);
      } finally {
        Mn(s), Rr.transition = f, yt === Jn && nv();
      }
    }
    function go(e) {
      Cu !== null && Cu.tag === fu && (yt & (kr | pi)) === Jn && So();
      var t = yt;
      yt |= RT;
      var a = Rr.transition, i = Ca();
      try {
        return Rr.transition = null, Mn(sr), e ? e() : void 0;
      } finally {
        Mn(i), Rr.transition = a, yt = t, (yt & (kr | pi)) === Jn && du();
      }
    }
    function zT() {
      return (yt & (kr | pi)) !== Jn;
    }
    function Cy(e, t) {
      Br(G0, Rl, e), Rl = it(Rl, t);
    }
    function t1(e) {
      Rl = G0.current, Fr(G0, e);
    }
    function Is(e, t) {
      e.finishedWork = null, e.finishedLanes = te;
      var a = e.timeoutHandle;
      if (a !== Xg && (e.timeoutHandle = Xg, _R(a)), hn !== null)
        for (var i = hn.return; i !== null; ) {
          var o = i.alternate;
          sT(o, i), i = i.return;
        }
      ta = e;
      var s = Bs(e.current, null);
      return hn = s, er = Rl = t, tr = mo, Jp = null, vy = te, ev = te, hy = te, tv = null, ba = null, Xk(), Ai.discardPendingWarnings(), s;
    }
    function UT(e, t) {
      do {
        var a = hn;
        try {
          if (Nm(), fC(), Dn(), $0.current = null, a === null || a.return === null) {
            tr = Xp, Jp = t, hn = null;
            return;
          }
          if (ce && a.mode & We && oy(a, !0), ir)
            if (jl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Dh(a, i, er);
            } else
              Rc(a, t, er);
          bD(e, a.return, a, t, er), FT(a);
        } catch (o) {
          t = o, hn === a && a !== null ? (a = a.return, hn = a) : a = hn;
          continue;
        }
        return;
      } while (!0);
    }
    function AT() {
      var e = P0.current;
      return P0.current = ny, e === null ? ny : e;
    }
    function HT(e) {
      P0.current = e;
    }
    function iN() {
      W0 = Xt();
    }
    function lv(e) {
      vy = it(e, vy);
    }
    function lN() {
      tr === mo && (tr = py);
    }
    function n1() {
      (tr === mo || tr === py || tr === As) && (tr = Zp), ta !== null && (ss(vy) || ss(ev)) && xu(ta, er);
    }
    function oN(e) {
      tr !== Zp && (tr = As), tv === null ? tv = [e] : tv.push(e);
    }
    function uN() {
      return tr === mo;
    }
    function Ty(e, t) {
      var a = yt;
      yt |= kr;
      var i = AT();
      if (ta !== e || er !== t) {
        if (Wn) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (ov(e, er), o.clear()), Wc(e, t);
        }
        yo = Xd(), Is(e, t);
      }
      ja(t);
      do
        try {
          sN();
          break;
        } catch (s) {
          UT(e, s);
        }
      while (!0);
      if (Nm(), yt = a, HT(i), hn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return jo(), ta = null, er = te, tr;
    }
    function sN() {
      for (; hn !== null; )
        IT(hn);
    }
    function cN(e, t) {
      var a = yt;
      yt |= kr;
      var i = AT();
      if (ta !== e || er !== t) {
        if (Wn) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (ov(e, er), o.clear()), Wc(e, t);
        }
        yo = Xd(), nv(), Is(e, t);
      }
      ja(t);
      do
        try {
          fN();
          break;
        } catch (s) {
          UT(e, s);
        }
      while (!0);
      return Nm(), HT(i), yt = a, hn !== null ? (as(), mo) : (jo(), ta = null, er = te, tr);
    }
    function fN() {
      for (; hn !== null && !Sc(); )
        IT(hn);
    }
    function IT(e) {
      var t = e.alternate;
      Lt(e);
      var a;
      (e.mode & We) !== Ge ? (y0(e), a = r1(t, e, Rl), oy(e, !0)) : a = r1(t, e, Rl), Dn(), e.memoizedProps = e.pendingProps, a === null ? FT(e) : hn = a, $0.current = null;
    }
    function FT(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Qr) === Pe) {
          Lt(t);
          var o = void 0;
          if ((t.mode & We) === Ge ? o = uT(a, t, Rl) : (y0(t), o = uT(a, t, Rl), oy(t, !1)), Dn(), o !== null) {
            hn = o;
            return;
          }
        } else {
          var s = lb(a, t);
          if (s !== null) {
            s.flags &= gh, hn = s;
            return;
          }
          if ((t.mode & We) !== Ge) {
            oy(t, !1);
            for (var f = t.actualDuration, h = t.child; h !== null; )
              f += h.actualDuration, h = h.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Qr, i.subtreeFlags = Pe, i.deletions = null;
          else {
            tr = Y0, hn = null;
            return;
          }
        }
        var g = t.sibling;
        if (g !== null) {
          hn = g;
          return;
        }
        t = i, hn = t;
      } while (t !== null);
      tr === mo && (tr = kT);
    }
    function Fs(e, t, a) {
      var i = Ca(), o = Rr.transition;
      try {
        Rr.transition = null, Mn(sr), dN(e, t, a, i);
      } finally {
        Rr.transition = o, Mn(i);
      }
      return null;
    }
    function dN(e, t, a, i) {
      do
        So();
      while (Cu !== null);
      if (xN(), (yt & (kr | pi)) !== Jn)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (Tc(s), o === null)
        return Id(), null;
      if (s === te && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = te, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = mt;
      var f = it(o.lanes, o.childLanes);
      Kd(e, f), e === ta && (ta = null, hn = null, er = te), ((o.subtreeFlags & ya) !== Pe || (o.flags & ya) !== Pe) && (Hs || (Hs = !0, q0 = a, l1(ri, function() {
        return So(), null;
      })));
      var h = (o.subtreeFlags & (Fo | zr | ur | ya)) !== Pe, g = (o.flags & (Fo | zr | ur | ya)) !== Pe;
      if (h || g) {
        var E = Rr.transition;
        Rr.transition = null;
        var T = Ca();
        Mn(sr);
        var z = yt;
        yt |= pi, $0.current = null, fb(e, o), AC(), Rb(e, o, s), RR(e.containerInfo), e.current = o, bh(s), kb(o, e, s), Vo(), Ch(), yt = z, Mn(T), Rr.transition = E;
      } else
        e.current = o, AC();
      var _ = Hs;
      if (Hs ? (Hs = !1, Cu = e, rv = s) : (Hf = 0, gy = null), f = e.pendingLanes, f === te && (Af = null), _ || PT(e.current, !1), ki(o.stateNode, i), Wn && e.memoizedUpdaters.clear(), Yb(), Na(e, Xt()), t !== null)
        for (var $ = e.onRecoverableError, Y = 0; Y < t.length; Y++) {
          var J = t[Y], be = J.stack, $e = J.digest;
          $(J.value, {
            componentStack: be,
            digest: $e
          });
        }
      if (my) {
        my = !1;
        var Be = Q0;
        throw Q0 = null, Be;
      }
      return Ir(rv, Ke) && e.tag !== fu && So(), f = e.pendingLanes, Ir(f, Ke) ? (CD(), e === X0 ? av++ : (av = 0, X0 = e)) : av = 0, du(), Id(), null;
    }
    function So() {
      if (Cu !== null) {
        var e = ps(rv), t = Cg(Ni, e), a = Rr.transition, i = Ca();
        try {
          return Rr.transition = null, Mn(t), vN();
        } finally {
          Mn(i), Rr.transition = a;
        }
      }
      return !1;
    }
    function pN(e) {
      K0.push(e), Hs || (Hs = !0, l1(ri, function() {
        return So(), null;
      }));
    }
    function vN() {
      if (Cu === null)
        return !1;
      var e = q0;
      q0 = null;
      var t = Cu, a = rv;
      if (Cu = null, rv = te, (yt & (kr | pi)) !== Jn)
        throw new Error("Cannot flush passive effects while already rendering.");
      Z0 = !0, yy = !1, Nh(a);
      var i = yt;
      yt |= pi, Ob(t.current), Nb(t, t.current, a, e);
      {
        var o = K0;
        K0 = [];
        for (var s = 0; s < o.length; s++) {
          var f = o[s];
          hb(t, f);
        }
      }
      rs(), PT(t.current, !0), yt = i, du(), yy ? t === gy ? Hf++ : (Hf = 0, gy = t) : Hf = 0, Z0 = !1, yy = !1, il(t);
      {
        var h = t.current.stateNode;
        h.effectDuration = 0, h.passiveEffectDuration = 0;
      }
      return !0;
    }
    function BT(e) {
      return Af !== null && Af.has(e);
    }
    function hN(e) {
      Af === null ? Af = /* @__PURE__ */ new Set([e]) : Af.add(e);
    }
    function mN(e) {
      my || (my = !0, Q0 = e);
    }
    var yN = mN;
    function VT(e, t, a) {
      var i = zs(a, t), o = IC(e, i, Ke), s = vu(e, o, Ke), f = na();
      s !== null && (Zl(s, Ke, f), Na(s, f));
    }
    function $t(e, t, a) {
      if (ub(a), uv(!1), e.tag === M) {
        VT(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === M) {
          VT(i, e, a);
          return;
        } else if (i.tag === b) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !BT(s)) {
            var f = zs(a, e), h = x0(i, f, Ke), g = vu(i, h, Ke), E = na();
            g !== null && (Zl(g, Ke, E), Na(g, E));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function gN(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = na();
      Qd(e, a), DN(e), ta === e && Xl(er, a) && (tr === Zp || tr === py && $c(er) && Xt() - W0 < DT ? Is(e, te) : hy = it(hy, a)), Na(e, o);
    }
    function jT(e, t) {
      t === mt && (t = Zb(e));
      var a = na(), i = ka(e, t);
      i !== null && (Zl(i, t, a), Na(i, a));
    }
    function SN(e) {
      var t = e.memoizedState, a = mt;
      t !== null && (a = t.retryLane), jT(e, a);
    }
    function EN(e, t) {
      var a = mt, i;
      switch (e.tag) {
        case G:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case Ce:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), jT(e, a);
    }
    function CN(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Qb(e / 1960) * 1960;
    }
    function TN() {
      if (av > qb)
        throw av = 0, X0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Hf > Xb && (Hf = 0, gy = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function xN() {
      Ai.flushLegacyContextWarning(), Ai.flushPendingUnsafeLifecycleWarnings();
    }
    function PT(e, t) {
      Lt(e), xy(e, Or, jb), t && xy(e, Vl, Pb), xy(e, Or, Bb), t && xy(e, Vl, Vb), Dn();
    }
    function xy(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== Pe ? i = i.child : ((i.flags & t) !== Pe && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var wy = null;
    function $T(e) {
      {
        if ((yt & kr) !== Jn || !(e.mode & ut))
          return;
        var t = e.tag;
        if (t !== A && t !== M && t !== b && t !== L && t !== X && t !== W && t !== ae)
          return;
        var a = nt(e) || "ReactComponent";
        if (wy !== null) {
          if (wy.has(a))
            return;
          wy.add(a);
        } else
          wy = /* @__PURE__ */ new Set([a]);
        var i = Sn;
        try {
          Lt(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Lt(e) : Dn();
        }
      }
    }
    var r1;
    {
      var wN = null;
      r1 = function(e, t, a) {
        var i = ZT(wN, t);
        try {
          return rT(e, t, a);
        } catch (s) {
          if (Hk() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Nm(), fC(), sT(e, t), ZT(t, i), t.mode & We && y0(t), Bl(null, rT, null, e, t, a), vg()) {
            var o = Dd();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var YT = !1, a1;
    a1 = /* @__PURE__ */ new Set();
    function RN(e) {
      if (fa && !gD())
        switch (e.tag) {
          case L:
          case X:
          case ae: {
            var t = hn && nt(hn) || "Unknown", a = t;
            if (!a1.has(a)) {
              a1.add(a);
              var i = nt(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case b: {
            YT || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), YT = !0);
            break;
          }
        }
    }
    function ov(e, t) {
      if (Wn) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          qd(e, i, t);
        });
      }
    }
    var i1 = {};
    function l1(e, t) {
      {
        var a = $i.current;
        return a !== null ? (a.push(t), i1) : gc(e, t);
      }
    }
    function GT(e) {
      if (e !== i1)
        return Eh(e);
    }
    function WT() {
      return $i.current !== null;
    }
    function kN(e) {
      {
        if (e.mode & ut) {
          if (!wT())
            return;
        } else if (!Wb() || yt !== Jn || e.tag !== L && e.tag !== X && e.tag !== ae)
          return;
        if ($i.current === null) {
          var t = Sn;
          try {
            Lt(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, nt(e));
          } finally {
            t ? Lt(e) : Dn();
          }
        }
      }
    }
    function DN(e) {
      e.tag !== fu && wT() && $i.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function uv(e) {
      MT = e;
    }
    var vi = null, If = null, bN = function(e) {
      vi = e;
    };
    function Ff(e) {
      {
        if (vi === null)
          return e;
        var t = vi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function o1(e) {
      return Ff(e);
    }
    function u1(e) {
      {
        if (vi === null)
          return e;
        var t = vi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Ff(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Ro,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function QT(e, t) {
      {
        if (vi === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case b: {
            typeof i == "function" && (o = !0);
            break;
          }
          case L: {
            (typeof i == "function" || s === yr) && (o = !0);
            break;
          }
          case X: {
            (s === Ro || s === yr) && (o = !0);
            break;
          }
          case W:
          case ae: {
            (s === ko || s === yr) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var f = vi(a);
          if (f !== void 0 && f === vi(i))
            return !0;
        }
        return !1;
      }
    }
    function KT(e) {
      {
        if (vi === null || typeof WeakSet != "function")
          return;
        If === null && (If = /* @__PURE__ */ new WeakSet()), If.add(e);
      }
    }
    var NN = function(e, t) {
      {
        if (vi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        So(), go(function() {
          s1(e.current, i, a);
        });
      }
    }, MN = function(e, t) {
      {
        if (e.context !== $a)
          return;
        So(), go(function() {
          sv(t, e, null, null);
        });
      }
    };
    function s1(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, f = e.tag, h = e.type, g = null;
        switch (f) {
          case L:
          case ae:
          case b:
            g = h;
            break;
          case X:
            g = h.render;
            break;
        }
        if (vi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var E = !1, T = !1;
        if (g !== null) {
          var z = vi(g);
          z !== void 0 && (a.has(z) ? T = !0 : t.has(z) && (f === b ? T = !0 : E = !0));
        }
        if (If !== null && (If.has(e) || i !== null && If.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || E) {
          var _ = ka(e, Ke);
          _ !== null && nr(_, e, Ke, Ht);
        }
        o !== null && !T && s1(o, t, a), s !== null && s1(s, t, a);
      }
    }
    var LN = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return c1(e.current, i, a), a;
      }
    };
    function c1(e, t, a) {
      {
        var i = e.child, o = e.sibling, s = e.tag, f = e.type, h = null;
        switch (s) {
          case L:
          case ae:
          case b:
            h = f;
            break;
          case X:
            h = f.render;
            break;
        }
        var g = !1;
        h !== null && t.has(h) && (g = !0), g ? _N(e, a) : i !== null && c1(i, t, a), o !== null && c1(o, t, a);
      }
    }
    function _N(e, t) {
      {
        var a = ON(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case j:
              t.add(i.stateNode);
              return;
            case U:
              t.add(i.stateNode.containerInfo);
              return;
            case M:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function ON(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === j)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var f1;
    {
      f1 = !1;
      try {
        var qT = Object.preventExtensions({});
      } catch {
        f1 = !0;
      }
    }
    function zN(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Pe, this.subtreeFlags = Pe, this.deletions = null, this.lanes = te, this.childLanes = te, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !f1 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ya = function(e, t, a, i) {
      return new zN(e, t, a, i);
    };
    function d1(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function UN(e) {
      return typeof e == "function" && !d1(e) && e.defaultProps === void 0;
    }
    function AN(e) {
      if (typeof e == "function")
        return d1(e) ? b : L;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Ro)
          return X;
        if (t === ko)
          return W;
      }
      return A;
    }
    function Bs(e, t) {
      var a = e.alternate;
      a === null ? (a = Ya(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Pe, a.subtreeFlags = Pe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Gn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case A:
        case L:
        case ae:
          a.type = Ff(e.type);
          break;
        case b:
          a.type = o1(e.type);
          break;
        case X:
          a.type = u1(e.type);
          break;
      }
      return a;
    }
    function HN(e, t) {
      e.flags &= Gn | Bt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = te, e.lanes = t, e.child = null, e.subtreeFlags = Pe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Pe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function IN(e, t, a) {
      var i;
      return e === Cm ? (i = ut, t === !0 && (i |= Zt, i |= Sa)) : i = Ge, Wn && (i |= We), Ya(M, null, null, i);
    }
    function p1(e, t, a, i, o, s) {
      var f = A, h = e;
      if (typeof e == "function")
        d1(e) ? (f = b, h = o1(h)) : h = Ff(h);
      else if (typeof e == "string")
        f = j;
      else {
        e:
          switch (e) {
            case mi:
              return wu(a.children, o, s, t);
            case wo:
              f = Q, o |= Zt, (o & ut) !== Ge && (o |= Sa);
              break;
            case Lu:
              return FN(a, o, s, t);
            case ei:
              return BN(a, o, s, t);
            case _u:
              return VN(a, o, s, t);
            case Kf:
              return XT(a, o, s, t);
            case Nv:
            case Dv:
            case Gy:
            case Wy:
            case bv:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Wf:
                    f = q;
                    break e;
                  case Qf:
                    f = V;
                    break e;
                  case Ro:
                    f = X, h = u1(h);
                    break e;
                  case ko:
                    f = W;
                    break e;
                  case yr:
                    f = ve, h = null;
                    break e;
                }
              var g = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var E = i ? nt(i) : null;
                E && (g += `

Check the render method of \`` + E + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + g));
            }
          }
      }
      var T = Ya(f, a, t, o);
      return T.elementType = e, T.type = h, T.lanes = s, T._debugOwner = i, T;
    }
    function v1(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, f = e.props, h = p1(o, s, f, i, t, a);
      return h._debugSource = e._source, h._debugOwner = e._owner, h;
    }
    function wu(e, t, a, i) {
      var o = Ya(H, e, i, t);
      return o.lanes = a, o;
    }
    function FN(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = Ya(fe, e, i, t | We);
      return o.elementType = Lu, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function BN(e, t, a, i) {
      var o = Ya(G, e, i, t);
      return o.elementType = ei, o.lanes = a, o;
    }
    function VN(e, t, a, i) {
      var o = Ya(Ce, e, i, t);
      return o.elementType = _u, o.lanes = a, o;
    }
    function XT(e, t, a, i) {
      var o = Ya(Me, e, i, t);
      o.elementType = Kf, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function h1(e, t, a) {
      var i = Ya(Z, e, null, t);
      return i.lanes = a, i;
    }
    function jN() {
      var e = Ya(j, null, null, Ge);
      return e.elementType = "DELETED", e;
    }
    function PN(e) {
      var t = Ya(me, null, null, Ge);
      return t.stateNode = e, t;
    }
    function m1(e, t, a) {
      var i = e.children !== null ? e.children : [], o = Ya(U, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function ZT(e, t) {
      return e === null && (e = Ya(A, null, null, Ge)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function $N(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Xg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = mt, this.eventTimes = Gc(te), this.expirationTimes = Gc(Ht), this.pendingLanes = te, this.suspendedLanes = te, this.pingedLanes = te, this.expiredLanes = te, this.mutableReadLanes = te, this.finishedLanes = te, this.entangledLanes = te, this.entanglements = Gc(te), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < jt; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Cm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case fu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function JT(e, t, a, i, o, s, f, h, g, E) {
      var T = new $N(e, t, a, h, g), z = IN(t, s);
      T.current = z, z.stateNode = T;
      {
        var _ = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        z.memoizedState = _;
      }
      return wS(z), T;
    }
    var y1 = "18.2.0";
    function YN(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Xa(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Ua,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var g1, S1;
    g1 = !1, S1 = {};
    function ex(e) {
      if (!e)
        return $a;
      var t = va(e), a = bk(t);
      if (t.tag === b) {
        var i = t.type;
        if (gl(i))
          return kE(t, i, a);
      }
      return a;
    }
    function GN(e, t) {
      {
        var a = va(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = ga(a);
        if (o === null)
          return null;
        if (o.mode & Zt) {
          var s = nt(a) || "Component";
          if (!S1[s]) {
            S1[s] = !0;
            var f = Sn;
            try {
              Lt(o), a.mode & Zt ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Lt(f) : Dn();
            }
          }
        }
        return o.stateNode;
      }
    }
    function tx(e, t, a, i, o, s, f, h) {
      var g = !1, E = null;
      return JT(e, t, g, E, a, i, o, s, f);
    }
    function nx(e, t, a, i, o, s, f, h, g, E) {
      var T = !0, z = JT(a, i, T, e, o, s, f, h, g);
      z.context = ex(null);
      var _ = z.current, $ = na(), Y = Tu(_), J = vo($, Y);
      return J.callback = t ?? null, vu(_, J, Y), Jb(z, Y, $), z;
    }
    function sv(e, t, a, i) {
      Th(t, e);
      var o = t.current, s = na(), f = Tu(o);
      Pl(f);
      var h = ex(a);
      t.context === null ? t.context = h : t.pendingContext = h, fa && Sn !== null && !g1 && (g1 = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, nt(Sn) || "Unknown"));
      var g = vo(s, f);
      g.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), g.callback = i);
      var E = vu(o, g, f);
      return E !== null && (nr(E, o, f, s), zm(E, o, f)), f;
    }
    function Ry(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case j:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function WN(e) {
      switch (e.tag) {
        case M: {
          var t = e.stateNode;
          if (Ln(t)) {
            var a = yg(t);
            rN(t, a);
          }
          break;
        }
        case G: {
          go(function() {
            var o = ka(e, Ke);
            if (o !== null) {
              var s = na();
              nr(o, e, Ke, s);
            }
          });
          var i = Ke;
          E1(e, i);
          break;
        }
      }
    }
    function rx(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = zh(a.retryLane, t));
    }
    function E1(e, t) {
      rx(e, t);
      var a = e.alternate;
      a && rx(a, t);
    }
    function QN(e) {
      if (e.tag === G) {
        var t = Po, a = ka(e, t);
        if (a !== null) {
          var i = na();
          nr(a, e, t, i);
        }
        E1(e, t);
      }
    }
    function KN(e) {
      if (e.tag === G) {
        var t = Tu(e), a = ka(e, t);
        if (a !== null) {
          var i = na();
          nr(a, e, t, i);
        }
        E1(e, t);
      }
    }
    function ax(e) {
      var t = Sh(e);
      return t === null ? null : t.stateNode;
    }
    var ix = function(e) {
      return null;
    };
    function qN(e) {
      return ix(e);
    }
    var lx = function(e) {
      return !1;
    };
    function XN(e) {
      return lx(e);
    }
    var ox = null, ux = null, sx = null, cx = null, fx = null, dx = null, px = null, vx = null, hx = null;
    {
      var mx = function(e, t, a) {
        var i = t[a], o = An(e) ? e.slice() : ft({}, e);
        return a + 1 === t.length ? (An(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = mx(e[i], t, a + 1), o);
      }, yx = function(e, t) {
        return mx(e, t, 0);
      }, gx = function(e, t, a, i) {
        var o = t[i], s = An(e) ? e.slice() : ft({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[o], An(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = gx(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, Sx = function(e, t, a) {
        if (t.length !== a.length) {
          w("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              w("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return gx(e, t, a, 0);
      }, Ex = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = An(e) ? e.slice() : ft({}, e);
        return s[o] = Ex(e[o], t, a + 1, i), s;
      }, Cx = function(e, t, a) {
        return Ex(e, t, 0, a);
      }, C1 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      ox = function(e, t, a, i) {
        var o = C1(e, t);
        if (o !== null) {
          var s = Cx(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = ft({}, e.memoizedProps);
          var f = ka(e, Ke);
          f !== null && nr(f, e, Ke, Ht);
        }
      }, ux = function(e, t, a) {
        var i = C1(e, t);
        if (i !== null) {
          var o = yx(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = ft({}, e.memoizedProps);
          var s = ka(e, Ke);
          s !== null && nr(s, e, Ke, Ht);
        }
      }, sx = function(e, t, a, i) {
        var o = C1(e, t);
        if (o !== null) {
          var s = Sx(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = ft({}, e.memoizedProps);
          var f = ka(e, Ke);
          f !== null && nr(f, e, Ke, Ht);
        }
      }, cx = function(e, t, a) {
        e.pendingProps = Cx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ka(e, Ke);
        i !== null && nr(i, e, Ke, Ht);
      }, fx = function(e, t) {
        e.pendingProps = yx(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ka(e, Ke);
        a !== null && nr(a, e, Ke, Ht);
      }, dx = function(e, t, a) {
        e.pendingProps = Sx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ka(e, Ke);
        i !== null && nr(i, e, Ke, Ht);
      }, px = function(e) {
        var t = ka(e, Ke);
        t !== null && nr(t, e, Ke, Ht);
      }, vx = function(e) {
        ix = e;
      }, hx = function(e) {
        lx = e;
      };
    }
    function ZN(e) {
      var t = ga(e);
      return t === null ? null : t.stateNode;
    }
    function JN(e) {
      return null;
    }
    function eM() {
      return Sn;
    }
    function tM(e) {
      var t = e.findFiberByHostInstance, a = m.ReactCurrentDispatcher;
      return Ad({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: ox,
        overrideHookStateDeletePath: ux,
        overrideHookStateRenamePath: sx,
        overrideProps: cx,
        overridePropsDeletePath: fx,
        overridePropsRenamePath: dx,
        setErrorHandler: vx,
        setSuspenseHandler: hx,
        scheduleUpdate: px,
        currentDispatcherRef: a,
        findHostInstanceByFiber: ZN,
        findFiberByHostInstance: t || JN,
        // React Refresh
        findHostInstancesForRefresh: LN,
        scheduleRefresh: NN,
        scheduleRoot: MN,
        setRefreshHandler: bN,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: eM,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: y1
      });
    }
    var Tx = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function T1(e) {
      this._internalRoot = e;
    }
    ky.prototype.render = T1.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Dy(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== En) {
          var i = ax(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      sv(e, t, null, null);
    }, ky.prototype.unmount = T1.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        zT() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), go(function() {
          sv(null, e, null, null);
        }), CE(t);
      }
    };
    function nM(e, t) {
      if (!Dy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      xx(e);
      var a = !1, i = !1, o = "", s = Tx;
      t != null && (t.hydrate ? w("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === xo && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = tx(e, Cm, null, a, i, o, s);
      vm(f.current, e);
      var h = e.nodeType === En ? e.parentNode : e;
      return yp(h), new T1(f);
    }
    function ky(e) {
      this._internalRoot = e;
    }
    function rM(e) {
      e && jh(e);
    }
    ky.prototype.unstable_scheduleHydration = rM;
    function aM(e, t, a) {
      if (!Dy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      xx(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, f = !1, h = "", g = Tx;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (h = a.identifierPrefix), a.onRecoverableError !== void 0 && (g = a.onRecoverableError));
      var E = nx(t, null, e, Cm, i, s, f, h, g);
      if (vm(E.current, e), yp(e), o)
        for (var T = 0; T < o.length; T++) {
          var z = o[T];
          dD(E, z);
        }
      return new ky(E);
    }
    function Dy(e) {
      return !!(e && (e.nodeType === Mr || e.nodeType === Fa || e.nodeType === zl || !Xe));
    }
    function cv(e) {
      return !!(e && (e.nodeType === Mr || e.nodeType === Fa || e.nodeType === zl || e.nodeType === En && e.nodeValue === " react-mount-point-unstable "));
    }
    function xx(e) {
      e.nodeType === Mr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), bp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var iM = m.ReactCurrentOwner, wx;
    wx = function(e) {
      if (e._reactRootContainer && e.nodeType !== En) {
        var t = ax(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = x1(e), o = !!(i && su(i));
      o && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Mr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function x1(e) {
      return e ? e.nodeType === Fa ? e.documentElement : e.firstChild : null;
    }
    function Rx() {
    }
    function lM(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var _ = Ry(f);
            s.call(_);
          };
        }
        var f = nx(
          t,
          i,
          e,
          fu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Rx
        );
        e._reactRootContainer = f, vm(f.current, e);
        var h = e.nodeType === En ? e.parentNode : e;
        return yp(h), go(), f;
      } else {
        for (var g; g = e.lastChild; )
          e.removeChild(g);
        if (typeof i == "function") {
          var E = i;
          i = function() {
            var _ = Ry(T);
            E.call(_);
          };
        }
        var T = tx(
          e,
          fu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Rx
        );
        e._reactRootContainer = T, vm(T.current, e);
        var z = e.nodeType === En ? e.parentNode : e;
        return yp(z), go(function() {
          sv(t, T, a, i);
        }), T;
      }
    }
    function oM(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function by(e, t, a, i, o) {
      wx(a), oM(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = lM(a, t, e, o, i);
      else {
        if (f = s, typeof o == "function") {
          var h = o;
          o = function() {
            var g = Ry(f);
            h.call(g);
          };
        }
        sv(t, f, e, o);
      }
      return Ry(f);
    }
    function uM(e) {
      {
        var t = iM.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ut(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Mr ? e : GN(e, "findDOMNode");
    }
    function sM(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !cv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = bp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return by(null, e, t, !0, a);
    }
    function cM(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !cv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = bp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return by(null, e, t, !1, a);
    }
    function fM(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !cv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !es(e))
        throw new Error("parentComponent must be a valid React Component");
      return by(e, t, a, !1, i);
    }
    function dM(e) {
      if (!cv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = bp(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = x1(e), i = a && !su(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return go(function() {
          by(null, null, e, !1, function() {
            e._reactRootContainer = null, CE(e);
          });
        }), !0;
      } else {
        {
          var o = x1(e), s = !!(o && su(o)), f = e.nodeType === Mr && cv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Le(WN), Ah(QN), hs(KN), Jd(Ca), Ih(ds), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), mh(hR), pc(e1, aN, go);
    function pM(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Dy(t))
        throw new Error("Target container is not a DOM element.");
      return YN(e, t, null, a);
    }
    function vM(e, t, a, i) {
      return fM(e, t, a, i);
    }
    var w1 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [su, mf, hm, dc, Xu, e1]
    };
    function hM(e, t) {
      return w1.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), nM(e, t);
    }
    function mM(e, t, a) {
      return w1.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), aM(e, t, a);
    }
    function yM(e) {
      return zT() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), go(e);
    }
    var gM = tM({
      findFiberByHostInstance: Rs,
      bundleType: 1,
      version: y1,
      rendererPackageName: "react-dom"
    });
    if (!gM && qt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var kx = window.location.protocol;
      /^(https?|file):$/.test(kx) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (kx === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    La.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = w1, La.createPortal = pM, La.createRoot = hM, La.findDOMNode = uM, La.flushSync = yM, La.hydrate = sM, La.hydrateRoot = mM, La.render = cM, La.unmountComponentAtNode = dM, La.unstable_batchedUpdates = e1, La.unstable_renderSubtreeIntoContainer = vM, La.version = y1, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), La;
}
(function(d) {
  function v() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (m) {
        console.error(m);
      }
    }
  }
  process.env.NODE_ENV === "production" ? (v(), d.exports = JM()) : d.exports = eL();
})(KM);
const tL = /* @__PURE__ */ QM(L1), Vy = 0, Du = 1, $f = 2, tw = 4;
function nw(d, v) {
  return (m) => d(v(m));
}
function nL(d, v) {
  return v(d);
}
function rw(d, v) {
  return (m) => d(v, m);
}
function Ux(d, v) {
  return () => d(v);
}
function jy(d, v) {
  return v(d), d;
}
function cn(...d) {
  return d;
}
function rL(d) {
  d();
}
function Ax(d) {
  return () => d;
}
function aL(...d) {
  return () => {
    d.map(rL);
  };
}
function H1(d) {
  return d !== void 0;
}
function Yf() {
}
function Ft(d, v) {
  return d(Du, v);
}
function vt(d, v) {
  d(Vy, v);
}
function I1(d) {
  d($f);
}
function Qa(d) {
  return d(tw);
}
function Qe(d, v) {
  return Ft(d, rw(v, Vy));
}
function To(d, v) {
  const m = d(Du, (C) => {
    m(), v(C);
  });
  return m;
}
function kt() {
  const d = [];
  return (v, m) => {
    switch (v) {
      case $f:
        d.splice(0, d.length);
        return;
      case Du:
        return d.push(m), () => {
          const C = d.indexOf(m);
          C > -1 && d.splice(C, 1);
        };
      case Vy:
        d.slice().forEach((C) => {
          C(m);
        });
        return;
      default:
        throw new Error(`unrecognized action ${v}`);
    }
  };
}
function xe(d) {
  let v = d;
  const m = kt();
  return (C, x) => {
    switch (C) {
      case Du:
        x(v);
        break;
      case Vy:
        v = x;
        break;
      case tw:
        return v;
    }
    return m(C, x);
  };
}
function iL(d) {
  let v, m;
  const C = () => v && v();
  return function(x, w) {
    switch (x) {
      case Du:
        return w ? m === w ? void 0 : (C(), m = w, v = Ft(d, w), v) : (C(), Yf);
      case $f:
        C(), m = null;
        return;
      default:
        throw new Error(`unrecognized action ${x}`);
    }
  };
}
function Ka(d) {
  return jy(kt(), (v) => Qe(d, v));
}
function ia(d, v) {
  return jy(xe(v), (m) => Qe(d, m));
}
function lL(...d) {
  return (v) => d.reduceRight(nL, v);
}
function de(d, ...v) {
  const m = lL(...v);
  return (C, x) => {
    switch (C) {
      case Du:
        return Ft(d, m(x));
      case $f:
        I1(d);
        return;
    }
  };
}
function aw(d, v) {
  return d === v;
}
function sn(d = aw) {
  let v;
  return (m) => (C) => {
    d(v, C) || (v = C, m(C));
  };
}
function ot(d) {
  return (v) => (m) => {
    d(m) && v(m);
  };
}
function He(d) {
  return (v) => nw(v, d);
}
function Co(d) {
  return (v) => () => v(d);
}
function Dl(d, v) {
  return (m) => (C) => m(v = d(v, C));
}
function jf(d) {
  return (v) => (m) => {
    d > 0 ? d-- : v(m);
  };
}
function Ru(d) {
  let v = null, m;
  return (C) => (x) => {
    v = x, !m && (m = setTimeout(() => {
      m = void 0, C(v);
    }, d));
  };
}
function Hx(d) {
  let v, m;
  return (C) => (x) => {
    v = x, m && clearTimeout(m), m = setTimeout(() => {
      C(v);
    }, d);
  };
}
function St(...d) {
  const v = new Array(d.length);
  let m = 0, C = null;
  const x = Math.pow(2, d.length) - 1;
  return d.forEach((w, y) => {
    const k = Math.pow(2, y);
    Ft(w, (L) => {
      const b = m;
      m = m | k, v[y] = L, b !== x && m === x && C && (C(), C = null);
    });
  }), (w) => (y) => {
    const k = () => w([y].concat(v));
    m === x ? k() : C = k;
  };
}
function Ix(...d) {
  return function(v, m) {
    switch (v) {
      case Du:
        return aL(...d.map((C) => Ft(C, m)));
      case $f:
        return;
      default:
        throw new Error(`unrecognized action ${v}`);
    }
  };
}
function lt(d, v = aw) {
  return de(d, sn(v));
}
function hr(...d) {
  const v = kt(), m = new Array(d.length);
  let C = 0;
  const x = Math.pow(2, d.length) - 1;
  return d.forEach((w, y) => {
    const k = Math.pow(2, y);
    Ft(w, (L) => {
      m[y] = L, C = C | k, C === x && vt(v, m);
    });
  }), function(w, y) {
    switch (w) {
      case Du:
        return C === x && y(m), Ft(v, y);
      case $f:
        return I1(v);
      default:
        throw new Error(`unrecognized action ${w}`);
    }
  };
}
function It(d, v = [], { singleton: m } = { singleton: !0 }) {
  return {
    id: oL(),
    constructor: d,
    dependencies: v,
    singleton: m
  };
}
const oL = () => Symbol();
function uL(d) {
  const v = /* @__PURE__ */ new Map(), m = ({ id: C, constructor: x, dependencies: w, singleton: y }) => {
    if (y && v.has(C))
      return v.get(C);
    const k = x(w.map((L) => m(L)));
    return y && v.set(C, k), k;
  };
  return m(d);
}
function sL(d, v) {
  const m = {}, C = {};
  let x = 0;
  const w = d.length;
  for (; x < w; )
    C[d[x]] = 1, x += 1;
  for (const y in v)
    C.hasOwnProperty(y) || (m[y] = v[y]);
  return m;
}
const My = typeof document < "u" ? N.useLayoutEffect : N.useEffect;
function iw(d, v, m) {
  const C = Object.keys(v.required || {}), x = Object.keys(v.optional || {}), w = Object.keys(v.methods || {}), y = Object.keys(v.events || {}), k = N.createContext({});
  function L(H, Q) {
    H.propsReady && vt(H.propsReady, !1);
    for (const V of C) {
      const q = H[v.required[V]];
      vt(q, Q[V]);
    }
    for (const V of x)
      if (V in Q) {
        const q = H[v.optional[V]];
        vt(q, Q[V]);
      }
    H.propsReady && vt(H.propsReady, !0);
  }
  function b(H) {
    return w.reduce((Q, V) => (Q[V] = (q) => {
      const X = H[v.methods[V]];
      vt(X, q);
    }, Q), {});
  }
  function A(H) {
    return y.reduce((Q, V) => (Q[V] = iL(H[v.events[V]]), Q), {});
  }
  return {
    Component: N.forwardRef((H, Q) => {
      const { children: V, ...q } = H, [X] = N.useState(() => jy(uL(d), (G) => L(G, q))), [fe] = N.useState(Ux(A, X));
      return My(() => {
        for (const G of y)
          G in q && Ft(fe[G], q[G]);
        return () => {
          Object.values(fe).map(I1);
        };
      }, [q, fe, X]), My(() => {
        L(X, q);
      }), N.useImperativeHandle(Q, Ax(b(X))), N.createElement(
        k.Provider,
        { value: X },
        m ? N.createElement(
          m,
          sL([...C, ...x, ...y], q),
          V
        ) : V
      );
    }),
    usePublisher: (H) => N.useCallback(rw(vt, N.useContext(k)[H]), [H]),
    useEmitterValue: (H) => {
      const V = N.useContext(k)[H], [q, X] = N.useState(Ux(Qa, V));
      return My(
        () => Ft(V, (fe) => {
          fe !== q && X(Ax(fe));
        }),
        [V, q]
      ), q;
    },
    useEmitter: (H, Q) => {
      const q = N.useContext(k)[H];
      My(() => Ft(q, Q), [Q, q]);
    }
  };
}
const cL = typeof document < "u" ? N.useLayoutEffect : N.useEffect, fL = cL;
var qa = /* @__PURE__ */ ((d) => (d[d.DEBUG = 0] = "DEBUG", d[d.INFO = 1] = "INFO", d[d.WARN = 2] = "WARN", d[d.ERROR = 3] = "ERROR", d))(qa || {});
const dL = {
  [
    0
    /* DEBUG */
  ]: "debug",
  [
    1
    /* INFO */
  ]: "log",
  [
    2
    /* WARN */
  ]: "warn",
  [
    3
    /* ERROR */
  ]: "error"
}, pL = () => typeof globalThis > "u" ? window : globalThis, bu = It(
  () => {
    const d = xe(
      3
      /* ERROR */
    );
    return {
      log: xe((m, C, x = 1) => {
        var w;
        const y = (w = pL().VIRTUOSO_LOG_LEVEL) != null ? w : Qa(d);
        x >= y && console[dL[x]](
          "%creact-virtuoso: %c%s %o",
          "color: #0253b3; font-weight: bold",
          "color: initial",
          m,
          C
        );
      }),
      logLevel: d
    };
  },
  [],
  { singleton: !0 }
);
function F1(d, v = !0) {
  const m = N.useRef(null);
  let C = (x) => {
  };
  if (typeof ResizeObserver < "u") {
    const x = N.useMemo(() => new ResizeObserver((w) => {
      const y = w[0].target;
      y.offsetParent !== null && d(y);
    }), [d]);
    C = (w) => {
      w && v ? (x.observe(w), m.current = w) : (m.current && x.unobserve(m.current), m.current = null);
    };
  }
  return { ref: m, callbackRef: C };
}
function js(d, v = !0) {
  return F1(d, v).callbackRef;
}
function vL(d, v, m, C, x, w, y) {
  const k = N.useCallback(
    (L) => {
      const b = hL(L.children, v, "offsetHeight", x);
      let A = L.parentElement;
      for (; !A.dataset.virtuosoScroller; )
        A = A.parentElement;
      const M = A.lastElementChild.dataset.viewportType === "window", U = y ? y.scrollTop : M ? window.pageYOffset || document.documentElement.scrollTop : A.scrollTop, j = y ? y.scrollHeight : M ? document.documentElement.scrollHeight : A.scrollHeight, Z = y ? y.offsetHeight : M ? window.innerHeight : A.offsetHeight;
      C({
        scrollTop: Math.max(U, 0),
        scrollHeight: j,
        viewportHeight: Z
      }), w == null || w(mL("row-gap", getComputedStyle(L).rowGap, x)), b !== null && d(b);
    },
    [d, v, x, w, y, C]
  );
  return F1(k, m);
}
function hL(d, v, m, C) {
  const x = d.length;
  if (x === 0)
    return null;
  const w = [];
  for (let y = 0; y < x; y++) {
    const k = d.item(y);
    if (!k || k.dataset.index === void 0)
      continue;
    const L = parseInt(k.dataset.index), b = parseFloat(k.dataset.knownSize), A = v(k, m);
    if (A === 0 && C("Zero-sized element, this should not happen", { child: k }, qa.ERROR), A === b)
      continue;
    const M = w[w.length - 1];
    w.length === 0 || M.size !== A || M.endIndex !== L - 1 ? w.push({ startIndex: L, endIndex: L, size: A }) : w[w.length - 1].endIndex++;
  }
  return w;
}
function mL(d, v, m) {
  return v !== "normal" && !(v != null && v.endsWith("px")) && m(`${d} was not resolved to pixel value correctly`, v, qa.WARN), v === "normal" ? 0 : parseInt(v ?? "0", 10);
}
function ku(d, v) {
  return Math.round(d.getBoundingClientRect()[v]);
}
function lw(d, v) {
  return Math.abs(d - v) < 1.01;
}
function ow(d, v, m, C = Yf, x) {
  const w = N.useRef(null), y = N.useRef(null), k = N.useRef(null), L = N.useCallback(
    (M) => {
      const U = M.target, j = U === window || U === document, Z = j ? window.pageYOffset || document.documentElement.scrollTop : U.scrollTop, H = j ? document.documentElement.scrollHeight : U.scrollHeight, Q = j ? window.innerHeight : U.offsetHeight, V = () => {
        d({
          scrollTop: Math.max(Z, 0),
          scrollHeight: H,
          viewportHeight: Q
        });
      };
      M.suppressFlushSync ? V() : tL.flushSync(V), y.current !== null && (Z === y.current || Z <= 0 || Z === H - Q) && (y.current = null, v(!0), k.current && (clearTimeout(k.current), k.current = null));
    },
    [d, v]
  );
  N.useEffect(() => {
    const M = x || w.current;
    return C(x || w.current), L({ target: M, suppressFlushSync: !0 }), M.addEventListener("scroll", L, { passive: !0 }), () => {
      C(null), M.removeEventListener("scroll", L);
    };
  }, [w, L, m, C, x]);
  function b(M) {
    const U = w.current;
    if (!U || "offsetHeight" in U && U.offsetHeight === 0)
      return;
    const j = M.behavior === "smooth";
    let Z, H, Q;
    U === window ? (H = Math.max(ku(document.documentElement, "height"), document.documentElement.scrollHeight), Z = window.innerHeight, Q = document.documentElement.scrollTop) : (H = U.scrollHeight, Z = ku(U, "height"), Q = U.scrollTop);
    const V = H - Z;
    if (M.top = Math.ceil(Math.max(Math.min(V, M.top), 0)), lw(Z, H) || M.top === Q) {
      d({ scrollTop: Q, scrollHeight: H, viewportHeight: Z }), j && v(!0);
      return;
    }
    j ? (y.current = M.top, k.current && clearTimeout(k.current), k.current = setTimeout(() => {
      k.current = null, y.current = null, v(!0);
    }, 1e3)) : y.current = null, U.scrollTo(M);
  }
  function A(M) {
    w.current.scrollBy(M);
  }
  return { scrollerRef: w, scrollByCallback: A, scrollToCallback: b };
}
const la = It(
  () => {
    const d = kt(), v = kt(), m = xe(0), C = kt(), x = xe(0), w = kt(), y = kt(), k = xe(0), L = xe(0), b = xe(0), A = xe(0), M = kt(), U = kt(), j = xe(!1);
    return Qe(
      de(
        d,
        He(({ scrollTop: Z }) => Z)
      ),
      v
    ), Qe(
      de(
        d,
        He(({ scrollHeight: Z }) => Z)
      ),
      y
    ), Qe(v, x), {
      // input
      scrollContainerState: d,
      scrollTop: v,
      viewportHeight: w,
      headerHeight: k,
      fixedHeaderHeight: L,
      fixedFooterHeight: b,
      footerHeight: A,
      scrollHeight: y,
      smoothScrollTargetReached: C,
      // signals
      scrollTo: M,
      scrollBy: U,
      // state
      statefulScrollTop: x,
      deviation: m,
      scrollingInProgress: j
    };
  },
  [],
  { singleton: !0 }
), mv = { lvl: 0 };
function uw(d, v, m, C = mv, x = mv) {
  return { k: d, v, lvl: m, l: C, r: x };
}
function Yt(d) {
  return d === mv;
}
function Vf() {
  return mv;
}
function _1(d, v) {
  if (Yt(d))
    return mv;
  const { k: m, l: C, r: x } = d;
  if (v === m) {
    if (Yt(C))
      return x;
    if (Yt(x))
      return C;
    {
      const [w, y] = sw(C);
      return _y(rr(d, { k: w, v: y, l: cw(C) }));
    }
  } else
    return v < m ? _y(rr(d, { l: _1(C, v) })) : _y(rr(d, { r: _1(x, v) }));
}
function yv(d, v) {
  if (!Yt(d))
    return v === d.k ? d.v : v < d.k ? yv(d.l, v) : yv(d.r, v);
}
function Gi(d, v, m = "k") {
  if (Yt(d))
    return [-1 / 0, void 0];
  if (Number(d[m]) === v)
    return [d.k, d.v];
  if (Number(d[m]) < v) {
    const C = Gi(d.r, v, m);
    return C[0] === -1 / 0 ? [d.k, d.v] : C;
  }
  return Gi(d.l, v, m);
}
function Wa(d, v, m) {
  return Yt(d) ? uw(v, m, 1) : v === d.k ? rr(d, { k: v, v: m }) : v < d.k ? Fx(rr(d, { l: Wa(d.l, v, m) })) : Fx(rr(d, { r: Wa(d.r, v, m) }));
}
function O1(d, v, m) {
  if (Yt(d))
    return [];
  const { k: C, v: x, l: w, r: y } = d;
  let k = [];
  return C > v && (k = k.concat(O1(w, v, m))), C >= v && C <= m && k.push({ k: C, v: x }), C <= m && (k = k.concat(O1(y, v, m))), k;
}
function Vs(d) {
  return Yt(d) ? [] : [...Vs(d.l), { k: d.k, v: d.v }, ...Vs(d.r)];
}
function sw(d) {
  return Yt(d.r) ? [d.k, d.v] : sw(d.r);
}
function cw(d) {
  return Yt(d.r) ? d.l : _y(rr(d, { r: cw(d.r) }));
}
function rr(d, v) {
  return uw(
    v.k !== void 0 ? v.k : d.k,
    v.v !== void 0 ? v.v : d.v,
    v.lvl !== void 0 ? v.lvl : d.lvl,
    v.l !== void 0 ? v.l : d.l,
    v.r !== void 0 ? v.r : d.r
  );
}
function D1(d) {
  return Yt(d) || d.lvl > d.r.lvl;
}
function Fx(d) {
  return z1(dw(d));
}
function _y(d) {
  const { l: v, r: m, lvl: C } = d;
  if (m.lvl >= C - 1 && v.lvl >= C - 1)
    return d;
  if (C > m.lvl + 1) {
    if (D1(v))
      return dw(rr(d, { lvl: C - 1 }));
    if (!Yt(v) && !Yt(v.r))
      return rr(v.r, {
        l: rr(v, { r: v.r.l }),
        r: rr(d, {
          l: v.r.r,
          lvl: C - 1
        }),
        lvl: C
      });
    throw new Error("Unexpected empty nodes");
  } else {
    if (D1(d))
      return z1(rr(d, { lvl: C - 1 }));
    if (!Yt(m) && !Yt(m.l)) {
      const x = m.l, w = D1(x) ? m.lvl - 1 : m.lvl;
      return rr(x, {
        l: rr(d, {
          r: x.l,
          lvl: C - 1
        }),
        r: z1(rr(m, { l: x.r, lvl: w })),
        lvl: x.lvl + 1
      });
    } else
      throw new Error("Unexpected empty nodes");
  }
}
function Py(d, v, m) {
  if (Yt(d))
    return [];
  const C = Gi(d, v)[0];
  return yL(O1(d, C, m));
}
function fw(d, v) {
  const m = d.length;
  if (m === 0)
    return [];
  let { index: C, value: x } = v(d[0]);
  const w = [];
  for (let y = 1; y < m; y++) {
    const { index: k, value: L } = v(d[y]);
    w.push({ start: C, end: k - 1, value: x }), C = k, x = L;
  }
  return w.push({ start: C, end: 1 / 0, value: x }), w;
}
function yL(d) {
  return fw(d, ({ k: v, v: m }) => ({ index: v, value: m }));
}
function z1(d) {
  const { r: v, lvl: m } = d;
  return !Yt(v) && !Yt(v.r) && v.lvl === m && v.r.lvl === m ? rr(v, { l: rr(d, { r: v.l }), lvl: m + 1 }) : d;
}
function dw(d) {
  const { l: v } = d;
  return !Yt(v) && v.lvl === d.lvl ? rr(v, { r: rr(d, { l: v.r }) }) : d;
}
function Ay(d, v, m, C = 0) {
  let x = d.length - 1;
  for (; C <= x; ) {
    const w = Math.floor((C + x) / 2), y = d[w], k = m(y, v);
    if (k === 0)
      return w;
    if (k === -1) {
      if (x - C < 2)
        return w - 1;
      x = w - 1;
    } else {
      if (x === C)
        return w;
      C = w + 1;
    }
  }
  throw new Error(`Failed binary finding record in array - ${d.join(",")}, searched for ${v}`);
}
function pw(d, v, m) {
  return d[Ay(d, v, m)];
}
function gL(d, v, m, C) {
  const x = Ay(d, v, C), w = Ay(d, m, C, x);
  return d.slice(x, w + 1);
}
const B1 = It(
  () => ({ recalcInProgress: xe(!1) }),
  [],
  { singleton: !0 }
);
function SL(d) {
  const { size: v, startIndex: m, endIndex: C } = d;
  return (x) => x.start === m && (x.end === C || x.end === 1 / 0) && x.value === v;
}
function Bx(d, v) {
  let m = 0, C = 0;
  for (; m < d; )
    m += v[C + 1] - v[C] - 1, C++;
  return C - (m === d ? 0 : 1);
}
function EL(d, v) {
  let m = Yt(d) ? 0 : 1 / 0;
  for (const C of v) {
    const { size: x, startIndex: w, endIndex: y } = C;
    if (m = Math.min(m, w), Yt(d)) {
      d = Wa(d, 0, x);
      continue;
    }
    const k = Py(d, w - 1, y + 1);
    if (k.some(SL(C)))
      continue;
    let L = !1, b = !1;
    for (const { start: A, end: M, value: U } of k)
      L ? (y >= A || x === U) && (d = _1(d, A)) : (b = U !== x, L = !0), M > y && y >= A && U !== x && (d = Wa(d, y + 1, U));
    b && (d = Wa(d, w, x));
  }
  return [d, m];
}
function CL() {
  return {
    offsetTree: [],
    sizeTree: Vf(),
    groupOffsetTree: Vf(),
    lastIndex: 0,
    lastOffset: 0,
    lastSize: 0,
    groupIndices: []
  };
}
function V1({ index: d }, v) {
  return v === d ? 0 : v < d ? -1 : 1;
}
function TL({ offset: d }, v) {
  return v === d ? 0 : v < d ? -1 : 1;
}
function xL(d) {
  return { index: d.index, value: d };
}
function wL(d, v, m, C = 0) {
  return C > 0 && (v = Math.max(v, pw(d, C, V1).offset)), fw(gL(d, v, m, TL), xL);
}
function U1(d, v, m, C) {
  let x = d, w = 0, y = 0, k = 0, L = 0;
  if (v !== 0) {
    L = Ay(x, v - 1, V1), k = x[L].offset;
    const A = Gi(m, v - 1);
    w = A[0], y = A[1], x.length && x[L].size === Gi(m, v)[1] && (L -= 1), x = x.slice(0, L + 1);
  } else
    x = [];
  for (const { start: b, value: A } of Py(m, v, 1 / 0)) {
    const M = b - w, U = M * y + k + M * C;
    x.push({
      offset: U,
      size: A,
      index: b
    }), w = b, k = U, y = A;
  }
  return {
    offsetTree: x,
    lastIndex: w,
    lastOffset: k,
    lastSize: y
  };
}
function RL(d, [v, m, C, x]) {
  v.length > 0 && C("received item sizes", v, qa.DEBUG);
  const w = d.sizeTree;
  let y = w, k = 0;
  if (m.length > 0 && Yt(w) && v.length === 2) {
    const U = v[0].size, j = v[1].size;
    y = m.reduce((Z, H) => Wa(Wa(Z, H, U), H + 1, j), y);
  } else
    [y, k] = EL(y, v);
  if (y === w)
    return d;
  const { offsetTree: L, lastIndex: b, lastSize: A, lastOffset: M } = U1(d.offsetTree, k, y, x);
  return {
    sizeTree: y,
    offsetTree: L,
    lastIndex: b,
    lastOffset: M,
    lastSize: A,
    groupOffsetTree: m.reduce((U, j) => Wa(U, j, gv(j, L, x)), Vf()),
    groupIndices: m
  };
}
function gv(d, v, m) {
  if (v.length === 0)
    return 0;
  const { offset: C, index: x, size: w } = pw(v, d, V1), y = d - x, k = w * y + (y - 1) * m + C;
  return k > 0 ? k + m : k;
}
function kL(d) {
  return typeof d.groupIndex < "u";
}
function vw(d, v, m) {
  if (kL(d))
    return v.groupIndices[d.groupIndex] + 1;
  {
    const C = d.index === "LAST" ? m : d.index;
    let x = hw(C, v);
    return x = Math.max(0, x, Math.min(m, x)), x;
  }
}
function hw(d, v) {
  if (!$y(v))
    return d;
  let m = 0;
  for (; v.groupIndices[m] <= d + m; )
    m++;
  return d + m;
}
function $y(d) {
  return !Yt(d.groupOffsetTree);
}
function DL(d) {
  return Vs(d).map(({ k: v, v: m }, C, x) => {
    const w = x[C + 1], y = w ? w.k - 1 : 1 / 0;
    return { startIndex: v, endIndex: y, size: m };
  });
}
const bL = {
  offsetHeight: "height",
  offsetWidth: "width"
}, bl = It(
  ([{ log: d }, { recalcInProgress: v }]) => {
    const m = kt(), C = kt(), x = ia(C, 0), w = kt(), y = kt(), k = xe(0), L = xe([]), b = xe(void 0), A = xe(void 0), M = xe((G, W) => ku(G, bL[W])), U = xe(void 0), j = xe(0), Z = CL(), H = ia(
      de(m, St(L, d, j), Dl(RL, Z), sn()),
      Z
    ), Q = ia(
      de(
        L,
        sn(),
        Dl((G, W) => ({ prev: G.current, current: W }), {
          prev: [],
          current: []
        }),
        He(({ prev: G }) => G)
      ),
      []
    );
    Qe(
      de(
        L,
        ot((G) => G.length > 0),
        St(H, j),
        He(([G, W, ae]) => {
          const ve = G.reduce((Se, me, Ce) => Wa(Se, me, gv(me, W.offsetTree, ae) || Ce), Vf());
          return {
            ...W,
            groupIndices: G,
            groupOffsetTree: ve
          };
        })
      ),
      H
    ), Qe(
      de(
        C,
        St(H),
        ot(([G, { lastIndex: W }]) => G < W),
        He(([G, { lastIndex: W, lastSize: ae }]) => [
          {
            startIndex: G,
            endIndex: W,
            size: ae
          }
        ])
      ),
      m
    ), Qe(b, A);
    const V = ia(
      de(
        b,
        He((G) => G === void 0)
      ),
      !0
    );
    Qe(
      de(
        A,
        ot((G) => G !== void 0 && Yt(Qa(H).sizeTree)),
        He((G) => [{ startIndex: 0, endIndex: 0, size: G }])
      ),
      m
    );
    const q = Ka(
      de(
        m,
        St(H),
        Dl(
          ({ sizes: G }, [W, ae]) => ({
            changed: ae !== G,
            sizes: ae
          }),
          { changed: !1, sizes: Z }
        ),
        He((G) => G.changed)
      )
    );
    Ft(
      de(
        k,
        Dl(
          (G, W) => ({ diff: G.prev - W, prev: W }),
          { diff: 0, prev: 0 }
        ),
        He((G) => G.diff)
      ),
      (G) => {
        const { groupIndices: W } = Qa(H);
        if (G > 0)
          vt(v, !0), vt(w, G + Bx(G, W));
        else if (G < 0) {
          const ae = Qa(Q);
          ae.length > 0 && (G -= Bx(-G, ae)), vt(y, G);
        }
      }
    ), Ft(de(k, St(d)), ([G, W]) => {
      G < 0 && W(
        "`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",
        { firstItemIndex: k },
        qa.ERROR
      );
    });
    const X = Ka(w);
    Qe(
      de(
        w,
        St(H),
        He(([G, W]) => {
          const ae = W.groupIndices.length > 0, ve = [], Se = W.lastSize;
          if (ae) {
            const me = yv(W.sizeTree, 0);
            let Ce = 0, Ve = 0;
            for (; Ce < G; ) {
              const ke = W.groupIndices[Ve], Ue = W.groupIndices.length === Ve + 1 ? 1 / 0 : W.groupIndices[Ve + 1] - ke - 1;
              ve.push({
                startIndex: ke,
                endIndex: ke,
                size: me
              }), ve.push({
                startIndex: ke + 1,
                endIndex: ke + 1 + Ue - 1,
                size: Se
              }), Ve++, Ce += Ue + 1;
            }
            const Me = Vs(W.sizeTree);
            return Ce !== G && Me.shift(), Me.reduce(
              (ke, { k: Ue, v: ht }) => {
                let ue = ke.ranges;
                return ke.prevSize !== 0 && (ue = [
                  ...ke.ranges,
                  {
                    startIndex: ke.prevIndex,
                    endIndex: Ue + G - 1,
                    size: ke.prevSize
                  }
                ]), {
                  ranges: ue,
                  prevIndex: Ue + G,
                  prevSize: ht
                };
              },
              {
                ranges: ve,
                prevIndex: G,
                prevSize: 0
              }
            ).ranges;
          }
          return Vs(W.sizeTree).reduce(
            (me, { k: Ce, v: Ve }) => ({
              ranges: [...me.ranges, { startIndex: me.prevIndex, endIndex: Ce + G - 1, size: me.prevSize }],
              prevIndex: Ce + G,
              prevSize: Ve
            }),
            {
              ranges: [],
              prevIndex: 0,
              prevSize: Se
            }
          ).ranges;
        })
      ),
      m
    );
    const fe = Ka(
      de(
        y,
        St(H, j),
        He(([G, { offsetTree: W }, ae]) => {
          const ve = -G;
          return gv(ve, W, ae);
        })
      )
    );
    return Qe(
      de(
        y,
        St(H, j),
        He(([G, W, ae]) => {
          if (W.groupIndices.length > 0) {
            if (Yt(W.sizeTree))
              return W;
            let Se = Vf();
            const me = Qa(Q);
            let Ce = 0, Ve = 0, Me = 0;
            for (; Ce < -G; ) {
              Me = me[Ve];
              const ke = me[Ve + 1] - Me - 1;
              Ve++, Ce += ke + 1;
            }
            if (Se = Vs(W.sizeTree).reduce((ke, { k: Ue, v: ht }) => Wa(ke, Math.max(0, Ue + G), ht), Se), Ce !== -G) {
              const ke = yv(W.sizeTree, Me);
              Se = Wa(Se, 0, ke);
              const Ue = Gi(W.sizeTree, -G + 1)[1];
              Se = Wa(Se, 1, Ue);
            }
            return {
              ...W,
              sizeTree: Se,
              ...U1(W.offsetTree, 0, Se, ae)
            };
          } else {
            const Se = Vs(W.sizeTree).reduce((me, { k: Ce, v: Ve }) => Wa(me, Math.max(0, Ce + G), Ve), Vf());
            return {
              ...W,
              sizeTree: Se,
              ...U1(W.offsetTree, 0, Se, ae)
            };
          }
        })
      ),
      H
    ), {
      // input
      data: U,
      totalCount: C,
      sizeRanges: m,
      groupIndices: L,
      defaultItemSize: A,
      fixedItemSize: b,
      unshiftWith: w,
      shiftWith: y,
      shiftWithOffset: fe,
      beforeUnshiftWith: X,
      firstItemIndex: k,
      gap: j,
      // output
      sizes: H,
      listRefresh: q,
      statefulTotalCount: x,
      trackItemSizes: V,
      itemSize: M
    };
  },
  cn(bu, B1),
  { singleton: !0 }
), NL = typeof document < "u" && "scrollBehavior" in document.documentElement.style;
function mw(d) {
  const v = typeof d == "number" ? { index: d } : d;
  return v.align || (v.align = "start"), (!v.behavior || !NL) && (v.behavior = "auto"), v.offset || (v.offset = 0), v;
}
const Cv = It(
  ([
    { sizes: d, totalCount: v, listRefresh: m, gap: C },
    {
      scrollingInProgress: x,
      viewportHeight: w,
      scrollTo: y,
      smoothScrollTargetReached: k,
      headerHeight: L,
      footerHeight: b,
      fixedHeaderHeight: A,
      fixedFooterHeight: M
    },
    { log: U }
  ]) => {
    const j = kt(), Z = xe(0);
    let H = null, Q = null, V = null;
    function q() {
      H && (H(), H = null), V && (V(), V = null), Q && (clearTimeout(Q), Q = null), vt(x, !1);
    }
    return Qe(
      de(
        j,
        St(d, w, v, Z, L, b, U),
        St(C, A, M),
        He(
          ([
            [X, fe, G, W, ae, ve, Se, me],
            Ce,
            Ve,
            Me
          ]) => {
            const he = mw(X), { align: ke, behavior: Ue, offset: ht } = he, ue = W - 1, De = vw(he, fe, ue);
            let ne = gv(De, fe.offsetTree, Ce) + ve;
            ke === "end" ? (ne += Ve + Gi(fe.sizeTree, De)[1] - G + Me, De === ue && (ne += Se)) : ke === "center" ? ne += (Ve + Gi(fe.sizeTree, De)[1] - G + Me) / 2 : ne -= ae, ht && (ne += ht);
            const Fe = (Xe) => {
              q(), Xe ? (me("retrying to scroll to", { location: X }, qa.DEBUG), vt(j, X)) : me("list did not change, scroll successful", {}, qa.DEBUG);
            };
            if (q(), Ue === "smooth") {
              let Xe = !1;
              V = Ft(m, (yn) => {
                Xe = Xe || yn;
              }), H = To(k, () => {
                Fe(Xe);
              });
            } else
              H = To(de(m, ML(150)), Fe);
            return Q = setTimeout(() => {
              q();
            }, 1200), vt(x, !0), me("scrolling from index to", { index: De, top: ne, behavior: Ue }, qa.DEBUG), { top: ne, behavior: Ue };
          }
        )
      ),
      y
    ), {
      scrollToIndex: j,
      topListHeight: Z
    };
  },
  cn(bl, la, bu),
  { singleton: !0 }
);
function ML(d) {
  return (v) => {
    const m = setTimeout(() => {
      v(!1);
    }, d);
    return (C) => {
      C && (v(!0), clearTimeout(m));
    };
  };
}
const Sv = "up", dv = "down", LL = "none", _L = {
  atBottom: !1,
  notAtBottomBecause: "NOT_SHOWING_LAST_ITEM",
  state: {
    offsetBottom: 0,
    scrollTop: 0,
    viewportHeight: 0,
    scrollHeight: 0
  }
}, OL = 0, Tv = It(([{ scrollContainerState: d, scrollTop: v, viewportHeight: m, headerHeight: C, footerHeight: x, scrollBy: w }]) => {
  const y = xe(!1), k = xe(!0), L = kt(), b = kt(), A = xe(4), M = xe(OL), U = ia(
    de(
      Ix(de(lt(v), jf(1), Co(!0)), de(lt(v), jf(1), Co(!1), Hx(100))),
      sn()
    ),
    !1
  ), j = ia(
    de(Ix(de(w, Co(!0)), de(w, Co(!1), Hx(200))), sn()),
    !1
  );
  Qe(
    de(
      hr(lt(v), lt(M)),
      He(([q, X]) => q <= X),
      sn()
    ),
    k
  ), Qe(de(k, Ru(50)), b);
  const Z = Ka(
    de(
      hr(d, lt(m), lt(C), lt(x), lt(A)),
      Dl((q, [{ scrollTop: X, scrollHeight: fe }, G, W, ae, ve]) => {
        const Se = X + G - fe > -ve, me = {
          viewportHeight: G,
          scrollTop: X,
          scrollHeight: fe
        };
        if (Se) {
          let Ve, Me;
          return X > q.state.scrollTop ? (Ve = "SCROLLED_DOWN", Me = q.state.scrollTop - X) : (Ve = "SIZE_DECREASED", Me = q.state.scrollTop - X || q.scrollTopDelta), {
            atBottom: !0,
            state: me,
            atBottomBecause: Ve,
            scrollTopDelta: Me
          };
        }
        let Ce;
        return me.scrollHeight > q.state.scrollHeight ? Ce = "SIZE_INCREASED" : G < q.state.viewportHeight ? Ce = "VIEWPORT_HEIGHT_DECREASING" : X < q.state.scrollTop ? Ce = "SCROLLING_UPWARDS" : Ce = "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM", {
          atBottom: !1,
          notAtBottomBecause: Ce,
          state: me
        };
      }, _L),
      sn((q, X) => q && q.atBottom === X.atBottom)
    )
  ), H = ia(
    de(
      d,
      Dl(
        (q, { scrollTop: X, scrollHeight: fe, viewportHeight: G }) => {
          if (lw(q.scrollHeight, fe))
            return {
              scrollTop: X,
              scrollHeight: fe,
              jump: 0,
              changed: !1
            };
          {
            const W = fe - (X + G) < 1;
            return q.scrollTop !== X && W ? {
              scrollHeight: fe,
              scrollTop: X,
              jump: q.scrollTop - X,
              changed: !0
            } : {
              scrollHeight: fe,
              scrollTop: X,
              jump: 0,
              changed: !0
            };
          }
        },
        { scrollHeight: 0, jump: 0, scrollTop: 0, changed: !1 }
      ),
      ot((q) => q.changed),
      He((q) => q.jump)
    ),
    0
  );
  Qe(
    de(
      Z,
      He((q) => q.atBottom)
    ),
    y
  ), Qe(de(y, Ru(50)), L);
  const Q = xe(dv);
  Qe(
    de(
      d,
      He(({ scrollTop: q }) => q),
      sn(),
      Dl(
        (q, X) => Qa(j) ? { direction: q.direction, prevScrollTop: X } : { direction: X < q.prevScrollTop ? Sv : dv, prevScrollTop: X },
        { direction: dv, prevScrollTop: 0 }
      ),
      He((q) => q.direction)
    ),
    Q
  ), Qe(de(d, Ru(50), Co(LL)), Q);
  const V = xe(0);
  return Qe(
    de(
      U,
      ot((q) => !q),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      Co(0)
    ),
    V
  ), Qe(
    de(
      v,
      Ru(100),
      St(U),
      ot(([q, X]) => !!X),
      Dl(([q, X], [fe]) => [X, fe], [0, 0]),
      He(([q, X]) => X - q)
    ),
    V
  ), {
    isScrolling: U,
    isAtTop: k,
    isAtBottom: y,
    atBottomState: Z,
    atTopStateChange: b,
    atBottomStateChange: L,
    scrollDirection: Q,
    atBottomThreshold: A,
    atTopThreshold: M,
    scrollVelocity: V,
    lastJumpDueToItemResize: H
  };
}, cn(la)), Nu = It(
  ([{ log: d }]) => {
    const v = xe(!1), m = Ka(
      de(
        v,
        ot((C) => C),
        sn()
      )
    );
    return Ft(v, (C) => {
      C && Qa(d)("props updated", {}, qa.DEBUG);
    }), { propsReady: v, didMount: m };
  },
  cn(bu),
  { singleton: !0 }
);
function j1(d, v) {
  d == 0 ? v() : requestAnimationFrame(() => j1(d - 1, v));
}
function P1(d, v) {
  const m = v - 1;
  return typeof d == "number" ? d : d.index === "LAST" ? m : d.index;
}
const xv = It(
  ([{ sizes: d, listRefresh: v, defaultItemSize: m }, { scrollTop: C }, { scrollToIndex: x }, { didMount: w }]) => {
    const y = xe(!0), k = xe(0), L = xe(!1);
    return Qe(
      de(
        w,
        St(k),
        ot(([b, A]) => !!A),
        Co(!1)
      ),
      y
    ), Ft(
      de(
        hr(v, w),
        St(y, d, m, L),
        ot(([[, b], A, { sizeTree: M }, U, j]) => b && (!Yt(M) || H1(U)) && !A && !j),
        St(k)
      ),
      ([, b]) => {
        vt(L, !0), j1(3, () => {
          To(C, () => vt(y, !0)), vt(x, b);
        });
      }
    ), {
      scrolledToInitialItem: y,
      initialTopMostItemIndex: k
    };
  },
  cn(bl, la, Cv, Nu),
  { singleton: !0 }
);
function Vx(d) {
  return d ? d === "smooth" ? "smooth" : "auto" : !1;
}
const zL = (d, v) => typeof d == "function" ? Vx(d(v)) : v && Vx(d), UL = It(
  ([
    { totalCount: d, listRefresh: v },
    { isAtBottom: m, atBottomState: C },
    { scrollToIndex: x },
    { scrolledToInitialItem: w },
    { propsReady: y, didMount: k },
    { log: L },
    { scrollingInProgress: b }
  ]) => {
    const A = xe(!1), M = kt();
    let U = null;
    function j(H) {
      vt(x, {
        index: "LAST",
        align: "end",
        behavior: H
      });
    }
    Ft(
      de(
        hr(de(lt(d), jf(1)), k),
        St(lt(A), m, w, b),
        He(([[H, Q], V, q, X, fe]) => {
          let G = Q && X, W = "auto";
          return G && (W = zL(V, q || fe), G = G && !!W), { totalCount: H, shouldFollow: G, followOutputBehavior: W };
        }),
        ot(({ shouldFollow: H }) => H)
      ),
      ({ totalCount: H, followOutputBehavior: Q }) => {
        U && (U(), U = null), U = To(v, () => {
          Qa(L)("following output to ", { totalCount: H }, qa.DEBUG), j(Q), U = null;
        });
      }
    );
    function Z(H) {
      const Q = To(C, (V) => {
        H && !V.atBottom && V.notAtBottomBecause === "SIZE_INCREASED" && !U && (Qa(L)("scrolling to bottom due to increased size", {}, qa.DEBUG), j("auto"));
      });
      setTimeout(Q, 100);
    }
    return Ft(
      de(
        hr(lt(A), d, y),
        ot(([H, , Q]) => H && Q),
        Dl(
          ({ value: H }, [, Q]) => ({ refreshed: H === Q, value: Q }),
          { refreshed: !1, value: 0 }
        ),
        ot(({ refreshed: H }) => H),
        St(A, d)
      ),
      ([, H]) => {
        Z(H !== !1);
      }
    ), Ft(M, () => {
      Z(Qa(A) !== !1);
    }), Ft(hr(lt(A), C), ([H, Q]) => {
      H && !Q.atBottom && Q.notAtBottomBecause === "VIEWPORT_HEIGHT_DECREASING" && j("auto");
    }), { followOutput: A, autoscrollToBottom: M };
  },
  cn(bl, Tv, Cv, xv, Nu, bu, la)
);
function AL(d) {
  return d.reduce(
    (v, m) => (v.groupIndices.push(v.totalCount), v.totalCount += m + 1, v),
    {
      totalCount: 0,
      groupIndices: []
    }
  );
}
const yw = It(([{ totalCount: d, groupIndices: v, sizes: m }, { scrollTop: C, headerHeight: x }]) => {
  const w = kt(), y = kt(), k = Ka(de(w, He(AL)));
  return Qe(
    de(
      k,
      He((L) => L.totalCount)
    ),
    d
  ), Qe(
    de(
      k,
      He((L) => L.groupIndices)
    ),
    v
  ), Qe(
    de(
      hr(C, m, x),
      ot(([L, b]) => $y(b)),
      He(([L, b, A]) => Gi(b.groupOffsetTree, Math.max(L - A, 0), "v")[0]),
      sn(),
      He((L) => [L])
    ),
    y
  ), { groupCounts: w, topItemsIndexes: y };
}, cn(bl, la));
function Ev(d, v) {
  return !!(d && d[0] === v[0] && d[1] === v[1]);
}
function gw(d, v) {
  return !!(d && d.startIndex === v.startIndex && d.endIndex === v.endIndex);
}
const Hy = "top", Iy = "bottom", jx = "none";
function Px(d, v, m) {
  return typeof d == "number" ? m === Sv && v === Hy || m === dv && v === Iy ? d : 0 : m === Sv ? v === Hy ? d.main : d.reverse : v === Iy ? d.main : d.reverse;
}
function $x(d, v) {
  return typeof d == "number" ? d : d[v] || 0;
}
const $1 = It(
  ([{ scrollTop: d, viewportHeight: v, deviation: m, headerHeight: C, fixedHeaderHeight: x }]) => {
    const w = kt(), y = xe(0), k = xe(0), L = xe(0), b = ia(
      de(
        hr(
          lt(d),
          lt(v),
          lt(C),
          lt(w, Ev),
          lt(L),
          lt(y),
          lt(x),
          lt(m),
          lt(k)
        ),
        He(
          ([
            A,
            M,
            U,
            [j, Z],
            H,
            Q,
            V,
            q,
            X
          ]) => {
            const fe = A - q, G = Q + V, W = Math.max(U - fe, 0);
            let ae = jx;
            const ve = $x(X, Hy), Se = $x(X, Iy);
            return j -= q, j += U + V, Z += U + V, Z -= q, j > A + G - ve && (ae = Sv), Z < A - W + M + Se && (ae = dv), ae !== jx ? [
              Math.max(fe - U - Px(H, Hy, ae) - ve, 0),
              fe - W - V + M + Px(H, Iy, ae) + Se
            ] : null;
          }
        ),
        ot((A) => A != null),
        sn(Ev)
      ),
      [0, 0]
    );
    return {
      // input
      listBoundary: w,
      overscan: L,
      topListHeight: y,
      increaseViewportBy: k,
      // output
      visibleRange: b
    };
  },
  cn(la),
  { singleton: !0 }
);
function HL(d, v, m) {
  if ($y(v)) {
    const C = hw(d, v);
    return [
      { index: Gi(v.groupOffsetTree, C)[0], size: 0, offset: 0 },
      { index: C, size: 0, offset: 0, data: m && m[0] }
    ];
  }
  return [{ index: d, size: 0, offset: 0, data: m && m[0] }];
}
const b1 = {
  items: [],
  topItems: [],
  offsetTop: 0,
  offsetBottom: 0,
  top: 0,
  bottom: 0,
  topListHeight: 0,
  totalCount: 0,
  firstItemIndex: 0
};
function Yx(d, v, m) {
  if (d.length === 0)
    return [];
  if (!$y(v))
    return d.map((b) => ({ ...b, index: b.index + m, originalIndex: b.index }));
  const C = d[0].index, x = d[d.length - 1].index, w = [], y = Py(v.groupOffsetTree, C, x);
  let k, L = 0;
  for (const b of d) {
    (!k || k.end < b.index) && (k = y.shift(), L = v.groupIndices.indexOf(k.start));
    let A;
    b.index === k.start ? A = {
      type: "group",
      index: L
    } : A = {
      index: b.index - (L + 1) + m,
      groupIndex: L
    }, w.push({
      ...A,
      size: b.size,
      offset: b.offset,
      originalIndex: b.index,
      data: b.data
    });
  }
  return w;
}
function Oy(d, v, m, C, x, w) {
  const { lastSize: y, lastOffset: k, lastIndex: L } = x;
  let b = 0, A = 0;
  if (d.length > 0) {
    b = d[0].offset;
    const H = d[d.length - 1];
    A = H.offset + H.size;
  }
  const M = m - L, U = k + M * y + (M - 1) * C, j = b, Z = U - A;
  return {
    items: Yx(d, x, w),
    topItems: Yx(v, x, w),
    topListHeight: v.reduce((H, Q) => Q.size + H, 0),
    offsetTop: b,
    offsetBottom: Z,
    top: j,
    bottom: A,
    totalCount: m,
    firstItemIndex: w
  };
}
function Sw(d, v, m, C, x, w) {
  let y = 0;
  if (m.groupIndices.length > 0)
    for (const A of m.groupIndices) {
      if (A - y >= d)
        break;
      y++;
    }
  const k = d + y, L = P1(v, k), b = Array.from({ length: k }).map((A, M) => ({
    index: M + L,
    size: 0,
    offset: 0,
    data: w[M + L]
  }));
  return Oy(b, [], k, x, m, C);
}
const Ps = It(
  ([
    { sizes: d, totalCount: v, data: m, firstItemIndex: C, gap: x },
    w,
    { visibleRange: y, listBoundary: k, topListHeight: L },
    { scrolledToInitialItem: b, initialTopMostItemIndex: A },
    { topListHeight: M },
    U,
    { didMount: j },
    { recalcInProgress: Z }
  ]) => {
    const H = xe([]), Q = xe(0), V = kt();
    Qe(w.topItemsIndexes, H);
    const q = ia(
      de(
        hr(
          j,
          Z,
          lt(y, Ev),
          lt(v),
          lt(d),
          lt(A),
          b,
          lt(H),
          lt(C),
          lt(x),
          m
        ),
        ot(([W, ae, , ve, , , , , , , Se]) => {
          const me = Se && Se.length !== ve;
          return W && !ae && !me;
        }),
        He(
          ([
            ,
            ,
            [W, ae],
            ve,
            Se,
            me,
            Ce,
            Ve,
            Me,
            he,
            ke
          ]) => {
            const Ue = Se, { sizeTree: ht, offsetTree: ue } = Ue, De = Qa(Q);
            if (ve === 0)
              return { ...b1, totalCount: ve };
            if (W === 0 && ae === 0)
              return De === 0 ? { ...b1, totalCount: ve } : Sw(De, me, Se, Me, he, ke || []);
            if (Yt(ht))
              return De > 0 ? null : Oy(
                HL(P1(me, ve), Ue, ke),
                [],
                ve,
                he,
                Ue,
                Me
              );
            const ne = [];
            if (Ve.length > 0) {
              const ir = Ve[0], ce = Ve[Ve.length - 1];
              let rt = 0;
              for (const st of Py(ht, ir, ce)) {
                const Ct = st.value, tn = Math.max(st.start, ir), Gt = Math.min(st.end, ce);
                for (let Mt = tn; Mt <= Gt; Mt++)
                  ne.push({ index: Mt, size: Ct, offset: rt, data: ke && ke[Mt] }), rt += Ct;
              }
            }
            if (!Ce)
              return Oy([], ne, ve, he, Ue, Me);
            const Fe = Ve.length > 0 ? Ve[Ve.length - 1] + 1 : 0, Xe = wL(ue, W, ae, Fe);
            if (Xe.length === 0)
              return null;
            const yn = ve - 1, Un = jy([], (ir) => {
              for (const ce of Xe) {
                const rt = ce.value;
                let st = rt.offset, Ct = ce.start;
                const tn = rt.size;
                if (rt.offset < W) {
                  Ct += Math.floor((W - rt.offset + he) / (tn + he));
                  const Mt = Ct - ce.start;
                  st += Mt * tn + Mt * he;
                }
                Ct < Fe && (st += (Fe - Ct) * tn, Ct = Fe);
                const Gt = Math.min(ce.end, yn);
                for (let Mt = Ct; Mt <= Gt && !(st >= ae); Mt++)
                  ir.push({ index: Mt, size: tn, offset: st, data: ke && ke[Mt] }), st += tn + he;
              }
            });
            return Oy(Un, ne, ve, he, Ue, Me);
          }
        ),
        //@ts-expect-error filter needs to be fixed
        ot((W) => W !== null),
        sn()
      ),
      b1
    );
    Qe(
      de(
        m,
        ot(H1),
        He((W) => W == null ? void 0 : W.length)
      ),
      v
    ), Qe(
      de(
        q,
        He((W) => W.topListHeight)
      ),
      M
    ), Qe(M, L), Qe(
      de(
        q,
        He((W) => [W.top, W.bottom])
      ),
      k
    ), Qe(
      de(
        q,
        He((W) => W.items)
      ),
      V
    );
    const X = Ka(
      de(
        q,
        ot(({ items: W }) => W.length > 0),
        St(v, m),
        ot(([{ items: W }, ae]) => W[W.length - 1].originalIndex === ae - 1),
        He(([, W, ae]) => [W - 1, ae]),
        sn(Ev),
        He(([W]) => W)
      )
    ), fe = Ka(
      de(
        q,
        Ru(200),
        ot(({ items: W, topItems: ae }) => W.length > 0 && W[0].originalIndex === ae.length),
        He(({ items: W }) => W[0].index),
        sn()
      )
    ), G = Ka(
      de(
        q,
        ot(({ items: W }) => W.length > 0),
        He(({ items: W }) => {
          let ae = 0, ve = W.length - 1;
          for (; W[ae].type === "group" && ae < ve; )
            ae++;
          for (; W[ve].type === "group" && ve > ae; )
            ve--;
          return {
            startIndex: W[ae].index,
            endIndex: W[ve].index
          };
        }),
        sn(gw)
      )
    );
    return { listState: q, topItemsIndexes: H, endReached: X, startReached: fe, rangeChanged: G, itemsRendered: V, initialItemCount: Q, ...U };
  },
  cn(
    bl,
    yw,
    $1,
    xv,
    Cv,
    Tv,
    Nu,
    B1
  ),
  { singleton: !0 }
), IL = It(
  ([{ sizes: d, firstItemIndex: v, data: m, gap: C }, { initialTopMostItemIndex: x }, { initialItemCount: w, listState: y }, { didMount: k }]) => (Qe(
    de(
      k,
      St(w),
      ot(([, L]) => L !== 0),
      St(x, d, v, C, m),
      He(([[, L], b, A, M, U, j = []]) => Sw(L, b, A, M, U, j))
    ),
    y
  ), {}),
  cn(bl, xv, Ps, Nu),
  { singleton: !0 }
), Ew = It(
  ([{ scrollVelocity: d }]) => {
    const v = xe(!1), m = kt(), C = xe(!1);
    return Qe(
      de(
        d,
        St(C, v, m),
        ot(([x, w]) => !!w),
        He(([x, w, y, k]) => {
          const { exit: L, enter: b } = w;
          if (y) {
            if (L(x, k))
              return !1;
          } else if (b(x, k))
            return !0;
          return y;
        }),
        sn()
      ),
      v
    ), Ft(
      de(hr(v, d, m), St(C)),
      ([[x, w, y], k]) => x && k && k.change && k.change(w, y)
    ), { isSeeking: v, scrollSeekConfiguration: C, scrollVelocity: d, scrollSeekRangeChanged: m };
  },
  cn(Tv),
  { singleton: !0 }
), FL = It(([{ topItemsIndexes: d }]) => {
  const v = xe(0);
  return Qe(
    de(
      v,
      ot((m) => m > 0),
      He((m) => Array.from({ length: m }).map((C, x) => x))
    ),
    d
  ), { topItemCount: v };
}, cn(Ps)), Cw = It(
  ([{ footerHeight: d, headerHeight: v, fixedHeaderHeight: m, fixedFooterHeight: C }, { listState: x }]) => {
    const w = kt(), y = ia(
      de(
        hr(d, C, v, m, x),
        He(([k, L, b, A, M]) => k + L + b + A + M.offsetBottom + M.bottom)
      ),
      0
    );
    return Qe(lt(y), w), { totalListHeight: y, totalListHeightChanged: w };
  },
  cn(la, Ps),
  { singleton: !0 }
);
function Tw(d) {
  let v = !1, m;
  return () => (v || (v = !0, m = d()), m);
}
const BL = Tw(() => /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent)), VL = It(
  ([
    { scrollBy: d, scrollTop: v, deviation: m, scrollingInProgress: C },
    { isScrolling: x, isAtBottom: w, scrollDirection: y, lastJumpDueToItemResize: k },
    { listState: L },
    { beforeUnshiftWith: b, shiftWithOffset: A, sizes: M, gap: U },
    { log: j },
    { recalcInProgress: Z }
  ]) => {
    const H = Ka(
      de(
        L,
        St(k),
        Dl(
          ([, V, q, X], [{ items: fe, totalCount: G, bottom: W, offsetBottom: ae }, ve]) => {
            const Se = W + ae;
            let me = 0;
            return q === G && V.length > 0 && fe.length > 0 && (fe[0].originalIndex === 0 && V[0].originalIndex === 0 || (me = Se - X, me !== 0 && (me += ve))), [me, fe, G, Se];
          },
          [0, [], 0, 0]
        ),
        ot(([V]) => V !== 0),
        St(v, y, C, w, j, Z),
        ot(([, V, q, X, , , fe]) => !fe && !X && V !== 0 && q === Sv),
        He(([[V], , , , , q]) => (q("Upward scrolling compensation", { amount: V }, qa.DEBUG), V))
      )
    );
    function Q(V) {
      V > 0 ? (vt(d, { top: -V, behavior: "auto" }), vt(m, 0)) : (vt(m, 0), vt(d, { top: -V, behavior: "auto" }));
    }
    return Ft(de(H, St(m, x)), ([V, q, X]) => {
      X && BL() ? vt(m, q - V) : Q(-V);
    }), Ft(
      de(
        hr(ia(x, !1), m, Z),
        ot(([V, q, X]) => !V && !X && q !== 0),
        He(([V, q]) => q),
        Ru(1)
      ),
      Q
    ), Qe(
      de(
        A,
        He((V) => ({ top: -V }))
      ),
      d
    ), Ft(
      de(
        b,
        St(M, U),
        He(([V, { lastSize: q, groupIndices: X, sizeTree: fe }, G]) => {
          function W(ae) {
            return ae * (q + G);
          }
          if (X.length === 0)
            return W(V);
          {
            let ae = 0;
            const ve = yv(fe, 0);
            let Se = 0, me = 0;
            for (; Se < V; ) {
              Se++, ae += ve;
              let Ce = X.length === me + 1 ? 1 / 0 : X[me + 1] - X[me] - 1;
              Se + Ce > V && (ae -= ve, Ce = V - Se + 1), Se += Ce, ae += W(Ce), me++;
            }
            return ae;
          }
        })
      ),
      (V) => {
        vt(m, V), requestAnimationFrame(() => {
          vt(d, { top: V }), requestAnimationFrame(() => {
            vt(m, 0), vt(Z, !1);
          });
        });
      }
    ), { deviation: m };
  },
  cn(la, Tv, Ps, bl, bu, B1)
), jL = It(
  ([{ didMount: d }, { scrollTo: v }, { listState: m }]) => {
    const C = xe(0);
    return Ft(
      de(
        d,
        St(C),
        ot(([, x]) => x !== 0),
        He(([, x]) => ({ top: x }))
      ),
      (x) => {
        To(
          de(
            m,
            jf(1),
            ot((w) => w.items.length > 1)
          ),
          () => {
            requestAnimationFrame(() => {
              vt(v, x);
            });
          }
        );
      }
    ), {
      initialScrollTop: C
    };
  },
  cn(Nu, la, Ps),
  { singleton: !0 }
), PL = It(
  ([{ viewportHeight: d }, { totalListHeight: v }]) => {
    const m = xe(!1), C = ia(
      de(
        hr(m, d, v),
        ot(([x]) => x),
        He(([, x, w]) => Math.max(0, x - w)),
        Ru(0),
        sn()
      ),
      0
    );
    return { alignToBottom: m, paddingTopAddition: C };
  },
  cn(la, Cw),
  { singleton: !0 }
), Y1 = It(([{ scrollTo: d, scrollContainerState: v }]) => {
  const m = kt(), C = kt(), x = kt(), w = xe(!1), y = xe(void 0);
  return Qe(
    de(
      hr(m, C),
      He(([{ viewportHeight: k, scrollTop: L, scrollHeight: b }, { offsetTop: A }]) => ({
        scrollTop: Math.max(0, L - A),
        scrollHeight: b,
        viewportHeight: k
      }))
    ),
    v
  ), Qe(
    de(
      d,
      St(C),
      He(([k, { offsetTop: L }]) => ({
        ...k,
        top: k.top + L
      }))
    ),
    x
  ), {
    // config
    useWindowScroll: w,
    customScrollParent: y,
    // input
    windowScrollContainerState: m,
    windowViewportRect: C,
    // signals
    windowScrollTo: x
  };
}, cn(la)), $L = ({
  itemTop: d,
  itemBottom: v,
  viewportTop: m,
  viewportBottom: C,
  locationParams: { behavior: x, align: w, ...y }
}) => d < m ? { ...y, behavior: x, align: w ?? "start" } : v > C ? { ...y, behavior: x, align: w ?? "end" } : null, YL = It(
  ([
    { sizes: d, totalCount: v, gap: m },
    { scrollTop: C, viewportHeight: x, headerHeight: w, fixedHeaderHeight: y, fixedFooterHeight: k, scrollingInProgress: L },
    { scrollToIndex: b }
  ]) => {
    const A = kt();
    return Qe(
      de(
        A,
        St(d, x, v, w, y, k, C),
        St(m),
        He(([[M, U, j, Z, H, Q, V, q], X]) => {
          const { done: fe, behavior: G, align: W, calculateViewLocation: ae = $L, ...ve } = M, Se = vw(M, U, Z - 1), me = gv(Se, U.offsetTree, X) + H + Q, Ce = me + Gi(U.sizeTree, Se)[1], Ve = q + Q, Me = q + j - V, he = ae({
            itemTop: me,
            itemBottom: Ce,
            viewportTop: Ve,
            viewportBottom: Me,
            locationParams: { behavior: G, align: W, ...ve }
          });
          return he ? fe && To(
            de(
              L,
              ot((ke) => ke === !1),
              // skips the initial publish of false, and the cleanup call.
              // but if scrollingInProgress is true, we skip the initial publish.
              jf(Qa(L) ? 1 : 2)
            ),
            fe
          ) : fe && fe(), he;
        }),
        ot((M) => M !== null)
      ),
      b
    ), {
      scrollIntoView: A
    };
  },
  cn(bl, la, Cv, Ps, bu),
  { singleton: !0 }
), GL = It(
  ([
    { sizes: d, sizeRanges: v },
    { scrollTop: m },
    { initialTopMostItemIndex: C },
    { didMount: x },
    { useWindowScroll: w, windowScrollContainerState: y, windowViewportRect: k }
  ]) => {
    const L = kt(), b = xe(void 0), A = xe(null), M = xe(null);
    return Qe(y, A), Qe(k, M), Ft(
      de(L, St(d, m, w, A, M)),
      ([U, j, Z, H, Q, V]) => {
        const q = DL(j.sizeTree);
        H && Q !== null && V !== null && (Z = Q.scrollTop - V.offsetTop), U({ ranges: q, scrollTop: Z });
      }
    ), Qe(de(b, ot(H1), He(WL)), C), Qe(
      de(
        x,
        St(b),
        ot(([, U]) => U !== void 0),
        sn(),
        He(([, U]) => U.ranges)
      ),
      v
    ), {
      getState: L,
      restoreStateFrom: b
    };
  },
  cn(bl, la, xv, Nu, Y1)
);
function WL(d) {
  return { offset: d.scrollTop, index: 0, align: "start" };
}
const QL = It(
  ([
    d,
    v,
    m,
    C,
    x,
    w,
    y,
    k,
    L,
    b
  ]) => ({
    ...d,
    ...v,
    ...m,
    ...C,
    ...x,
    ...w,
    ...y,
    ...k,
    ...L,
    ...b
  }),
  cn(
    $1,
    IL,
    Nu,
    Ew,
    Cw,
    jL,
    PL,
    Y1,
    YL,
    bu
  )
), KL = It(
  ([
    {
      totalCount: d,
      sizeRanges: v,
      fixedItemSize: m,
      defaultItemSize: C,
      trackItemSizes: x,
      itemSize: w,
      data: y,
      firstItemIndex: k,
      groupIndices: L,
      statefulTotalCount: b,
      gap: A,
      sizes: M
    },
    { initialTopMostItemIndex: U, scrolledToInitialItem: j },
    Z,
    H,
    Q,
    { listState: V, topItemsIndexes: q, ...X },
    { scrollToIndex: fe },
    G,
    { topItemCount: W },
    { groupCounts: ae },
    ve
  ]) => (Qe(X.rangeChanged, ve.scrollSeekRangeChanged), Qe(
    de(
      ve.windowViewportRect,
      He((Se) => Se.visibleHeight)
    ),
    Z.viewportHeight
  ), {
    // input
    totalCount: d,
    data: y,
    firstItemIndex: k,
    sizeRanges: v,
    initialTopMostItemIndex: U,
    scrolledToInitialItem: j,
    topItemsIndexes: q,
    topItemCount: W,
    groupCounts: ae,
    fixedItemHeight: m,
    defaultItemHeight: C,
    gap: A,
    ...Q,
    // output
    statefulTotalCount: b,
    listState: V,
    scrollToIndex: fe,
    trackItemSizes: x,
    itemSize: w,
    groupIndices: L,
    // exported from stateFlagsSystem
    ...X,
    // the bag of IO from featureGroup1System
    ...ve,
    ...Z,
    sizes: M,
    ...H
  }),
  cn(
    bl,
    xv,
    la,
    GL,
    UL,
    Ps,
    Cv,
    VL,
    FL,
    yw,
    QL
  )
), N1 = "-webkit-sticky", Gx = "sticky", xw = Tw(() => {
  if (typeof document > "u")
    return Gx;
  const d = document.createElement("div");
  return d.style.position = N1, d.style.position === N1 ? N1 : Gx;
});
function ww(d, v) {
  const m = N.useRef(null), C = N.useCallback(
    (k) => {
      if (k === null || !k.offsetParent)
        return;
      const L = k.getBoundingClientRect(), b = L.width;
      let A, M;
      if (v) {
        const U = v.getBoundingClientRect(), j = L.top - U.top;
        A = U.height - Math.max(0, j), M = j + v.scrollTop;
      } else
        A = window.innerHeight - Math.max(0, L.top), M = L.top + window.pageYOffset;
      m.current = {
        offsetTop: M,
        visibleHeight: A,
        visibleWidth: b
      }, d(m.current);
    },
    [d, v]
  ), { callbackRef: x, ref: w } = F1(C), y = N.useCallback(() => {
    C(w.current);
  }, [C, w]);
  return N.useEffect(() => {
    if (v) {
      v.addEventListener("scroll", y);
      const k = new ResizeObserver(y);
      return k.observe(v), () => {
        v.removeEventListener("scroll", y), k.unobserve(v);
      };
    } else
      return window.addEventListener("scroll", y), window.addEventListener("resize", y), () => {
        window.removeEventListener("scroll", y), window.removeEventListener("resize", y);
      };
  }, [y, v]), x;
}
const Rw = N.createContext(void 0), kw = N.createContext(void 0);
function Dw(d) {
  return d;
}
const qL = /* @__PURE__ */ It(() => {
  const d = xe((L) => `Item ${L}`), v = xe(null), m = xe((L) => `Group ${L}`), C = xe({}), x = xe(Dw), w = xe("div"), y = xe(Yf), k = (L, b = null) => ia(
    de(
      C,
      He((A) => A[L]),
      sn()
    ),
    b
  );
  return {
    context: v,
    itemContent: d,
    groupContent: m,
    components: C,
    computeItemKey: x,
    headerFooterTag: w,
    scrollerRef: y,
    FooterComponent: k("Footer"),
    HeaderComponent: k("Header"),
    TopItemListComponent: k("TopItemList"),
    ListComponent: k("List", "div"),
    ItemComponent: k("Item", "div"),
    GroupComponent: k("Group", "div"),
    ScrollerComponent: k("Scroller", "div"),
    EmptyPlaceholder: k("EmptyPlaceholder"),
    ScrollSeekPlaceholder: k("ScrollSeekPlaceholder")
  };
}), XL = /* @__PURE__ */ It(([d, v]) => ({ ...d, ...v }), cn(KL, qL)), ZL = ({ height: d }) => /* @__PURE__ */ N.createElement("div", { style: { height: d } }), JL = { position: xw(), zIndex: 1, overflowAnchor: "none" }, e_ = { overflowAnchor: "none" }, Wx = /* @__PURE__ */ N.memo(function({ showTopList: v = !1 }) {
  const m = wt("listState"), C = hi("sizeRanges"), x = wt("useWindowScroll"), w = wt("customScrollParent"), y = hi("windowScrollContainerState"), k = hi("scrollContainerState"), L = w || x ? y : k, b = wt("itemContent"), A = wt("context"), M = wt("groupContent"), U = wt("trackItemSizes"), j = wt("itemSize"), Z = wt("log"), H = hi("gap"), { callbackRef: Q } = vL(
    C,
    j,
    U,
    v ? Yf : L,
    Z,
    H,
    w
  ), [V, q] = N.useState(0);
  G1("deviation", (he) => {
    V !== he && q(he);
  });
  const X = wt("EmptyPlaceholder"), fe = wt("ScrollSeekPlaceholder") || ZL, G = wt("ListComponent"), W = wt("ItemComponent"), ae = wt("GroupComponent"), ve = wt("computeItemKey"), Se = wt("isSeeking"), me = wt("groupIndices").length > 0, Ce = wt("paddingTopAddition"), Ve = wt("scrolledToInitialItem"), Me = v ? {} : {
    boxSizing: "border-box",
    paddingTop: m.offsetTop + Ce,
    paddingBottom: m.offsetBottom,
    marginTop: V,
    ...Ve ? {} : { visibility: "hidden" }
  };
  return !v && m.totalCount === 0 && X ? N.createElement(X, _a(X, A)) : N.createElement(
    G,
    {
      ..._a(G, A),
      ref: Q,
      style: Me,
      "data-test-id": v ? "virtuoso-top-item-list" : "virtuoso-item-list"
    },
    (v ? m.topItems : m.items).map((he) => {
      const ke = he.originalIndex, Ue = ve(ke + m.firstItemIndex, he.data, A);
      return Se ? N.createElement(fe, {
        ..._a(fe, A),
        key: Ue,
        index: he.index,
        height: he.size,
        type: he.type || "item",
        ...he.type === "group" ? {} : { groupIndex: he.groupIndex }
      }) : he.type === "group" ? N.createElement(
        ae,
        {
          ..._a(ae, A),
          key: Ue,
          "data-index": ke,
          "data-known-size": he.size,
          "data-item-index": he.index,
          style: JL
        },
        M(he.index, A)
      ) : N.createElement(
        W,
        {
          ..._a(W, A),
          ...r_(W, he.data),
          key: Ue,
          "data-index": ke,
          "data-known-size": he.size,
          "data-item-index": he.index,
          "data-item-group-index": he.groupIndex,
          style: e_
        },
        me ? b(he.index, he.groupIndex, he.data, A) : b(he.index, he.data, A)
      );
    })
  );
}), t_ = {
  height: "100%",
  outline: "none",
  overflowY: "auto",
  position: "relative",
  WebkitOverflowScrolling: "touch"
}, Yy = {
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0
}, n_ = {
  width: "100%",
  position: xw(),
  top: 0,
  zIndex: 1
};
function _a(d, v) {
  if (typeof d != "string")
    return { context: v };
}
function r_(d, v) {
  return { item: typeof d == "string" ? void 0 : v };
}
const a_ = /* @__PURE__ */ N.memo(function() {
  const v = wt("HeaderComponent"), m = hi("headerHeight"), C = wt("headerFooterTag"), x = js((y) => m(ku(y, "height"))), w = wt("context");
  return v ? N.createElement(C, { ref: x }, N.createElement(v, _a(v, w))) : null;
}), i_ = /* @__PURE__ */ N.memo(function() {
  const v = wt("FooterComponent"), m = hi("footerHeight"), C = wt("headerFooterTag"), x = js((y) => m(ku(y, "height"))), w = wt("context");
  return v ? N.createElement(C, { ref: x }, N.createElement(v, _a(v, w))) : null;
});
function bw({ usePublisher: d, useEmitter: v, useEmitterValue: m }) {
  return N.memo(function({ style: w, children: y, ...k }) {
    const L = d("scrollContainerState"), b = m("ScrollerComponent"), A = d("smoothScrollTargetReached"), M = m("scrollerRef"), U = m("context"), { scrollerRef: j, scrollByCallback: Z, scrollToCallback: H } = ow(
      L,
      A,
      b,
      M
    );
    return v("scrollTo", H), v("scrollBy", Z), N.createElement(
      b,
      {
        ref: j,
        style: { ...t_, ...w },
        "data-test-id": "virtuoso-scroller",
        "data-virtuoso-scroller": !0,
        tabIndex: 0,
        ...k,
        ..._a(b, U)
      },
      y
    );
  });
}
function Nw({ usePublisher: d, useEmitter: v, useEmitterValue: m }) {
  return N.memo(function({ style: w, children: y, ...k }) {
    const L = d("windowScrollContainerState"), b = m("ScrollerComponent"), A = d("smoothScrollTargetReached"), M = m("totalListHeight"), U = m("deviation"), j = m("customScrollParent"), Z = m("context"), { scrollerRef: H, scrollByCallback: Q, scrollToCallback: V } = ow(
      L,
      A,
      b,
      Yf,
      j
    );
    return fL(() => (H.current = j || window, () => {
      H.current = null;
    }), [H, j]), v("windowScrollTo", V), v("scrollBy", Q), N.createElement(
      b,
      {
        style: { position: "relative", ...w, ...M !== 0 ? { height: M + U } : {} },
        "data-virtuoso-scroller": !0,
        ...k,
        ..._a(b, Z)
      },
      y
    );
  });
}
const l_ = ({ children: d }) => {
  const v = N.useContext(Rw), m = hi("viewportHeight"), C = hi("fixedItemHeight"), x = js(nw(m, (w) => ku(w, "height")));
  return N.useEffect(() => {
    v && (m(v.viewportHeight), C(v.itemHeight));
  }, [v, m, C]), /* @__PURE__ */ N.createElement("div", { style: Yy, ref: x, "data-viewport-type": "element" }, d);
}, o_ = ({ children: d }) => {
  const v = N.useContext(Rw), m = hi("windowViewportRect"), C = hi("fixedItemHeight"), x = wt("customScrollParent"), w = ww(m, x);
  return N.useEffect(() => {
    v && (C(v.itemHeight), m({ offsetTop: 0, visibleHeight: v.viewportHeight, visibleWidth: 100 }));
  }, [v, m, C]), /* @__PURE__ */ N.createElement("div", { ref: w, style: Yy, "data-viewport-type": "window" }, d);
}, u_ = ({ children: d }) => {
  const v = wt("TopItemListComponent"), m = wt("headerHeight"), C = { ...n_, marginTop: `${m}px` }, x = wt("context");
  return N.createElement(v || "div", { style: C, context: x }, d);
}, s_ = /* @__PURE__ */ N.memo(function(v) {
  const m = wt("useWindowScroll"), C = wt("topItemsIndexes").length > 0, x = wt("customScrollParent"), w = x || m ? d_ : f_, y = x || m ? o_ : l_;
  return /* @__PURE__ */ N.createElement(w, { ...v }, C && /* @__PURE__ */ N.createElement(u_, null, /* @__PURE__ */ N.createElement(Wx, { showTopList: !0 })), /* @__PURE__ */ N.createElement(y, null, /* @__PURE__ */ N.createElement(a_, null), /* @__PURE__ */ N.createElement(Wx, null), /* @__PURE__ */ N.createElement(i_, null)));
}), {
  Component: c_,
  usePublisher: hi,
  useEmitterValue: wt,
  useEmitter: G1
} = /* @__PURE__ */ iw(
  XL,
  {
    required: {},
    optional: {
      restoreStateFrom: "restoreStateFrom",
      context: "context",
      followOutput: "followOutput",
      itemContent: "itemContent",
      groupContent: "groupContent",
      overscan: "overscan",
      increaseViewportBy: "increaseViewportBy",
      totalCount: "totalCount",
      groupCounts: "groupCounts",
      topItemCount: "topItemCount",
      firstItemIndex: "firstItemIndex",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      components: "components",
      atBottomThreshold: "atBottomThreshold",
      atTopThreshold: "atTopThreshold",
      computeItemKey: "computeItemKey",
      defaultItemHeight: "defaultItemHeight",
      fixedItemHeight: "fixedItemHeight",
      itemSize: "itemSize",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      headerFooterTag: "headerFooterTag",
      data: "data",
      initialItemCount: "initialItemCount",
      initialScrollTop: "initialScrollTop",
      alignToBottom: "alignToBottom",
      useWindowScroll: "useWindowScroll",
      customScrollParent: "customScrollParent",
      scrollerRef: "scrollerRef",
      logLevel: "logLevel"
    },
    methods: {
      scrollToIndex: "scrollToIndex",
      scrollIntoView: "scrollIntoView",
      scrollTo: "scrollTo",
      scrollBy: "scrollBy",
      autoscrollToBottom: "autoscrollToBottom",
      getState: "getState"
    },
    events: {
      isScrolling: "isScrolling",
      endReached: "endReached",
      startReached: "startReached",
      rangeChanged: "rangeChanged",
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      totalListHeightChanged: "totalListHeightChanged",
      itemsRendered: "itemsRendered",
      groupIndices: "groupIndices"
    }
  },
  s_
), f_ = /* @__PURE__ */ bw({ usePublisher: hi, useEmitterValue: wt, useEmitter: G1 }), d_ = /* @__PURE__ */ Nw({ usePublisher: hi, useEmitterValue: wt, useEmitter: G1 }), Mw = c_, Qx = {
  items: [],
  offsetBottom: 0,
  offsetTop: 0,
  top: 0,
  bottom: 0,
  itemHeight: 0,
  itemWidth: 0
}, p_ = {
  items: [{ index: 0 }],
  offsetBottom: 0,
  offsetTop: 0,
  top: 0,
  bottom: 0,
  itemHeight: 0,
  itemWidth: 0
}, { round: Kx, ceil: qx, floor: Fy, min: M1, max: pv } = Math;
function v_(d) {
  return {
    ...p_,
    items: d
  };
}
function Xx(d, v, m) {
  return Array.from({ length: v - d + 1 }).map((C, x) => {
    const w = m === null ? null : m[x + d];
    return { index: x + d, data: w };
  });
}
function h_(d, v) {
  return d && d.column === v.column && d.row === v.row;
}
function Ly(d, v) {
  return d && d.width === v.width && d.height === v.height;
}
const m_ = /* @__PURE__ */ It(
  ([
    { overscan: d, visibleRange: v, listBoundary: m },
    { scrollTop: C, viewportHeight: x, scrollBy: w, scrollTo: y, smoothScrollTargetReached: k, scrollContainerState: L, footerHeight: b, headerHeight: A },
    M,
    U,
    { propsReady: j, didMount: Z },
    { windowViewportRect: H, useWindowScroll: Q, customScrollParent: V, windowScrollContainerState: q, windowScrollTo: X },
    fe
  ]) => {
    const G = xe(0), W = xe(0), ae = xe(Qx), ve = xe({ height: 0, width: 0 }), Se = xe({ height: 0, width: 0 }), me = kt(), Ce = kt(), Ve = xe(0), Me = xe(null), he = xe({ row: 0, column: 0 }), ke = kt(), Ue = kt(), ht = xe(!1), ue = xe(0), De = xe(!0), ne = xe(!1);
    Ft(
      de(
        Z,
        St(ue),
        ot(([ce, rt]) => !!rt)
      ),
      () => {
        vt(De, !1), vt(W, 0);
      }
    ), Ft(
      de(
        hr(Z, De, Se, ve, ue, ne),
        ot(([ce, rt, st, Ct, , tn]) => ce && !rt && st.height !== 0 && Ct.height !== 0 && !tn)
      ),
      ([, , , , ce]) => {
        vt(ne, !0), j1(1, () => {
          vt(me, ce);
        }), To(de(C), () => {
          vt(m, [0, 0]), vt(De, !0);
        });
      }
    ), Qe(
      de(
        Ue,
        ot((ce) => ce != null && ce.scrollTop > 0),
        Co(0)
      ),
      W
    ), Ft(
      de(
        Z,
        St(Ue),
        ot(([, ce]) => ce != null)
      ),
      ([, ce]) => {
        ce && (vt(ve, ce.viewport), vt(Se, ce == null ? void 0 : ce.item), vt(he, ce.gap), ce.scrollTop > 0 && (vt(ht, !0), To(de(C, jf(1)), (rt) => {
          vt(ht, !1);
        }), vt(y, { top: ce.scrollTop })));
      }
    ), Qe(
      de(
        ve,
        He(({ height: ce }) => ce)
      ),
      x
    ), Qe(
      de(
        hr(
          lt(ve, Ly),
          lt(Se, Ly),
          lt(he, (ce, rt) => ce && ce.column === rt.column && ce.row === rt.row),
          lt(C)
        ),
        He(([ce, rt, st, Ct]) => ({
          viewport: ce,
          item: rt,
          gap: st,
          scrollTop: Ct
        }))
      ),
      ke
    ), Qe(
      de(
        hr(
          lt(G),
          v,
          lt(he, h_),
          lt(Se, Ly),
          lt(ve, Ly),
          lt(Me),
          lt(W),
          lt(ht),
          lt(De),
          lt(ue)
        ),
        ot(([, , , , , , , ce]) => !ce),
        He(
          ([
            ce,
            [rt, st],
            Ct,
            tn,
            Gt,
            Mt,
            qt,
            ,
            wn,
            fn
          ]) => {
            const { row: Wt, column: mr } = Ct, { height: br, width: Xa } = tn, { width: Za } = Gt;
            if (qt === 0 && (ce === 0 || Za === 0))
              return Qx;
            if (Xa === 0) {
              const ua = P1(fn, ce), Ee = ua === 0 ? Math.max(qt - 1, 0) : ua;
              return v_(Xx(ua, Ee, Mt));
            }
            const Yr = Lw(Za, Xa, mr);
            let Nr, Rn;
            wn ? rt === 0 && st === 0 && qt > 0 ? (Nr = 0, Rn = qt - 1) : (Nr = Yr * Fy((rt + Wt) / (br + Wt)), Rn = Yr * qx((st + Wt) / (br + Wt)) - 1, Rn = M1(ce - 1, pv(Rn, Yr - 1)), Nr = M1(Rn, pv(0, Nr))) : (Nr = 0, Rn = -1);
            const Oa = Xx(Nr, Rn, Mt), { top: Gr, bottom: za } = Zx(Gt, Ct, tn, Oa), Yn = qx(ce / Yr), Nl = Yn * br + (Yn - 1) * Wt - za;
            return { items: Oa, offsetTop: Gr, offsetBottom: Nl, top: Gr, bottom: za, itemHeight: br, itemWidth: Xa };
          }
        )
      ),
      ae
    ), Qe(
      de(
        Me,
        ot((ce) => ce !== null),
        He((ce) => ce.length)
      ),
      G
    ), Qe(
      de(
        hr(ve, Se, ae, he),
        ot(([ce, rt, { items: st }]) => st.length > 0 && rt.height !== 0 && ce.height !== 0),
        He(([ce, rt, { items: st }, Ct]) => {
          const { top: tn, bottom: Gt } = Zx(ce, Ct, rt, st);
          return [tn, Gt];
        }),
        sn(Ev)
      ),
      m
    );
    const Fe = xe(!1);
    Qe(
      de(
        C,
        St(Fe),
        He(([ce, rt]) => rt || ce !== 0)
      ),
      Fe
    );
    const Xe = Ka(
      de(
        lt(ae),
        ot(({ items: ce }) => ce.length > 0),
        St(G, Fe),
        ot(([{ items: ce }, rt, st]) => st && ce[ce.length - 1].index === rt - 1),
        He(([, ce]) => ce - 1),
        sn()
      )
    ), yn = Ka(
      de(
        lt(ae),
        ot(({ items: ce }) => ce.length > 0 && ce[0].index === 0),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        Co(0),
        sn()
      )
    ), Un = Ka(
      de(
        lt(ae),
        St(ht),
        ot(([{ items: ce }, rt]) => ce.length > 0 && !rt),
        He(([{ items: ce }]) => ({
          startIndex: ce[0].index,
          endIndex: ce[ce.length - 1].index
        })),
        sn(gw),
        Ru(0)
      )
    );
    Qe(Un, U.scrollSeekRangeChanged), Qe(
      de(
        me,
        St(ve, Se, G, he),
        He(([ce, rt, st, Ct, tn]) => {
          const Gt = mw(ce), { align: Mt, behavior: qt, offset: wn } = Gt;
          let fn = Gt.index;
          fn === "LAST" && (fn = Ct - 1), fn = pv(0, fn, M1(Ct - 1, fn));
          let Wt = A1(rt, tn, st, fn);
          return Mt === "end" ? Wt = Kx(Wt - rt.height + st.height) : Mt === "center" && (Wt = Kx(Wt - rt.height / 2 + st.height / 2)), wn && (Wt += wn), { top: Wt, behavior: qt };
        })
      ),
      y
    );
    const ir = ia(
      de(
        ae,
        He((ce) => ce.offsetBottom + ce.bottom)
      ),
      0
    );
    return Qe(
      de(
        H,
        He((ce) => ({ width: ce.visibleWidth, height: ce.visibleHeight }))
      ),
      ve
    ), {
      // input
      data: Me,
      totalCount: G,
      viewportDimensions: ve,
      itemDimensions: Se,
      scrollTop: C,
      scrollHeight: Ce,
      overscan: d,
      scrollBy: w,
      scrollTo: y,
      scrollToIndex: me,
      smoothScrollTargetReached: k,
      windowViewportRect: H,
      windowScrollTo: X,
      useWindowScroll: Q,
      customScrollParent: V,
      windowScrollContainerState: q,
      deviation: Ve,
      scrollContainerState: L,
      footerHeight: b,
      headerHeight: A,
      initialItemCount: W,
      gap: he,
      restoreStateFrom: Ue,
      ...U,
      initialTopMostItemIndex: ue,
      // output
      gridState: ae,
      totalListHeight: ir,
      ...M,
      startReached: yn,
      endReached: Xe,
      rangeChanged: Un,
      stateChanged: ke,
      propsReady: j,
      stateRestoreInProgress: ht,
      ...fe
    };
  },
  cn($1, la, Tv, Ew, Nu, Y1, bu)
);
function Zx(d, v, m, C) {
  const { height: x } = m;
  if (x === void 0 || C.length === 0)
    return { top: 0, bottom: 0 };
  const w = A1(d, v, m, C[0].index), y = A1(d, v, m, C[C.length - 1].index) + x;
  return { top: w, bottom: y };
}
function A1(d, v, m, C) {
  const x = Lw(d.width, m.width, v.column), w = Fy(C / x), y = w * m.height + pv(0, w - 1) * v.row;
  return y > 0 ? y + v.row : y;
}
function Lw(d, v, m) {
  return pv(1, Fy((d + m) / (Fy(v) + m)));
}
const y_ = /* @__PURE__ */ It(() => {
  const d = xe((b) => `Item ${b}`), v = xe({}), m = xe(null), C = xe("virtuoso-grid-item"), x = xe("virtuoso-grid-list"), w = xe(Dw), y = xe("div"), k = xe(Yf), L = (b, A = null) => ia(
    de(
      v,
      He((M) => M[b]),
      sn()
    ),
    A
  );
  return {
    context: m,
    itemContent: d,
    components: v,
    computeItemKey: w,
    itemClassName: C,
    listClassName: x,
    headerFooterTag: y,
    scrollerRef: k,
    FooterComponent: L("Footer"),
    HeaderComponent: L("Header"),
    ListComponent: L("List", "div"),
    ItemComponent: L("Item", "div"),
    ScrollerComponent: L("Scroller", "div"),
    ScrollSeekPlaceholder: L("ScrollSeekPlaceholder", "div")
  };
}), g_ = /* @__PURE__ */ It(([d, v]) => ({ ...d, ...v }), cn(m_, y_)), S_ = /* @__PURE__ */ N.memo(function() {
  const v = mn("gridState"), m = mn("listClassName"), C = mn("itemClassName"), x = mn("itemContent"), w = mn("computeItemKey"), y = mn("isSeeking"), k = Yi("scrollHeight"), L = mn("ItemComponent"), b = mn("ListComponent"), A = mn("ScrollSeekPlaceholder"), M = mn("context"), U = Yi("itemDimensions"), j = Yi("gap"), Z = mn("log"), H = mn("stateRestoreInProgress"), Q = js((V) => {
    const q = V.parentElement.parentElement.scrollHeight;
    k(q);
    const X = V.firstChild;
    if (X) {
      const { width: fe, height: G } = X.getBoundingClientRect();
      U({ width: fe, height: G });
    }
    j({
      row: Jx("row-gap", getComputedStyle(V).rowGap, Z),
      column: Jx("column-gap", getComputedStyle(V).columnGap, Z)
    });
  });
  return H ? null : N.createElement(
    b,
    {
      ref: Q,
      className: m,
      ..._a(b, M),
      style: { paddingTop: v.offsetTop, paddingBottom: v.offsetBottom },
      "data-test-id": "virtuoso-item-list"
    },
    v.items.map((V) => {
      const q = w(V.index, V.data, M);
      return y ? N.createElement(A, {
        key: q,
        ..._a(A, M),
        index: V.index,
        height: v.itemHeight,
        width: v.itemWidth
      }) : N.createElement(
        L,
        { ..._a(L, M), className: C, "data-index": V.index, key: q },
        x(V.index, V.data, M)
      );
    })
  );
}), E_ = N.memo(function() {
  const v = mn("HeaderComponent"), m = Yi("headerHeight"), C = mn("headerFooterTag"), x = js((y) => m(ku(y, "height"))), w = mn("context");
  return v ? N.createElement(C, { ref: x }, N.createElement(v, _a(v, w))) : null;
}), C_ = N.memo(function() {
  const v = mn("FooterComponent"), m = Yi("footerHeight"), C = mn("headerFooterTag"), x = js((y) => m(ku(y, "height"))), w = mn("context");
  return v ? N.createElement(C, { ref: x }, N.createElement(v, _a(v, w))) : null;
}), T_ = ({ children: d }) => {
  const v = N.useContext(kw), m = Yi("itemDimensions"), C = Yi("viewportDimensions"), x = js((w) => {
    C(w.getBoundingClientRect());
  });
  return N.useEffect(() => {
    v && (C({ height: v.viewportHeight, width: v.viewportWidth }), m({ height: v.itemHeight, width: v.itemWidth }));
  }, [v, C, m]), /* @__PURE__ */ N.createElement("div", { style: Yy, ref: x }, d);
}, x_ = ({ children: d }) => {
  const v = N.useContext(kw), m = Yi("windowViewportRect"), C = Yi("itemDimensions"), x = mn("customScrollParent"), w = ww(m, x);
  return N.useEffect(() => {
    v && (C({ height: v.itemHeight, width: v.itemWidth }), m({ offsetTop: 0, visibleHeight: v.viewportHeight, visibleWidth: v.viewportWidth }));
  }, [v, m, C]), /* @__PURE__ */ N.createElement("div", { ref: w, style: Yy }, d);
}, w_ = /* @__PURE__ */ N.memo(function({ ...v }) {
  const m = mn("useWindowScroll"), C = mn("customScrollParent"), x = C || m ? k_ : R_, w = C || m ? x_ : T_;
  return /* @__PURE__ */ N.createElement(x, { ...v }, /* @__PURE__ */ N.createElement(w, null, /* @__PURE__ */ N.createElement(E_, null), /* @__PURE__ */ N.createElement(S_, null), /* @__PURE__ */ N.createElement(C_, null)));
}), {
  Component: G_,
  usePublisher: Yi,
  useEmitterValue: mn,
  useEmitter: _w
} = /* @__PURE__ */ iw(
  g_,
  {
    optional: {
      context: "context",
      totalCount: "totalCount",
      overscan: "overscan",
      itemContent: "itemContent",
      components: "components",
      computeItemKey: "computeItemKey",
      data: "data",
      initialItemCount: "initialItemCount",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      headerFooterTag: "headerFooterTag",
      listClassName: "listClassName",
      itemClassName: "itemClassName",
      useWindowScroll: "useWindowScroll",
      customScrollParent: "customScrollParent",
      scrollerRef: "scrollerRef",
      logLevel: "logLevel",
      restoreStateFrom: "restoreStateFrom",
      initialTopMostItemIndex: "initialTopMostItemIndex"
    },
    methods: {
      scrollTo: "scrollTo",
      scrollBy: "scrollBy",
      scrollToIndex: "scrollToIndex"
    },
    events: {
      isScrolling: "isScrolling",
      endReached: "endReached",
      startReached: "startReached",
      rangeChanged: "rangeChanged",
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      stateChanged: "stateChanged"
    }
  },
  w_
), R_ = /* @__PURE__ */ bw({ usePublisher: Yi, useEmitterValue: mn, useEmitter: _w }), k_ = /* @__PURE__ */ Nw({ usePublisher: Yi, useEmitterValue: mn, useEmitter: _w });
function Jx(d, v, m) {
  return v !== "normal" && !(v != null && v.endsWith("px")) && m(`${d} was not resolved to pixel value correctly`, v, qa.WARN), v === "normal" ? 0 : parseInt(v ?? "0", 10);
}
const W_ = ({
  data: d,
  placeholder: v,
  size: m = 31,
  isSubmit: C,
  isValid: x,
  overSizeLimit: w = 999,
  disabled: y = !1,
  isBeautiful: k = !0,
  className: L,
  onFieldChange: b
}) => {
  const [A, M] = ar(!1), [U, j] = ar(""), [Z, H] = ar([]), Q = vv(null);
  N_(Q, () => M(!1));
  const V = hv(() => [...new Set(d)], [d]), q = hv(() => V.length > w, [w, V]), X = (ve) => {
    j(ve.target.value), M(!0);
  }, fe = zn(
    (ve, Se) => {
      j(Se), b(Se), M(!1), ve.preventDefault();
    },
    [b]
  ), G = zn(
    (ve) => {
      j(""), b(void 0), ve.preventDefault();
    },
    [b]
  ), W = (ve) => {
    M(!0), ve.preventDefault();
  }, ae = zn(
    (ve, Se, me) => {
      const Ce = "searchBar-icon-wrapper";
      if (ve)
        return /* @__PURE__ */ N.createElement("button", { className: Ce, onClick: G }, /* @__PURE__ */ N.createElement(
          By,
          {
            size: 20,
            strokeWidth: 1.8,
            className: "searchBar-valid-icon"
          }
        ));
      if (Se || me)
        return /* @__PURE__ */ N.createElement("button", { className: Ce, onClick: G }, /* @__PURE__ */ N.createElement(
          Pf,
          {
            size: 23,
            strokeWidth: 1.6,
            className: "searchBar-reset-icon"
          }
        ));
      const Ve = y ? "searchBar-icon-disabled" : "searchBar-icon";
      return /* @__PURE__ */ N.createElement(
        "button",
        {
          className: Ce,
          disabled: y,
          onClick: W
        },
        /* @__PURE__ */ N.createElement(HM, { size: 19, strokeWidth: 1.7, className: Ve })
      );
    },
    [G, y]
  );
  return $n(() => {
    H(
      V.filter(
        (ve) => ve.toLowerCase().includes(U.toLowerCase())
      )
    );
  }, [U, V]), $n(() => {
    C && (j(""), b(void 0), M(!1));
  }, [C, b]), $n(() => {
    U || b(void 0);
  }, [U, b]), $n(() => {
    y && j("");
  }, [y]), /* @__PURE__ */ N.createElement("div", { className: `searchBar-container ${L}`, ref: Q }, /* @__PURE__ */ N.createElement(
    "div",
    {
      className: `${y && "searchBar-content-wrapper-disabled"}
					${A ? "searchBar-content-wrapper-visible" : "searchBar-content-wrapper"}`
    },
    /* @__PURE__ */ N.createElement(
      "button",
      {
        onClick: W,
        className: "searchBar-clickable-wrapper",
        disabled: y
      },
      /* @__PURE__ */ N.createElement(
        "input",
        {
          className: "searchBar-input-text",
          type: "text",
          size: m < 21 ? 21 : m,
          onChange: X,
          value: U,
          placeholder: v,
          disabled: y
        }
      )
    ),
    ae(x, A, U)
  ), A ? /* @__PURE__ */ N.createElement(
    "div",
    {
      className: `searchBar-removable-panel ${k ? "beautiful-background" : ""} `
    },
    q ? /* @__PURE__ */ N.createElement(
      D_,
      {
        data: Z,
        handleClick: fe
      }
    ) : /* @__PURE__ */ N.createElement(
      b_,
      {
        data: Z,
        handleClick: fe
      }
    )
  ) : null);
}, D_ = ({ data: d, handleClick: v }) => {
  const m = d.length, C = (x) => {
    const w = d[x];
    return /* @__PURE__ */ N.createElement(
      Ow,
      {
        key: w,
        item: w,
        handleClick: v
      }
    );
  };
  return /* @__PURE__ */ N.createElement(
    Mw,
    {
      className: "searchBar-item-list",
      style: {
        height: `${m < 13 ? m * 24 : 300}px`
      },
      totalCount: d.length,
      itemContent: C
    }
  );
}, b_ = ({ data: d, handleClick: v }) => /* @__PURE__ */ N.createElement("ul", { className: "searchBar-item-list" }, d.map((m) => /* @__PURE__ */ N.createElement(
  Ow,
  {
    key: m,
    item: m,
    handleClick: v
  }
))), Ow = ({
  item: d,
  handleClick: v
}) => /* @__PURE__ */ N.createElement(
  "button",
  {
    onClick: (m) => v(m, d),
    className: "searchBar-clickable-items"
  },
  d
), N_ = (d, v) => {
  const m = (C) => {
    d.current && !d.current.contains(C.target) && v();
  };
  $n(() => (document.addEventListener("click", m), () => {
    document.removeEventListener("click", m);
  }));
};
const Q_ = ({
  data: d,
  placeholder: v,
  size: m = 31,
  isSubmit: C,
  isValid: x,
  pickLimit: w = 0,
  overSizeLimit: y = 999,
  disabled: k = !1,
  isBeautiful: L = !0,
  className: b,
  onFieldChange: A
}) => {
  const [M, U] = ar(!1), [j, Z] = ar(""), [H, Q] = ar([]), [V, q] = ar([]), [X, fe] = ar(""), G = vv(null), W = vv(0);
  O_(G, () => U(!1));
  const ae = hv(() => {
    const ke = d.filter(
      (Ue) => H.includes(Ue) === !1
    );
    return [...new Set(ke)];
  }, [d, H]), ve = hv(() => ae.length > y, [y, ae]), Se = (ke) => {
    Z(ke.target.value), U(!0);
  }, me = zn(
    (ke, Ue) => {
      (W.current < w || w === 0) && (Z(""), Q((ht) => [...ht, Ue])), ke.preventDefault();
    },
    [w]
  ), Ce = zn(
    (ke, Ue) => {
      Q(() => [
        ...H.filter((ht) => ht !== ke)
      ]), Ue.preventDefault();
    },
    [H]
  ), Ve = zn(
    (ke) => {
      Z(""), Q([]), U(!1), ke.preventDefault();
    },
    []
  ), Me = (ke) => {
    U(!0), ke.preventDefault();
  }, he = zn(
    (ke, Ue, ht) => {
      const ue = "selectMultiple-icon-wrapper";
      if (ke)
        return /* @__PURE__ */ N.createElement(
          "button",
          {
            className: ue,
            disabled: k,
            onClick: Ve
          },
          /* @__PURE__ */ N.createElement(
            By,
            {
              size: 20,
              strokeWidth: 1.8,
              className: "selectMultiple-valid-icon"
            }
          )
        );
      if (Ue || ht)
        return /* @__PURE__ */ N.createElement(
          "button",
          {
            className: ue,
            disabled: k,
            onClick: Ve
          },
          /* @__PURE__ */ N.createElement(
            Pf,
            {
              size: 22,
              strokeWidth: 1.7,
              className: "selectMultiple-erase-icon"
            }
          )
        );
      const De = k ? "selectMultiple-icon-disabled" : "selectMultiple-icon";
      return /* @__PURE__ */ N.createElement(
        "button",
        {
          className: ue,
          disabled: k,
          onClick: Me
        },
        /* @__PURE__ */ N.createElement(
          _M,
          {
            size: 19,
            strokeWidth: 1.6,
            className: De
          }
        )
      );
    },
    [k, Ve]
  );
  return $n(() => {
    C && (Z(""), Q([]), U(!1));
  }, [C, A]), $n(() => {
    k && (Z(""), Q([]), U(!1));
  }, [k]), $n(() => {
    q(
      ae.filter(
        (ke) => ke.toLowerCase().includes(j.toLowerCase())
      )
    );
  }, [j, ae]), $n(() => {
    W.current = H.length, A(H);
  }, [A, H]), $n(() => {
    const ke = w ? `/${w}` : "", Ue = H.length > 0 ? `${H.length}${ke} item(s) sélectionné(s)` : "";
    fe(Ue);
  }, [H, w]), /* @__PURE__ */ N.createElement("div", { className: `selectMultiple-container ${b}`, ref: G }, /* @__PURE__ */ N.createElement(
    "div",
    {
      className: `${k && "selectMultiple-content-wrapper-disabled"}
					${M ? "selectMultiple-content-wrapper-visible" : "selectMultiple-content-wrapper"}`
    },
    /* @__PURE__ */ N.createElement(
      "button",
      {
        onClick: Me,
        className: "selectMultiple-clickable-wrapper",
        disabled: k
      },
      /* @__PURE__ */ N.createElement(
        "input",
        {
          className: "selectMultiple-input-text",
          type: "text",
          size: m < 21 ? 21 : m,
          onChange: Se,
          value: j,
          placeholder: X || v,
          disabled: k
        }
      )
    ),
    he(x, M, j)
  ), M ? /* @__PURE__ */ N.createElement(
    "div",
    {
      className: `selectMultiple-removable-panel ${L ? "beautiful-background" : ""} `
    },
    /* @__PURE__ */ N.createElement(
      M_,
      {
        values: H,
        handleClick: Ce
      }
    ),
    /* @__PURE__ */ N.createElement("div", { className: "selectMultiple-list-container" }, ve ? /* @__PURE__ */ N.createElement(
      L_,
      {
        data: V,
        handleClick: me
      }
    ) : /* @__PURE__ */ N.createElement(
      __,
      {
        data: V,
        handleClick: me
      }
    ))
  ) : null);
}, M_ = ({ values: d, handleClick: v }) => d.length === 0 ? null : /* @__PURE__ */ N.createElement("div", { className: "selectMultiple-item-box" }, d.map((m) => /* @__PURE__ */ N.createElement(
  "button",
  {
    key: m,
    className: "selectMultiple-items-clickable-container",
    onClick: (C) => v(m, C)
  },
  /* @__PURE__ */ N.createElement("div", { className: "selectMultiple-items-wrapper" }, /* @__PURE__ */ N.createElement("span", { className: "selectMultiple-items-text" }, m), /* @__PURE__ */ N.createElement(
    Pf,
    {
      size: 18,
      strokeWidth: 1.7,
      className: "selectMultiple-items-delete-icon"
    }
  ))
))), L_ = ({ data: d, handleClick: v }) => {
  const m = d.length, C = (x) => {
    const w = d[x];
    return /* @__PURE__ */ N.createElement(
      zw,
      {
        key: w,
        item: w,
        handleClick: v
      }
    );
  };
  return /* @__PURE__ */ N.createElement(
    Mw,
    {
      className: "selectMultiple-item-list",
      style: {
        height: `${m < 13 ? m * 24 : 300}px`
      },
      totalCount: d.length,
      itemContent: C
    }
  );
}, __ = ({ data: d, handleClick: v }) => /* @__PURE__ */ N.createElement("ul", { className: "selectMultiple-item-list" }, d.map((m) => /* @__PURE__ */ N.createElement(
  zw,
  {
    key: m,
    item: m,
    handleClick: v
  }
))), zw = ({
  item: d,
  handleClick: v
}) => /* @__PURE__ */ N.createElement(
  "button",
  {
    onClick: (m) => v(m, d),
    className: "selectMultiple-clickable-items"
  },
  d
), O_ = (d, v) => {
  const m = (C) => {
    d.current && !d.current.contains(C.target) && v();
  };
  $n(() => (document.addEventListener("click", m), () => {
    document.removeEventListener("click", m);
  }));
};
const K_ = ({
  imagePath: d,
  fallBackPath: v,
  textTop: m = "Name",
  textBottom: C = "Rank",
  isBeautiful: x = !1,
  animation: w = !0,
  className: y = ""
}) => {
  const [k, L] = ar(!1), [b, A] = ar(d);
  $n(() => {
    A(d);
  }, [d]);
  const M = zn((U) => U.charAt(0).toUpperCase(), []);
  return /* @__PURE__ */ N.createElement(
    "div",
    {
      className: `userProfile-container ${x ? "beautiful-background" : ""} ${y} `
    },
    /* @__PURE__ */ N.createElement(
      "img",
      {
        src: b,
        alt: M(m),
        width: "38",
        height: "38",
        loading: "lazy",
        onClick: () => L(!k),
        onError: () => A(v),
        className: "userProfile-picture"
      }
    ),
    /* @__PURE__ */ N.createElement(
      "div",
      {
        className: `userProfile-text-wrapper ${k ? "userProfile-text-wrapper-deploy" : ""}`
      },
      k ? /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement("p", { className: "userProfile-text-top" }, m), /* @__PURE__ */ N.createElement(
        "p",
        {
          className: `userProfile-text-bot ${w ? "userProfile-text-bot-animation" : ""}`
        },
        C
      )) : null
    )
  );
};
export {
  F_ as Button,
  I_ as Card,
  B_ as CustomizableButton,
  V_ as DatePicker,
  j_ as FormButton,
  P_ as InputNumber,
  $_ as InputString,
  Y_ as MagicCard,
  W_ as SearchBar,
  Q_ as SelectMultiple,
  K_ as UserProfile
};
