function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ".habilidades_Container" + shadowSelector + "{width: 100%;display: flex;margin-top: 4%;justify-content: space-around;}.componentePopUp" + shadowSelector + "{opacity: 0.8;}.habilidad_img" + shadowSelector + " {width: 200px;height: 200px;object-fit: contain;cursor: pointer;}.habilidad-function" + shadowSelector + "{width: 100%;height: 100%;}.habilidad-cards" + shadowSelector + "{width: 70%;display: grid;grid-template-rows: 50% 50%;grid-template-columns: 33% 33% 33%;}.habilidad-flex" + shadowSelector + "{display: flex;}.habilidades-container" + shadowSelector + "{height: 80%;width: 100%;display: flex;flex-direction: column;align-items: center;justify-content: center;}h1" + shadowSelector + "{color: #dd7a01;font-weight: bold;font-size: 40px;}.habilidad-container" + shadowSelector + "{display: flex;align-items: center;justify-content: center;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];