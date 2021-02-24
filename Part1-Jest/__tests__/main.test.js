const func = require('../assets/scripts/main');
describe("testing formatVolumeIconPath function",  ()=>{
    test("testing iconLevel 3", ()=>{
        expect(func(67)).toMatch("./assets/media/icons/volume-level-3.svg");
        expect(func(67)).toContain("volume-level-3");
    })
    test("testing iconLevel 2", ()=>{
        expect(func(34)).toMatch("./assets/media/icons/volume-level-2.svg");
        expect(func(34)).toContain("volume-level-2");
    })
    test("testing iconLevel 1", ()=>{
        expect(func(1)).toMatch("./assets/media/icons/volume-level-1.svg");
        expect(func(1)).toContain("volume-level-1");
    })
    test("testing iconLevel 0", ()=>{
        expect(func(0)).toMatch("./assets/media/icons/volume-level-0.svg");
        expect(func(0)).toContain("volume-level-0");
    })
});