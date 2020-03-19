module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MainLayout.js":
/*!**********************************!*\
  !*** ./components/MainLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/yohandalpatadu/Projects/github/covid19-dashboard-nextjs/components/MainLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "COVID-19 Situation Report - Sri Lanka"), __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
  integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
  crossOrigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("script", {
  src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
  integrity: "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",
  crossOrigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), __jsx("script", {
  src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
  integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
  crossOrigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx("script", {
  src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
  integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
  crossOrigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), __jsx("script", {
  async: true,
  src: "https://www.googletagmanager.com/gtag/js?id=G-MKRT6KQS18",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx("script", {
  dangerouslySetInnerHTML: {
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());

      gtag('config', 'G-MKRT6KQS18');`
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
})), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("div", {
  style: layoutStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, props.children)));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MainLayout */ "./components/MainLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-number-format */ "react-number-format");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/yohandalpatadu/Projects/github/covid19-dashboard-nextjs/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Index = props => __jsx(_components_MainLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "COVID-19 Situation Report"), __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "As at ", props.stats.update_date_time), __jsx("hr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("h2", {
  className: "my-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Local (Sri Lanka)"), __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("div", {
  className: "col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("div", {
  className: "card mb-3 border-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("div", {
  className: "card-body text-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("h3", {
  className: "card-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_3___default.a, {
  value: props.stats.local_new_cases,
  displayType: 'text',
  thousandSeparator: true,
  prefix: '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
})), __jsx("p", {
  className: "card-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "New Cases")))), __jsx("div", {
  className: "col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("div", {
  className: "card mb-3 border-secondary",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("div", {
  className: "card-body text-secondary",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("h3", {
  className: "card-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_3___default.a, {
  value: props.stats.local_total_cases,
  displayType: 'text',
  thousandSeparator: true,
  prefix: '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
})), __jsx("p", {
  className: "card-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "Total Cases")))), __jsx("div", {
  className: "col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx("div", {
  className: "card mb-3 border-success",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("div", {
  className: "card-body text-success",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx("h3", {
  className: "card-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_3___default.a, {
  value: props.stats.local_recovered,
  displayType: 'text',
  thousandSeparator: true,
  prefix: '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
})), __jsx("p", {
  className: "card-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, "Recovered"))))), __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, __jsx("div", {
  className: "col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx("div", {
  className: "card mb-3 border-dark",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("div", {
  className: "card-body text-dark",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, __jsx("h3", {
  className: "card-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_3___default.a, {
  value: props.stats.local_deaths,
  displayType: 'text',
  thousandSeparator: true,
  prefix: '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
})), __jsx("p", {
  className: "card-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, "Deaths")))), __jsx("div", {
  className: "col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("div", {
  className: "card mb-3 border-danger",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, __jsx("div", {
  className: "card-body text-danger",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, __jsx("h3", {
  className: "card-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_3___default.a, {
  value: props.stats.local_new_deaths,
  displayType: 'text',
  thousandSeparator: true,
  prefix: '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
})), __jsx("p", {
  className: "card-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, "New Deaths"))))), __jsx("h2", {
  className: "my-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, "Global"), __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, __jsx("div", {
  className: "col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, __jsx("div", {
  className: "card mb-3 border-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, __jsx("div", {
  className: "card-body text-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, __jsx("h3", {
  className: "card-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_3___default.a, {
  value: props.stats.global_new_cases,
  displayType: 'text',
  thousandSeparator: true,
  prefix: '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
})), __jsx("p", {
  className: "card-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, "New Cases")))), __jsx("div", {
  className: "col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}, __jsx("div", {
  className: "card mb-3 border-secondary",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, __jsx("div", {
  className: "card-body text-secondary",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}, __jsx("h3", {
  className: "card-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_3___default.a, {
  value: props.stats.global_total_cases,
  displayType: 'text',
  thousandSeparator: true,
  prefix: '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
})), __jsx("p", {
  className: "card-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}, "Total Cases")))), __jsx("div", {
  className: "col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
}, __jsx("div", {
  className: "card mb-3 border-success",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}, __jsx("div", {
  className: "card-body text-success",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91
  },
  __self: undefined
}, __jsx("h3", {
  className: "card-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  },
  __self: undefined
}, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_3___default.a, {
  value: props.stats.global_recovered,
  displayType: 'text',
  thousandSeparator: true,
  prefix: '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  },
  __self: undefined
})), __jsx("p", {
  className: "card-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
}, "Recovered"))))), __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}, __jsx("div", {
  className: "col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}, __jsx("div", {
  className: "card mb-3 border-dark",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}, __jsx("div", {
  className: "card-body text-dark",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}, __jsx("h3", {
  className: "card-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_3___default.a, {
  value: props.stats.global_deaths,
  displayType: 'text',
  thousandSeparator: true,
  prefix: '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
})), __jsx("p", {
  className: "card-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}, "Deaths")))), __jsx("div", {
  className: "col-sm-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111
  },
  __self: undefined
}, __jsx("div", {
  className: "card mb-3 border-danger",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112
  },
  __self: undefined
}, __jsx("div", {
  className: "card-body text-danger",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}, __jsx("h3", {
  className: "card-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114
  },
  __self: undefined
}, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_3___default.a, {
  value: props.stats.global_new_deaths,
  displayType: 'text',
  thousandSeparator: true,
  prefix: '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114
  },
  __self: undefined
})), __jsx("p", {
  className: "card-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
  },
  __self: undefined
}, "New Deaths"))))), __jsx("h2", {
  className: "my-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123
  },
  __self: undefined
}, "Hospital Data"), __jsx("div", {
  className: "table-responsive",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124
  },
  __self: undefined
}, __jsx("table", {
  className: "table table-hover table-bordered",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125
  },
  __self: undefined
}, __jsx("thead", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126
  },
  __self: undefined
}, __jsx("tr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127
  },
  __self: undefined
}, __jsx("th", {
  rowSpan: "2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128
  },
  __self: undefined
}, "Name of the Hospital"), __jsx("th", {
  colSpan: "3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 129
  },
  __self: undefined
}, "Cumulative count of individuals on treatment/observation"), __jsx("th", {
  colSpan: "3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132
  },
  __self: undefined
}, "Count of individuals currently on treatment/observation")), __jsx("tr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136
  },
  __self: undefined
}, __jsx("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137
  },
  __self: undefined
}, "Sri Lankans"), __jsx("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 138
  },
  __self: undefined
}, "Foreigners"), __jsx("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 139
  },
  __self: undefined
}, "Total"), __jsx("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 140
  },
  __self: undefined
}, "Sri Lankans"), __jsx("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 141
  },
  __self: undefined
}, "Foreigners"), __jsx("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 142
  },
  __self: undefined
}, "Total"))), __jsx("tbody", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145
  },
  __self: undefined
}, props.stats.hospital_data.map(hospital_data => __jsx("tr", {
  key: hospital_data.id,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147
  },
  __self: undefined
}, __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 148
  },
  __self: undefined
}, hospital_data.hospital.name), __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 149
  },
  __self: undefined
}, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_3___default.a, {
  value: hospital_data.cumulative_local,
  displayType: 'text',
  thousandSeparator: true,
  prefix: '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 149
  },
  __self: undefined
})), __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 150
  },
  __self: undefined
}, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_3___default.a, {
  value: hospital_data.cumulative_foreign,
  displayType: 'text',
  thousandSeparator: true,
  prefix: '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 150
  },
  __self: undefined
})), __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 151
  },
  __self: undefined
}, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_3___default.a, {
  value: hospital_data.cumulative_local + hospital_data.cumulative_foreign,
  displayType: 'text',
  thousandSeparator: true,
  prefix: '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 151
  },
  __self: undefined
})), __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 152
  },
  __self: undefined
}, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_3___default.a, {
  value: hospital_data.treatment_local,
  displayType: 'text',
  thousandSeparator: true,
  prefix: '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 152
  },
  __self: undefined
})), __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 153
  },
  __self: undefined
}, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_3___default.a, {
  value: hospital_data.treatment_foreign,
  displayType: 'text',
  thousandSeparator: true,
  prefix: '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 153
  },
  __self: undefined
})), __jsx("td", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 154
  },
  __self: undefined
}, __jsx(react_number_format__WEBPACK_IMPORTED_MODULE_3___default.a, {
  value: hospital_data.treatment_local + hospital_data.treatment_foreign,
  displayType: 'text',
  thousandSeparator: true,
  prefix: '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 154
  },
  __self: undefined
}))))))), __jsx("footer", {
  className: "footer mt-auto py-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 160
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 161
  },
  __self: undefined
}, "Data Source:", " ", __jsx("a", {
  href: "http://hpb.health.gov.lk/",
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 163
  },
  __self: undefined
}, "Health Promotion Bureau of Sri Lanka")), __jsx("ul", {
  className: "list-unstyled",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 167
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 168
  },
  __self: undefined
}, __jsx("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 168
  },
  __self: undefined
}, "Important Links")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 169
  },
  __self: undefined
}, __jsx("a", {
  href: "https://www.dgi.gov.lk/",
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 169
  },
  __self: undefined
}, "The Department of Government Information")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 170
  },
  __self: undefined
}, __jsx("a", {
  href: "http://epid.gov.lk/",
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 170
  },
  __self: undefined
}, "The Epidemiology Unit, Ministry of Health"))), __jsx("p", {
  className: "mt-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 173
  },
  __self: undefined
}, "Built and maintained by", " ", __jsx("a", {
  href: "https://dalpatadu.com/",
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 175
  },
  __self: undefined
}, "Yohan Dalpatadu"), " ", " |", " ", __jsx("a", {
  href: "https://github.com/yohandalpe/covid19-dashboard-nextjs",
  target: "_blank",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 179
  },
  __self: undefined
}, "GitHub Repository"), " ")));

Index.getInitialProps = async function () {
  // Fetch data from HPB API
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("http://hpb.health.gov.lk/api/get-current-statistical");
  const resData = await res.json(); // Pass data to the page via props

  return {
    stats: resData.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yohandalpatadu/Projects/github/covid19-dashboard-nextjs/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-number-format":
/*!**************************************!*\
  !*** external "react-number-format" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-number-format");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map