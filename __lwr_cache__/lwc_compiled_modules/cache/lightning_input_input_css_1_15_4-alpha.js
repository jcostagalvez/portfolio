function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ((useActualHostSelector ? ":host {display: block;}" : hostSelector + " {display: block;}")) + (useNativeDirPseudoclass ? '' : '[dir="rtl"]') + " input[type=\"tel\"]" + (useNativeDirPseudoclass ? ':dir(rtl)' : '') + shadowSelector + " {direction: ltr;text-align: right;unicode-bidi: embed;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];