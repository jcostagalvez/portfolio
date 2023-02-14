import _tmpl from "./introduccion.html";
import { registerComponent as _registerComponent, LightningElement } from "lwc";
import { gsap } from "gsap";
class introduccion extends LightningElement {
  handleClick(event) {
    this.introduccionOut().then(data => {
      if (data == 'Success') {
        const buttonclick = new CustomEvent('buttonclick');
        this.dispatchEvent(buttonclick, {
          bubbles: true,
          composed: true
        });
      }
      ;
    });
  }
  introduccionOut() {
    const isDone = new Promise((resolve, reject) => {
      const screenHeigth = window.innerHeight;
      const blueScreen = this.template.querySelector('.introduccion_container');
      const imagen = this.template.querySelector('.imagen');
      const info = this.template.querySelector('.info_container');
      const tl = gsap.timeline();
      const imagenOut = gsap.to(imagen, {
        duration: 3,
        opacity: 0
      }, 0);
      const infoOut = gsap.to(info, {
        duration: 3,
        opacity: 0
      });
      const blueScreenOut = gsap.to(blueScreen, {
        duration: 2,
        marginTop: `${-screenHeigth}px`,
        onComplete: () => {
          resolve('Success');
        }
      });
      tl.add([infoOut, imagenOut]);
      tl.add(blueScreenOut, ">");
    });
    return isDone;
  }
  /*LWC compiler v2.17.0*/
}
export default _registerComponent(introduccion, {
  tmpl: _tmpl
});