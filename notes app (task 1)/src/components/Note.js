export default class {
  constructor(category, content, name = "default name") {
    this.id = Math.random()*Date.now()
    this.name = name;
    this.category = category;
    this.content = content;
    this.created = new Date();
    this.archived = false;
  }

  dates() {
    return this.content.match(/\d{1,2}\/\d{1,2}\/\d{4}/g);
  }

  toArray() {
    return [this.name, this.created, this.category, this.content, this.dates()];
  }

  toElement(additional = []) {
    const row = document.createElement("tr");
    this.toArray().forEach((el) => {
      const td = document.createElement("td");
      td.innerHTML = el;
      row.append(td);
    });
    if (additional.length > 0) {
      const additionalTd = document.createElement('td');
      additional.forEach((el) => additionalTd.append(el));
      row.append(additionalTd);
    }
    return row;
  }
}
