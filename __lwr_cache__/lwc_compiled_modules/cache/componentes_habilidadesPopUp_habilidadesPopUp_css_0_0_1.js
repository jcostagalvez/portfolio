function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ".close_button" + shadowSelector + "{color: orange;width: 20px;cursor: pointer;}.modal_button" + shadowSelector + "{width: 100%;display: flex;align-items: end;}.habilidad_img" + shadowSelector + " {width: 200px;height: 200px;object-fit: contain;cursor: pointer;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];