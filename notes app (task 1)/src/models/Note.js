export default class {
  constructor(category, content) {
    this.id = Date.now();
    this.category = category;
    this.content = content;
    this.created = new Date();
    this.archived = false;
  }

  datesMentioned() {
    return this.content.match(/\d{1,2}\/\d{1,2}\/\d{4}/);
  }

  toArray() {
    return [this.created, this.category, this.content, this.datesMentioned()];
  }
}
