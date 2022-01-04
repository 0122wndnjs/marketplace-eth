

const CourseMarketplace = artifacts.require("CourseMarketplace")

// Mocha - testing framework
// Chai - assertion JS library

contract("CourseMarketplace", accounts => {

    let _contract = null
    let contractOwner = null
    let buyer = null

    before(async () => {
        
        _contract = await CourseMarketplace.deployed()
        contractOwner = accounts[0]
        buyer = accounts[1]

        console.log(_contract)
        console.log(contractOwner)
        console.log(buyer)
    })

    describe("Purchase the new course", () => {
        it("should resolve into true value", () => {
            assert(true, "value is NOT true")
        })
    })
})