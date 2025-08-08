const {city}=require("./object");
test("test the City object values", () => {
  expect(city).toBeDefined();
  expect(city.name).toBe("New York");
  expect(city.population).toBe(8419600);
  expect(city.country).toBe("USA");
});
test("test the object matchers", () => {
  const italianCity = {
    name: "Rome",
    population: 2873000,
    country: "Italy"
  };
  italianCity["continent"] = "Europe";
  expect(italianCity).toMatchObject({
    name: "Rome",
    population: 2873000,
    country: "Italy"
  });
  expect(italianCity).toHaveProperty("continent", "Europe");
});