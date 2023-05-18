function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ".arrow-container" + shadowSelector + "{display: flex;}.arrow" + shadowSelector + " {position: relative;width:40px;height:40px;border-top: 12px solid #dd7a01;border-left: 12px solid #dd7a01;transform: rotate(-45deg);border-top-left-radius: 5%;cursor: pointer;}.arrow-container:hover" + shadowSelector + "{animation: arrow-efect" + (shadowSelector ? ('-' + shadowSelector.substring(1, shadowSelector.length - 1)) : '') + " 2s infinite;}.arrow:nth-child(1)" + shadowSelector + "{animation-delay: -0.4s;}.arrow:nth-child(2)" + shadowSelector + "{animation-delay: -0.2s;}@keyframes arrow-efect" + (shadowSelector ? ('-' + shadowSelector.substring(1, shadowSelector.length - 1)) : '') + " {0%{transform: scale(1);opacity: 0.5;}100%{transform: scale(1.5);opacity: 1;}}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];