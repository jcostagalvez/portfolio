function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ".tab-container" + shadowSelector + "{width: 100%;height: 6%;background-color: white;display: flex;justify-content: space-around;align-items: end;}.tab_container" + shadowSelector + "{display: flex;align-items: start;height: 50%;transition: border-bottom 0.1s ease;cursor: pointer;}.tab_container:hover" + shadowSelector + "{border-bottom: 2px solid #dd7a01;}.tab_container:focus" + shadowSelector + "{border-bottom: 3px solid #dd7a01;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];