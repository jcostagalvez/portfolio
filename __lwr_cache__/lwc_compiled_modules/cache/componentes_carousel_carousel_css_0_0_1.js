function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ".scene" + shadowSelector + " {height: inherit;width: inherit;display: flex;justify-content: center;align-items: center;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];