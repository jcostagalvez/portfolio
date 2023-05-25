function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ".circles_container" + shadowSelector + "{display: flex;flex-direction: row;align-items: center;justify-content: center;}.unselected" + shadowSelector + "{background-color: none;border-radius: 50%;border: 2px solid orange;width: 20px;height: 20px;margin-left: 3%;cursor: pointer ;}.selected" + shadowSelector + "{border-radius: 50%;background-color: orange;border: 2px solid orange;width: 20px;height: 20px;margin-left: 3%;cursor: pointer ;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];