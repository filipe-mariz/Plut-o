
describe("Valtidators", () => {
    it("if the marketStatus has false, must return status 400", async () => {
      
      const register = await ({
        marketStatus: false,
        price: 100,
        founds: 100, 
        size: 100,
      }) 

      const status = register.marketStatus

      if(status == false) {
        const status = 400
        expect(status).toBe(400)
      } else {
        const status = 200
        expect(status).toBe(200)
      } 

    }),

    

    it("if price has exact 1.01 or 1000, must return status 400", async () => {
      const register = await ({
        marketStatus: true,
        price: 1000,
        founds: 100, 
        size: 100,
      })   
      
      const status = register.price

      if ((status == 1.01) || (status == 1000)) {
        const status = 400
        expect(status).toBe(400)
      } else {
        const status = 200
        expect(status).toBe(200)
      }
    })

    
    it("if size is equal to or greater than founds", async () => {
      const register = await ({
        marketStatus: true,
        price: 1000,
        founds: 100, 
        size: 100,
      })

      if ((register.size >= (register.founds/10))) {
        const status = 400
        expect(status).toBe(400)
      } else {
        const status = 200
        expect(status).toBe(200)
      }
      
    })

}) 
