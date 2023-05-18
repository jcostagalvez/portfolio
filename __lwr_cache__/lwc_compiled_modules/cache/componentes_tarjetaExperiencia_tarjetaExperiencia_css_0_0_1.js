function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ".title_container" + shadowSelector + "{width: 100%;display: flex;}.title-logo" + shadowSelector + " {width:10%;height: 10%;border-radius: 50%;}.title_text" + shadowSelector + " span" + shadowSelector + "{margin-right: 2%;}.title_text" + shadowSelector + "{width: 100%;display: flex;align-items: center;justify-content: space-between;font-size: 200%;font-weight: bold;}.title_text" + shadowSelector + " span" + shadowSelector + "{color: orange;margin-left: 1%;}.body-proyectos-container" + shadowSelector + " .body-proyectos" + shadowSelector + "{text-transform: initial;}.body-proyectos-container" + shadowSelector + "{margin: 2%;}.footer-container" + shadowSelector + "{display:flex;justify-content: center;width:100%;border-top: 1px solid orange;margin-top: 3%;margin-bottom: 1%;}.footer-badges" + shadowSelector + "{margin-top: 1%;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];