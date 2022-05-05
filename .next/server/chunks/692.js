exports.id = 692;
exports.ids = [692];
exports.modules = {

/***/ 3206:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__CKQ67"
};


/***/ }),

/***/ 8421:
/***/ ((module) => {

// Exports
module.exports = {
	"particle": "particle_particle__VpdVz"
};


/***/ }),

/***/ 4260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3206);
/* harmony import */ var _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: (_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().footer),
        children: "COPYRIGHT \u24D2 2022 \uC6F9\uAC1C\uBC1C\uC790 \uAE40\uC7AC\uD6C8. ALL RIGHTS RESERVED."
    });
};


/***/ }),

/***/ 6615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Particle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4753);
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tsparticles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3047);
/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tsparticles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_particle_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8421);
/* harmony import */ var _styles_particle_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_particle_module_scss__WEBPACK_IMPORTED_MODULE_4__);





function Particle() {
    const { mode  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.themeMode
    );
    const particlesInit = async (main)=>{
        await (0,tsparticles__WEBPACK_IMPORTED_MODULE_2__.loadFull)(main);
    };
    const snow = mode === "dark" ? "#b7e3d5" : "#a9cec2";
    const background = mode === "dark" ? "#2d2d2d" : "rgb(246, 246, 246)";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_tsparticles__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: "tsparticles",
        className: (_styles_particle_module_scss__WEBPACK_IMPORTED_MODULE_4___default().particle),
        init: particlesInit,
        options: {
            background: {
                color: {
                    value: background
                }
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                    onHover: {
                        enable: true,
                        mode: "grab"
                    },
                    resize: true
                },
                modes: {
                    push: {
                        quantity: 4
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: snow
                },
                line_linked: {
                    color: snow
                },
                collisions: {
                    enable: true
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce"
                    },
                    random: true,
                    speed: 1,
                    straight: true
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 80
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: {
                        min: 1,
                        max: 5
                    }
                }
            },
            detectRetina: true
        }
    });
};


/***/ })

};
;