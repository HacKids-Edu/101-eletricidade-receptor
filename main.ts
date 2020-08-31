radio.onReceivedNumber(function (receivedNumber) {
    led.plot(0, 0)
    serial.writeValue("Motor", receivedNumber)
})
basic.showString("Receptor")
radio.setGroup(30)
basic.forever(function () {
	
})
