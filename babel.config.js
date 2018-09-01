module.exports = {
  presets: [["@babel/env"], ["@babel/preset-react"]],
  plugins: [
    ["@babel/plugin-proposal-optional-chaining"],
    ["@babel/plugin-proposal-class-properties"],
    [
      "module-resolver",
      {
        root: ["./src"]
      }
    ]
  ]
};
