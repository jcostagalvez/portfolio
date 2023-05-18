function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return "@media (min-width: 480px){.cards-container" + shadowSelector + "{width: 100%;}}@media (max-width: 480px){.cards-container" + shadowSelector + "{width: 100%;height: 100%;}}.experiencia-container" + shadowSelector + "{width: 100%;height: 90%;display: flex;align-items: center;justify-content: center;}.cards-container" + shadowSelector + "{display: flex;align-items: center;justify-content: center;}.card-pagination-front" + shadowSelector + "{width: 10%;display: flex;align-items: center;justify-content: flex-end;transform: rotate(180deg);}.card-pagination-back" + shadowSelector + "{width: 10%;display: flex;align-items: center;justify-content: flex-end;}.card-carousel" + shadowSelector + "{width: 90%;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];