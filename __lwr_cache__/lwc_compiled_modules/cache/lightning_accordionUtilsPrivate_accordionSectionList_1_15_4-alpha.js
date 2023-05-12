import { registerDecorators as _registerDecorators } from "lwc";
import { getSectionByName, getSortedSections, getNextSection } from './accordionUtils';
export class AccordionSectionList {
  constructor() {
    this.privateSectionBag = {};
    this.privateSortedSections = [];
  }
  add(accordionSectionInterface) {
    this.privateSectionBag[accordionSectionInterface.id] = accordionSectionInterface;
    this.privateSortedSections = getSortedSections(this.privateSectionBag);
  }
  get sections() {
    return this.privateSortedSections;
  }
  remove(sectionId) {
    delete this.privateSectionBag[sectionId];
    this.privateSortedSections = getSortedSections(this.privateSectionBag);
  }
  getSectionById(sectionId) {
    return this.privateSectionBag[sectionId];
  }
  get openSections() {
    return this.privateSortedSections.filter(section => section.isOpen());
  }
  getSectionByName(name) {
    return getSectionByName(this.privateSortedSections, name);
  }
  getNextSectionTo(sectionId) {
    return getNextSection(this.privateSortedSections, this.privateSectionBag[sectionId], false);
  }
  getPrevSectionTo(sectionId) {
    return getNextSection(this.privateSortedSections, this.privateSectionBag[sectionId], true);
  }
}
_registerDecorators(AccordionSectionList, {
  fields: ["privateSectionBag", "privateSortedSections"]
});