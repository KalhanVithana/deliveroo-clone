import mockAPI from "../utils/api";

describe("Mock API", () => {
  it("should fetch food menu data", async () => {
    const data = await mockAPI.fetchFoodMenuData();
    expect(Array.isArray(data)).toBe(true);
  });

  it("should fetch platters data", async () => {
    const data = await mockAPI.fetchPlattersData();
    expect(Array.isArray(data)).toBe(true);
  });

  it("should fetch create your own data", async () => {
    const data = await mockAPI.fetchCreateyourownData();
    expect(Array.isArray(data)).toBe(true);
  });

  it("should fetch salads data", async () => {
    const data = await mockAPI.fetchSaladsData();
    expect(Array.isArray(data)).toBe(true);
  });

  it("should fetch gym food data", async () => {
    const data = await mockAPI.fetchGymFoodData();
    expect(Array.isArray(data)).toBe(true);
  });
  describe("User Authentication", () => {
    it("should authenticate user", async () => {
      // Arrange
      const userData = {
        email: "abc@gmail.com",
        password: "122",
      };
      try {
        let isAuthUser = await mockAPI.userLogin(userData);
        console.log("isAuth:", isAuthUser);
        expect(isAuthUser).toBe(false);
      } catch (error) {
        console.error("Error occurred during authentication:", error);
      }
    });
  });
});
