document.addEventListener('DOMContentLoaded', function () {

    const hcSticky = document.querySelector('.hooking-content')

    var scrollThrottled = _.throttle(onScroll, 0);


    window.addEventListener('scroll', scrollThrottled);

    const easing = "bezierEasing(0, 0.7, 1, 0.3)";
    const settings = {
        height: 2500,
        elements: {
            hook__sl1: {
                top: 500,
                bottom: 1500,
                topStyle: {
                    opacity: 0,
                    translateY: 30
                },
                bottomStyle: {
                    opacity: 0,
                    translateY: 30
                }
            },
            hook__sl2: {
                top: 1500,
                bottom: 2500,
                topStyle: {
                    opacity: 0,
                    translateY: 30
                },
                bottomStyle: {
                    opacity: 0,
                    translateY: 30
                }
            },
            pinEffect1: {
                top: 4300,
                bottom: 5100,
                topStyle: {
                    opacity: 0,
                    translateY: 30
                },
                bottomStyle: {
                    opacity: 0,
                    translateY: 30
                }
            },
            tBoxText1: {
                top: 5100,
                bottom: 5900,
                topStyle: {
                    opacity: 0,
                    translateY: 30
                },
                bottomStyle: {
                    opacity: 0,
                    translateY: 30
                }
            },
            tBoxText2: {
                top: 5900,
                bottom: 6700,
                topStyle: {
                    opacity: 0,
                    translateY: 30
                },
                bottomStyle: {
                    opacity: 0,
                    translateY: 30
                }
            },
            br__motion4: {
                top: 6700,
                bottom: 7900,
                topStyle: {
                    opacity: 0,
                    'clip-path': 100
                },
                bottomStyle: {
                    opacity: 0,
                    'clip-path': 0
                }
            }
        },
        animations: {
            hook__sl1: [{
                    top: 500,
                    bottom: 1500,
                    ease: easing,
                    styles: {
                        translateY: {
                            topValue: 30,
                            bottomValue: -30
                        }
                    }
                },
                {
                    top: 500,
                    bottom: 1000,
                    ease: easing,
                    styles: {
                        opacity: {
                            topValue: 0,
                            bottomValue: 1
                        }
                    }
                },
                {
                    top: 1000,
                    bottom: 1500,
                    ease: easing,
                    styles: {
                        opacity: {
                            topValue: 1,
                            bottomValue: 0
                        }
                    }
                }
            ],
            hook__sl2: [{
                    top: 1500,
                    bottom: 2500,
                    ease: easing,
                    styles: {
                        translateY: {
                            topValue: 30,
                            bottomValue: -30
                        }
                    }
                },
                {
                    top: 1500,
                    bottom: 2000,
                    ease: easing,
                    styles: {
                        opacity: {
                            topValue: 0,
                            bottomValue: 1
                        }
                    }
                },
                {
                    top: 2000,
                    bottom: 2500,
                    ease: easing,
                    styles: {
                        opacity: {
                            topValue: 1,
                            bottomValue: 0
                        }
                    }
                }
            ],
            pinEffect1: [{
                top: 4300,
                bottom: 5100,
                styles: {
                    translateY: {
                        topValue: 30,
                        bottomValue : 0
                    }
                }
            },
            {
                top: 4300,
                bottom: 4700,
                styles: {
                    opacity: {
                        topValue: 0,
                        bottomValue: 1
                    }
                }
            },
            {
                top: 4700,
                bottom: 5100,
                styles: {
                    opacity: {
                        topValue: 1,
                        bottomValue: 0
                    }
                }
            }],
            tBoxText1: [{
                top: 5100,
                bottom: 5900,
                styles: {
                    translateY: {
                        topValue: 30,
                        bottomValue : 0
                    }
                }
            },
            {
                top: 5100,
                bottom: 5500,
                styles: {
                    opacity: {
                        topValue: 0,
                        bottomValue: 1
                    }
                }
            },
            {
                top: 5500,
                bottom: 5900,
                styles: {
                    opacity: {
                        topValue: 1,
                        bottomValue: 0
                    }
                }
            }],
            tBoxText2: [{
                top: 5900,
                bottom: 6700,
                styles: {
                    translateY: {
                        topValue: 30,
                        bottomValue : 0
                    }
                }
            },
            {
                top: 5900,
                bottom: 6300,
                styles: {
                    opacity: {
                        topValue: 0,
                        bottomValue: 1
                    }
                }
            },
            {
                top: 6300,
                bottom: 6700,
                styles: {
                    opacity: {
                        topValue: 1,
                        bottomValue: 0
                    }
                }
            }],
            br__motion4: [{
                top: 6700,
                bottom: 7500,
                styles: {
                    'clip-path': {
                        topValue: 100,
                        bottomValue: 0
                    }
                }
            },
            {
                top: 6700,
                bottom: 7300,
                styles: {
                    opacity: {
                        topValue: 0,
                        bottomValue: 1
                    }
                }
            },
            {
                top: 7300,
                bottom: 7900,
                styles: {
                    opacity: {
                        topValue: 1,
                        bottomValue: 0
                    }
                }
            }]
        }
    }

    let enabled = new Map();
    let disabled = new Map();

    const isAmong = (num, top, bottom) => num >= top && num <= bottom;

    const applyStyle = (element, styleName, value, unit = 'px') => {
        if (styleName === 'translateY') {
            // eslint-disable-next-line no-param-ressign
            element.style.transform = `translateY(${value}${unit})`;
            return;
        }

        if (styleName === 'clip-path') {
            // eslint-disable-next-line no-param-ressign
            element.style[styleName] = `inset(0 ${value}% 0 0)`;
            return;
        }

        if(styleName === 'scale') {
            element.style.transform = `scale(${value}%)`;
            return;
        }
        element.style[styleName] = value;
    }

    function applyStyles(currentPos, id, styles, r, unit = 'px') {
        for (const style of Object.keys(styles)) {
            const {
                topValue,
                bottomValue
            } = styles[style];
            const calc = (bottomValue - topValue) * r + topValue;
            applyStyle(document.querySelector(`#${id}`), style, calc, unit);
        }
    }

    var r = 0;

    function applyAllAnimation(currentPos, id) {
        const animations = settings.animations[id];
        if (!animations) return;
        for (const animation of animations) {
            const {
                top: a_top,
                bottom: a_bottom,
                ease,
                styles
            } = animation;
            const isIn = isAmong(currentPos, a_top, a_bottom);
            //만약 애니메이션이 새롭게 들어갈 때 혹은 나갈때 enalbed 설정
            if (isIn) {
                if (!animation.enabled) animation.enabled = true;
            } else if (!isIn && animation.enabled) {
                if (currentPos <= a_top) {
                    applyStyles(currentPos, id, styles, 0);
                } else if (currentPos >= a_bottom) {
                    applyStyles(currentPos, id, styles, 1);
                }
            }

            if (animation.enabled) {
                r = (currentPos - a_top) / (a_bottom - a_top);
                r = r * 100;
                r = Math.floor(r);
                r = r / 100;
                r = Math.abs(r);
                // eslint-disable-next-line no-param-reassign
                applyStyles(currentPos, id, styles, r);
            }
        }
    }

    function init() {
        initAnimation();
    }

    init();

    function initAnimation() {
        document.querySelector('#hook').style.height = `${settings.height}px`;

        disabled.clear();
        enabled.clear();

        for (const id of Object.keys(settings.elements)) {
            disabled.set(id, settings.elements[id]);
        }

        for (const id of Object.keys(settings.animations)) {
            for (const animation of settings.animations[id]) {
                animation.enabled = false;
            }
        }

        disabled.forEach((obj, id) => {
            Object.keys(obj.topStyle).forEach((styleName) => {
                const pushValue = obj.topStyle[styleName];
                document.querySelector(`#${id}`).style[styleName] = pushValue;
            });
        });

        onScroll();
    }

    function onScroll() {
        const scrollTop = window.scrollY || window.pageYOffset;
        const currentPos = scrollTop;
        const positionInfo = `scrollY = ${currentPos} / stickyOffset = ${document.querySelector('#br').offsetTop}`;

        disabled.forEach((obj, id) => {
            if (
                isAmong(currentPos, obj.top, obj.bottom)
            ) {
                enabled.set(id, obj);
                document.querySelector(`#${id}`).classList.remove('disabled');
                document.querySelector(`#${id}`).classList.add('enabled');
                disabled.delete(id);
            }
        });

        enabled.forEach((obj, id) => {
            const {
                top,
                bottom,
                topStyle,
                bottomStyle
            } = obj;
            if (!isAmong(currentPos, top, bottom)) {
                if (currentPos <= top) {
                    Object.keys(topStyle).forEach((styleName) => {
                        applyStyle(document.querySelector(`#${id}`), styleName, topStyle[styleName]);
                    });
                } else if (currentPos >= bottom) {
                    Object.keys(bottomStyle).forEach((styleName) => {
                        applyStyle(document.querySelector(`#${id}`), styleName, bottomStyle[styleName]);
                    });
                }

                disabled.set(id, obj);
                document.querySelector(`#${id}`).classList.remove('enabled');
                document.querySelector(`#${id}`).classList.add('disabled');
                enabled.delete(id);
            } else {
                applyAllAnimation(currentPos, id);
            }
        })
    }
});