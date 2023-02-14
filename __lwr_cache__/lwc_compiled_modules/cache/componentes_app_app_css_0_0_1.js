function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return "main" + shadowSelector + "{width: 100vw;height: 100vh;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];