function testFunction() {
    try {
        myFunction()
    } catch(e) {
        console.error(e.stack)
    }
}