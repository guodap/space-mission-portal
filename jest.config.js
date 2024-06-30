export default {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src/tests"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/", "\\.css$"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/fileMock.js",
    "\\.(png)$": "<rootDir>/fileMock.js",
  },
};
