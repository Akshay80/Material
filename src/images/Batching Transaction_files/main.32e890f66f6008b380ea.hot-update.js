webpackHotUpdate("main",{

/***/ "./src/Components/Confirm.js":
/*!***********************************!*\
  !*** ./src/Components/Confirm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_dashboard_DashboardContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/dashboard/DashboardContext */ "./src/context/dashboard/DashboardContext.js");
/* harmony import */ var _images_copy_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/copy_icon.png */ "./src/images/copy_icon.png");
/* harmony import */ var _css_confirm_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/confirm.css */ "./src/css/confirm.css");
/* harmony import */ var _css_confirm_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_confirm_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/hp-pc04/Desktop/batching-transaction/src/Components/Confirm.js",
    _s = __webpack_require__.$Refresh$.signature();









const Confirm = props => {
  _s();

  const {
    batchTransaction,
    batchTransactionCommissionPercent,
    showReceipt,
    confirmPayment,
    confirmPaymentData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_dashboard_DashboardContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("MY BTC ADDRESS: ", user.btcAddress); // //console.log("props", props);
  // //console.log("state", props.location.state);

  const {
    feeRate
  } = props.location.state;
  const {
    commissionInBtc,
    estimateNetworkFees,
    totalAmountInBtc,
    receivers
  } = confirmPaymentData;
  const {
    error,
    externalWallets
  } = confirmPaymentData; // //console.log("btcp", commissionPercent);
  // //console.log("fr", feeRate);
  // //console.log("f", file);
  //console.log(props.location);
  // const setShowModal = (props) => {};

  const handleConfirm = () => {
    // const fd = new FormData();
    // fd.set("commissionPercent", commissionPercent);
    // fd.set("feeRate", feeRate);
    // fd.set("file", file);
    // fd.set("userId", JSON.parse(localStorage.getItem("user")).userData.id);
    // batchTransaction(fd, props.history);
    let r = []; //console.log(externalWallets);
    //console.log(receivers);

    receivers === null || receivers === void 0 ? void 0 : receivers.map(item => {
      return r.push({
        amount: item.amount,
        btcAddress: item.btcAddress,
        email: item.email,
        name: item.name
      });
    });
    externalWallets === null || externalWallets === void 0 ? void 0 : externalWallets.map(item => {
      return r.push({
        amount: item.amount,
        btcAddress: item.bitcoinAddress,
        email: item.email,
        name: item.name
      });
    });
    const body = {
      commission: batchTransactionCommissionPercent,
      feeRate: feeRate,
      receivers: r,
      userId: JSON.parse(localStorage.getItem("user")).userData.id
    }; //console.log("confirm body", body);

    batchTransaction(body, props.history);
  };

  const style = {
    titles: {
      flex: 2,
      textAlign: "left",
      marginLeft: 20
    },
    amounts: {
      flex: 1,
      textAlign: "right"
    },
    remAmount: {
      fontWeight: "500",
      flex: 1
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    confirmPayment(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //console.log("CPD", confirmPaymentData);

  if (showReceipt) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: "/receipt"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 12
    }, undefined);
  } // const history = useHistory();


  const handleDeny = () => {
    props.history.replace("/dashboard");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "row",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "card mt-5 d-block mx-auto ",
          style: {
            borderRadius: 7,
            borderColor: "#0e73bc",
            width: "100%",
            padding: "25px",
            boxShadow: "1px 2px 5px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
            className: "text-center mb-4",
            style: {
              letterSpacing: 2,
              color: "#0e73bc"
            },
            children: "Confirm Payment"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "card-body p-2",
            children: [!error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "d-flex justify-content-around mb-1 text-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "p-2",
                  style: style.titles,
                  children: "Total Balance"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "p-2",
                  style: style.amounts,
                  children: totalAmountInBtc ? totalAmountInBtc : 0.00003
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "d-flex justify-content-around mb-1 text-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "p-2",
                  style: style.titles,
                  children: "Fee Rate\xA0\xA0\xA0\xA0"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "p-2 text-success",
                  style: style.amounts,
                  children: estimateNetworkFees ? estimateNetworkFees : 0.000002
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "d-flex justify-content-around mb-1 text-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "p-2",
                  style: style.titles,
                  children: "Commission"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "p-2 text-danger",
                  style: style.amounts,
                  children: commissionInBtc ? commissionInBtc : 0.000004
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("hr", {
                color: "lightgrey mt-4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 19
              }, undefined)]
            }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
              className: "text-danger d-block mx-auto mt-4",
              style: {
                textAlign: "center"
              },
              children: error
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
              htmlFor: "exampleFormControlInput1",
              className: "form-label mt-3",
              style: {
                color: "black"
              },
              children: "Your Bitcoin Address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "input-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
                type: "text",
                className: "form-control",
                name: "btcAddress",
                defaultValue: user.btcAddress,
                disabled: true // id="inputGroupFile"
                // aria-describedby="inputGroupFileAddon"
                // required="required"
                // onChange={handleFileChange}

              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 19
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
                type: "image",
                src: _images_copy_icon_png__WEBPACK_IMPORTED_MODULE_3__["default"],
                id: "image",
                width: "48",
                style: {
                  border: "1px solid #0E73BC",
                  padding: 10,
                  borderRadius: "0px 4px 4px 0px"
                },
                "data-bs-target": "#exampleModal",
                alt: "copy_icon",
                onClick: () => {
                  alert("Hello world");
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "table-responsive",
              style: {
                height: 300
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("table", {
                className: "table table-bordered mt-4 mb-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("thead", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
                      scope: "col",
                      style: {
                        fontWeight: 500,
                        color: "#0E73BC"
                      },
                      children: "Bitcoin Address"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 237,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
                      scope: "col",
                      style: {
                        fontWeight: 500,
                        color: "#0E73BC"
                      },
                      children: "Amount"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 243,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
                      scope: "col",
                      style: {
                        fontWeight: 500,
                        color: "#0E73BC"
                      },
                      children: "Name"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 249,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
                      scope: "col",
                      style: {
                        fontWeight: 500,
                        color: "#0E73BC"
                      },
                      children: "Email"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 255,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("tbody", {
                  children: [receivers === null || receivers === void 0 ? void 0 : receivers.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
                      scope: "row",
                      style: {
                        fontWeight: 400
                      },
                      children: item.btcAddress
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 266,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                      children: item.amount
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 269,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                      children: item.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 270,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                      children: item.email
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 271,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 265,
                    columnNumber: 23
                  }, undefined)), externalWallets === null || externalWallets === void 0 ? void 0 : externalWallets.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("th", {
                      scope: "row",
                      style: {
                        fontWeight: 400
                      },
                      children: item.bitcoinAddress
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 276,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                      children: item.amount
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 279,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                      children: item.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 280,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("td", {
                      children: item.email
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 281,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 275,
                    columnNumber: 23
                  }, undefined))]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 263,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "modal-footer border-0",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
                type: "button",
                className: "btn btn-outline-success",
                style: {
                  backgroundColor: ""
                },
                onClick: handleConfirm,
                disabled: error ? "true" : false,
                children: "Proceed to Pay"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 289,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
                type: "button",
                className: "btn btn-outline-danger",
                onClick: handleDeny,
                children: "Deny"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 298,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 5
  }, undefined);
};

_s(Confirm, "fuuqzDsMWW2RGL1C2C9Hej3O3Og=");

_c = Confirm;
/* harmony default export */ __webpack_exports__["default"] = (Confirm);

var _c;

__webpack_require__.$Refresh$.register(_c, "Confirm");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.32e890f66f6008b380ea.hot-update.js.map