function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ".habilidades_Container" + shadowSelector + "{width: 100%;display: flex;margin-top: 4%;justify-content: space-around;}.componentePopUp" + shadowSelector + "{opacity: 0.8;}.habilidad_img" + shadowSelector + " {width: 200px;height: 200px;object-fit: contain;cursor: pointer;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];