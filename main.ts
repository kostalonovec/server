let odpovedi = [ {
    "serial_num" : 789456,
    "vote" : "B",
}
, {
    "serial_num" : 751234,
    "vote" : "A",
}
]
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    let serial_num: number;
    if (name == "answer") {
        serial_num = radio.receivedPacket(RadioPacketProperty.SerialNumber)
        radio.sendValue("odeslano", serial_num)
        String.fromCharCode(value)
        for (let i of odpovedi) {
            if (serial_num == i["serial_num"]) {
                i
            }
            
        }
    }
    
})
radio.setGroup(80)
