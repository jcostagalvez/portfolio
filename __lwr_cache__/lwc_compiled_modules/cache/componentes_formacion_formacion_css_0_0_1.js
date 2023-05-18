function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ".container_accordion" + shadowSelector + "{width: 100%;display: flex;flex-direction: column;align-items: center;margin-top: 2%;justify-content: center;}.section_container" + shadowSelector + "{width: 100%;display: flex;flex-direction: column;align-items: center;justify-content: space-between;}.accordition_title" + shadowSelector + "{background-color: none;background: none;border: none;font-size: 20px;text-align: center;cursor: pointer;margin-top: 5%;text-transform: uppercase;color: #dd7a01;}.accordition_title:hover" + shadowSelector + "{border-bottom: 2px solid white;}.accordition_title:focus" + shadowSelector + "{border-bottom: 2px solid white;}lightning-accordion-section" + shadowSelector + "{color:orange}.card_accordion" + shadowSelector + "{width: 50%;margin: 1%;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];