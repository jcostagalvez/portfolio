function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return "@media (max-width: 480px){.imagen_container" + shadowSelector + "{width: 150px;height: 150px;}}@media (min-width: 480px){.imagen_container" + shadowSelector + "{width: 500px;height: 500px;}}.imagen_container" + shadowSelector + "{background-color: azure;background-image: url(\"../../../assets/utils/portada.jpeg\");border-radius: 57%;background-size: cover;background-position: 30%;box-shadow: rgba(150, 148, 144, 0.269) 0px 5px 15px;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];