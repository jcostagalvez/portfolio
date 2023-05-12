function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ((useActualHostSelector ? ":host {display: block;list-style: none;}" : hostSelector + " {display: block;list-style: none;}"));
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];