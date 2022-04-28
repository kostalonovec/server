odpovedi = [{
"serial_num" : 789456,
"vote" : "B",
}, {
"serial_num" : 751234,
"vote" : "A",
}]

def on_received_value(name, value):
    if name == "answer":
        serial_num = radio.received_packet(RadioPacketProperty.SERIAL_NUMBER)
        radio.send_value("odeslano", serial_num)
        String.from_char_code(value)
        for i in odpovedi:
            if serial_num == i["serial_num"]:
                i

radio.on_received_value(on_received_value)


radio.set_group(80)