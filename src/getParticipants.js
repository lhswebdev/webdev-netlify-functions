const meetings = {
    meeting1: {
        participants: ['random']
    },
    meeting2: {
        participants: [
            'Ronak',
            'Frank',
            'Anne'
        ]
    }
}; 

exports.handler = async (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            participants: meetings.meeting2.participants
        })
    }
}