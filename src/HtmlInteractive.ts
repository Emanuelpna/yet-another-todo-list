interface Attributes {
  name: string,
  value: string,
}

export default class HtmlInteractive {

  private isValid = true;

  constructor(public elementTag: HTMLElement, public textContent: string) {
    this.elementTag.textContent = this.textContent;
  }

  public setElementClass(classNames: string[]) {
    this.elementTag.classList.add(...classNames)
  }

  public removeElementClass(classNames: string[]) {
    this.elementTag.classList.remove(...classNames)
  }

  public print(contentElement: HTMLElement) {
    this.elementTag?.appendChild(contentElement);
  }

  public resetContent() {
    this.elementTag.innerHTML = "";
  }

  public setAttributes(attributes: Attributes[]) {
    attributes.forEach((attribute) => {
      this.elementTag?.setAttribute(attribute.name, attribute.value)
    })
  }
}