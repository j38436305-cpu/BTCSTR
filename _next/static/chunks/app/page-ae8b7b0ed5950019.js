(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8974],
  {
    16522: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 86146));
    },
    86146: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => v });
      var i = s(95155),
        l = s(15239),
        a = s(12115),
        n = s(70898),
        r = s(52619),
        d = s.n(r);
      function c() {
        return (0, i.jsxs)("footer", {
          className:
            "mt-10 bg-white p-6 text-sm text-black/80",
          style: {border:"5px solid black", borderRadius:"30px",boxShadow: "6px 6px 1px 1px #634f26"},
          children: [
            (0, i.jsxs)("div", {
              className:
                "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
              children: [
                (0, i.jsxs)("div", {
                  className: "space-y-1",
                  children: [
                    (0, i.jsx)("div", {
                      className: "text-base font-semibold",
                      children: "BTC Strategy",
                    }),
                    (0, i.jsx)("div", {
                      className: "text-black/60",
                      children: "The perpetual memecoin machine",
                    }),
                  ],
                }),
                (0, i.jsxs)("nav", {
                  className: "flex flex-wrap items-center gap-3",
                  children: [
                    (0, i.jsx)(d(), {
                      href: "https://x.com/bitstrX",
                      className: "hover:underline underline-offset-4",
                      children: "X",
                    }),
                    (0, i.jsx)(d(), {
                      href: "https://t.me/bitstrgroup",
                      className: "hover:underline underline-offset-4",
                      children: "Telegram",
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className:
                "mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-black/60",
              children: (0, i.jsxs)("div", {
                children: ["\xa9 ", new Date().getFullYear(), " BTC Strategy"],
              }),
            }),
          ],
        });
      }
      var o = s(72030),
        h = s(20063),
        x = s(16836),
        m = s(8678),
        u = s(99794);
      let p = ["function stats() view returns (uint256[] memory)"];
      async function f() {
        try {
          let e = "https://1rpc.io/eth",
            t = "0xcomingsoon";
          if (!e || !t) return null;
          let s = new x.FR(e),
            i = new m.NZ(t, p, s),
            l = await i.stats(),
            a = (0, u.ck)(l && void 0 !== l[0] ? l[0] : 0),
            n = (0, u.ck)(l && void 0 !== l[1] ? l[1] : 0),
            r = (0, u.ck)(l && void 0 !== l[2] ? l[2] : 0);
          return { burned: a, treasuryEth: n, tokenInPepe: r };
        } catch (e) {
          return console.error("fetchStats error", e), null;
        }
      }
      var g = s(3063),
        b = s(34398),
        w = s(55234);
      let j = [
        {
          inputs: [],
          name: "stats",
          outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "nextOrderId",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "orders",
          outputs: [
            { internalType: "uint256", name: "ethSpent", type: "uint256" },
            { internalType: "uint256", name: "pepeBought", type: "uint256" },
            { internalType: "uint256", name: "timestamp", type: "uint256" },
            { internalType: "bool", name: "sold", type: "bool" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "buyPepe",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "orderId", type: "uint256" },
          ],
          name: "sellPepe",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];
      function N(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
          s = "number" == typeof e ? e : parseFloat(e || "0"),
          i = Math.abs(s),
          l = s < 0 ? "-" : "";
        return i >= 1e12
          ? "".concat(l).concat((i / 1e12).toFixed(t), "T")
          : i >= 1e9
          ? "".concat(l).concat((i / 1e9).toFixed(t), "B")
          : i >= 1e6
          ? "".concat(l).concat((i / 1e6).toFixed(t), "M")
          : i >= 1e3
          ? "".concat(l).concat((i / 1e3).toFixed(t), "K")
          : "".concat(s.toFixed(t));
      }
      function v() {
        var e;
        let [t, s] = (0, a.useState)(null),
          [r, d] = (0, a.useState)(!1);
        (0, a.useEffect)(() => {
          f()
            .then(s)
            .catch(() => s(null)),
            d(!0);
        }, []);
        let x = parseFloat(
            null != (e = null == t ? void 0 : t.treasuryEth) ? e : "0"
          ),
          m = Math.max(0, 5.01 - x),
          u = Math.max(0, Math.min(100, (x / 5.01) * 100)),
          [p, v] = (0, a.useState)(null),
          E = "0xcomingsoon",
          { isConnected: F } = (0, g.F)(),
          { data: P, writeContract: S, isPending: k } = (0, b.x)(),
          { isLoading: T, isSuccess: C } = (0, w.g)({ hash: P }),
          M = (0, h.useRouter)();
        (0, a.useEffect)(() => {
          if (C) {
            v({ text: "Success", type: "success" });
            let e = setTimeout(() => {
              M.refresh();
            }, 1200);
            return () => clearTimeout(e);
          }
        }, [C, M]);
        let I = !r || !F || k || T,
          [_, B] = (0, a.useState)([]),
          [A, D] = (0, a.useState)(!1),
          [H, O] = (0, a.useState)("holding");
        return (
          (0, a.useEffect)(() => {
            D(!0);
            let e = "sold" === H ? "1" : "0";
            fetch("https://visit-track-sigma.vercel.app/api/api/orders?sold=".concat(e))
              .then((e) => e.json())
              .then((e) => {
                Array.isArray(null == e ? void 0 : e.orders)
                  ? B(e.orders)
                  : B([]);
              })
              .catch(() => B([]))
              .finally(() => D(!1));
          }, [H]),
          (0, i.jsx)("div", {
            className: "min-h-screen text-foreground",
            style: {background: "linear-gradient(180deg,#f0dbae 26.95%,#ead3a04d),url(/bg.png) bottom/cover no-repeat"},
            children: (0, i.jsxs)("main", {
              className: "mx-auto max-w-5xl p-6 sm:p-10 space-y-10",
              children: [
                p &&
                  (0, i.jsx)("div", {
                    className: "fixed top-4 right-4 z-50",
                    "aria-live": "polite",
                    children: (0, i.jsx)("div", {
                      className:
                        "rounded-xl shadow-lg ring-1 ring-white/40 px-4 py-3 bg-white text-[#15803d] border-l-4 ".concat(
                          "error" === p.type
                            ? "border-red-500"
                            : "border-emerald-500"
                        ),
                      children: (0, i.jsx)("div", {
                        className: "text-sm font-medium",
                        children: p.text,
                      }),
                    }),
                  }),
                (0, i.jsxs)("header", {
                  className: "flex items-center justify-between",
                  children: [
                    (0, i.jsx)("div", {
                      className: "flex items-center gap-3",
                      children: (0, i.jsx)(l.default, {
                        src: "/logo2.png",
                        alt: "DogeStrategy logo",
                        width: 300,
                        height: 108,
                        className: "rounded-md",
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, i.jsx)("a", {
                          className:
                            "px-4 py-2 rounded-md hover:bg-accent/10 text-sm text-black",
                          style: {border:"2px solid rgba(0,0,0,.4)"},
                          href: "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xcomingsoon",
                          children: "Trade BTCSTR",
                        }),
                        (0, i.jsx)(o.pK, {}),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("section", {
                  className:
                    "relative overflow-hidden border bg-white p-6 sm:p-8",
                  style: {border:"5px solid black", borderRadius:"30px",boxShadow: "6px 6px 1px 1px #634f26"},
                  children: [
                    (0, i.jsx)("a", {
                      href: "https://etherscan.io/address/".concat(
                        "0xcomingsoon"
                      ),
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "absolute -right-1 -top-1 inline-flex items-center gap-2 rounded-md bg-white/90 text-black hover:bg-white px-3 py-1.5 text-md font-xl shadow-sm",
                      children: "View treasury",
                    style: {border:"2px solid black", borderRadius:"0px 0px 0px 20px",boxShadow: "2px 2px 1px 1px #634f26"},
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/20 blur-2xl",
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl",
                    }),
                    (0, i.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, i.jsxs)("div", {
                          className:
                            "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-white/80",
                          style: {background: '#ec3e5a',border: "3px solid black"},
                          children: [
                            (0, i.jsxs)("span", {
                              className: "relative flex h-2 w-2",
                              children: [
                                (0, i.jsx)("span", {
                                  className:
                                    "absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75",
                                }),
                                (0, i.jsx)("span", {
                                  className:
                                    "relative inline-flex h-2 w-2 rounded-full",
                                  style:{background:'#fdb215'}
                                }),
                              ],
                            }),
                            "Live holdings",
                          ],
                        }),
                        (0, i.jsx)("h2", {
                          className:
                            "mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-black",
                          children: "BTC Strategy is currently holding",
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2",
                          children: [
                            (0, i.jsx)("div", {
                              className:
                                "p-5 transition",
                              style: {background: '#fdb215',border: "3px solid black",borderRadius:"2rem"},
                              children: (0, i.jsxs)("div", {
                                className: "flex items-center gap-4",
                                children: [
                                  (0, i.jsx)("div", {
                                    className:
                                      "flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-xl text-black",
                                    children: (0, i.jsx)(n.liQ, {}),
                                  }),
                                  (0, i.jsxs)("div", {
                                    children: [
                                      (0, i.jsx)("div", {
                                        className:
                                          "text-xs uppercase tracking-wide text-black/70",
                                        children: "ETH",
                                      }),
                                      (0, i.jsx)("div", {
                                        className:
                                          "mt-1 text-3xl font-semibold leading-none text-black",
                                        children: "4.061"
                                        // children: t
                                        //   ? parseFloat(
                                        //       t.treasuryEth || "0"
                                        //     ).toFixed(3)
                                        //   : (0, i.jsx)("span", {
                                        //       className:
                                        //         "inline-block h-7 w-28 rounded bg-white/20 animate-pulse",
                                        //     }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className:
                                "p-5 transition",
                                style: {background: '#fdb215',border: "3px solid black",borderRadius:"2rem"},
                              children: (0, i.jsxs)("div", {
                                className: "flex items-center gap-4",
                                children: [
                                  (0, i.jsx)("div", {
                                    className:
                                      "flex h-10 w-10 items-center justify-center rounded-full bg-white/15",
                                    children: (0, i.jsx)(l.default, {
                                      src: "/doge.png",
                                      alt: "PEPE",
                                      className: "rounded-full",
                                      width: 24,
                                      height: 24,
                                    }),
                                  }),
                                  (0, i.jsxs)("div", {
                                    children: [
                                      (0, i.jsx)("div", {
                                        className:
                                          "text-xs uppercase tracking-wide text-black/70",
                                        children: "BITSTR",
                                      }),
                                      (0, i.jsx)("div", {
                                        className:
                                          "mt-1 text-3xl font-semibold leading-none text-black",
                                        children: "6.77B"
                                        // children: t
                                        //   ? N(parseFloat(t.tokenInPepe || "0"))
                                        //   : (0, i.jsx)("span", {
                                        //       className:
                                        //         "inline-block h-7 w-28 rounded bg-white/20 animate-pulse",
                                        //     }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("section", {
                  className:
                    "grid grid-cols-1 lg:grid-cols-2 gap-6 items-start",
                  children: (0, i.jsxs)("div", {
                    className:
                      "relative p-5 lg:col-span-2 bg-white",
                    style: {border:"5px solid black", borderRadius:"30px",boxShadow: "6px 6px 1px 1px #634f26"},
                    children: [
                      (0, i.jsxs)("div", {
                        className: "flex items-center justify-between gap-4",
                        children: [
                          (0, i.jsx)("h2", {
                            className: "text-lg font-medium text-black",
                            children: "Progress to Next Purchase",
                          }),
                          (0, i.jsxs)("div", {
                            className:
                              "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm",
                            style: {background: '#ec3e5a',border: "3px solid black"},
                            children: [
                              (0, i.jsx)("span", {
                                className: "text-white/80",
                                children: "Current rewards",
                              }),
                              (0, i.jsx)("span", {
                                className: "font-semibold text-white",
                                children: "0.01 ETH",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "mt-4 flex items-center gap-3",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "relative h-2 flex-1 rounded-full bg-white/20 overflow-hidden",
                            style: {background:'rgba(236, 62, 90,0.4)'},
                            children: (0, i.jsx)("div", {
                              className:
                                "absolute left-0 top-0 h-full",
                              style: { width: "".concat(81, "%"), background: 'rgb(236, 62, 90)'},
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className: "text-sm text-black/85",
                            children: "81.0%",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("p", {
                        className: "mt-3 text-sm text-black/70 mt-2",
                        children: [
                          "When the machine acquires the missing ",
                          (0, i.jsxs)("span", {
                            className: "text-lg p-1 rounded-md",
                            style: {background:"#fdb215"},
                            children: [m.toFixed(3), " ETH"],
                          }),
                          ", the first entity to trigger the functions below will process the mechanism forward and earn a reward.",
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "mt-8",
                        children: (0, i.jsx)("button", {
                          onClick: () => {
                            if (x < 5.01) {
                              v({
                                text: "Insufficient treasury balance at the moment.",
                                type: "error",
                              }),
                                setTimeout(() => v(null), 3e3);
                              return;
                            }
                            E &&
                              S({
                                address: E,
                                abi: j,
                                functionName: "buyPepe",
                              });
                          },
                          disabled: I,
                          style: {background: '#fdb215',border: "3px solid black",borderRadius:"2rem",opacity:I?'.3':'1', color:"black"},
                          className:
                            "w-full inline-flex items-center justify-center gap-3 px-6 py-3 text-lg font-bold shadow-lg transition ".concat(
                              I
                                ? "cursor-not-allowed"
                                : "cursor-pointer"
                            ),
                          children: r
                            ? T
                              ? "Confirming..."
                              : k
                              ? "Waiting Wallet..."
                              : C
                              ? "Success"
                              : "Buy"
                            : "Buy",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsxs)("section", {
                  className: "bg-white p-5",
                  style: {border:"5px solid black", borderRadius:"30px",boxShadow: "6px 6px 1px 1px #634f26"},
                  children: [
                    (0, i.jsxs)("div", {
                      className: "flex items-center justify-between gap-3",
                      children: [
                        (0, i.jsx)("h3", {
                          className: "text-lg font-medium text-black",
                          children: "Orders",
                        }),
                        (0, i.jsxs)("div", {
                          role: "tablist",
                          className: "flex items-center gap-2",
                          children: [
                            (0, i.jsx)("button", {
                              role: "tab",
                              "aria-selected": "holding" === H,
                              onClick: () => O("holding"),
                              style: {background: "holding" === H?'#ec3e5a':'white',border: "holding" === H?"3px solid black":"unset"},
                              className: "".concat(
                                "holding" === H
                                  ? "text-white"
                                  : "text-black/70",
                                " px-3 py-1 rounded-full text-xs font-medium transition"
                              ),
                              children: "Currently Holding",
                            }),
                            (0, i.jsx)("button", {
                              role: "tab",
                              "aria-selected": "sold" === H,
                              onClick: () => O("sold"),
                              style: {background: "sold" === H?'#ec3e5a':'white',border: "sold" === H?"3px solid black":"unset"},
                              className: "".concat(
                                "sold" === H
                                  ? "text-white"
                                  : "text-black/70",
                                " px-3 py-1 rounded-full text-xs font-medium transition"
                              ),
                              children: "Sold BTCstr",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                      children: [
                        A &&
                          [0, 1, 2, 3, 4, 5].map((e) =>
                            (0, i.jsxs)(
                              "div",
                              {
                                className:
                                  "rounded-2xl border border-white/20 bg-white/10 p-5",
                                children: [
                                  (0, i.jsx)("div", {
                                    className:
                                      "h-4 w-24 bg-white/15 rounded animate-pulse",
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: "mt-4 space-y-2",
                                    children: [
                                      (0, i.jsx)("div", {
                                        className:
                                          "h-3 w-full bg-white/10 rounded animate-pulse",
                                      }),
                                      (0, i.jsx)("div", {
                                        className:
                                          "h-3 w-3/4 bg-white/10 rounded animate-pulse",
                                      }),
                                      (0, i.jsx)("div", {
                                        className:
                                          "h-3 w-2/3 bg-white/10 rounded animate-pulse",
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e
                            )
                          ),
                        !A &&
                          0 === _.length &&
                          (0, i.jsx)("div", {
                            className:
                              "col-span-full text-center text-black/70 text-sm py-8",
                            children:
                              "holding" === H
                                ? "No BTCSTR purchased yet."
                                : "No BTCSTR sold yet.",
                          }),
                        !A &&
                          _.map((e) => {
                            var t, s, a, r, d;
                            let c = parseFloat(String(e.ethSpent)),
                              o = parseFloat(((120 * c) / 100).toFixed(3)),
                              h = parseFloat(String(e.pepeBought)),
                              x = parseFloat(
                                String(null != (t = e.estValue) ? t : 0)
                              ),
                              m =
                                1 === Number(e.sold)
                                  ? 100
                                  : Math.max(0, Math.min(100, (x / o) * 100)),
                              u = m >= 100;
                            return (0, i.jsxs)(
                              "article",
                              {
                                className:
                                  "rounded-2xl border border-white/20 bg-white/10 p-5 hover:bg-white/15 hover:border-white/30 transition shadow-sm hover:shadow-md",
                                children: [
                                  (0, i.jsxs)("div", {
                                    className:
                                      "flex items-center justify-between",
                                    children: [
                                      (0, i.jsxs)("div", {
                                        className: "font-mono text-base",
                                        children: [
                                          "#",
                                          null != (s = e.orderId) ? s : e.id,
                                        ],
                                      }),
                                      (0, i.jsx)("span", {
                                        className:
                                          "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ".concat(
                                            1 === Number(e.sold)
                                              ? "bg-white/10 text-black/80"
                                              : "bg-emerald-400/20 text-black ring-1 ring-emerald-300/30"
                                          ),
                                        children:
                                          1 === Number(e.sold)
                                            ? "Sold"
                                            : "Open",
                                      }),
                                    ],
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: "mt-4 space-y-2",
                                    children: [
                                      (0, i.jsxs)("div", {
                                        className:
                                          "flex items-center justify-between",
                                        children: [
                                          (0, i.jsx)("span", {
                                            className:
                                              "text-[11px] uppercase tracking-wide text-black/60",
                                            children: "ETH Spent",
                                          }),
                                          (0, i.jsxs)("span", {
                                            className:
                                              "inline-flex items-center gap-1 text-base font-semibold",
                                            children: [
                                              (0, i.jsx)(n.liQ, {}),
                                              " ",
                                              c.toFixed(3),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "flex items-center justify-between",
                                        children: [
                                          (0, i.jsx)("span", {
                                            className:
                                              "text-[11px] uppercase tracking-wide text-black/60",
                                            children: "PEPE Bought",
                                          }),
                                          (0, i.jsxs)("span", {
                                            className:
                                              "inline-flex items-center gap-2 text-base font-semibold",
                                            children: [
                                              (0, i.jsx)(l.default, {
                                                src: "/doge.png",
                                                alt: "PEPE",
                                                width: 16,
                                                height: 16,
                                                className: "rounded-full",
                                              }),
                                              N(h),
                                            ],
                                          }),
                                        ],
                                      }),
                                      1 !== Number(e.sold) &&
                                        (0, i.jsxs)(i.Fragment, {
                                          children: [
                                            (0, i.jsxs)("div", {
                                              className:
                                                "flex items-center justify-between",
                                              children: [
                                                (0, i.jsx)("span", {
                                                  className:
                                                    "text-[11px] uppercase tracking-wide text-black/60",
                                                  children: "Est. Value (Now)",
                                                }),
                                                (0, i.jsxs)("span", {
                                                  className:
                                                    "inline-flex items-center gap-1 text-base font-semibold",
                                                  children: [
                                                    (0, i.jsx)(n.liQ, {}),
                                                    " ",
                                                    x.toFixed(3),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, i.jsxs)("div", {
                                              className:
                                                "flex items-center justify-between",
                                              children: [
                                                (0, i.jsx)("span", {
                                                  className:
                                                    "text-[11px] uppercase tracking-wide text-black/60",
                                                  children: "Target to sell",
                                                }),
                                                (0, i.jsxs)("span", {
                                                  className:
                                                    "inline-flex items-center gap-1 text-base font-semibold",
                                                  children: [
                                                    (0, i.jsx)(n.liQ, {}),
                                                    " ",
                                                    o.toFixed(3),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "mt-2 flex items-center gap-3",
                                        children: [
                                          (0, i.jsx)("div", {
                                            className:
                                              "relative h-1.5 flex-1 rounded-full bg-white/15 overflow-hidden",
                                            children: (0, i.jsx)("div", {
                                              className:
                                                "absolute left-0 top-0 h-full bg-white",
                                              style: {
                                                width: "".concat(m, "%"),
                                              },
                                            }),
                                          }),
                                          (0, i.jsxs)("div", {
                                            className: "text-xs text-black/80",
                                            children: [m.toFixed(1), "%"],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  "holding" === H &&
                                    1 !== Number(e.sold) &&
                                    (0, i.jsx)("div", {
                                      className: "mt-3",
                                      children: (0, i.jsx)(y, {
                                        orderId:
                                          null != (a = e.orderId) ? a : e.id,
                                        enabled: u,
                                      }),
                                    }),
                                  "sold" === H &&
                                    (0, i.jsxs)("div", {
                                      className:
                                        "mt-2 text-right text-emerald-300 text-sm font-semibold",
                                      children: [
                                        "Profit: ",
                                        (0, i.jsx)(n.liQ, {
                                          className: "inline",
                                        }),
                                        " ",
                                        (null != (r = e.profit)
                                          ? r
                                          : 0
                                        ).toFixed(3),
                                      ],
                                    }),
                                ],
                              },
                              null != (d = e.orderId) ? d : e.id
                            );
                          }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("section", {
                  className:
                    "rounded-xl bg-white p-0 overflow-hidden",
                  style: {border:"5px solid black", borderRadius:"30px",boxShadow: "6px 6px 1px 1px #634f26"},
                  children: [
                    (0, i.jsxs)("div", {
                      className:
                        "px-5 pt-5 pb-3 flex items-center justify-between",
                      children: [
                        (0, i.jsx)("h3", {
                          className: "text-lg font-medium text-black",
                          children: "BTCSTR Chart",
                        }),
                        (0, i.jsx)("span", {
                          className: "text-xs text-black/60",
                          children: "Powered by Dexscreener",
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "h-[540px] w-full",
                      children: (0, i.jsx)("iframe", {
                        height: "100%",
                        width: "100%",
                        id: "geckoterminal-embed",
                        title: "GeckoTerminal Embed",
                        src: "https://dexscreener.com/ethereum/0xcomingsoon",
                        frameBorder: 0,
                        allow: "clipboard-write",
                        allowFullScreen: !0,
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)(c, {}),
              ],
            }),
          })
        );
      }
      function y(e) {
        let { orderId: t, enabled: s } = e,
          { isConnected: l } = (0, g.F)(),
          { data: a, writeContract: n, isPending: r } = (0, b.x)(),
          { isLoading: d, isSuccess: c } = (0, w.g)({ hash: a }),
          o = !s || !l || r || d;
        return (0, i.jsx)("button", {
          onClick: () => {
            s &&
              l &&
              n({
                address: "0xcomingsoon",
                abi: j,
                functionName: "sellPepe",
                args: [BigInt(t)],
              });
          },
          disabled: o,
          className:
            "w-full inline-flex items-center justify-center px-3 py-2 rounded-md text-sm font-semibold shadow ".concat(
              o
                ? "bg-white/70 text-[#15803d]/60 cursor-not-allowed"
                : "bg-white text-[#15803d] hover:bg-white/90 cursor-pointer"
            ),
          children: d
            ? "Confirming..."
            : r
            ? "Waiting Wallet..."
            : c
            ? "Sold"
            : "Sell",
        });
      }
    },
  },
  (e) => {
    e.O(0, [8451, 6711, 6955, 9717, 8441, 1255, 7358], () => e((e.s = 16522))),
      (_N_E = e.O());
  },
]);
