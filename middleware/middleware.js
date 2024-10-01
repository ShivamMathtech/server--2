const mcbfn1 = (req, rea, next) => {
  next();
};
const mcbfn2 = function (req, res, next) {
  req.query.name = "Rajat";
  next();
};
module.exports = { mcbfn1, mcbfn2 };
