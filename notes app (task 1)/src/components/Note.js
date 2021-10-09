export default class {
  constructor(
    name,
    category,
    content,
    beingEdited = false,
    created = new Date().toISOString().substring(0, 10)
  ) {
    this.id = Math.floor(Math.random() * Date.now());
    this.name = name;
    this.category = category;
    this.content = content;
    this.created = created;
    this.archived = false;
    this.beingEdited = beingEdited;
  }

  dates() {
    return this.content.match(/\d{1,2}\/\d{1,2}\/\d{4}/g);
  }

  archive() {
    this.archived = true;
  }

  unarchive() {
    this.archived = false
  }

  toArray() {
    return [this.name, this.category, this.content, this.created, this.dates()];
  }

  toElement(additional = []) {
    const row = document.createElement("tr");
    this.toArray().forEach((el, idx, arr) => {
      if (idx < 3 && this.beingEdited) {
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.value = el;
        input.setAttribute("class", `input.${this.id}`);
        row.append(input);
      } else {
        const td = document.createElement("td");
        td.innerHTML = el;
        row.append(td);
      }
    });
    if (additional.length > 0) {
      const additionalTd = document.createElement("td");
      additional.forEach((el) => additionalTd.append(el));
      row.append(additionalTd);
    }
    return row;
  }
}
