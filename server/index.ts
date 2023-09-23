import app from "./server";
const PORT = 3333; // from josh's branch
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
export default app;
