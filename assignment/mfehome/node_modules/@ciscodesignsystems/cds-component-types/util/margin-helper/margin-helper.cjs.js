'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const handleMarginInput = margin => {
  const marginAttr = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  };
  if (typeof margin === 'number') {
    marginAttr.top = margin;
    marginAttr.bottom = margin;
    marginAttr.right = margin;
    marginAttr.left = margin;
  } else if (Array.isArray(margin)) {
    switch (margin.length) {
      case 1:
        marginAttr.top = margin[0];
        marginAttr.bottom = margin[0];
        marginAttr.right = margin[0];
        marginAttr.left = margin[0];
        break;
      case 2:
        marginAttr.top = margin[0];
        marginAttr.bottom = margin[0];
        marginAttr.right = margin[1];
        marginAttr.left = margin[1];
        break;
      case 3:
        marginAttr.top = margin[0];
        marginAttr.bottom = margin[2];
        marginAttr.right = margin[1];
        marginAttr.left = margin[1];
        break;
      case 4:
        marginAttr.top = margin[0];
        marginAttr.bottom = margin[2];
        marginAttr.right = margin[1];
        marginAttr.left = margin[3];
        break;
    }
  } else if (typeof margin === 'object') {
    const {
      bottom = 0,
      left = 0,
      right = 0,
      top = 0
    } = margin;
    marginAttr.top = top;
    marginAttr.bottom = bottom;
    marginAttr.right = right;
    marginAttr.left = left;
  }
  return marginAttr;
};

exports.handleMarginInput = handleMarginInput;
