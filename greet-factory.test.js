describe("The Greetings Counter", function () {
    it("Should Be Able To Greet The Name Entered In English", function () {
        var greetings = TheGreetFunction()

        theNameSet((2))
        assert.equal(2, getTheName())
    })
})