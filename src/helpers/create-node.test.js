const create_node = require("./create-node")
// @ponicode
describe("create_node.createNode", () => {
    test("0", () => {
        let param3 = [["George", "George", "Edmond"], ["Pierre Edouard", "Pierre Edouard", "Jean-Philippe"], ["Michael", "Edmond", "Pierre Edouard"]]
        let callFunction = () => {
            create_node.createNode({ key: "elio@example.com" }, { key: "elio@example.com" }, param3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param3 = [["George", "Michael", "George"], ["Jean-Philippe", "Jean-Philippe", "Pierre Edouard"], ["Jean-Philippe", "Jean-Philippe", "Edmond"]]
        let callFunction = () => {
            create_node.createNode({ key: "Dillenberg" }, { key: "elio@example.com" }, param3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param3 = [["Anas", "Jean-Philippe", "Michael"], ["George", "Jean-Philippe", "Michael"], ["George", "Jean-Philippe", "Anas"]]
        let callFunction = () => {
            create_node.createNode({ key: "Elio" }, { key: "elio@example.com" }, param3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param3 = [["Edmond", "Edmond", "Anas"], ["George", "Michael", "Jean-Philippe"], ["George", "Edmond", "Jean-Philippe"]]
        let callFunction = () => {
            create_node.createNode({ key: "Dillenberg" }, { key: "Elio" }, param3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param3 = [["Pierre Edouard", "Edmond", "Edmond"], ["Anas", "Edmond", "Pierre Edouard"], ["Jean-Philippe", "Jean-Philippe", "George"]]
        let callFunction = () => {
            create_node.createNode({ key: "Elio" }, { key: "Elio" }, param3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            create_node.createNode(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
