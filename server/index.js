/* ---- (Geographical distribution of the companies) ---- */
app.get("/home/distribution", routes.getCompDistribution);

app.listen(8081, () => {
    console.log(`Server listening on PORT 8081`);
  });