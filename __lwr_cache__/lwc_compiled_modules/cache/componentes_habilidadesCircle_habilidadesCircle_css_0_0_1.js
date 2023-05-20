function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ".circle-container" + shadowSelector + "{width: 100%;height: 100%;display: flex;flex-direction: column;align-items: center;justify-content: center;}.circle-front" + shadowSelector + "{stroke: #dd7a01;stroke-width: 5%;cx:50%;cy:50%;}.circle-svg" + shadowSelector + " {width: 25%;height: 25%;}.circle-background" + shadowSelector + "{stroke: rgba(255, 255, 255, 0.523);stroke-width: 5%;cx:50%;cy:50%;}.circle-lenguaje" + shadowSelector + "{fill: blue;x:0%;y:50%;}h1" + shadowSelector + "{display: flex;margin-top: 2%;justify-content: center;align-items: flex-start;color: cadetblue;font-size: 200%;font-weight: bold;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];