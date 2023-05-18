function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ".scene" + shadowSelector + " {width: 100%;}.container-card" + shadowSelector + "{width: 100%;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];