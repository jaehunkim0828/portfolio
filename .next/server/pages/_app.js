(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6446:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "layout_container__8mgcn",
	"dark": "layout_dark__NrkPH",
	"light": "layout_light__BxhvL"
};


/***/ }),

/***/ 1194:
/***/ ((module) => {

// Exports
module.exports = {
	"navContainer": "nav_navContainer__se55J",
	"items": "nav_items__0fX_S",
	"dark": "nav_dark__DV3AI",
	"light": "nav_light__leeLq",
	"itemsContainer": "nav_itemsContainer__vOKpi",
	"item": "nav_item__hwE6o",
	"toggle": "nav_toggle__rIjlt",
	"toggleContainer": "nav_toggleContainer__J_nkB",
	"image": "nav_image__jG_p9",
	"dropdown": "nav_dropdown__uWhTN",
	"dropItem": "nav_dropItem__d4S4a"
};


/***/ }),

/***/ 5234:
/***/ ((module) => {

// Exports
module.exports = {
	"themeButton": "themeButton_themeButton__UiCOg",
	"dark": "themeButton_dark__gJrFX",
	"light": "themeButton_light__8HT2M",
	"btn": "themeButton_btn__oSTvu"
};


/***/ }),

/***/ 3149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useResize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useResize() {
    const { 0: windowSize , 1: setWindowSize  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        nowWidth: 0,
        nowHeight: 0
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        function handleResize() {
            setWindowSize({
                nowWidth: window.innerWidth,
                nowHeight: window.innerHeight
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return ()=>window.removeEventListener("resize", handleResize)
        ;
    }, []);
    return windowSize;
}


/***/ }),

/***/ 706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: ./store/actions/actionType.ts
const SET_LIGHT = "SET_LIGHT";
const SET_DARK = "SET_DARK";

;// CONCATENATED MODULE: ./store/reducers/themeMode.ts

const initialState = {
    mode: "light"
};
function themeMode(state = initialState, action) {
    switch(action.type){
        case SET_LIGHT:
            return {
                mode: "light"
            };
        case SET_DARK:
            return {
                mode: "dark"
            };
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./store/reducers/index.ts


const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
    themeMode: themeMode
});
/* harmony default export */ const reducers = (rootReducer);

;// CONCATENATED MODULE: ./store/index.ts




const bindMiddleware = (middleware)=>{
    if (false) {}
    return (0,external_redux_namespaceObject.applyMiddleware)(...middleware);
};
const makeStore = ()=>{
    const store = (0,external_redux_namespaceObject.createStore)(reducers, bindMiddleware([]));
    return store;
};
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore, {
    debug: false
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./store/actions/themeMode.ts

function onLight() {
    return {
        type: SET_LIGHT
    };
}
function onDark() {
    return {
        type: SET_DARK
    };
}

// EXTERNAL MODULE: ./styles/themeButton.module.scss
var themeButton_module = __webpack_require__(5234);
var themeButton_module_default = /*#__PURE__*/__webpack_require__.n(themeButton_module);
// EXTERNAL MODULE: ./helpers/getTheme.ts
var getTheme = __webpack_require__(9849);
;// CONCATENATED MODULE: ./components/ThemeButton.tsx






function ThemeButton() {
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { mode  } = (0,external_react_redux_.useSelector)((state)=>state.themeMode
    );
    const { 0: location , 1: setLication  } = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        if (mode === "dark") {
            setLication(1);
        }
    }, [
        mode
    ]);
    const onClickMode = ()=>{
        if (!location) {
            dispatch(onDark());
            window.localStorage.setItem("mode", "dark");
            setLication(1);
            return;
        }
        window.localStorage.setItem("mode", "light");
        dispatch(onLight());
        setLication(0);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: (0,getTheme/* default */.Z)((themeButton_module_default()), (themeButton_module_default()).themeButton),
        onClick: onClickMode,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (0,getTheme/* default */.Z)((themeButton_module_default()), (themeButton_module_default()).btn),
            style: {
                transform: `translate3d(${!location ? 0 : location * 29}px, 0px, 0px)`
            }
        })
    });
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./styles/nav.module.scss
var nav_module = __webpack_require__(1194);
var nav_module_default = /*#__PURE__*/__webpack_require__.n(nav_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./data.ts + 37 modules
var data = __webpack_require__(2427);
// EXTERNAL MODULE: ./hooks/useResize.ts
var useResize = __webpack_require__(3149);
;// CONCATENATED MODULE: ./public/images/navtoggle.svg
/* harmony default export */ const navtoggle = ({"src":"/_next/static/media/navtoggle.7d34635a.svg","height":48,"width":48});
;// CONCATENATED MODULE: ./public/images/down.png
/* harmony default export */ const down = ({"src":"/_next/static/media/down.14a355d4.png","height":50,"width":50,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAT0lEQVR42j3NMQ5AABAEwAkqT0PiAQoKKuEbdPwBhV+6RMjlJrvVkiCeL7VGZHGMOtjMYLJDo7Ya9GGtIXeoLNbwlAO3UhGCFJyut/1zrzyBlg0NCnW+/AAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/Nav.tsx










function Nav() {
    const router = (0,router_.useRouter)();
    const { nowWidth  } = (0,useResize/* useResize */.a)();
    const { 0: isTgClicked , 1: setIsTgClicked  } = (0,external_react_.useState)(false);
    const onToggle = ()=>{
        setIsTgClicked(!isTgClicked);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,getTheme/* default */.Z)((nav_module_default()), (nav_module_default()).navContainer),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (0,getTheme/* default */.Z)((nav_module_default()), (nav_module_default()).items),
            children: nowWidth && nowWidth > 650 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (nav_module_default()).itemsContainer,
                children: data/* navProfile */.vE === null || data/* navProfile */.vE === void 0 ? void 0 : data/* navProfile.map */.vE.map((e, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (nav_module_default()).item,
                        onClick: ()=>router.push(e.path)
                        ,
                        children: e.name
                    }, i)
                )
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (nav_module_default()).toggle,
                onClick: onToggle,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (nav_module_default()).toggleContainer,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (nav_module_default()).image,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: !isTgClicked ? navtoggle : down,
                                alt: "toggle"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (nav_module_default()).dropdown,
                            style: {
                                height: isTgClicked ? "100%" : "0"
                            },
                            children: data/* navProfile */.vE === null || data/* navProfile */.vE === void 0 ? void 0 : data/* navProfile.map */.vE.map((e, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (nav_module_default()).dropItem,
                                    onClick: ()=>router.push(e.path)
                                    ,
                                    children: e.name
                                }, i)
                            )
                        })
                    ]
                })
            })
        })
    });
};

;// CONCATENATED MODULE: external "react-transition-group"
const external_react_transition_group_namespaceObject = require("react-transition-group");
// EXTERNAL MODULE: ./styles/layout.module.scss
var layout_module = __webpack_require__(6446);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
;// CONCATENATED MODULE: ./components/Layout.tsx





function Name({ children  }) {
    const router = (0,router_.useRouter)();
    const TIMEOUT = 200;
    const getTransitionStyles = {
        entering: {
            position: `absolute`,
            opacity: 0,
            transform: `translateY(25px)`
        },
        entered: {
            transition: `transform ${TIMEOUT}ms ease-in-out`,
            opacity: 1,
            transform: `translateY(0px)`
        },
        exiting: {
            transition: `transform ${TIMEOUT}ms ease-in-out`,
            opacity: 0,
            transform: `translateY(-25px)`
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_namespaceObject.TransitionGroup, {
            style: {
                position: "relative"
            },
            className: (0,getTheme/* default */.Z)((layout_module_default()), (layout_module_default()).container),
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_namespaceObject.Transition, {
                timeout: {
                    enter: TIMEOUT,
                    exit: TIMEOUT
                },
                children: (status)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            ...getTransitionStyles[status]
                        },
                        children: children
                    })
            }, router.pathname)
        })
    });
};

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.tsx









function MyApp({ Component , pageProps  }) {
    const dispatch = (0,external_react_redux_.useDispatch)();
    if (false) {}
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "\uAE40\uC7AC\uD6C8 \uAC1C\uBC1C\uC790 \uD3EC\uD2B8\uD3F4\uB9AC\uC624"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: "http://tftstory.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "\uC548\uB155\uD558\uC138\uC694. Front-end\uAC1C\uBC1C\uC790 \uAE40\uC7AC\uD6C8\uC785\uB2C8\uB2E4."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "og:title",
                        content: "\uAE40\uC7AC\uD6C8 \uAC1C\uBC1C\uC790 \uD3EC\uD2B8\uD3F4\uB9AC\uC624"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "og:description",
                        content: "\uC548\uB155\uD558\uC138\uC694. Front-end\uAC1C\uBC1C\uC790 \uAE40\uC7AC\uD6C8\uC785\uB2C8\uB2E4."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "google-site-verification",
                        content: "bBVBzF9clPp3PeE7RBQxuNRmeAsEF6niPFeMBuvEaPw"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Jua&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://cdn.rawgit.com/progers/pathseg/master/pathseg.js",
                        defer: true
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Nav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Name, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ThemeButton, {})
        ]
    });
}
/* harmony default export */ const _app = (wrapper.withRedux(MyApp));


/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,233], () => (__webpack_exec__(706)));
module.exports = __webpack_exports__;

})();