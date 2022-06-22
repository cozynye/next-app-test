export default (req, res) => {
  console.log("login.js!");
  //   res.statusCode = 200;
  //   res.json({ name: "Jone Doe" });
  if ((req.method = "POST")) {
    console.log("login.js");

    //max-age 3600초 1시간
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure");
    res.statusCode = 200;
    res.json({ name: "asdf" });
    console.log(res);
  }
};
