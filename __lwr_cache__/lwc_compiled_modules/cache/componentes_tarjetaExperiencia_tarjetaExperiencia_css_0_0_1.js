function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ".title_container" + shadowSelector + "{display: flex;margin-bottom: 3%;}.title-logo" + shadowSelector + " {width:10%;height: 10%;border-radius: 50%;}.title_text" + shadowSelector + "{width: 70%;display: flex;align-items: center;font-size: 200%;font-weight: bold;}.title_text" + shadowSelector + " span" + shadowSelector + "{color: orange;margin-left: 1%;}.body-proyectos-container" + shadowSelector + "{margin-left: 1.2%;}.footer-container" + shadowSelector + "{display:flex;justify-content: center;width:100%;border-top: 1px solid orange;margin-top: 3%;margin-bottom: 1%;}.footer-badges" + shadowSelector + "{margin-top: 1%;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];