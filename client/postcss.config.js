// module.exports = {
//   plugins: [require("autoprefixer")({ grid: true, browsers: [">1%"] })]
// };


module.exports = {
  plugins: [require("autoprefixer")({ grid: true, flexbox: true, browsers: [
    "> 0.01%",
    "last 7 versions",
   "Android >= 4", 
   "Firefox >= 20", 
   "iOS >= 8"] })]
};

