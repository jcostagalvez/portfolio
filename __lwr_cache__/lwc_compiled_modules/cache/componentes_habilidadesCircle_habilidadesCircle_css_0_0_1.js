function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ".circle-container" + shadowSelector + "{margin-top: 2%;margin-bottom: 4%;width: 100%;height: 100%;display: flex;flex-direction: column;align-items: center;justify-content: center;}.circle-front" + shadowSelector + "{stroke: #dd7a01;stroke-width: 5%;cy:50%;}.circle-svg" + shadowSelector + " {width: 50%;height: 50%;}.circle-background" + shadowSelector + "{stroke: rgba(255, 255, 255, 0.523);stroke-width: 5%;cy:50%;}.circle-lenguaje" + shadowSelector + "{fill: blue;x:0%;y:50%;}h1" + shadowSelector + "{display: flex;justify-content: center;align-items: flex-start;color: cadetblue;font-size: 200%;font-weight: bold;height: 10%;}h2" + shadowSelector + "{display: flex;justify-content: center;align-items: flex-start;color: cadetblue;font-size: 200%;font-weight: bold;height: 10%;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];