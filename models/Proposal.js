const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const proposalSchema = new Schema({
    title: String,
    description: String,
    owner: { type: Schema.Types.ObjectId, ref: 'User'},
    attendees: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    
});

const Event = mongoose.model('Proposal', proposalSchema);

module.exports = Event;