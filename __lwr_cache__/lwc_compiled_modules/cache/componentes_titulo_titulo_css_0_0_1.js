function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return "@media (max-width: 480px){h1" + shadowSelector + ",h2" + shadowSelector + "{font-size: 200%;}h1" + shadowSelector + "{margin-bottom: 10%;}}@media (min-width: 480px){h1" + shadowSelector + ",h2" + shadowSelector + "{font-size: 4rem;}h1" + shadowSelector + "{margin-bottom: 10%;}}h1" + shadowSelector + ",h2" + shadowSelector + "{color:white;text-align: center;font-family: ITC Avant Garde!important;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];