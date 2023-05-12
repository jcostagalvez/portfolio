function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ((useActualHostSelector ? ":host {display: list-item;}" : hostSelector + " {display: list-item;}"));
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];