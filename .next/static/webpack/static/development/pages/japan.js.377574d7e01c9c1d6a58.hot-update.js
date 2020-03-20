webpackHotUpdate("static/development/pages/japan.js",{

/***/ "./pages/japan.js":
/*!************************!*\
  !*** ./pages/japan.js ***!
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

var _jsxFileName = "/Users/yohandalpatadu/Projects/github/covid19-dashboard-nextjs/pages/japan.js";

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
  }, "COVID-19 Situation Report in Japan"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "As at ", props.stats.slice(0, 1).map(function (updated) {
    return __jsx("span", {
      key: "1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, updated.lastupdated);
  })), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("h2", {
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Total"), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.stats.slice(0, 1).map(function (prefectures) {
    return __jsx("div", {
      key: prefectures.prefecture,
      className: "col-sm-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("div", {
      className: "card mb-3 border-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("div", {
      className: "card-body text-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("h3", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: prefectures.cases,
      displayType: 'text',
      thousandSeparator: true,
      prefix: '',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })), __jsx("p", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Cases"))));
  }), props.stats.slice(0, 1).map(function (prefectures) {
    return __jsx("div", {
      key: prefectures.prefecture,
      className: "col-sm-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("div", {
      className: "card mb-3 border-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("div", {
      className: "card-body text-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("h3", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: prefectures.recovered,
      displayType: 'text',
      thousandSeparator: true,
      prefix: '',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })), __jsx("p", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Recovered"))));
  }), props.stats.slice(0, 1).map(function (prefectures) {
    return __jsx("div", {
      key: prefectures.prefecture,
      className: "col-sm-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("div", {
      className: "card mb-3 border-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("div", {
      className: "card-body text-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("h3", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: prefectures.deaths,
      displayType: 'text',
      thousandSeparator: true,
      prefix: '',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    })), __jsx("p", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Deaths"))));
  })), __jsx("h2", {
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Prefecture Data"), __jsx("div", {
    className: "table-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("table", {
    className: "table table-hover table-bordered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Prefecture"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Cases"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Recovered"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Deaths"))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, props.stats.slice(1).map(function (prefectures) {
    return __jsx("tr", {
      key: prefectures.prefecture,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, prefectures.prefecture, " (", prefectures.prefectureja, ")"), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: prefectures.cases,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    })), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: prefectures.recovered,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    })), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: prefectures.deaths,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    })));
  })))), __jsx("h2", {
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Daily Report"), __jsx("div", {
    className: "table-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("table", {
    className: "table table-hover table-bordered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Date"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Confirmed"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Recovered"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Deceased"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Critical"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Tested"))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, props.stats.map(function (daily, i) {
    return __jsx("tr", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, daily.date), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: daily.confirmed,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    })), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: daily.recovered,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    })), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: daily.deceased,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    })), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: daily.critical,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    })), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: daily.tested,
      displayType: "text",
      thousandSeparator: true,
      prefix: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    })));
  })))), __jsx("footer", {
    className: "footer mt-auto py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Data Source:", " ", __jsx("a", {
    href: "https://covid19japan.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Japan COVID-19 Coronavirus Tracker")), __jsx("ul", {
    className: "list-unstyled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Important Links")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx("a", {
    href: "http://idsc.tokyo-eiken.go.jp/diseases/2019-ncov/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Information from the Tokyo Metropolitan Infectious Disease Surveillance Center"))), __jsx("p", {
    className: "mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Built and maintained by", " ", __jsx("a", {
    href: "https://dalpatadu.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "Yohan Dalpatadu"), " ", "|", " ", __jsx("a", {
    href: "https://github.com/yohandalpe/covid19-dashboard-nextjs",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "GitHub Repository"), " ")));
};

Index.getInitialProps = function _callee() {
  var res, resData;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://covid19japan.s3.ap-northeast-1.amazonaws.com/data.json"));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 5:
          resData = _context.sent;
          return _context.abrupt("return", {
            stats: resData.prefectures
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=japan.js.377574d7e01c9c1d6a58.hot-update.js.map