export default class {
  constructor(category, content, name = 'default name') {
    this.name = name
    this.category = category;
    this.content = content;
    this.created = new Date();
    this.archived = false;
  }

  datesMentioned() {
    return this.content.match(/\d{1,2}\/\d{1,2}\/\d{4}/g);
  }

  toArray() {
    return [this.name, this.created, this.category, this.content, this.datesMentioned()];
  }

  archive() {
    this.archived = !this.archived;
  }
}
