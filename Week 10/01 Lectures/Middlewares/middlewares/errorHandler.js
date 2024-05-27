export const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  return res.status(418).json({ Error: err.message });
};
