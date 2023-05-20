// node_modules/d3/dist/package.js
var version = "5.16.0";

// node_modules/d3-array/src/ascending.js
function ascending_default(a2, b) {
  return a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
}

// node_modules/d3-array/src/bisector.js
function bisector_default(compare) {
  if (compare.length === 1)
    compare = ascendingComparator(compare);
  return {
    left: function(a2, x5, lo, hi) {
      if (lo == null)
        lo = 0;
      if (hi == null)
        hi = a2.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a2[mid], x5) < 0)
          lo = mid + 1;
        else
          hi = mid;
      }
      return lo;
    },
    right: function(a2, x5, lo, hi) {
      if (lo == null)
        lo = 0;
      if (hi == null)
        hi = a2.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a2[mid], x5) > 0)
          hi = mid;
        else
          lo = mid + 1;
      }
      return lo;
    }
  };
}
function ascendingComparator(f) {
  return function(d, x5) {
    return ascending_default(f(d), x5);
  };
}

// node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector_default(ascending_default);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisect_default = bisectRight;

// node_modules/d3-array/src/pairs.js
function pairs_default(array4, f) {
  if (f == null)
    f = pair;
  var i = 0, n = array4.length - 1, p = array4[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n)
    pairs[i] = f(p, p = array4[++i]);
  return pairs;
}
function pair(a2, b) {
  return [a2, b];
}

// node_modules/d3-array/src/cross.js
function cross_default(values0, values1, reduce) {
  var n0 = values0.length, n1 = values1.length, values = new Array(n0 * n1), i0, i1, i, value0;
  if (reduce == null)
    reduce = pair;
  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }
  return values;
}

// node_modules/d3-array/src/descending.js
function descending_default(a2, b) {
  return b < a2 ? -1 : b > a2 ? 1 : b >= a2 ? 0 : NaN;
}

// node_modules/d3-array/src/number.js
function number_default(x5) {
  return x5 === null ? NaN : +x5;
}

// node_modules/d3-array/src/variance.js
function variance_default(values, valueof) {
  var n = values.length, m = 0, i = -1, mean = 0, value, delta, sum3 = 0;
  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = number_default(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum3 += delta * (value - mean);
      }
    }
  } else {
    while (++i < n) {
      if (!isNaN(value = number_default(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum3 += delta * (value - mean);
      }
    }
  }
  if (m > 1)
    return sum3 / (m - 1);
}

// node_modules/d3-array/src/deviation.js
function deviation_default(array4, f) {
  var v = variance_default(array4, f);
  return v ? Math.sqrt(v) : v;
}

// node_modules/d3-array/src/extent.js
function extent_default(values, valueof) {
  var n = values.length, i = -1, value, min2, max3;
  if (valueof == null) {
    while (++i < n) {
      if ((value = values[i]) != null && value >= value) {
        min2 = max3 = value;
        while (++i < n) {
          if ((value = values[i]) != null) {
            if (min2 > value)
              min2 = value;
            if (max3 < value)
              max3 = value;
          }
        }
      }
    }
  } else {
    while (++i < n) {
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min2 = max3 = value;
        while (++i < n) {
          if ((value = valueof(values[i], i, values)) != null) {
            if (min2 > value)
              min2 = value;
            if (max3 < value)
              max3 = value;
          }
        }
      }
    }
  }
  return [min2, max3];
}

// node_modules/d3-array/src/array.js
var array = Array.prototype;
var slice = array.slice;
var map = array.map;

// node_modules/d3-array/src/constant.js
function constant_default(x5) {
  return function() {
    return x5;
  };
}

// node_modules/d3-array/src/identity.js
function identity_default(x5) {
  return x5;
}

// node_modules/d3-array/src/range.js
function range_default(start2, stop, step) {
  start2 = +start2, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start2, start2 = 0, 1) : n < 3 ? 1 : +step;
  var i = -1, n = Math.max(0, Math.ceil((stop - start2) / step)) | 0, range2 = new Array(n);
  while (++i < n) {
    range2[i] = start2 + i * step;
  }
  return range2;
}

// node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);
function ticks_default(start2, stop, count2) {
  var reverse, i = -1, n, ticks, step;
  stop = +stop, start2 = +start2, count2 = +count2;
  if (start2 === stop && count2 > 0)
    return [start2];
  if (reverse = stop < start2)
    n = start2, start2 = stop, stop = n;
  if ((step = tickIncrement(start2, stop, count2)) === 0 || !isFinite(step))
    return [];
  if (step > 0) {
    start2 = Math.ceil(start2 / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start2 + 1));
    while (++i < n)
      ticks[i] = (start2 + i) * step;
  } else {
    start2 = Math.floor(start2 * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start2 - stop + 1));
    while (++i < n)
      ticks[i] = (start2 - i) / step;
  }
  if (reverse)
    ticks.reverse();
  return ticks;
}
function tickIncrement(start2, stop, count2) {
  var step = (stop - start2) / Math.max(0, count2), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
  return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
function tickStep(start2, stop, count2) {
  var step0 = Math.abs(stop - start2) / Math.max(0, count2), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
  if (error >= e10)
    step1 *= 10;
  else if (error >= e5)
    step1 *= 5;
  else if (error >= e2)
    step1 *= 2;
  return stop < start2 ? -step1 : step1;
}

// node_modules/d3-array/src/threshold/sturges.js
function sturges_default(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
}

// node_modules/d3-array/src/histogram.js
function histogram_default() {
  var value = identity_default, domain = extent_default, threshold2 = sturges_default;
  function histogram(data) {
    var i, n = data.length, x5, values = new Array(n);
    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }
    var xz = domain(values), x06 = xz[0], x12 = xz[1], tz = threshold2(values, x06, x12);
    if (!Array.isArray(tz)) {
      tz = tickStep(x06, x12, tz);
      tz = range_default(Math.ceil(x06 / tz) * tz, x12, tz);
    }
    var m = tz.length;
    while (tz[0] <= x06)
      tz.shift(), --m;
    while (tz[m - 1] > x12)
      tz.pop(), --m;
    var bins = new Array(m + 1), bin;
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x06;
      bin.x1 = i < m ? tz[i] : x12;
    }
    for (i = 0; i < n; ++i) {
      x5 = values[i];
      if (x06 <= x5 && x5 <= x12) {
        bins[bisect_default(tz, x5, 0, m)].push(data[i]);
      }
    }
    return bins;
  }
  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant_default(_), histogram) : value;
  };
  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : constant_default([_[0], _[1]]), histogram) : domain;
  };
  histogram.thresholds = function(_) {
    return arguments.length ? (threshold2 = typeof _ === "function" ? _ : Array.isArray(_) ? constant_default(slice.call(_)) : constant_default(_), histogram) : threshold2;
  };
  return histogram;
}

// node_modules/d3-array/src/quantile.js
function quantile_default(values, p, valueof) {
  if (valueof == null)
    valueof = number_default;
  if (!(n = values.length))
    return;
  if ((p = +p) <= 0 || n < 2)
    return +valueof(values[0], 0, values);
  if (p >= 1)
    return +valueof(values[n - 1], n - 1, values);
  var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof(values[i0], i0, values), value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}

// node_modules/d3-array/src/threshold/freedmanDiaconis.js
function freedmanDiaconis_default(values, min2, max3) {
  values = map.call(values, number_default).sort(ascending_default);
  return Math.ceil((max3 - min2) / (2 * (quantile_default(values, 0.75) - quantile_default(values, 0.25)) * Math.pow(values.length, -1 / 3)));
}

// node_modules/d3-array/src/threshold/scott.js
function scott_default(values, min2, max3) {
  return Math.ceil((max3 - min2) / (3.5 * deviation_default(values) * Math.pow(values.length, -1 / 3)));
}

// node_modules/d3-array/src/max.js
function max_default(values, valueof) {
  var n = values.length, i = -1, value, max3;
  if (valueof == null) {
    while (++i < n) {
      if ((value = values[i]) != null && value >= value) {
        max3 = value;
        while (++i < n) {
          if ((value = values[i]) != null && value > max3) {
            max3 = value;
          }
        }
      }
    }
  } else {
    while (++i < n) {
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max3 = value;
        while (++i < n) {
          if ((value = valueof(values[i], i, values)) != null && value > max3) {
            max3 = value;
          }
        }
      }
    }
  }
  return max3;
}

// node_modules/d3-array/src/mean.js
function mean_default(values, valueof) {
  var n = values.length, m = n, i = -1, value, sum3 = 0;
  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = number_default(values[i])))
        sum3 += value;
      else
        --m;
    }
  } else {
    while (++i < n) {
      if (!isNaN(value = number_default(valueof(values[i], i, values))))
        sum3 += value;
      else
        --m;
    }
  }
  if (m)
    return sum3 / m;
}

// node_modules/d3-array/src/median.js
function median_default(values, valueof) {
  var n = values.length, i = -1, value, numbers = [];
  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = number_default(values[i]))) {
        numbers.push(value);
      }
    }
  } else {
    while (++i < n) {
      if (!isNaN(value = number_default(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }
  return quantile_default(numbers.sort(ascending_default), 0.5);
}

// node_modules/d3-array/src/merge.js
function merge_default(arrays) {
  var n = arrays.length, m, i = -1, j = 0, merged, array4;
  while (++i < n)
    j += arrays[i].length;
  merged = new Array(j);
  while (--n >= 0) {
    array4 = arrays[n];
    m = array4.length;
    while (--m >= 0) {
      merged[--j] = array4[m];
    }
  }
  return merged;
}

// node_modules/d3-array/src/min.js
function min_default(values, valueof) {
  var n = values.length, i = -1, value, min2;
  if (valueof == null) {
    while (++i < n) {
      if ((value = values[i]) != null && value >= value) {
        min2 = value;
        while (++i < n) {
          if ((value = values[i]) != null && min2 > value) {
            min2 = value;
          }
        }
      }
    }
  } else {
    while (++i < n) {
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min2 = value;
        while (++i < n) {
          if ((value = valueof(values[i], i, values)) != null && min2 > value) {
            min2 = value;
          }
        }
      }
    }
  }
  return min2;
}

// node_modules/d3-array/src/permute.js
function permute_default(array4, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--)
    permutes[i] = array4[indexes[i]];
  return permutes;
}

// node_modules/d3-array/src/scan.js
function scan_default(values, compare) {
  if (!(n = values.length))
    return;
  var n, i = 0, j = 0, xi, xj = values[j];
  if (compare == null)
    compare = ascending_default;
  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }
  if (compare(xj, xj) === 0)
    return j;
}

// node_modules/d3-array/src/shuffle.js
function shuffle_default(array4, i0, i1) {
  var m = (i1 == null ? array4.length : i1) - (i0 = i0 == null ? 0 : +i0), t, i;
  while (m) {
    i = Math.random() * m-- | 0;
    t = array4[m + i0];
    array4[m + i0] = array4[i + i0];
    array4[i + i0] = t;
  }
  return array4;
}

// node_modules/d3-array/src/sum.js
function sum_default(values, valueof) {
  var n = values.length, i = -1, value, sum3 = 0;
  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i])
        sum3 += value;
    }
  } else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values))
        sum3 += value;
    }
  }
  return sum3;
}

// node_modules/d3-array/src/transpose.js
function transpose_default(matrix) {
  if (!(n = matrix.length))
    return [];
  for (var i = -1, m = min_default(matrix, length), transpose = new Array(m); ++i < m; ) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n; ) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
}
function length(d) {
  return d.length;
}

// node_modules/d3-array/src/zip.js
function zip_default() {
  return transpose_default(arguments);
}

// node_modules/d3-axis/src/array.js
var slice2 = Array.prototype.slice;

// node_modules/d3-axis/src/identity.js
function identity_default2(x5) {
  return x5;
}

// node_modules/d3-axis/src/axis.js
var top = 1;
var right = 2;
var bottom = 3;
var left = 4;
var epsilon = 1e-6;
function translateX(x5) {
  return "translate(" + (x5 + 0.5) + ",0)";
}
function translateY(y5) {
  return "translate(0," + (y5 + 0.5) + ")";
}
function number(scale) {
  return function(d) {
    return +scale(d);
  };
}
function center(scale) {
  var offset = Math.max(0, scale.bandwidth() - 1) / 2;
  if (scale.round())
    offset = Math.round(offset);
  return function(d) {
    return +scale(d) + offset;
  };
}
function entering() {
  return !this.__axis;
}
function axis(orient, scale) {
  var tickArguments = [], tickValues = null, tickFormat = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, k2 = orient === top || orient === left ? -1 : 1, x5 = orient === left || orient === right ? "x" : "y", transform2 = orient === top || orient === bottom ? translateX : translateY;
  function axis2(context) {
    var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format2 = tickFormat == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity_default2 : tickFormat, spacing = Math.max(tickSizeInner, 0) + tickPadding, range2 = scale.range(), range0 = +range2[0] + 0.5, range1 = +range2[range2.length - 1] + 0.5, position = (scale.bandwidth ? center : number)(scale.copy()), selection2 = context.selection ? context.selection() : context, path2 = selection2.selectAll(".domain").data([null]), tick = selection2.selectAll(".tick").data(values, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
    path2 = path2.merge(path2.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
    tick = tick.merge(tickEnter);
    line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x5 + "2", k2 * tickSizeInner));
    text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x5, k2 * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
    if (context !== selection2) {
      path2 = path2.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);
      tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function(d) {
        return isFinite(d = position(d)) ? transform2(d) : this.getAttribute("transform");
      });
      tickEnter.attr("opacity", epsilon).attr("transform", function(d) {
        var p = this.parentNode.__axis;
        return transform2(p && isFinite(p = p(d)) ? p : position(d));
      });
    }
    tickExit.remove();
    path2.attr("d", orient === left || orient == right ? tickSizeOuter ? "M" + k2 * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k2 * tickSizeOuter : "M0.5," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k2 * tickSizeOuter + "V0.5H" + range1 + "V" + k2 * tickSizeOuter : "M" + range0 + ",0.5H" + range1);
    tick.attr("opacity", 1).attr("transform", function(d) {
      return transform2(position(d));
    });
    line.attr(x5 + "2", k2 * tickSizeInner);
    text.attr(x5, k2 * spacing).text(format2);
    selection2.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
    selection2.each(function() {
      this.__axis = position;
    });
  }
  axis2.scale = function(_) {
    return arguments.length ? (scale = _, axis2) : scale;
  };
  axis2.ticks = function() {
    return tickArguments = slice2.call(arguments), axis2;
  };
  axis2.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : slice2.call(_), axis2) : tickArguments.slice();
  };
  axis2.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : slice2.call(_), axis2) : tickValues && tickValues.slice();
  };
  axis2.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis2) : tickFormat;
  };
  axis2.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis2) : tickSizeInner;
  };
  axis2.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis2) : tickSizeOuter;
  };
  axis2.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis2) : tickPadding;
  };
  return axis2;
}
function axisTop(scale) {
  return axis(top, scale);
}
function axisRight(scale) {
  return axis(right, scale);
}
function axisBottom(scale) {
  return axis(bottom, scale);
}
function axisLeft(scale) {
  return axis(left, scale);
}

// node_modules/d3-dispatch/src/dispatch.js
var noop = {value: function() {
}};
function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t))
      throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}
function Dispatch(_) {
  this._ = _;
}
function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    return {type: t, name};
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
    if (arguments.length < 2) {
      while (++i < n)
        if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name)))
          return t;
      return;
    }
    if (callback != null && typeof callback !== "function")
      throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type)
        _[t] = set(_[t], typename.name, callback);
      else if (callback == null)
        for (t in _)
          _[t] = set(_[t], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy3 = {}, _ = this._;
    for (var t in _)
      copy3[t] = _[t].slice();
    return new Dispatch(copy3);
  },
  call: function(type2, that) {
    if ((n = arguments.length - 2) > 0)
      for (var args = new Array(n), i = 0, n, t; i < n; ++i)
        args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type2))
      throw new Error("unknown type: " + type2);
    for (t = this._[type2], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  },
  apply: function(type2, that, args) {
    if (!this._.hasOwnProperty(type2))
      throw new Error("unknown type: " + type2);
    for (var t = this._[type2], i = 0, n = t.length; i < n; ++i)
      t[i].value.apply(that, args);
  }
};
function get(type2, name) {
  for (var i = 0, n = type2.length, c4; i < n; ++i) {
    if ((c4 = type2[i]).name === name) {
      return c4.value;
    }
  }
}
function set(type2, name, callback) {
  for (var i = 0, n = type2.length; i < n; ++i) {
    if (type2[i].name === name) {
      type2[i] = noop, type2 = type2.slice(0, i).concat(type2.slice(i + 1));
      break;
    }
  }
  if (callback != null)
    type2.push({name, value: callback});
  return type2;
}
var dispatch_default = dispatch;

// node_modules/d3-selection/src/namespaces.js
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces_default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

// node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
  var prefix2 = name += "", i = prefix2.indexOf(":");
  if (i >= 0 && (prefix2 = name.slice(0, i)) !== "xmlns")
    name = name.slice(i + 1);
  return namespaces_default.hasOwnProperty(prefix2) ? {space: namespaces_default[prefix2], local: name} : name;
}

// node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator_default(name) {
  var fullname = namespace_default(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}

// node_modules/d3-selection/src/selector.js
function none() {
}
function selector_default(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

// node_modules/d3-selection/src/selection/select.js
function select_default(select) {
  if (typeof select !== "function")
    select = selector_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/selectorAll.js
function empty() {
  return [];
}
function selectorAll_default(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

// node_modules/d3-selection/src/selection/selectAll.js
function selectAll_default(select) {
  if (typeof select !== "function")
    select = selectorAll_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }
  return new Selection(subgroups, parents);
}

// node_modules/d3-selection/src/matcher.js
function matcher_default(selector) {
  return function() {
    return this.matches(selector);
  };
}

// node_modules/d3-selection/src/selection/filter.js
function filter_default(match) {
  if (typeof match !== "function")
    match = matcher_default(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/selection/sparse.js
function sparse_default(update) {
  return new Array(update.length);
}

// node_modules/d3-selection/src/selection/enter.js
function enter_default() {
  return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

// node_modules/d3-selection/src/constant.js
function constant_default2(x5) {
  return function() {
    return x5;
  };
}

// node_modules/d3-selection/src/selection/data.js
var keyPrefix = "$";
function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0, node, groupLength = group.length, dataLength = data.length;
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}
function bindKey(parent, group, enter, update, exit, data, key) {
  var i, node, nodeByKeyValue = {}, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && nodeByKeyValue[keyValues[i]] === node) {
      exit[i] = node;
    }
  }
}
function data_default(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) {
      data[++j] = d;
    });
    return data;
  }
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function")
    value = constant_default2(value);
  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j], group = groups[j], groupLength = group.length, data = value.call(parent, parent && parent.__data__, j, parents), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1)
          i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength)
          ;
        previous._next = next || null;
      }
    }
  }
  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

// node_modules/d3-selection/src/selection/exit.js
function exit_default() {
  return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
}

// node_modules/d3-selection/src/selection/join.js
function join_default(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null)
    update = onupdate(update);
  if (onexit == null)
    exit.remove();
  else
    onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

// node_modules/d3-selection/src/selection/merge.js
function merge_default2(selection2) {
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Selection(merges, this._parents);
}

// node_modules/d3-selection/src/selection/order.js
function order_default() {
  for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4)
          next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/sort.js
function sort_default(compare) {
  if (!compare)
    compare = ascending;
  function compareNode(a2, b) {
    return a2 && b ? compare(a2.__data__, b.__data__) : !a2 - !b;
  }
  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
function ascending(a2, b) {
  return a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
}

// node_modules/d3-selection/src/selection/call.js
function call_default() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

// node_modules/d3-selection/src/selection/nodes.js
function nodes_default() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() {
    nodes[++i] = this;
  });
  return nodes;
}

// node_modules/d3-selection/src/selection/node.js
function node_default() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node)
        return node;
    }
  }
  return null;
}

// node_modules/d3-selection/src/selection/size.js
function size_default() {
  var size = 0;
  this.each(function() {
    ++size;
  });
  return size;
}

// node_modules/d3-selection/src/selection/empty.js
function empty_default() {
  return !this.node();
}

// node_modules/d3-selection/src/selection/each.js
function each_default(callback) {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i])
        callback.call(node, node.__data__, i, group);
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/attr.js
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttribute(name);
    else
      this.setAttribute(name, v);
  };
}
function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.removeAttributeNS(fullname.space, fullname.local);
    else
      this.setAttributeNS(fullname.space, fullname.local, v);
  };
}
function attr_default(name, value) {
  var fullname = namespace_default(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}

// node_modules/d3-selection/src/window.js
function window_default(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}

// node_modules/d3-selection/src/selection/style.js
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      this.style.removeProperty(name);
    else
      this.style.setProperty(name, v, priority);
  };
}
function style_default(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
}

// node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null)
      delete this[name];
    else
      this[name] = v;
  };
}
function property_default(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}

// node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n)
    list.add(names[i]);
}
function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n)
    list.remove(names[i]);
}
function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}
function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}
function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}
function classed_default(name, value) {
  var names = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n)
      if (!list.contains(names[i]))
        return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}

// node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}
function text_default(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}

// node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}
function html_default(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}

// node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling)
    this.parentNode.appendChild(this);
}
function raise_default() {
  return this.each(raise);
}

// node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling)
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
  return this.each(lower);
}

// node_modules/d3-selection/src/selection/append.js
function append_default(name) {
  var create2 = typeof name === "function" ? name : creator_default(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}

// node_modules/d3-selection/src/selection/insert.js
function constantNull() {
  return null;
}
function insert_default(name, before) {
  var create2 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

// node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent)
    parent.removeChild(this);
}
function remove_default() {
  return this.each(remove);
}

// node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function clone_default(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

// node_modules/d3-selection/src/selection/datum.js
function datum_default(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

// node_modules/d3-selection/src/selection/on.js
var filterEvents = {};
var event = null;
if (typeof document !== "undefined") {
  element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}
var element;
function filterContextListener(listener, index2, group) {
  listener = contextListener(listener, index2, group);
  return function(event2) {
    var related = event2.relatedTarget;
    if (!related || related !== this && !(related.compareDocumentPosition(this) & 8)) {
      listener.call(this, event2);
    }
  };
}
function contextListener(listener, index2, group) {
  return function(event1) {
    var event0 = event;
    event = event1;
    try {
      listener.call(this, this.__data__, index2, group);
    } finally {
      event = event0;
    }
  };
}
function parseTypenames2(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0)
      name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name};
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on)
      return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i)
      on.length = i;
    else
      delete this.__on;
  };
}
function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on)
      for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.capture);
          this.addEventListener(o.type, o.listener = listener, o.capture = capture);
          o.value = value;
          return;
        }
      }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value, listener, capture};
    if (!on)
      this.__on = [o];
    else
      on.push(o);
  };
}
function on_default(typename, value, capture) {
  var typenames = parseTypenames2(typename + ""), i, n = typenames.length, t;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on)
      for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
    return;
  }
  on = value ? onAdd : onRemove;
  if (capture == null)
    capture = false;
  for (i = 0; i < n; ++i)
    this.each(on(typenames[i], value, capture));
  return this;
}
function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    event = event0;
  }
}

// node_modules/d3-selection/src/selection/dispatch.js
function dispatchEvent(node, type2, params) {
  var window2 = window_default(node), event2 = window2.CustomEvent;
  if (typeof event2 === "function") {
    event2 = new event2(type2, params);
  } else {
    event2 = window2.document.createEvent("Event");
    if (params)
      event2.initEvent(type2, params.bubbles, params.cancelable), event2.detail = params.detail;
    else
      event2.initEvent(type2, false, false);
  }
  node.dispatchEvent(event2);
}
function dispatchConstant(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params);
  };
}
function dispatchFunction(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params.apply(this, arguments));
  };
}
function dispatch_default2(type2, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type2, params));
}

// node_modules/d3-selection/src/selection/index.js
var root = [null];
function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection() {
  return new Selection([[document.documentElement]], root);
}
Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: select_default,
  selectAll: selectAll_default,
  filter: filter_default,
  data: data_default,
  enter: enter_default,
  exit: exit_default,
  join: join_default,
  merge: merge_default2,
  order: order_default,
  sort: sort_default,
  call: call_default,
  nodes: nodes_default,
  node: node_default,
  size: size_default,
  empty: empty_default,
  each: each_default,
  attr: attr_default,
  style: style_default,
  property: property_default,
  classed: classed_default,
  text: text_default,
  html: html_default,
  raise: raise_default,
  lower: lower_default,
  append: append_default,
  insert: insert_default,
  remove: remove_default,
  clone: clone_default,
  datum: datum_default,
  on: on_default,
  dispatch: dispatch_default2
};
var selection_default = selection;

// node_modules/d3-selection/src/select.js
function select_default2(selector) {
  return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
}

// node_modules/d3-selection/src/create.js
function create_default(name) {
  return select_default2(creator_default(name).call(document.documentElement));
}

// node_modules/d3-selection/src/local.js
var nextId = 0;
function local() {
  return new Local();
}
function Local() {
  this._ = "@" + (++nextId).toString(36);
}
Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id2 = this._;
    while (!(id2 in node))
      if (!(node = node.parentNode))
        return;
    return node[id2];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};

// node_modules/d3-selection/src/sourceEvent.js
function sourceEvent_default() {
  var current = event, source;
  while (source = current.sourceEvent)
    current = source;
  return current;
}

// node_modules/d3-selection/src/point.js
function point_default(node, event2) {
  var svg2 = node.ownerSVGElement || node;
  if (svg2.createSVGPoint) {
    var point6 = svg2.createSVGPoint();
    point6.x = event2.clientX, point6.y = event2.clientY;
    point6 = point6.matrixTransform(node.getScreenCTM().inverse());
    return [point6.x, point6.y];
  }
  var rect = node.getBoundingClientRect();
  return [event2.clientX - rect.left - node.clientLeft, event2.clientY - rect.top - node.clientTop];
}

// node_modules/d3-selection/src/mouse.js
function mouse_default(node) {
  var event2 = sourceEvent_default();
  if (event2.changedTouches)
    event2 = event2.changedTouches[0];
  return point_default(node, event2);
}

// node_modules/d3-selection/src/selectAll.js
function selectAll_default2(selector) {
  return typeof selector === "string" ? new Selection([document.querySelectorAll(selector)], [document.documentElement]) : new Selection([selector == null ? [] : selector], root);
}

// node_modules/d3-selection/src/touch.js
function touch_default(node, touches, identifier) {
  if (arguments.length < 3)
    identifier = touches, touches = sourceEvent_default().changedTouches;
  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return point_default(node, touch);
    }
  }
  return null;
}

// node_modules/d3-selection/src/touches.js
function touches_default(node, touches) {
  if (touches == null)
    touches = sourceEvent_default().touches;
  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = point_default(node, touches[i]);
  }
  return points;
}

// node_modules/d3-drag/src/noevent.js
function nopropagation() {
  event.stopImmediatePropagation();
}
function noevent_default() {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-drag/src/nodrag.js
function nodrag_default(view) {
  var root3 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", noevent_default, true);
  if ("onselectstart" in root3) {
    selection2.on("selectstart.drag", noevent_default, true);
  } else {
    root3.__noselect = root3.style.MozUserSelect;
    root3.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root3 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent_default, true);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root3) {
    selection2.on("selectstart.drag", null);
  } else {
    root3.style.MozUserSelect = root3.__noselect;
    delete root3.__noselect;
  }
}

// node_modules/d3-drag/src/constant.js
function constant_default3(x5) {
  return function() {
    return x5;
  };
}

// node_modules/d3-drag/src/event.js
function DragEvent(target, type2, subject, id2, active, x5, y5, dx, dy, dispatch2) {
  this.target = target;
  this.type = type2;
  this.subject = subject;
  this.identifier = id2;
  this.active = active;
  this.x = x5;
  this.y = y5;
  this.dx = dx;
  this.dy = dy;
  this._ = dispatch2;
}
DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

// node_modules/d3-drag/src/drag.js
function defaultFilter() {
  return !event.ctrlKey && !event.button;
}
function defaultContainer() {
  return this.parentNode;
}
function defaultSubject(d) {
  return d == null ? {x: event.x, y: event.y} : d;
}
function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function drag_default() {
  var filter = defaultFilter, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = dispatch_default("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
  function drag(selection2) {
    selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function mousedowned() {
    if (touchending || !filter.apply(this, arguments))
      return;
    var gesture = beforestart("mouse", container.apply(this, arguments), mouse_default, this, arguments);
    if (!gesture)
      return;
    select_default2(event.view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
    nodrag_default(event.view);
    nopropagation();
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start");
  }
  function mousemoved() {
    noevent_default();
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag");
  }
  function mouseupped() {
    select_default2(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(event.view, mousemoving);
    noevent_default();
    gestures.mouse("end");
  }
  function touchstarted() {
    if (!filter.apply(this, arguments))
      return;
    var touches = event.changedTouches, c4 = container.apply(this, arguments), n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(touches[i].identifier, c4, touch_default, this, arguments)) {
        nopropagation();
        gesture("start");
      }
    }
  }
  function touchmoved() {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        noevent_default();
        gesture("drag");
      }
    }
  }
  function touchended() {
    var touches = event.changedTouches, n = touches.length, i, gesture;
    if (touchending)
      clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, 500);
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        nopropagation();
        gesture("end");
      }
    }
  }
  function beforestart(id2, container2, point6, that, args) {
    var p = point6(container2, id2), s2, dx, dy, sublisteners = listeners.copy();
    if (!customEvent(new DragEvent(drag, "beforestart", s2, id2, active, p[0], p[1], 0, 0, sublisteners), function() {
      if ((event.subject = s2 = subject.apply(that, args)) == null)
        return false;
      dx = s2.x - p[0] || 0;
      dy = s2.y - p[1] || 0;
      return true;
    }))
      return;
    return function gesture(type2) {
      var p02 = p, n;
      switch (type2) {
        case "start":
          gestures[id2] = gesture, n = active++;
          break;
        case "end":
          delete gestures[id2], --active;
        case "drag":
          p = point6(container2, id2), n = active;
          break;
      }
      customEvent(new DragEvent(drag, type2, s2, id2, n, p[0] + dx, p[1] + dy, p[0] - p02[0], p[1] - p02[1], sublisteners), sublisteners.apply, sublisteners, [type2, that, args]);
    };
  }
  drag.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant_default3(!!_), drag) : filter;
  };
  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : constant_default3(_), drag) : container;
  };
  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : constant_default3(_), drag) : subject;
  };
  drag.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default3(!!_), drag) : touchable;
  };
  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };
  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };
  return drag;
}

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$");
var reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$");
var reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$");
var reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$");
var reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$");
var reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m, l;
  format2 = (format2 + "").trim().toLowerCase();
  return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a2) {
  if (a2 <= 0)
    r = g = b = NaN;
  return new Rgb(r, g, b, a2);
}
function rgbConvert(o) {
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter: function(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
  },
  darker: function(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}
function rgb_formatRgb() {
  var a2 = this.opacity;
  a2 = isNaN(a2) ? 1 : Math.max(0, Math.min(1, a2));
  return (a2 === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a2 === 1 ? ")" : ", " + a2 + ")");
}
function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s2, l, a2) {
  if (a2 <= 0)
    h = s2 = l = NaN;
  else if (l <= 0 || l >= 1)
    h = s2 = NaN;
  else if (s2 <= 0)
    h = NaN;
  return new Hsl(h, s2, l, a2);
}
function hslConvert(o) {
  if (o instanceof Hsl)
    return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Hsl();
  if (o instanceof Hsl)
    return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min2 = Math.min(r, g, b), max3 = Math.max(r, g, b), h = NaN, s2 = max3 - min2, l = (max3 + min2) / 2;
  if (s2) {
    if (r === max3)
      h = (g - b) / s2 + (g < b) * 6;
    else if (g === max3)
      h = (b - r) / s2 + 2;
    else
      h = (r - g) / s2 + 4;
    s2 /= l < 0.5 ? max3 + min2 : 2 - max3 - min2;
    h *= 60;
  } else {
    s2 = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s2, l, o.opacity);
}
function hsl(h, s2, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s2, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s2, l, opacity) {
  this.h = +h;
  this.s = +s2;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter: function(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Hsl(this.h, this.s, this.l * k2, this.opacity);
  },
  darker: function(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Hsl(this.h, this.s, this.l * k2, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360, s2 = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s2, m1 = 2 * l - m2;
    return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a2 = this.opacity;
    a2 = isNaN(a2) ? 1 : Math.max(0, Math.min(1, a2));
    return (a2 === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a2 === 1 ? ")" : ", " + a2 + ")");
  }
}));
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

// node_modules/d3-color/src/math.js
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;

// node_modules/d3-color/src/lab.js
var K = 18;
var Xn = 0.96422;
var Yn = 1;
var Zn = 0.82521;
var t0 = 4 / 29;
var t1 = 6 / 29;
var t2 = 3 * t1 * t1;
var t3 = t1 * t1 * t1;
function labConvert(o) {
  if (o instanceof Lab)
    return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl)
    return hcl2lab(o);
  if (!(o instanceof Rgb))
    o = rgbConvert(o);
  var r = rgb2lrgb(o.r), g = rgb2lrgb(o.g), b = rgb2lrgb(o.b), y5 = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x5, z;
  if (r === g && g === b)
    x5 = z = y5;
  else {
    x5 = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y5 - 16, 500 * (x5 - y5), 200 * (y5 - z), o.opacity);
}
function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}
function lab(l, a2, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a2, b, opacity == null ? 1 : opacity);
}
function Lab(l, a2, b, opacity) {
  this.l = +l;
  this.a = +a2;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Lab, lab, extend(Color, {
  brighter: function(k2) {
    return new Lab(this.l + K * (k2 == null ? 1 : k2), this.a, this.b, this.opacity);
  },
  darker: function(k2) {
    return new Lab(this.l - K * (k2 == null ? 1 : k2), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y5 = (this.l + 16) / 116, x5 = isNaN(this.a) ? y5 : y5 + this.a / 500, z = isNaN(this.b) ? y5 : y5 - this.b / 200;
    x5 = Xn * lab2xyz(x5);
    y5 = Yn * lab2xyz(y5);
    z = Zn * lab2xyz(z);
    return new Rgb(lrgb2rgb(3.1338561 * x5 - 1.6168667 * y5 - 0.4906146 * z), lrgb2rgb(-0.9787684 * x5 + 1.9161415 * y5 + 0.033454 * z), lrgb2rgb(0.0719453 * x5 - 0.2289914 * y5 + 1.4052427 * z), this.opacity);
  }
}));
function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}
function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}
function lrgb2rgb(x5) {
  return 255 * (x5 <= 31308e-7 ? 12.92 * x5 : 1.055 * Math.pow(x5, 1 / 2.4) - 0.055);
}
function rgb2lrgb(x5) {
  return (x5 /= 255) <= 0.04045 ? x5 / 12.92 : Math.pow((x5 + 0.055) / 1.055, 2.4);
}
function hclConvert(o) {
  if (o instanceof Hcl)
    return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab))
    o = labConvert(o);
  if (o.a === 0 && o.b === 0)
    return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * rad2deg;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}
function lch(l, c4, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c4, l, opacity == null ? 1 : opacity);
}
function hcl(h, c4, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c4, l, opacity == null ? 1 : opacity);
}
function Hcl(h, c4, l, opacity) {
  this.h = +h;
  this.c = +c4;
  this.l = +l;
  this.opacity = +opacity;
}
function hcl2lab(o) {
  if (isNaN(o.h))
    return new Lab(o.l, 0, 0, o.opacity);
  var h = o.h * deg2rad;
  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}
define_default(Hcl, hcl, extend(Color, {
  brighter: function(k2) {
    return new Hcl(this.h, this.c, this.l + K * (k2 == null ? 1 : k2), this.opacity);
  },
  darker: function(k2) {
    return new Hcl(this.h, this.c, this.l - K * (k2 == null ? 1 : k2), this.opacity);
  },
  rgb: function() {
    return hcl2lab(this).rgb();
  }
}));

// node_modules/d3-color/src/cubehelix.js
var A = -0.14861;
var B = 1.78277;
var C = -0.29227;
var D = -0.90649;
var E = 1.97294;
var ED = E * D;
var EB = E * B;
var BC_DA = B * C - D * A;
function cubehelixConvert(o) {
  if (o instanceof Cubehelix)
    return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Rgb))
    o = rgbConvert(o);
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB), bl = b - l, k2 = (E * (g - l) - C * bl) / D, s2 = Math.sqrt(k2 * k2 + bl * bl) / (E * l * (1 - l)), h = s2 ? Math.atan2(k2, bl) * rad2deg - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s2, l, o.opacity);
}
function cubehelix(h, s2, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s2, l, opacity == null ? 1 : opacity);
}
function Cubehelix(h, s2, l, opacity) {
  this.h = +h;
  this.s = +s2;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Cubehelix, cubehelix, extend(Color, {
  brighter: function(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Cubehelix(this.h, this.s, this.l * k2, this.opacity);
  },
  darker: function(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Cubehelix(this.h, this.s, this.l * k2, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad, l = +this.l, a2 = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh2 = Math.cos(h), sinh2 = Math.sin(h);
    return new Rgb(255 * (l + a2 * (A * cosh2 + B * sinh2)), 255 * (l + a2 * (C * cosh2 + D * sinh2)), 255 * (l + a2 * (E * cosh2)), this.opacity);
  }
}));

// node_modules/d3-interpolate/src/basis.js
function basis(t13, v0, v1, v2, v3) {
  var t22 = t13 * t13, t32 = t22 * t13;
  return ((1 - 3 * t13 + 3 * t22 - t32) * v0 + (4 - 6 * t22 + 3 * t32) * v1 + (1 + 3 * t13 + 3 * t22 - 3 * t32) * v2 + t32 * v3) / 6;
}
function basis_default(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/constant.js
function constant_default4(x5) {
  return function() {
    return x5;
  };
}

// node_modules/d3-interpolate/src/color.js
function linear(a2, d) {
  return function(t) {
    return a2 + t * d;
  };
}
function exponential(a2, b, y5) {
  return a2 = Math.pow(a2, y5), b = Math.pow(b, y5) - a2, y5 = 1 / y5, function(t) {
    return Math.pow(a2 + t * b, y5);
  };
}
function hue(a2, b) {
  var d = b - a2;
  return d ? linear(a2, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant_default4(isNaN(a2) ? b : a2);
}
function gamma(y5) {
  return (y5 = +y5) === 1 ? nogamma : function(a2, b) {
    return b - a2 ? exponential(a2, b, y5) : constant_default4(isNaN(a2) ? b : a2);
  };
}
function nogamma(a2, b) {
  var d = b - a2;
  return d ? linear(a2, d) : constant_default4(isNaN(a2) ? b : a2);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y5) {
  var color2 = gamma(y5);
  function rgb2(start2, end) {
    var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.r = r(t);
      start2.g = g(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
    for (i = 0; i < n; ++i) {
      color2 = rgb(colors[i]);
      r[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// node_modules/d3-interpolate/src/numberArray.js
function numberArray_default(a2, b) {
  if (!b)
    b = [];
  var n = a2 ? Math.min(b.length, a2.length) : 0, c4 = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i)
      c4[i] = a2[i] * (1 - t) + b[i] * t;
    return c4;
  };
}
function isNumberArray(x5) {
  return ArrayBuffer.isView(x5) && !(x5 instanceof DataView);
}

// node_modules/d3-interpolate/src/array.js
function array_default(a2, b) {
  return (isNumberArray(b) ? numberArray_default : genericArray)(a2, b);
}
function genericArray(a2, b) {
  var nb = b ? b.length : 0, na = a2 ? Math.min(nb, a2.length) : 0, x5 = new Array(na), c4 = new Array(nb), i;
  for (i = 0; i < na; ++i)
    x5[i] = value_default(a2[i], b[i]);
  for (; i < nb; ++i)
    c4[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i)
      c4[i] = x5[i](t);
    return c4;
  };
}

// node_modules/d3-interpolate/src/date.js
function date_default(a2, b) {
  var d = new Date();
  return a2 = +a2, b = +b, function(t) {
    return d.setTime(a2 * (1 - t) + b * t), d;
  };
}

// node_modules/d3-interpolate/src/number.js
function number_default2(a2, b) {
  return a2 = +a2, b = +b, function(t) {
    return a2 * (1 - t) + b * t;
  };
}

// node_modules/d3-interpolate/src/object.js
function object_default(a2, b) {
  var i = {}, c4 = {}, k2;
  if (a2 === null || typeof a2 !== "object")
    a2 = {};
  if (b === null || typeof b !== "object")
    b = {};
  for (k2 in b) {
    if (k2 in a2) {
      i[k2] = value_default(a2[k2], b[k2]);
    } else {
      c4[k2] = b[k2];
    }
  }
  return function(t) {
    for (k2 in i)
      c4[k2] = i[k2](t);
    return c4;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a2, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s2 = [], q = [];
  a2 = a2 + "", b = b + "";
  while ((am = reA.exec(a2)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s2[i])
        s2[i] += bs;
      else
        s2[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s2[i])
        s2[i] += bm;
      else
        s2[++i] = bm;
    } else {
      s2[++i] = null;
      q.push({i, x: number_default2(am, bm)});
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s2[i])
      s2[i] += bs;
    else
      s2[++i] = bs;
  }
  return s2.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2)
      s2[(o = q[i2]).i] = o.x(t);
    return s2.join("");
  });
}

// node_modules/d3-interpolate/src/value.js
function value_default(a2, b) {
  var t = typeof b, c4;
  return b == null || t === "boolean" ? constant_default4(b) : (t === "number" ? number_default2 : t === "string" ? (c4 = color(b)) ? (b = c4, rgb_default) : string_default : b instanceof color ? rgb_default : b instanceof Date ? date_default : isNumberArray(b) ? numberArray_default : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object_default : number_default2)(a2, b);
}

// node_modules/d3-interpolate/src/discrete.js
function discrete_default(range2) {
  var n = range2.length;
  return function(t) {
    return range2[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

// node_modules/d3-interpolate/src/hue.js
function hue_default(a2, b) {
  var i = hue(+a2, +b);
  return function(t) {
    var x5 = i(t);
    return x5 - 360 * Math.floor(x5 / 360);
  };
}

// node_modules/d3-interpolate/src/round.js
function round_default(a2, b) {
  return a2 = +a2, b = +b, function(t) {
    return Math.round(a2 * (1 - t) + b * t);
  };
}

// node_modules/d3-interpolate/src/transform/decompose.js
var degrees = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a2, b, c4, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a2 * a2 + b * b))
    a2 /= scaleX, b /= scaleX;
  if (skewX = a2 * c4 + b * d)
    c4 -= a2 * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c4 * c4 + d * d))
    c4 /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a2 * d < b * c4)
    a2 = -a2, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a2) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}

// node_modules/d3-interpolate/src/transform/parse.js
var cssNode;
var cssRoot;
var cssView;
var svgNode;
function parseCss(value) {
  if (value === "none")
    return identity;
  if (!cssNode)
    cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return decompose_default(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}
function parseSvg(value) {
  if (value == null)
    return identity;
  if (!svgNode)
    svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate()))
    return identity;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s2) {
    return s2.length ? s2.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s2, q) {
    if (xa !== xb || ya !== yb) {
      var i = s2.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: number_default2(xa, xb)}, {i: i - 2, x: number_default2(ya, yb)});
    } else if (xb || yb) {
      s2.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a2, b, s2, q) {
    if (a2 !== b) {
      if (a2 - b > 180)
        b += 360;
      else if (b - a2 > 180)
        a2 += 360;
      q.push({i: s2.push(pop(s2) + "rotate(", null, degParen) - 2, x: number_default2(a2, b)});
    } else if (b) {
      s2.push(pop(s2) + "rotate(" + b + degParen);
    }
  }
  function skewX(a2, b, s2, q) {
    if (a2 !== b) {
      q.push({i: s2.push(pop(s2) + "skewX(", null, degParen) - 2, x: number_default2(a2, b)});
    } else if (b) {
      s2.push(pop(s2) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s2, q) {
    if (xa !== xb || ya !== yb) {
      var i = s2.push(pop(s2) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: number_default2(xa, xb)}, {i: i - 2, x: number_default2(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s2.push(pop(s2) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a2, b) {
    var s2 = [], q = [];
    a2 = parse(a2), b = parse(b);
    translate(a2.translateX, a2.translateY, b.translateX, b.translateY, s2, q);
    rotate(a2.rotate, b.rotate, s2, q);
    skewX(a2.skewX, b.skewX, s2, q);
    scale(a2.scaleX, a2.scaleY, b.scaleX, b.scaleY, s2, q);
    a2 = b = null;
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n)
        s2[(o = q[i]).i] = o.x(t);
      return s2.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// node_modules/d3-interpolate/src/zoom.js
var rho = Math.SQRT2;
var rho2 = 2;
var rho4 = 4;
var epsilon2 = 1e-12;
function cosh(x5) {
  return ((x5 = Math.exp(x5)) + 1 / x5) / 2;
}
function sinh(x5) {
  return ((x5 = Math.exp(x5)) - 1 / x5) / 2;
}
function tanh(x5) {
  return ((x5 = Math.exp(2 * x5)) - 1) / (x5 + 1);
}
function zoom_default(p02, p1) {
  var ux0 = p02[0], uy0 = p02[1], w0 = p02[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    };
  } else {
    var d1 = Math.sqrt(d2), b02 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b12 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b02 * b02 + 1) - b02), r1 = Math.log(Math.sqrt(b12 * b12 + 1) - b12);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s2 = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s2 + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s2 + r0)
      ];
    };
  }
  i.duration = S * 1e3;
  return i;
}

// node_modules/d3-interpolate/src/hsl.js
function hsl2(hue2) {
  return function(start2, end) {
    var h = hue2((start2 = hsl(start2)).h, (end = hsl(end)).h), s2 = nogamma(start2.s, end.s), l = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.h = h(t);
      start2.s = s2(t);
      start2.l = l(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  };
}
var hsl_default = hsl2(hue);
var hslLong = hsl2(nogamma);

// node_modules/d3-interpolate/src/lab.js
function lab2(start2, end) {
  var l = nogamma((start2 = lab(start2)).l, (end = lab(end)).l), a2 = nogamma(start2.a, end.a), b = nogamma(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
  return function(t) {
    start2.l = l(t);
    start2.a = a2(t);
    start2.b = b(t);
    start2.opacity = opacity(t);
    return start2 + "";
  };
}

// node_modules/d3-interpolate/src/hcl.js
function hcl2(hue2) {
  return function(start2, end) {
    var h = hue2((start2 = hcl(start2)).h, (end = hcl(end)).h), c4 = nogamma(start2.c, end.c), l = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
    return function(t) {
      start2.h = h(t);
      start2.c = c4(t);
      start2.l = l(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  };
}
var hcl_default = hcl2(hue);
var hclLong = hcl2(nogamma);

// node_modules/d3-interpolate/src/cubehelix.js
function cubehelix2(hue2) {
  return function cubehelixGamma(y5) {
    y5 = +y5;
    function cubehelix3(start2, end) {
      var h = hue2((start2 = cubehelix(start2)).h, (end = cubehelix(end)).h), s2 = nogamma(start2.s, end.s), l = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
      return function(t) {
        start2.h = h(t);
        start2.s = s2(t);
        start2.l = l(Math.pow(t, y5));
        start2.opacity = opacity(t);
        return start2 + "";
      };
    }
    cubehelix3.gamma = cubehelixGamma;
    return cubehelix3;
  }(1);
}
var cubehelix_default = cubehelix2(hue);
var cubehelixLong = cubehelix2(nogamma);

// node_modules/d3-interpolate/src/piecewise.js
function piecewise(interpolate, values) {
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n)
    I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i2 = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i2](t - i2);
  };
}

// node_modules/d3-interpolate/src/quantize.js
function quantize_default(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i)
    samples[i] = interpolator(i / (n - 1));
  return samples;
}

// node_modules/d3-timer/src/timer.js
var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1e3;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail)
        taskTail._next = this;
      else
        taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now();
  ++frame;
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0)
      t._call.call(null, e);
    t = t._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now2 = clock.now(), delay = now2 - clockLast;
  if (delay > pokeDelay)
    clockSkew -= delay, clockLast = now2;
}
function nap() {
  var t03, t13 = taskHead, t22, time = Infinity;
  while (t13) {
    if (t13._call) {
      if (time > t13._time)
        time = t13._time;
      t03 = t13, t13 = t13._next;
    } else {
      t22 = t13._next, t13._next = null;
      t13 = t03 ? t03._next = t22 : taskHead = t22;
    }
  }
  taskTail = t03;
  sleep(time);
}
function sleep(time) {
  if (frame)
    return;
  if (timeout)
    timeout = clearTimeout(timeout);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity)
      timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval)
      interval = clearInterval(interval);
  } else {
    if (!interval)
      clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

// node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay, time) {
  var t = new Timer();
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

// node_modules/d3-timer/src/interval.js
function interval_default(callback, delay, time) {
  var t = new Timer(), total = delay;
  if (delay == null)
    return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? now() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
}

// node_modules/d3-transition/src/transition/schedule.js
var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule_default(node, name, id2, index2, group, timing) {
  var schedules = node.__transition;
  if (!schedules)
    node.__transition = {};
  else if (id2 in schedules)
    return;
  create(node, id2, {
    name,
    index: index2,
    group,
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > CREATED)
    throw new Error("too late; already scheduled");
  return schedule;
}
function set2(node, id2) {
  var schedule = get2(node, id2);
  if (schedule.state > STARTED)
    throw new Error("too late; already running");
  return schedule;
}
function get2(node, id2) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id2]))
    throw new Error("transition not found");
  return schedule;
}
function create(node, id2, self) {
  var schedules = node.__transition, tween;
  schedules[id2] = self;
  self.timer = timer(schedule, 0, self.time);
  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start2, self.delay, self.time);
    if (self.delay <= elapsed)
      start2(elapsed - self.delay);
  }
  function start2(elapsed) {
    var i, j, n, o;
    if (self.state !== SCHEDULED)
      return stop();
    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name)
        continue;
      if (o.state === STARTED)
        return timeout_default(start2);
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      } else if (+i < id2) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }
    timeout_default(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING)
      return;
    self.state = STARTED;
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }
  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
    while (++i < n) {
      tween[i].call(node, t);
    }
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }
  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id2];
    for (var i in schedules)
      return;
    delete node.__transition;
  }
}

// node_modules/d3-transition/src/interrupt.js
function interrupt_default(node, name) {
  var schedules = node.__transition, schedule, active, empty3 = true, i;
  if (!schedules)
    return;
  name = name == null ? null : name + "";
  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) {
      empty3 = false;
      continue;
    }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }
  if (empty3)
    delete node.__transition;
}

// node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default2(name) {
  return this.each(function() {
    interrupt_default(this, name);
  });
}

// node_modules/d3-transition/src/transition/tween.js
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }
    schedule.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function")
    throw new Error();
  return function() {
    var schedule = set2(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name, value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n)
        tween1.push(t);
    }
    schedule.tween = tween1;
  };
}
function tween_default(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get2(this.node(), id2).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule = set2(this, id2);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get2(node, id2).value[name];
  };
}

// node_modules/d3-transition/src/transition/interpolate.js
function interpolate_default(a2, b) {
  var c4;
  return (typeof b === "number" ? number_default2 : b instanceof color ? rgb_default : (c4 = color(b)) ? (b = c4, rgb_default) : string_default)(a2, b);
}

// node_modules/d3-transition/src/transition/attr.js
function attrRemove2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrConstantNS2(fullname, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attrFunctionNS2(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null)
      return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attr_default2(name, value) {
  var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value));
}

// node_modules/d3-transition/src/transition/attrTween.js
function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}
function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}
function attrTweenNS(fullname, value) {
  var t03, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t03 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t03;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t03, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t03 = (i0 = i) && attrInterpolate(name, i);
    return t03;
  }
  tween._value = value;
  return tween;
}
function attrTween_default(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  var fullname = namespace_default(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

// node_modules/d3-transition/src/transition/delay.js
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function delay_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
}

// node_modules/d3-transition/src/transition/duration.js
function durationFunction(id2, value) {
  return function() {
    set2(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set2(this, id2).duration = value;
  };
}
function duration_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
}

// node_modules/d3-transition/src/transition/ease.js
function easeConstant(id2, value) {
  if (typeof value !== "function")
    throw new Error();
  return function() {
    set2(this, id2).ease = value;
  };
}
function ease_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
}

// node_modules/d3-transition/src/transition/filter.js
function filter_default2(match) {
  if (typeof match !== "function")
    match = matcher_default(match);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/merge.js
function merge_default3(transition2) {
  if (transition2._id !== this._id)
    throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }
  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/on.js
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0)
      t = t.slice(0, i);
    return !t || t === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set2;
  return function() {
    var schedule = sit(this, id2), on = schedule.on;
    if (on !== on0)
      (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}
function on_default2(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}

// node_modules/d3-transition/src/transition/remove.js
function removeFunction(id2) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition)
      if (+i !== id2)
        return;
    if (parent)
      parent.removeChild(this);
  };
}
function remove_default2() {
  return this.on("end.remove", removeFunction(this._id));
}

// node_modules/d3-transition/src/transition/select.js
function select_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function")
    select = selector_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node)
          subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule_default(subgroup[i], name, id2, i, subgroup, get2(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}

// node_modules/d3-transition/src/transition/selectAll.js
function selectAll_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function")
    select = selectorAll_default(select);
  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit2 = get2(node, id2), k2 = 0, l = children.length; k2 < l; ++k2) {
          if (child = children[k2]) {
            schedule_default(child, name, id2, k2, children, inherit2);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}

// node_modules/d3-transition/src/transition/selection.js
var Selection2 = selection_default.prototype.constructor;
function selection_default2() {
  return new Selection2(this._groups, this._parents);
}

// node_modules/d3-transition/src/transition/style.js
function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}
function styleRemove2(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function styleFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null)
      string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event2 = "end." + key, remove2;
  return function() {
    var schedule = set2(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
    if (on !== on0 || listener0 !== listener)
      (on1 = (on0 = on).copy()).on(event2, listener0 = listener);
    schedule.on = on1;
  };
}
function style_default2(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
  return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i, value), priority).on("end.style." + name, null);
}

// node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}
function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}
function styleTween_default(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

// node_modules/d3-transition/src/transition/text.js
function textConstant2(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function text_default2(value) {
  return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
}

// node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}
function textTween(value) {
  var t03, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0)
      t03 = (i0 = i) && textInterpolate(i);
    return t03;
  }
  tween._value = value;
  return tween;
}
function textTween_default(value) {
  var key = "text";
  if (arguments.length < 1)
    return (key = this.tween(key)) && key._value;
  if (value == null)
    return this.tween(key, null);
  if (typeof value !== "function")
    throw new Error();
  return this.tween(key, textTween(value));
}

// node_modules/d3-transition/src/transition/transition.js
function transition_default() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit2 = get2(node, id0);
        schedule_default(node, name, id1, i, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name, id1);
}

// node_modules/d3-transition/src/transition/end.js
function end_default() {
  var on0, on1, that = this, id2 = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject}, end = {value: function() {
      if (--size === 0)
        resolve();
    }};
    that.each(function() {
      var schedule = set2(this, id2), on = schedule.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule.on = on1;
    });
  });
}

// node_modules/d3-transition/src/transition/index.js
var id = 0;
function Transition(groups, parents, name, id2) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function transition(name) {
  return selection_default().transition(name);
}
function newId() {
  return ++id;
}
var selection_prototype = selection_default.prototype;
Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: select_default3,
  selectAll: selectAll_default3,
  filter: filter_default2,
  merge: merge_default3,
  selection: selection_default2,
  transition: transition_default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: on_default2,
  attr: attr_default2,
  attrTween: attrTween_default,
  style: style_default2,
  styleTween: styleTween_default,
  text: text_default2,
  textTween: textTween_default,
  remove: remove_default2,
  tween: tween_default,
  delay: delay_default,
  duration: duration_default,
  ease: ease_default,
  end: end_default
};

// node_modules/d3-ease/src/linear.js
function linear2(t) {
  return +t;
}

// node_modules/d3-ease/src/quad.js
function quadIn(t) {
  return t * t;
}
function quadOut(t) {
  return t * (2 - t);
}
function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}

// node_modules/d3-ease/src/cubic.js
function cubicIn(t) {
  return t * t * t;
}
function cubicOut(t) {
  return --t * t * t + 1;
}
function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

// node_modules/d3-ease/src/poly.js
var exponent = 3;
var polyIn = function custom(e) {
  e = +e;
  function polyIn2(t) {
    return Math.pow(t, e);
  }
  polyIn2.exponent = custom;
  return polyIn2;
}(exponent);
var polyOut = function custom2(e) {
  e = +e;
  function polyOut2(t) {
    return 1 - Math.pow(1 - t, e);
  }
  polyOut2.exponent = custom2;
  return polyOut2;
}(exponent);
var polyInOut = function custom3(e) {
  e = +e;
  function polyInOut2(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }
  polyInOut2.exponent = custom3;
  return polyInOut2;
}(exponent);

// node_modules/d3-ease/src/sin.js
var pi = Math.PI;
var halfPi = pi / 2;
function sinIn(t) {
  return +t === 1 ? 1 : 1 - Math.cos(t * halfPi);
}
function sinOut(t) {
  return Math.sin(t * halfPi);
}
function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}

// node_modules/d3-ease/src/math.js
function tpmt(x5) {
  return (Math.pow(2, -10 * x5) - 9765625e-10) * 1.0009775171065494;
}

// node_modules/d3-ease/src/exp.js
function expIn(t) {
  return tpmt(1 - +t);
}
function expOut(t) {
  return 1 - tpmt(t);
}
function expInOut(t) {
  return ((t *= 2) <= 1 ? tpmt(1 - t) : 2 - tpmt(t - 1)) / 2;
}

// node_modules/d3-ease/src/circle.js
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}
function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}
function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}

// node_modules/d3-ease/src/bounce.js
var b1 = 4 / 11;
var b2 = 6 / 11;
var b3 = 8 / 11;
var b4 = 3 / 4;
var b5 = 9 / 11;
var b6 = 10 / 11;
var b7 = 15 / 16;
var b8 = 21 / 22;
var b9 = 63 / 64;
var b0 = 1 / b1 / b1;
function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}
function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}
function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}

// node_modules/d3-ease/src/back.js
var overshoot = 1.70158;
var backIn = function custom4(s2) {
  s2 = +s2;
  function backIn2(t) {
    return (t = +t) * t * (s2 * (t - 1) + t);
  }
  backIn2.overshoot = custom4;
  return backIn2;
}(overshoot);
var backOut = function custom5(s2) {
  s2 = +s2;
  function backOut2(t) {
    return --t * t * ((t + 1) * s2 + t) + 1;
  }
  backOut2.overshoot = custom5;
  return backOut2;
}(overshoot);
var backInOut = function custom6(s2) {
  s2 = +s2;
  function backInOut2(t) {
    return ((t *= 2) < 1 ? t * t * ((s2 + 1) * t - s2) : (t -= 2) * t * ((s2 + 1) * t + s2) + 2) / 2;
  }
  backInOut2.overshoot = custom6;
  return backInOut2;
}(overshoot);

// node_modules/d3-ease/src/elastic.js
var tau = 2 * Math.PI;
var amplitude = 1;
var period = 0.3;
var elasticIn = function custom7(a2, p) {
  var s2 = Math.asin(1 / (a2 = Math.max(1, a2))) * (p /= tau);
  function elasticIn2(t) {
    return a2 * tpmt(- --t) * Math.sin((s2 - t) / p);
  }
  elasticIn2.amplitude = function(a3) {
    return custom7(a3, p * tau);
  };
  elasticIn2.period = function(p2) {
    return custom7(a2, p2);
  };
  return elasticIn2;
}(amplitude, period);
var elasticOut = function custom8(a2, p) {
  var s2 = Math.asin(1 / (a2 = Math.max(1, a2))) * (p /= tau);
  function elasticOut2(t) {
    return 1 - a2 * tpmt(t = +t) * Math.sin((t + s2) / p);
  }
  elasticOut2.amplitude = function(a3) {
    return custom8(a3, p * tau);
  };
  elasticOut2.period = function(p2) {
    return custom8(a2, p2);
  };
  return elasticOut2;
}(amplitude, period);
var elasticInOut = function custom9(a2, p) {
  var s2 = Math.asin(1 / (a2 = Math.max(1, a2))) * (p /= tau);
  function elasticInOut2(t) {
    return ((t = t * 2 - 1) < 0 ? a2 * tpmt(-t) * Math.sin((s2 - t) / p) : 2 - a2 * tpmt(t) * Math.sin((s2 + t) / p)) / 2;
  }
  elasticInOut2.amplitude = function(a3) {
    return custom9(a3, p * tau);
  };
  elasticInOut2.period = function(p2) {
    return custom9(a2, p2);
  };
  return elasticInOut2;
}(amplitude, period);

// node_modules/d3-transition/src/selection/transition.js
var defaultTiming = {
  time: null,
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = now(), defaultTiming;
    }
  }
  return timing;
}
function transition_default2(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule_default(node, name, id2, i, group, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups, this._parents, name, id2);
}

// node_modules/d3-transition/src/selection/index.js
selection_default.prototype.interrupt = interrupt_default2;
selection_default.prototype.transition = transition_default2;

// node_modules/d3-transition/src/active.js
var root2 = [null];
function active_default(node, name) {
  var schedules = node.__transition, schedule, i;
  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > SCHEDULED && schedule.name === name) {
        return new Transition([[node]], root2, name, +i);
      }
    }
  }
  return null;
}

// node_modules/d3-brush/src/constant.js
function constant_default5(x5) {
  return function() {
    return x5;
  };
}

// node_modules/d3-brush/src/event.js
function event_default(target, type2, selection2) {
  this.target = target;
  this.type = type2;
  this.selection = selection2;
}

// node_modules/d3-brush/src/noevent.js
function nopropagation2() {
  event.stopImmediatePropagation();
}
function noevent_default2() {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-brush/src/brush.js
var MODE_DRAG = {name: "drag"};
var MODE_SPACE = {name: "space"};
var MODE_HANDLE = {name: "handle"};
var MODE_CENTER = {name: "center"};
function number1(e) {
  return [+e[0], +e[1]];
}
function number2(e) {
  return [number1(e[0]), number1(e[1])];
}
function toucher(identifier) {
  return function(target) {
    return touch_default(target, event.touches, identifier);
  };
}
var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function(x5, e) {
    return x5 == null ? null : [[+x5[0], e[0][1]], [+x5[1], e[1][1]]];
  },
  output: function(xy) {
    return xy && [xy[0][0], xy[1][0]];
  }
};
var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y5, e) {
    return y5 == null ? null : [[e[0][0], +y5[0]], [e[1][0], +y5[1]]];
  },
  output: function(xy) {
    return xy && [xy[0][1], xy[1][1]];
  }
};
var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
  input: function(xy) {
    return xy == null ? null : number2(xy);
  },
  output: function(xy) {
    return xy;
  }
};
var cursors = {
  overlay: "crosshair",
  selection: "move",
  n: "ns-resize",
  e: "ew-resize",
  s: "ns-resize",
  w: "ew-resize",
  nw: "nwse-resize",
  ne: "nesw-resize",
  se: "nwse-resize",
  sw: "nesw-resize"
};
var flipX = {
  e: "w",
  w: "e",
  nw: "ne",
  ne: "nw",
  se: "sw",
  sw: "se"
};
var flipY = {
  n: "s",
  s: "n",
  nw: "sw",
  ne: "se",
  se: "ne",
  sw: "nw"
};
var signsX = {
  overlay: 1,
  selection: 1,
  n: null,
  e: 1,
  s: null,
  w: -1,
  nw: -1,
  ne: 1,
  se: 1,
  sw: -1
};
var signsY = {
  overlay: 1,
  selection: 1,
  n: -1,
  e: null,
  s: 1,
  w: null,
  nw: -1,
  ne: -1,
  se: 1,
  sw: 1
};
function type(t) {
  return {type: t};
}
function defaultFilter2() {
  return !event.ctrlKey && !event.button;
}
function defaultExtent() {
  var svg2 = this.ownerSVGElement || this;
  if (svg2.hasAttribute("viewBox")) {
    svg2 = svg2.viewBox.baseVal;
    return [[svg2.x, svg2.y], [svg2.x + svg2.width, svg2.y + svg2.height]];
  }
  return [[0, 0], [svg2.width.baseVal.value, svg2.height.baseVal.value]];
}
function defaultTouchable2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function local2(node) {
  while (!node.__brush)
    if (!(node = node.parentNode))
      return;
  return node.__brush;
}
function empty2(extent) {
  return extent[0][0] === extent[1][0] || extent[0][1] === extent[1][1];
}
function brushSelection(node) {
  var state = node.__brush;
  return state ? state.dim.output(state.selection) : null;
}
function brushX() {
  return brush(X);
}
function brushY() {
  return brush(Y);
}
function brush_default() {
  return brush(XY);
}
function brush(dim) {
  var extent = defaultExtent, filter = defaultFilter2, touchable = defaultTouchable2, keys = true, listeners = dispatch_default("start", "brush", "end"), handleSize = 6, touchending;
  function brush2(group) {
    var overlay = group.property("__brush", initialize).selectAll(".overlay").data([type("overlay")]);
    overlay.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", cursors.overlay).merge(overlay).each(function() {
      var extent2 = local2(this).extent;
      select_default2(this).attr("x", extent2[0][0]).attr("y", extent2[0][1]).attr("width", extent2[1][0] - extent2[0][0]).attr("height", extent2[1][1] - extent2[0][1]);
    });
    group.selectAll(".selection").data([type("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", cursors.selection).attr("fill", "#777").attr("fill-opacity", 0.3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
    var handle = group.selectAll(".handle").data(dim.handles, function(d) {
      return d.type;
    });
    handle.exit().remove();
    handle.enter().append("rect").attr("class", function(d) {
      return "handle handle--" + d.type;
    }).attr("cursor", function(d) {
      return cursors[d.type];
    });
    group.each(redraw).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", started).filter(touchable).on("touchstart.brush", started).on("touchmove.brush", touchmoved).on("touchend.brush touchcancel.brush", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  brush2.move = function(group, selection2) {
    if (group.selection) {
      group.on("start.brush", function() {
        emitter(this, arguments).beforestart().start();
      }).on("interrupt.brush end.brush", function() {
        emitter(this, arguments).end();
      }).tween("brush", function() {
        var that = this, state = that.__brush, emit = emitter(that, arguments), selection0 = state.selection, selection1 = dim.input(typeof selection2 === "function" ? selection2.apply(this, arguments) : selection2, state.extent), i = value_default(selection0, selection1);
        function tween(t) {
          state.selection = t === 1 && selection1 === null ? null : i(t);
          redraw.call(that);
          emit.brush();
        }
        return selection0 !== null && selection1 !== null ? tween : tween(1);
      });
    } else {
      group.each(function() {
        var that = this, args = arguments, state = that.__brush, selection1 = dim.input(typeof selection2 === "function" ? selection2.apply(that, args) : selection2, state.extent), emit = emitter(that, args).beforestart();
        interrupt_default(that);
        state.selection = selection1 === null ? null : selection1;
        redraw.call(that);
        emit.start().brush().end();
      });
    }
  };
  brush2.clear = function(group) {
    brush2.move(group, null);
  };
  function redraw() {
    var group = select_default2(this), selection2 = local2(this).selection;
    if (selection2) {
      group.selectAll(".selection").style("display", null).attr("x", selection2[0][0]).attr("y", selection2[0][1]).attr("width", selection2[1][0] - selection2[0][0]).attr("height", selection2[1][1] - selection2[0][1]);
      group.selectAll(".handle").style("display", null).attr("x", function(d) {
        return d.type[d.type.length - 1] === "e" ? selection2[1][0] - handleSize / 2 : selection2[0][0] - handleSize / 2;
      }).attr("y", function(d) {
        return d.type[0] === "s" ? selection2[1][1] - handleSize / 2 : selection2[0][1] - handleSize / 2;
      }).attr("width", function(d) {
        return d.type === "n" || d.type === "s" ? selection2[1][0] - selection2[0][0] + handleSize : handleSize;
      }).attr("height", function(d) {
        return d.type === "e" || d.type === "w" ? selection2[1][1] - selection2[0][1] + handleSize : handleSize;
      });
    } else {
      group.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
    }
  }
  function emitter(that, args, clean) {
    var emit = that.__brush.emitter;
    return emit && (!clean || !emit.clean) ? emit : new Emitter(that, args, clean);
  }
  function Emitter(that, args, clean) {
    this.that = that;
    this.args = args;
    this.state = that.__brush;
    this.active = 0;
    this.clean = clean;
  }
  Emitter.prototype = {
    beforestart: function() {
      if (++this.active === 1)
        this.state.emitter = this, this.starting = true;
      return this;
    },
    start: function() {
      if (this.starting)
        this.starting = false, this.emit("start");
      else
        this.emit("brush");
      return this;
    },
    brush: function() {
      this.emit("brush");
      return this;
    },
    end: function() {
      if (--this.active === 0)
        delete this.state.emitter, this.emit("end");
      return this;
    },
    emit: function(type2) {
      customEvent(new event_default(brush2, type2, dim.output(this.state.selection)), listeners.apply, listeners, [type2, this.that, this.args]);
    }
  };
  function started() {
    if (touchending && !event.touches)
      return;
    if (!filter.apply(this, arguments))
      return;
    var that = this, type2 = event.target.__data__.type, mode = (keys && event.metaKey ? type2 = "overlay" : type2) === "selection" ? MODE_DRAG : keys && event.altKey ? MODE_CENTER : MODE_HANDLE, signX = dim === Y ? null : signsX[type2], signY = dim === X ? null : signsY[type2], state = local2(that), extent2 = state.extent, selection2 = state.selection, W = extent2[0][0], w0, w1, N = extent2[0][1], n0, n1, E2 = extent2[1][0], e0, e1, S = extent2[1][1], s0, s1, dx = 0, dy = 0, moving, shifting = signX && signY && keys && event.shiftKey, lockX, lockY, pointer = event.touches ? toucher(event.changedTouches[0].identifier) : mouse_default, point0 = pointer(that), point6 = point0, emit = emitter(that, arguments, true).beforestart();
    if (type2 === "overlay") {
      if (selection2)
        moving = true;
      state.selection = selection2 = [
        [w0 = dim === Y ? W : point0[0], n0 = dim === X ? N : point0[1]],
        [e0 = dim === Y ? E2 : w0, s0 = dim === X ? S : n0]
      ];
    } else {
      w0 = selection2[0][0];
      n0 = selection2[0][1];
      e0 = selection2[1][0];
      s0 = selection2[1][1];
    }
    w1 = w0;
    n1 = n0;
    e1 = e0;
    s1 = s0;
    var group = select_default2(that).attr("pointer-events", "none");
    var overlay = group.selectAll(".overlay").attr("cursor", cursors[type2]);
    if (event.touches) {
      emit.moved = moved;
      emit.ended = ended;
    } else {
      var view = select_default2(event.view).on("mousemove.brush", moved, true).on("mouseup.brush", ended, true);
      if (keys)
        view.on("keydown.brush", keydowned, true).on("keyup.brush", keyupped, true);
      nodrag_default(event.view);
    }
    nopropagation2();
    interrupt_default(that);
    redraw.call(that);
    emit.start();
    function moved() {
      var point1 = pointer(that);
      if (shifting && !lockX && !lockY) {
        if (Math.abs(point1[0] - point6[0]) > Math.abs(point1[1] - point6[1]))
          lockY = true;
        else
          lockX = true;
      }
      point6 = point1;
      moving = true;
      noevent_default2();
      move();
    }
    function move() {
      var t;
      dx = point6[0] - point0[0];
      dy = point6[1] - point0[1];
      switch (mode) {
        case MODE_SPACE:
        case MODE_DRAG: {
          if (signX)
            dx = Math.max(W - w0, Math.min(E2 - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
          if (signY)
            dy = Math.max(N - n0, Math.min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
          break;
        }
        case MODE_HANDLE: {
          if (signX < 0)
            dx = Math.max(W - w0, Math.min(E2 - w0, dx)), w1 = w0 + dx, e1 = e0;
          else if (signX > 0)
            dx = Math.max(W - e0, Math.min(E2 - e0, dx)), w1 = w0, e1 = e0 + dx;
          if (signY < 0)
            dy = Math.max(N - n0, Math.min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
          else if (signY > 0)
            dy = Math.max(N - s0, Math.min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
          break;
        }
        case MODE_CENTER: {
          if (signX)
            w1 = Math.max(W, Math.min(E2, w0 - dx * signX)), e1 = Math.max(W, Math.min(E2, e0 + dx * signX));
          if (signY)
            n1 = Math.max(N, Math.min(S, n0 - dy * signY)), s1 = Math.max(N, Math.min(S, s0 + dy * signY));
          break;
        }
      }
      if (e1 < w1) {
        signX *= -1;
        t = w0, w0 = e0, e0 = t;
        t = w1, w1 = e1, e1 = t;
        if (type2 in flipX)
          overlay.attr("cursor", cursors[type2 = flipX[type2]]);
      }
      if (s1 < n1) {
        signY *= -1;
        t = n0, n0 = s0, s0 = t;
        t = n1, n1 = s1, s1 = t;
        if (type2 in flipY)
          overlay.attr("cursor", cursors[type2 = flipY[type2]]);
      }
      if (state.selection)
        selection2 = state.selection;
      if (lockX)
        w1 = selection2[0][0], e1 = selection2[1][0];
      if (lockY)
        n1 = selection2[0][1], s1 = selection2[1][1];
      if (selection2[0][0] !== w1 || selection2[0][1] !== n1 || selection2[1][0] !== e1 || selection2[1][1] !== s1) {
        state.selection = [[w1, n1], [e1, s1]];
        redraw.call(that);
        emit.brush();
      }
    }
    function ended() {
      nopropagation2();
      if (event.touches) {
        if (event.touches.length)
          return;
        if (touchending)
          clearTimeout(touchending);
        touchending = setTimeout(function() {
          touchending = null;
        }, 500);
      } else {
        yesdrag(event.view, moving);
        view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
      }
      group.attr("pointer-events", "all");
      overlay.attr("cursor", cursors.overlay);
      if (state.selection)
        selection2 = state.selection;
      if (empty2(selection2))
        state.selection = null, redraw.call(that);
      emit.end();
    }
    function keydowned() {
      switch (event.keyCode) {
        case 16: {
          shifting = signX && signY;
          break;
        }
        case 18: {
          if (mode === MODE_HANDLE) {
            if (signX)
              e0 = e1 - dx * signX, w0 = w1 + dx * signX;
            if (signY)
              s0 = s1 - dy * signY, n0 = n1 + dy * signY;
            mode = MODE_CENTER;
            move();
          }
          break;
        }
        case 32: {
          if (mode === MODE_HANDLE || mode === MODE_CENTER) {
            if (signX < 0)
              e0 = e1 - dx;
            else if (signX > 0)
              w0 = w1 - dx;
            if (signY < 0)
              s0 = s1 - dy;
            else if (signY > 0)
              n0 = n1 - dy;
            mode = MODE_SPACE;
            overlay.attr("cursor", cursors.selection);
            move();
          }
          break;
        }
        default:
          return;
      }
      noevent_default2();
    }
    function keyupped() {
      switch (event.keyCode) {
        case 16: {
          if (shifting) {
            lockX = lockY = shifting = false;
            move();
          }
          break;
        }
        case 18: {
          if (mode === MODE_CENTER) {
            if (signX < 0)
              e0 = e1;
            else if (signX > 0)
              w0 = w1;
            if (signY < 0)
              s0 = s1;
            else if (signY > 0)
              n0 = n1;
            mode = MODE_HANDLE;
            move();
          }
          break;
        }
        case 32: {
          if (mode === MODE_SPACE) {
            if (event.altKey) {
              if (signX)
                e0 = e1 - dx * signX, w0 = w1 + dx * signX;
              if (signY)
                s0 = s1 - dy * signY, n0 = n1 + dy * signY;
              mode = MODE_CENTER;
            } else {
              if (signX < 0)
                e0 = e1;
              else if (signX > 0)
                w0 = w1;
              if (signY < 0)
                s0 = s1;
              else if (signY > 0)
                n0 = n1;
              mode = MODE_HANDLE;
            }
            overlay.attr("cursor", cursors[type2]);
            move();
          }
          break;
        }
        default:
          return;
      }
      noevent_default2();
    }
  }
  function touchmoved() {
    emitter(this, arguments).moved();
  }
  function touchended() {
    emitter(this, arguments).ended();
  }
  function initialize() {
    var state = this.__brush || {selection: null};
    state.extent = number2(extent.apply(this, arguments));
    state.dim = dim;
    return state;
  }
  brush2.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant_default5(number2(_)), brush2) : extent;
  };
  brush2.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant_default5(!!_), brush2) : filter;
  };
  brush2.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default5(!!_), brush2) : touchable;
  };
  brush2.handleSize = function(_) {
    return arguments.length ? (handleSize = +_, brush2) : handleSize;
  };
  brush2.keyModifiers = function(_) {
    return arguments.length ? (keys = !!_, brush2) : keys;
  };
  brush2.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? brush2 : value;
  };
  return brush2;
}

// node_modules/d3-chord/src/math.js
var cos = Math.cos;
var sin = Math.sin;
var pi2 = Math.PI;
var halfPi2 = pi2 / 2;
var tau2 = pi2 * 2;
var max = Math.max;

// node_modules/d3-chord/src/chord.js
function compareValue(compare) {
  return function(a2, b) {
    return compare(a2.source.value + a2.target.value, b.source.value + b.target.value);
  };
}
function chord_default() {
  var padAngle = 0, sortGroups = null, sortSubgroups = null, sortChords = null;
  function chord(matrix) {
    var n = matrix.length, groupSums = [], groupIndex = range_default(n), subgroupIndex = [], chords = [], groups = chords.groups = new Array(n), subgroups = new Array(n * n), k2, x5, x06, dx, i, j;
    k2 = 0, i = -1;
    while (++i < n) {
      x5 = 0, j = -1;
      while (++j < n) {
        x5 += matrix[i][j];
      }
      groupSums.push(x5);
      subgroupIndex.push(range_default(n));
      k2 += x5;
    }
    if (sortGroups)
      groupIndex.sort(function(a2, b) {
        return sortGroups(groupSums[a2], groupSums[b]);
      });
    if (sortSubgroups)
      subgroupIndex.forEach(function(d, i2) {
        d.sort(function(a2, b) {
          return sortSubgroups(matrix[i2][a2], matrix[i2][b]);
        });
      });
    k2 = max(0, tau2 - padAngle * n) / k2;
    dx = k2 ? padAngle : tau2 / n;
    x5 = 0, i = -1;
    while (++i < n) {
      x06 = x5, j = -1;
      while (++j < n) {
        var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x5, a1 = x5 += v * k2;
        subgroups[dj * n + di] = {
          index: di,
          subindex: dj,
          startAngle: a0,
          endAngle: a1,
          value: v
        };
      }
      groups[di] = {
        index: di,
        startAngle: x06,
        endAngle: x5,
        value: groupSums[di]
      };
      x5 += dx;
    }
    i = -1;
    while (++i < n) {
      j = i - 1;
      while (++j < n) {
        var source = subgroups[j * n + i], target = subgroups[i * n + j];
        if (source.value || target.value) {
          chords.push(source.value < target.value ? {source: target, target: source} : {source, target});
        }
      }
    }
    return sortChords ? chords.sort(sortChords) : chords;
  }
  chord.padAngle = function(_) {
    return arguments.length ? (padAngle = max(0, _), chord) : padAngle;
  };
  chord.sortGroups = function(_) {
    return arguments.length ? (sortGroups = _, chord) : sortGroups;
  };
  chord.sortSubgroups = function(_) {
    return arguments.length ? (sortSubgroups = _, chord) : sortSubgroups;
  };
  chord.sortChords = function(_) {
    return arguments.length ? (_ == null ? sortChords = null : (sortChords = compareValue(_))._ = _, chord) : sortChords && sortChords._;
  };
  return chord;
}

// node_modules/d3-chord/src/array.js
var slice3 = Array.prototype.slice;

// node_modules/d3-chord/src/constant.js
function constant_default6(x5) {
  return function() {
    return x5;
  };
}

// node_modules/d3-path/src/path.js
var pi3 = Math.PI;
var tau3 = 2 * pi3;
var epsilon3 = 1e-6;
var tauEpsilon = tau3 - epsilon3;
function Path() {
  this._x0 = this._y0 = this._x1 = this._y1 = null;
  this._ = "";
}
function path() {
  return new Path();
}
Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x5, y5) {
    this._ += "M" + (this._x0 = this._x1 = +x5) + "," + (this._y0 = this._y1 = +y5);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x5, y5) {
    this._ += "L" + (this._x1 = +x5) + "," + (this._y1 = +y5);
  },
  quadraticCurveTo: function(x12, y12, x5, y5) {
    this._ += "Q" + +x12 + "," + +y12 + "," + (this._x1 = +x5) + "," + (this._y1 = +y5);
  },
  bezierCurveTo: function(x12, y12, x22, y22, x5, y5) {
    this._ += "C" + +x12 + "," + +y12 + "," + +x22 + "," + +y22 + "," + (this._x1 = +x5) + "," + (this._y1 = +y5);
  },
  arcTo: function(x12, y12, x22, y22, r) {
    x12 = +x12, y12 = +y12, x22 = +x22, y22 = +y22, r = +r;
    var x06 = this._x1, y06 = this._y1, x21 = x22 - x12, y21 = y22 - y12, x01 = x06 - x12, y01 = y06 - y12, l01_2 = x01 * x01 + y01 * y01;
    if (r < 0)
      throw new Error("negative radius: " + r);
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x12) + "," + (this._y1 = y12);
    } else if (!(l01_2 > epsilon3))
      ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon3) || !r) {
      this._ += "L" + (this._x1 = x12) + "," + (this._y1 = y12);
    } else {
      var x20 = x22 - x06, y20 = y22 - y06, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi3 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
      if (Math.abs(t01 - 1) > epsilon3) {
        this._ += "L" + (x12 + t01 * x01) + "," + (y12 + t01 * y01);
      }
      this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x12 + t21 * x21) + "," + (this._y1 = y12 + t21 * y21);
    }
  },
  arc: function(x5, y5, r, a0, a1, ccw) {
    x5 = +x5, y5 = +y5, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x06 = x5 + dx, y06 = y5 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (r < 0)
      throw new Error("negative radius: " + r);
    if (this._x1 === null) {
      this._ += "M" + x06 + "," + y06;
    } else if (Math.abs(this._x1 - x06) > epsilon3 || Math.abs(this._y1 - y06) > epsilon3) {
      this._ += "L" + x06 + "," + y06;
    }
    if (!r)
      return;
    if (da < 0)
      da = da % tau3 + tau3;
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x5 - dx) + "," + (y5 - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x06) + "," + (this._y1 = y06);
    } else if (da > epsilon3) {
      this._ += "A" + r + "," + r + ",0," + +(da >= pi3) + "," + cw + "," + (this._x1 = x5 + r * Math.cos(a1)) + "," + (this._y1 = y5 + r * Math.sin(a1));
    }
  },
  rect: function(x5, y5, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x5) + "," + (this._y0 = this._y1 = +y5) + "h" + +w + "v" + +h + "h" + -w + "Z";
  },
  toString: function() {
    return this._;
  }
};
var path_default = path;

// node_modules/d3-chord/src/ribbon.js
function defaultSource(d) {
  return d.source;
}
function defaultTarget(d) {
  return d.target;
}
function defaultRadius(d) {
  return d.radius;
}
function defaultStartAngle(d) {
  return d.startAngle;
}
function defaultEndAngle(d) {
  return d.endAngle;
}
function ribbon_default() {
  var source = defaultSource, target = defaultTarget, radius = defaultRadius, startAngle = defaultStartAngle, endAngle = defaultEndAngle, context = null;
  function ribbon() {
    var buffer, argv = slice3.call(arguments), s2 = source.apply(this, argv), t = target.apply(this, argv), sr = +radius.apply(this, (argv[0] = s2, argv)), sa0 = startAngle.apply(this, argv) - halfPi2, sa1 = endAngle.apply(this, argv) - halfPi2, sx0 = sr * cos(sa0), sy0 = sr * sin(sa0), tr = +radius.apply(this, (argv[0] = t, argv)), ta0 = startAngle.apply(this, argv) - halfPi2, ta1 = endAngle.apply(this, argv) - halfPi2;
    if (!context)
      context = buffer = path_default();
    context.moveTo(sx0, sy0);
    context.arc(0, 0, sr, sa0, sa1);
    if (sa0 !== ta0 || sa1 !== ta1) {
      context.quadraticCurveTo(0, 0, tr * cos(ta0), tr * sin(ta0));
      context.arc(0, 0, tr, ta0, ta1);
    }
    context.quadraticCurveTo(0, 0, sx0, sy0);
    context.closePath();
    if (buffer)
      return context = null, buffer + "" || null;
  }
  ribbon.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant_default6(+_), ribbon) : radius;
  };
  ribbon.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant_default6(+_), ribbon) : startAngle;
  };
  ribbon.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant_default6(+_), ribbon) : endAngle;
  };
  ribbon.source = function(_) {
    return arguments.length ? (source = _, ribbon) : source;
  };
  ribbon.target = function(_) {
    return arguments.length ? (target = _, ribbon) : target;
  };
  ribbon.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, ribbon) : context;
  };
  return ribbon;
}

// node_modules/d3-collection/src/map.js
var prefix = "$";
function Map() {
}
Map.prototype = map2.prototype = {
  constructor: Map,
  has: function(key) {
    return prefix + key in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this)
      if (property[0] === prefix)
        delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this)
      if (property[0] === prefix)
        keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this)
      if (property[0] === prefix)
        values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this)
      if (property[0] === prefix)
        entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this)
      if (property[0] === prefix)
        ++size;
    return size;
  },
  empty: function() {
    for (var property in this)
      if (property[0] === prefix)
        return false;
    return true;
  },
  each: function(f) {
    for (var property in this)
      if (property[0] === prefix)
        f(this[property], property.slice(1), this);
  }
};
function map2(object2, f) {
  var map5 = new Map();
  if (object2 instanceof Map)
    object2.each(function(value, key2) {
      map5.set(key2, value);
    });
  else if (Array.isArray(object2)) {
    var i = -1, n = object2.length, o;
    if (f == null)
      while (++i < n)
        map5.set(i, object2[i]);
    else
      while (++i < n)
        map5.set(f(o = object2[i], i, object2), o);
  } else if (object2)
    for (var key in object2)
      map5.set(key, object2[key]);
  return map5;
}
var map_default = map2;

// node_modules/d3-collection/src/nest.js
function nest_default() {
  var keys = [], sortKeys = [], sortValues, rollup, nest;
  function apply(array4, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (sortValues != null)
        array4.sort(sortValues);
      return rollup != null ? rollup(array4) : array4;
    }
    var i = -1, n = array4.length, key = keys[depth++], keyValue, value, valuesByKey = map_default(), values, result = createResult();
    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array4[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }
    valuesByKey.each(function(values2, key2) {
      setResult(result, key2, apply(values2, depth, createResult, setResult));
    });
    return result;
  }
  function entries(map5, depth) {
    if (++depth > keys.length)
      return map5;
    var array4, sortKey = sortKeys[depth - 1];
    if (rollup != null && depth >= keys.length)
      array4 = map5.entries();
    else
      array4 = [], map5.each(function(v, k2) {
        array4.push({key: k2, values: entries(v, depth)});
      });
    return sortKey != null ? array4.sort(function(a2, b) {
      return sortKey(a2.key, b.key);
    }) : array4;
  }
  return nest = {
    object: function(array4) {
      return apply(array4, 0, createObject, setObject);
    },
    map: function(array4) {
      return apply(array4, 0, createMap, setMap);
    },
    entries: function(array4) {
      return entries(apply(array4, 0, createMap, setMap), 0);
    },
    key: function(d) {
      keys.push(d);
      return nest;
    },
    sortKeys: function(order) {
      sortKeys[keys.length - 1] = order;
      return nest;
    },
    sortValues: function(order) {
      sortValues = order;
      return nest;
    },
    rollup: function(f) {
      rollup = f;
      return nest;
    }
  };
}
function createObject() {
  return {};
}
function setObject(object2, key, value) {
  object2[key] = value;
}
function createMap() {
  return map_default();
}
function setMap(map5, key, value) {
  map5.set(key, value);
}

// node_modules/d3-collection/src/set.js
function Set() {
}
var proto = map_default.prototype;
Set.prototype = set3.prototype = {
  constructor: Set,
  has: proto.has,
  add: function(value) {
    value += "";
    this[prefix + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};
function set3(object2, f) {
  var set4 = new Set();
  if (object2 instanceof Set)
    object2.each(function(value) {
      set4.add(value);
    });
  else if (object2) {
    var i = -1, n = object2.length;
    if (f == null)
      while (++i < n)
        set4.add(object2[i]);
    else
      while (++i < n)
        set4.add(f(object2[i], i, object2));
  }
  return set4;
}
var set_default = set3;

// node_modules/d3-collection/src/keys.js
function keys_default(map5) {
  var keys = [];
  for (var key in map5)
    keys.push(key);
  return keys;
}

// node_modules/d3-collection/src/values.js
function values_default(map5) {
  var values = [];
  for (var key in map5)
    values.push(map5[key]);
  return values;
}

// node_modules/d3-collection/src/entries.js
function entries_default(map5) {
  var entries = [];
  for (var key in map5)
    entries.push({key, value: map5[key]});
  return entries;
}

// node_modules/d3-contour/src/array.js
var array2 = Array.prototype;
var slice4 = array2.slice;

// node_modules/d3-contour/src/ascending.js
function ascending_default2(a2, b) {
  return a2 - b;
}

// node_modules/d3-contour/src/area.js
function area_default(ring) {
  var i = 0, n = ring.length, area = ring[n - 1][1] * ring[0][0] - ring[n - 1][0] * ring[0][1];
  while (++i < n)
    area += ring[i - 1][1] * ring[i][0] - ring[i - 1][0] * ring[i][1];
  return area;
}

// node_modules/d3-contour/src/constant.js
function constant_default7(x5) {
  return function() {
    return x5;
  };
}

// node_modules/d3-contour/src/contains.js
function contains_default(ring, hole) {
  var i = -1, n = hole.length, c4;
  while (++i < n)
    if (c4 = ringContains(ring, hole[i]))
      return c4;
  return 0;
}
function ringContains(ring, point6) {
  var x5 = point6[0], y5 = point6[1], contains = -1;
  for (var i = 0, n = ring.length, j = n - 1; i < n; j = i++) {
    var pi6 = ring[i], xi = pi6[0], yi = pi6[1], pj = ring[j], xj = pj[0], yj = pj[1];
    if (segmentContains(pi6, pj, point6))
      return 0;
    if (yi > y5 !== yj > y5 && x5 < (xj - xi) * (y5 - yi) / (yj - yi) + xi)
      contains = -contains;
  }
  return contains;
}
function segmentContains(a2, b, c4) {
  var i;
  return collinear(a2, b, c4) && within(a2[i = +(a2[0] === b[0])], c4[i], b[i]);
}
function collinear(a2, b, c4) {
  return (b[0] - a2[0]) * (c4[1] - a2[1]) === (c4[0] - a2[0]) * (b[1] - a2[1]);
}
function within(p, q, r) {
  return p <= q && q <= r || r <= q && q <= p;
}

// node_modules/d3-contour/src/noop.js
function noop_default() {
}

// node_modules/d3-contour/src/contours.js
var cases = [
  [],
  [[[1, 1.5], [0.5, 1]]],
  [[[1.5, 1], [1, 1.5]]],
  [[[1.5, 1], [0.5, 1]]],
  [[[1, 0.5], [1.5, 1]]],
  [[[1, 1.5], [0.5, 1]], [[1, 0.5], [1.5, 1]]],
  [[[1, 0.5], [1, 1.5]]],
  [[[1, 0.5], [0.5, 1]]],
  [[[0.5, 1], [1, 0.5]]],
  [[[1, 1.5], [1, 0.5]]],
  [[[0.5, 1], [1, 0.5]], [[1.5, 1], [1, 1.5]]],
  [[[1.5, 1], [1, 0.5]]],
  [[[0.5, 1], [1.5, 1]]],
  [[[1, 1.5], [1.5, 1]]],
  [[[0.5, 1], [1, 1.5]]],
  []
];
function contours_default() {
  var dx = 1, dy = 1, threshold2 = sturges_default, smooth = smoothLinear;
  function contours(values) {
    var tz = threshold2(values);
    if (!Array.isArray(tz)) {
      var domain = extent_default(values), start2 = domain[0], stop = domain[1];
      tz = tickStep(start2, stop, tz);
      tz = range_default(Math.floor(start2 / tz) * tz, Math.floor(stop / tz) * tz, tz);
    } else {
      tz = tz.slice().sort(ascending_default2);
    }
    return tz.map(function(value) {
      return contour(values, value);
    });
  }
  function contour(values, value) {
    var polygons = [], holes = [];
    isorings(values, value, function(ring) {
      smooth(ring, values, value);
      if (area_default(ring) > 0)
        polygons.push([ring]);
      else
        holes.push(ring);
    });
    holes.forEach(function(hole) {
      for (var i = 0, n = polygons.length, polygon; i < n; ++i) {
        if (contains_default((polygon = polygons[i])[0], hole) !== -1) {
          polygon.push(hole);
          return;
        }
      }
    });
    return {
      type: "MultiPolygon",
      value,
      coordinates: polygons
    };
  }
  function isorings(values, value, callback) {
    var fragmentByStart = new Array(), fragmentByEnd = new Array(), x5, y5, t03, t13, t22, t32;
    x5 = y5 = -1;
    t13 = values[0] >= value;
    cases[t13 << 1].forEach(stitch);
    while (++x5 < dx - 1) {
      t03 = t13, t13 = values[x5 + 1] >= value;
      cases[t03 | t13 << 1].forEach(stitch);
    }
    cases[t13 << 0].forEach(stitch);
    while (++y5 < dy - 1) {
      x5 = -1;
      t13 = values[y5 * dx + dx] >= value;
      t22 = values[y5 * dx] >= value;
      cases[t13 << 1 | t22 << 2].forEach(stitch);
      while (++x5 < dx - 1) {
        t03 = t13, t13 = values[y5 * dx + dx + x5 + 1] >= value;
        t32 = t22, t22 = values[y5 * dx + x5 + 1] >= value;
        cases[t03 | t13 << 1 | t22 << 2 | t32 << 3].forEach(stitch);
      }
      cases[t13 | t22 << 3].forEach(stitch);
    }
    x5 = -1;
    t22 = values[y5 * dx] >= value;
    cases[t22 << 2].forEach(stitch);
    while (++x5 < dx - 1) {
      t32 = t22, t22 = values[y5 * dx + x5 + 1] >= value;
      cases[t22 << 2 | t32 << 3].forEach(stitch);
    }
    cases[t22 << 3].forEach(stitch);
    function stitch(line) {
      var start2 = [line[0][0] + x5, line[0][1] + y5], end = [line[1][0] + x5, line[1][1] + y5], startIndex = index2(start2), endIndex = index2(end), f, g;
      if (f = fragmentByEnd[startIndex]) {
        if (g = fragmentByStart[endIndex]) {
          delete fragmentByEnd[f.end];
          delete fragmentByStart[g.start];
          if (f === g) {
            f.ring.push(end);
            callback(f.ring);
          } else {
            fragmentByStart[f.start] = fragmentByEnd[g.end] = {start: f.start, end: g.end, ring: f.ring.concat(g.ring)};
          }
        } else {
          delete fragmentByEnd[f.end];
          f.ring.push(end);
          fragmentByEnd[f.end = endIndex] = f;
        }
      } else if (f = fragmentByStart[endIndex]) {
        if (g = fragmentByEnd[startIndex]) {
          delete fragmentByStart[f.start];
          delete fragmentByEnd[g.end];
          if (f === g) {
            f.ring.push(end);
            callback(f.ring);
          } else {
            fragmentByStart[g.start] = fragmentByEnd[f.end] = {start: g.start, end: f.end, ring: g.ring.concat(f.ring)};
          }
        } else {
          delete fragmentByStart[f.start];
          f.ring.unshift(start2);
          fragmentByStart[f.start = startIndex] = f;
        }
      } else {
        fragmentByStart[startIndex] = fragmentByEnd[endIndex] = {start: startIndex, end: endIndex, ring: [start2, end]};
      }
    }
  }
  function index2(point6) {
    return point6[0] * 2 + point6[1] * (dx + 1) * 4;
  }
  function smoothLinear(ring, values, value) {
    ring.forEach(function(point6) {
      var x5 = point6[0], y5 = point6[1], xt = x5 | 0, yt = y5 | 0, v0, v1 = values[yt * dx + xt];
      if (x5 > 0 && x5 < dx && xt === x5) {
        v0 = values[yt * dx + xt - 1];
        point6[0] = x5 + (value - v0) / (v1 - v0) - 0.5;
      }
      if (y5 > 0 && y5 < dy && yt === y5) {
        v0 = values[(yt - 1) * dx + xt];
        point6[1] = y5 + (value - v0) / (v1 - v0) - 0.5;
      }
    });
  }
  contours.contour = contour;
  contours.size = function(_) {
    if (!arguments.length)
      return [dx, dy];
    var _0 = Math.ceil(_[0]), _1 = Math.ceil(_[1]);
    if (!(_0 > 0) || !(_1 > 0))
      throw new Error("invalid size");
    return dx = _0, dy = _1, contours;
  };
  contours.thresholds = function(_) {
    return arguments.length ? (threshold2 = typeof _ === "function" ? _ : Array.isArray(_) ? constant_default7(slice4.call(_)) : constant_default7(_), contours) : threshold2;
  };
  contours.smooth = function(_) {
    return arguments.length ? (smooth = _ ? smoothLinear : noop_default, contours) : smooth === smoothLinear;
  };
  return contours;
}

// node_modules/d3-contour/src/blur.js
function blurX(source, target, r) {
  var n = source.width, m = source.height, w = (r << 1) + 1;
  for (var j = 0; j < m; ++j) {
    for (var i = 0, sr = 0; i < n + r; ++i) {
      if (i < n) {
        sr += source.data[i + j * n];
      }
      if (i >= r) {
        if (i >= w) {
          sr -= source.data[i - w + j * n];
        }
        target.data[i - r + j * n] = sr / Math.min(i + 1, n - 1 + w - i, w);
      }
    }
  }
}
function blurY(source, target, r) {
  var n = source.width, m = source.height, w = (r << 1) + 1;
  for (var i = 0; i < n; ++i) {
    for (var j = 0, sr = 0; j < m + r; ++j) {
      if (j < m) {
        sr += source.data[i + j * n];
      }
      if (j >= r) {
        if (j >= w) {
          sr -= source.data[i + (j - w) * n];
        }
        target.data[i + (j - r) * n] = sr / Math.min(j + 1, m - 1 + w - j, w);
      }
    }
  }
}

// node_modules/d3-contour/src/density.js
function defaultX(d) {
  return d[0];
}
function defaultY(d) {
  return d[1];
}
function defaultWeight() {
  return 1;
}
function density_default() {
  var x5 = defaultX, y5 = defaultY, weight = defaultWeight, dx = 960, dy = 500, r = 20, k2 = 2, o = r * 3, n = dx + o * 2 >> k2, m = dy + o * 2 >> k2, threshold2 = constant_default7(20);
  function density(data) {
    var values0 = new Float32Array(n * m), values1 = new Float32Array(n * m);
    data.forEach(function(d, i, data2) {
      var xi = +x5(d, i, data2) + o >> k2, yi = +y5(d, i, data2) + o >> k2, wi = +weight(d, i, data2);
      if (xi >= 0 && xi < n && yi >= 0 && yi < m) {
        values0[xi + yi * n] += wi;
      }
    });
    blurX({width: n, height: m, data: values0}, {width: n, height: m, data: values1}, r >> k2);
    blurY({width: n, height: m, data: values1}, {width: n, height: m, data: values0}, r >> k2);
    blurX({width: n, height: m, data: values0}, {width: n, height: m, data: values1}, r >> k2);
    blurY({width: n, height: m, data: values1}, {width: n, height: m, data: values0}, r >> k2);
    blurX({width: n, height: m, data: values0}, {width: n, height: m, data: values1}, r >> k2);
    blurY({width: n, height: m, data: values1}, {width: n, height: m, data: values0}, r >> k2);
    var tz = threshold2(values0);
    if (!Array.isArray(tz)) {
      var stop = max_default(values0);
      tz = tickStep(0, stop, tz);
      tz = range_default(0, Math.floor(stop / tz) * tz, tz);
      tz.shift();
    }
    return contours_default().thresholds(tz).size([n, m])(values0).map(transform2);
  }
  function transform2(geometry) {
    geometry.value *= Math.pow(2, -2 * k2);
    geometry.coordinates.forEach(transformPolygon);
    return geometry;
  }
  function transformPolygon(coordinates2) {
    coordinates2.forEach(transformRing);
  }
  function transformRing(coordinates2) {
    coordinates2.forEach(transformPoint);
  }
  function transformPoint(coordinates2) {
    coordinates2[0] = coordinates2[0] * Math.pow(2, k2) - o;
    coordinates2[1] = coordinates2[1] * Math.pow(2, k2) - o;
  }
  function resize() {
    o = r * 3;
    n = dx + o * 2 >> k2;
    m = dy + o * 2 >> k2;
    return density;
  }
  density.x = function(_) {
    return arguments.length ? (x5 = typeof _ === "function" ? _ : constant_default7(+_), density) : x5;
  };
  density.y = function(_) {
    return arguments.length ? (y5 = typeof _ === "function" ? _ : constant_default7(+_), density) : y5;
  };
  density.weight = function(_) {
    return arguments.length ? (weight = typeof _ === "function" ? _ : constant_default7(+_), density) : weight;
  };
  density.size = function(_) {
    if (!arguments.length)
      return [dx, dy];
    var _0 = Math.ceil(_[0]), _1 = Math.ceil(_[1]);
    if (!(_0 >= 0) && !(_0 >= 0))
      throw new Error("invalid size");
    return dx = _0, dy = _1, resize();
  };
  density.cellSize = function(_) {
    if (!arguments.length)
      return 1 << k2;
    if (!((_ = +_) >= 1))
      throw new Error("invalid cell size");
    return k2 = Math.floor(Math.log(_) / Math.LN2), resize();
  };
  density.thresholds = function(_) {
    return arguments.length ? (threshold2 = typeof _ === "function" ? _ : Array.isArray(_) ? constant_default7(slice4.call(_)) : constant_default7(_), density) : threshold2;
  };
  density.bandwidth = function(_) {
    if (!arguments.length)
      return Math.sqrt(r * (r + 1));
    if (!((_ = +_) >= 0))
      throw new Error("invalid bandwidth");
    return r = Math.round((Math.sqrt(4 * _ * _ + 1) - 1) / 2), resize();
  };
  return density;
}

// node_modules/d3-dsv/src/dsv.js
var EOL = {};
var EOF = {};
var QUOTE = 34;
var NEWLINE = 10;
var RETURN = 13;
function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + '] || ""';
  }).join(",") + "}");
}
function customConverter(columns, f) {
  var object2 = objectConverter(columns);
  return function(row, i) {
    return f(object2(row), i, columns);
  };
}
function inferColumns(rows) {
  var columnSet = Object.create(null), columns = [];
  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });
  return columns;
}
function pad(value, width) {
  var s2 = value + "", length2 = s2.length;
  return length2 < width ? new Array(width - length2 + 1).join(0) + s2 : s2;
}
function formatYear(year2) {
  return year2 < 0 ? "-" + pad(-year2, 6) : year2 > 9999 ? "+" + pad(year2, 6) : pad(year2, 4);
}
function formatDate(date2) {
  var hours2 = date2.getUTCHours(), minutes2 = date2.getUTCMinutes(), seconds2 = date2.getUTCSeconds(), milliseconds2 = date2.getUTCMilliseconds();
  return isNaN(date2) ? "Invalid Date" : formatYear(date2.getUTCFullYear(), 4) + "-" + pad(date2.getUTCMonth() + 1, 2) + "-" + pad(date2.getUTCDate(), 2) + (milliseconds2 ? "T" + pad(hours2, 2) + ":" + pad(minutes2, 2) + ":" + pad(seconds2, 2) + "." + pad(milliseconds2, 3) + "Z" : seconds2 ? "T" + pad(hours2, 2) + ":" + pad(minutes2, 2) + ":" + pad(seconds2, 2) + "Z" : minutes2 || hours2 ? "T" + pad(hours2, 2) + ":" + pad(minutes2, 2) + "Z" : "");
}
function dsv_default(delimiter) {
  var reFormat = new RegExp('["' + delimiter + "\n\r]"), DELIMITER = delimiter.charCodeAt(0);
  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert)
        return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }
  function parseRows(text, f) {
    var rows = [], N = text.length, I = 0, n = 0, t, eof = N <= 0, eol = false;
    if (text.charCodeAt(N - 1) === NEWLINE)
      --N;
    if (text.charCodeAt(N - 1) === RETURN)
      --N;
    function token() {
      if (eof)
        return EOF;
      if (eol)
        return eol = false, EOL;
      var i, j = I, c4;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE)
          ;
        if ((i = I) >= N)
          eof = true;
        else if ((c4 = text.charCodeAt(I++)) === NEWLINE)
          eol = true;
        else if (c4 === RETURN) {
          eol = true;
          if (text.charCodeAt(I) === NEWLINE)
            ++I;
        }
        return text.slice(j + 1, i - 1).replace(/""/g, '"');
      }
      while (I < N) {
        if ((c4 = text.charCodeAt(i = I++)) === NEWLINE)
          eol = true;
        else if (c4 === RETURN) {
          eol = true;
          if (text.charCodeAt(I) === NEWLINE)
            ++I;
        } else if (c4 !== DELIMITER)
          continue;
        return text.slice(j, i);
      }
      return eof = true, text.slice(j, N);
    }
    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF)
        row.push(t), t = token();
      if (f && (row = f(row, n++)) == null)
        continue;
      rows.push(row);
    }
    return rows;
  }
  function preformatBody(rows, columns) {
    return rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    });
  }
  function format2(rows, columns) {
    if (columns == null)
      columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
  }
  function formatBody(rows, columns) {
    if (columns == null)
      columns = inferColumns(rows);
    return preformatBody(rows, columns).join("\n");
  }
  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }
  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }
  function formatValue(value) {
    return value == null ? "" : value instanceof Date ? formatDate(value) : reFormat.test(value += "") ? '"' + value.replace(/"/g, '""') + '"' : value;
  }
  return {
    parse,
    parseRows,
    format: format2,
    formatBody,
    formatRows,
    formatRow,
    formatValue
  };
}

// node_modules/d3-dsv/src/csv.js
var csv = dsv_default(",");
var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatBody = csv.formatBody;
var csvFormatRows = csv.formatRows;
var csvFormatRow = csv.formatRow;
var csvFormatValue = csv.formatValue;

// node_modules/d3-dsv/src/tsv.js
var tsv = dsv_default("	");
var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatBody = tsv.formatBody;
var tsvFormatRows = tsv.formatRows;
var tsvFormatRow = tsv.formatRow;
var tsvFormatValue = tsv.formatValue;

// node_modules/d3-dsv/src/autoType.js
function autoType(object2) {
  for (var key in object2) {
    var value = object2[key].trim(), number4, m;
    if (!value)
      value = null;
    else if (value === "true")
      value = true;
    else if (value === "false")
      value = false;
    else if (value === "NaN")
      value = NaN;
    else if (!isNaN(number4 = +value))
      value = number4;
    else if (m = value.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)) {
      if (fixtz && !!m[4] && !m[7])
        value = value.replace(/-/g, "/").replace(/T/, " ");
      value = new Date(value);
    } else
      continue;
    object2[key] = value;
  }
  return object2;
}
var fixtz = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();

// node_modules/d3-fetch/src/blob.js
function responseBlob(response) {
  if (!response.ok)
    throw new Error(response.status + " " + response.statusText);
  return response.blob();
}
function blob_default(input, init2) {
  return fetch(input, init2).then(responseBlob);
}

// node_modules/d3-fetch/src/buffer.js
function responseArrayBuffer(response) {
  if (!response.ok)
    throw new Error(response.status + " " + response.statusText);
  return response.arrayBuffer();
}
function buffer_default(input, init2) {
  return fetch(input, init2).then(responseArrayBuffer);
}

// node_modules/d3-fetch/src/text.js
function responseText(response) {
  if (!response.ok)
    throw new Error(response.status + " " + response.statusText);
  return response.text();
}
function text_default3(input, init2) {
  return fetch(input, init2).then(responseText);
}

// node_modules/d3-fetch/src/dsv.js
function dsvParse(parse) {
  return function(input, init2, row) {
    if (arguments.length === 2 && typeof init2 === "function")
      row = init2, init2 = void 0;
    return text_default3(input, init2).then(function(response) {
      return parse(response, row);
    });
  };
}
function dsv(delimiter, input, init2, row) {
  if (arguments.length === 3 && typeof init2 === "function")
    row = init2, init2 = void 0;
  var format2 = dsv_default(delimiter);
  return text_default3(input, init2).then(function(response) {
    return format2.parse(response, row);
  });
}
var csv2 = dsvParse(csvParse);
var tsv2 = dsvParse(tsvParse);

// node_modules/d3-fetch/src/image.js
function image_default(input, init2) {
  return new Promise(function(resolve, reject) {
    var image = new Image();
    for (var key in init2)
      image[key] = init2[key];
    image.onerror = reject;
    image.onload = function() {
      resolve(image);
    };
    image.src = input;
  });
}

// node_modules/d3-fetch/src/json.js
function responseJson(response) {
  if (!response.ok)
    throw new Error(response.status + " " + response.statusText);
  if (response.status === 204 || response.status === 205)
    return;
  return response.json();
}
function json_default(input, init2) {
  return fetch(input, init2).then(responseJson);
}

// node_modules/d3-fetch/src/xml.js
function parser(type2) {
  return function(input, init2) {
    return text_default3(input, init2).then(function(text) {
      return new DOMParser().parseFromString(text, type2);
    });
  };
}
var xml_default = parser("application/xml");
var html = parser("text/html");
var svg = parser("image/svg+xml");

// node_modules/d3-force/src/center.js
function center_default(x5, y5) {
  var nodes;
  if (x5 == null)
    x5 = 0;
  if (y5 == null)
    y5 = 0;
  function force() {
    var i, n = nodes.length, node, sx = 0, sy = 0;
    for (i = 0; i < n; ++i) {
      node = nodes[i], sx += node.x, sy += node.y;
    }
    for (sx = sx / n - x5, sy = sy / n - y5, i = 0; i < n; ++i) {
      node = nodes[i], node.x -= sx, node.y -= sy;
    }
  }
  force.initialize = function(_) {
    nodes = _;
  };
  force.x = function(_) {
    return arguments.length ? (x5 = +_, force) : x5;
  };
  force.y = function(_) {
    return arguments.length ? (y5 = +_, force) : y5;
  };
  return force;
}

// node_modules/d3-force/src/constant.js
function constant_default8(x5) {
  return function() {
    return x5;
  };
}

// node_modules/d3-force/src/jiggle.js
function jiggle_default() {
  return (Math.random() - 0.5) * 1e-6;
}

// node_modules/d3-quadtree/src/add.js
function add_default(d) {
  var x5 = +this._x.call(null, d), y5 = +this._y.call(null, d);
  return add(this.cover(x5, y5), x5, y5, d);
}
function add(tree, x5, y5, d) {
  if (isNaN(x5) || isNaN(y5))
    return tree;
  var parent, node = tree._root, leaf = {data: d}, x06 = tree._x0, y06 = tree._y0, x12 = tree._x1, y12 = tree._y1, xm, ym, xp, yp, right2, bottom2, i, j;
  if (!node)
    return tree._root = leaf, tree;
  while (node.length) {
    if (right2 = x5 >= (xm = (x06 + x12) / 2))
      x06 = xm;
    else
      x12 = xm;
    if (bottom2 = y5 >= (ym = (y06 + y12) / 2))
      y06 = ym;
    else
      y12 = ym;
    if (parent = node, !(node = node[i = bottom2 << 1 | right2]))
      return parent[i] = leaf, tree;
  }
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x5 === xp && y5 === yp)
    return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;
  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right2 = x5 >= (xm = (x06 + x12) / 2))
      x06 = xm;
    else
      x12 = xm;
    if (bottom2 = y5 >= (ym = (y06 + y12) / 2))
      y06 = ym;
    else
      y12 = ym;
  } while ((i = bottom2 << 1 | right2) === (j = (yp >= ym) << 1 | xp >= xm));
  return parent[j] = node, parent[i] = leaf, tree;
}
function addAll(data) {
  var d, i, n = data.length, x5, y5, xz = new Array(n), yz = new Array(n), x06 = Infinity, y06 = Infinity, x12 = -Infinity, y12 = -Infinity;
  for (i = 0; i < n; ++i) {
    if (isNaN(x5 = +this._x.call(null, d = data[i])) || isNaN(y5 = +this._y.call(null, d)))
      continue;
    xz[i] = x5;
    yz[i] = y5;
    if (x5 < x06)
      x06 = x5;
    if (x5 > x12)
      x12 = x5;
    if (y5 < y06)
      y06 = y5;
    if (y5 > y12)
      y12 = y5;
  }
  if (x06 > x12 || y06 > y12)
    return this;
  this.cover(x06, y06).cover(x12, y12);
  for (i = 0; i < n; ++i) {
    add(this, xz[i], yz[i], data[i]);
  }
  return this;
}

// node_modules/d3-quadtree/src/cover.js
function cover_default(x5, y5) {
  if (isNaN(x5 = +x5) || isNaN(y5 = +y5))
    return this;
  var x06 = this._x0, y06 = this._y0, x12 = this._x1, y12 = this._y1;
  if (isNaN(x06)) {
    x12 = (x06 = Math.floor(x5)) + 1;
    y12 = (y06 = Math.floor(y5)) + 1;
  } else {
    var z = x12 - x06, node = this._root, parent, i;
    while (x06 > x5 || x5 >= x12 || y06 > y5 || y5 >= y12) {
      i = (y5 < y06) << 1 | x5 < x06;
      parent = new Array(4), parent[i] = node, node = parent, z *= 2;
      switch (i) {
        case 0:
          x12 = x06 + z, y12 = y06 + z;
          break;
        case 1:
          x06 = x12 - z, y12 = y06 + z;
          break;
        case 2:
          x12 = x06 + z, y06 = y12 - z;
          break;
        case 3:
          x06 = x12 - z, y06 = y12 - z;
          break;
      }
    }
    if (this._root && this._root.length)
      this._root = node;
  }
  this._x0 = x06;
  this._y0 = y06;
  this._x1 = x12;
  this._y1 = y12;
  return this;
}

// node_modules/d3-quadtree/src/data.js
function data_default2() {
  var data = [];
  this.visit(function(node) {
    if (!node.length)
      do
        data.push(node.data);
      while (node = node.next);
  });
  return data;
}

// node_modules/d3-quadtree/src/extent.js
function extent_default2(_) {
  return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}

// node_modules/d3-quadtree/src/quad.js
function quad_default(node, x06, y06, x12, y12) {
  this.node = node;
  this.x0 = x06;
  this.y0 = y06;
  this.x1 = x12;
  this.y1 = y12;
}

// node_modules/d3-quadtree/src/find.js
function find_default(x5, y5, radius) {
  var data, x06 = this._x0, y06 = this._y0, x12, y12, x22, y22, x32 = this._x1, y32 = this._y1, quads = [], node = this._root, q, i;
  if (node)
    quads.push(new quad_default(node, x06, y06, x32, y32));
  if (radius == null)
    radius = Infinity;
  else {
    x06 = x5 - radius, y06 = y5 - radius;
    x32 = x5 + radius, y32 = y5 + radius;
    radius *= radius;
  }
  while (q = quads.pop()) {
    if (!(node = q.node) || (x12 = q.x0) > x32 || (y12 = q.y0) > y32 || (x22 = q.x1) < x06 || (y22 = q.y1) < y06)
      continue;
    if (node.length) {
      var xm = (x12 + x22) / 2, ym = (y12 + y22) / 2;
      quads.push(new quad_default(node[3], xm, ym, x22, y22), new quad_default(node[2], x12, ym, xm, y22), new quad_default(node[1], xm, y12, x22, ym), new quad_default(node[0], x12, y12, xm, ym));
      if (i = (y5 >= ym) << 1 | x5 >= xm) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    } else {
      var dx = x5 - +this._x.call(null, node.data), dy = y5 - +this._y.call(null, node.data), d2 = dx * dx + dy * dy;
      if (d2 < radius) {
        var d = Math.sqrt(radius = d2);
        x06 = x5 - d, y06 = y5 - d;
        x32 = x5 + d, y32 = y5 + d;
        data = node.data;
      }
    }
  }
  return data;
}

// node_modules/d3-quadtree/src/remove.js
function remove_default3(d) {
  if (isNaN(x5 = +this._x.call(null, d)) || isNaN(y5 = +this._y.call(null, d)))
    return this;
  var parent, node = this._root, retainer, previous, next, x06 = this._x0, y06 = this._y0, x12 = this._x1, y12 = this._y1, x5, y5, xm, ym, right2, bottom2, i, j;
  if (!node)
    return this;
  if (node.length)
    while (true) {
      if (right2 = x5 >= (xm = (x06 + x12) / 2))
        x06 = xm;
      else
        x12 = xm;
      if (bottom2 = y5 >= (ym = (y06 + y12) / 2))
        y06 = ym;
      else
        y12 = ym;
      if (!(parent = node, node = node[i = bottom2 << 1 | right2]))
        return this;
      if (!node.length)
        break;
      if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3])
        retainer = parent, j = i;
    }
  while (node.data !== d)
    if (!(previous = node, node = node.next))
      return this;
  if (next = node.next)
    delete node.next;
  if (previous)
    return next ? previous.next = next : delete previous.next, this;
  if (!parent)
    return this._root = next, this;
  next ? parent[i] = next : delete parent[i];
  if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
    if (retainer)
      retainer[j] = node;
    else
      this._root = node;
  }
  return this;
}
function removeAll(data) {
  for (var i = 0, n = data.length; i < n; ++i)
    this.remove(data[i]);
  return this;
}

// node_modules/d3-quadtree/src/root.js
function root_default() {
  return this._root;
}

// node_modules/d3-quadtree/src/size.js
function size_default2() {
  var size = 0;
  this.visit(function(node) {
    if (!node.length)
      do
        ++size;
      while (node = node.next);
  });
  return size;
}

// node_modules/d3-quadtree/src/visit.js
function visit_default(callback) {
  var quads = [], q, node = this._root, child, x06, y06, x12, y12;
  if (node)
    quads.push(new quad_default(node, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    if (!callback(node = q.node, x06 = q.x0, y06 = q.y0, x12 = q.x1, y12 = q.y1) && node.length) {
      var xm = (x06 + x12) / 2, ym = (y06 + y12) / 2;
      if (child = node[3])
        quads.push(new quad_default(child, xm, ym, x12, y12));
      if (child = node[2])
        quads.push(new quad_default(child, x06, ym, xm, y12));
      if (child = node[1])
        quads.push(new quad_default(child, xm, y06, x12, ym));
      if (child = node[0])
        quads.push(new quad_default(child, x06, y06, xm, ym));
    }
  }
  return this;
}

// node_modules/d3-quadtree/src/visitAfter.js
function visitAfter_default(callback) {
  var quads = [], next = [], q;
  if (this._root)
    quads.push(new quad_default(this._root, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    var node = q.node;
    if (node.length) {
      var child, x06 = q.x0, y06 = q.y0, x12 = q.x1, y12 = q.y1, xm = (x06 + x12) / 2, ym = (y06 + y12) / 2;
      if (child = node[0])
        quads.push(new quad_default(child, x06, y06, xm, ym));
      if (child = node[1])
        quads.push(new quad_default(child, xm, y06, x12, ym));
      if (child = node[2])
        quads.push(new quad_default(child, x06, ym, xm, y12));
      if (child = node[3])
        quads.push(new quad_default(child, xm, ym, x12, y12));
    }
    next.push(q);
  }
  while (q = next.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }
  return this;
}

// node_modules/d3-quadtree/src/x.js
function defaultX2(d) {
  return d[0];
}
function x_default(_) {
  return arguments.length ? (this._x = _, this) : this._x;
}

// node_modules/d3-quadtree/src/y.js
function defaultY2(d) {
  return d[1];
}
function y_default(_) {
  return arguments.length ? (this._y = _, this) : this._y;
}

// node_modules/d3-quadtree/src/quadtree.js
function quadtree(nodes, x5, y5) {
  var tree = new Quadtree(x5 == null ? defaultX2 : x5, y5 == null ? defaultY2 : y5, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}
function Quadtree(x5, y5, x06, y06, x12, y12) {
  this._x = x5;
  this._y = y5;
  this._x0 = x06;
  this._y0 = y06;
  this._x1 = x12;
  this._y1 = y12;
  this._root = void 0;
}
function leaf_copy(leaf) {
  var copy3 = {data: leaf.data}, next = copy3;
  while (leaf = leaf.next)
    next = next.next = {data: leaf.data};
  return copy3;
}
var treeProto = quadtree.prototype = Quadtree.prototype;
treeProto.copy = function() {
  var copy3 = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1), node = this._root, nodes, child;
  if (!node)
    return copy3;
  if (!node.length)
    return copy3._root = leaf_copy(node), copy3;
  nodes = [{source: node, target: copy3._root = new Array(4)}];
  while (node = nodes.pop()) {
    for (var i = 0; i < 4; ++i) {
      if (child = node.source[i]) {
        if (child.length)
          nodes.push({source: child, target: node.target[i] = new Array(4)});
        else
          node.target[i] = leaf_copy(child);
      }
    }
  }
  return copy3;
};
treeProto.add = add_default;
treeProto.addAll = addAll;
treeProto.cover = cover_default;
treeProto.data = data_default2;
treeProto.extent = extent_default2;
treeProto.find = find_default;
treeProto.remove = remove_default3;
treeProto.removeAll = removeAll;
treeProto.root = root_default;
treeProto.size = size_default2;
treeProto.visit = visit_default;
treeProto.visitAfter = visitAfter_default;
treeProto.x = x_default;
treeProto.y = y_default;

// node_modules/d3-force/src/collide.js
function x(d) {
  return d.x + d.vx;
}
function y(d) {
  return d.y + d.vy;
}
function collide_default(radius) {
  var nodes, radii, strength = 1, iterations2 = 1;
  if (typeof radius !== "function")
    radius = constant_default8(radius == null ? 1 : +radius);
  function force() {
    var i, n = nodes.length, tree, node, xi, yi, ri, ri2;
    for (var k2 = 0; k2 < iterations2; ++k2) {
      tree = quadtree(nodes, x, y).visitAfter(prepare);
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        ri = radii[node.index], ri2 = ri * ri;
        xi = node.x + node.vx;
        yi = node.y + node.vy;
        tree.visit(apply);
      }
    }
    function apply(quad, x06, y06, x12, y12) {
      var data = quad.data, rj = quad.r, r = ri + rj;
      if (data) {
        if (data.index > node.index) {
          var x5 = xi - data.x - data.vx, y5 = yi - data.y - data.vy, l = x5 * x5 + y5 * y5;
          if (l < r * r) {
            if (x5 === 0)
              x5 = jiggle_default(), l += x5 * x5;
            if (y5 === 0)
              y5 = jiggle_default(), l += y5 * y5;
            l = (r - (l = Math.sqrt(l))) / l * strength;
            node.vx += (x5 *= l) * (r = (rj *= rj) / (ri2 + rj));
            node.vy += (y5 *= l) * r;
            data.vx -= x5 * (r = 1 - r);
            data.vy -= y5 * r;
          }
        }
        return;
      }
      return x06 > xi + r || x12 < xi - r || y06 > yi + r || y12 < yi - r;
    }
  }
  function prepare(quad) {
    if (quad.data)
      return quad.r = radii[quad.data.index];
    for (var i = quad.r = 0; i < 4; ++i) {
      if (quad[i] && quad[i].r > quad.r) {
        quad.r = quad[i].r;
      }
    }
  }
  function initialize() {
    if (!nodes)
      return;
    var i, n = nodes.length, node;
    radii = new Array(n);
    for (i = 0; i < n; ++i)
      node = nodes[i], radii[node.index] = +radius(node, i, nodes);
  }
  force.initialize = function(_) {
    nodes = _;
    initialize();
  };
  force.iterations = function(_) {
    return arguments.length ? (iterations2 = +_, force) : iterations2;
  };
  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength;
  };
  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant_default8(+_), initialize(), force) : radius;
  };
  return force;
}

// node_modules/d3-force/src/link.js
function index(d) {
  return d.index;
}
function find(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node)
    throw new Error("missing: " + nodeId);
  return node;
}
function link_default(links) {
  var id2 = index, strength = defaultStrength, strengths, distance = constant_default8(30), distances, nodes, count2, bias, iterations2 = 1;
  if (links == null)
    links = [];
  function defaultStrength(link3) {
    return 1 / Math.min(count2[link3.source.index], count2[link3.target.index]);
  }
  function force(alpha) {
    for (var k2 = 0, n = links.length; k2 < iterations2; ++k2) {
      for (var i = 0, link3, source, target, x5, y5, l, b; i < n; ++i) {
        link3 = links[i], source = link3.source, target = link3.target;
        x5 = target.x + target.vx - source.x - source.vx || jiggle_default();
        y5 = target.y + target.vy - source.y - source.vy || jiggle_default();
        l = Math.sqrt(x5 * x5 + y5 * y5);
        l = (l - distances[i]) / l * alpha * strengths[i];
        x5 *= l, y5 *= l;
        target.vx -= x5 * (b = bias[i]);
        target.vy -= y5 * b;
        source.vx += x5 * (b = 1 - b);
        source.vy += y5 * b;
      }
    }
  }
  function initialize() {
    if (!nodes)
      return;
    var i, n = nodes.length, m = links.length, nodeById = map_default(nodes, id2), link3;
    for (i = 0, count2 = new Array(n); i < m; ++i) {
      link3 = links[i], link3.index = i;
      if (typeof link3.source !== "object")
        link3.source = find(nodeById, link3.source);
      if (typeof link3.target !== "object")
        link3.target = find(nodeById, link3.target);
      count2[link3.source.index] = (count2[link3.source.index] || 0) + 1;
      count2[link3.target.index] = (count2[link3.target.index] || 0) + 1;
    }
    for (i = 0, bias = new Array(m); i < m; ++i) {
      link3 = links[i], bias[i] = count2[link3.source.index] / (count2[link3.source.index] + count2[link3.target.index]);
    }
    strengths = new Array(m), initializeStrength();
    distances = new Array(m), initializeDistance();
  }
  function initializeStrength() {
    if (!nodes)
      return;
    for (var i = 0, n = links.length; i < n; ++i) {
      strengths[i] = +strength(links[i], i, links);
    }
  }
  function initializeDistance() {
    if (!nodes)
      return;
    for (var i = 0, n = links.length; i < n; ++i) {
      distances[i] = +distance(links[i], i, links);
    }
  }
  force.initialize = function(_) {
    nodes = _;
    initialize();
  };
  force.links = function(_) {
    return arguments.length ? (links = _, initialize(), force) : links;
  };
  force.id = function(_) {
    return arguments.length ? (id2 = _, force) : id2;
  };
  force.iterations = function(_) {
    return arguments.length ? (iterations2 = +_, force) : iterations2;
  };
  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant_default8(+_), initializeStrength(), force) : strength;
  };
  force.distance = function(_) {
    return arguments.length ? (distance = typeof _ === "function" ? _ : constant_default8(+_), initializeDistance(), force) : distance;
  };
  return force;
}

// node_modules/d3-force/src/simulation.js
function x2(d) {
  return d.x;
}
function y2(d) {
  return d.y;
}
var initialRadius = 10;
var initialAngle = Math.PI * (3 - Math.sqrt(5));
function simulation_default(nodes) {
  var simulation, alpha = 1, alphaMin = 1e-3, alphaDecay = 1 - Math.pow(alphaMin, 1 / 300), alphaTarget = 0, velocityDecay = 0.6, forces = map_default(), stepper = timer(step), event2 = dispatch_default("tick", "end");
  if (nodes == null)
    nodes = [];
  function step() {
    tick();
    event2.call("tick", simulation);
    if (alpha < alphaMin) {
      stepper.stop();
      event2.call("end", simulation);
    }
  }
  function tick(iterations2) {
    var i, n = nodes.length, node;
    if (iterations2 === void 0)
      iterations2 = 1;
    for (var k2 = 0; k2 < iterations2; ++k2) {
      alpha += (alphaTarget - alpha) * alphaDecay;
      forces.each(function(force) {
        force(alpha);
      });
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        if (node.fx == null)
          node.x += node.vx *= velocityDecay;
        else
          node.x = node.fx, node.vx = 0;
        if (node.fy == null)
          node.y += node.vy *= velocityDecay;
        else
          node.y = node.fy, node.vy = 0;
      }
    }
    return simulation;
  }
  function initializeNodes() {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.index = i;
      if (node.fx != null)
        node.x = node.fx;
      if (node.fy != null)
        node.y = node.fy;
      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(i), angle2 = i * initialAngle;
        node.x = radius * Math.cos(angle2);
        node.y = radius * Math.sin(angle2);
      }
      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }
  function initializeForce(force) {
    if (force.initialize)
      force.initialize(nodes);
    return force;
  }
  initializeNodes();
  return simulation = {
    tick,
    restart: function() {
      return stepper.restart(step), simulation;
    },
    stop: function() {
      return stepper.stop(), simulation;
    },
    nodes: function(_) {
      return arguments.length ? (nodes = _, initializeNodes(), forces.each(initializeForce), simulation) : nodes;
    },
    alpha: function(_) {
      return arguments.length ? (alpha = +_, simulation) : alpha;
    },
    alphaMin: function(_) {
      return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
    },
    alphaDecay: function(_) {
      return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
    },
    alphaTarget: function(_) {
      return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
    },
    velocityDecay: function(_) {
      return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
    },
    force: function(name, _) {
      return arguments.length > 1 ? (_ == null ? forces.remove(name) : forces.set(name, initializeForce(_)), simulation) : forces.get(name);
    },
    find: function(x5, y5, radius) {
      var i = 0, n = nodes.length, dx, dy, d2, node, closest;
      if (radius == null)
        radius = Infinity;
      else
        radius *= radius;
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        dx = x5 - node.x;
        dy = y5 - node.y;
        d2 = dx * dx + dy * dy;
        if (d2 < radius)
          closest = node, radius = d2;
      }
      return closest;
    },
    on: function(name, _) {
      return arguments.length > 1 ? (event2.on(name, _), simulation) : event2.on(name);
    }
  };
}

// node_modules/d3-force/src/manyBody.js
function manyBody_default() {
  var nodes, node, alpha, strength = constant_default8(-30), strengths, distanceMin2 = 1, distanceMax2 = Infinity, theta2 = 0.81;
  function force(_) {
    var i, n = nodes.length, tree = quadtree(nodes, x2, y2).visitAfter(accumulate);
    for (alpha = _, i = 0; i < n; ++i)
      node = nodes[i], tree.visit(apply);
  }
  function initialize() {
    if (!nodes)
      return;
    var i, n = nodes.length, node2;
    strengths = new Array(n);
    for (i = 0; i < n; ++i)
      node2 = nodes[i], strengths[node2.index] = +strength(node2, i, nodes);
  }
  function accumulate(quad) {
    var strength2 = 0, q, c4, weight = 0, x5, y5, i;
    if (quad.length) {
      for (x5 = y5 = i = 0; i < 4; ++i) {
        if ((q = quad[i]) && (c4 = Math.abs(q.value))) {
          strength2 += q.value, weight += c4, x5 += c4 * q.x, y5 += c4 * q.y;
        }
      }
      quad.x = x5 / weight;
      quad.y = y5 / weight;
    } else {
      q = quad;
      q.x = q.data.x;
      q.y = q.data.y;
      do
        strength2 += strengths[q.data.index];
      while (q = q.next);
    }
    quad.value = strength2;
  }
  function apply(quad, x12, _, x22) {
    if (!quad.value)
      return true;
    var x5 = quad.x - node.x, y5 = quad.y - node.y, w = x22 - x12, l = x5 * x5 + y5 * y5;
    if (w * w / theta2 < l) {
      if (l < distanceMax2) {
        if (x5 === 0)
          x5 = jiggle_default(), l += x5 * x5;
        if (y5 === 0)
          y5 = jiggle_default(), l += y5 * y5;
        if (l < distanceMin2)
          l = Math.sqrt(distanceMin2 * l);
        node.vx += x5 * quad.value * alpha / l;
        node.vy += y5 * quad.value * alpha / l;
      }
      return true;
    } else if (quad.length || l >= distanceMax2)
      return;
    if (quad.data !== node || quad.next) {
      if (x5 === 0)
        x5 = jiggle_default(), l += x5 * x5;
      if (y5 === 0)
        y5 = jiggle_default(), l += y5 * y5;
      if (l < distanceMin2)
        l = Math.sqrt(distanceMin2 * l);
    }
    do
      if (quad.data !== node) {
        w = strengths[quad.data.index] * alpha / l;
        node.vx += x5 * w;
        node.vy += y5 * w;
      }
    while (quad = quad.next);
  }
  force.initialize = function(_) {
    nodes = _;
    initialize();
  };
  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant_default8(+_), initialize(), force) : strength;
  };
  force.distanceMin = function(_) {
    return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
  };
  force.distanceMax = function(_) {
    return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
  };
  force.theta = function(_) {
    return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
  };
  return force;
}

// node_modules/d3-force/src/radial.js
function radial_default(radius, x5, y5) {
  var nodes, strength = constant_default8(0.1), strengths, radiuses;
  if (typeof radius !== "function")
    radius = constant_default8(+radius);
  if (x5 == null)
    x5 = 0;
  if (y5 == null)
    y5 = 0;
  function force(alpha) {
    for (var i = 0, n = nodes.length; i < n; ++i) {
      var node = nodes[i], dx = node.x - x5 || 1e-6, dy = node.y - y5 || 1e-6, r = Math.sqrt(dx * dx + dy * dy), k2 = (radiuses[i] - r) * strengths[i] * alpha / r;
      node.vx += dx * k2;
      node.vy += dy * k2;
    }
  }
  function initialize() {
    if (!nodes)
      return;
    var i, n = nodes.length;
    strengths = new Array(n);
    radiuses = new Array(n);
    for (i = 0; i < n; ++i) {
      radiuses[i] = +radius(nodes[i], i, nodes);
      strengths[i] = isNaN(radiuses[i]) ? 0 : +strength(nodes[i], i, nodes);
    }
  }
  force.initialize = function(_) {
    nodes = _, initialize();
  };
  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant_default8(+_), initialize(), force) : strength;
  };
  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant_default8(+_), initialize(), force) : radius;
  };
  force.x = function(_) {
    return arguments.length ? (x5 = +_, force) : x5;
  };
  force.y = function(_) {
    return arguments.length ? (y5 = +_, force) : y5;
  };
  return force;
}

// node_modules/d3-force/src/x.js
function x_default2(x5) {
  var strength = constant_default8(0.1), nodes, strengths, xz;
  if (typeof x5 !== "function")
    x5 = constant_default8(x5 == null ? 0 : +x5);
  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
    }
  }
  function initialize() {
    if (!nodes)
      return;
    var i, n = nodes.length;
    strengths = new Array(n);
    xz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(xz[i] = +x5(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }
  force.initialize = function(_) {
    nodes = _;
    initialize();
  };
  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant_default8(+_), initialize(), force) : strength;
  };
  force.x = function(_) {
    return arguments.length ? (x5 = typeof _ === "function" ? _ : constant_default8(+_), initialize(), force) : x5;
  };
  return force;
}

// node_modules/d3-force/src/y.js
function y_default2(y5) {
  var strength = constant_default8(0.1), nodes, strengths, yz;
  if (typeof y5 !== "function")
    y5 = constant_default8(y5 == null ? 0 : +y5);
  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
    }
  }
  function initialize() {
    if (!nodes)
      return;
    var i, n = nodes.length;
    strengths = new Array(n);
    yz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(yz[i] = +y5(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }
  force.initialize = function(_) {
    nodes = _;
    initialize();
  };
  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant_default8(+_), initialize(), force) : strength;
  };
  force.y = function(_) {
    return arguments.length ? (y5 = typeof _ === "function" ? _ : constant_default8(+_), initialize(), force) : y5;
  };
  return force;
}

// node_modules/d3-format/src/formatDecimal.js
function formatDecimal_default(x5) {
  return Math.abs(x5 = Math.round(x5)) >= 1e21 ? x5.toLocaleString("en").replace(/,/g, "") : x5.toString(10);
}
function formatDecimalParts(x5, p) {
  if ((i = (x5 = p ? x5.toExponential(p - 1) : x5.toExponential()).indexOf("e")) < 0)
    return null;
  var i, coefficient = x5.slice(0, i);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x5.slice(i + 1)
  ];
}

// node_modules/d3-format/src/exponent.js
function exponent_default(x5) {
  return x5 = formatDecimalParts(Math.abs(x5)), x5 ? x5[1] : NaN;
}

// node_modules/d3-format/src/formatGroup.js
function formatGroup_default(grouping, thousands) {
  return function(value, width) {
    var i = value.length, t = [], j = 0, g = grouping[0], length2 = 0;
    while (i > 0 && g > 0) {
      if (length2 + g + 1 > width)
        g = Math.max(1, width - length2);
      t.push(value.substring(i -= g, i + g));
      if ((length2 += g + 1) > width)
        break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}

// node_modules/d3-format/src/formatNumerals.js
function formatNumerals_default(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// node_modules/d3-format/src/formatSpecifier.js
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// node_modules/d3-format/src/formatTrim.js
function formatTrim_default(s2) {
  out:
    for (var n = s2.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s2[i]) {
        case ".":
          i0 = i1 = i;
          break;
        case "0":
          if (i0 === 0)
            i0 = i;
          i1 = i;
          break;
        default:
          if (!+s2[i])
            break out;
          if (i0 > 0)
            i0 = 0;
          break;
      }
    }
  return i0 > 0 ? s2.slice(0, i0) + s2.slice(i1 + 1) : s2;
}

// node_modules/d3-format/src/formatPrefixAuto.js
var prefixExponent;
function formatPrefixAuto_default(x5, p) {
  var d = formatDecimalParts(x5, p);
  if (!d)
    return x5 + "";
  var coefficient = d[0], exponent2 = d[1], i = exponent2 - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x5, Math.max(0, p + i - 1))[0];
}

// node_modules/d3-format/src/formatRounded.js
function formatRounded_default(x5, p) {
  var d = formatDecimalParts(x5, p);
  if (!d)
    return x5 + "";
  var coefficient = d[0], exponent2 = d[1];
  return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
}

// node_modules/d3-format/src/formatTypes.js
var formatTypes_default = {
  "%": function(x5, p) {
    return (x5 * 100).toFixed(p);
  },
  b: function(x5) {
    return Math.round(x5).toString(2);
  },
  c: function(x5) {
    return x5 + "";
  },
  d: formatDecimal_default,
  e: function(x5, p) {
    return x5.toExponential(p);
  },
  f: function(x5, p) {
    return x5.toFixed(p);
  },
  g: function(x5, p) {
    return x5.toPrecision(p);
  },
  o: function(x5) {
    return Math.round(x5).toString(8);
  },
  p: function(x5, p) {
    return formatRounded_default(x5 * 100, p);
  },
  r: formatRounded_default,
  s: formatPrefixAuto_default,
  X: function(x5) {
    return Math.round(x5).toString(16).toUpperCase();
  },
  x: function(x5) {
    return Math.round(x5).toString(16);
  }
};

// node_modules/d3-format/src/identity.js
function identity_default3(x5) {
  return x5;
}

// node_modules/d3-format/src/locale.js
var map3 = Array.prototype.map;
var prefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function locale_default(locale3) {
  var group = locale3.grouping === void 0 || locale3.thousands === void 0 ? identity_default3 : formatGroup_default(map3.call(locale3.grouping, Number), locale3.thousands + ""), currencyPrefix = locale3.currency === void 0 ? "" : locale3.currency[0] + "", currencySuffix = locale3.currency === void 0 ? "" : locale3.currency[1] + "", decimal = locale3.decimal === void 0 ? "." : locale3.decimal + "", numerals = locale3.numerals === void 0 ? identity_default3 : formatNumerals_default(map3.call(locale3.numerals, String)), percent = locale3.percent === void 0 ? "%" : locale3.percent + "", minus = locale3.minus === void 0 ? "-" : locale3.minus + "", nan = locale3.nan === void 0 ? "NaN" : locale3.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign3 = specifier.sign, symbol = specifier.symbol, zero2 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type2 = specifier.type;
    if (type2 === "n")
      comma = true, type2 = "g";
    else if (!formatTypes_default[type2])
      precision === void 0 && (precision = 12), trim = true, type2 = "g";
    if (zero2 || fill === "0" && align === "=")
      zero2 = true, fill = "0", align = "=";
    var prefix2 = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type2) ? "0" + type2.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type2) ? percent : "";
    var formatType = formatTypes_default[type2], maybeSuffix = /[defgprs%]/.test(type2);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type2) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix2, valueSuffix = suffix, i, n, c4;
      if (type2 === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim)
          value = formatTrim_default(value);
        if (valueNegative && +value === 0 && sign3 !== "+")
          valueNegative = false;
        valuePrefix = (valueNegative ? sign3 === "(" ? sign3 : minus : sign3 === "-" || sign3 === "(" ? "" : sign3) + valuePrefix;
        valueSuffix = (type2 === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign3 === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c4 = value.charCodeAt(i), 48 > c4 || c4 > 57) {
              valueSuffix = (c4 === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero2)
        value = group(value, Infinity);
      var length2 = valuePrefix.length + value.length + valueSuffix.length, padding = length2 < width ? new Array(width - length2 + 1).join(fill) : "";
      if (comma && zero2)
        value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length2 = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length2);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k2 = Math.pow(10, -e), prefix2 = prefixes[8 + e / 3];
    return function(value2) {
      return f(k2 * value2) + prefix2;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}

// node_modules/d3-format/src/defaultLocale.js
var locale;
var format;
var formatPrefix;
defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});
function defaultLocale(definition) {
  locale = locale_default(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

// node_modules/d3-format/src/precisionFixed.js
function precisionFixed_default(step) {
  return Math.max(0, -exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionPrefix.js
function precisionPrefix_default(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3 - exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionRound.js
function precisionRound_default(step, max3) {
  step = Math.abs(step), max3 = Math.abs(max3) - step;
  return Math.max(0, exponent_default(max3) - exponent_default(step)) + 1;
}

// node_modules/d3-geo/src/adder.js
function adder_default() {
  return new Adder();
}
function Adder() {
  this.reset();
}
Adder.prototype = {
  constructor: Adder,
  reset: function() {
    this.s = this.t = 0;
  },
  add: function(y5) {
    add2(temp, y5, this.t);
    add2(this, temp.s, this.s);
    if (this.s)
      this.t += temp.t;
    else
      this.s = temp.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var temp = new Adder();
function add2(adder, a2, b) {
  var x5 = adder.s = a2 + b, bv = x5 - a2, av = x5 - bv;
  adder.t = a2 - av + (b - bv);
}

// node_modules/d3-geo/src/math.js
var epsilon4 = 1e-6;
var epsilon22 = 1e-12;
var pi4 = Math.PI;
var halfPi3 = pi4 / 2;
var quarterPi = pi4 / 4;
var tau4 = pi4 * 2;
var degrees2 = 180 / pi4;
var radians = pi4 / 180;
var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos2 = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var log = Math.log;
var pow = Math.pow;
var sin2 = Math.sin;
var sign = Math.sign || function(x5) {
  return x5 > 0 ? 1 : x5 < 0 ? -1 : 0;
};
var sqrt = Math.sqrt;
var tan = Math.tan;
function acos(x5) {
  return x5 > 1 ? 0 : x5 < -1 ? pi4 : Math.acos(x5);
}
function asin(x5) {
  return x5 > 1 ? halfPi3 : x5 < -1 ? -halfPi3 : Math.asin(x5);
}
function haversin(x5) {
  return (x5 = sin2(x5 / 2)) * x5;
}

// node_modules/d3-geo/src/noop.js
function noop2() {
}

// node_modules/d3-geo/src/stream.js
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}
var streamObjectType = {
  Feature: function(object2, stream) {
    streamGeometry(object2.geometry, stream);
  },
  FeatureCollection: function(object2, stream) {
    var features = object2.features, i = -1, n = features.length;
    while (++i < n)
      streamGeometry(features[i].geometry, stream);
  }
};
var streamGeometryType = {
  Sphere: function(object2, stream) {
    stream.sphere();
  },
  Point: function(object2, stream) {
    object2 = object2.coordinates;
    stream.point(object2[0], object2[1], object2[2]);
  },
  MultiPoint: function(object2, stream) {
    var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
    while (++i < n)
      object2 = coordinates2[i], stream.point(object2[0], object2[1], object2[2]);
  },
  LineString: function(object2, stream) {
    streamLine(object2.coordinates, stream, 0);
  },
  MultiLineString: function(object2, stream) {
    var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
    while (++i < n)
      streamLine(coordinates2[i], stream, 0);
  },
  Polygon: function(object2, stream) {
    streamPolygon(object2.coordinates, stream);
  },
  MultiPolygon: function(object2, stream) {
    var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
    while (++i < n)
      streamPolygon(coordinates2[i], stream);
  },
  GeometryCollection: function(object2, stream) {
    var geometries = object2.geometries, i = -1, n = geometries.length;
    while (++i < n)
      streamGeometry(geometries[i], stream);
  }
};
function streamLine(coordinates2, stream, closed) {
  var i = -1, n = coordinates2.length - closed, coordinate;
  stream.lineStart();
  while (++i < n)
    coordinate = coordinates2[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}
function streamPolygon(coordinates2, stream) {
  var i = -1, n = coordinates2.length;
  stream.polygonStart();
  while (++i < n)
    streamLine(coordinates2[i], stream, 1);
  stream.polygonEnd();
}
function stream_default(object2, stream) {
  if (object2 && streamObjectType.hasOwnProperty(object2.type)) {
    streamObjectType[object2.type](object2, stream);
  } else {
    streamGeometry(object2, stream);
  }
}

// node_modules/d3-geo/src/area.js
var areaRingSum = adder_default();
var areaSum = adder_default();
var lambda00;
var phi00;
var lambda0;
var cosPhi0;
var sinPhi0;
var areaStream = {
  point: noop2,
  lineStart: noop2,
  lineEnd: noop2,
  polygonStart: function() {
    areaRingSum.reset();
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    var areaRing = +areaRingSum;
    areaSum.add(areaRing < 0 ? tau4 + areaRing : areaRing);
    this.lineStart = this.lineEnd = this.point = noop2;
  },
  sphere: function() {
    areaSum.add(tau4);
  }
};
function areaRingStart() {
  areaStream.point = areaPointFirst;
}
function areaRingEnd() {
  areaPoint(lambda00, phi00);
}
function areaPointFirst(lambda, phi2) {
  areaStream.point = areaPoint;
  lambda00 = lambda, phi00 = phi2;
  lambda *= radians, phi2 *= radians;
  lambda0 = lambda, cosPhi0 = cos2(phi2 = phi2 / 2 + quarterPi), sinPhi0 = sin2(phi2);
}
function areaPoint(lambda, phi2) {
  lambda *= radians, phi2 *= radians;
  phi2 = phi2 / 2 + quarterPi;
  var dLambda = lambda - lambda0, sdLambda = dLambda >= 0 ? 1 : -1, adLambda = sdLambda * dLambda, cosPhi = cos2(phi2), sinPhi = sin2(phi2), k2 = sinPhi0 * sinPhi, u = cosPhi0 * cosPhi + k2 * cos2(adLambda), v = k2 * sdLambda * sin2(adLambda);
  areaRingSum.add(atan2(v, u));
  lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}
function area_default2(object2) {
  areaSum.reset();
  stream_default(object2, areaStream);
  return areaSum * 2;
}

// node_modules/d3-geo/src/cartesian.js
function spherical(cartesian2) {
  return [atan2(cartesian2[1], cartesian2[0]), asin(cartesian2[2])];
}
function cartesian(spherical2) {
  var lambda = spherical2[0], phi2 = spherical2[1], cosPhi = cos2(phi2);
  return [cosPhi * cos2(lambda), cosPhi * sin2(lambda), sin2(phi2)];
}
function cartesianDot(a2, b) {
  return a2[0] * b[0] + a2[1] * b[1] + a2[2] * b[2];
}
function cartesianCross(a2, b) {
  return [a2[1] * b[2] - a2[2] * b[1], a2[2] * b[0] - a2[0] * b[2], a2[0] * b[1] - a2[1] * b[0]];
}
function cartesianAddInPlace(a2, b) {
  a2[0] += b[0], a2[1] += b[1], a2[2] += b[2];
}
function cartesianScale(vector, k2) {
  return [vector[0] * k2, vector[1] * k2, vector[2] * k2];
}
function cartesianNormalizeInPlace(d) {
  var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}

// node_modules/d3-geo/src/bounds.js
var lambda02;
var phi0;
var lambda1;
var phi1;
var lambda2;
var lambda002;
var phi002;
var p0;
var deltaSum = adder_default();
var ranges;
var range;
var boundsStream = {
  point: boundsPoint,
  lineStart: boundsLineStart,
  lineEnd: boundsLineEnd,
  polygonStart: function() {
    boundsStream.point = boundsRingPoint;
    boundsStream.lineStart = boundsRingStart;
    boundsStream.lineEnd = boundsRingEnd;
    deltaSum.reset();
    areaStream.polygonStart();
  },
  polygonEnd: function() {
    areaStream.polygonEnd();
    boundsStream.point = boundsPoint;
    boundsStream.lineStart = boundsLineStart;
    boundsStream.lineEnd = boundsLineEnd;
    if (areaRingSum < 0)
      lambda02 = -(lambda1 = 180), phi0 = -(phi1 = 90);
    else if (deltaSum > epsilon4)
      phi1 = 90;
    else if (deltaSum < -epsilon4)
      phi0 = -90;
    range[0] = lambda02, range[1] = lambda1;
  },
  sphere: function() {
    lambda02 = -(lambda1 = 180), phi0 = -(phi1 = 90);
  }
};
function boundsPoint(lambda, phi2) {
  ranges.push(range = [lambda02 = lambda, lambda1 = lambda]);
  if (phi2 < phi0)
    phi0 = phi2;
  if (phi2 > phi1)
    phi1 = phi2;
}
function linePoint(lambda, phi2) {
  var p = cartesian([lambda * radians, phi2 * radians]);
  if (p0) {
    var normal = cartesianCross(p0, p), equatorial = [normal[1], -normal[0], 0], inflection = cartesianCross(equatorial, normal);
    cartesianNormalizeInPlace(inflection);
    inflection = spherical(inflection);
    var delta = lambda - lambda2, sign3 = delta > 0 ? 1 : -1, lambdai = inflection[0] * degrees2 * sign3, phii, antimeridian = abs(delta) > 180;
    if (antimeridian ^ (sign3 * lambda2 < lambdai && lambdai < sign3 * lambda)) {
      phii = inflection[1] * degrees2;
      if (phii > phi1)
        phi1 = phii;
    } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign3 * lambda2 < lambdai && lambdai < sign3 * lambda)) {
      phii = -inflection[1] * degrees2;
      if (phii < phi0)
        phi0 = phii;
    } else {
      if (phi2 < phi0)
        phi0 = phi2;
      if (phi2 > phi1)
        phi1 = phi2;
    }
    if (antimeridian) {
      if (lambda < lambda2) {
        if (angle(lambda02, lambda) > angle(lambda02, lambda1))
          lambda1 = lambda;
      } else {
        if (angle(lambda, lambda1) > angle(lambda02, lambda1))
          lambda02 = lambda;
      }
    } else {
      if (lambda1 >= lambda02) {
        if (lambda < lambda02)
          lambda02 = lambda;
        if (lambda > lambda1)
          lambda1 = lambda;
      } else {
        if (lambda > lambda2) {
          if (angle(lambda02, lambda) > angle(lambda02, lambda1))
            lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda02, lambda1))
            lambda02 = lambda;
        }
      }
    }
  } else {
    ranges.push(range = [lambda02 = lambda, lambda1 = lambda]);
  }
  if (phi2 < phi0)
    phi0 = phi2;
  if (phi2 > phi1)
    phi1 = phi2;
  p0 = p, lambda2 = lambda;
}
function boundsLineStart() {
  boundsStream.point = linePoint;
}
function boundsLineEnd() {
  range[0] = lambda02, range[1] = lambda1;
  boundsStream.point = boundsPoint;
  p0 = null;
}
function boundsRingPoint(lambda, phi2) {
  if (p0) {
    var delta = lambda - lambda2;
    deltaSum.add(abs(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
  } else {
    lambda002 = lambda, phi002 = phi2;
  }
  areaStream.point(lambda, phi2);
  linePoint(lambda, phi2);
}
function boundsRingStart() {
  areaStream.lineStart();
}
function boundsRingEnd() {
  boundsRingPoint(lambda002, phi002);
  areaStream.lineEnd();
  if (abs(deltaSum) > epsilon4)
    lambda02 = -(lambda1 = 180);
  range[0] = lambda02, range[1] = lambda1;
  p0 = null;
}
function angle(lambda04, lambda12) {
  return (lambda12 -= lambda04) < 0 ? lambda12 + 360 : lambda12;
}
function rangeCompare(a2, b) {
  return a2[0] - b[0];
}
function rangeContains(range2, x5) {
  return range2[0] <= range2[1] ? range2[0] <= x5 && x5 <= range2[1] : x5 < range2[0] || range2[1] < x5;
}
function bounds_default(feature) {
  var i, n, a2, b, merged, deltaMax, delta;
  phi1 = lambda1 = -(lambda02 = phi0 = Infinity);
  ranges = [];
  stream_default(feature, boundsStream);
  if (n = ranges.length) {
    ranges.sort(rangeCompare);
    for (i = 1, a2 = ranges[0], merged = [a2]; i < n; ++i) {
      b = ranges[i];
      if (rangeContains(a2, b[0]) || rangeContains(a2, b[1])) {
        if (angle(a2[0], b[1]) > angle(a2[0], a2[1]))
          a2[1] = b[1];
        if (angle(b[0], a2[1]) > angle(a2[0], a2[1]))
          a2[0] = b[0];
      } else {
        merged.push(a2 = b);
      }
    }
    for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a2 = merged[n]; i <= n; a2 = b, ++i) {
      b = merged[i];
      if ((delta = angle(a2[1], b[0])) > deltaMax)
        deltaMax = delta, lambda02 = b[0], lambda1 = a2[1];
    }
  }
  ranges = range = null;
  return lambda02 === Infinity || phi0 === Infinity ? [[NaN, NaN], [NaN, NaN]] : [[lambda02, phi0], [lambda1, phi1]];
}

// node_modules/d3-geo/src/centroid.js
var W0;
var W1;
var X0;
var Y0;
var Z0;
var X1;
var Y1;
var Z1;
var X2;
var Y2;
var Z2;
var lambda003;
var phi003;
var x0;
var y0;
var z0;
var centroidStream = {
  sphere: noop2,
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  }
};
function centroidPoint(lambda, phi2) {
  lambda *= radians, phi2 *= radians;
  var cosPhi = cos2(phi2);
  centroidPointCartesian(cosPhi * cos2(lambda), cosPhi * sin2(lambda), sin2(phi2));
}
function centroidPointCartesian(x5, y5, z) {
  ++W0;
  X0 += (x5 - X0) / W0;
  Y0 += (y5 - Y0) / W0;
  Z0 += (z - Z0) / W0;
}
function centroidLineStart() {
  centroidStream.point = centroidLinePointFirst;
}
function centroidLinePointFirst(lambda, phi2) {
  lambda *= radians, phi2 *= radians;
  var cosPhi = cos2(phi2);
  x0 = cosPhi * cos2(lambda);
  y0 = cosPhi * sin2(lambda);
  z0 = sin2(phi2);
  centroidStream.point = centroidLinePoint;
  centroidPointCartesian(x0, y0, z0);
}
function centroidLinePoint(lambda, phi2) {
  lambda *= radians, phi2 *= radians;
  var cosPhi = cos2(phi2), x5 = cosPhi * cos2(lambda), y5 = cosPhi * sin2(lambda), z = sin2(phi2), w = atan2(sqrt((w = y0 * z - z0 * y5) * w + (w = z0 * x5 - x0 * z) * w + (w = x0 * y5 - y0 * x5) * w), x0 * x5 + y0 * y5 + z0 * z);
  W1 += w;
  X1 += w * (x0 + (x0 = x5));
  Y1 += w * (y0 + (y0 = y5));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}
function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}
function centroidRingStart() {
  centroidStream.point = centroidRingPointFirst;
}
function centroidRingEnd() {
  centroidRingPoint(lambda003, phi003);
  centroidStream.point = centroidPoint;
}
function centroidRingPointFirst(lambda, phi2) {
  lambda003 = lambda, phi003 = phi2;
  lambda *= radians, phi2 *= radians;
  centroidStream.point = centroidRingPoint;
  var cosPhi = cos2(phi2);
  x0 = cosPhi * cos2(lambda);
  y0 = cosPhi * sin2(lambda);
  z0 = sin2(phi2);
  centroidPointCartesian(x0, y0, z0);
}
function centroidRingPoint(lambda, phi2) {
  lambda *= radians, phi2 *= radians;
  var cosPhi = cos2(phi2), x5 = cosPhi * cos2(lambda), y5 = cosPhi * sin2(lambda), z = sin2(phi2), cx = y0 * z - z0 * y5, cy = z0 * x5 - x0 * z, cz = x0 * y5 - y0 * x5, m = sqrt(cx * cx + cy * cy + cz * cz), w = asin(m), v = m && -w / m;
  X2 += v * cx;
  Y2 += v * cy;
  Z2 += v * cz;
  W1 += w;
  X1 += w * (x0 + (x0 = x5));
  Y1 += w * (y0 + (y0 = y5));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}
function centroid_default(object2) {
  W0 = W1 = X0 = Y0 = Z0 = X1 = Y1 = Z1 = X2 = Y2 = Z2 = 0;
  stream_default(object2, centroidStream);
  var x5 = X2, y5 = Y2, z = Z2, m = x5 * x5 + y5 * y5 + z * z;
  if (m < epsilon22) {
    x5 = X1, y5 = Y1, z = Z1;
    if (W1 < epsilon4)
      x5 = X0, y5 = Y0, z = Z0;
    m = x5 * x5 + y5 * y5 + z * z;
    if (m < epsilon22)
      return [NaN, NaN];
  }
  return [atan2(y5, x5) * degrees2, asin(z / sqrt(m)) * degrees2];
}

// node_modules/d3-geo/src/constant.js
function constant_default9(x5) {
  return function() {
    return x5;
  };
}

// node_modules/d3-geo/src/compose.js
function compose_default(a2, b) {
  function compose(x5, y5) {
    return x5 = a2(x5, y5), b(x5[0], x5[1]);
  }
  if (a2.invert && b.invert)
    compose.invert = function(x5, y5) {
      return x5 = b.invert(x5, y5), x5 && a2.invert(x5[0], x5[1]);
    };
  return compose;
}

// node_modules/d3-geo/src/rotation.js
function rotationIdentity(lambda, phi2) {
  return [abs(lambda) > pi4 ? lambda + Math.round(-lambda / tau4) * tau4 : lambda, phi2];
}
rotationIdentity.invert = rotationIdentity;
function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= tau4) ? deltaPhi || deltaGamma ? compose_default(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma)) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
}
function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi2) {
    return lambda += deltaLambda, [lambda > pi4 ? lambda - tau4 : lambda < -pi4 ? lambda + tau4 : lambda, phi2];
  };
}
function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}
function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = cos2(deltaPhi), sinDeltaPhi = sin2(deltaPhi), cosDeltaGamma = cos2(deltaGamma), sinDeltaGamma = sin2(deltaGamma);
  function rotation(lambda, phi2) {
    var cosPhi = cos2(phi2), x5 = cos2(lambda) * cosPhi, y5 = sin2(lambda) * cosPhi, z = sin2(phi2), k2 = z * cosDeltaPhi + x5 * sinDeltaPhi;
    return [
      atan2(y5 * cosDeltaGamma - k2 * sinDeltaGamma, x5 * cosDeltaPhi - z * sinDeltaPhi),
      asin(k2 * cosDeltaGamma + y5 * sinDeltaGamma)
    ];
  }
  rotation.invert = function(lambda, phi2) {
    var cosPhi = cos2(phi2), x5 = cos2(lambda) * cosPhi, y5 = sin2(lambda) * cosPhi, z = sin2(phi2), k2 = z * cosDeltaGamma - y5 * sinDeltaGamma;
    return [
      atan2(y5 * cosDeltaGamma + z * sinDeltaGamma, x5 * cosDeltaPhi + k2 * sinDeltaPhi),
      asin(k2 * cosDeltaPhi - x5 * sinDeltaPhi)
    ];
  };
  return rotation;
}
function rotation_default(rotate) {
  rotate = rotateRadians(rotate[0] * radians, rotate[1] * radians, rotate.length > 2 ? rotate[2] * radians : 0);
  function forward(coordinates2) {
    coordinates2 = rotate(coordinates2[0] * radians, coordinates2[1] * radians);
    return coordinates2[0] *= degrees2, coordinates2[1] *= degrees2, coordinates2;
  }
  forward.invert = function(coordinates2) {
    coordinates2 = rotate.invert(coordinates2[0] * radians, coordinates2[1] * radians);
    return coordinates2[0] *= degrees2, coordinates2[1] *= degrees2, coordinates2;
  };
  return forward;
}

// node_modules/d3-geo/src/circle.js
function circleStream(stream, radius, delta, direction, t03, t13) {
  if (!delta)
    return;
  var cosRadius = cos2(radius), sinRadius = sin2(radius), step = direction * delta;
  if (t03 == null) {
    t03 = radius + direction * tau4;
    t13 = radius - step / 2;
  } else {
    t03 = circleRadius(cosRadius, t03);
    t13 = circleRadius(cosRadius, t13);
    if (direction > 0 ? t03 < t13 : t03 > t13)
      t03 += direction * tau4;
  }
  for (var point6, t = t03; direction > 0 ? t > t13 : t < t13; t -= step) {
    point6 = spherical([cosRadius, -sinRadius * cos2(t), -sinRadius * sin2(t)]);
    stream.point(point6[0], point6[1]);
  }
}
function circleRadius(cosRadius, point6) {
  point6 = cartesian(point6), point6[0] -= cosRadius;
  cartesianNormalizeInPlace(point6);
  var radius = acos(-point6[1]);
  return ((-point6[2] < 0 ? -radius : radius) + tau4 - epsilon4) % tau4;
}
function circle_default() {
  var center2 = constant_default9([0, 0]), radius = constant_default9(90), precision = constant_default9(6), ring, rotate, stream = {point: point6};
  function point6(x5, y5) {
    ring.push(x5 = rotate(x5, y5));
    x5[0] *= degrees2, x5[1] *= degrees2;
  }
  function circle2() {
    var c4 = center2.apply(this, arguments), r = radius.apply(this, arguments) * radians, p = precision.apply(this, arguments) * radians;
    ring = [];
    rotate = rotateRadians(-c4[0] * radians, -c4[1] * radians, 0).invert;
    circleStream(stream, r, p, 1);
    c4 = {type: "Polygon", coordinates: [ring]};
    ring = rotate = null;
    return c4;
  }
  circle2.center = function(_) {
    return arguments.length ? (center2 = typeof _ === "function" ? _ : constant_default9([+_[0], +_[1]]), circle2) : center2;
  };
  circle2.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant_default9(+_), circle2) : radius;
  };
  circle2.precision = function(_) {
    return arguments.length ? (precision = typeof _ === "function" ? _ : constant_default9(+_), circle2) : precision;
  };
  return circle2;
}

// node_modules/d3-geo/src/clip/buffer.js
function buffer_default2() {
  var lines = [], line;
  return {
    point: function(x5, y5, m) {
      line.push([x5, y5, m]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: noop2,
    rejoin: function() {
      if (lines.length > 1)
        lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
}

// node_modules/d3-geo/src/pointEqual.js
function pointEqual_default(a2, b) {
  return abs(a2[0] - b[0]) < epsilon4 && abs(a2[1] - b[1]) < epsilon4;
}

// node_modules/d3-geo/src/clip/rejoin.js
function Intersection(point6, points, other, entry) {
  this.x = point6;
  this.z = points;
  this.o = other;
  this.e = entry;
  this.v = false;
  this.n = this.p = null;
}
function rejoin_default(segments, compareIntersection2, startInside, interpolate, stream) {
  var subject = [], clip = [], i, n;
  segments.forEach(function(segment) {
    if ((n2 = segment.length - 1) <= 0)
      return;
    var n2, p02 = segment[0], p1 = segment[n2], x5;
    if (pointEqual_default(p02, p1)) {
      if (!p02[2] && !p1[2]) {
        stream.lineStart();
        for (i = 0; i < n2; ++i)
          stream.point((p02 = segment[i])[0], p02[1]);
        stream.lineEnd();
        return;
      }
      p1[0] += 2 * epsilon4;
    }
    subject.push(x5 = new Intersection(p02, segment, null, true));
    clip.push(x5.o = new Intersection(p02, null, x5, false));
    subject.push(x5 = new Intersection(p1, segment, null, false));
    clip.push(x5.o = new Intersection(p1, null, x5, true));
  });
  if (!subject.length)
    return;
  clip.sort(compareIntersection2);
  link(subject);
  link(clip);
  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }
  var start2 = subject[0], points, point6;
  while (1) {
    var current = start2, isSubject = true;
    while (current.v)
      if ((current = current.n) === start2)
        return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i)
            stream.point((point6 = points[i])[0], point6[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i)
            stream.point((point6 = points[i])[0], point6[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
}
function link(array4) {
  if (!(n = array4.length))
    return;
  var n, i = 0, a2 = array4[0], b;
  while (++i < n) {
    a2.n = b = array4[i];
    b.p = a2;
    a2 = b;
  }
  a2.n = b = array4[0];
  b.p = a2;
}

// node_modules/d3-geo/src/polygonContains.js
var sum = adder_default();
function longitude(point6) {
  if (abs(point6[0]) <= pi4)
    return point6[0];
  else
    return sign(point6[0]) * ((abs(point6[0]) + pi4) % tau4 - pi4);
}
function polygonContains_default(polygon, point6) {
  var lambda = longitude(point6), phi2 = point6[1], sinPhi = sin2(phi2), normal = [sin2(lambda), -cos2(lambda), 0], angle2 = 0, winding = 0;
  sum.reset();
  if (sinPhi === 1)
    phi2 = halfPi3 + epsilon4;
  else if (sinPhi === -1)
    phi2 = -halfPi3 - epsilon4;
  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length))
      continue;
    var ring, m, point0 = ring[m - 1], lambda04 = longitude(point0), phi02 = point0[1] / 2 + quarterPi, sinPhi03 = sin2(phi02), cosPhi03 = cos2(phi02);
    for (var j = 0; j < m; ++j, lambda04 = lambda12, sinPhi03 = sinPhi1, cosPhi03 = cosPhi1, point0 = point1) {
      var point1 = ring[j], lambda12 = longitude(point1), phi12 = point1[1] / 2 + quarterPi, sinPhi1 = sin2(phi12), cosPhi1 = cos2(phi12), delta = lambda12 - lambda04, sign3 = delta >= 0 ? 1 : -1, absDelta = sign3 * delta, antimeridian = absDelta > pi4, k2 = sinPhi03 * sinPhi1;
      sum.add(atan2(k2 * sign3 * sin2(absDelta), cosPhi03 * cosPhi1 + k2 * cos2(absDelta)));
      angle2 += antimeridian ? delta + sign3 * tau4 : delta;
      if (antimeridian ^ lambda04 >= lambda ^ lambda12 >= lambda) {
        var arc = cartesianCross(cartesian(point0), cartesian(point1));
        cartesianNormalizeInPlace(arc);
        var intersection = cartesianCross(normal, arc);
        cartesianNormalizeInPlace(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection[2]);
        if (phi2 > phiArc || phi2 === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }
  return (angle2 < -epsilon4 || angle2 < epsilon4 && sum < -epsilon4) ^ winding & 1;
}

// node_modules/d3-geo/src/clip/index.js
function clip_default(pointVisible, clipLine, interpolate, start2) {
  return function(sink) {
    var line = clipLine(sink), ringBuffer = buffer_default2(), ringSink = clipLine(ringBuffer), polygonStarted = false, polygon, segments, ring;
    var clip = {
      point: point6,
      lineStart,
      lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point6;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = merge_default(segments);
        var startInside = polygonContains_default(polygon, start2);
        if (segments.length) {
          if (!polygonStarted)
            sink.polygonStart(), polygonStarted = true;
          rejoin_default(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted)
            sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted)
          sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };
    function point6(lambda, phi2) {
      if (pointVisible(lambda, phi2))
        sink.point(lambda, phi2);
    }
    function pointLine(lambda, phi2) {
      line.point(lambda, phi2);
    }
    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }
    function lineEnd() {
      clip.point = point6;
      line.lineEnd();
    }
    function pointRing(lambda, phi2) {
      ring.push([lambda, phi2]);
      ringSink.point(lambda, phi2);
    }
    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }
    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();
      var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i, n = ringSegments.length, m, segment, point7;
      ring.pop();
      polygon.push(ring);
      ring = null;
      if (!n)
        return;
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted)
            sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i)
            sink.point((point7 = segment[i])[0], point7[1]);
          sink.lineEnd();
        }
        return;
      }
      if (n > 1 && clean & 2)
        ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
      segments.push(ringSegments.filter(validSegment));
    }
    return clip;
  };
}
function validSegment(segment) {
  return segment.length > 1;
}
function compareIntersection(a2, b) {
  return ((a2 = a2.x)[0] < 0 ? a2[1] - halfPi3 - epsilon4 : halfPi3 - a2[1]) - ((b = b.x)[0] < 0 ? b[1] - halfPi3 - epsilon4 : halfPi3 - b[1]);
}

// node_modules/d3-geo/src/clip/antimeridian.js
var antimeridian_default = clip_default(function() {
  return true;
}, clipAntimeridianLine, clipAntimeridianInterpolate, [-pi4, -halfPi3]);
function clipAntimeridianLine(stream) {
  var lambda04 = NaN, phi02 = NaN, sign0 = NaN, clean;
  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda12, phi12) {
      var sign1 = lambda12 > 0 ? pi4 : -pi4, delta = abs(lambda12 - lambda04);
      if (abs(delta - pi4) < epsilon4) {
        stream.point(lambda04, phi02 = (phi02 + phi12) / 2 > 0 ? halfPi3 : -halfPi3);
        stream.point(sign0, phi02);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi02);
        stream.point(lambda12, phi02);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= pi4) {
        if (abs(lambda04 - sign0) < epsilon4)
          lambda04 -= sign0 * epsilon4;
        if (abs(lambda12 - sign1) < epsilon4)
          lambda12 -= sign1 * epsilon4;
        phi02 = clipAntimeridianIntersect(lambda04, phi02, lambda12, phi12);
        stream.point(sign0, phi02);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi02);
        clean = 0;
      }
      stream.point(lambda04 = lambda12, phi02 = phi12);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda04 = phi02 = NaN;
    },
    clean: function() {
      return 2 - clean;
    }
  };
}
function clipAntimeridianIntersect(lambda04, phi02, lambda12, phi12) {
  var cosPhi03, cosPhi1, sinLambda0Lambda1 = sin2(lambda04 - lambda12);
  return abs(sinLambda0Lambda1) > epsilon4 ? atan((sin2(phi02) * (cosPhi1 = cos2(phi12)) * sin2(lambda12) - sin2(phi12) * (cosPhi03 = cos2(phi02)) * sin2(lambda04)) / (cosPhi03 * cosPhi1 * sinLambda0Lambda1)) : (phi02 + phi12) / 2;
}
function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi2;
  if (from == null) {
    phi2 = direction * halfPi3;
    stream.point(-pi4, phi2);
    stream.point(0, phi2);
    stream.point(pi4, phi2);
    stream.point(pi4, 0);
    stream.point(pi4, -phi2);
    stream.point(0, -phi2);
    stream.point(-pi4, -phi2);
    stream.point(-pi4, 0);
    stream.point(-pi4, phi2);
  } else if (abs(from[0] - to[0]) > epsilon4) {
    var lambda = from[0] < to[0] ? pi4 : -pi4;
    phi2 = direction * lambda / 2;
    stream.point(-lambda, phi2);
    stream.point(0, phi2);
    stream.point(lambda, phi2);
  } else {
    stream.point(to[0], to[1]);
  }
}

// node_modules/d3-geo/src/clip/circle.js
function circle_default2(radius) {
  var cr = cos2(radius), delta = 6 * radians, smallRadius = cr > 0, notHemisphere = abs(cr) > epsilon4;
  function interpolate(from, to, direction, stream) {
    circleStream(stream, radius, delta, direction, from, to);
  }
  function visible(lambda, phi2) {
    return cos2(lambda) * cos2(phi2) > cr;
  }
  function clipLine(stream) {
    var point0, c0, v0, v00, clean;
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi2) {
        var point1 = [lambda, phi2], point22, v = visible(lambda, phi2), c4 = smallRadius ? v ? 0 : code(lambda, phi2) : v ? code(lambda + (lambda < 0 ? pi4 : -pi4), phi2) : 0;
        if (!point0 && (v00 = v0 = v))
          stream.lineStart();
        if (v !== v0) {
          point22 = intersect2(point0, point1);
          if (!point22 || pointEqual_default(point0, point22) || pointEqual_default(point1, point22))
            point1[2] = 1;
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            stream.lineStart();
            point22 = intersect2(point1, point0);
            stream.point(point22[0], point22[1]);
          } else {
            point22 = intersect2(point0, point1);
            stream.point(point22[0], point22[1], 2);
            stream.lineEnd();
          }
          point0 = point22;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          if (!(c4 & c0) && (t = intersect2(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1], 3);
            }
          }
        }
        if (v && (!point0 || !pointEqual_default(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c4;
      },
      lineEnd: function() {
        if (v0)
          stream.lineEnd();
        point0 = null;
      },
      clean: function() {
        return clean | (v00 && v0) << 1;
      }
    };
  }
  function intersect2(a2, b, two) {
    var pa = cartesian(a2), pb = cartesian(b);
    var n1 = [1, 0, 0], n2 = cartesianCross(pa, pb), n2n2 = cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
    if (!determinant)
      return !two && a2;
    var c1 = cr * n2n2 / determinant, c22 = -cr * n1n2 / determinant, n1xn2 = cartesianCross(n1, n2), A5 = cartesianScale(n1, c1), B2 = cartesianScale(n2, c22);
    cartesianAddInPlace(A5, B2);
    var u = n1xn2, w = cartesianDot(A5, u), uu = cartesianDot(u, u), t22 = w * w - uu * (cartesianDot(A5, A5) - 1);
    if (t22 < 0)
      return;
    var t = sqrt(t22), q = cartesianScale(u, (-w - t) / uu);
    cartesianAddInPlace(q, A5);
    q = spherical(q);
    if (!two)
      return q;
    var lambda04 = a2[0], lambda12 = b[0], phi02 = a2[1], phi12 = b[1], z;
    if (lambda12 < lambda04)
      z = lambda04, lambda04 = lambda12, lambda12 = z;
    var delta2 = lambda12 - lambda04, polar = abs(delta2 - pi4) < epsilon4, meridian = polar || delta2 < epsilon4;
    if (!polar && phi12 < phi02)
      z = phi02, phi02 = phi12, phi12 = z;
    if (meridian ? polar ? phi02 + phi12 > 0 ^ q[1] < (abs(q[0] - lambda04) < epsilon4 ? phi02 : phi12) : phi02 <= q[1] && q[1] <= phi12 : delta2 > pi4 ^ (lambda04 <= q[0] && q[0] <= lambda12)) {
      var q1 = cartesianScale(u, (-w + t) / uu);
      cartesianAddInPlace(q1, A5);
      return [q, spherical(q1)];
    }
  }
  function code(lambda, phi2) {
    var r = smallRadius ? radius : pi4 - radius, code2 = 0;
    if (lambda < -r)
      code2 |= 1;
    else if (lambda > r)
      code2 |= 2;
    if (phi2 < -r)
      code2 |= 4;
    else if (phi2 > r)
      code2 |= 8;
    return code2;
  }
  return clip_default(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-pi4, radius - pi4]);
}

// node_modules/d3-geo/src/clip/line.js
function line_default(a2, b, x06, y06, x12, y12) {
  var ax = a2[0], ay = a2[1], bx = b[0], by = b[1], t03 = 0, t13 = 1, dx = bx - ax, dy = by - ay, r;
  r = x06 - ax;
  if (!dx && r > 0)
    return;
  r /= dx;
  if (dx < 0) {
    if (r < t03)
      return;
    if (r < t13)
      t13 = r;
  } else if (dx > 0) {
    if (r > t13)
      return;
    if (r > t03)
      t03 = r;
  }
  r = x12 - ax;
  if (!dx && r < 0)
    return;
  r /= dx;
  if (dx < 0) {
    if (r > t13)
      return;
    if (r > t03)
      t03 = r;
  } else if (dx > 0) {
    if (r < t03)
      return;
    if (r < t13)
      t13 = r;
  }
  r = y06 - ay;
  if (!dy && r > 0)
    return;
  r /= dy;
  if (dy < 0) {
    if (r < t03)
      return;
    if (r < t13)
      t13 = r;
  } else if (dy > 0) {
    if (r > t13)
      return;
    if (r > t03)
      t03 = r;
  }
  r = y12 - ay;
  if (!dy && r < 0)
    return;
  r /= dy;
  if (dy < 0) {
    if (r > t13)
      return;
    if (r > t03)
      t03 = r;
  } else if (dy > 0) {
    if (r < t03)
      return;
    if (r < t13)
      t13 = r;
  }
  if (t03 > 0)
    a2[0] = ax + t03 * dx, a2[1] = ay + t03 * dy;
  if (t13 < 1)
    b[0] = ax + t13 * dx, b[1] = ay + t13 * dy;
  return true;
}

// node_modules/d3-geo/src/clip/rectangle.js
var clipMax = 1e9;
var clipMin = -clipMax;
function clipRectangle(x06, y06, x12, y12) {
  function visible(x5, y5) {
    return x06 <= x5 && x5 <= x12 && y06 <= y5 && y5 <= y12;
  }
  function interpolate(from, to, direction, stream) {
    var a2 = 0, a1 = 0;
    if (from == null || (a2 = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) {
      do
        stream.point(a2 === 0 || a2 === 3 ? x06 : x12, a2 > 1 ? y12 : y06);
      while ((a2 = (a2 + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }
  function corner(p, direction) {
    return abs(p[0] - x06) < epsilon4 ? direction > 0 ? 0 : 3 : abs(p[0] - x12) < epsilon4 ? direction > 0 ? 2 : 1 : abs(p[1] - y06) < epsilon4 ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
  }
  function compareIntersection2(a2, b) {
    return comparePoint(a2.x, b.x);
  }
  function comparePoint(a2, b) {
    var ca = corner(a2, 1), cb = corner(b, 1);
    return ca !== cb ? ca - cb : ca === 0 ? b[1] - a2[1] : ca === 1 ? a2[0] - b[0] : ca === 2 ? a2[1] - b[1] : b[0] - a2[0];
  }
  return function(stream) {
    var activeStream = stream, bufferStream = buffer_default2(), segments, polygon, ring, x__, y__, v__, x_, y_, v_, first, clean;
    var clipStream = {
      point: point6,
      lineStart,
      lineEnd,
      polygonStart,
      polygonEnd
    };
    function point6(x5, y5) {
      if (visible(x5, y5))
        activeStream.point(x5, y5);
    }
    function polygonInside() {
      var winding = 0;
      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring2 = polygon[i], j = 1, m = ring2.length, point7 = ring2[0], a0, a1, b02 = point7[0], b12 = point7[1]; j < m; ++j) {
          a0 = b02, a1 = b12, point7 = ring2[j], b02 = point7[0], b12 = point7[1];
          if (a1 <= y12) {
            if (b12 > y12 && (b02 - a0) * (y12 - a1) > (b12 - a1) * (x06 - a0))
              ++winding;
          } else {
            if (b12 <= y12 && (b02 - a0) * (y12 - a1) < (b12 - a1) * (x06 - a0))
              --winding;
          }
        }
      }
      return winding;
    }
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }
    function polygonEnd() {
      var startInside = polygonInside(), cleanInside = clean && startInside, visible2 = (segments = merge_default(segments)).length;
      if (cleanInside || visible2) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible2) {
          rejoin_default(segments, compareIntersection2, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }
    function lineStart() {
      clipStream.point = linePoint2;
      if (polygon)
        polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }
    function lineEnd() {
      if (segments) {
        linePoint2(x__, y__);
        if (v__ && v_)
          bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point6;
      if (v_)
        activeStream.lineEnd();
    }
    function linePoint2(x5, y5) {
      var v = visible(x5, y5);
      if (polygon)
        ring.push([x5, y5]);
      if (first) {
        x__ = x5, y__ = y5, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x5, y5);
        }
      } else {
        if (v && v_)
          activeStream.point(x5, y5);
        else {
          var a2 = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))], b = [x5 = Math.max(clipMin, Math.min(clipMax, x5)), y5 = Math.max(clipMin, Math.min(clipMax, y5))];
          if (line_default(a2, b, x06, y06, x12, y12)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a2[0], a2[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v)
              activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x5, y5);
            clean = false;
          }
        }
      }
      x_ = x5, y_ = y5, v_ = v;
    }
    return clipStream;
  };
}

// node_modules/d3-geo/src/clip/extent.js
function extent_default3() {
  var x06 = 0, y06 = 0, x12 = 960, y12 = 500, cache, cacheStream, clip;
  return clip = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = clipRectangle(x06, y06, x12, y12)(cacheStream = stream);
    },
    extent: function(_) {
      return arguments.length ? (x06 = +_[0][0], y06 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1], cache = cacheStream = null, clip) : [[x06, y06], [x12, y12]];
    }
  };
}

// node_modules/d3-geo/src/length.js
var lengthSum = adder_default();
var lambda03;
var sinPhi02;
var cosPhi02;
var lengthStream = {
  sphere: noop2,
  point: noop2,
  lineStart: lengthLineStart,
  lineEnd: noop2,
  polygonStart: noop2,
  polygonEnd: noop2
};
function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}
function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = noop2;
}
function lengthPointFirst(lambda, phi2) {
  lambda *= radians, phi2 *= radians;
  lambda03 = lambda, sinPhi02 = sin2(phi2), cosPhi02 = cos2(phi2);
  lengthStream.point = lengthPoint;
}
function lengthPoint(lambda, phi2) {
  lambda *= radians, phi2 *= radians;
  var sinPhi = sin2(phi2), cosPhi = cos2(phi2), delta = abs(lambda - lambda03), cosDelta = cos2(delta), sinDelta = sin2(delta), x5 = cosPhi * sinDelta, y5 = cosPhi02 * sinPhi - sinPhi02 * cosPhi * cosDelta, z = sinPhi02 * sinPhi + cosPhi02 * cosPhi * cosDelta;
  lengthSum.add(atan2(sqrt(x5 * x5 + y5 * y5), z));
  lambda03 = lambda, sinPhi02 = sinPhi, cosPhi02 = cosPhi;
}
function length_default(object2) {
  lengthSum.reset();
  stream_default(object2, lengthStream);
  return +lengthSum;
}

// node_modules/d3-geo/src/distance.js
var coordinates = [null, null];
var object = {type: "LineString", coordinates};
function distance_default(a2, b) {
  coordinates[0] = a2;
  coordinates[1] = b;
  return length_default(object);
}

// node_modules/d3-geo/src/contains.js
var containsObjectType = {
  Feature: function(object2, point6) {
    return containsGeometry(object2.geometry, point6);
  },
  FeatureCollection: function(object2, point6) {
    var features = object2.features, i = -1, n = features.length;
    while (++i < n)
      if (containsGeometry(features[i].geometry, point6))
        return true;
    return false;
  }
};
var containsGeometryType = {
  Sphere: function() {
    return true;
  },
  Point: function(object2, point6) {
    return containsPoint(object2.coordinates, point6);
  },
  MultiPoint: function(object2, point6) {
    var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
    while (++i < n)
      if (containsPoint(coordinates2[i], point6))
        return true;
    return false;
  },
  LineString: function(object2, point6) {
    return containsLine(object2.coordinates, point6);
  },
  MultiLineString: function(object2, point6) {
    var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
    while (++i < n)
      if (containsLine(coordinates2[i], point6))
        return true;
    return false;
  },
  Polygon: function(object2, point6) {
    return containsPolygon(object2.coordinates, point6);
  },
  MultiPolygon: function(object2, point6) {
    var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
    while (++i < n)
      if (containsPolygon(coordinates2[i], point6))
        return true;
    return false;
  },
  GeometryCollection: function(object2, point6) {
    var geometries = object2.geometries, i = -1, n = geometries.length;
    while (++i < n)
      if (containsGeometry(geometries[i], point6))
        return true;
    return false;
  }
};
function containsGeometry(geometry, point6) {
  return geometry && containsGeometryType.hasOwnProperty(geometry.type) ? containsGeometryType[geometry.type](geometry, point6) : false;
}
function containsPoint(coordinates2, point6) {
  return distance_default(coordinates2, point6) === 0;
}
function containsLine(coordinates2, point6) {
  var ao, bo, ab;
  for (var i = 0, n = coordinates2.length; i < n; i++) {
    bo = distance_default(coordinates2[i], point6);
    if (bo === 0)
      return true;
    if (i > 0) {
      ab = distance_default(coordinates2[i], coordinates2[i - 1]);
      if (ab > 0 && ao <= ab && bo <= ab && (ao + bo - ab) * (1 - Math.pow((ao - bo) / ab, 2)) < epsilon22 * ab)
        return true;
    }
    ao = bo;
  }
  return false;
}
function containsPolygon(coordinates2, point6) {
  return !!polygonContains_default(coordinates2.map(ringRadians), pointRadians(point6));
}
function ringRadians(ring) {
  return ring = ring.map(pointRadians), ring.pop(), ring;
}
function pointRadians(point6) {
  return [point6[0] * radians, point6[1] * radians];
}
function contains_default2(object2, point6) {
  return (object2 && containsObjectType.hasOwnProperty(object2.type) ? containsObjectType[object2.type] : containsGeometry)(object2, point6);
}

// node_modules/d3-geo/src/graticule.js
function graticuleX(y06, y12, dy) {
  var y5 = range_default(y06, y12 - epsilon4, dy).concat(y12);
  return function(x5) {
    return y5.map(function(y6) {
      return [x5, y6];
    });
  };
}
function graticuleY(x06, x12, dx) {
  var x5 = range_default(x06, x12 - epsilon4, dx).concat(x12);
  return function(y5) {
    return x5.map(function(x6) {
      return [x6, y5];
    });
  };
}
function graticule() {
  var x12, x06, X13, X03, y12, y06, Y13, Y03, dx = 10, dy = dx, DX = 90, DY = 360, x5, y5, X3, Y3, precision = 2.5;
  function graticule2() {
    return {type: "MultiLineString", coordinates: lines()};
  }
  function lines() {
    return range_default(ceil(X03 / DX) * DX, X13, DX).map(X3).concat(range_default(ceil(Y03 / DY) * DY, Y13, DY).map(Y3)).concat(range_default(ceil(x06 / dx) * dx, x12, dx).filter(function(x6) {
      return abs(x6 % DX) > epsilon4;
    }).map(x5)).concat(range_default(ceil(y06 / dy) * dy, y12, dy).filter(function(y6) {
      return abs(y6 % DY) > epsilon4;
    }).map(y5));
  }
  graticule2.lines = function() {
    return lines().map(function(coordinates2) {
      return {type: "LineString", coordinates: coordinates2};
    });
  };
  graticule2.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        X3(X03).concat(Y3(Y13).slice(1), X3(X13).reverse().slice(1), Y3(Y03).reverse().slice(1))
      ]
    };
  };
  graticule2.extent = function(_) {
    if (!arguments.length)
      return graticule2.extentMinor();
    return graticule2.extentMajor(_).extentMinor(_);
  };
  graticule2.extentMajor = function(_) {
    if (!arguments.length)
      return [[X03, Y03], [X13, Y13]];
    X03 = +_[0][0], X13 = +_[1][0];
    Y03 = +_[0][1], Y13 = +_[1][1];
    if (X03 > X13)
      _ = X03, X03 = X13, X13 = _;
    if (Y03 > Y13)
      _ = Y03, Y03 = Y13, Y13 = _;
    return graticule2.precision(precision);
  };
  graticule2.extentMinor = function(_) {
    if (!arguments.length)
      return [[x06, y06], [x12, y12]];
    x06 = +_[0][0], x12 = +_[1][0];
    y06 = +_[0][1], y12 = +_[1][1];
    if (x06 > x12)
      _ = x06, x06 = x12, x12 = _;
    if (y06 > y12)
      _ = y06, y06 = y12, y12 = _;
    return graticule2.precision(precision);
  };
  graticule2.step = function(_) {
    if (!arguments.length)
      return graticule2.stepMinor();
    return graticule2.stepMajor(_).stepMinor(_);
  };
  graticule2.stepMajor = function(_) {
    if (!arguments.length)
      return [DX, DY];
    DX = +_[0], DY = +_[1];
    return graticule2;
  };
  graticule2.stepMinor = function(_) {
    if (!arguments.length)
      return [dx, dy];
    dx = +_[0], dy = +_[1];
    return graticule2;
  };
  graticule2.precision = function(_) {
    if (!arguments.length)
      return precision;
    precision = +_;
    x5 = graticuleX(y06, y12, 90);
    y5 = graticuleY(x06, x12, precision);
    X3 = graticuleX(Y03, Y13, 90);
    Y3 = graticuleY(X03, X13, precision);
    return graticule2;
  };
  return graticule2.extentMajor([[-180, -90 + epsilon4], [180, 90 - epsilon4]]).extentMinor([[-180, -80 - epsilon4], [180, 80 + epsilon4]]);
}
function graticule10() {
  return graticule()();
}

// node_modules/d3-geo/src/interpolate.js
function interpolate_default2(a2, b) {
  var x06 = a2[0] * radians, y06 = a2[1] * radians, x12 = b[0] * radians, y12 = b[1] * radians, cy0 = cos2(y06), sy0 = sin2(y06), cy1 = cos2(y12), sy1 = sin2(y12), kx0 = cy0 * cos2(x06), ky0 = cy0 * sin2(x06), kx1 = cy1 * cos2(x12), ky1 = cy1 * sin2(x12), d = 2 * asin(sqrt(haversin(y12 - y06) + cy0 * cy1 * haversin(x12 - x06))), k2 = sin2(d);
  var interpolate = d ? function(t) {
    var B2 = sin2(t *= d) / k2, A5 = sin2(d - t) / k2, x5 = A5 * kx0 + B2 * kx1, y5 = A5 * ky0 + B2 * ky1, z = A5 * sy0 + B2 * sy1;
    return [
      atan2(y5, x5) * degrees2,
      atan2(z, sqrt(x5 * x5 + y5 * y5)) * degrees2
    ];
  } : function() {
    return [x06 * degrees2, y06 * degrees2];
  };
  interpolate.distance = d;
  return interpolate;
}

// node_modules/d3-geo/src/identity.js
function identity_default4(x5) {
  return x5;
}

// node_modules/d3-geo/src/path/area.js
var areaSum2 = adder_default();
var areaRingSum2 = adder_default();
var x00;
var y00;
var x02;
var y02;
var areaStream2 = {
  point: noop2,
  lineStart: noop2,
  lineEnd: noop2,
  polygonStart: function() {
    areaStream2.lineStart = areaRingStart2;
    areaStream2.lineEnd = areaRingEnd2;
  },
  polygonEnd: function() {
    areaStream2.lineStart = areaStream2.lineEnd = areaStream2.point = noop2;
    areaSum2.add(abs(areaRingSum2));
    areaRingSum2.reset();
  },
  result: function() {
    var area = areaSum2 / 2;
    areaSum2.reset();
    return area;
  }
};
function areaRingStart2() {
  areaStream2.point = areaPointFirst2;
}
function areaPointFirst2(x5, y5) {
  areaStream2.point = areaPoint2;
  x00 = x02 = x5, y00 = y02 = y5;
}
function areaPoint2(x5, y5) {
  areaRingSum2.add(y02 * x5 - x02 * y5);
  x02 = x5, y02 = y5;
}
function areaRingEnd2() {
  areaPoint2(x00, y00);
}
var area_default3 = areaStream2;

// node_modules/d3-geo/src/path/bounds.js
var x03 = Infinity;
var y03 = x03;
var x1 = -x03;
var y1 = x1;
var boundsStream2 = {
  point: boundsPoint2,
  lineStart: noop2,
  lineEnd: noop2,
  polygonStart: noop2,
  polygonEnd: noop2,
  result: function() {
    var bounds = [[x03, y03], [x1, y1]];
    x1 = y1 = -(y03 = x03 = Infinity);
    return bounds;
  }
};
function boundsPoint2(x5, y5) {
  if (x5 < x03)
    x03 = x5;
  if (x5 > x1)
    x1 = x5;
  if (y5 < y03)
    y03 = y5;
  if (y5 > y1)
    y1 = y5;
}
var bounds_default2 = boundsStream2;

// node_modules/d3-geo/src/path/centroid.js
var X02 = 0;
var Y02 = 0;
var Z02 = 0;
var X12 = 0;
var Y12 = 0;
var Z12 = 0;
var X22 = 0;
var Y22 = 0;
var Z22 = 0;
var x002;
var y002;
var x04;
var y04;
var centroidStream2 = {
  point: centroidPoint2,
  lineStart: centroidLineStart2,
  lineEnd: centroidLineEnd2,
  polygonStart: function() {
    centroidStream2.lineStart = centroidRingStart2;
    centroidStream2.lineEnd = centroidRingEnd2;
  },
  polygonEnd: function() {
    centroidStream2.point = centroidPoint2;
    centroidStream2.lineStart = centroidLineStart2;
    centroidStream2.lineEnd = centroidLineEnd2;
  },
  result: function() {
    var centroid = Z22 ? [X22 / Z22, Y22 / Z22] : Z12 ? [X12 / Z12, Y12 / Z12] : Z02 ? [X02 / Z02, Y02 / Z02] : [NaN, NaN];
    X02 = Y02 = Z02 = X12 = Y12 = Z12 = X22 = Y22 = Z22 = 0;
    return centroid;
  }
};
function centroidPoint2(x5, y5) {
  X02 += x5;
  Y02 += y5;
  ++Z02;
}
function centroidLineStart2() {
  centroidStream2.point = centroidPointFirstLine;
}
function centroidPointFirstLine(x5, y5) {
  centroidStream2.point = centroidPointLine;
  centroidPoint2(x04 = x5, y04 = y5);
}
function centroidPointLine(x5, y5) {
  var dx = x5 - x04, dy = y5 - y04, z = sqrt(dx * dx + dy * dy);
  X12 += z * (x04 + x5) / 2;
  Y12 += z * (y04 + y5) / 2;
  Z12 += z;
  centroidPoint2(x04 = x5, y04 = y5);
}
function centroidLineEnd2() {
  centroidStream2.point = centroidPoint2;
}
function centroidRingStart2() {
  centroidStream2.point = centroidPointFirstRing;
}
function centroidRingEnd2() {
  centroidPointRing(x002, y002);
}
function centroidPointFirstRing(x5, y5) {
  centroidStream2.point = centroidPointRing;
  centroidPoint2(x002 = x04 = x5, y002 = y04 = y5);
}
function centroidPointRing(x5, y5) {
  var dx = x5 - x04, dy = y5 - y04, z = sqrt(dx * dx + dy * dy);
  X12 += z * (x04 + x5) / 2;
  Y12 += z * (y04 + y5) / 2;
  Z12 += z;
  z = y04 * x5 - x04 * y5;
  X22 += z * (x04 + x5);
  Y22 += z * (y04 + y5);
  Z22 += z * 3;
  centroidPoint2(x04 = x5, y04 = y5);
}
var centroid_default2 = centroidStream2;

// node_modules/d3-geo/src/path/context.js
function PathContext(context) {
  this._context = context;
}
PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_) {
    return this._radius = _, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0)
      this._context.closePath();
    this._point = NaN;
  },
  point: function(x5, y5) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x5, y5);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x5, y5);
        break;
      }
      default: {
        this._context.moveTo(x5 + this._radius, y5);
        this._context.arc(x5, y5, this._radius, 0, tau4);
        break;
      }
    }
  },
  result: noop2
};

// node_modules/d3-geo/src/path/measure.js
var lengthSum2 = adder_default();
var lengthRing;
var x003;
var y003;
var x05;
var y05;
var lengthStream2 = {
  point: noop2,
  lineStart: function() {
    lengthStream2.point = lengthPointFirst2;
  },
  lineEnd: function() {
    if (lengthRing)
      lengthPoint2(x003, y003);
    lengthStream2.point = noop2;
  },
  polygonStart: function() {
    lengthRing = true;
  },
  polygonEnd: function() {
    lengthRing = null;
  },
  result: function() {
    var length2 = +lengthSum2;
    lengthSum2.reset();
    return length2;
  }
};
function lengthPointFirst2(x5, y5) {
  lengthStream2.point = lengthPoint2;
  x003 = x05 = x5, y003 = y05 = y5;
}
function lengthPoint2(x5, y5) {
  x05 -= x5, y05 -= y5;
  lengthSum2.add(sqrt(x05 * x05 + y05 * y05));
  x05 = x5, y05 = y5;
}
var measure_default = lengthStream2;

// node_modules/d3-geo/src/path/string.js
function PathString() {
  this._string = [];
}
PathString.prototype = {
  _radius: 4.5,
  _circle: circle(4.5),
  pointRadius: function(_) {
    if ((_ = +_) !== this._radius)
      this._radius = _, this._circle = null;
    return this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0)
      this._string.push("Z");
    this._point = NaN;
  },
  point: function(x5, y5) {
    switch (this._point) {
      case 0: {
        this._string.push("M", x5, ",", y5);
        this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", x5, ",", y5);
        break;
      }
      default: {
        if (this._circle == null)
          this._circle = circle(this._radius);
        this._string.push("M", x5, ",", y5, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var result = this._string.join("");
      this._string = [];
      return result;
    } else {
      return null;
    }
  }
};
function circle(radius) {
  return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
}

// node_modules/d3-geo/src/path/index.js
function path_default2(projection2, context) {
  var pointRadius = 4.5, projectionStream, contextStream;
  function path2(object2) {
    if (object2) {
      if (typeof pointRadius === "function")
        contextStream.pointRadius(+pointRadius.apply(this, arguments));
      stream_default(object2, projectionStream(contextStream));
    }
    return contextStream.result();
  }
  path2.area = function(object2) {
    stream_default(object2, projectionStream(area_default3));
    return area_default3.result();
  };
  path2.measure = function(object2) {
    stream_default(object2, projectionStream(measure_default));
    return measure_default.result();
  };
  path2.bounds = function(object2) {
    stream_default(object2, projectionStream(bounds_default2));
    return bounds_default2.result();
  };
  path2.centroid = function(object2) {
    stream_default(object2, projectionStream(centroid_default2));
    return centroid_default2.result();
  };
  path2.projection = function(_) {
    return arguments.length ? (projectionStream = _ == null ? (projection2 = null, identity_default4) : (projection2 = _).stream, path2) : projection2;
  };
  path2.context = function(_) {
    if (!arguments.length)
      return context;
    contextStream = _ == null ? (context = null, new PathString()) : new PathContext(context = _);
    if (typeof pointRadius !== "function")
      contextStream.pointRadius(pointRadius);
    return path2;
  };
  path2.pointRadius = function(_) {
    if (!arguments.length)
      return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path2;
  };
  return path2.projection(projection2).context(context);
}

// node_modules/d3-geo/src/transform.js
function transform_default(methods) {
  return {
    stream: transformer(methods)
  };
}
function transformer(methods) {
  return function(stream) {
    var s2 = new TransformStream();
    for (var key in methods)
      s2[key] = methods[key];
    s2.stream = stream;
    return s2;
  };
}
function TransformStream() {
}
TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x5, y5) {
    this.stream.point(x5, y5);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};

// node_modules/d3-geo/src/projection/fit.js
function fit(projection2, fitBounds, object2) {
  var clip = projection2.clipExtent && projection2.clipExtent();
  projection2.scale(150).translate([0, 0]);
  if (clip != null)
    projection2.clipExtent(null);
  stream_default(object2, projection2.stream(bounds_default2));
  fitBounds(bounds_default2.result());
  if (clip != null)
    projection2.clipExtent(clip);
  return projection2;
}
function fitExtent(projection2, extent, object2) {
  return fit(projection2, function(b) {
    var w = extent[1][0] - extent[0][0], h = extent[1][1] - extent[0][1], k2 = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x5 = +extent[0][0] + (w - k2 * (b[1][0] + b[0][0])) / 2, y5 = +extent[0][1] + (h - k2 * (b[1][1] + b[0][1])) / 2;
    projection2.scale(150 * k2).translate([x5, y5]);
  }, object2);
}
function fitSize(projection2, size, object2) {
  return fitExtent(projection2, [[0, 0], size], object2);
}
function fitWidth(projection2, width, object2) {
  return fit(projection2, function(b) {
    var w = +width, k2 = w / (b[1][0] - b[0][0]), x5 = (w - k2 * (b[1][0] + b[0][0])) / 2, y5 = -k2 * b[0][1];
    projection2.scale(150 * k2).translate([x5, y5]);
  }, object2);
}
function fitHeight(projection2, height, object2) {
  return fit(projection2, function(b) {
    var h = +height, k2 = h / (b[1][1] - b[0][1]), x5 = -k2 * b[0][0], y5 = (h - k2 * (b[1][1] + b[0][1])) / 2;
    projection2.scale(150 * k2).translate([x5, y5]);
  }, object2);
}

// node_modules/d3-geo/src/projection/resample.js
var maxDepth = 16;
var cosMinDistance = cos2(30 * radians);
function resample_default(project, delta2) {
  return +delta2 ? resample(project, delta2) : resampleNone(project);
}
function resampleNone(project) {
  return transformer({
    point: function(x5, y5) {
      x5 = project(x5, y5);
      this.stream.point(x5[0], x5[1]);
    }
  });
}
function resample(project, delta2) {
  function resampleLineTo(x06, y06, lambda04, a0, b02, c0, x12, y12, lambda12, a1, b12, c1, depth, stream) {
    var dx = x12 - x06, dy = y12 - y06, d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a2 = a0 + a1, b = b02 + b12, c4 = c0 + c1, m = sqrt(a2 * a2 + b * b + c4 * c4), phi2 = asin(c4 /= m), lambda22 = abs(abs(c4) - 1) < epsilon4 || abs(lambda04 - lambda12) < epsilon4 ? (lambda04 + lambda12) / 2 : atan2(b, a2), p = project(lambda22, phi2), x22 = p[0], y22 = p[1], dx2 = x22 - x06, dy2 = y22 - y06, dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 || abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 || a0 * a1 + b02 * b12 + c0 * c1 < cosMinDistance) {
        resampleLineTo(x06, y06, lambda04, a0, b02, c0, x22, y22, lambda22, a2 /= m, b /= m, c4, depth, stream);
        stream.point(x22, y22);
        resampleLineTo(x22, y22, lambda22, a2, b, c4, x12, y12, lambda12, a1, b12, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda004, x004, y004, a00, b00, c00, lambda04, x06, y06, a0, b02, c0;
    var resampleStream = {
      point: point6,
      lineStart,
      lineEnd,
      polygonStart: function() {
        stream.polygonStart();
        resampleStream.lineStart = ringStart;
      },
      polygonEnd: function() {
        stream.polygonEnd();
        resampleStream.lineStart = lineStart;
      }
    };
    function point6(x5, y5) {
      x5 = project(x5, y5);
      stream.point(x5[0], x5[1]);
    }
    function lineStart() {
      x06 = NaN;
      resampleStream.point = linePoint2;
      stream.lineStart();
    }
    function linePoint2(lambda, phi2) {
      var c4 = cartesian([lambda, phi2]), p = project(lambda, phi2);
      resampleLineTo(x06, y06, lambda04, a0, b02, c0, x06 = p[0], y06 = p[1], lambda04 = lambda, a0 = c4[0], b02 = c4[1], c0 = c4[2], maxDepth, stream);
      stream.point(x06, y06);
    }
    function lineEnd() {
      resampleStream.point = point6;
      stream.lineEnd();
    }
    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }
    function ringPoint(lambda, phi2) {
      linePoint2(lambda004 = lambda, phi2), x004 = x06, y004 = y06, a00 = a0, b00 = b02, c00 = c0;
      resampleStream.point = linePoint2;
    }
    function ringEnd() {
      resampleLineTo(x06, y06, lambda04, a0, b02, c0, x004, y004, lambda004, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }
    return resampleStream;
  };
}

// node_modules/d3-geo/src/projection/index.js
var transformRadians = transformer({
  point: function(x5, y5) {
    this.stream.point(x5 * radians, y5 * radians);
  }
});
function transformRotate(rotate) {
  return transformer({
    point: function(x5, y5) {
      var r = rotate(x5, y5);
      return this.stream.point(r[0], r[1]);
    }
  });
}
function scaleTranslate(k2, dx, dy, sx, sy) {
  function transform2(x5, y5) {
    x5 *= sx;
    y5 *= sy;
    return [dx + k2 * x5, dy - k2 * y5];
  }
  transform2.invert = function(x5, y5) {
    return [(x5 - dx) / k2 * sx, (dy - y5) / k2 * sy];
  };
  return transform2;
}
function scaleTranslateRotate(k2, dx, dy, sx, sy, alpha) {
  var cosAlpha = cos2(alpha), sinAlpha = sin2(alpha), a2 = cosAlpha * k2, b = sinAlpha * k2, ai = cosAlpha / k2, bi = sinAlpha / k2, ci = (sinAlpha * dy - cosAlpha * dx) / k2, fi = (sinAlpha * dx + cosAlpha * dy) / k2;
  function transform2(x5, y5) {
    x5 *= sx;
    y5 *= sy;
    return [a2 * x5 - b * y5 + dx, dy - b * x5 - a2 * y5];
  }
  transform2.invert = function(x5, y5) {
    return [sx * (ai * x5 - bi * y5 + ci), sy * (fi - bi * x5 - ai * y5)];
  };
  return transform2;
}
function projection(project) {
  return projectionMutator(function() {
    return project;
  })();
}
function projectionMutator(projectAt) {
  var project, k2 = 150, x5 = 480, y5 = 250, lambda = 0, phi2 = 0, deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, alpha = 0, sx = 1, sy = 1, theta = null, preclip = antimeridian_default, x06 = null, y06, x12, y12, postclip = identity_default4, delta2 = 0.5, projectResample, projectTransform, projectRotateTransform, cache, cacheStream;
  function projection2(point6) {
    return projectRotateTransform(point6[0] * radians, point6[1] * radians);
  }
  function invert(point6) {
    point6 = projectRotateTransform.invert(point6[0], point6[1]);
    return point6 && [point6[0] * degrees2, point6[1] * degrees2];
  }
  projection2.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };
  projection2.preclip = function(_) {
    return arguments.length ? (preclip = _, theta = void 0, reset()) : preclip;
  };
  projection2.postclip = function(_) {
    return arguments.length ? (postclip = _, x06 = y06 = x12 = y12 = null, reset()) : postclip;
  };
  projection2.clipAngle = function(_) {
    return arguments.length ? (preclip = +_ ? circle_default2(theta = _ * radians) : (theta = null, antimeridian_default), reset()) : theta * degrees2;
  };
  projection2.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x06 = y06 = x12 = y12 = null, identity_default4) : clipRectangle(x06 = +_[0][0], y06 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1]), reset()) : x06 == null ? null : [[x06, y06], [x12, y12]];
  };
  projection2.scale = function(_) {
    return arguments.length ? (k2 = +_, recenter()) : k2;
  };
  projection2.translate = function(_) {
    return arguments.length ? (x5 = +_[0], y5 = +_[1], recenter()) : [x5, y5];
  };
  projection2.center = function(_) {
    return arguments.length ? (lambda = _[0] % 360 * radians, phi2 = _[1] % 360 * radians, recenter()) : [lambda * degrees2, phi2 * degrees2];
  };
  projection2.rotate = function(_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * radians, deltaPhi = _[1] % 360 * radians, deltaGamma = _.length > 2 ? _[2] % 360 * radians : 0, recenter()) : [deltaLambda * degrees2, deltaPhi * degrees2, deltaGamma * degrees2];
  };
  projection2.angle = function(_) {
    return arguments.length ? (alpha = _ % 360 * radians, recenter()) : alpha * degrees2;
  };
  projection2.reflectX = function(_) {
    return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
  };
  projection2.reflectY = function(_) {
    return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
  };
  projection2.precision = function(_) {
    return arguments.length ? (projectResample = resample_default(projectTransform, delta2 = _ * _), reset()) : sqrt(delta2);
  };
  projection2.fitExtent = function(extent, object2) {
    return fitExtent(projection2, extent, object2);
  };
  projection2.fitSize = function(size, object2) {
    return fitSize(projection2, size, object2);
  };
  projection2.fitWidth = function(width, object2) {
    return fitWidth(projection2, width, object2);
  };
  projection2.fitHeight = function(height, object2) {
    return fitHeight(projection2, height, object2);
  };
  function recenter() {
    var center2 = scaleTranslateRotate(k2, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi2)), transform2 = (alpha ? scaleTranslateRotate : scaleTranslate)(k2, x5 - center2[0], y5 - center2[1], sx, sy, alpha);
    rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma);
    projectTransform = compose_default(project, transform2);
    projectRotateTransform = compose_default(rotate, projectTransform);
    projectResample = resample_default(projectTransform, delta2);
    return reset();
  }
  function reset() {
    cache = cacheStream = null;
    return projection2;
  }
  return function() {
    project = projectAt.apply(this, arguments);
    projection2.invert = project.invert && invert;
    return recenter();
  };
}

// node_modules/d3-geo/src/projection/conic.js
function conicProjection(projectAt) {
  var phi02 = 0, phi12 = pi4 / 3, m = projectionMutator(projectAt), p = m(phi02, phi12);
  p.parallels = function(_) {
    return arguments.length ? m(phi02 = _[0] * radians, phi12 = _[1] * radians) : [phi02 * degrees2, phi12 * degrees2];
  };
  return p;
}

// node_modules/d3-geo/src/projection/cylindricalEqualArea.js
function cylindricalEqualAreaRaw(phi02) {
  var cosPhi03 = cos2(phi02);
  function forward(lambda, phi2) {
    return [lambda * cosPhi03, sin2(phi2) / cosPhi03];
  }
  forward.invert = function(x5, y5) {
    return [x5 / cosPhi03, asin(y5 * cosPhi03)];
  };
  return forward;
}

// node_modules/d3-geo/src/projection/conicEqualArea.js
function conicEqualAreaRaw(y06, y12) {
  var sy0 = sin2(y06), n = (sy0 + sin2(y12)) / 2;
  if (abs(n) < epsilon4)
    return cylindricalEqualAreaRaw(y06);
  var c4 = 1 + sy0 * (2 * n - sy0), r0 = sqrt(c4) / n;
  function project(x5, y5) {
    var r = sqrt(c4 - 2 * n * sin2(y5)) / n;
    return [r * sin2(x5 *= n), r0 - r * cos2(x5)];
  }
  project.invert = function(x5, y5) {
    var r0y = r0 - y5, l = atan2(x5, abs(r0y)) * sign(r0y);
    if (r0y * n < 0)
      l -= pi4 * sign(x5) * sign(r0y);
    return [l / n, asin((c4 - (x5 * x5 + r0y * r0y) * n * n) / (2 * n))];
  };
  return project;
}
function conicEqualArea_default() {
  return conicProjection(conicEqualAreaRaw).scale(155.424).center([0, 33.6442]);
}

// node_modules/d3-geo/src/projection/albers.js
function albers_default() {
  return conicEqualArea_default().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
}

// node_modules/d3-geo/src/projection/albersUsa.js
function multiplex(streams) {
  var n = streams.length;
  return {
    point: function(x5, y5) {
      var i = -1;
      while (++i < n)
        streams[i].point(x5, y5);
    },
    sphere: function() {
      var i = -1;
      while (++i < n)
        streams[i].sphere();
    },
    lineStart: function() {
      var i = -1;
      while (++i < n)
        streams[i].lineStart();
    },
    lineEnd: function() {
      var i = -1;
      while (++i < n)
        streams[i].lineEnd();
    },
    polygonStart: function() {
      var i = -1;
      while (++i < n)
        streams[i].polygonStart();
    },
    polygonEnd: function() {
      var i = -1;
      while (++i < n)
        streams[i].polygonEnd();
    }
  };
}
function albersUsa_default() {
  var cache, cacheStream, lower48 = albers_default(), lower48Point, alaska = conicEqualArea_default().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, hawaii = conicEqualArea_default().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, point6, pointStream = {point: function(x5, y5) {
    point6 = [x5, y5];
  }};
  function albersUsa(coordinates2) {
    var x5 = coordinates2[0], y5 = coordinates2[1];
    return point6 = null, (lower48Point.point(x5, y5), point6) || (alaskaPoint.point(x5, y5), point6) || (hawaiiPoint.point(x5, y5), point6);
  }
  albersUsa.invert = function(coordinates2) {
    var k2 = lower48.scale(), t = lower48.translate(), x5 = (coordinates2[0] - t[0]) / k2, y5 = (coordinates2[1] - t[1]) / k2;
    return (y5 >= 0.12 && y5 < 0.234 && x5 >= -0.425 && x5 < -0.214 ? alaska : y5 >= 0.166 && y5 < 0.234 && x5 >= -0.214 && x5 < -0.115 ? hawaii : lower48).invert(coordinates2);
  };
  albersUsa.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };
  albersUsa.precision = function(_) {
    if (!arguments.length)
      return lower48.precision();
    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
    return reset();
  };
  albersUsa.scale = function(_) {
    if (!arguments.length)
      return lower48.scale();
    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
    return albersUsa.translate(lower48.translate());
  };
  albersUsa.translate = function(_) {
    if (!arguments.length)
      return lower48.translate();
    var k2 = lower48.scale(), x5 = +_[0], y5 = +_[1];
    lower48Point = lower48.translate(_).clipExtent([[x5 - 0.455 * k2, y5 - 0.238 * k2], [x5 + 0.455 * k2, y5 + 0.238 * k2]]).stream(pointStream);
    alaskaPoint = alaska.translate([x5 - 0.307 * k2, y5 + 0.201 * k2]).clipExtent([[x5 - 0.425 * k2 + epsilon4, y5 + 0.12 * k2 + epsilon4], [x5 - 0.214 * k2 - epsilon4, y5 + 0.234 * k2 - epsilon4]]).stream(pointStream);
    hawaiiPoint = hawaii.translate([x5 - 0.205 * k2, y5 + 0.212 * k2]).clipExtent([[x5 - 0.214 * k2 + epsilon4, y5 + 0.166 * k2 + epsilon4], [x5 - 0.115 * k2 - epsilon4, y5 + 0.234 * k2 - epsilon4]]).stream(pointStream);
    return reset();
  };
  albersUsa.fitExtent = function(extent, object2) {
    return fitExtent(albersUsa, extent, object2);
  };
  albersUsa.fitSize = function(size, object2) {
    return fitSize(albersUsa, size, object2);
  };
  albersUsa.fitWidth = function(width, object2) {
    return fitWidth(albersUsa, width, object2);
  };
  albersUsa.fitHeight = function(height, object2) {
    return fitHeight(albersUsa, height, object2);
  };
  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }
  return albersUsa.scale(1070);
}

// node_modules/d3-geo/src/projection/azimuthal.js
function azimuthalRaw(scale) {
  return function(x5, y5) {
    var cx = cos2(x5), cy = cos2(y5), k2 = scale(cx * cy);
    return [
      k2 * cy * sin2(x5),
      k2 * sin2(y5)
    ];
  };
}
function azimuthalInvert(angle2) {
  return function(x5, y5) {
    var z = sqrt(x5 * x5 + y5 * y5), c4 = angle2(z), sc = sin2(c4), cc = cos2(c4);
    return [
      atan2(x5 * sc, z * cc),
      asin(z && y5 * sc / z)
    ];
  };
}

// node_modules/d3-geo/src/projection/azimuthalEqualArea.js
var azimuthalEqualAreaRaw = azimuthalRaw(function(cxcy) {
  return sqrt(2 / (1 + cxcy));
});
azimuthalEqualAreaRaw.invert = azimuthalInvert(function(z) {
  return 2 * asin(z / 2);
});
function azimuthalEqualArea_default() {
  return projection(azimuthalEqualAreaRaw).scale(124.75).clipAngle(180 - 1e-3);
}

// node_modules/d3-geo/src/projection/azimuthalEquidistant.js
var azimuthalEquidistantRaw = azimuthalRaw(function(c4) {
  return (c4 = acos(c4)) && c4 / sin2(c4);
});
azimuthalEquidistantRaw.invert = azimuthalInvert(function(z) {
  return z;
});
function azimuthalEquidistant_default() {
  return projection(azimuthalEquidistantRaw).scale(79.4188).clipAngle(180 - 1e-3);
}

// node_modules/d3-geo/src/projection/mercator.js
function mercatorRaw(lambda, phi2) {
  return [lambda, log(tan((halfPi3 + phi2) / 2))];
}
mercatorRaw.invert = function(x5, y5) {
  return [x5, 2 * atan(exp(y5)) - halfPi3];
};
function mercator_default() {
  return mercatorProjection(mercatorRaw).scale(961 / tau4);
}
function mercatorProjection(project) {
  var m = projection(project), center2 = m.center, scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, x06 = null, y06, x12, y12;
  m.scale = function(_) {
    return arguments.length ? (scale(_), reclip()) : scale();
  };
  m.translate = function(_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };
  m.center = function(_) {
    return arguments.length ? (center2(_), reclip()) : center2();
  };
  m.clipExtent = function(_) {
    return arguments.length ? (_ == null ? x06 = y06 = x12 = y12 = null : (x06 = +_[0][0], y06 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1]), reclip()) : x06 == null ? null : [[x06, y06], [x12, y12]];
  };
  function reclip() {
    var k2 = pi4 * scale(), t = m(rotation_default(m.rotate()).invert([0, 0]));
    return clipExtent(x06 == null ? [[t[0] - k2, t[1] - k2], [t[0] + k2, t[1] + k2]] : project === mercatorRaw ? [[Math.max(t[0] - k2, x06), y06], [Math.min(t[0] + k2, x12), y12]] : [[x06, Math.max(t[1] - k2, y06)], [x12, Math.min(t[1] + k2, y12)]]);
  }
  return reclip();
}

// node_modules/d3-geo/src/projection/conicConformal.js
function tany(y5) {
  return tan((halfPi3 + y5) / 2);
}
function conicConformalRaw(y06, y12) {
  var cy0 = cos2(y06), n = y06 === y12 ? sin2(y06) : log(cy0 / cos2(y12)) / log(tany(y12) / tany(y06)), f = cy0 * pow(tany(y06), n) / n;
  if (!n)
    return mercatorRaw;
  function project(x5, y5) {
    if (f > 0) {
      if (y5 < -halfPi3 + epsilon4)
        y5 = -halfPi3 + epsilon4;
    } else {
      if (y5 > halfPi3 - epsilon4)
        y5 = halfPi3 - epsilon4;
    }
    var r = f / pow(tany(y5), n);
    return [r * sin2(n * x5), f - r * cos2(n * x5)];
  }
  project.invert = function(x5, y5) {
    var fy = f - y5, r = sign(n) * sqrt(x5 * x5 + fy * fy), l = atan2(x5, abs(fy)) * sign(fy);
    if (fy * n < 0)
      l -= pi4 * sign(x5) * sign(fy);
    return [l / n, 2 * atan(pow(f / r, 1 / n)) - halfPi3];
  };
  return project;
}
function conicConformal_default() {
  return conicProjection(conicConformalRaw).scale(109.5).parallels([30, 30]);
}

// node_modules/d3-geo/src/projection/equirectangular.js
function equirectangularRaw(lambda, phi2) {
  return [lambda, phi2];
}
equirectangularRaw.invert = equirectangularRaw;
function equirectangular_default() {
  return projection(equirectangularRaw).scale(152.63);
}

// node_modules/d3-geo/src/projection/conicEquidistant.js
function conicEquidistantRaw(y06, y12) {
  var cy0 = cos2(y06), n = y06 === y12 ? sin2(y06) : (cy0 - cos2(y12)) / (y12 - y06), g = cy0 / n + y06;
  if (abs(n) < epsilon4)
    return equirectangularRaw;
  function project(x5, y5) {
    var gy = g - y5, nx = n * x5;
    return [gy * sin2(nx), g - gy * cos2(nx)];
  }
  project.invert = function(x5, y5) {
    var gy = g - y5, l = atan2(x5, abs(gy)) * sign(gy);
    if (gy * n < 0)
      l -= pi4 * sign(x5) * sign(gy);
    return [l / n, g - sign(n) * sqrt(x5 * x5 + gy * gy)];
  };
  return project;
}
function conicEquidistant_default() {
  return conicProjection(conicEquidistantRaw).scale(131.154).center([0, 13.9389]);
}

// node_modules/d3-geo/src/projection/equalEarth.js
var A1 = 1.340264;
var A2 = -0.081106;
var A3 = 893e-6;
var A4 = 3796e-6;
var M = sqrt(3) / 2;
var iterations = 12;
function equalEarthRaw(lambda, phi2) {
  var l = asin(M * sin2(phi2)), l2 = l * l, l6 = l2 * l2 * l2;
  return [
    lambda * cos2(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2))),
    l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))
  ];
}
equalEarthRaw.invert = function(x5, y5) {
  var l = y5, l2 = l * l, l6 = l2 * l2 * l2;
  for (var i = 0, delta, fy, fpy; i < iterations; ++i) {
    fy = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2)) - y5;
    fpy = A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2);
    l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2;
    if (abs(delta) < epsilon22)
      break;
  }
  return [
    M * x5 * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)) / cos2(l),
    asin(sin2(l) / M)
  ];
};
function equalEarth_default() {
  return projection(equalEarthRaw).scale(177.158);
}

// node_modules/d3-geo/src/projection/gnomonic.js
function gnomonicRaw(x5, y5) {
  var cy = cos2(y5), k2 = cos2(x5) * cy;
  return [cy * sin2(x5) / k2, sin2(y5) / k2];
}
gnomonicRaw.invert = azimuthalInvert(atan);
function gnomonic_default() {
  return projection(gnomonicRaw).scale(144.049).clipAngle(60);
}

// node_modules/d3-geo/src/projection/identity.js
function identity_default5() {
  var k2 = 1, tx = 0, ty = 0, sx = 1, sy = 1, alpha = 0, ca, sa, x06 = null, y06, x12, y12, kx2 = 1, ky2 = 1, transform2 = transformer({
    point: function(x5, y5) {
      var p = projection2([x5, y5]);
      this.stream.point(p[0], p[1]);
    }
  }), postclip = identity_default4, cache, cacheStream;
  function reset() {
    kx2 = k2 * sx;
    ky2 = k2 * sy;
    cache = cacheStream = null;
    return projection2;
  }
  function projection2(p) {
    var x5 = p[0] * kx2, y5 = p[1] * ky2;
    if (alpha) {
      var t = y5 * ca - x5 * sa;
      x5 = x5 * ca + y5 * sa;
      y5 = t;
    }
    return [x5 + tx, y5 + ty];
  }
  projection2.invert = function(p) {
    var x5 = p[0] - tx, y5 = p[1] - ty;
    if (alpha) {
      var t = y5 * ca + x5 * sa;
      x5 = x5 * ca - y5 * sa;
      y5 = t;
    }
    return [x5 / kx2, y5 / ky2];
  };
  projection2.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transform2(postclip(cacheStream = stream));
  };
  projection2.postclip = function(_) {
    return arguments.length ? (postclip = _, x06 = y06 = x12 = y12 = null, reset()) : postclip;
  };
  projection2.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x06 = y06 = x12 = y12 = null, identity_default4) : clipRectangle(x06 = +_[0][0], y06 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1]), reset()) : x06 == null ? null : [[x06, y06], [x12, y12]];
  };
  projection2.scale = function(_) {
    return arguments.length ? (k2 = +_, reset()) : k2;
  };
  projection2.translate = function(_) {
    return arguments.length ? (tx = +_[0], ty = +_[1], reset()) : [tx, ty];
  };
  projection2.angle = function(_) {
    return arguments.length ? (alpha = _ % 360 * radians, sa = sin2(alpha), ca = cos2(alpha), reset()) : alpha * degrees2;
  };
  projection2.reflectX = function(_) {
    return arguments.length ? (sx = _ ? -1 : 1, reset()) : sx < 0;
  };
  projection2.reflectY = function(_) {
    return arguments.length ? (sy = _ ? -1 : 1, reset()) : sy < 0;
  };
  projection2.fitExtent = function(extent, object2) {
    return fitExtent(projection2, extent, object2);
  };
  projection2.fitSize = function(size, object2) {
    return fitSize(projection2, size, object2);
  };
  projection2.fitWidth = function(width, object2) {
    return fitWidth(projection2, width, object2);
  };
  projection2.fitHeight = function(height, object2) {
    return fitHeight(projection2, height, object2);
  };
  return projection2;
}

// node_modules/d3-geo/src/projection/naturalEarth1.js
function naturalEarth1Raw(lambda, phi2) {
  var phi22 = phi2 * phi2, phi4 = phi22 * phi22;
  return [
    lambda * (0.8707 - 0.131979 * phi22 + phi4 * (-0.013791 + phi4 * (3971e-6 * phi22 - 1529e-6 * phi4))),
    phi2 * (1.007226 + phi22 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi22 - 5916e-6 * phi4)))
  ];
}
naturalEarth1Raw.invert = function(x5, y5) {
  var phi2 = y5, i = 25, delta;
  do {
    var phi22 = phi2 * phi2, phi4 = phi22 * phi22;
    phi2 -= delta = (phi2 * (1.007226 + phi22 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi22 - 5916e-6 * phi4))) - y5) / (1.007226 + phi22 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi22 - 5916e-6 * 11 * phi4)));
  } while (abs(delta) > epsilon4 && --i > 0);
  return [
    x5 / (0.8707 + (phi22 = phi2 * phi2) * (-0.131979 + phi22 * (-0.013791 + phi22 * phi22 * phi22 * (3971e-6 - 1529e-6 * phi22)))),
    phi2
  ];
};
function naturalEarth1_default() {
  return projection(naturalEarth1Raw).scale(175.295);
}

// node_modules/d3-geo/src/projection/orthographic.js
function orthographicRaw(x5, y5) {
  return [cos2(y5) * sin2(x5), sin2(y5)];
}
orthographicRaw.invert = azimuthalInvert(asin);
function orthographic_default() {
  return projection(orthographicRaw).scale(249.5).clipAngle(90 + epsilon4);
}

// node_modules/d3-geo/src/projection/stereographic.js
function stereographicRaw(x5, y5) {
  var cy = cos2(y5), k2 = 1 + cos2(x5) * cy;
  return [cy * sin2(x5) / k2, sin2(y5) / k2];
}
stereographicRaw.invert = azimuthalInvert(function(z) {
  return 2 * atan(z);
});
function stereographic_default() {
  return projection(stereographicRaw).scale(250).clipAngle(142);
}

// node_modules/d3-geo/src/projection/transverseMercator.js
function transverseMercatorRaw(lambda, phi2) {
  return [log(tan((halfPi3 + phi2) / 2)), -lambda];
}
transverseMercatorRaw.invert = function(x5, y5) {
  return [-y5, 2 * atan(exp(x5)) - halfPi3];
};
function transverseMercator_default() {
  var m = mercatorProjection(transverseMercatorRaw), center2 = m.center, rotate = m.rotate;
  m.center = function(_) {
    return arguments.length ? center2([-_[1], _[0]]) : (_ = center2(), [_[1], -_[0]]);
  };
  m.rotate = function(_) {
    return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
  };
  return rotate([0, 0, 90]).scale(159.155);
}

// node_modules/d3-hierarchy/src/cluster.js
function defaultSeparation(a2, b) {
  return a2.parent === b.parent ? 1 : 2;
}
function meanX(children) {
  return children.reduce(meanXReduce, 0) / children.length;
}
function meanXReduce(x5, c4) {
  return x5 + c4.x;
}
function maxY(children) {
  return 1 + children.reduce(maxYReduce, 0);
}
function maxYReduce(y5, c4) {
  return Math.max(y5, c4.y);
}
function leafLeft(node) {
  var children;
  while (children = node.children)
    node = children[0];
  return node;
}
function leafRight(node) {
  var children;
  while (children = node.children)
    node = children[children.length - 1];
  return node;
}
function cluster_default() {
  var separation = defaultSeparation, dx = 1, dy = 1, nodeSize = false;
  function cluster(root3) {
    var previousNode, x5 = 0;
    root3.eachAfter(function(node) {
      var children = node.children;
      if (children) {
        node.x = meanX(children);
        node.y = maxY(children);
      } else {
        node.x = previousNode ? x5 += separation(node, previousNode) : 0;
        node.y = 0;
        previousNode = node;
      }
    });
    var left2 = leafLeft(root3), right2 = leafRight(root3), x06 = left2.x - separation(left2, right2) / 2, x12 = right2.x + separation(right2, left2) / 2;
    return root3.eachAfter(nodeSize ? function(node) {
      node.x = (node.x - root3.x) * dx;
      node.y = (root3.y - node.y) * dy;
    } : function(node) {
      node.x = (node.x - x06) / (x12 - x06) * dx;
      node.y = (1 - (root3.y ? node.y / root3.y : 1)) * dy;
    });
  }
  cluster.separation = function(x5) {
    return arguments.length ? (separation = x5, cluster) : separation;
  };
  cluster.size = function(x5) {
    return arguments.length ? (nodeSize = false, dx = +x5[0], dy = +x5[1], cluster) : nodeSize ? null : [dx, dy];
  };
  cluster.nodeSize = function(x5) {
    return arguments.length ? (nodeSize = true, dx = +x5[0], dy = +x5[1], cluster) : nodeSize ? [dx, dy] : null;
  };
  return cluster;
}

// node_modules/d3-hierarchy/src/hierarchy/count.js
function count(node) {
  var sum3 = 0, children = node.children, i = children && children.length;
  if (!i)
    sum3 = 1;
  else
    while (--i >= 0)
      sum3 += children[i].value;
  node.value = sum3;
}
function count_default() {
  return this.eachAfter(count);
}

// node_modules/d3-hierarchy/src/hierarchy/each.js
function each_default2(callback) {
  var node = this, current, next = [node], children, i, n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      callback(node), children = node.children;
      if (children)
        for (i = 0, n = children.length; i < n; ++i) {
          next.push(children[i]);
        }
    }
  } while (next.length);
  return this;
}

// node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
function eachBefore_default(callback) {
  var node = this, nodes = [node], children, i;
  while (node = nodes.pop()) {
    callback(node), children = node.children;
    if (children)
      for (i = children.length - 1; i >= 0; --i) {
        nodes.push(children[i]);
      }
  }
  return this;
}

// node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
function eachAfter_default(callback) {
  var node = this, nodes = [node], next = [], children, i, n;
  while (node = nodes.pop()) {
    next.push(node), children = node.children;
    if (children)
      for (i = 0, n = children.length; i < n; ++i) {
        nodes.push(children[i]);
      }
  }
  while (node = next.pop()) {
    callback(node);
  }
  return this;
}

// node_modules/d3-hierarchy/src/hierarchy/sum.js
function sum_default2(value) {
  return this.eachAfter(function(node) {
    var sum3 = +value(node.data) || 0, children = node.children, i = children && children.length;
    while (--i >= 0)
      sum3 += children[i].value;
    node.value = sum3;
  });
}

// node_modules/d3-hierarchy/src/hierarchy/sort.js
function sort_default2(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
}

// node_modules/d3-hierarchy/src/hierarchy/path.js
function path_default3(end) {
  var start2 = this, ancestor = leastCommonAncestor(start2, end), nodes = [start2];
  while (start2 !== ancestor) {
    start2 = start2.parent;
    nodes.push(start2);
  }
  var k2 = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k2, 0, end);
    end = end.parent;
  }
  return nodes;
}
function leastCommonAncestor(a2, b) {
  if (a2 === b)
    return a2;
  var aNodes = a2.ancestors(), bNodes = b.ancestors(), c4 = null;
  a2 = aNodes.pop();
  b = bNodes.pop();
  while (a2 === b) {
    c4 = a2;
    a2 = aNodes.pop();
    b = bNodes.pop();
  }
  return c4;
}

// node_modules/d3-hierarchy/src/hierarchy/ancestors.js
function ancestors_default() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
}

// node_modules/d3-hierarchy/src/hierarchy/descendants.js
function descendants_default() {
  var nodes = [];
  this.each(function(node) {
    nodes.push(node);
  });
  return nodes;
}

// node_modules/d3-hierarchy/src/hierarchy/leaves.js
function leaves_default() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
}

// node_modules/d3-hierarchy/src/hierarchy/links.js
function links_default() {
  var root3 = this, links = [];
  root3.each(function(node) {
    if (node !== root3) {
      links.push({source: node.parent, target: node});
    }
  });
  return links;
}

// node_modules/d3-hierarchy/src/hierarchy/index.js
function hierarchy(data, children) {
  var root3 = new Node(data), valued = +data.value && (root3.value = data.value), node, nodes = [root3], child, childs, i, n;
  if (children == null)
    children = defaultChildren;
  while (node = nodes.pop()) {
    if (valued)
      node.value = +node.data.value;
    if ((childs = children(node.data)) && (n = childs.length)) {
      node.children = new Array(n);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }
  return root3.eachBefore(computeHeight);
}
function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}
function defaultChildren(d) {
  return d.children;
}
function copyData(node) {
  node.data = node.data.data;
}
function computeHeight(node) {
  var height = 0;
  do
    node.height = height;
  while ((node = node.parent) && node.height < ++height);
}
function Node(data) {
  this.data = data;
  this.depth = this.height = 0;
  this.parent = null;
}
Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: count_default,
  each: each_default2,
  eachAfter: eachAfter_default,
  eachBefore: eachBefore_default,
  sum: sum_default2,
  sort: sort_default2,
  path: path_default3,
  ancestors: ancestors_default,
  descendants: descendants_default,
  leaves: leaves_default,
  links: links_default,
  copy: node_copy
};

// node_modules/d3-hierarchy/src/array.js
var slice5 = Array.prototype.slice;
function shuffle(array4) {
  var m = array4.length, t, i;
  while (m) {
    i = Math.random() * m-- | 0;
    t = array4[m];
    array4[m] = array4[i];
    array4[i] = t;
  }
  return array4;
}

// node_modules/d3-hierarchy/src/pack/enclose.js
function enclose_default(circles2) {
  var i = 0, n = (circles2 = shuffle(slice5.call(circles2))).length, B2 = [], p, e;
  while (i < n) {
    p = circles2[i];
    if (e && enclosesWeak(e, p))
      ++i;
    else
      e = encloseBasis(B2 = extendBasis(B2, p)), i = 0;
  }
  return e;
}
function extendBasis(B2, p) {
  var i, j;
  if (enclosesWeakAll(p, B2))
    return [p];
  for (i = 0; i < B2.length; ++i) {
    if (enclosesNot(p, B2[i]) && enclosesWeakAll(encloseBasis2(B2[i], p), B2)) {
      return [B2[i], p];
    }
  }
  for (i = 0; i < B2.length - 1; ++i) {
    for (j = i + 1; j < B2.length; ++j) {
      if (enclosesNot(encloseBasis2(B2[i], B2[j]), p) && enclosesNot(encloseBasis2(B2[i], p), B2[j]) && enclosesNot(encloseBasis2(B2[j], p), B2[i]) && enclosesWeakAll(encloseBasis3(B2[i], B2[j], p), B2)) {
        return [B2[i], B2[j], p];
      }
    }
  }
  throw new Error();
}
function enclosesNot(a2, b) {
  var dr = a2.r - b.r, dx = b.x - a2.x, dy = b.y - a2.y;
  return dr < 0 || dr * dr < dx * dx + dy * dy;
}
function enclosesWeak(a2, b) {
  var dr = a2.r - b.r + 1e-6, dx = b.x - a2.x, dy = b.y - a2.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}
function enclosesWeakAll(a2, B2) {
  for (var i = 0; i < B2.length; ++i) {
    if (!enclosesWeak(a2, B2[i])) {
      return false;
    }
  }
  return true;
}
function encloseBasis(B2) {
  switch (B2.length) {
    case 1:
      return encloseBasis1(B2[0]);
    case 2:
      return encloseBasis2(B2[0], B2[1]);
    case 3:
      return encloseBasis3(B2[0], B2[1], B2[2]);
  }
}
function encloseBasis1(a2) {
  return {
    x: a2.x,
    y: a2.y,
    r: a2.r
  };
}
function encloseBasis2(a2, b) {
  var x12 = a2.x, y12 = a2.y, r1 = a2.r, x22 = b.x, y22 = b.y, r2 = b.r, x21 = x22 - x12, y21 = y22 - y12, r21 = r2 - r1, l = Math.sqrt(x21 * x21 + y21 * y21);
  return {
    x: (x12 + x22 + x21 / l * r21) / 2,
    y: (y12 + y22 + y21 / l * r21) / 2,
    r: (l + r1 + r2) / 2
  };
}
function encloseBasis3(a2, b, c4) {
  var x12 = a2.x, y12 = a2.y, r1 = a2.r, x22 = b.x, y22 = b.y, r2 = b.r, x32 = c4.x, y32 = c4.y, r3 = c4.r, a22 = x12 - x22, a3 = x12 - x32, b22 = y12 - y22, b32 = y12 - y32, c22 = r2 - r1, c32 = r3 - r1, d1 = x12 * x12 + y12 * y12 - r1 * r1, d2 = d1 - x22 * x22 - y22 * y22 + r2 * r2, d3 = d1 - x32 * x32 - y32 * y32 + r3 * r3, ab = a3 * b22 - a22 * b32, xa = (b22 * d3 - b32 * d2) / (ab * 2) - x12, xb = (b32 * c22 - b22 * c32) / ab, ya = (a3 * d2 - a22 * d3) / (ab * 2) - y12, yb = (a22 * c32 - a3 * c22) / ab, A5 = xb * xb + yb * yb - 1, B2 = 2 * (r1 + xa * xb + ya * yb), C2 = xa * xa + ya * ya - r1 * r1, r = -(A5 ? (B2 + Math.sqrt(B2 * B2 - 4 * A5 * C2)) / (2 * A5) : C2 / B2);
  return {
    x: x12 + xa + xb * r,
    y: y12 + ya + yb * r,
    r
  };
}

// node_modules/d3-hierarchy/src/pack/siblings.js
function place(b, a2, c4) {
  var dx = b.x - a2.x, x5, a22, dy = b.y - a2.y, y5, b22, d2 = dx * dx + dy * dy;
  if (d2) {
    a22 = a2.r + c4.r, a22 *= a22;
    b22 = b.r + c4.r, b22 *= b22;
    if (a22 > b22) {
      x5 = (d2 + b22 - a22) / (2 * d2);
      y5 = Math.sqrt(Math.max(0, b22 / d2 - x5 * x5));
      c4.x = b.x - x5 * dx - y5 * dy;
      c4.y = b.y - x5 * dy + y5 * dx;
    } else {
      x5 = (d2 + a22 - b22) / (2 * d2);
      y5 = Math.sqrt(Math.max(0, a22 / d2 - x5 * x5));
      c4.x = a2.x + x5 * dx - y5 * dy;
      c4.y = a2.y + x5 * dy + y5 * dx;
    }
  } else {
    c4.x = a2.x + c4.r;
    c4.y = a2.y;
  }
}
function intersects(a2, b) {
  var dr = a2.r + b.r - 1e-6, dx = b.x - a2.x, dy = b.y - a2.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}
function score(node) {
  var a2 = node._, b = node.next._, ab = a2.r + b.r, dx = (a2.x * b.r + b.x * a2.r) / ab, dy = (a2.y * b.r + b.y * a2.r) / ab;
  return dx * dx + dy * dy;
}
function Node2(circle2) {
  this._ = circle2;
  this.next = null;
  this.previous = null;
}
function packEnclose(circles2) {
  if (!(n = circles2.length))
    return 0;
  var a2, b, c4, n, aa, ca, i, j, k2, sj, sk;
  a2 = circles2[0], a2.x = 0, a2.y = 0;
  if (!(n > 1))
    return a2.r;
  b = circles2[1], a2.x = -b.r, b.x = a2.r, b.y = 0;
  if (!(n > 2))
    return a2.r + b.r;
  place(b, a2, c4 = circles2[2]);
  a2 = new Node2(a2), b = new Node2(b), c4 = new Node2(c4);
  a2.next = c4.previous = b;
  b.next = a2.previous = c4;
  c4.next = b.previous = a2;
  pack:
    for (i = 3; i < n; ++i) {
      place(a2._, b._, c4 = circles2[i]), c4 = new Node2(c4);
      j = b.next, k2 = a2.previous, sj = b._.r, sk = a2._.r;
      do {
        if (sj <= sk) {
          if (intersects(j._, c4._)) {
            b = j, a2.next = b, b.previous = a2, --i;
            continue pack;
          }
          sj += j._.r, j = j.next;
        } else {
          if (intersects(k2._, c4._)) {
            a2 = k2, a2.next = b, b.previous = a2, --i;
            continue pack;
          }
          sk += k2._.r, k2 = k2.previous;
        }
      } while (j !== k2.next);
      c4.previous = a2, c4.next = b, a2.next = b.previous = b = c4;
      aa = score(a2);
      while ((c4 = c4.next) !== b) {
        if ((ca = score(c4)) < aa) {
          a2 = c4, aa = ca;
        }
      }
      b = a2.next;
    }
  a2 = [b._], c4 = b;
  while ((c4 = c4.next) !== b)
    a2.push(c4._);
  c4 = enclose_default(a2);
  for (i = 0; i < n; ++i)
    a2 = circles2[i], a2.x -= c4.x, a2.y -= c4.y;
  return c4.r;
}
function siblings_default(circles2) {
  packEnclose(circles2);
  return circles2;
}

// node_modules/d3-hierarchy/src/accessors.js
function optional(f) {
  return f == null ? null : required(f);
}
function required(f) {
  if (typeof f !== "function")
    throw new Error();
  return f;
}

// node_modules/d3-hierarchy/src/constant.js
function constantZero() {
  return 0;
}
function constant_default10(x5) {
  return function() {
    return x5;
  };
}

// node_modules/d3-hierarchy/src/pack/index.js
function defaultRadius2(d) {
  return Math.sqrt(d.value);
}
function pack_default() {
  var radius = null, dx = 1, dy = 1, padding = constantZero;
  function pack(root3) {
    root3.x = dx / 2, root3.y = dy / 2;
    if (radius) {
      root3.eachBefore(radiusLeaf(radius)).eachAfter(packChildren(padding, 0.5)).eachBefore(translateChild(1));
    } else {
      root3.eachBefore(radiusLeaf(defaultRadius2)).eachAfter(packChildren(constantZero, 1)).eachAfter(packChildren(padding, root3.r / Math.min(dx, dy))).eachBefore(translateChild(Math.min(dx, dy) / (2 * root3.r)));
    }
    return root3;
  }
  pack.radius = function(x5) {
    return arguments.length ? (radius = optional(x5), pack) : radius;
  };
  pack.size = function(x5) {
    return arguments.length ? (dx = +x5[0], dy = +x5[1], pack) : [dx, dy];
  };
  pack.padding = function(x5) {
    return arguments.length ? (padding = typeof x5 === "function" ? x5 : constant_default10(+x5), pack) : padding;
  };
  return pack;
}
function radiusLeaf(radius) {
  return function(node) {
    if (!node.children) {
      node.r = Math.max(0, +radius(node) || 0);
    }
  };
}
function packChildren(padding, k2) {
  return function(node) {
    if (children = node.children) {
      var children, i, n = children.length, r = padding(node) * k2 || 0, e;
      if (r)
        for (i = 0; i < n; ++i)
          children[i].r += r;
      e = packEnclose(children);
      if (r)
        for (i = 0; i < n; ++i)
          children[i].r -= r;
      node.r = e + r;
    }
  };
}
function translateChild(k2) {
  return function(node) {
    var parent = node.parent;
    node.r *= k2;
    if (parent) {
      node.x = parent.x + k2 * node.x;
      node.y = parent.y + k2 * node.y;
    }
  };
}

// node_modules/d3-hierarchy/src/treemap/round.js
function round_default2(node) {
  node.x0 = Math.round(node.x0);
  node.y0 = Math.round(node.y0);
  node.x1 = Math.round(node.x1);
  node.y1 = Math.round(node.y1);
}

// node_modules/d3-hierarchy/src/treemap/dice.js
function dice_default(parent, x06, y06, x12, y12) {
  var nodes = parent.children, node, i = -1, n = nodes.length, k2 = parent.value && (x12 - x06) / parent.value;
  while (++i < n) {
    node = nodes[i], node.y0 = y06, node.y1 = y12;
    node.x0 = x06, node.x1 = x06 += node.value * k2;
  }
}

// node_modules/d3-hierarchy/src/partition.js
function partition_default() {
  var dx = 1, dy = 1, padding = 0, round = false;
  function partition(root3) {
    var n = root3.height + 1;
    root3.x0 = root3.y0 = padding;
    root3.x1 = dx;
    root3.y1 = dy / n;
    root3.eachBefore(positionNode(dy, n));
    if (round)
      root3.eachBefore(round_default2);
    return root3;
  }
  function positionNode(dy2, n) {
    return function(node) {
      if (node.children) {
        dice_default(node, node.x0, dy2 * (node.depth + 1) / n, node.x1, dy2 * (node.depth + 2) / n);
      }
      var x06 = node.x0, y06 = node.y0, x12 = node.x1 - padding, y12 = node.y1 - padding;
      if (x12 < x06)
        x06 = x12 = (x06 + x12) / 2;
      if (y12 < y06)
        y06 = y12 = (y06 + y12) / 2;
      node.x0 = x06;
      node.y0 = y06;
      node.x1 = x12;
      node.y1 = y12;
    };
  }
  partition.round = function(x5) {
    return arguments.length ? (round = !!x5, partition) : round;
  };
  partition.size = function(x5) {
    return arguments.length ? (dx = +x5[0], dy = +x5[1], partition) : [dx, dy];
  };
  partition.padding = function(x5) {
    return arguments.length ? (padding = +x5, partition) : padding;
  };
  return partition;
}

// node_modules/d3-hierarchy/src/stratify.js
var keyPrefix2 = "$";
var preroot = {depth: -1};
var ambiguous = {};
function defaultId(d) {
  return d.id;
}
function defaultParentId(d) {
  return d.parentId;
}
function stratify_default() {
  var id2 = defaultId, parentId = defaultParentId;
  function stratify(data) {
    var d, i, n = data.length, root3, parent, node, nodes = new Array(n), nodeId, nodeKey, nodeByKey = {};
    for (i = 0; i < n; ++i) {
      d = data[i], node = nodes[i] = new Node(d);
      if ((nodeId = id2(d, i, data)) != null && (nodeId += "")) {
        nodeKey = keyPrefix2 + (node.id = nodeId);
        nodeByKey[nodeKey] = nodeKey in nodeByKey ? ambiguous : node;
      }
    }
    for (i = 0; i < n; ++i) {
      node = nodes[i], nodeId = parentId(data[i], i, data);
      if (nodeId == null || !(nodeId += "")) {
        if (root3)
          throw new Error("multiple roots");
        root3 = node;
      } else {
        parent = nodeByKey[keyPrefix2 + nodeId];
        if (!parent)
          throw new Error("missing: " + nodeId);
        if (parent === ambiguous)
          throw new Error("ambiguous: " + nodeId);
        if (parent.children)
          parent.children.push(node);
        else
          parent.children = [node];
        node.parent = parent;
      }
    }
    if (!root3)
      throw new Error("no root");
    root3.parent = preroot;
    root3.eachBefore(function(node2) {
      node2.depth = node2.parent.depth + 1;
      --n;
    }).eachBefore(computeHeight);
    root3.parent = null;
    if (n > 0)
      throw new Error("cycle");
    return root3;
  }
  stratify.id = function(x5) {
    return arguments.length ? (id2 = required(x5), stratify) : id2;
  };
  stratify.parentId = function(x5) {
    return arguments.length ? (parentId = required(x5), stratify) : parentId;
  };
  return stratify;
}

// node_modules/d3-hierarchy/src/tree.js
function defaultSeparation2(a2, b) {
  return a2.parent === b.parent ? 1 : 2;
}
function nextLeft(v) {
  var children = v.children;
  return children ? children[0] : v.t;
}
function nextRight(v) {
  var children = v.children;
  return children ? children[children.length - 1] : v.t;
}
function moveSubtree(wm, wp, shift) {
  var change = shift / (wp.i - wm.i);
  wp.c -= change;
  wp.s += shift;
  wm.c += change;
  wp.z += shift;
  wp.m += shift;
}
function executeShifts(v) {
  var shift = 0, change = 0, children = v.children, i = children.length, w;
  while (--i >= 0) {
    w = children[i];
    w.z += shift;
    w.m += shift;
    shift += w.s + (change += w.c);
  }
}
function nextAncestor(vim, v, ancestor) {
  return vim.a.parent === v.parent ? vim.a : ancestor;
}
function TreeNode(node, i) {
  this._ = node;
  this.parent = null;
  this.children = null;
  this.A = null;
  this.a = this;
  this.z = 0;
  this.m = 0;
  this.c = 0;
  this.s = 0;
  this.t = null;
  this.i = i;
}
TreeNode.prototype = Object.create(Node.prototype);
function treeRoot(root3) {
  var tree = new TreeNode(root3, 0), node, nodes = [tree], child, children, i, n;
  while (node = nodes.pop()) {
    if (children = node._.children) {
      node.children = new Array(n = children.length);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new TreeNode(children[i], i));
        child.parent = node;
      }
    }
  }
  (tree.parent = new TreeNode(null, 0)).children = [tree];
  return tree;
}
function tree_default() {
  var separation = defaultSeparation2, dx = 1, dy = 1, nodeSize = null;
  function tree(root3) {
    var t = treeRoot(root3);
    t.eachAfter(firstWalk), t.parent.m = -t.z;
    t.eachBefore(secondWalk);
    if (nodeSize)
      root3.eachBefore(sizeNode);
    else {
      var left2 = root3, right2 = root3, bottom2 = root3;
      root3.eachBefore(function(node) {
        if (node.x < left2.x)
          left2 = node;
        if (node.x > right2.x)
          right2 = node;
        if (node.depth > bottom2.depth)
          bottom2 = node;
      });
      var s2 = left2 === right2 ? 1 : separation(left2, right2) / 2, tx = s2 - left2.x, kx2 = dx / (right2.x + s2 + tx), ky2 = dy / (bottom2.depth || 1);
      root3.eachBefore(function(node) {
        node.x = (node.x + tx) * kx2;
        node.y = node.depth * ky2;
      });
    }
    return root3;
  }
  function firstWalk(v) {
    var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
    if (children) {
      executeShifts(v);
      var midpoint = (children[0].z + children[children.length - 1].z) / 2;
      if (w) {
        v.z = w.z + separation(v._, w._);
        v.m = v.z - midpoint;
      } else {
        v.z = midpoint;
      }
    } else if (w) {
      v.z = w.z + separation(v._, w._);
    }
    v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
  }
  function secondWalk(v) {
    v._.x = v.z + v.parent.m;
    v.m += v.parent.m;
  }
  function apportion(v, w, ancestor) {
    if (w) {
      var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
        vom = nextLeft(vom);
        vop = nextRight(vop);
        vop.a = v;
        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
        if (shift > 0) {
          moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
          sip += shift;
          sop += shift;
        }
        sim += vim.m;
        sip += vip.m;
        som += vom.m;
        sop += vop.m;
      }
      if (vim && !nextRight(vop)) {
        vop.t = vim;
        vop.m += sim - sop;
      }
      if (vip && !nextLeft(vom)) {
        vom.t = vip;
        vom.m += sip - som;
        ancestor = v;
      }
    }
    return ancestor;
  }
  function sizeNode(node) {
    node.x *= dx;
    node.y = node.depth * dy;
  }
  tree.separation = function(x5) {
    return arguments.length ? (separation = x5, tree) : separation;
  };
  tree.size = function(x5) {
    return arguments.length ? (nodeSize = false, dx = +x5[0], dy = +x5[1], tree) : nodeSize ? null : [dx, dy];
  };
  tree.nodeSize = function(x5) {
    return arguments.length ? (nodeSize = true, dx = +x5[0], dy = +x5[1], tree) : nodeSize ? [dx, dy] : null;
  };
  return tree;
}

// node_modules/d3-hierarchy/src/treemap/slice.js
function slice_default(parent, x06, y06, x12, y12) {
  var nodes = parent.children, node, i = -1, n = nodes.length, k2 = parent.value && (y12 - y06) / parent.value;
  while (++i < n) {
    node = nodes[i], node.x0 = x06, node.x1 = x12;
    node.y0 = y06, node.y1 = y06 += node.value * k2;
  }
}

// node_modules/d3-hierarchy/src/treemap/squarify.js
var phi = (1 + Math.sqrt(5)) / 2;
function squarifyRatio(ratio, parent, x06, y06, x12, y12) {
  var rows = [], nodes = parent.children, row, nodeValue, i0 = 0, i1 = 0, n = nodes.length, dx, dy, value = parent.value, sumValue, minValue, maxValue, newRatio, minRatio, alpha, beta;
  while (i0 < n) {
    dx = x12 - x06, dy = y12 - y06;
    do
      sumValue = nodes[i1++].value;
    while (!sumValue && i1 < n);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);
    for (; i1 < n; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue)
        minValue = nodeValue;
      if (nodeValue > maxValue)
        maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) {
        sumValue -= nodeValue;
        break;
      }
      minRatio = newRatio;
    }
    rows.push(row = {value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1)});
    if (row.dice)
      dice_default(row, x06, y06, x12, value ? y06 += dy * sumValue / value : y12);
    else
      slice_default(row, x06, y06, value ? x06 += dx * sumValue / value : x12, y12);
    value -= sumValue, i0 = i1;
  }
  return rows;
}
var squarify_default = function custom10(ratio) {
  function squarify(parent, x06, y06, x12, y12) {
    squarifyRatio(ratio, parent, x06, y06, x12, y12);
  }
  squarify.ratio = function(x5) {
    return custom10((x5 = +x5) > 1 ? x5 : 1);
  };
  return squarify;
}(phi);

// node_modules/d3-hierarchy/src/treemap/index.js
function treemap_default() {
  var tile = squarify_default, round = false, dx = 1, dy = 1, paddingStack = [0], paddingInner = constantZero, paddingTop = constantZero, paddingRight = constantZero, paddingBottom = constantZero, paddingLeft = constantZero;
  function treemap(root3) {
    root3.x0 = root3.y0 = 0;
    root3.x1 = dx;
    root3.y1 = dy;
    root3.eachBefore(positionNode);
    paddingStack = [0];
    if (round)
      root3.eachBefore(round_default2);
    return root3;
  }
  function positionNode(node) {
    var p = paddingStack[node.depth], x06 = node.x0 + p, y06 = node.y0 + p, x12 = node.x1 - p, y12 = node.y1 - p;
    if (x12 < x06)
      x06 = x12 = (x06 + x12) / 2;
    if (y12 < y06)
      y06 = y12 = (y06 + y12) / 2;
    node.x0 = x06;
    node.y0 = y06;
    node.x1 = x12;
    node.y1 = y12;
    if (node.children) {
      p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
      x06 += paddingLeft(node) - p;
      y06 += paddingTop(node) - p;
      x12 -= paddingRight(node) - p;
      y12 -= paddingBottom(node) - p;
      if (x12 < x06)
        x06 = x12 = (x06 + x12) / 2;
      if (y12 < y06)
        y06 = y12 = (y06 + y12) / 2;
      tile(node, x06, y06, x12, y12);
    }
  }
  treemap.round = function(x5) {
    return arguments.length ? (round = !!x5, treemap) : round;
  };
  treemap.size = function(x5) {
    return arguments.length ? (dx = +x5[0], dy = +x5[1], treemap) : [dx, dy];
  };
  treemap.tile = function(x5) {
    return arguments.length ? (tile = required(x5), treemap) : tile;
  };
  treemap.padding = function(x5) {
    return arguments.length ? treemap.paddingInner(x5).paddingOuter(x5) : treemap.paddingInner();
  };
  treemap.paddingInner = function(x5) {
    return arguments.length ? (paddingInner = typeof x5 === "function" ? x5 : constant_default10(+x5), treemap) : paddingInner;
  };
  treemap.paddingOuter = function(x5) {
    return arguments.length ? treemap.paddingTop(x5).paddingRight(x5).paddingBottom(x5).paddingLeft(x5) : treemap.paddingTop();
  };
  treemap.paddingTop = function(x5) {
    return arguments.length ? (paddingTop = typeof x5 === "function" ? x5 : constant_default10(+x5), treemap) : paddingTop;
  };
  treemap.paddingRight = function(x5) {
    return arguments.length ? (paddingRight = typeof x5 === "function" ? x5 : constant_default10(+x5), treemap) : paddingRight;
  };
  treemap.paddingBottom = function(x5) {
    return arguments.length ? (paddingBottom = typeof x5 === "function" ? x5 : constant_default10(+x5), treemap) : paddingBottom;
  };
  treemap.paddingLeft = function(x5) {
    return arguments.length ? (paddingLeft = typeof x5 === "function" ? x5 : constant_default10(+x5), treemap) : paddingLeft;
  };
  return treemap;
}

// node_modules/d3-hierarchy/src/treemap/binary.js
function binary_default(parent, x06, y06, x12, y12) {
  var nodes = parent.children, i, n = nodes.length, sum3, sums = new Array(n + 1);
  for (sums[0] = sum3 = i = 0; i < n; ++i) {
    sums[i + 1] = sum3 += nodes[i].value;
  }
  partition(0, n, parent.value, x06, y06, x12, y12);
  function partition(i2, j, value, x07, y07, x13, y13) {
    if (i2 >= j - 1) {
      var node = nodes[i2];
      node.x0 = x07, node.y0 = y07;
      node.x1 = x13, node.y1 = y13;
      return;
    }
    var valueOffset = sums[i2], valueTarget = value / 2 + valueOffset, k2 = i2 + 1, hi = j - 1;
    while (k2 < hi) {
      var mid = k2 + hi >>> 1;
      if (sums[mid] < valueTarget)
        k2 = mid + 1;
      else
        hi = mid;
    }
    if (valueTarget - sums[k2 - 1] < sums[k2] - valueTarget && i2 + 1 < k2)
      --k2;
    var valueLeft = sums[k2] - valueOffset, valueRight = value - valueLeft;
    if (x13 - x07 > y13 - y07) {
      var xk = (x07 * valueRight + x13 * valueLeft) / value;
      partition(i2, k2, valueLeft, x07, y07, xk, y13);
      partition(k2, j, valueRight, xk, y07, x13, y13);
    } else {
      var yk = (y07 * valueRight + y13 * valueLeft) / value;
      partition(i2, k2, valueLeft, x07, y07, x13, yk);
      partition(k2, j, valueRight, x07, yk, x13, y13);
    }
  }
}

// node_modules/d3-hierarchy/src/treemap/sliceDice.js
function sliceDice_default(parent, x06, y06, x12, y12) {
  (parent.depth & 1 ? slice_default : dice_default)(parent, x06, y06, x12, y12);
}

// node_modules/d3-hierarchy/src/treemap/resquarify.js
var resquarify_default = function custom11(ratio) {
  function resquarify(parent, x06, y06, x12, y12) {
    if ((rows = parent._squarify) && rows.ratio === ratio) {
      var rows, row, nodes, i, j = -1, n, m = rows.length, value = parent.value;
      while (++j < m) {
        row = rows[j], nodes = row.children;
        for (i = row.value = 0, n = nodes.length; i < n; ++i)
          row.value += nodes[i].value;
        if (row.dice)
          dice_default(row, x06, y06, x12, y06 += (y12 - y06) * row.value / value);
        else
          slice_default(row, x06, y06, x06 += (x12 - x06) * row.value / value, y12);
        value -= row.value;
      }
    } else {
      parent._squarify = rows = squarifyRatio(ratio, parent, x06, y06, x12, y12);
      rows.ratio = ratio;
    }
  }
  resquarify.ratio = function(x5) {
    return custom11((x5 = +x5) > 1 ? x5 : 1);
  };
  return resquarify;
}(phi);

// node_modules/d3-polygon/src/area.js
function area_default4(polygon) {
  var i = -1, n = polygon.length, a2, b = polygon[n - 1], area = 0;
  while (++i < n) {
    a2 = b;
    b = polygon[i];
    area += a2[1] * b[0] - a2[0] * b[1];
  }
  return area / 2;
}

// node_modules/d3-polygon/src/centroid.js
function centroid_default3(polygon) {
  var i = -1, n = polygon.length, x5 = 0, y5 = 0, a2, b = polygon[n - 1], c4, k2 = 0;
  while (++i < n) {
    a2 = b;
    b = polygon[i];
    k2 += c4 = a2[0] * b[1] - b[0] * a2[1];
    x5 += (a2[0] + b[0]) * c4;
    y5 += (a2[1] + b[1]) * c4;
  }
  return k2 *= 3, [x5 / k2, y5 / k2];
}

// node_modules/d3-polygon/src/cross.js
function cross_default2(a2, b, c4) {
  return (b[0] - a2[0]) * (c4[1] - a2[1]) - (b[1] - a2[1]) * (c4[0] - a2[0]);
}

// node_modules/d3-polygon/src/hull.js
function lexicographicOrder(a2, b) {
  return a2[0] - b[0] || a2[1] - b[1];
}
function computeUpperHullIndexes(points) {
  var n = points.length, indexes = [0, 1], size = 2;
  for (var i = 2; i < n; ++i) {
    while (size > 1 && cross_default2(points[indexes[size - 2]], points[indexes[size - 1]], points[i]) <= 0)
      --size;
    indexes[size++] = i;
  }
  return indexes.slice(0, size);
}
function hull_default(points) {
  if ((n = points.length) < 3)
    return null;
  var i, n, sortedPoints = new Array(n), flippedPoints = new Array(n);
  for (i = 0; i < n; ++i)
    sortedPoints[i] = [+points[i][0], +points[i][1], i];
  sortedPoints.sort(lexicographicOrder);
  for (i = 0; i < n; ++i)
    flippedPoints[i] = [sortedPoints[i][0], -sortedPoints[i][1]];
  var upperIndexes = computeUpperHullIndexes(sortedPoints), lowerIndexes = computeUpperHullIndexes(flippedPoints);
  var skipLeft = lowerIndexes[0] === upperIndexes[0], skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1], hull = [];
  for (i = upperIndexes.length - 1; i >= 0; --i)
    hull.push(points[sortedPoints[upperIndexes[i]][2]]);
  for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i)
    hull.push(points[sortedPoints[lowerIndexes[i]][2]]);
  return hull;
}

// node_modules/d3-polygon/src/contains.js
function contains_default3(polygon, point6) {
  var n = polygon.length, p = polygon[n - 1], x5 = point6[0], y5 = point6[1], x06 = p[0], y06 = p[1], x12, y12, inside = false;
  for (var i = 0; i < n; ++i) {
    p = polygon[i], x12 = p[0], y12 = p[1];
    if (y12 > y5 !== y06 > y5 && x5 < (x06 - x12) * (y5 - y12) / (y06 - y12) + x12)
      inside = !inside;
    x06 = x12, y06 = y12;
  }
  return inside;
}

// node_modules/d3-polygon/src/length.js
function length_default2(polygon) {
  var i = -1, n = polygon.length, b = polygon[n - 1], xa, ya, xb = b[0], yb = b[1], perimeter = 0;
  while (++i < n) {
    xa = xb;
    ya = yb;
    b = polygon[i];
    xb = b[0];
    yb = b[1];
    xa -= xb;
    ya -= yb;
    perimeter += Math.sqrt(xa * xa + ya * ya);
  }
  return perimeter;
}

// node_modules/d3-random/src/defaultSource.js
function defaultSource_default() {
  return Math.random();
}

// node_modules/d3-random/src/uniform.js
var uniform_default = function sourceRandomUniform(source) {
  function randomUniform(min2, max3) {
    min2 = min2 == null ? 0 : +min2;
    max3 = max3 == null ? 1 : +max3;
    if (arguments.length === 1)
      max3 = min2, min2 = 0;
    else
      max3 -= min2;
    return function() {
      return source() * max3 + min2;
    };
  }
  randomUniform.source = sourceRandomUniform;
  return randomUniform;
}(defaultSource_default);

// node_modules/d3-random/src/normal.js
var normal_default = function sourceRandomNormal(source) {
  function randomNormal(mu, sigma) {
    var x5, r;
    mu = mu == null ? 0 : +mu;
    sigma = sigma == null ? 1 : +sigma;
    return function() {
      var y5;
      if (x5 != null)
        y5 = x5, x5 = null;
      else
        do {
          x5 = source() * 2 - 1;
          y5 = source() * 2 - 1;
          r = x5 * x5 + y5 * y5;
        } while (!r || r > 1);
      return mu + sigma * y5 * Math.sqrt(-2 * Math.log(r) / r);
    };
  }
  randomNormal.source = sourceRandomNormal;
  return randomNormal;
}(defaultSource_default);

// node_modules/d3-random/src/logNormal.js
var logNormal_default = function sourceRandomLogNormal(source) {
  function randomLogNormal() {
    var randomNormal = normal_default.source(source).apply(this, arguments);
    return function() {
      return Math.exp(randomNormal());
    };
  }
  randomLogNormal.source = sourceRandomLogNormal;
  return randomLogNormal;
}(defaultSource_default);

// node_modules/d3-random/src/irwinHall.js
var irwinHall_default = function sourceRandomIrwinHall(source) {
  function randomIrwinHall(n) {
    return function() {
      for (var sum3 = 0, i = 0; i < n; ++i)
        sum3 += source();
      return sum3;
    };
  }
  randomIrwinHall.source = sourceRandomIrwinHall;
  return randomIrwinHall;
}(defaultSource_default);

// node_modules/d3-random/src/bates.js
var bates_default = function sourceRandomBates(source) {
  function randomBates(n) {
    var randomIrwinHall = irwinHall_default.source(source)(n);
    return function() {
      return randomIrwinHall() / n;
    };
  }
  randomBates.source = sourceRandomBates;
  return randomBates;
}(defaultSource_default);

// node_modules/d3-random/src/exponential.js
var exponential_default = function sourceRandomExponential(source) {
  function randomExponential(lambda) {
    return function() {
      return -Math.log(1 - source()) / lambda;
    };
  }
  randomExponential.source = sourceRandomExponential;
  return randomExponential;
}(defaultSource_default);

// node_modules/d3-scale/src/init.js
function initRange(domain, range2) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range2).domain(domain);
      break;
  }
  return this;
}
function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.interpolator(domain);
      break;
    default:
      this.interpolator(interpolator).domain(domain);
      break;
  }
  return this;
}

// node_modules/d3-scale/src/array.js
var array3 = Array.prototype;
var map4 = array3.map;
var slice6 = array3.slice;

// node_modules/d3-scale/src/ordinal.js
var implicit = {name: "implicit"};
function ordinal() {
  var index2 = map_default(), domain = [], range2 = [], unknown = implicit;
  function scale(d) {
    var key = d + "", i = index2.get(key);
    if (!i) {
      if (unknown !== implicit)
        return unknown;
      index2.set(key, i = domain.push(d));
    }
    return range2[(i - 1) % range2.length];
  }
  scale.domain = function(_) {
    if (!arguments.length)
      return domain.slice();
    domain = [], index2 = map_default();
    var i = -1, n = _.length, d, key;
    while (++i < n)
      if (!index2.has(key = (d = _[i]) + ""))
        index2.set(key, domain.push(d));
    return scale;
  };
  scale.range = function(_) {
    return arguments.length ? (range2 = slice6.call(_), scale) : range2.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return ordinal(domain, range2).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return scale;
}

// node_modules/d3-scale/src/band.js
function band() {
  var scale = ordinal().unknown(void 0), domain = scale.domain, ordinalRange = scale.range, range2 = [0, 1], step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
  delete scale.unknown;
  function rescale() {
    var n = domain().length, reverse = range2[1] < range2[0], start2 = range2[reverse - 0], stop = range2[1 - reverse];
    step = (stop - start2) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round)
      step = Math.floor(step);
    start2 += (stop - start2 - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round)
      start2 = Math.round(start2), bandwidth = Math.round(bandwidth);
    var values = range_default(n).map(function(i) {
      return start2 + step * i;
    });
    return ordinalRange(reverse ? values.reverse() : values);
  }
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.range = function(_) {
    return arguments.length ? (range2 = [+_[0], +_[1]], rescale()) : range2.slice();
  };
  scale.rangeRound = function(_) {
    return range2 = [+_[0], +_[1]], round = true, rescale();
  };
  scale.bandwidth = function() {
    return bandwidth;
  };
  scale.step = function() {
    return step;
  };
  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };
  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };
  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };
  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };
  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };
  scale.copy = function() {
    return band(domain(), range2).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };
  return initRange.apply(rescale(), arguments);
}
function pointish(scale) {
  var copy3 = scale.copy;
  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;
  scale.copy = function() {
    return pointish(copy3());
  };
  return scale;
}
function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}

// node_modules/d3-scale/src/constant.js
function constant_default11(x5) {
  return function() {
    return x5;
  };
}

// node_modules/d3-scale/src/number.js
function number_default3(x5) {
  return +x5;
}

// node_modules/d3-scale/src/continuous.js
var unit = [0, 1];
function identity2(x5) {
  return x5;
}
function normalize(a2, b) {
  return (b -= a2 = +a2) ? function(x5) {
    return (x5 - a2) / b;
  } : constant_default11(isNaN(b) ? NaN : 0.5);
}
function clamper(domain) {
  var a2 = domain[0], b = domain[domain.length - 1], t;
  if (a2 > b)
    t = a2, a2 = b, b = t;
  return function(x5) {
    return Math.max(a2, Math.min(b, x5));
  };
}
function bimap(domain, range2, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range2[0], r1 = range2[1];
  if (d1 < d0)
    d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else
    d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x5) {
    return r0(d0(x5));
  };
}
function polymap(domain, range2, interpolate) {
  var j = Math.min(domain.length, range2.length) - 1, d = new Array(j), r = new Array(j), i = -1;
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range2 = range2.slice().reverse();
  }
  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range2[i], range2[i + 1]);
  }
  return function(x5) {
    var i2 = bisect_default(domain, x5, 1, j) - 1;
    return r[i2](d[i2](x5));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer2() {
  var domain = unit, range2 = unit, interpolate = value_default, transform2, untransform, unknown, clamp = identity2, piecewise2, output, input;
  function rescale() {
    piecewise2 = Math.min(domain.length, range2.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x5) {
    return isNaN(x5 = +x5) ? unknown : (output || (output = piecewise2(domain.map(transform2), range2, interpolate)))(transform2(clamp(x5)));
  }
  scale.invert = function(y5) {
    return clamp(untransform((input || (input = piecewise2(range2, domain.map(transform2), number_default2)))(y5)));
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = map4.call(_, number_default3), clamp === identity2 || (clamp = clamper(domain)), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range2 = slice6.call(_), rescale()) : range2.slice();
  };
  scale.rangeRound = function(_) {
    return range2 = slice6.call(_), interpolate = round_default, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? clamper(domain) : identity2, scale) : clamp !== identity2;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t, u) {
    transform2 = t, untransform = u;
    return rescale();
  };
}
function continuous(transform2, untransform) {
  return transformer2()(transform2, untransform);
}

// node_modules/d3-scale/src/tickFormat.js
function tickFormat_default(start2, stop, count2, specifier) {
  var step = tickStep(start2, stop, count2), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start2), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value)))
        specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start2), Math.abs(stop)))))
        specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step)))
        specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

// node_modules/d3-scale/src/linear.js
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count2) {
    var d = domain();
    return ticks_default(d[0], d[d.length - 1], count2 == null ? 10 : count2);
  };
  scale.tickFormat = function(count2, specifier) {
    var d = domain();
    return tickFormat_default(d[0], d[d.length - 1], count2 == null ? 10 : count2, specifier);
  };
  scale.nice = function(count2) {
    if (count2 == null)
      count2 = 10;
    var d = domain(), i0 = 0, i1 = d.length - 1, start2 = d[i0], stop = d[i1], step;
    if (stop < start2) {
      step = start2, start2 = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    step = tickIncrement(start2, stop, count2);
    if (step > 0) {
      start2 = Math.floor(start2 / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = tickIncrement(start2, stop, count2);
    } else if (step < 0) {
      start2 = Math.ceil(start2 * step) / step;
      stop = Math.floor(stop * step) / step;
      step = tickIncrement(start2, stop, count2);
    }
    if (step > 0) {
      d[i0] = Math.floor(start2 / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start2 * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }
    return scale;
  };
  return scale;
}
function linear3() {
  var scale = continuous(identity2, identity2);
  scale.copy = function() {
    return copy(scale, linear3());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}

// node_modules/d3-scale/src/identity.js
function identity3(domain) {
  var unknown;
  function scale(x5) {
    return isNaN(x5 = +x5) ? unknown : x5;
  }
  scale.invert = scale;
  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = map4.call(_, number_default3), scale) : domain.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return identity3(domain).unknown(unknown);
  };
  domain = arguments.length ? map4.call(domain, number_default3) : [0, 1];
  return linearish(scale);
}

// node_modules/d3-scale/src/nice.js
function nice_default(domain, interval2) {
  domain = domain.slice();
  var i0 = 0, i1 = domain.length - 1, x06 = domain[i0], x12 = domain[i1], t;
  if (x12 < x06) {
    t = i0, i0 = i1, i1 = t;
    t = x06, x06 = x12, x12 = t;
  }
  domain[i0] = interval2.floor(x06);
  domain[i1] = interval2.ceil(x12);
  return domain;
}

// node_modules/d3-scale/src/log.js
function transformLog(x5) {
  return Math.log(x5);
}
function transformExp(x5) {
  return Math.exp(x5);
}
function transformLogn(x5) {
  return -Math.log(-x5);
}
function transformExpn(x5) {
  return -Math.exp(-x5);
}
function pow10(x5) {
  return isFinite(x5) ? +("1e" + x5) : x5 < 0 ? 0 : x5;
}
function powp(base) {
  return base === 10 ? pow10 : base === Math.E ? Math.exp : function(x5) {
    return Math.pow(base, x5);
  };
}
function logp(base) {
  return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), function(x5) {
    return Math.log(x5) / base;
  });
}
function reflect(f) {
  return function(x5) {
    return -f(-x5);
  };
}
function loggish(transform2) {
  var scale = transform2(transformLog, transformExp), domain = scale.domain, base = 10, logs, pows;
  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform2(transformLogn, transformExpn);
    } else {
      transform2(transformLog, transformExp);
    }
    return scale;
  }
  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.ticks = function(count2) {
    var d = domain(), u = d[0], v = d[d.length - 1], r;
    if (r = v < u)
      i = u, u = v, v = i;
    var i = logs(u), j = logs(v), p, k2, t, n = count2 == null ? 10 : +count2, z = [];
    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0)
        for (; i < j; ++i) {
          for (k2 = 1, p = pows(i); k2 < base; ++k2) {
            t = p * k2;
            if (t < u)
              continue;
            if (t > v)
              break;
            z.push(t);
          }
        }
      else
        for (; i < j; ++i) {
          for (k2 = base - 1, p = pows(i); k2 >= 1; --k2) {
            t = p * k2;
            if (t < u)
              continue;
            if (t > v)
              break;
            z.push(t);
          }
        }
    } else {
      z = ticks_default(i, j, Math.min(j - i, n)).map(pows);
    }
    return r ? z.reverse() : z;
  };
  scale.tickFormat = function(count2, specifier) {
    if (specifier == null)
      specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function")
      specifier = format(specifier);
    if (count2 === Infinity)
      return specifier;
    if (count2 == null)
      count2 = 10;
    var k2 = Math.max(1, base * count2 / scale.ticks().length);
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5)
        i *= base;
      return i <= k2 ? specifier(d) : "";
    };
  };
  scale.nice = function() {
    return domain(nice_default(domain(), {
      floor: function(x5) {
        return pows(Math.floor(logs(x5)));
      },
      ceil: function(x5) {
        return pows(Math.ceil(logs(x5)));
      }
    }));
  };
  return scale;
}
function log2() {
  var scale = loggish(transformer2()).domain([1, 10]);
  scale.copy = function() {
    return copy(scale, log2()).base(scale.base());
  };
  initRange.apply(scale, arguments);
  return scale;
}

// node_modules/d3-scale/src/symlog.js
function transformSymlog(c4) {
  return function(x5) {
    return Math.sign(x5) * Math.log1p(Math.abs(x5 / c4));
  };
}
function transformSymexp(c4) {
  return function(x5) {
    return Math.sign(x5) * Math.expm1(Math.abs(x5)) * c4;
  };
}
function symlogish(transform2) {
  var c4 = 1, scale = transform2(transformSymlog(c4), transformSymexp(c4));
  scale.constant = function(_) {
    return arguments.length ? transform2(transformSymlog(c4 = +_), transformSymexp(c4)) : c4;
  };
  return linearish(scale);
}
function symlog() {
  var scale = symlogish(transformer2());
  scale.copy = function() {
    return copy(scale, symlog()).constant(scale.constant());
  };
  return initRange.apply(scale, arguments);
}

// node_modules/d3-scale/src/pow.js
function transformPow(exponent2) {
  return function(x5) {
    return x5 < 0 ? -Math.pow(-x5, exponent2) : Math.pow(x5, exponent2);
  };
}
function transformSqrt(x5) {
  return x5 < 0 ? -Math.sqrt(-x5) : Math.sqrt(x5);
}
function transformSquare(x5) {
  return x5 < 0 ? -x5 * x5 : x5 * x5;
}
function powish(transform2) {
  var scale = transform2(identity2, identity2), exponent2 = 1;
  function rescale() {
    return exponent2 === 1 ? transform2(identity2, identity2) : exponent2 === 0.5 ? transform2(transformSqrt, transformSquare) : transform2(transformPow(exponent2), transformPow(1 / exponent2));
  }
  scale.exponent = function(_) {
    return arguments.length ? (exponent2 = +_, rescale()) : exponent2;
  };
  return linearish(scale);
}
function pow2() {
  var scale = powish(transformer2());
  scale.copy = function() {
    return copy(scale, pow2()).exponent(scale.exponent());
  };
  initRange.apply(scale, arguments);
  return scale;
}
function sqrt2() {
  return pow2.apply(null, arguments).exponent(0.5);
}

// node_modules/d3-scale/src/quantile.js
function quantile() {
  var domain = [], range2 = [], thresholds = [], unknown;
  function rescale() {
    var i = 0, n = Math.max(1, range2.length);
    thresholds = new Array(n - 1);
    while (++i < n)
      thresholds[i - 1] = quantile_default(domain, i / n);
    return scale;
  }
  function scale(x5) {
    return isNaN(x5 = +x5) ? unknown : range2[bisect_default(thresholds, x5)];
  }
  scale.invertExtent = function(y5) {
    var i = range2.indexOf(y5);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };
  scale.domain = function(_) {
    if (!arguments.length)
      return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i)
      if (d = _[i], d != null && !isNaN(d = +d))
        domain.push(d);
    domain.sort(ascending_default);
    return rescale();
  };
  scale.range = function(_) {
    return arguments.length ? (range2 = slice6.call(_), rescale()) : range2.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.quantiles = function() {
    return thresholds.slice();
  };
  scale.copy = function() {
    return quantile().domain(domain).range(range2).unknown(unknown);
  };
  return initRange.apply(scale, arguments);
}

// node_modules/d3-scale/src/quantize.js
function quantize() {
  var x06 = 0, x12 = 1, n = 1, domain = [0.5], range2 = [0, 1], unknown;
  function scale(x5) {
    return x5 <= x5 ? range2[bisect_default(domain, x5, 0, n)] : unknown;
  }
  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n)
      domain[i] = ((i + 1) * x12 - (i - n) * x06) / (n + 1);
    return scale;
  }
  scale.domain = function(_) {
    return arguments.length ? (x06 = +_[0], x12 = +_[1], rescale()) : [x06, x12];
  };
  scale.range = function(_) {
    return arguments.length ? (n = (range2 = slice6.call(_)).length - 1, rescale()) : range2.slice();
  };
  scale.invertExtent = function(y5) {
    var i = range2.indexOf(y5);
    return i < 0 ? [NaN, NaN] : i < 1 ? [x06, domain[0]] : i >= n ? [domain[n - 1], x12] : [domain[i - 1], domain[i]];
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };
  scale.thresholds = function() {
    return domain.slice();
  };
  scale.copy = function() {
    return quantize().domain([x06, x12]).range(range2).unknown(unknown);
  };
  return initRange.apply(linearish(scale), arguments);
}

// node_modules/d3-scale/src/threshold.js
function threshold() {
  var domain = [0.5], range2 = [0, 1], unknown, n = 1;
  function scale(x5) {
    return x5 <= x5 ? range2[bisect_default(domain, x5, 0, n)] : unknown;
  }
  scale.domain = function(_) {
    return arguments.length ? (domain = slice6.call(_), n = Math.min(domain.length, range2.length - 1), scale) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range2 = slice6.call(_), n = Math.min(domain.length, range2.length - 1), scale) : range2.slice();
  };
  scale.invertExtent = function(y5) {
    var i = range2.indexOf(y5);
    return [domain[i - 1], domain[i]];
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return threshold().domain(domain).range(range2).unknown(unknown);
  };
  return initRange.apply(scale, arguments);
}

// node_modules/d3-time/src/interval.js
var t02 = new Date();
var t12 = new Date();
function newInterval(floori, offseti, count2, field) {
  function interval2(date2) {
    return floori(date2 = arguments.length === 0 ? new Date() : new Date(+date2)), date2;
  }
  interval2.floor = function(date2) {
    return floori(date2 = new Date(+date2)), date2;
  };
  interval2.ceil = function(date2) {
    return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
  };
  interval2.round = function(date2) {
    var d0 = interval2(date2), d1 = interval2.ceil(date2);
    return date2 - d0 < d1 - date2 ? d0 : d1;
  };
  interval2.offset = function(date2, step) {
    return offseti(date2 = new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
  };
  interval2.range = function(start2, stop, step) {
    var range2 = [], previous;
    start2 = interval2.ceil(start2);
    step = step == null ? 1 : Math.floor(step);
    if (!(start2 < stop) || !(step > 0))
      return range2;
    do
      range2.push(previous = new Date(+start2)), offseti(start2, step), floori(start2);
    while (previous < start2 && start2 < stop);
    return range2;
  };
  interval2.filter = function(test) {
    return newInterval(function(date2) {
      if (date2 >= date2)
        while (floori(date2), !test(date2))
          date2.setTime(date2 - 1);
    }, function(date2, step) {
      if (date2 >= date2) {
        if (step < 0)
          while (++step <= 0) {
            while (offseti(date2, -1), !test(date2)) {
            }
          }
        else
          while (--step >= 0) {
            while (offseti(date2, 1), !test(date2)) {
            }
          }
      }
    });
  };
  if (count2) {
    interval2.count = function(start2, end) {
      t02.setTime(+start2), t12.setTime(+end);
      floori(t02), floori(t12);
      return Math.floor(count2(t02, t12));
    };
    interval2.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval2 : interval2.filter(field ? function(d) {
        return field(d) % step === 0;
      } : function(d) {
        return interval2.count(0, d) % step === 0;
      });
    };
  }
  return interval2;
}

// node_modules/d3-time/src/millisecond.js
var millisecond = newInterval(function() {
}, function(date2, step) {
  date2.setTime(+date2 + step);
}, function(start2, end) {
  return end - start2;
});
millisecond.every = function(k2) {
  k2 = Math.floor(k2);
  if (!isFinite(k2) || !(k2 > 0))
    return null;
  if (!(k2 > 1))
    return millisecond;
  return newInterval(function(date2) {
    date2.setTime(Math.floor(date2 / k2) * k2);
  }, function(date2, step) {
    date2.setTime(+date2 + step * k2);
  }, function(start2, end) {
    return (end - start2) / k2;
  });
};
var millisecond_default = millisecond;
var milliseconds = millisecond.range;

// node_modules/d3-time/src/duration.js
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;

// node_modules/d3-time/src/second.js
var second = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds());
}, function(date2, step) {
  date2.setTime(+date2 + step * durationSecond);
}, function(start2, end) {
  return (end - start2) / durationSecond;
}, function(date2) {
  return date2.getUTCSeconds();
});
var second_default = second;
var seconds = second.range;

// node_modules/d3-time/src/minute.js
var minute = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationMinute);
}, function(start2, end) {
  return (end - start2) / durationMinute;
}, function(date2) {
  return date2.getMinutes();
});
var minute_default = minute;
var minutes = minute.range;

// node_modules/d3-time/src/hour.js
var hour = newInterval(function(date2) {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond - date2.getMinutes() * durationMinute);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationHour);
}, function(start2, end) {
  return (end - start2) / durationHour;
}, function(date2) {
  return date2.getHours();
});
var hour_default = hour;
var hours = hour.range;

// node_modules/d3-time/src/day.js
var day = newInterval(function(date2) {
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setDate(date2.getDate() + step);
}, function(start2, end) {
  return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationDay;
}, function(date2) {
  return date2.getDate() - 1;
});
var day_default = day;
var days = day.range;

// node_modules/d3-time/src/week.js
function weekday(i) {
  return newInterval(function(date2) {
    date2.setDate(date2.getDate() - (date2.getDay() + 7 - i) % 7);
    date2.setHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setDate(date2.getDate() + step * 7);
  }, function(start2, end) {
    return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);
var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;

// node_modules/d3-time/src/month.js
var month = newInterval(function(date2) {
  date2.setDate(1);
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setMonth(date2.getMonth() + step);
}, function(start2, end) {
  return end.getMonth() - start2.getMonth() + (end.getFullYear() - start2.getFullYear()) * 12;
}, function(date2) {
  return date2.getMonth();
});
var month_default = month;
var months = month.range;

// node_modules/d3-time/src/year.js
var year = newInterval(function(date2) {
  date2.setMonth(0, 1);
  date2.setHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setFullYear(date2.getFullYear() + step);
}, function(start2, end) {
  return end.getFullYear() - start2.getFullYear();
}, function(date2) {
  return date2.getFullYear();
});
year.every = function(k2) {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : newInterval(function(date2) {
    date2.setFullYear(Math.floor(date2.getFullYear() / k2) * k2);
    date2.setMonth(0, 1);
    date2.setHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setFullYear(date2.getFullYear() + step * k2);
  });
};
var year_default = year;
var years = year.range;

// node_modules/d3-time/src/utcMinute.js
var utcMinute = newInterval(function(date2) {
  date2.setUTCSeconds(0, 0);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationMinute);
}, function(start2, end) {
  return (end - start2) / durationMinute;
}, function(date2) {
  return date2.getUTCMinutes();
});
var utcMinute_default = utcMinute;
var utcMinutes = utcMinute.range;

// node_modules/d3-time/src/utcHour.js
var utcHour = newInterval(function(date2) {
  date2.setUTCMinutes(0, 0, 0);
}, function(date2, step) {
  date2.setTime(+date2 + step * durationHour);
}, function(start2, end) {
  return (end - start2) / durationHour;
}, function(date2) {
  return date2.getUTCHours();
});
var utcHour_default = utcHour;
var utcHours = utcHour.range;

// node_modules/d3-time/src/utcDay.js
var utcDay = newInterval(function(date2) {
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCDate(date2.getUTCDate() + step);
}, function(start2, end) {
  return (end - start2) / durationDay;
}, function(date2) {
  return date2.getUTCDate() - 1;
});
var utcDay_default = utcDay;
var utcDays = utcDay.range;

// node_modules/d3-time/src/utcWeek.js
function utcWeekday(i) {
  return newInterval(function(date2) {
    date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i) % 7);
    date2.setUTCHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setUTCDate(date2.getUTCDate() + step * 7);
  }, function(start2, end) {
    return (end - start2) / durationWeek;
  });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

// node_modules/d3-time/src/utcMonth.js
var utcMonth = newInterval(function(date2) {
  date2.setUTCDate(1);
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCMonth(date2.getUTCMonth() + step);
}, function(start2, end) {
  return end.getUTCMonth() - start2.getUTCMonth() + (end.getUTCFullYear() - start2.getUTCFullYear()) * 12;
}, function(date2) {
  return date2.getUTCMonth();
});
var utcMonth_default = utcMonth;
var utcMonths = utcMonth.range;

// node_modules/d3-time/src/utcYear.js
var utcYear = newInterval(function(date2) {
  date2.setUTCMonth(0, 1);
  date2.setUTCHours(0, 0, 0, 0);
}, function(date2, step) {
  date2.setUTCFullYear(date2.getUTCFullYear() + step);
}, function(start2, end) {
  return end.getUTCFullYear() - start2.getUTCFullYear();
}, function(date2) {
  return date2.getUTCFullYear();
});
utcYear.every = function(k2) {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : newInterval(function(date2) {
    date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k2) * k2);
    date2.setUTCMonth(0, 1);
    date2.setUTCHours(0, 0, 0, 0);
  }, function(date2, step) {
    date2.setUTCFullYear(date2.getUTCFullYear() + step * k2);
  });
};
var utcYear_default = utcYear;
var utcYears = utcYear.range;

// node_modules/d3-time-format/src/locale.js
function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date2.setFullYear(d.y);
    return date2;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date2.setUTCFullYear(d.y);
    return date2;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y5, m, d) {
  return {y: y5, m, d, H: 0, M: 0, S: 0, L: 0};
}
function formatLocale(locale3) {
  var locale_dateTime = locale3.dateTime, locale_date = locale3.date, locale_time = locale3.time, locale_periods = locale3.periods, locale_weekdays = locale3.days, locale_shortWeekdays = locale3.shortDays, locale_months = locale3.months, locale_shortMonths = locale3.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    a: formatShortWeekday,
    A: formatWeekday,
    b: formatShortMonth,
    B: formatMonth,
    c: null,
    d: formatDayOfMonth,
    e: formatDayOfMonth,
    f: formatMicroseconds,
    g: formatYearISO,
    G: formatFullYearISO,
    H: formatHour24,
    I: formatHour12,
    j: formatDayOfYear,
    L: formatMilliseconds,
    m: formatMonthNumber,
    M: formatMinutes,
    p: formatPeriod,
    q: formatQuarter,
    Q: formatUnixTimestamp,
    s: formatUnixTimestampSeconds,
    S: formatSeconds,
    u: formatWeekdayNumberMonday,
    U: formatWeekNumberSunday,
    V: formatWeekNumberISO,
    w: formatWeekdayNumberSunday,
    W: formatWeekNumberMonday,
    x: null,
    X: null,
    y: formatYear2,
    Y: formatFullYear,
    Z: formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    a: formatUTCShortWeekday,
    A: formatUTCWeekday,
    b: formatUTCShortMonth,
    B: formatUTCMonth,
    c: null,
    d: formatUTCDayOfMonth,
    e: formatUTCDayOfMonth,
    f: formatUTCMicroseconds,
    g: formatUTCYearISO,
    G: formatUTCFullYearISO,
    H: formatUTCHour24,
    I: formatUTCHour12,
    j: formatUTCDayOfYear,
    L: formatUTCMilliseconds,
    m: formatUTCMonthNumber,
    M: formatUTCMinutes,
    p: formatUTCPeriod,
    q: formatUTCQuarter,
    Q: formatUnixTimestamp,
    s: formatUnixTimestampSeconds,
    S: formatUTCSeconds,
    u: formatUTCWeekdayNumberMonday,
    U: formatUTCWeekNumberSunday,
    V: formatUTCWeekNumberISO,
    w: formatUTCWeekdayNumberSunday,
    W: formatUTCWeekNumberMonday,
    x: null,
    X: null,
    y: formatUTCYear,
    Y: formatUTCFullYear,
    Z: formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    a: parseShortWeekday,
    A: parseWeekday,
    b: parseShortMonth,
    B: parseMonth,
    c: parseLocaleDateTime,
    d: parseDayOfMonth,
    e: parseDayOfMonth,
    f: parseMicroseconds,
    g: parseYear,
    G: parseFullYear,
    H: parseHour24,
    I: parseHour24,
    j: parseDayOfYear,
    L: parseMilliseconds,
    m: parseMonthNumber,
    M: parseMinutes,
    p: parsePeriod,
    q: parseQuarter,
    Q: parseUnixTimestamp,
    s: parseUnixTimestampSeconds,
    S: parseSeconds,
    u: parseWeekdayNumberMonday,
    U: parseWeekNumberSunday,
    V: parseWeekNumberISO,
    w: parseWeekdayNumberSunday,
    W: parseWeekNumberMonday,
    x: parseLocaleDate,
    X: parseLocaleTime,
    y: parseYear,
    Y: parseFullYear,
    Z: parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date2) {
      var string = [], i = -1, j = 0, n = specifier.length, c4, pad3, format2;
      if (!(date2 instanceof Date))
        date2 = new Date(+date2);
      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad3 = pads[c4 = specifier.charAt(++i)]) != null)
            c4 = specifier.charAt(++i);
          else
            pad3 = c4 === "e" ? " " : "0";
          if (format2 = formats2[c4])
            c4 = format2(date2, pad3);
          string.push(c4);
          j = i + 1;
        }
      }
      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }
  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, void 0, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day2;
      if (i != string.length)
        return null;
      if ("Q" in d)
        return new Date(d.Q);
      if ("s" in d)
        return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (Z && !("Z" in d))
        d.Z = 0;
      if ("p" in d)
        d.H = d.H % 12 + d.p * 12;
      if (d.m === void 0)
        d.m = "q" in d ? d.q : 0;
      if ("V" in d) {
        if (d.V < 1 || d.V > 53)
          return null;
        if (!("w" in d))
          d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day2 = week.getUTCDay();
          week = day2 > 4 || day2 === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay_default.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day2 = week.getDay();
          week = day2 > 4 || day2 === 0 ? monday.ceil(week) : monday(week);
          week = day_default.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d))
          d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day2 = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day2 + 5) % 7 : d.w + d.U * 7 - (day2 + 6) % 7;
      }
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }
      return localDate(d);
    };
  }
  function parseSpecifier(d, specifier, string, j) {
    var i = 0, n = specifier.length, m = string.length, c4, parse;
    while (i < n) {
      if (j >= m)
        return -1;
      c4 = specifier.charCodeAt(i++);
      if (c4 === 37) {
        c4 = specifier.charAt(i++);
        parse = parses[c4 in pads ? specifier.charAt(i++) : c4];
        if (!parse || (j = parse(d, string, j)) < 0)
          return -1;
      } else if (c4 != string.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }
  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }
  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }
  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }
  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }
  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }
  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }
  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }
  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }
  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }
  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }
  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }
  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }
  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }
  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }
  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }
  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }
  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() {
        return specifier;
      };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() {
        return specifier;
      };
      return p;
    }
  };
}
var pads = {"-": "", _: " ", "0": "0"};
var numberRe = /^\s*\d+/;
var percentRe = /^%/;
var requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad2(value, fill, width) {
  var sign3 = value < 0 ? "-" : "", string = (sign3 ? -value : value) + "", length2 = string.length;
  return sign3 + (length2 < width ? new Array(width - length2 + 1).join(fill) + string : string);
}
function requote(s2) {
  return s2.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  var map5 = {}, i = -1, n = names.length;
  while (++i < n)
    map5[names[i].toLowerCase()] = i;
  return map5;
}
function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
  return pad2(d.getDate(), p, 2);
}
function formatHour24(d, p) {
  return pad2(d.getHours(), p, 2);
}
function formatHour12(d, p) {
  return pad2(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
  return pad2(1 + day_default.count(year_default(d), d), p, 3);
}
function formatMilliseconds(d, p) {
  return pad2(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
  return pad2(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
  return pad2(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
  return pad2(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
  var day2 = d.getDay();
  return day2 === 0 ? 7 : day2;
}
function formatWeekNumberSunday(d, p) {
  return pad2(sunday.count(year_default(d) - 1, d), p, 2);
}
function dISO(d) {
  var day2 = d.getDay();
  return day2 >= 4 || day2 === 0 ? thursday(d) : thursday.ceil(d);
}
function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad2(thursday.count(year_default(d), d) + (year_default(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
  return d.getDay();
}
function formatWeekNumberMonday(d, p) {
  return pad2(monday.count(year_default(d) - 1, d), p, 2);
}
function formatYear2(d, p) {
  return pad2(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
  d = dISO(d);
  return pad2(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
  return pad2(d.getFullYear() % 1e4, p, 4);
}
function formatFullYearISO(d, p) {
  var day2 = d.getDay();
  d = day2 >= 4 || day2 === 0 ? thursday(d) : thursday.ceil(d);
  return pad2(d.getFullYear() % 1e4, p, 4);
}
function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad2(z / 60 | 0, "0", 2) + pad2(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
  return pad2(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
  return pad2(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
  return pad2(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
  return pad2(1 + utcDay_default.count(utcYear_default(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
  return pad2(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
  return pad2(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
  return pad2(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
  return pad2(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
  return pad2(utcSunday.count(utcYear_default(d) - 1, d), p, 2);
}
function UTCdISO(d) {
  var day2 = d.getUTCDay();
  return day2 >= 4 || day2 === 0 ? utcThursday(d) : utcThursday.ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad2(utcThursday.count(utcYear_default(d), d) + (utcYear_default(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
  return pad2(utcMonday.count(utcYear_default(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
  return pad2(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad2(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
  return pad2(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCFullYearISO(d, p) {
  var day2 = d.getUTCDay();
  d = day2 >= 4 || day2 === 0 ? utcThursday(d) : utcThursday.ceil(d);
  return pad2(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d) {
  return +d;
}
function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1e3);
}

// node_modules/d3-time-format/src/defaultLocale.js
var locale2;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale2({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale2(definition) {
  locale2 = formatLocale(definition);
  timeFormat = locale2.format;
  timeParse = locale2.parse;
  utcFormat = locale2.utcFormat;
  utcParse = locale2.utcParse;
  return locale2;
}

// node_modules/d3-time-format/src/isoFormat.js
var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
function formatIsoNative(date2) {
  return date2.toISOString();
}
var formatIso = Date.prototype.toISOString ? formatIsoNative : utcFormat(isoSpecifier);
var isoFormat_default = formatIso;

// node_modules/d3-time-format/src/isoParse.js
function parseIsoNative(string) {
  var date2 = new Date(string);
  return isNaN(date2) ? null : date2;
}
var parseIso = +new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : utcParse(isoSpecifier);
var isoParse_default = parseIso;

// node_modules/d3-scale/src/time.js
var durationSecond2 = 1e3;
var durationMinute2 = durationSecond2 * 60;
var durationHour2 = durationMinute2 * 60;
var durationDay2 = durationHour2 * 24;
var durationWeek2 = durationDay2 * 7;
var durationMonth = durationDay2 * 30;
var durationYear = durationDay2 * 365;
function date(t) {
  return new Date(t);
}
function number3(t) {
  return t instanceof Date ? +t : +new Date(+t);
}
function calendar(year2, month2, week, day2, hour2, minute2, second2, millisecond2, format2) {
  var scale = continuous(identity2, identity2), invert = scale.invert, domain = scale.domain;
  var formatMillisecond = format2(".%L"), formatSecond = format2(":%S"), formatMinute = format2("%I:%M"), formatHour = format2("%I %p"), formatDay = format2("%a %d"), formatWeek = format2("%b %d"), formatMonth = format2("%B"), formatYear3 = format2("%Y");
  var tickIntervals = [
    [second2, 1, durationSecond2],
    [second2, 5, 5 * durationSecond2],
    [second2, 15, 15 * durationSecond2],
    [second2, 30, 30 * durationSecond2],
    [minute2, 1, durationMinute2],
    [minute2, 5, 5 * durationMinute2],
    [minute2, 15, 15 * durationMinute2],
    [minute2, 30, 30 * durationMinute2],
    [hour2, 1, durationHour2],
    [hour2, 3, 3 * durationHour2],
    [hour2, 6, 6 * durationHour2],
    [hour2, 12, 12 * durationHour2],
    [day2, 1, durationDay2],
    [day2, 2, 2 * durationDay2],
    [week, 1, durationWeek2],
    [month2, 1, durationMonth],
    [month2, 3, 3 * durationMonth],
    [year2, 1, durationYear]
  ];
  function tickFormat(date2) {
    return (second2(date2) < date2 ? formatMillisecond : minute2(date2) < date2 ? formatSecond : hour2(date2) < date2 ? formatMinute : day2(date2) < date2 ? formatHour : month2(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year2(date2) < date2 ? formatMonth : formatYear3)(date2);
  }
  function tickInterval(interval2, start2, stop, step) {
    if (interval2 == null)
      interval2 = 10;
    if (typeof interval2 === "number") {
      var target = Math.abs(stop - start2) / interval2, i = bisector_default(function(i2) {
        return i2[2];
      }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = tickStep(start2 / durationYear, stop / durationYear, interval2);
        interval2 = year2;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval2 = i[0];
      } else {
        step = Math.max(tickStep(start2, stop, interval2), 1);
        interval2 = millisecond2;
      }
    }
    return step == null ? interval2 : interval2.every(step);
  }
  scale.invert = function(y5) {
    return new Date(invert(y5));
  };
  scale.domain = function(_) {
    return arguments.length ? domain(map4.call(_, number3)) : domain().map(date);
  };
  scale.ticks = function(interval2, step) {
    var d = domain(), t03 = d[0], t13 = d[d.length - 1], r = t13 < t03, t;
    if (r)
      t = t03, t03 = t13, t13 = t;
    t = tickInterval(interval2, t03, t13, step);
    t = t ? t.range(t03, t13 + 1) : [];
    return r ? t.reverse() : t;
  };
  scale.tickFormat = function(count2, specifier) {
    return specifier == null ? tickFormat : format2(specifier);
  };
  scale.nice = function(interval2, step) {
    var d = domain();
    return (interval2 = tickInterval(interval2, d[0], d[d.length - 1], step)) ? domain(nice_default(d, interval2)) : scale;
  };
  scale.copy = function() {
    return copy(scale, calendar(year2, month2, week, day2, hour2, minute2, second2, millisecond2, format2));
  };
  return scale;
}
function time_default() {
  return initRange.apply(calendar(year_default, month_default, sunday, day_default, hour_default, minute_default, second_default, millisecond_default, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}

// node_modules/d3-scale/src/utcTime.js
function utcTime_default() {
  return initRange.apply(calendar(utcYear_default, utcMonth_default, utcSunday, utcDay_default, utcHour_default, utcMinute_default, second_default, millisecond_default, utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}

// node_modules/d3-scale/src/sequential.js
function transformer3() {
  var x06 = 0, x12 = 1, t03, t13, k10, transform2, interpolator = identity2, clamp = false, unknown;
  function scale(x5) {
    return isNaN(x5 = +x5) ? unknown : interpolator(k10 === 0 ? 0.5 : (x5 = (transform2(x5) - t03) * k10, clamp ? Math.max(0, Math.min(1, x5)) : x5));
  }
  scale.domain = function(_) {
    return arguments.length ? (t03 = transform2(x06 = +_[0]), t13 = transform2(x12 = +_[1]), k10 = t03 === t13 ? 0 : 1 / (t13 - t03), scale) : [x06, x12];
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };
  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t) {
    transform2 = t, t03 = t(x06), t13 = t(x12), k10 = t03 === t13 ? 0 : 1 / (t13 - t03);
    return scale;
  };
}
function copy2(source, target) {
  return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}
function sequential() {
  var scale = linearish(transformer3()(identity2));
  scale.copy = function() {
    return copy2(scale, sequential());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialLog() {
  var scale = loggish(transformer3()).domain([1, 10]);
  scale.copy = function() {
    return copy2(scale, sequentialLog()).base(scale.base());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialSymlog() {
  var scale = symlogish(transformer3());
  scale.copy = function() {
    return copy2(scale, sequentialSymlog()).constant(scale.constant());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialPow() {
  var scale = powish(transformer3());
  scale.copy = function() {
    return copy2(scale, sequentialPow()).exponent(scale.exponent());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialSqrt() {
  return sequentialPow.apply(null, arguments).exponent(0.5);
}

// node_modules/d3-scale/src/sequentialQuantile.js
function sequentialQuantile() {
  var domain = [], interpolator = identity2;
  function scale(x5) {
    if (!isNaN(x5 = +x5))
      return interpolator((bisect_default(domain, x5) - 1) / (domain.length - 1));
  }
  scale.domain = function(_) {
    if (!arguments.length)
      return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i)
      if (d = _[i], d != null && !isNaN(d = +d))
        domain.push(d);
    domain.sort(ascending_default);
    return scale;
  };
  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  scale.copy = function() {
    return sequentialQuantile(interpolator).domain(domain);
  };
  return initInterpolator.apply(scale, arguments);
}

// node_modules/d3-scale/src/diverging.js
function transformer4() {
  var x06 = 0, x12 = 0.5, x22 = 1, t03, t13, t22, k10, k21, interpolator = identity2, transform2, clamp = false, unknown;
  function scale(x5) {
    return isNaN(x5 = +x5) ? unknown : (x5 = 0.5 + ((x5 = +transform2(x5)) - t13) * (x5 < t13 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x5)) : x5));
  }
  scale.domain = function(_) {
    return arguments.length ? (t03 = transform2(x06 = +_[0]), t13 = transform2(x12 = +_[1]), t22 = transform2(x22 = +_[2]), k10 = t03 === t13 ? 0 : 0.5 / (t13 - t03), k21 = t13 === t22 ? 0 : 0.5 / (t22 - t13), scale) : [x06, x12, x22];
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };
  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t) {
    transform2 = t, t03 = t(x06), t13 = t(x12), t22 = t(x22), k10 = t03 === t13 ? 0 : 0.5 / (t13 - t03), k21 = t13 === t22 ? 0 : 0.5 / (t22 - t13);
    return scale;
  };
}
function diverging() {
  var scale = linearish(transformer4()(identity2));
  scale.copy = function() {
    return copy2(scale, diverging());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingLog() {
  var scale = loggish(transformer4()).domain([0.1, 1, 10]);
  scale.copy = function() {
    return copy2(scale, divergingLog()).base(scale.base());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingSymlog() {
  var scale = symlogish(transformer4());
  scale.copy = function() {
    return copy2(scale, divergingSymlog()).constant(scale.constant());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingPow() {
  var scale = powish(transformer4());
  scale.copy = function() {
    return copy2(scale, divergingPow()).exponent(scale.exponent());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}

// node_modules/d3-scale-chromatic/src/colors.js
function colors_default(specifier) {
  var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
  while (i < n)
    colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
  return colors;
}

// node_modules/d3-scale-chromatic/src/categorical/category10.js
var category10_default = colors_default("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

// node_modules/d3-scale-chromatic/src/categorical/Accent.js
var Accent_default = colors_default("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

// node_modules/d3-scale-chromatic/src/categorical/Dark2.js
var Dark2_default = colors_default("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

// node_modules/d3-scale-chromatic/src/categorical/Paired.js
var Paired_default = colors_default("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

// node_modules/d3-scale-chromatic/src/categorical/Pastel1.js
var Pastel1_default = colors_default("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

// node_modules/d3-scale-chromatic/src/categorical/Pastel2.js
var Pastel2_default = colors_default("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

// node_modules/d3-scale-chromatic/src/categorical/Set1.js
var Set1_default = colors_default("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

// node_modules/d3-scale-chromatic/src/categorical/Set2.js
var Set2_default = colors_default("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

// node_modules/d3-scale-chromatic/src/categorical/Set3.js
var Set3_default = colors_default("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

// node_modules/d3-scale-chromatic/src/categorical/Tableau10.js
var Tableau10_default = colors_default("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");

// node_modules/d3-scale-chromatic/src/ramp.js
function ramp_default(scheme28) {
  return rgbBasis(scheme28[scheme28.length - 1]);
}

// node_modules/d3-scale-chromatic/src/diverging/BrBG.js
var scheme = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(colors_default);
var BrBG_default = ramp_default(scheme);

// node_modules/d3-scale-chromatic/src/diverging/PRGn.js
var scheme2 = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(colors_default);
var PRGn_default = ramp_default(scheme2);

// node_modules/d3-scale-chromatic/src/diverging/PiYG.js
var scheme3 = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(colors_default);
var PiYG_default = ramp_default(scheme3);

// node_modules/d3-scale-chromatic/src/diverging/PuOr.js
var scheme4 = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(colors_default);
var PuOr_default = ramp_default(scheme4);

// node_modules/d3-scale-chromatic/src/diverging/RdBu.js
var scheme5 = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(colors_default);
var RdBu_default = ramp_default(scheme5);

// node_modules/d3-scale-chromatic/src/diverging/RdGy.js
var scheme6 = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(colors_default);
var RdGy_default = ramp_default(scheme6);

// node_modules/d3-scale-chromatic/src/diverging/RdYlBu.js
var scheme7 = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(colors_default);
var RdYlBu_default = ramp_default(scheme7);

// node_modules/d3-scale-chromatic/src/diverging/RdYlGn.js
var scheme8 = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(colors_default);
var RdYlGn_default = ramp_default(scheme8);

// node_modules/d3-scale-chromatic/src/diverging/Spectral.js
var scheme9 = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(colors_default);
var Spectral_default = ramp_default(scheme9);

// node_modules/d3-scale-chromatic/src/sequential-multi/BuGn.js
var scheme10 = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(colors_default);
var BuGn_default = ramp_default(scheme10);

// node_modules/d3-scale-chromatic/src/sequential-multi/BuPu.js
var scheme11 = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(colors_default);
var BuPu_default = ramp_default(scheme11);

// node_modules/d3-scale-chromatic/src/sequential-multi/GnBu.js
var scheme12 = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(colors_default);
var GnBu_default = ramp_default(scheme12);

// node_modules/d3-scale-chromatic/src/sequential-multi/OrRd.js
var scheme13 = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(colors_default);
var OrRd_default = ramp_default(scheme13);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuBuGn.js
var scheme14 = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(colors_default);
var PuBuGn_default = ramp_default(scheme14);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuBu.js
var scheme15 = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(colors_default);
var PuBu_default = ramp_default(scheme15);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuRd.js
var scheme16 = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(colors_default);
var PuRd_default = ramp_default(scheme16);

// node_modules/d3-scale-chromatic/src/sequential-multi/RdPu.js
var scheme17 = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(colors_default);
var RdPu_default = ramp_default(scheme17);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlGnBu.js
var scheme18 = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(colors_default);
var YlGnBu_default = ramp_default(scheme18);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlGn.js
var scheme19 = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(colors_default);
var YlGn_default = ramp_default(scheme19);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js
var scheme20 = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(colors_default);
var YlOrBr_default = ramp_default(scheme20);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js
var scheme21 = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(colors_default);
var YlOrRd_default = ramp_default(scheme21);

// node_modules/d3-scale-chromatic/src/sequential-single/Blues.js
var scheme22 = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(colors_default);
var Blues_default = ramp_default(scheme22);

// node_modules/d3-scale-chromatic/src/sequential-single/Greens.js
var scheme23 = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(colors_default);
var Greens_default = ramp_default(scheme23);

// node_modules/d3-scale-chromatic/src/sequential-single/Greys.js
var scheme24 = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(colors_default);
var Greys_default = ramp_default(scheme24);

// node_modules/d3-scale-chromatic/src/sequential-single/Purples.js
var scheme25 = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(colors_default);
var Purples_default = ramp_default(scheme25);

// node_modules/d3-scale-chromatic/src/sequential-single/Reds.js
var scheme26 = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(colors_default);
var Reds_default = ramp_default(scheme26);

// node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js
var scheme27 = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(colors_default);
var Oranges_default = ramp_default(scheme27);

// node_modules/d3-scale-chromatic/src/sequential-multi/cividis.js
function cividis_default(t) {
  t = Math.max(0, Math.min(1, t));
  return "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - t * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - t * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - t * 2475.67))))))) + ")";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js
var cubehelix_default2 = cubehelixLong(cubehelix(300, 0.5, 0), cubehelix(-240, 0.5, 1));

// node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js
var warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
var cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
var c = cubehelix();
function rainbow_default(t) {
  if (t < 0 || t > 1)
    t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  c.h = 360 * t - 100;
  c.s = 1.5 - 1.5 * ts;
  c.l = 0.8 - 0.9 * ts;
  return c + "";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js
var c2 = rgb();
var pi_1_3 = Math.PI / 3;
var pi_2_3 = Math.PI * 2 / 3;
function sinebow_default(t) {
  var x5;
  t = (0.5 - t) * Math.PI;
  c2.r = 255 * (x5 = Math.sin(t)) * x5;
  c2.g = 255 * (x5 = Math.sin(t + pi_1_3)) * x5;
  c2.b = 255 * (x5 = Math.sin(t + pi_2_3)) * x5;
  return c2 + "";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/turbo.js
function turbo_default(t) {
  t = Math.max(0, Math.min(1, t));
  return "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - t * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + t * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - t * 6838.66))))))) + ")";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js
function ramp(range2) {
  var n = range2.length;
  return function(t) {
    return range2[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}
var viridis_default = ramp(colors_default("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var magma = ramp(colors_default("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var inferno = ramp(colors_default("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var plasma = ramp(colors_default("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

// node_modules/d3-shape/src/constant.js
function constant_default12(x5) {
  return function constant() {
    return x5;
  };
}

// node_modules/d3-shape/src/math.js
var abs2 = Math.abs;
var atan22 = Math.atan2;
var cos3 = Math.cos;
var max2 = Math.max;
var min = Math.min;
var sin3 = Math.sin;
var sqrt3 = Math.sqrt;
var epsilon5 = 1e-12;
var pi5 = Math.PI;
var halfPi4 = pi5 / 2;
var tau5 = 2 * pi5;
function acos2(x5) {
  return x5 > 1 ? 0 : x5 < -1 ? pi5 : Math.acos(x5);
}
function asin2(x5) {
  return x5 >= 1 ? halfPi4 : x5 <= -1 ? -halfPi4 : Math.asin(x5);
}

// node_modules/d3-shape/src/arc.js
function arcInnerRadius(d) {
  return d.innerRadius;
}
function arcOuterRadius(d) {
  return d.outerRadius;
}
function arcStartAngle(d) {
  return d.startAngle;
}
function arcEndAngle(d) {
  return d.endAngle;
}
function arcPadAngle(d) {
  return d && d.padAngle;
}
function intersect(x06, y06, x12, y12, x22, y22, x32, y32) {
  var x10 = x12 - x06, y10 = y12 - y06, x322 = x32 - x22, y322 = y32 - y22, t = y322 * x10 - x322 * y10;
  if (t * t < epsilon5)
    return;
  t = (x322 * (y06 - y22) - y322 * (x06 - x22)) / t;
  return [x06 + t * x10, y06 + t * y10];
}
function cornerTangents(x06, y06, x12, y12, r1, rc, cw) {
  var x01 = x06 - x12, y01 = y06 - y12, lo = (cw ? rc : -rc) / sqrt3(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x06 + ox, y11 = y06 + oy, x10 = x12 + ox, y10 = y12 + oy, x004 = (x11 + x10) / 2, y004 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D2 = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * sqrt3(max2(0, r * r * d2 - D2 * D2)), cx0 = (D2 * dy - dx * d) / d2, cy0 = (-D2 * dx - dy * d) / d2, cx1 = (D2 * dy + dx * d) / d2, cy1 = (-D2 * dx + dy * d) / d2, dx0 = cx0 - x004, dy0 = cy0 - y004, dx1 = cx1 - x004, dy1 = cy1 - y004;
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1)
    cx0 = cx1, cy0 = cy1;
  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}
function arc_default() {
  var innerRadius = arcInnerRadius, outerRadius = arcOuterRadius, cornerRadius = constant_default12(0), padRadius = null, startAngle = arcStartAngle, endAngle = arcEndAngle, padAngle = arcPadAngle, context = null;
  function arc() {
    var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - halfPi4, a1 = endAngle.apply(this, arguments) - halfPi4, da = abs2(a1 - a0), cw = a1 > a0;
    if (!context)
      context = buffer = path_default();
    if (r1 < r0)
      r = r1, r1 = r0, r0 = r;
    if (!(r1 > epsilon5))
      context.moveTo(0, 0);
    else if (da > tau5 - epsilon5) {
      context.moveTo(r1 * cos3(a0), r1 * sin3(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > epsilon5) {
        context.moveTo(r0 * cos3(a1), r0 * sin3(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    } else {
      var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > epsilon5 && (padRadius ? +padRadius.apply(this, arguments) : sqrt3(r0 * r0 + r1 * r1)), rc = min(abs2(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t03, t13;
      if (rp > epsilon5) {
        var p02 = asin2(rp / r0 * sin3(ap)), p1 = asin2(rp / r1 * sin3(ap));
        if ((da0 -= p02 * 2) > epsilon5)
          p02 *= cw ? 1 : -1, a00 += p02, a10 -= p02;
        else
          da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > epsilon5)
          p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
        else
          da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }
      var x01 = r1 * cos3(a01), y01 = r1 * sin3(a01), x10 = r0 * cos3(a10), y10 = r0 * sin3(a10);
      if (rc > epsilon5) {
        var x11 = r1 * cos3(a11), y11 = r1 * sin3(a11), x004 = r0 * cos3(a00), y004 = r0 * sin3(a00), oc;
        if (da < pi5 && (oc = intersect(x01, y01, x004, y004, x11, y11, x10, y10))) {
          var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / sin3(acos2((ax * bx + ay * by) / (sqrt3(ax * ax + ay * ay) * sqrt3(bx * bx + by * by))) / 2), lc = sqrt3(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = min(rc, (r0 - lc) / (kc - 1));
          rc1 = min(rc, (r1 - lc) / (kc + 1));
        }
      }
      if (!(da1 > epsilon5))
        context.moveTo(x01, y01);
      else if (rc1 > epsilon5) {
        t03 = cornerTangents(x004, y004, x01, y01, r1, rc1, cw);
        t13 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
        context.moveTo(t03.cx + t03.x01, t03.cy + t03.y01);
        if (rc1 < rc)
          context.arc(t03.cx, t03.cy, rc1, atan22(t03.y01, t03.x01), atan22(t13.y01, t13.x01), !cw);
        else {
          context.arc(t03.cx, t03.cy, rc1, atan22(t03.y01, t03.x01), atan22(t03.y11, t03.x11), !cw);
          context.arc(0, 0, r1, atan22(t03.cy + t03.y11, t03.cx + t03.x11), atan22(t13.cy + t13.y11, t13.cx + t13.x11), !cw);
          context.arc(t13.cx, t13.cy, rc1, atan22(t13.y11, t13.x11), atan22(t13.y01, t13.x01), !cw);
        }
      } else
        context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
      if (!(r0 > epsilon5) || !(da0 > epsilon5))
        context.lineTo(x10, y10);
      else if (rc0 > epsilon5) {
        t03 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t13 = cornerTangents(x01, y01, x004, y004, r0, -rc0, cw);
        context.lineTo(t03.cx + t03.x01, t03.cy + t03.y01);
        if (rc0 < rc)
          context.arc(t03.cx, t03.cy, rc0, atan22(t03.y01, t03.x01), atan22(t13.y01, t13.x01), !cw);
        else {
          context.arc(t03.cx, t03.cy, rc0, atan22(t03.y01, t03.x01), atan22(t03.y11, t03.x11), !cw);
          context.arc(0, 0, r0, atan22(t03.cy + t03.y11, t03.cx + t03.x11), atan22(t13.cy + t13.y11, t13.cx + t13.x11), cw);
          context.arc(t13.cx, t13.cy, rc0, atan22(t13.y11, t13.x11), atan22(t13.y01, t13.x01), !cw);
        }
      } else
        context.arc(0, 0, r0, a10, a00, cw);
    }
    context.closePath();
    if (buffer)
      return context = null, buffer + "" || null;
  }
  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a2 = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi5 / 2;
    return [cos3(a2) * r, sin3(a2) * r];
  };
  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant_default12(+_), arc) : innerRadius;
  };
  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant_default12(+_), arc) : outerRadius;
  };
  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant_default12(+_), arc) : cornerRadius;
  };
  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant_default12(+_), arc) : padRadius;
  };
  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant_default12(+_), arc) : startAngle;
  };
  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant_default12(+_), arc) : endAngle;
  };
  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant_default12(+_), arc) : padAngle;
  };
  arc.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, arc) : context;
  };
  return arc;
}

// node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x5, y5) {
    x5 = +x5, y5 = +y5;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x5, y5) : this._context.moveTo(x5, y5);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(x5, y5);
        break;
    }
  }
};
function linear_default(context) {
  return new Linear(context);
}

// node_modules/d3-shape/src/point.js
function x3(p) {
  return p[0];
}
function y3(p) {
  return p[1];
}

// node_modules/d3-shape/src/line.js
function line_default2() {
  var x5 = x3, y5 = y3, defined = constant_default12(true), context = null, curve = linear_default, output = null;
  function line(data) {
    var i, n = data.length, d, defined0 = false, buffer;
    if (context == null)
      output = curve(buffer = path_default());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0)
          output.lineStart();
        else
          output.lineEnd();
      }
      if (defined0)
        output.point(+x5(d, i, data), +y5(d, i, data));
    }
    if (buffer)
      return output = null, buffer + "" || null;
  }
  line.x = function(_) {
    return arguments.length ? (x5 = typeof _ === "function" ? _ : constant_default12(+_), line) : x5;
  };
  line.y = function(_) {
    return arguments.length ? (y5 = typeof _ === "function" ? _ : constant_default12(+_), line) : y5;
  };
  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant_default12(!!_), line) : defined;
  };
  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };
  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };
  return line;
}

// node_modules/d3-shape/src/area.js
function area_default5() {
  var x06 = x3, x12 = null, y06 = constant_default12(0), y12 = y3, defined = constant_default12(true), context = null, curve = linear_default, output = null;
  function area(data) {
    var i, j, k2, n = data.length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
    if (context == null)
      output = curve(buffer = path_default());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k2 = i - 1; k2 >= j; --k2) {
            output.point(x0z[k2], y0z[k2]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x06(d, i, data), y0z[i] = +y06(d, i, data);
        output.point(x12 ? +x12(d, i, data) : x0z[i], y12 ? +y12(d, i, data) : y0z[i]);
      }
    }
    if (buffer)
      return output = null, buffer + "" || null;
  }
  function arealine() {
    return line_default2().defined(defined).curve(curve).context(context);
  }
  area.x = function(_) {
    return arguments.length ? (x06 = typeof _ === "function" ? _ : constant_default12(+_), x12 = null, area) : x06;
  };
  area.x0 = function(_) {
    return arguments.length ? (x06 = typeof _ === "function" ? _ : constant_default12(+_), area) : x06;
  };
  area.x1 = function(_) {
    return arguments.length ? (x12 = _ == null ? null : typeof _ === "function" ? _ : constant_default12(+_), area) : x12;
  };
  area.y = function(_) {
    return arguments.length ? (y06 = typeof _ === "function" ? _ : constant_default12(+_), y12 = null, area) : y06;
  };
  area.y0 = function(_) {
    return arguments.length ? (y06 = typeof _ === "function" ? _ : constant_default12(+_), area) : y06;
  };
  area.y1 = function(_) {
    return arguments.length ? (y12 = _ == null ? null : typeof _ === "function" ? _ : constant_default12(+_), area) : y12;
  };
  area.lineX0 = area.lineY0 = function() {
    return arealine().x(x06).y(y06);
  };
  area.lineY1 = function() {
    return arealine().x(x06).y(y12);
  };
  area.lineX1 = function() {
    return arealine().x(x12).y(y06);
  };
  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant_default12(!!_), area) : defined;
  };
  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };
  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };
  return area;
}

// node_modules/d3-shape/src/descending.js
function descending_default2(a2, b) {
  return b < a2 ? -1 : b > a2 ? 1 : b >= a2 ? 0 : NaN;
}

// node_modules/d3-shape/src/identity.js
function identity_default6(d) {
  return d;
}

// node_modules/d3-shape/src/pie.js
function pie_default() {
  var value = identity_default6, sortValues = descending_default2, sort = null, startAngle = constant_default12(0), endAngle = constant_default12(tau5), padAngle = constant_default12(0);
  function pie(data) {
    var i, n = data.length, j, k2, sum3 = 0, index2 = new Array(n), arcs = new Array(n), a0 = +startAngle.apply(this, arguments), da = Math.min(tau5, Math.max(-tau5, endAngle.apply(this, arguments) - a0)), a1, p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)), pa = p * (da < 0 ? -1 : 1), v;
    for (i = 0; i < n; ++i) {
      if ((v = arcs[index2[i] = i] = +value(data[i], i, data)) > 0) {
        sum3 += v;
      }
    }
    if (sortValues != null)
      index2.sort(function(i2, j2) {
        return sortValues(arcs[i2], arcs[j2]);
      });
    else if (sort != null)
      index2.sort(function(i2, j2) {
        return sort(data[i2], data[j2]);
      });
    for (i = 0, k2 = sum3 ? (da - n * pa) / sum3 : 0; i < n; ++i, a0 = a1) {
      j = index2[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k2 : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }
    return arcs;
  }
  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant_default12(+_), pie) : value;
  };
  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };
  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };
  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant_default12(+_), pie) : startAngle;
  };
  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant_default12(+_), pie) : endAngle;
  };
  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant_default12(+_), pie) : padAngle;
  };
  return pie;
}

// node_modules/d3-shape/src/curve/radial.js
var curveRadialLinear = curveRadial(linear_default);
function Radial(curve) {
  this._curve = curve;
}
Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a2, r) {
    this._curve.point(r * Math.sin(a2), r * -Math.cos(a2));
  }
};
function curveRadial(curve) {
  function radial(context) {
    return new Radial(curve(context));
  }
  radial._curve = curve;
  return radial;
}

// node_modules/d3-shape/src/lineRadial.js
function lineRadial(l) {
  var c4 = l.curve;
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  l.curve = function(_) {
    return arguments.length ? c4(curveRadial(_)) : c4()._curve;
  };
  return l;
}
function lineRadial_default() {
  return lineRadial(line_default2().curve(curveRadialLinear));
}

// node_modules/d3-shape/src/areaRadial.js
function areaRadial_default() {
  var a2 = area_default5().curve(curveRadialLinear), c4 = a2.curve, x06 = a2.lineX0, x12 = a2.lineX1, y06 = a2.lineY0, y12 = a2.lineY1;
  a2.angle = a2.x, delete a2.x;
  a2.startAngle = a2.x0, delete a2.x0;
  a2.endAngle = a2.x1, delete a2.x1;
  a2.radius = a2.y, delete a2.y;
  a2.innerRadius = a2.y0, delete a2.y0;
  a2.outerRadius = a2.y1, delete a2.y1;
  a2.lineStartAngle = function() {
    return lineRadial(x06());
  }, delete a2.lineX0;
  a2.lineEndAngle = function() {
    return lineRadial(x12());
  }, delete a2.lineX1;
  a2.lineInnerRadius = function() {
    return lineRadial(y06());
  }, delete a2.lineY0;
  a2.lineOuterRadius = function() {
    return lineRadial(y12());
  }, delete a2.lineY1;
  a2.curve = function(_) {
    return arguments.length ? c4(curveRadial(_)) : c4()._curve;
  };
  return a2;
}

// node_modules/d3-shape/src/pointRadial.js
function pointRadial_default(x5, y5) {
  return [(y5 = +y5) * Math.cos(x5 -= Math.PI / 2), y5 * Math.sin(x5)];
}

// node_modules/d3-shape/src/array.js
var slice7 = Array.prototype.slice;

// node_modules/d3-shape/src/link/index.js
function linkSource(d) {
  return d.source;
}
function linkTarget(d) {
  return d.target;
}
function link2(curve) {
  var source = linkSource, target = linkTarget, x5 = x3, y5 = y3, context = null;
  function link3() {
    var buffer, argv = slice7.call(arguments), s2 = source.apply(this, argv), t = target.apply(this, argv);
    if (!context)
      context = buffer = path_default();
    curve(context, +x5.apply(this, (argv[0] = s2, argv)), +y5.apply(this, argv), +x5.apply(this, (argv[0] = t, argv)), +y5.apply(this, argv));
    if (buffer)
      return context = null, buffer + "" || null;
  }
  link3.source = function(_) {
    return arguments.length ? (source = _, link3) : source;
  };
  link3.target = function(_) {
    return arguments.length ? (target = _, link3) : target;
  };
  link3.x = function(_) {
    return arguments.length ? (x5 = typeof _ === "function" ? _ : constant_default12(+_), link3) : x5;
  };
  link3.y = function(_) {
    return arguments.length ? (y5 = typeof _ === "function" ? _ : constant_default12(+_), link3) : y5;
  };
  link3.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, link3) : context;
  };
  return link3;
}
function curveHorizontal(context, x06, y06, x12, y12) {
  context.moveTo(x06, y06);
  context.bezierCurveTo(x06 = (x06 + x12) / 2, y06, x06, y12, x12, y12);
}
function curveVertical(context, x06, y06, x12, y12) {
  context.moveTo(x06, y06);
  context.bezierCurveTo(x06, y06 = (y06 + y12) / 2, x12, y06, x12, y12);
}
function curveRadial2(context, x06, y06, x12, y12) {
  var p02 = pointRadial_default(x06, y06), p1 = pointRadial_default(x06, y06 = (y06 + y12) / 2), p2 = pointRadial_default(x12, y06), p3 = pointRadial_default(x12, y12);
  context.moveTo(p02[0], p02[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}
function linkHorizontal() {
  return link2(curveHorizontal);
}
function linkVertical() {
  return link2(curveVertical);
}
function linkRadial() {
  var l = link2(curveRadial2);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}

// node_modules/d3-shape/src/symbol/circle.js
var circle_default3 = {
  draw: function(context, size) {
    var r = Math.sqrt(size / pi5);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, tau5);
  }
};

// node_modules/d3-shape/src/symbol/cross.js
var cross_default3 = {
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/diamond.js
var tan30 = Math.sqrt(1 / 3);
var tan30_2 = tan30 * 2;
var diamond_default = {
  draw: function(context, size) {
    var y5 = Math.sqrt(size / tan30_2), x5 = y5 * tan30;
    context.moveTo(0, -y5);
    context.lineTo(x5, 0);
    context.lineTo(0, y5);
    context.lineTo(-x5, 0);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/star.js
var ka = 0.8908130915292852;
var kr = Math.sin(pi5 / 10) / Math.sin(7 * pi5 / 10);
var kx = Math.sin(tau5 / 10) * kr;
var ky = -Math.cos(tau5 / 10) * kr;
var star_default = {
  draw: function(context, size) {
    var r = Math.sqrt(size * ka), x5 = kx * r, y5 = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x5, y5);
    for (var i = 1; i < 5; ++i) {
      var a2 = tau5 * i / 5, c4 = Math.cos(a2), s2 = Math.sin(a2);
      context.lineTo(s2 * r, -c4 * r);
      context.lineTo(c4 * x5 - s2 * y5, s2 * x5 + c4 * y5);
    }
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/square.js
var square_default = {
  draw: function(context, size) {
    var w = Math.sqrt(size), x5 = -w / 2;
    context.rect(x5, x5, w, w);
  }
};

// node_modules/d3-shape/src/symbol/triangle.js
var sqrt32 = Math.sqrt(3);
var triangle_default = {
  draw: function(context, size) {
    var y5 = -Math.sqrt(size / (sqrt32 * 3));
    context.moveTo(0, y5 * 2);
    context.lineTo(-sqrt32 * y5, -y5);
    context.lineTo(sqrt32 * y5, -y5);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/wye.js
var c3 = -0.5;
var s = Math.sqrt(3) / 2;
var k = 1 / Math.sqrt(12);
var a = (k / 2 + 1) * 3;
var wye_default = {
  draw: function(context, size) {
    var r = Math.sqrt(size / a), x06 = r / 2, y06 = r * k, x12 = x06, y12 = r * k + r, x22 = -x12, y22 = y12;
    context.moveTo(x06, y06);
    context.lineTo(x12, y12);
    context.lineTo(x22, y22);
    context.lineTo(c3 * x06 - s * y06, s * x06 + c3 * y06);
    context.lineTo(c3 * x12 - s * y12, s * x12 + c3 * y12);
    context.lineTo(c3 * x22 - s * y22, s * x22 + c3 * y22);
    context.lineTo(c3 * x06 + s * y06, c3 * y06 - s * x06);
    context.lineTo(c3 * x12 + s * y12, c3 * y12 - s * x12);
    context.lineTo(c3 * x22 + s * y22, c3 * y22 - s * x22);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol.js
var symbols = [
  circle_default3,
  cross_default3,
  diamond_default,
  square_default,
  star_default,
  triangle_default,
  wye_default
];
function symbol_default() {
  var type2 = constant_default12(circle_default3), size = constant_default12(64), context = null;
  function symbol() {
    var buffer;
    if (!context)
      context = buffer = path_default();
    type2.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer)
      return context = null, buffer + "" || null;
  }
  symbol.type = function(_) {
    return arguments.length ? (type2 = typeof _ === "function" ? _ : constant_default12(_), symbol) : type2;
  };
  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : constant_default12(+_), symbol) : size;
  };
  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };
  return symbol;
}

// node_modules/d3-shape/src/noop.js
function noop_default2() {
}

// node_modules/d3-shape/src/curve/basis.js
function point2(that, x5, y5) {
  that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x5) / 6, (that._y0 + 4 * that._y1 + y5) / 6);
}
function Basis(context) {
  this._context = context;
}
Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        point2(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x5, y5) {
    x5 = +x5, y5 = +y5;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x5, y5) : this._context.moveTo(x5, y5);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        point2(this, x5, y5);
        break;
    }
    this._x0 = this._x1, this._x1 = x5;
    this._y0 = this._y1, this._y1 = y5;
  }
};
function basis_default2(context) {
  return new Basis(context);
}

// node_modules/d3-shape/src/curve/basisClosed.js
function BasisClosed(context) {
  this._context = context;
}
BasisClosed.prototype = {
  areaStart: noop_default2,
  areaEnd: noop_default2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x5, y5) {
    x5 = +x5, y5 = +y5;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x2 = x5, this._y2 = y5;
        break;
      case 1:
        this._point = 2;
        this._x3 = x5, this._y3 = y5;
        break;
      case 2:
        this._point = 3;
        this._x4 = x5, this._y4 = y5;
        this._context.moveTo((this._x0 + 4 * this._x1 + x5) / 6, (this._y0 + 4 * this._y1 + y5) / 6);
        break;
      default:
        point2(this, x5, y5);
        break;
    }
    this._x0 = this._x1, this._x1 = x5;
    this._y0 = this._y1, this._y1 = y5;
  }
};
function basisClosed_default2(context) {
  return new BasisClosed(context);
}

// node_modules/d3-shape/src/curve/basisOpen.js
function BasisOpen(context) {
  this._context = context;
}
BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x5, y5) {
    x5 = +x5, y5 = +y5;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var x06 = (this._x0 + 4 * this._x1 + x5) / 6, y06 = (this._y0 + 4 * this._y1 + y5) / 6;
        this._line ? this._context.lineTo(x06, y06) : this._context.moveTo(x06, y06);
        break;
      case 3:
        this._point = 4;
      default:
        point2(this, x5, y5);
        break;
    }
    this._x0 = this._x1, this._x1 = x5;
    this._y0 = this._y1, this._y1 = y5;
  }
};
function basisOpen_default(context) {
  return new BasisOpen(context);
}

// node_modules/d3-shape/src/curve/bundle.js
function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}
Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x5 = this._x, y5 = this._y, j = x5.length - 1;
    if (j > 0) {
      var x06 = x5[0], y06 = y5[0], dx = x5[j] - x06, dy = y5[j] - y06, i = -1, t;
      while (++i <= j) {
        t = i / j;
        this._basis.point(this._beta * x5[i] + (1 - this._beta) * (x06 + t * dx), this._beta * y5[i] + (1 - this._beta) * (y06 + t * dy));
      }
    }
    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x5, y5) {
    this._x.push(+x5);
    this._y.push(+y5);
  }
};
var bundle_default = function custom12(beta) {
  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }
  bundle.beta = function(beta2) {
    return custom12(+beta2);
  };
  return bundle;
}(0.85);

// node_modules/d3-shape/src/curve/cardinal.js
function point3(that, x5, y5) {
  that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x5), that._y2 + that._k * (that._y1 - y5), that._x2, that._y2);
}
function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        point3(this, this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x5, y5) {
    x5 = +x5, y5 = +y5;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x5, y5) : this._context.moveTo(x5, y5);
        break;
      case 1:
        this._point = 2;
        this._x1 = x5, this._y1 = y5;
        break;
      case 2:
        this._point = 3;
      default:
        point3(this, x5, y5);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x5;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y5;
  }
};
var cardinal_default = function custom13(tension) {
  function cardinal(context) {
    return new Cardinal(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom13(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/cardinalClosed.js
function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalClosed.prototype = {
  areaStart: noop_default2,
  areaEnd: noop_default2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x5, y5) {
    x5 = +x5, y5 = +y5;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x5, this._y3 = y5;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x5, this._y4 = y5);
        break;
      case 2:
        this._point = 3;
        this._x5 = x5, this._y5 = y5;
        break;
      default:
        point3(this, x5, y5);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x5;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y5;
  }
};
var cardinalClosed_default = function custom14(tension) {
  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom14(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/cardinalOpen.js
function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x5, y5) {
    x5 = +x5, y5 = +y5;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point3(this, x5, y5);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x5;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y5;
  }
};
var cardinalOpen_default = function custom15(tension) {
  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom15(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/catmullRom.js
function point4(that, x5, y5) {
  var x12 = that._x1, y12 = that._y1, x22 = that._x2, y22 = that._y2;
  if (that._l01_a > epsilon5) {
    var a2 = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x12 = (x12 * a2 - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y12 = (y12 * a2 - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }
  if (that._l23_a > epsilon5) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x22 = (x22 * b + that._x1 * that._l23_2a - x5 * that._l12_2a) / m;
    y22 = (y22 * b + that._y1 * that._l23_2a - y5 * that._l12_2a) / m;
  }
  that._context.bezierCurveTo(x12, y12, x22, y22, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x5, y5) {
    x5 = +x5, y5 = +y5;
    if (this._point) {
      var x23 = this._x2 - x5, y23 = this._y2 - y5;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x5, y5) : this._context.moveTo(x5, y5);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        point4(this, x5, y5);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x5;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y5;
  }
};
var catmullRom_default = function custom16(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom16(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/catmullRomClosed.js
function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomClosed.prototype = {
  areaStart: noop_default2,
  areaEnd: noop_default2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x5, y5) {
    x5 = +x5, y5 = +y5;
    if (this._point) {
      var x23 = this._x2 - x5, y23 = this._y2 - y5;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x5, this._y3 = y5;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x5, this._y4 = y5);
        break;
      case 2:
        this._point = 3;
        this._x5 = x5, this._y5 = y5;
        break;
      default:
        point4(this, x5, y5);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x5;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y5;
  }
};
var catmullRomClosed_default = function custom17(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom17(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/catmullRomOpen.js
function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x5, y5) {
    x5 = +x5, y5 = +y5;
    if (this._point) {
      var x23 = this._x2 - x5, y23 = this._y2 - y5;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point4(this, x5, y5);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x5;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y5;
  }
};
var catmullRomOpen_default = function custom18(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom18(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/linearClosed.js
function LinearClosed(context) {
  this._context = context;
}
LinearClosed.prototype = {
  areaStart: noop_default2,
  areaEnd: noop_default2,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point)
      this._context.closePath();
  },
  point: function(x5, y5) {
    x5 = +x5, y5 = +y5;
    if (this._point)
      this._context.lineTo(x5, y5);
    else
      this._point = 1, this._context.moveTo(x5, y5);
  }
};
function linearClosed_default(context) {
  return new LinearClosed(context);
}

// node_modules/d3-shape/src/curve/monotone.js
function sign2(x5) {
  return x5 < 0 ? -1 : 1;
}
function slope3(that, x22, y22) {
  var h0 = that._x1 - that._x0, h1 = x22 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y22 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign2(s0) + sign2(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point5(that, t03, t13) {
  var x06 = that._x0, y06 = that._y0, x12 = that._x1, y12 = that._y1, dx = (x12 - x06) / 3;
  that._context.bezierCurveTo(x06 + dx, y06 + dx * t03, x12 - dx, y12 - dx * t13, x12, y12);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point5(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x5, y5) {
    var t13 = NaN;
    x5 = +x5, y5 = +y5;
    if (x5 === this._x1 && y5 === this._y1)
      return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x5, y5) : this._context.moveTo(x5, y5);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point5(this, slope2(this, t13 = slope3(this, x5, y5)), t13);
        break;
      default:
        point5(this, this._t0, t13 = slope3(this, x5, y5));
        break;
    }
    this._x0 = this._x1, this._x1 = x5;
    this._y0 = this._y1, this._y1 = y5;
    this._t0 = t13;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x5, y5) {
  MonotoneX.prototype.point.call(this, y5, x5);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x5, y5) {
    this._context.moveTo(y5, x5);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x5, y5) {
    this._context.lineTo(y5, x5);
  },
  bezierCurveTo: function(x12, y12, x22, y22, x5, y5) {
    this._context.bezierCurveTo(y12, x12, y22, x22, y5, x5);
  }
};
function monotoneX(context) {
  return new MonotoneX(context);
}
function monotoneY(context) {
  return new MonotoneY(context);
}

// node_modules/d3-shape/src/curve/natural.js
function Natural(context) {
  this._context = context;
}
Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x5 = this._x, y5 = this._y, n = x5.length;
    if (n) {
      this._line ? this._context.lineTo(x5[0], y5[0]) : this._context.moveTo(x5[0], y5[0]);
      if (n === 2) {
        this._context.lineTo(x5[1], y5[1]);
      } else {
        var px = controlPoints(x5), py = controlPoints(y5);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x5[i1], y5[i1]);
        }
      }
    }
    if (this._line || this._line !== 0 && n === 1)
      this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x5, y5) {
    this._x.push(+x5);
    this._y.push(+y5);
  }
};
function controlPoints(x5) {
  var i, n = x5.length - 1, m, a2 = new Array(n), b = new Array(n), r = new Array(n);
  a2[0] = 0, b[0] = 2, r[0] = x5[0] + 2 * x5[1];
  for (i = 1; i < n - 1; ++i)
    a2[i] = 1, b[i] = 4, r[i] = 4 * x5[i] + 2 * x5[i + 1];
  a2[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x5[n - 1] + x5[n];
  for (i = 1; i < n; ++i)
    m = a2[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a2[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i)
    a2[i] = (r[i] - a2[i + 1]) / b[i];
  b[n - 1] = (x5[n] + a2[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i)
    b[i] = 2 * x5[i + 1] - a2[i + 1];
  return [a2, b];
}
function natural_default(context) {
  return new Natural(context);
}

// node_modules/d3-shape/src/curve/step.js
function Step(context, t) {
  this._context = context;
  this._t = t;
}
Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2)
      this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    if (this._line >= 0)
      this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x5, y5) {
    x5 = +x5, y5 = +y5;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x5, y5) : this._context.moveTo(x5, y5);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y5);
          this._context.lineTo(x5, y5);
        } else {
          var x12 = this._x * (1 - this._t) + x5 * this._t;
          this._context.lineTo(x12, this._y);
          this._context.lineTo(x12, y5);
        }
        break;
      }
    }
    this._x = x5, this._y = y5;
  }
};
function step_default(context) {
  return new Step(context, 0.5);
}
function stepBefore(context) {
  return new Step(context, 0);
}
function stepAfter(context) {
  return new Step(context, 1);
}

// node_modules/d3-shape/src/offset/none.js
function none_default(series, order) {
  if (!((n = series.length) > 1))
    return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
}

// node_modules/d3-shape/src/order/none.js
function none_default2(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0)
    o[n] = n;
  return o;
}

// node_modules/d3-shape/src/stack.js
function stackValue(d, key) {
  return d[key];
}
function stack_default() {
  var keys = constant_default12([]), order = none_default2, offset = none_default, value = stackValue;
  function stack(data) {
    var kz = keys.apply(this, arguments), i, m = data.length, n = kz.length, sz = new Array(n), oz;
    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }
    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }
    offset(sz, oz);
    return sz;
  }
  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : constant_default12(slice7.call(_)), stack) : keys;
  };
  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant_default12(+_), stack) : value;
  };
  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? none_default2 : typeof _ === "function" ? _ : constant_default12(slice7.call(_)), stack) : order;
  };
  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? none_default : _, stack) : offset;
  };
  return stack;
}

// node_modules/d3-shape/src/offset/expand.js
function expand_default(series, order) {
  if (!((n = series.length) > 0))
    return;
  for (var i, n, j = 0, m = series[0].length, y5; j < m; ++j) {
    for (y5 = i = 0; i < n; ++i)
      y5 += series[i][j][1] || 0;
    if (y5)
      for (i = 0; i < n; ++i)
        series[i][j][1] /= y5;
  }
  none_default(series, order);
}

// node_modules/d3-shape/src/offset/diverging.js
function diverging_default(series, order) {
  if (!((n = series.length) > 0))
    return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) > 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = 0, d[1] = dy;
      }
    }
  }
}

// node_modules/d3-shape/src/offset/silhouette.js
function silhouette_default(series, order) {
  if (!((n = series.length) > 0))
    return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y5 = 0; i < n; ++i)
      y5 += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y5 / 2;
  }
  none_default(series, order);
}

// node_modules/d3-shape/src/offset/wiggle.js
function wiggle_default(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0))
    return;
  for (var y5 = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]], sij0 = si[j][1] || 0, sij1 = si[j - 1][1] || 0, s3 = (sij0 - sij1) / 2;
      for (var k2 = 0; k2 < i; ++k2) {
        var sk = series[order[k2]], skj0 = sk[j][1] || 0, skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y5;
    if (s1)
      y5 -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y5;
  none_default(series, order);
}

// node_modules/d3-shape/src/order/appearance.js
function appearance_default(series) {
  var peaks = series.map(peak);
  return none_default2(series).sort(function(a2, b) {
    return peaks[a2] - peaks[b];
  });
}
function peak(series) {
  var i = -1, j = 0, n = series.length, vi, vj = -Infinity;
  while (++i < n)
    if ((vi = +series[i][1]) > vj)
      vj = vi, j = i;
  return j;
}

// node_modules/d3-shape/src/order/ascending.js
function ascending_default3(series) {
  var sums = series.map(sum2);
  return none_default2(series).sort(function(a2, b) {
    return sums[a2] - sums[b];
  });
}
function sum2(series) {
  var s2 = 0, i = -1, n = series.length, v;
  while (++i < n)
    if (v = +series[i][1])
      s2 += v;
  return s2;
}

// node_modules/d3-shape/src/order/descending.js
function descending_default3(series) {
  return ascending_default3(series).reverse();
}

// node_modules/d3-shape/src/order/insideOut.js
function insideOut_default(series) {
  var n = series.length, i, j, sums = series.map(sum2), order = appearance_default(series), top2 = 0, bottom2 = 0, tops = [], bottoms = [];
  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top2 < bottom2) {
      top2 += sums[j];
      tops.push(j);
    } else {
      bottom2 += sums[j];
      bottoms.push(j);
    }
  }
  return bottoms.reverse().concat(tops);
}

// node_modules/d3-shape/src/order/reverse.js
function reverse_default(series) {
  return none_default2(series).reverse();
}

// node_modules/d3-voronoi/src/constant.js
function constant_default13(x5) {
  return function() {
    return x5;
  };
}

// node_modules/d3-voronoi/src/point.js
function x4(d) {
  return d[0];
}
function y4(d) {
  return d[1];
}

// node_modules/d3-voronoi/src/RedBlackTree.js
function RedBlackTree() {
  this._ = null;
}
function RedBlackNode(node) {
  node.U = node.C = node.L = node.R = node.P = node.N = null;
}
RedBlackTree.prototype = {
  constructor: RedBlackTree,
  insert: function(after, node) {
    var parent, grandpa, uncle;
    if (after) {
      node.P = after;
      node.N = after.N;
      if (after.N)
        after.N.P = node;
      after.N = node;
      if (after.R) {
        after = after.R;
        while (after.L)
          after = after.L;
        after.L = node;
      } else {
        after.R = node;
      }
      parent = after;
    } else if (this._) {
      after = RedBlackFirst(this._);
      node.P = null;
      node.N = after;
      after.P = after.L = node;
      parent = after;
    } else {
      node.P = node.N = null;
      this._ = node;
      parent = null;
    }
    node.L = node.R = null;
    node.U = parent;
    node.C = true;
    after = node;
    while (parent && parent.C) {
      grandpa = parent.U;
      if (parent === grandpa.L) {
        uncle = grandpa.R;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.R) {
            RedBlackRotateLeft(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateRight(this, grandpa);
        }
      } else {
        uncle = grandpa.L;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.L) {
            RedBlackRotateRight(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateLeft(this, grandpa);
        }
      }
      parent = after.U;
    }
    this._.C = false;
  },
  remove: function(node) {
    if (node.N)
      node.N.P = node.P;
    if (node.P)
      node.P.N = node.N;
    node.N = node.P = null;
    var parent = node.U, sibling, left2 = node.L, right2 = node.R, next, red;
    if (!left2)
      next = right2;
    else if (!right2)
      next = left2;
    else
      next = RedBlackFirst(right2);
    if (parent) {
      if (parent.L === node)
        parent.L = next;
      else
        parent.R = next;
    } else {
      this._ = next;
    }
    if (left2 && right2) {
      red = next.C;
      next.C = node.C;
      next.L = left2;
      left2.U = next;
      if (next !== right2) {
        parent = next.U;
        next.U = node.U;
        node = next.R;
        parent.L = node;
        next.R = right2;
        right2.U = next;
      } else {
        next.U = parent;
        parent = next;
        node = next.R;
      }
    } else {
      red = node.C;
      node = next;
    }
    if (node)
      node.U = parent;
    if (red)
      return;
    if (node && node.C) {
      node.C = false;
      return;
    }
    do {
      if (node === this._)
        break;
      if (node === parent.L) {
        sibling = parent.R;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateLeft(this, parent);
          sibling = parent.R;
        }
        if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
          if (!sibling.R || !sibling.R.C) {
            sibling.L.C = false;
            sibling.C = true;
            RedBlackRotateRight(this, sibling);
            sibling = parent.R;
          }
          sibling.C = parent.C;
          parent.C = sibling.R.C = false;
          RedBlackRotateLeft(this, parent);
          node = this._;
          break;
        }
      } else {
        sibling = parent.L;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateRight(this, parent);
          sibling = parent.L;
        }
        if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
          if (!sibling.L || !sibling.L.C) {
            sibling.R.C = false;
            sibling.C = true;
            RedBlackRotateLeft(this, sibling);
            sibling = parent.L;
          }
          sibling.C = parent.C;
          parent.C = sibling.L.C = false;
          RedBlackRotateRight(this, parent);
          node = this._;
          break;
        }
      }
      sibling.C = true;
      node = parent;
      parent = parent.U;
    } while (!node.C);
    if (node)
      node.C = false;
  }
};
function RedBlackRotateLeft(tree, node) {
  var p = node, q = node.R, parent = p.U;
  if (parent) {
    if (parent.L === p)
      parent.L = q;
    else
      parent.R = q;
  } else {
    tree._ = q;
  }
  q.U = parent;
  p.U = q;
  p.R = q.L;
  if (p.R)
    p.R.U = p;
  q.L = p;
}
function RedBlackRotateRight(tree, node) {
  var p = node, q = node.L, parent = p.U;
  if (parent) {
    if (parent.L === p)
      parent.L = q;
    else
      parent.R = q;
  } else {
    tree._ = q;
  }
  q.U = parent;
  p.U = q;
  p.L = q.R;
  if (p.L)
    p.L.U = p;
  q.R = p;
}
function RedBlackFirst(node) {
  while (node.L)
    node = node.L;
  return node;
}
var RedBlackTree_default = RedBlackTree;

// node_modules/d3-voronoi/src/Edge.js
function createEdge(left2, right2, v0, v1) {
  var edge = [null, null], index2 = edges.push(edge) - 1;
  edge.left = left2;
  edge.right = right2;
  if (v0)
    setEdgeEnd(edge, left2, right2, v0);
  if (v1)
    setEdgeEnd(edge, right2, left2, v1);
  cells[left2.index].halfedges.push(index2);
  cells[right2.index].halfedges.push(index2);
  return edge;
}
function createBorderEdge(left2, v0, v1) {
  var edge = [v0, v1];
  edge.left = left2;
  return edge;
}
function setEdgeEnd(edge, left2, right2, vertex) {
  if (!edge[0] && !edge[1]) {
    edge[0] = vertex;
    edge.left = left2;
    edge.right = right2;
  } else if (edge.left === right2) {
    edge[1] = vertex;
  } else {
    edge[0] = vertex;
  }
}
function clipEdge(edge, x06, y06, x12, y12) {
  var a2 = edge[0], b = edge[1], ax = a2[0], ay = a2[1], bx = b[0], by = b[1], t03 = 0, t13 = 1, dx = bx - ax, dy = by - ay, r;
  r = x06 - ax;
  if (!dx && r > 0)
    return;
  r /= dx;
  if (dx < 0) {
    if (r < t03)
      return;
    if (r < t13)
      t13 = r;
  } else if (dx > 0) {
    if (r > t13)
      return;
    if (r > t03)
      t03 = r;
  }
  r = x12 - ax;
  if (!dx && r < 0)
    return;
  r /= dx;
  if (dx < 0) {
    if (r > t13)
      return;
    if (r > t03)
      t03 = r;
  } else if (dx > 0) {
    if (r < t03)
      return;
    if (r < t13)
      t13 = r;
  }
  r = y06 - ay;
  if (!dy && r > 0)
    return;
  r /= dy;
  if (dy < 0) {
    if (r < t03)
      return;
    if (r < t13)
      t13 = r;
  } else if (dy > 0) {
    if (r > t13)
      return;
    if (r > t03)
      t03 = r;
  }
  r = y12 - ay;
  if (!dy && r < 0)
    return;
  r /= dy;
  if (dy < 0) {
    if (r > t13)
      return;
    if (r > t03)
      t03 = r;
  } else if (dy > 0) {
    if (r < t03)
      return;
    if (r < t13)
      t13 = r;
  }
  if (!(t03 > 0) && !(t13 < 1))
    return true;
  if (t03 > 0)
    edge[0] = [ax + t03 * dx, ay + t03 * dy];
  if (t13 < 1)
    edge[1] = [ax + t13 * dx, ay + t13 * dy];
  return true;
}
function connectEdge(edge, x06, y06, x12, y12) {
  var v1 = edge[1];
  if (v1)
    return true;
  var v0 = edge[0], left2 = edge.left, right2 = edge.right, lx = left2[0], ly = left2[1], rx = right2[0], ry = right2[1], fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
  if (ry === ly) {
    if (fx < x06 || fx >= x12)
      return;
    if (lx > rx) {
      if (!v0)
        v0 = [fx, y06];
      else if (v0[1] >= y12)
        return;
      v1 = [fx, y12];
    } else {
      if (!v0)
        v0 = [fx, y12];
      else if (v0[1] < y06)
        return;
      v1 = [fx, y06];
    }
  } else {
    fm = (lx - rx) / (ry - ly);
    fb = fy - fm * fx;
    if (fm < -1 || fm > 1) {
      if (lx > rx) {
        if (!v0)
          v0 = [(y06 - fb) / fm, y06];
        else if (v0[1] >= y12)
          return;
        v1 = [(y12 - fb) / fm, y12];
      } else {
        if (!v0)
          v0 = [(y12 - fb) / fm, y12];
        else if (v0[1] < y06)
          return;
        v1 = [(y06 - fb) / fm, y06];
      }
    } else {
      if (ly < ry) {
        if (!v0)
          v0 = [x06, fm * x06 + fb];
        else if (v0[0] >= x12)
          return;
        v1 = [x12, fm * x12 + fb];
      } else {
        if (!v0)
          v0 = [x12, fm * x12 + fb];
        else if (v0[0] < x06)
          return;
        v1 = [x06, fm * x06 + fb];
      }
    }
  }
  edge[0] = v0;
  edge[1] = v1;
  return true;
}
function clipEdges(x06, y06, x12, y12) {
  var i = edges.length, edge;
  while (i--) {
    if (!connectEdge(edge = edges[i], x06, y06, x12, y12) || !clipEdge(edge, x06, y06, x12, y12) || !(Math.abs(edge[0][0] - edge[1][0]) > epsilon6 || Math.abs(edge[0][1] - edge[1][1]) > epsilon6)) {
      delete edges[i];
    }
  }
}

// node_modules/d3-voronoi/src/Cell.js
function createCell(site) {
  return cells[site.index] = {
    site,
    halfedges: []
  };
}
function cellHalfedgeAngle(cell, edge) {
  var site = cell.site, va = edge.left, vb = edge.right;
  if (site === vb)
    vb = va, va = site;
  if (vb)
    return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
  if (site === va)
    va = edge[1], vb = edge[0];
  else
    va = edge[0], vb = edge[1];
  return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
}
function cellHalfedgeStart(cell, edge) {
  return edge[+(edge.left !== cell.site)];
}
function cellHalfedgeEnd(cell, edge) {
  return edge[+(edge.left === cell.site)];
}
function sortCellHalfedges() {
  for (var i = 0, n = cells.length, cell, halfedges, j, m; i < n; ++i) {
    if ((cell = cells[i]) && (m = (halfedges = cell.halfedges).length)) {
      var index2 = new Array(m), array4 = new Array(m);
      for (j = 0; j < m; ++j)
        index2[j] = j, array4[j] = cellHalfedgeAngle(cell, edges[halfedges[j]]);
      index2.sort(function(i2, j2) {
        return array4[j2] - array4[i2];
      });
      for (j = 0; j < m; ++j)
        array4[j] = halfedges[index2[j]];
      for (j = 0; j < m; ++j)
        halfedges[j] = array4[j];
    }
  }
}
function clipCells(x06, y06, x12, y12) {
  var nCells = cells.length, iCell, cell, site, iHalfedge, halfedges, nHalfedges, start2, startX, startY, end, endX, endY, cover = true;
  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = cells[iCell]) {
      site = cell.site;
      halfedges = cell.halfedges;
      iHalfedge = halfedges.length;
      while (iHalfedge--) {
        if (!edges[halfedges[iHalfedge]]) {
          halfedges.splice(iHalfedge, 1);
        }
      }
      iHalfedge = 0, nHalfedges = halfedges.length;
      while (iHalfedge < nHalfedges) {
        end = cellHalfedgeEnd(cell, edges[halfedges[iHalfedge]]), endX = end[0], endY = end[1];
        start2 = cellHalfedgeStart(cell, edges[halfedges[++iHalfedge % nHalfedges]]), startX = start2[0], startY = start2[1];
        if (Math.abs(endX - startX) > epsilon6 || Math.abs(endY - startY) > epsilon6) {
          halfedges.splice(iHalfedge, 0, edges.push(createBorderEdge(site, end, Math.abs(endX - x06) < epsilon6 && y12 - endY > epsilon6 ? [x06, Math.abs(startX - x06) < epsilon6 ? startY : y12] : Math.abs(endY - y12) < epsilon6 && x12 - endX > epsilon6 ? [Math.abs(startY - y12) < epsilon6 ? startX : x12, y12] : Math.abs(endX - x12) < epsilon6 && endY - y06 > epsilon6 ? [x12, Math.abs(startX - x12) < epsilon6 ? startY : y06] : Math.abs(endY - y06) < epsilon6 && endX - x06 > epsilon6 ? [Math.abs(startY - y06) < epsilon6 ? startX : x06, y06] : null)) - 1);
          ++nHalfedges;
        }
      }
      if (nHalfedges)
        cover = false;
    }
  }
  if (cover) {
    var dx, dy, d2, dc = Infinity;
    for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
      if (cell = cells[iCell]) {
        site = cell.site;
        dx = site[0] - x06;
        dy = site[1] - y06;
        d2 = dx * dx + dy * dy;
        if (d2 < dc)
          dc = d2, cover = cell;
      }
    }
    if (cover) {
      var v00 = [x06, y06], v01 = [x06, y12], v11 = [x12, y12], v10 = [x12, y06];
      cover.halfedges.push(edges.push(createBorderEdge(site = cover.site, v00, v01)) - 1, edges.push(createBorderEdge(site, v01, v11)) - 1, edges.push(createBorderEdge(site, v11, v10)) - 1, edges.push(createBorderEdge(site, v10, v00)) - 1);
    }
  }
  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = cells[iCell]) {
      if (!cell.halfedges.length) {
        delete cells[iCell];
      }
    }
  }
}

// node_modules/d3-voronoi/src/Circle.js
var circlePool = [];
var firstCircle;
function Circle() {
  RedBlackNode(this);
  this.x = this.y = this.arc = this.site = this.cy = null;
}
function attachCircle(arc) {
  var lArc = arc.P, rArc = arc.N;
  if (!lArc || !rArc)
    return;
  var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
  if (lSite === rSite)
    return;
  var bx = cSite[0], by = cSite[1], ax = lSite[0] - bx, ay = lSite[1] - by, cx = rSite[0] - bx, cy = rSite[1] - by;
  var d = 2 * (ax * cy - ay * cx);
  if (d >= -epsilon23)
    return;
  var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x5 = (cy * ha - ay * hc) / d, y5 = (ax * hc - cx * ha) / d;
  var circle2 = circlePool.pop() || new Circle();
  circle2.arc = arc;
  circle2.site = cSite;
  circle2.x = x5 + bx;
  circle2.y = (circle2.cy = y5 + by) + Math.sqrt(x5 * x5 + y5 * y5);
  arc.circle = circle2;
  var before = null, node = circles._;
  while (node) {
    if (circle2.y < node.y || circle2.y === node.y && circle2.x <= node.x) {
      if (node.L)
        node = node.L;
      else {
        before = node.P;
        break;
      }
    } else {
      if (node.R)
        node = node.R;
      else {
        before = node;
        break;
      }
    }
  }
  circles.insert(before, circle2);
  if (!before)
    firstCircle = circle2;
}
function detachCircle(arc) {
  var circle2 = arc.circle;
  if (circle2) {
    if (!circle2.P)
      firstCircle = circle2.N;
    circles.remove(circle2);
    circlePool.push(circle2);
    RedBlackNode(circle2);
    arc.circle = null;
  }
}

// node_modules/d3-voronoi/src/Beach.js
var beachPool = [];
function Beach() {
  RedBlackNode(this);
  this.edge = this.site = this.circle = null;
}
function createBeach(site) {
  var beach = beachPool.pop() || new Beach();
  beach.site = site;
  return beach;
}
function detachBeach(beach) {
  detachCircle(beach);
  beaches.remove(beach);
  beachPool.push(beach);
  RedBlackNode(beach);
}
function removeBeach(beach) {
  var circle2 = beach.circle, x5 = circle2.x, y5 = circle2.cy, vertex = [x5, y5], previous = beach.P, next = beach.N, disappearing = [beach];
  detachBeach(beach);
  var lArc = previous;
  while (lArc.circle && Math.abs(x5 - lArc.circle.x) < epsilon6 && Math.abs(y5 - lArc.circle.cy) < epsilon6) {
    previous = lArc.P;
    disappearing.unshift(lArc);
    detachBeach(lArc);
    lArc = previous;
  }
  disappearing.unshift(lArc);
  detachCircle(lArc);
  var rArc = next;
  while (rArc.circle && Math.abs(x5 - rArc.circle.x) < epsilon6 && Math.abs(y5 - rArc.circle.cy) < epsilon6) {
    next = rArc.N;
    disappearing.push(rArc);
    detachBeach(rArc);
    rArc = next;
  }
  disappearing.push(rArc);
  detachCircle(rArc);
  var nArcs = disappearing.length, iArc;
  for (iArc = 1; iArc < nArcs; ++iArc) {
    rArc = disappearing[iArc];
    lArc = disappearing[iArc - 1];
    setEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
  }
  lArc = disappearing[0];
  rArc = disappearing[nArcs - 1];
  rArc.edge = createEdge(lArc.site, rArc.site, null, vertex);
  attachCircle(lArc);
  attachCircle(rArc);
}
function addBeach(site) {
  var x5 = site[0], directrix = site[1], lArc, rArc, dxl, dxr, node = beaches._;
  while (node) {
    dxl = leftBreakPoint(node, directrix) - x5;
    if (dxl > epsilon6)
      node = node.L;
    else {
      dxr = x5 - rightBreakPoint(node, directrix);
      if (dxr > epsilon6) {
        if (!node.R) {
          lArc = node;
          break;
        }
        node = node.R;
      } else {
        if (dxl > -epsilon6) {
          lArc = node.P;
          rArc = node;
        } else if (dxr > -epsilon6) {
          lArc = node;
          rArc = node.N;
        } else {
          lArc = rArc = node;
        }
        break;
      }
    }
  }
  createCell(site);
  var newArc = createBeach(site);
  beaches.insert(lArc, newArc);
  if (!lArc && !rArc)
    return;
  if (lArc === rArc) {
    detachCircle(lArc);
    rArc = createBeach(lArc.site);
    beaches.insert(newArc, rArc);
    newArc.edge = rArc.edge = createEdge(lArc.site, newArc.site);
    attachCircle(lArc);
    attachCircle(rArc);
    return;
  }
  if (!rArc) {
    newArc.edge = createEdge(lArc.site, newArc.site);
    return;
  }
  detachCircle(lArc);
  detachCircle(rArc);
  var lSite = lArc.site, ax = lSite[0], ay = lSite[1], bx = site[0] - ax, by = site[1] - ay, rSite = rArc.site, cx = rSite[0] - ax, cy = rSite[1] - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];
  setEdgeEnd(rArc.edge, lSite, rSite, vertex);
  newArc.edge = createEdge(lSite, site, null, vertex);
  rArc.edge = createEdge(site, rSite, null, vertex);
  attachCircle(lArc);
  attachCircle(rArc);
}
function leftBreakPoint(arc, directrix) {
  var site = arc.site, rfocx = site[0], rfocy = site[1], pby2 = rfocy - directrix;
  if (!pby2)
    return rfocx;
  var lArc = arc.P;
  if (!lArc)
    return -Infinity;
  site = lArc.site;
  var lfocx = site[0], lfocy = site[1], plby2 = lfocy - directrix;
  if (!plby2)
    return lfocx;
  var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
  if (aby2)
    return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
  return (rfocx + lfocx) / 2;
}
function rightBreakPoint(arc, directrix) {
  var rArc = arc.N;
  if (rArc)
    return leftBreakPoint(rArc, directrix);
  var site = arc.site;
  return site[1] === directrix ? site[0] : Infinity;
}

// node_modules/d3-voronoi/src/Diagram.js
var epsilon6 = 1e-6;
var epsilon23 = 1e-12;
var beaches;
var cells;
var circles;
var edges;
function triangleArea(a2, b, c4) {
  return (a2[0] - c4[0]) * (b[1] - a2[1]) - (a2[0] - b[0]) * (c4[1] - a2[1]);
}
function lexicographic(a2, b) {
  return b[1] - a2[1] || b[0] - a2[0];
}
function Diagram(sites, extent) {
  var site = sites.sort(lexicographic).pop(), x5, y5, circle2;
  edges = [];
  cells = new Array(sites.length);
  beaches = new RedBlackTree_default();
  circles = new RedBlackTree_default();
  while (true) {
    circle2 = firstCircle;
    if (site && (!circle2 || site[1] < circle2.y || site[1] === circle2.y && site[0] < circle2.x)) {
      if (site[0] !== x5 || site[1] !== y5) {
        addBeach(site);
        x5 = site[0], y5 = site[1];
      }
      site = sites.pop();
    } else if (circle2) {
      removeBeach(circle2.arc);
    } else {
      break;
    }
  }
  sortCellHalfedges();
  if (extent) {
    var x06 = +extent[0][0], y06 = +extent[0][1], x12 = +extent[1][0], y12 = +extent[1][1];
    clipEdges(x06, y06, x12, y12);
    clipCells(x06, y06, x12, y12);
  }
  this.edges = edges;
  this.cells = cells;
  beaches = circles = edges = cells = null;
}
Diagram.prototype = {
  constructor: Diagram,
  polygons: function() {
    var edges2 = this.edges;
    return this.cells.map(function(cell) {
      var polygon = cell.halfedges.map(function(i) {
        return cellHalfedgeStart(cell, edges2[i]);
      });
      polygon.data = cell.site.data;
      return polygon;
    });
  },
  triangles: function() {
    var triangles = [], edges2 = this.edges;
    this.cells.forEach(function(cell, i) {
      if (!(m = (halfedges = cell.halfedges).length))
        return;
      var site = cell.site, halfedges, j = -1, m, s0, e1 = edges2[halfedges[m - 1]], s1 = e1.left === site ? e1.right : e1.left;
      while (++j < m) {
        s0 = s1;
        e1 = edges2[halfedges[j]];
        s1 = e1.left === site ? e1.right : e1.left;
        if (s0 && s1 && i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
          triangles.push([site.data, s0.data, s1.data]);
        }
      }
    });
    return triangles;
  },
  links: function() {
    return this.edges.filter(function(edge) {
      return edge.right;
    }).map(function(edge) {
      return {
        source: edge.left.data,
        target: edge.right.data
      };
    });
  },
  find: function(x5, y5, radius) {
    var that = this, i0, i1 = that._found || 0, n = that.cells.length, cell;
    while (!(cell = that.cells[i1]))
      if (++i1 >= n)
        return null;
    var dx = x5 - cell.site[0], dy = y5 - cell.site[1], d2 = dx * dx + dy * dy;
    do {
      cell = that.cells[i0 = i1], i1 = null;
      cell.halfedges.forEach(function(e) {
        var edge = that.edges[e], v = edge.left;
        if ((v === cell.site || !v) && !(v = edge.right))
          return;
        var vx = x5 - v[0], vy = y5 - v[1], v2 = vx * vx + vy * vy;
        if (v2 < d2)
          d2 = v2, i1 = v.index;
      });
    } while (i1 !== null);
    that._found = i0;
    return radius == null || d2 <= radius * radius ? cell.site : null;
  }
};

// node_modules/d3-voronoi/src/voronoi.js
function voronoi_default() {
  var x5 = x4, y5 = y4, extent = null;
  function voronoi(data) {
    return new Diagram(data.map(function(d, i) {
      var s2 = [Math.round(x5(d, i, data) / epsilon6) * epsilon6, Math.round(y5(d, i, data) / epsilon6) * epsilon6];
      s2.index = i;
      s2.data = d;
      return s2;
    }), extent);
  }
  voronoi.polygons = function(data) {
    return voronoi(data).polygons();
  };
  voronoi.links = function(data) {
    return voronoi(data).links();
  };
  voronoi.triangles = function(data) {
    return voronoi(data).triangles();
  };
  voronoi.x = function(_) {
    return arguments.length ? (x5 = typeof _ === "function" ? _ : constant_default13(+_), voronoi) : x5;
  };
  voronoi.y = function(_) {
    return arguments.length ? (y5 = typeof _ === "function" ? _ : constant_default13(+_), voronoi) : y5;
  };
  voronoi.extent = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]], voronoi) : extent && [[extent[0][0], extent[0][1]], [extent[1][0], extent[1][1]]];
  };
  voronoi.size = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[0, 0], [+_[0], +_[1]]], voronoi) : extent && [extent[1][0] - extent[0][0], extent[1][1] - extent[0][1]];
  };
  return voronoi;
}

// node_modules/d3-zoom/src/constant.js
function constant_default14(x5) {
  return function() {
    return x5;
  };
}

// node_modules/d3-zoom/src/event.js
function ZoomEvent(target, type2, transform2) {
  this.target = target;
  this.type = type2;
  this.transform = transform2;
}

// node_modules/d3-zoom/src/transform.js
function Transform(k2, x5, y5) {
  this.k = k2;
  this.x = x5;
  this.y = y5;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k2) {
    return k2 === 1 ? this : new Transform(this.k * k2, this.x, this.y);
  },
  translate: function(x5, y5) {
    return x5 === 0 & y5 === 0 ? this : new Transform(this.k, this.x + this.k * x5, this.y + this.k * y5);
  },
  apply: function(point6) {
    return [point6[0] * this.k + this.x, point6[1] * this.k + this.y];
  },
  applyX: function(x5) {
    return x5 * this.k + this.x;
  },
  applyY: function(y5) {
    return y5 * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x5) {
    return (x5 - this.x) / this.k;
  },
  invertY: function(y5) {
    return (y5 - this.y) / this.k;
  },
  rescaleX: function(x5) {
    return x5.copy().domain(x5.range().map(this.invertX, this).map(x5.invert, x5));
  },
  rescaleY: function(y5) {
    return y5.copy().domain(y5.range().map(this.invertY, this).map(y5.invert, y5));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity4 = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
  while (!node.__zoom)
    if (!(node = node.parentNode))
      return identity4;
  return node.__zoom;
}

// node_modules/d3-zoom/src/noevent.js
function nopropagation3() {
  event.stopImmediatePropagation();
}
function noevent_default3() {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-zoom/src/zoom.js
function defaultFilter3() {
  return !event.ctrlKey && !event.button;
}
function defaultExtent2() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}
function defaultTransform() {
  return this.__zoom || identity4;
}
function defaultWheelDelta() {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3);
}
function defaultTouchable3() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform2, extent, translateExtent) {
  var dx0 = transform2.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform2.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform2.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform2.invertY(extent[1][1]) - translateExtent[1][1];
  return transform2.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}
function zoom_default2() {
  var filter = defaultFilter3, extent = defaultExtent2, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable3, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = zoom_default, listeners = dispatch_default("start", "zoom", "end"), touchstarting, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0;
  function zoom(selection2) {
    selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  zoom.transform = function(collection, transform2, point6) {
    var selection2 = collection.selection ? collection.selection() : collection;
    selection2.property("__zoom", defaultTransform);
    if (collection !== selection2) {
      schedule(collection, transform2, point6);
    } else {
      selection2.interrupt().each(function() {
        gesture(this, arguments).start().zoom(null, typeof transform2 === "function" ? transform2.apply(this, arguments) : transform2).end();
      });
    }
  };
  zoom.scaleBy = function(selection2, k2, p) {
    zoom.scaleTo(selection2, function() {
      var k0 = this.__zoom.k, k1 = typeof k2 === "function" ? k2.apply(this, arguments) : k2;
      return k0 * k1;
    }, p);
  };
  zoom.scaleTo = function(selection2, k2, p) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t03 = this.__zoom, p02 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t03.invert(p02), k1 = typeof k2 === "function" ? k2.apply(this, arguments) : k2;
      return constrain(translate(scale(t03, k1), p02, p1), e, translateExtent);
    }, p);
  };
  zoom.translateBy = function(selection2, x5, y5) {
    zoom.transform(selection2, function() {
      return constrain(this.__zoom.translate(typeof x5 === "function" ? x5.apply(this, arguments) : x5, typeof y5 === "function" ? y5.apply(this, arguments) : y5), extent.apply(this, arguments), translateExtent);
    });
  };
  zoom.translateTo = function(selection2, x5, y5, p) {
    zoom.transform(selection2, function() {
      var e = extent.apply(this, arguments), t = this.__zoom, p02 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity4.translate(p02[0], p02[1]).scale(t.k).translate(typeof x5 === "function" ? -x5.apply(this, arguments) : -x5, typeof y5 === "function" ? -y5.apply(this, arguments) : -y5), e, translateExtent);
    }, p);
  };
  function scale(transform2, k2) {
    k2 = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k2));
    return k2 === transform2.k ? transform2 : new Transform(k2, transform2.x, transform2.y);
  }
  function translate(transform2, p02, p1) {
    var x5 = p02[0] - p1[0] * transform2.k, y5 = p02[1] - p1[1] * transform2.k;
    return x5 === transform2.x && y5 === transform2.y ? transform2 : new Transform(transform2.k, x5, y5);
  }
  function centroid(extent2) {
    return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
  }
  function schedule(transition2, transform2, point6) {
    transition2.on("start.zoom", function() {
      gesture(this, arguments).start();
    }).on("interrupt.zoom end.zoom", function() {
      gesture(this, arguments).end();
    }).tween("zoom", function() {
      var that = this, args = arguments, g = gesture(that, args), e = extent.apply(that, args), p = point6 == null ? centroid(e) : typeof point6 === "function" ? point6.apply(that, args) : point6, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a2 = that.__zoom, b = typeof transform2 === "function" ? transform2.apply(that, args) : transform2, i = interpolate(a2.invert(p).concat(w / a2.k), b.invert(p).concat(w / b.k));
      return function(t) {
        if (t === 1)
          t = b;
        else {
          var l = i(t), k2 = w / l[2];
          t = new Transform(k2, p[0] - l[0] * k2, p[1] - l[1] * k2);
        }
        g.zoom(null, t);
      };
    });
  }
  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }
  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }
  Gesture.prototype = {
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform2) {
      if (this.mouse && key !== "mouse")
        this.mouse[1] = transform2.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch")
        this.touch0[1] = transform2.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch")
        this.touch1[1] = transform2.invert(this.touch1[0]);
      this.that.__zoom = transform2;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type2) {
      customEvent(new ZoomEvent(zoom, type2, this.that.__zoom), listeners.apply, listeners, [type2, this.that, this.args]);
    }
  };
  function wheeled() {
    if (!filter.apply(this, arguments))
      return;
    var g = gesture(this, arguments), t = this.__zoom, k2 = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = mouse_default(this);
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    } else if (t.k === k2)
      return;
    else {
      g.mouse = [p, t.invert(p)];
      interrupt_default(this);
      g.start();
    }
    noevent_default3();
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k2), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }
  function mousedowned() {
    if (touchending || !filter.apply(this, arguments))
      return;
    var g = gesture(this, arguments, true), v = select_default2(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = mouse_default(this), x06 = event.clientX, y06 = event.clientY;
    nodrag_default(event.view);
    nopropagation3();
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt_default(this);
    g.start();
    function mousemoved() {
      noevent_default3();
      if (!g.moved) {
        var dx = event.clientX - x06, dy = event.clientY - y06;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = mouse_default(g.that), g.mouse[1]), g.extent, translateExtent));
    }
    function mouseupped() {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(event.view, g.moved);
      noevent_default3();
      g.end();
    }
  }
  function dblclicked() {
    if (!filter.apply(this, arguments))
      return;
    var t03 = this.__zoom, p02 = mouse_default(this), p1 = t03.invert(p02), k1 = t03.k * (event.shiftKey ? 0.5 : 2), t13 = constrain(translate(scale(t03, k1), p02, p1), extent.apply(this, arguments), translateExtent);
    noevent_default3();
    if (duration > 0)
      select_default2(this).transition().duration(duration).call(schedule, t13, p02);
    else
      select_default2(this).call(zoom.transform, t13);
  }
  function touchstarted() {
    if (!filter.apply(this, arguments))
      return;
    var touches = event.touches, n = touches.length, g = gesture(this, arguments, event.changedTouches.length === n), started, i, t, p;
    nopropagation3();
    for (i = 0; i < n; ++i) {
      t = touches[i], p = touch_default(this, touches, t.identifier);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0)
        g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2])
        g.touch1 = p, g.taps = 0;
    }
    if (touchstarting)
      touchstarting = clearTimeout(touchstarting);
    if (started) {
      if (g.taps < 2)
        touchstarting = setTimeout(function() {
          touchstarting = null;
        }, touchDelay);
      interrupt_default(this);
      g.start();
    }
  }
  function touchmoved() {
    if (!this.__zooming)
      return;
    var g = gesture(this, arguments), touches = event.changedTouches, n = touches.length, i, t, p, l;
    noevent_default3();
    if (touchstarting)
      touchstarting = clearTimeout(touchstarting);
    g.taps = 0;
    for (i = 0; i < n; ++i) {
      t = touches[i], p = touch_default(this, touches, t.identifier);
      if (g.touch0 && g.touch0[2] === t.identifier)
        g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier)
        g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p02 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p02[0]) * dp + (dp = p1[1] - p02[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p02[0] + p1[0]) / 2, (p02[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g.touch0)
      p = g.touch0[0], l = g.touch0[1];
    else
      return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }
  function touchended() {
    if (!this.__zooming)
      return;
    var g = gesture(this, arguments), touches = event.changedTouches, n = touches.length, i, t;
    nopropagation3();
    if (touchending)
      clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier)
        delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier)
        delete g.touch1;
    }
    if (g.touch1 && !g.touch0)
      g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0)
      g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      if (g.taps === 2) {
        var p = select_default2(this).on("dblclick.zoom");
        if (p)
          p.apply(this, arguments);
      }
    }
  }
  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant_default14(+_), zoom) : wheelDelta;
  };
  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant_default14(!!_), zoom) : filter;
  };
  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default14(!!_), zoom) : touchable;
  };
  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant_default14([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };
  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };
  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };
  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };
  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };
  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };
  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };
  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };
  return zoom;
}
export {
  FormatSpecifier,
  active_default as active,
  arc_default as arc,
  area_default5 as area,
  areaRadial_default as areaRadial,
  ascending_default as ascending,
  autoType,
  axisBottom,
  axisLeft,
  axisRight,
  axisTop,
  bisect_default as bisect,
  bisectLeft,
  bisectRight,
  bisector_default as bisector,
  blob_default as blob,
  brush_default as brush,
  brushSelection,
  brushX,
  brushY,
  buffer_default as buffer,
  chord_default as chord,
  point_default as clientPoint,
  cluster_default as cluster,
  color,
  density_default as contourDensity,
  contours_default as contours,
  create_default as create,
  creator_default as creator,
  cross_default as cross,
  csv2 as csv,
  csvFormat,
  csvFormatBody,
  csvFormatRow,
  csvFormatRows,
  csvFormatValue,
  csvParse,
  csvParseRows,
  cubehelix,
  basis_default2 as curveBasis,
  basisClosed_default2 as curveBasisClosed,
  basisOpen_default as curveBasisOpen,
  bundle_default as curveBundle,
  cardinal_default as curveCardinal,
  cardinalClosed_default as curveCardinalClosed,
  cardinalOpen_default as curveCardinalOpen,
  catmullRom_default as curveCatmullRom,
  catmullRomClosed_default as curveCatmullRomClosed,
  catmullRomOpen_default as curveCatmullRomOpen,
  linear_default as curveLinear,
  linearClosed_default as curveLinearClosed,
  monotoneX as curveMonotoneX,
  monotoneY as curveMonotoneY,
  natural_default as curveNatural,
  step_default as curveStep,
  stepAfter as curveStepAfter,
  stepBefore as curveStepBefore,
  customEvent,
  descending_default as descending,
  deviation_default as deviation,
  dispatch_default as dispatch,
  drag_default as drag,
  nodrag_default as dragDisable,
  yesdrag as dragEnable,
  dsv,
  dsv_default as dsvFormat,
  backInOut as easeBack,
  backIn as easeBackIn,
  backInOut as easeBackInOut,
  backOut as easeBackOut,
  bounceOut as easeBounce,
  bounceIn as easeBounceIn,
  bounceInOut as easeBounceInOut,
  bounceOut as easeBounceOut,
  circleInOut as easeCircle,
  circleIn as easeCircleIn,
  circleInOut as easeCircleInOut,
  circleOut as easeCircleOut,
  cubicInOut as easeCubic,
  cubicIn as easeCubicIn,
  cubicInOut as easeCubicInOut,
  cubicOut as easeCubicOut,
  elasticOut as easeElastic,
  elasticIn as easeElasticIn,
  elasticInOut as easeElasticInOut,
  elasticOut as easeElasticOut,
  expInOut as easeExp,
  expIn as easeExpIn,
  expInOut as easeExpInOut,
  expOut as easeExpOut,
  linear2 as easeLinear,
  polyInOut as easePoly,
  polyIn as easePolyIn,
  polyInOut as easePolyInOut,
  polyOut as easePolyOut,
  quadInOut as easeQuad,
  quadIn as easeQuadIn,
  quadInOut as easeQuadInOut,
  quadOut as easeQuadOut,
  sinInOut as easeSin,
  sinIn as easeSinIn,
  sinInOut as easeSinInOut,
  sinOut as easeSinOut,
  entries_default as entries,
  event,
  extent_default as extent,
  center_default as forceCenter,
  collide_default as forceCollide,
  link_default as forceLink,
  manyBody_default as forceManyBody,
  radial_default as forceRadial,
  simulation_default as forceSimulation,
  x_default2 as forceX,
  y_default2 as forceY,
  format,
  defaultLocale as formatDefaultLocale,
  locale_default as formatLocale,
  formatPrefix,
  formatSpecifier,
  albers_default as geoAlbers,
  albersUsa_default as geoAlbersUsa,
  area_default2 as geoArea,
  azimuthalEqualArea_default as geoAzimuthalEqualArea,
  azimuthalEqualAreaRaw as geoAzimuthalEqualAreaRaw,
  azimuthalEquidistant_default as geoAzimuthalEquidistant,
  azimuthalEquidistantRaw as geoAzimuthalEquidistantRaw,
  bounds_default as geoBounds,
  centroid_default as geoCentroid,
  circle_default as geoCircle,
  antimeridian_default as geoClipAntimeridian,
  circle_default2 as geoClipCircle,
  extent_default3 as geoClipExtent,
  clipRectangle as geoClipRectangle,
  conicConformal_default as geoConicConformal,
  conicConformalRaw as geoConicConformalRaw,
  conicEqualArea_default as geoConicEqualArea,
  conicEqualAreaRaw as geoConicEqualAreaRaw,
  conicEquidistant_default as geoConicEquidistant,
  conicEquidistantRaw as geoConicEquidistantRaw,
  contains_default2 as geoContains,
  distance_default as geoDistance,
  equalEarth_default as geoEqualEarth,
  equalEarthRaw as geoEqualEarthRaw,
  equirectangular_default as geoEquirectangular,
  equirectangularRaw as geoEquirectangularRaw,
  gnomonic_default as geoGnomonic,
  gnomonicRaw as geoGnomonicRaw,
  graticule as geoGraticule,
  graticule10 as geoGraticule10,
  identity_default5 as geoIdentity,
  interpolate_default2 as geoInterpolate,
  length_default as geoLength,
  mercator_default as geoMercator,
  mercatorRaw as geoMercatorRaw,
  naturalEarth1_default as geoNaturalEarth1,
  naturalEarth1Raw as geoNaturalEarth1Raw,
  orthographic_default as geoOrthographic,
  orthographicRaw as geoOrthographicRaw,
  path_default2 as geoPath,
  projection as geoProjection,
  projectionMutator as geoProjectionMutator,
  rotation_default as geoRotation,
  stereographic_default as geoStereographic,
  stereographicRaw as geoStereographicRaw,
  stream_default as geoStream,
  transform_default as geoTransform,
  transverseMercator_default as geoTransverseMercator,
  transverseMercatorRaw as geoTransverseMercatorRaw,
  gray,
  hcl,
  hierarchy,
  histogram_default as histogram,
  hsl,
  html,
  image_default as image,
  value_default as interpolate,
  array_default as interpolateArray,
  basis_default as interpolateBasis,
  basisClosed_default as interpolateBasisClosed,
  Blues_default as interpolateBlues,
  BrBG_default as interpolateBrBG,
  BuGn_default as interpolateBuGn,
  BuPu_default as interpolateBuPu,
  cividis_default as interpolateCividis,
  cool as interpolateCool,
  cubehelix_default as interpolateCubehelix,
  cubehelix_default2 as interpolateCubehelixDefault,
  cubehelixLong as interpolateCubehelixLong,
  date_default as interpolateDate,
  discrete_default as interpolateDiscrete,
  GnBu_default as interpolateGnBu,
  Greens_default as interpolateGreens,
  Greys_default as interpolateGreys,
  hcl_default as interpolateHcl,
  hclLong as interpolateHclLong,
  hsl_default as interpolateHsl,
  hslLong as interpolateHslLong,
  hue_default as interpolateHue,
  inferno as interpolateInferno,
  lab2 as interpolateLab,
  magma as interpolateMagma,
  number_default2 as interpolateNumber,
  numberArray_default as interpolateNumberArray,
  object_default as interpolateObject,
  OrRd_default as interpolateOrRd,
  Oranges_default as interpolateOranges,
  PRGn_default as interpolatePRGn,
  PiYG_default as interpolatePiYG,
  plasma as interpolatePlasma,
  PuBu_default as interpolatePuBu,
  PuBuGn_default as interpolatePuBuGn,
  PuOr_default as interpolatePuOr,
  PuRd_default as interpolatePuRd,
  Purples_default as interpolatePurples,
  rainbow_default as interpolateRainbow,
  RdBu_default as interpolateRdBu,
  RdGy_default as interpolateRdGy,
  RdPu_default as interpolateRdPu,
  RdYlBu_default as interpolateRdYlBu,
  RdYlGn_default as interpolateRdYlGn,
  Reds_default as interpolateReds,
  rgb_default as interpolateRgb,
  rgbBasis as interpolateRgbBasis,
  rgbBasisClosed as interpolateRgbBasisClosed,
  round_default as interpolateRound,
  sinebow_default as interpolateSinebow,
  Spectral_default as interpolateSpectral,
  string_default as interpolateString,
  interpolateTransformCss,
  interpolateTransformSvg,
  turbo_default as interpolateTurbo,
  viridis_default as interpolateViridis,
  warm as interpolateWarm,
  YlGn_default as interpolateYlGn,
  YlGnBu_default as interpolateYlGnBu,
  YlOrBr_default as interpolateYlOrBr,
  YlOrRd_default as interpolateYlOrRd,
  zoom_default as interpolateZoom,
  interrupt_default as interrupt,
  interval_default as interval,
  isoFormat_default as isoFormat,
  isoParse_default as isoParse,
  json_default as json,
  keys_default as keys,
  lab,
  lch,
  line_default2 as line,
  lineRadial_default as lineRadial,
  linkHorizontal,
  linkRadial,
  linkVertical,
  local,
  map_default as map,
  matcher_default as matcher,
  max_default as max,
  mean_default as mean,
  median_default as median,
  merge_default as merge,
  min_default as min,
  mouse_default as mouse,
  namespace_default as namespace,
  namespaces_default as namespaces,
  nest_default as nest,
  now,
  pack_default as pack,
  enclose_default as packEnclose,
  siblings_default as packSiblings,
  pairs_default as pairs,
  partition_default as partition,
  path_default as path,
  permute_default as permute,
  pie_default as pie,
  piecewise,
  pointRadial_default as pointRadial,
  area_default4 as polygonArea,
  centroid_default3 as polygonCentroid,
  contains_default3 as polygonContains,
  hull_default as polygonHull,
  length_default2 as polygonLength,
  precisionFixed_default as precisionFixed,
  precisionPrefix_default as precisionPrefix,
  precisionRound_default as precisionRound,
  quadtree,
  quantile_default as quantile,
  quantize_default as quantize,
  areaRadial_default as radialArea,
  lineRadial_default as radialLine,
  bates_default as randomBates,
  exponential_default as randomExponential,
  irwinHall_default as randomIrwinHall,
  logNormal_default as randomLogNormal,
  normal_default as randomNormal,
  uniform_default as randomUniform,
  range_default as range,
  rgb,
  ribbon_default as ribbon,
  band as scaleBand,
  diverging as scaleDiverging,
  divergingLog as scaleDivergingLog,
  divergingPow as scaleDivergingPow,
  divergingSqrt as scaleDivergingSqrt,
  divergingSymlog as scaleDivergingSymlog,
  identity3 as scaleIdentity,
  implicit as scaleImplicit,
  linear3 as scaleLinear,
  log2 as scaleLog,
  ordinal as scaleOrdinal,
  point as scalePoint,
  pow2 as scalePow,
  quantile as scaleQuantile,
  quantize as scaleQuantize,
  sequential as scaleSequential,
  sequentialLog as scaleSequentialLog,
  sequentialPow as scaleSequentialPow,
  sequentialQuantile as scaleSequentialQuantile,
  sequentialSqrt as scaleSequentialSqrt,
  sequentialSymlog as scaleSequentialSymlog,
  sqrt2 as scaleSqrt,
  symlog as scaleSymlog,
  threshold as scaleThreshold,
  time_default as scaleTime,
  utcTime_default as scaleUtc,
  scan_default as scan,
  Accent_default as schemeAccent,
  scheme22 as schemeBlues,
  scheme as schemeBrBG,
  scheme10 as schemeBuGn,
  scheme11 as schemeBuPu,
  category10_default as schemeCategory10,
  Dark2_default as schemeDark2,
  scheme12 as schemeGnBu,
  scheme23 as schemeGreens,
  scheme24 as schemeGreys,
  scheme13 as schemeOrRd,
  scheme27 as schemeOranges,
  scheme2 as schemePRGn,
  Paired_default as schemePaired,
  Pastel1_default as schemePastel1,
  Pastel2_default as schemePastel2,
  scheme3 as schemePiYG,
  scheme15 as schemePuBu,
  scheme14 as schemePuBuGn,
  scheme4 as schemePuOr,
  scheme16 as schemePuRd,
  scheme25 as schemePurples,
  scheme5 as schemeRdBu,
  scheme6 as schemeRdGy,
  scheme17 as schemeRdPu,
  scheme7 as schemeRdYlBu,
  scheme8 as schemeRdYlGn,
  scheme26 as schemeReds,
  Set1_default as schemeSet1,
  Set2_default as schemeSet2,
  Set3_default as schemeSet3,
  scheme9 as schemeSpectral,
  Tableau10_default as schemeTableau10,
  scheme19 as schemeYlGn,
  scheme18 as schemeYlGnBu,
  scheme20 as schemeYlOrBr,
  scheme21 as schemeYlOrRd,
  select_default2 as select,
  selectAll_default2 as selectAll,
  selection_default as selection,
  selector_default as selector,
  selectorAll_default as selectorAll,
  set_default as set,
  shuffle_default as shuffle,
  stack_default as stack,
  diverging_default as stackOffsetDiverging,
  expand_default as stackOffsetExpand,
  none_default as stackOffsetNone,
  silhouette_default as stackOffsetSilhouette,
  wiggle_default as stackOffsetWiggle,
  appearance_default as stackOrderAppearance,
  ascending_default3 as stackOrderAscending,
  descending_default3 as stackOrderDescending,
  insideOut_default as stackOrderInsideOut,
  none_default2 as stackOrderNone,
  reverse_default as stackOrderReverse,
  stratify_default as stratify,
  styleValue as style,
  sum_default as sum,
  svg,
  symbol_default as symbol,
  circle_default3 as symbolCircle,
  cross_default3 as symbolCross,
  diamond_default as symbolDiamond,
  square_default as symbolSquare,
  star_default as symbolStar,
  triangle_default as symbolTriangle,
  wye_default as symbolWye,
  symbols,
  text_default3 as text,
  freedmanDiaconis_default as thresholdFreedmanDiaconis,
  scott_default as thresholdScott,
  sturges_default as thresholdSturges,
  tickFormat_default as tickFormat,
  tickIncrement,
  tickStep,
  ticks_default as ticks,
  day_default as timeDay,
  days as timeDays,
  timeFormat,
  defaultLocale2 as timeFormatDefaultLocale,
  formatLocale as timeFormatLocale,
  friday as timeFriday,
  fridays as timeFridays,
  hour_default as timeHour,
  hours as timeHours,
  newInterval as timeInterval,
  millisecond_default as timeMillisecond,
  milliseconds as timeMilliseconds,
  minute_default as timeMinute,
  minutes as timeMinutes,
  monday as timeMonday,
  mondays as timeMondays,
  month_default as timeMonth,
  months as timeMonths,
  timeParse,
  saturday as timeSaturday,
  saturdays as timeSaturdays,
  second_default as timeSecond,
  seconds as timeSeconds,
  sunday as timeSunday,
  sundays as timeSundays,
  thursday as timeThursday,
  thursdays as timeThursdays,
  tuesday as timeTuesday,
  tuesdays as timeTuesdays,
  wednesday as timeWednesday,
  wednesdays as timeWednesdays,
  sunday as timeWeek,
  sundays as timeWeeks,
  year_default as timeYear,
  years as timeYears,
  timeout_default as timeout,
  timer,
  timerFlush,
  touch_default as touch,
  touches_default as touches,
  transition,
  transpose_default as transpose,
  tree_default as tree,
  treemap_default as treemap,
  binary_default as treemapBinary,
  dice_default as treemapDice,
  resquarify_default as treemapResquarify,
  slice_default as treemapSlice,
  sliceDice_default as treemapSliceDice,
  squarify_default as treemapSquarify,
  tsv2 as tsv,
  tsvFormat,
  tsvFormatBody,
  tsvFormatRow,
  tsvFormatRows,
  tsvFormatValue,
  tsvParse,
  tsvParseRows,
  utcDay_default as utcDay,
  utcDays,
  utcFormat,
  utcFriday,
  utcFridays,
  utcHour_default as utcHour,
  utcHours,
  millisecond_default as utcMillisecond,
  milliseconds as utcMilliseconds,
  utcMinute_default as utcMinute,
  utcMinutes,
  utcMonday,
  utcMondays,
  utcMonth_default as utcMonth,
  utcMonths,
  utcParse,
  utcSaturday,
  utcSaturdays,
  second_default as utcSecond,
  seconds as utcSeconds,
  utcSunday,
  utcSundays,
  utcThursday,
  utcThursdays,
  utcTuesday,
  utcTuesdays,
  utcWednesday,
  utcWednesdays,
  utcSunday as utcWeek,
  utcSundays as utcWeeks,
  utcYear_default as utcYear,
  utcYears,
  values_default as values,
  variance_default as variance,
  version,
  voronoi_default as voronoi,
  window_default as window,
  xml_default as xml,
  zip_default as zip,
  zoom_default2 as zoom,
  identity4 as zoomIdentity,
  transform as zoomTransform
};
