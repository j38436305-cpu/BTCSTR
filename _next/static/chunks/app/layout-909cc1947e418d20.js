(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7177],
  {
    13673: () => {},
    52070: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => w });
      var a,
        s,
        n = r(95155),
        i = r(72030),
        o = r(86669),
        u = "#1A1B1F",
        l = {
          blue: { accentColor: "#3898FF", accentColorForeground: "#FFF" },
          green: { accentColor: "#4BD166", accentColorForeground: u },
          orange: { accentColor: "#FF983D", accentColorForeground: u },
          pink: { accentColor: "#FF7AB8", accentColorForeground: u },
          purple: { accentColor: "#7A70FF", accentColorForeground: "#FFF" },
          red: { accentColor: "#FF6257", accentColorForeground: "#FFF" },
        },
        c = l.blue,
        h = function () {
          let {
            accentColor: e = c.accentColor,
            accentColorForeground: t = c.accentColorForeground,
            ...r
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          return {
            ...(0, o.$)(r),
            colors: {
              accentColor: e,
              accentColorForeground: t,
              actionButtonBorder: "rgba(255, 255, 255, 0.04)",
              actionButtonBorderMobile: "rgba(255, 255, 255, 0.08)",
              actionButtonSecondaryBackground: "rgba(255, 255, 255, 0.08)",
              closeButton: "rgba(224, 232, 255, 0.6)",
              closeButtonBackground: "rgba(255, 255, 255, 0.08)",
              connectButtonBackground: u,
              connectButtonBackgroundError: "#FF494A",
              connectButtonInnerBackground:
                "linear-gradient(0deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.15))",
              connectButtonText: "#FFF",
              connectButtonTextError: "#FFF",
              connectionIndicator: "#30E000",
              downloadBottomCardBackground:
                "linear-gradient(126deg, rgba(0, 0, 0, 0) 9.49%, rgba(120, 120, 120, 0.2) 71.04%), #1A1B1F",
              downloadTopCardBackground:
                "linear-gradient(126deg, rgba(120, 120, 120, 0.2) 9.49%, rgba(0, 0, 0, 0) 71.04%), #1A1B1F",
              error: "#FF494A",
              generalBorder: "rgba(255, 255, 255, 0.08)",
              generalBorderDim: "rgba(255, 255, 255, 0.04)",
              menuItemBackground: "rgba(224, 232, 255, 0.1)",
              modalBackdrop: "rgba(0, 0, 0, 0.5)",
              modalBackground: "#1A1B1F",
              modalBorder: "rgba(255, 255, 255, 0.08)",
              modalText: "#FFF",
              modalTextDim: "rgba(224, 232, 255, 0.3)",
              modalTextSecondary: "rgba(255, 255, 255, 0.6)",
              profileAction: "rgba(224, 232, 255, 0.1)",
              profileActionHover: "rgba(224, 232, 255, 0.2)",
              profileForeground: "rgba(224, 232, 255, 0.05)",
              selectedOptionBorder: "rgba(224, 232, 255, 0.1)",
              standby: "#FFD641",
            },
            shadows: {
              connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
              profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
              selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
              selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.24)",
              walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)",
            },
          };
        };
      (h.accentColors = l), r(93393);
      var d = r(65465),
        f = r(99776);
      let p = (0, r(91053).x)({
        id: 0xaa36a7,
        name: "Sepolia",
        nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://sepolia.drpc.org"] } },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://sepolia.etherscan.io",
            apiUrl: "https://api-sepolia.etherscan.io/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 751532,
          },
          ensUniversalResolver: {
            address: "0xeeeeeeee14d718c2b47d9923deab1335e144eeee",
            blockCreated: 8928790,
          },
        },
        testnet: !0,
      });
      var g = r(33791),
        y = r(34049),
        m = r(31668),
        b = r(74268),
        C = r(38445),
        F = class extends C.Q {
          constructor(e = {}) {
            super(), (this.config = e), (this.#e = new Map());
          }
          #e;
          build(e, t, r) {
            let a = t.queryKey,
              s = t.queryHash ?? (0, y.F$)(a, t),
              n = this.get(s);
            return (
              n ||
                ((n = new m.X({
                  client: e,
                  queryKey: a,
                  queryHash: s,
                  options: e.defaultQueryOptions(t),
                  state: r,
                  defaultOptions: e.getQueryDefaults(a),
                })),
                this.add(n)),
              n
            );
          }
          add(e) {
            this.#e.has(e.queryHash) ||
              (this.#e.set(e.queryHash, e),
              this.notify({ type: "added", query: e }));
          }
          remove(e) {
            let t = this.#e.get(e.queryHash);
            t &&
              (e.destroy(),
              t === e && this.#e.delete(e.queryHash),
              this.notify({ type: "removed", query: e }));
          }
          clear() {
            b.jG.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return this.#e.get(e);
          }
          getAll() {
            return [...this.#e.values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, y.MK)(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0
              ? t.filter((t) => (0, y.MK)(e, t))
              : t;
          }
          notify(e) {
            b.jG.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            b.jG.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            b.jG.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        q = r(38559),
        v = class extends C.Q {
          constructor(e = {}) {
            super(),
              (this.config = e),
              (this.#t = new Set()),
              (this.#r = new Map()),
              (this.#a = 0);
          }
          #t;
          #r;
          #a;
          build(e, t, r) {
            let a = new q.s({
              client: e,
              mutationCache: this,
              mutationId: ++this.#a,
              options: e.defaultMutationOptions(t),
              state: r,
            });
            return this.add(a), a;
          }
          add(e) {
            this.#t.add(e);
            let t = O(e);
            if ("string" == typeof t) {
              let r = this.#r.get(t);
              r ? r.push(e) : this.#r.set(t, [e]);
            }
            this.notify({ type: "added", mutation: e });
          }
          remove(e) {
            if (this.#t.delete(e)) {
              let t = O(e);
              if ("string" == typeof t) {
                let r = this.#r.get(t);
                if (r)
                  if (r.length > 1) {
                    let t = r.indexOf(e);
                    -1 !== t && r.splice(t, 1);
                  } else r[0] === e && this.#r.delete(t);
              }
            }
            this.notify({ type: "removed", mutation: e });
          }
          canRun(e) {
            let t = O(e);
            if ("string" != typeof t) return !0;
            {
              let r = this.#r.get(t),
                a = r?.find((e) => "pending" === e.state.status);
              return !a || a === e;
            }
          }
          runNext(e) {
            let t = O(e);
            if ("string" != typeof t) return Promise.resolve();
            {
              let r = this.#r.get(t)?.find((t) => t !== e && t.state.isPaused);
              return r?.continue() ?? Promise.resolve();
            }
          }
          clear() {
            b.jG.batch(() => {
              this.#t.forEach((e) => {
                this.notify({ type: "removed", mutation: e });
              }),
                this.#t.clear(),
                this.#r.clear();
            });
          }
          getAll() {
            return Array.from(this.#t);
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, y.nJ)(t, e));
          }
          findAll(e = {}) {
            return this.getAll().filter((t) => (0, y.nJ)(e, t));
          }
          notify(e) {
            b.jG.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            let e = this.getAll().filter((e) => e.state.isPaused);
            return b.jG.batch(() =>
              Promise.all(e.map((e) => e.continue().catch(y.lQ)))
            );
          }
        };
      function O(e) {
        return e.options.scope?.id;
      }
      var Q = r(56195),
        _ = r(63122);
      function x(e) {
        return {
          onFetch: (t, r) => {
            let a = t.options,
              s = t.fetchOptions?.meta?.fetchMore?.direction,
              n = t.state.data?.pages || [],
              i = t.state.data?.pageParams || [],
              o = { pages: [], pageParams: [] },
              u = 0,
              l = async () => {
                let r = !1,
                  l = (0, y.ZM)(t.options, t.fetchOptions),
                  c = async (e, a, s) => {
                    if (r) return Promise.reject();
                    if (null == a && e.pages.length) return Promise.resolve(e);
                    let n = (() => {
                        let e = {
                          client: t.client,
                          queryKey: t.queryKey,
                          pageParam: a,
                          direction: s ? "backward" : "forward",
                          meta: t.options.meta,
                        };
                        return (
                          Object.defineProperty(e, "signal", {
                            enumerable: !0,
                            get: () => (
                              t.signal.aborted
                                ? (r = !0)
                                : t.signal.addEventListener("abort", () => {
                                    r = !0;
                                  }),
                              t.signal
                            ),
                          }),
                          e
                        );
                      })(),
                      i = await l(n),
                      { maxPages: o } = t.options,
                      u = s ? y.ZZ : y.y9;
                    return {
                      pages: u(e.pages, i, o),
                      pageParams: u(e.pageParams, a, o),
                    };
                  };
                if (s && n.length) {
                  let e = "backward" === s,
                    t = { pages: n, pageParams: i },
                    r = (
                      e
                        ? function (e, { pages: t, pageParams: r }) {
                            return t.length > 0
                              ? e.getPreviousPageParam?.(t[0], t, r[0], r)
                              : void 0;
                          }
                        : P
                    )(a, t);
                  o = await c(t, r, e);
                } else {
                  let t = e ?? n.length;
                  do {
                    let e = 0 === u ? i[0] ?? a.initialPageParam : P(a, o);
                    if (u > 0 && null == e) break;
                    (o = await c(o, e)), u++;
                  } while (u < t);
                }
                return o;
              };
            t.options.persister
              ? (t.fetchFn = () =>
                  t.options.persister?.(
                    l,
                    {
                      client: t.client,
                      queryKey: t.queryKey,
                      meta: t.options.meta,
                      signal: t.signal,
                    },
                    r
                  ))
              : (t.fetchFn = l);
          },
        };
      }
      function P(e, { pages: t, pageParams: r }) {
        let a = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[a], t, r[a], r) : void 0;
      }
      var A = class {
          #s;
          #n;
          #i;
          #o;
          #u;
          #l;
          #c;
          #h;
          constructor(e = {}) {
            (this.#s = e.queryCache || new F()),
              (this.#n = e.mutationCache || new v()),
              (this.#i = e.defaultOptions || {}),
              (this.#o = new Map()),
              (this.#u = new Map()),
              (this.#l = 0);
          }
          mount() {
            this.#l++,
              1 === this.#l &&
                ((this.#c = Q.m.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#s.onFocus());
                })),
                (this.#h = _.t.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#s.onOnline());
                })));
          }
          unmount() {
            this.#l--,
              0 === this.#l &&
                (this.#c?.(),
                (this.#c = void 0),
                this.#h?.(),
                (this.#h = void 0));
          }
          isFetching(e) {
            return this.#s.findAll({ ...e, fetchStatus: "fetching" }).length;
          }
          isMutating(e) {
            return this.#n.findAll({ ...e, status: "pending" }).length;
          }
          getQueryData(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#s.get(t.queryHash)?.state.data;
          }
          ensureQueryData(e) {
            let t = this.defaultQueryOptions(e),
              r = this.#s.build(this, t),
              a = r.state.data;
            return void 0 === a
              ? this.fetchQuery(e)
              : (e.revalidateIfStale &&
                  r.isStaleByTime((0, y.d2)(t.staleTime, r)) &&
                  this.prefetchQuery(t),
                Promise.resolve(a));
          }
          getQueriesData(e) {
            return this.#s
              .findAll(e)
              .map(({ queryKey: e, state: t }) => [e, t.data]);
          }
          setQueryData(e, t, r) {
            let a = this.defaultQueryOptions({ queryKey: e }),
              s = this.#s.get(a.queryHash),
              n = s?.state.data,
              i = (0, y.Zw)(t, n);
            if (void 0 !== i)
              return this.#s.build(this, a).setData(i, { ...r, manual: !0 });
          }
          setQueriesData(e, t, r) {
            return b.jG.batch(() =>
              this.#s
                .findAll(e)
                .map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)])
            );
          }
          getQueryState(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#s.get(t.queryHash)?.state;
          }
          removeQueries(e) {
            let t = this.#s;
            b.jG.batch(() => {
              t.findAll(e).forEach((e) => {
                t.remove(e);
              });
            });
          }
          resetQueries(e, t) {
            let r = this.#s;
            return b.jG.batch(
              () => (
                r.findAll(e).forEach((e) => {
                  e.reset();
                }),
                this.refetchQueries({ type: "active", ...e }, t)
              )
            );
          }
          cancelQueries(e, t = {}) {
            let r = { revert: !0, ...t };
            return Promise.all(
              b.jG.batch(() => this.#s.findAll(e).map((e) => e.cancel(r)))
            )
              .then(y.lQ)
              .catch(y.lQ);
          }
          invalidateQueries(e, t = {}) {
            return b.jG.batch(() =>
              (this.#s.findAll(e).forEach((e) => {
                e.invalidate();
              }),
              e?.refetchType === "none")
                ? Promise.resolve()
                : this.refetchQueries(
                    { ...e, type: e?.refetchType ?? e?.type ?? "active" },
                    t
                  )
            );
          }
          refetchQueries(e, t = {}) {
            let r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
            return Promise.all(
              b.jG.batch(() =>
                this.#s
                  .findAll(e)
                  .filter((e) => !e.isDisabled() && !e.isStatic())
                  .map((e) => {
                    let t = e.fetch(void 0, r);
                    return (
                      r.throwOnError || (t = t.catch(y.lQ)),
                      "paused" === e.state.fetchStatus ? Promise.resolve() : t
                    );
                  })
              )
            ).then(y.lQ);
          }
          fetchQuery(e) {
            let t = this.defaultQueryOptions(e);
            void 0 === t.retry && (t.retry = !1);
            let r = this.#s.build(this, t);
            return r.isStaleByTime((0, y.d2)(t.staleTime, r))
              ? r.fetch(t)
              : Promise.resolve(r.state.data);
          }
          prefetchQuery(e) {
            return this.fetchQuery(e).then(y.lQ).catch(y.lQ);
          }
          fetchInfiniteQuery(e) {
            return (e.behavior = x(e.pages)), this.fetchQuery(e);
          }
          prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(y.lQ).catch(y.lQ);
          }
          ensureInfiniteQueryData(e) {
            return (e.behavior = x(e.pages)), this.ensureQueryData(e);
          }
          resumePausedMutations() {
            return _.t.isOnline()
              ? this.#n.resumePausedMutations()
              : Promise.resolve();
          }
          getQueryCache() {
            return this.#s;
          }
          getMutationCache() {
            return this.#n;
          }
          getDefaultOptions() {
            return this.#i;
          }
          setDefaultOptions(e) {
            this.#i = e;
          }
          setQueryDefaults(e, t) {
            this.#o.set((0, y.EN)(e), { queryKey: e, defaultOptions: t });
          }
          getQueryDefaults(e) {
            let t = [...this.#o.values()],
              r = {};
            return (
              t.forEach((t) => {
                (0, y.Cp)(e, t.queryKey) && Object.assign(r, t.defaultOptions);
              }),
              r
            );
          }
          setMutationDefaults(e, t) {
            this.#u.set((0, y.EN)(e), { mutationKey: e, defaultOptions: t });
          }
          getMutationDefaults(e) {
            let t = [...this.#u.values()],
              r = {};
            return (
              t.forEach((t) => {
                (0, y.Cp)(e, t.mutationKey) &&
                  Object.assign(r, t.defaultOptions);
              }),
              r
            );
          }
          defaultQueryOptions(e) {
            if (e._defaulted) return e;
            let t = {
              ...this.#i.queries,
              ...this.getQueryDefaults(e.queryKey),
              ...e,
              _defaulted: !0,
            };
            return (
              t.queryHash || (t.queryHash = (0, y.F$)(t.queryKey, t)),
              void 0 === t.refetchOnReconnect &&
                (t.refetchOnReconnect = "always" !== t.networkMode),
              void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
              !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
              t.queryFn === y.hT && (t.enabled = !1),
              t
            );
          }
          defaultMutationOptions(e) {
            return e?._defaulted
              ? e
              : {
                  ...this.#i.mutations,
                  ...(e?.mutationKey &&
                    this.getMutationDefaults(e.mutationKey)),
                  ...e,
                  _defaulted: !0,
                };
          }
          clear() {
            this.#s.clear(), this.#n.clear();
          }
        },
        B = r(95704);
      let E =
        null != (a = globalThis.__WAGMI_CONFIG__)
          ? a
          : (0, i.Y8)({
              appName: "BTC Strategy",
              projectId:
                B.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ||
                "9a5f69e42a0322a895df273755042037",
              chains: [p, g.r],
              ssr: !1,
            });
      globalThis.__WAGMI_CONFIG__ || (globalThis.__WAGMI_CONFIG__ = E);
      let D = null != (s = globalThis.__QUERY_CLIENT__) ? s : new A();
      function w(e) {
        let { children: t } = e;
        return (0, n.jsx)(d.x, {
          config: E,
          children: (0, n.jsx)(f.Ht, {
            client: D,
            children: (0, n.jsx)(i.qL, { theme: h(), children: t }),
          }),
        });
      }
      globalThis.__QUERY_CLIENT__ || (globalThis.__QUERY_CLIENT__ = D);
    },
    58635: (e, t, r) => {
      Promise.resolve().then(r.t.bind(r, 13673, 23)),
        Promise.resolve().then(r.bind(r, 52070));
    },
    93393: () => {},
  },
  (e) => {
    e.O(0, [3938, 2978, 8451, 6955, 8441, 1255, 7358], () => e((e.s = 58635))),
      (_N_E = e.O());
  },
]);
