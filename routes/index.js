const express = require("express");
const Blog = require("../models/blog");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");

router.get("/", (req, res) => res.render("home"));
router.get("/register", forwardAuthenticated, (req, res) =>
  res.render("register")
);

router.get("/login", forwardAuthenticated, (req, res) => res.render("login"));

router.get("/dashboard", ensureAuthenticated, (req, res) =>
  
      res.render("dashboard", {

        title: "Dashboard",

        user: req.user,
      })
);

// router.get("/create",ensureAuthenticated, (req, res) => {
//   res.render('dashboard', { user: req.user,title: 'Create a new blog' });
// } ) ;


// router.post("/create",ensureAuthenticated, (req, res) => {
//   const blog = new Blog(req.body);
//   blog.save()
//   .then((result) => {
//           res.render("dashboard");
//         })
//   .catch((err) => {
//           console.log(err);
//           res.render("dashboard");
//         });
//     // .then(result => {
//     //   res.redirect('/dashboard');
//     // })
//     // .catch(err => {
//     //   console.log(err);
//     // })
//   });

// router.get("/:id", ensureAuthenticated, (req, res) => {
//   const id = req.params.id;
//   Blog.findById(id)
//     .then((result) => {
//       res.render("blogDetails", {
//         user: req.user,
//         blog: result,
//         title: "Blog Details",
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.render("dashboard", { title: "Blog not found", user: req.user });
//     });
// });
// router.delete("/:id", ensureAuthenticated, (req, res) => {
//   const id = req.params.id;
//   Blog.findByIdAndDelete(id)
//     .then((result) => {
//       res.json({ redirect: "/dashboard" });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
router.get("/attendance", ensureAuthenticated, (req, res) =>
  res.render("attendance", {
    user: req.user,
    title: "Attendance",
  })
);
router.get("/createassign", ensureAuthenticated, (req, res) =>
  res.render("createAssign", {
    user: req.user,
    title: "Create Assignment",
  })
);
router.get("/ReceivedAssign", ensureAuthenticated, (req, res) =>
  res.render("ReceivedAssign", {
    user: req.user,
    title: "Receivec Assignments",
  })
);
router.get("/scores", ensureAuthenticated, (req, res) =>
  res.render("scores", {
    user: req.user,
    title: "Scores",
  })
);
router.get("/syllaybus", ensureAuthenticated, (req, res) =>
  res.render("syllaybus", {
    user: req.user,
    title: "Syllaybus",
  })
);
router.get("/timetable", ensureAuthenticated, (req, res) =>
  res.render("timetable", {
    user: req.user,
    title: "Timetable",
  })
);
router.get("/content", ensureAuthenticated, (req, res) =>
  res.render("content", {
    user: req.user,
    title: "Learning Contentss",
  })
);
router.get("/details", ensureAuthenticated, (req, res) =>
  res.render("details", {
    user: req.user,
    title: "Personal Details",
  })
);

module.exports = router;
