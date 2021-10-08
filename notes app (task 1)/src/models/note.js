export default class Note {
    constructor(props) {
        this.name = props.name
        this.content = props.content
        this.created = new Date()
        
    }
}