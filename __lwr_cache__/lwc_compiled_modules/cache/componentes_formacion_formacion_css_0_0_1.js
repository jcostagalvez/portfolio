function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ".container_accordion" + shadowSelector + "{width: 100%;display: flex;margin-top: 2%;justify-content: center;}lightning-card" + shadowSelector + " {margin: 2%;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];