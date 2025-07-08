function testFunction() {
    try {
        globalThis.myFunction()
    } catch(e) {
        throw new Error(e.stack)
    }
}

globalThis.testFunction = testFunction