function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return "@media (max-width: 480px){button" + shadowSelector + "{width: fit-content;height: fit-content;}}@media (min-width: 480px){button" + shadowSelector + "{height: 3rem;width: 16rem;}}button" + shadowSelector + "{color: #FFFFFF;cursor: pointer;flex-shrink: 0;text-align: center;text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;transition: all .5s;touch-action: manipulation;border-radius: 8px;border: 10px solid;border-width: 5px;background-color: #dd7a01;border-color: #dd7a01;transition: all 1s ease;}.negative" + shadowSelector + "{background-color: transparent;}button:hover" + shadowSelector + " {box-shadow: #dd7a01 0 1px 30px;}.standard:hover" + shadowSelector + "{background-color: transparent;}.negative:hover" + shadowSelector + "{background-color: #dd7a01;}button:active" + shadowSelector + "{background-color: #d2750a;box-shadow: #dd7a01 0 1px 30px;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];