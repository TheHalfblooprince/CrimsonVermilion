const Router = (server) => {
  // home route with a get method and a handler.

  server.get("/v1", (req, res) => {
    try {
      res.status(200).json({
        status: "success",
        data: [],
        message: "Welcome to Our API Homepage",
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }
  });
};

export default Router;
