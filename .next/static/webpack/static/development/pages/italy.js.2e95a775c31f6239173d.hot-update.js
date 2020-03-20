webpackHotUpdate("static/development/pages/italy.js",{

/***/ "./pages/italy.js":
/*!************************!*\
  !*** ./pages/italy.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MainLayout */ "./components/MainLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");

var _jsxFileName = "/Users/yohandalpatadu/Projects/github/covid19-dashboard-nextjs/pages/italy.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Index = function Index(props) {
  return __jsx(_components_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "COVID-19 Situation Report in Italy"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "As at", " ", props.nationalLatest.map(function (nationalLatest, i) {
    return __jsx("span", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, nationalLatest.data, " UTC");
  })), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("h2", {
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Total"), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.nationalLatest.slice(0, 1).map(function (nationalLatest, i) {
    return __jsx("div", {
      key: i,
      className: "col-sm-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("div", {
      className: "card mb-3 border-secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("div", {
      className: "card-body text-secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("h3", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: nationalLatest.ricoverati_con_sintomi,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    })), __jsx("p", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Hospitalised with Symptoms"))));
  }), props.nationalLatest.slice(0, 1).map(function (nationalLatest, i) {
    return __jsx("div", {
      key: i,
      className: "col-sm-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("div", {
      className: "card mb-3 border-secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("div", {
      className: "card-body text-secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("h3", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: nationalLatest.terapia_intensiva,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })), __jsx("p", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Intensive Therapy"))));
  }), props.nationalLatest.slice(0, 1).map(function (nationalLatest, i) {
    return __jsx("div", {
      key: i,
      className: "col-sm-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("div", {
      className: "card mb-3 border-secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("div", {
      className: "card-body text-secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("h3", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: nationalLatest.totale_ospedalizzati,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    })), __jsx("p", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Total Hospitalised"))));
  }), props.nationalLatest.slice(0, 1).map(function (nationalLatest, i) {
    return __jsx("div", {
      key: i,
      className: "col-sm-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("div", {
      className: "card mb-3 border-secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("div", {
      className: "card-body text-secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("h3", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: nationalLatest.isolamento_domiciliare,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })), __jsx("p", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Home Insulation"))));
  }), props.nationalLatest.slice(0, 1).map(function (nationalLatest, i) {
    return __jsx("div", {
      key: i,
      className: "col-sm-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx("div", {
      className: "card mb-3 border-secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("div", {
      className: "card-body text-secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx("h3", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: nationalLatest.totale_attualmente_positivi,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    })), __jsx("p", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "Current Cases"))));
  }), props.nationalLatest.slice(0, 1).map(function (nationalLatest, i) {
    return __jsx("div", {
      key: i,
      className: "col-sm-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx("div", {
      className: "card mb-3 border-secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("div", {
      className: "card-body text-secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx("h3", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: nationalLatest.nuovi_attualmente_positivi,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    })), __jsx("p", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "New Cases"))));
  }), props.nationalLatest.slice(0, 1).map(function (nationalLatest, i) {
    return __jsx("div", {
      key: i,
      className: "col-sm-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx("div", {
      className: "card mb-3 border-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("div", {
      className: "card-body text-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx("h3", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: nationalLatest.totale_casi,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    })), __jsx("p", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, "Total Cases"))));
  }), props.nationalLatest.slice(0, 1).map(function (nationalLatest, i) {
    return __jsx("div", {
      key: i,
      className: "col-sm-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, __jsx("div", {
      className: "card mb-3 border-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, __jsx("div", {
      className: "card-body text-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, __jsx("h3", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: nationalLatest.dimessi_guariti,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    })), __jsx("p", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, "Recovered"))));
  }), props.nationalLatest.slice(0, 1).map(function (nationalLatest, i) {
    return __jsx("div", {
      key: i,
      className: "col-sm-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx("div", {
      className: "card mb-3 border-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, __jsx("div", {
      className: "card-body text-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx("h3", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: nationalLatest.deceduti,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    })), __jsx("p", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, "Deaths"))));
  })), __jsx("h2", {
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "Regional Data"), __jsx("div", {
    className: "table-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx("table", {
    className: "table table-hover table-bordered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "#"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Region"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "Hospitalised with Symptoms"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "Intensive Therapy"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Total Hospitalised"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Home Insulation"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "Current Cases"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "New Cases"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "Total Cases"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "Recovered"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "Deaths"))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, props.regionLatest.map(function (regionLatest, i) {
    return __jsx("tr", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, i + 1), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, regionLatest.denominazione_regione), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: regionLatest.ricoverati_con_sintomi,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    })), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: regionLatest.terapia_intensiva,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    })), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: regionLatest.totale_ospedalizzati,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    })), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: regionLatest.isolamento_domiciliare,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    })), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: regionLatest.totale_attualmente_positivi,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    })), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: regionLatest.nuovi_attualmente_positivi,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    })), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: regionLatest.totale_casi,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    })), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: regionLatest.dimessi_guariti,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    })), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: regionLatest.deceduti,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    })));
  })))), __jsx("footer", {
    className: "footer mt-auto py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, "Data Source:", " ", __jsx("a", {
    href: "https://github.com/pcm-dpc/COVID-19",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, "COVID-19 Italy - Situation Monitoring")), __jsx("ul", {
    className: "list-unstyled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, "Important Links")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, __jsx("a", {
    href: "http://www.protezionecivile.it/attivita-rischi/rischio-sanitario/emergenze/coronavirus",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, "Department of Civil Protection Website - Coronavirus Emergency: The National Response"))), __jsx("p", {
    className: "mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, "Built and maintained by", " ", __jsx("a", {
    href: "https://dalpatadu.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, "Yohan Dalpatadu"), " ", "|", " ", __jsx("a", {
    href: "https://github.com/yohandalpe/covid19-dashboard-nextjs",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, "GitHub Repository"), " ")));
};

Index.getInitialProps = function _callee() {
  var resNationalLatest, resRegionLatest, resDataNationalLatest, resDataRegionLatest;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json"));

        case 2:
          resNationalLatest = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json"));

        case 5:
          resRegionLatest = _context.sent;
          _context.next = 8;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(resNationalLatest.json());

        case 8:
          resDataNationalLatest = _context.sent;
          _context.next = 11;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(resRegionLatest.json());

        case 11:
          resDataRegionLatest = _context.sent;
          return _context.abrupt("return", {
            nationalLatest: resDataNationalLatest,
            regionLatest: resDataRegionLatest
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=italy.js.2e95a775c31f6239173d.hot-update.js.map