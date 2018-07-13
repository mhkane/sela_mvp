const lo = require("lodash");

const Kdere =
    "https://s3.eu-west-2.amazonaws.com/selalabs/assets/images/k-dere.png",
  ImoBridge =
    "https://s3.eu-west-2.amazonaws.com/selalabs/assets/images/imo-bridge.png",
  PhRoad =
    "https://s3.eu-west-2.amazonaws.com/selalabs/assets/images/ph-road.png",
  Class = "https://s3.eu-west-2.amazonaws.com/selalabs/assets/images/class.png",
  EnuguRoad =
    "https://s3.eu-west-2.amazonaws.com/selalabs/assets/images/enugu-road.png",
  Ajegunle =
    "https://s3.eu-west-2.amazonaws.com/selalabs/assets/images/ajegunle.png",
  ellipse = "https://s3.eu-west-2.amazonaws.com/selalabs/assets/ellipse.png",
  si = "https://s3.eu-west-2.amazonaws.com/selalabs/assets/group.png";

let projects = [
  {
    id: 1,
    title: "K-Dere Oil Spill Clean-up",
    funder: "Sustainability International",
    start_date: new Date("December 17, 2017 03:24:00"),
    end_date: new Date("December 17, 2018 03:24:00"),
    status: "In Progress",
    description: `A bold initiative to restore hectares of farmland devastated by decades of oil spills`,
    percentage: 50,
    picture: Kdere,
    fundingTarget: "$10,000.00",
    amountRaised: "$5,000.00",
    funderPicture: si,
    general_status: "ongoing",
    photos: [Kdere],
    tasks: [
      {
        name: "Survey K-Dere for buried oil",
        task_created: new Date("March 17, 2018 03:24:00"),
        deadline: new Date("December 17, 2018 03:24:00"),
        contractor_assigned: "Dotun Longe",
        status: "in-progress",
        evaluation_submissions: [
          {
            name: "Task 1",
            type: "document",
            status: "good",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 2",
            type: "document",
            status: "bad",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 3",
            type: "video",
            status: "bad",
            src:
              "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_5mb.mp4"
          }
        ]
      },
      {
        name: "Cleanup Oil Spill",
        task_created: new Date("March 17, 2018 03:24:00"),
        deadline: new Date("December 17, 2018 03:24:00"),
        contractor_assigned: "Dotun Longe",
        status: "complete",
        evaluation_submissions: [
          {
            name: "Task 1",
            type: "document",
            status: "good",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 2",
            type: "document",
            status: "bad",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 3",
            type: "video",
            status: "bad",
            src:
              "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
          }
        ]
      },
      {
        name: "Sensitize Villagers On Waste Processing Methods",
        task_created: new Date("March 17, 2018 03:24:00"),
        deadline: new Date("December 17, 2018 03:24:00"),
        contractor_assigned: "Dotun Longe",
        status: "not-started",
        evaluation_submissions: [
          {
            name: "Task 1",
            type: "document",
            status: "good",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 2",
            type: "document",
            status: "bad",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 3",
            type: "video",
            status: "bad",
            src:
              "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Imo Bridge Construction",
    funder: "Berger and Sons Ltd.",
    start_date: new Date("December 17, 2017 03:24:00"),
    end_date: new Date("December 17, 2018 03:24:00"),
    status: "In Progress",
    description: `Construction of a bridge to connect the hinterlands for easier flow of commerce`,
    percentage: 90,
    picture: ImoBridge,
    fundingTarget: "$10,000.00",
    amountRaised: "$9,000.00",
    funderPicture: ellipse,
    general_status: "ongoing",
    photos: [ImoBridge],
    tasks: 3,
    tasksData: [
      {
        name: "Survey site for bridge construction",
        task_created: new Date("March 17, 2018 03:24:00"),
        deadline: new Date("December 17, 2018 03:24:00"),
        contractor_assigned: "Dotun Longe",
        status: "in-progress",
        evaluation_submissions: [
          {
            name: "Task 1",
            type: "document",
            status: "good",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 2",
            type: "document",
            status: "bad",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 3",
            type: "video",
            status: "bad",
            src:
              "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_5mb.mp4"
          }
        ]
      },
      {
        name: "Clean up site debris",
        task_created: new Date("March 17, 2018 03:24:00"),
        deadline: new Date("December 17, 2018 03:24:00"),
        contractor_assigned: "Dotun Longe",
        status: "complete",
        evaluation_submissions: [
          {
            name: "Task 1",
            type: "document",
            status: "good",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 2",
            type: "document",
            status: "bad",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 3",
            type: "video",
            status: "bad",
            src:
              "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
          }
        ]
      },
      {
        name: "Start laying foundation for bridge construction",
        task_created: new Date("March 17, 2018 03:24:00"),
        deadline: new Date("December 17, 2018 03:24:00"),
        contractor_assigned: "Dotun Longe",
        status: "not-started",
        evaluation_submissions: [
          {
            name: "Task 1",
            type: "document",
            status: "good",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 2",
            type: "document",
            status: "bad",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 3",
            type: "video",
            status: "bad",
            src:
              "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Port-Harcourt Road Construction",
    funder: "Sustainability International",
    start_date: new Date("December 17, 2017 03:24:00"),
    end_date: new Date("December 17, 2018 03:24:00"),
    status: "In Progress",
    description: `A 10km road to link the rural areas in Port-Harcourt to the city`,
    percentage: 30,
    fundingTarget: "$10,000.00",
    amountRaised: "$3,000.00",
    picture: PhRoad,
    funderPicture: si,
    general_status: "ongoing",
    photos: [PhRoad],
    tasks: [
      {
        name: "Survey site for road construction",
        task_created: new Date("March 17, 2018 03:24:00"),
        deadline: new Date("December 17, 2018 03:24:00"),
        contractor_assigned: "Dotun Longe",
        status: "in-progress",
        evaluation_submissions: [
          {
            name: "Task 1",
            type: "document",
            status: "good",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 2",
            type: "document",
            status: "bad",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 3",
            type: "video",
            status: "bad",
            src:
              "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_5mb.mp4"
          }
        ]
      },
      {
        name: "Clean up site debris",
        task_created: new Date("March 17, 2018 03:24:00"),
        deadline: new Date("December 17, 2018 03:24:00"),
        contractor_assigned: "Dotun Longe",
        status: "complete",
        evaluation_submissions: [
          {
            name: "Task 1",
            type: "document",
            status: "good",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 2",
            type: "document",
            status: "bad",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 3",
            type: "video",
            status: "bad",
            src:
              "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
          }
        ]
      },
      {
        name: "Start laying foundation for road construction",
        task_created: new Date("March 17, 2018 03:24:00"),
        deadline: new Date("December 17, 2018 03:24:00"),
        contractor_assigned: "Dotun Longe",
        status: "not-started",
        evaluation_submissions: [
          {
            name: "Task 1",
            type: "document",
            status: "good",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 2",
            type: "document",
            status: "bad",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 3",
            type: "video",
            status: "bad",
            src:
              "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Yenagoa Classroom Blocks",
    funder: "Sustainability International",
    start_date: new Date("December 17, 2017 03:24:00"),
    end_date: new Date("December 17, 2018 03:24:00"),
    status: "In Progress",
    description: `Construction of five classroom blocks to improve education standards`,
    percentage: 0,
    picture: Class,
    funderPicture: si,
    fundingTarget: "$10,000.00",
    amountRaised: "$0.00",
    general_status: "proposed",
    photos: [Class],
    tasks: [
      {
        name: "Survey site for construction",
        task_created: new Date("March 17, 2018 03:24:00"),
        deadline: new Date("December 17, 2018 03:24:00"),
        contractor_assigned: "Dotun Longe",
        status: "in-progress",
        evaluation_submissions: [
          {
            name: "Task 1",
            type: "document",
            status: "good",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 2",
            type: "document",
            status: "bad",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 3",
            type: "video",
            status: "bad",
            src:
              "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_5mb.mp4"
          }
        ]
      },
      {
        name: "Clean up site debris",
        task_created: new Date("March 17, 2018 03:24:00"),
        deadline: new Date("December 17, 2018 03:24:00"),
        contractor_assigned: "Dotun Longe",
        status: "complete",
        evaluation_submissions: [
          {
            name: "Task 1",
            type: "document",
            status: "good",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 2",
            type: "document",
            status: "bad",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 3",
            type: "video",
            status: "bad",
            src:
              "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
          }
        ]
      },
      {
        name: "Start laying foundation for class construction",
        task_created: new Date("March 17, 2018 03:24:00"),
        deadline: new Date("December 17, 2018 03:24:00"),
        contractor_assigned: "Dotun Longe",
        status: "not-started",
        evaluation_submissions: [
          {
            name: "Task 1",
            type: "document",
            status: "good",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 2",
            type: "document",
            status: "bad",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 3",
            type: "video",
            status: "bad",
            src:
              "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Enugu Road Construction",
    funder: "Sustainability International",
    start_date: new Date("December 17, 2017 03:24:00"),
    end_date: new Date("December 17, 2018 03:24:00"),
    general_status: "In Progress",
    description: `A 10km road to link the rural areas in Enugu to the city`,
    percentage: 10,
    fundingTarget: "$10,000.00",
    amountRaised: "$1,000.00",
    picture: EnuguRoad,
    funderPicture: si,
    general_status: "proposed",
    photos: [EnuguRoad],
    tasks: [
      {
        name: "Survey site for construction",
        task_created: new Date("March 17, 2018 03:24:00"),
        deadline: new Date("December 17, 2018 03:24:00"),
        contractor_assigned: "Dotun Longe",
        status: "in-progress",
        evaluation_submissions: [
          {
            name: "Task 1",
            type: "document",
            status: "good",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 2",
            type: "document",
            status: "bad",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 3",
            type: "video",
            status: "bad",
            src:
              "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_5mb.mp4"
          }
        ]
      },
      {
        name: "Clean up site debris",
        task_created: new Date("March 17, 2018 03:24:00"),
        deadline: new Date("December 17, 2018 03:24:00"),
        contractor_assigned: "Dotun Longe",
        status: "complete",
        evaluation_submissions: [
          {
            name: "Task 1",
            type: "document",
            status: "good",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 2",
            type: "document",
            status: "bad",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 3",
            type: "video",
            status: "bad",
            src:
              "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
          }
        ]
      },
      {
        name: "Start laying foundation for road construction",
        task_created: new Date("March 17, 2018 03:24:00"),
        deadline: new Date("December 17, 2018 03:24:00"),
        contractor_assigned: "Dotun Longe",
        status: "not-started",
        evaluation_submissions: [
          {
            name: "Task 1",
            type: "document",
            status: "good",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 2",
            type: "document",
            status: "bad",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 3",
            type: "video",
            status: "bad",
            src:
              "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Ajegunle Housing Units",
    funder: "Berger and Sons Ltd.",
    start_date: new Date("December 17, 2017 03:24:00"),
    end_date: new Date("December 17, 2018 03:24:00"),
    status: "In Progress",
    description: `Construction of housing units to provide accomodation for low-income families`,
    percentage: 0,
    funderPicture: ellipse,
    picture: Ajegunle,
    fundingTarget: "$10,000.00",
    amountRaised: "$0.00",
    general_status: "proposed",
    photos: [ImoBridge],
    tasks: [
      {
        name: "Survey site for construction",
        task_created: new Date("March 17, 2018 03:24:00"),
        deadline: new Date("December 17, 2018 03:24:00"),
        contractor_assigned: "Dotun Longe",
        status: "in-progress",
        evaluation_submissions: [
          {
            name: "Task 1",
            type: "document",
            status: "good",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 2",
            type: "document",
            status: "bad",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 3",
            type: "video",
            status: "bad",
            src:
              "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_5mb.mp4"
          }
        ]
      },
      {
        name: "Clean up site debris",
        task_created: new Date("March 17, 2018 03:24:00"),
        deadline: new Date("December 17, 2018 03:24:00"),
        contractor_assigned: "Dotun Longe",
        status: "complete",
        evaluation_submissions: [
          {
            name: "Task 1",
            type: "document",
            status: "good",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 2",
            type: "document",
            status: "bad",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 3",
            type: "video",
            status: "bad",
            src:
              "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
          }
        ]
      },
      {
        name: "Start laying foundation for housing construction",
        task_created: new Date("March 17, 2018 03:24:00"),
        deadline: new Date("December 17, 2018 03:24:00"),
        contractor_assigned: "Dotun Longe",
        status: "not-started",
        evaluation_submissions: [
          {
            name: "Task 1",
            type: "document",
            status: "good",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 2",
            type: "document",
            status: "bad",
            src: "http://www.pdf995.com/samples/pdf.pdf"
          },
          {
            name: "Task 3",
            type: "video",
            status: "bad",
            src:
              "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
          }
        ]
      }
    ]
  }
];

module.exports = function(app, db, config) {
  app.post("/projects", (req, res) => {
    setTimeout(() => {
      res.status(200).json(req.body);
    }, config.timeout);
  });

  app.get("/projects", (req, res) => {
    setTimeout(() => {
      const data = lo.filter(projects, o => {
        return o.funder == "Sustainability International";
      });

      res.status(200).json(data);
    }, config.timeout);
  });

  app.get("/project/:id/tasks", (req, res) => {
    const id = req.body.id,
      tasks = lo.find(projects, o => {
        return o.id === id;
      }).tasksData;

    setTimeout(() => {
      res.status(200).json(tasks);
    }, config.timeout);
  });

  app.get("/project/:id", (req, res) => {
    const id = req.params.id,
      data = lo.find(projects, o => {
        return o.id == id;
      });

    setTimeout(() => {
      res.status(200).json(data);
    });
  });
};
//
//
//
//
// module.exports = function(app, db, config) {
//   app.post("/projects", (req, res) => {
//     setTimeout(() => {
//       res.status(200).json(req.body);
//     }, config.timeout);
//   });

//   app.get("/projects", (req, res) => {
//     setTimeout(() => {
//       let projects = [];
//       for (i = 0; i < 3; i++) {
//         projects.push({
//           id: Math.floor(Math.random() * 1000000000000),
//           picture:
//             "https://picsum.photos/400/400/?image=" +
//             Math.floor(Math.random() * 200),
//           title: "Sela Platform Project " + i,
//           description: "Sela description " + i,
//           tasks: Math.floor(Math.random() * 30),
//           percentage: Math.floor(Math.random() * 100)
//         });
//       }
//       res.status(200).json(projects);
//     }, config.timeout);
//   });

//   app.get("/project/:id/tasks", (req, res) => {
//     setTimeout(() => {
//       let tasks = [];
//       res.status(200).json(tasks);
//     }, config.timeout);
//   });

//   app.get("/project/:id", (req, res) => {
//     setTimeout(() => {
//       res.status(200).json({
//         name: "K-Dere Cleanup",
//         start_date: new Date("December 17, 2017 03:24:00"),
//         end_date: new Date("December 17, 2018 03:24:00"),
//         progress: 40,
//         status: "In Progress",
//         photos: [
//           "https://picsum.photos/800/1000/?image=" +
//             Math.floor(Math.random() * 300),
//           "https://picsum.photos/800/1000/?image=" +
//             Math.floor(Math.random() * 300),
//           "https://picsum.photos/800/1000/?image=" +
//             Math.floor(Math.random() * 300),
//           "https://picsum.photos/800/1000/?image=" +
//             Math.floor(Math.random() * 300),
//           "https://picsum.photos/800/1000/?image=" +
//             Math.floor(Math.random() * 300)
//         ],
//         tasks: [
//           {
//             name: "Survey K-Dere for buried oil",
//             task_created: new Date("March 17, 2018 03:24:00"),
//             deadline: new Date("December 17, 2018 03:24:00"),
//             contractor_assigned: "Dotun Longe",
//             status: "in-progress",
//             evaluation_submissions: [
//               {
//                 name: "Task 1",
//                 type: "document",
//                 status: "good",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 2",
//                 type: "document",
//                 status: "bad",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 3",
//                 type: "video",
//                 status: "bad",
//                 src:
//                   "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_5mb.mp4"
//               },
//               {
//                 name: "Task 4",
//                 type: "video",
//                 status: "good",
//                 src:
//                   "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
//               },
//               {
//                 name: "Task 1",
//                 type: "document",
//                 status: "good",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 2",
//                 type: "document",
//                 status: "bad",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 3",
//                 type: "video",
//                 status: "bad",
//                 src:
//                   "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_5mb.mp4"
//               },
//               {
//                 name: "Task 4",
//                 type: "video",
//                 status: "good",
//                 src:
//                   "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
//               },
//               {
//                 name: "Task 1",
//                 type: "document",
//                 status: "good",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 2",
//                 type: "document",
//                 status: "bad",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 3",
//                 type: "video",
//                 status: "bad",
//                 src:
//                   "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_5mb.mp4"
//               },
//               {
//                 name: "Task 4",
//                 type: "video",
//                 status: "good",
//                 src:
//                   "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
//               }
//             ]
//           },
//           {
//             name: "Cleanup Oil Spill",
//             task_created: new Date("March 17, 2018 03:24:00"),
//             deadline: new Date("December 17, 2018 03:24:00"),
//             contractor_assigned: "Dotun Longe",
//             status: "complete",
//             evaluation_submissions: [
//               {
//                 name: "Task 1",
//                 type: "document",
//                 status: "good",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 2",
//                 type: "document",
//                 status: "bad",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 3",
//                 type: "video",
//                 status: "bad",
//                 src:
//                   "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
//               }
//             ]
//           },
//           {
//             name: "Sensitize Villagers On Waste Processing Methods",
//             task_created: new Date("March 17, 2018 03:24:00"),
//             deadline: new Date("December 17, 2018 03:24:00"),
//             contractor_assigned: "Dotun Longe",
//             status: "not-started",
//             evaluation_submissions: [
//               {
//                 name: "Task 1",
//                 type: "document",
//                 status: "good",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 2",
//                 type: "document",
//                 status: "bad",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 3",
//                 type: "video",
//                 status: "bad",
//                 src:
//                   "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
//               }
//             ]
//           },
//           {
//             name: "Cleanup Oil Spill",
//             task_created: new Date("March 17, 2018 03:24:00"),
//             deadline: new Date("December 17, 2018 03:24:00"),
//             contractor_assigned: "Dotun Longe",
//             status: "complete",
//             evaluation_submissions: [
//               {
//                 name: "Task 1",
//                 type: "document",
//                 status: "good",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 2",
//                 type: "document",
//                 status: "bad",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 3",
//                 type: "video",
//                 status: "bad",
//                 src:
//                   "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
//               }
//             ]
//           },
//           {
//             name: "Sensitize Villagers On Waste Processing Methods",
//             task_created: new Date("March 17, 2018 03:24:00"),
//             deadline: new Date("December 17, 2018 03:24:00"),
//             contractor_assigned: "Dotun Longe",
//             status: "not-started",
//             evaluation_submissions: [
//               {
//                 name: "Task 1",
//                 type: "document",
//                 status: "good",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 2",
//                 type: "document",
//                 status: "bad",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 3",
//                 type: "video",
//                 status: "bad",
//                 src:
//                   "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
//               }
//             ]
//           },
//           {
//             name: "Cleanup Oil Spill",
//             task_created: new Date("March 17, 2018 03:24:00"),
//             deadline: new Date("December 17, 2018 03:24:00"),
//             contractor_assigned: "Dotun Longe",
//             status: "complete",
//             evaluation_submissions: [
//               {
//                 name: "Task 1",
//                 type: "document",
//                 status: "good",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 2",
//                 type: "document",
//                 status: "bad",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 3",
//                 type: "video",
//                 status: "bad",
//                 src:
//                   "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
//               }
//             ]
//           },
//           {
//             name: "Sensitize Villagers On Waste Processing Methods",
//             task_created: new Date("March 17, 2018 03:24:00"),
//             deadline: new Date("December 17, 2018 03:24:00"),
//             contractor_assigned: "Dotun Longe",
//             status: "not-started",
//             evaluation_submissions: [
//               {
//                 name: "Task 1",
//                 type: "document",
//                 status: "good",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 2",
//                 type: "document",
//                 status: "bad",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 3",
//                 type: "video",
//                 status: "bad",
//                 src:
//                   "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
//               }
//             ]
//           },
//           {
//             name: "Cleanup Oil Spill",
//             task_created: new Date("March 17, 2018 03:24:00"),
//             deadline: new Date("December 17, 2018 03:24:00"),
//             contractor_assigned: "Dotun Longe",
//             status: "complete",
//             evaluation_submissions: [
//               {
//                 name: "Task 1",
//                 type: "document",
//                 status: "good",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 2",
//                 type: "document",
//                 status: "bad",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 3",
//                 type: "video",
//                 status: "bad",
//                 src:
//                   "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
//               }
//             ]
//           },
//           {
//             name: "Sensitize Villagers On Waste Processing Methods",
//             task_created: new Date("March 17, 2018 03:24:00"),
//             deadline: new Date("December 17, 2018 03:24:00"),
//             contractor_assigned: "Dotun Longe",
//             status: "not-started",
//             evaluation_submissions: [
//               {
//                 name: "Task 1",
//                 type: "document",
//                 status: "good",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 2",
//                 type: "document",
//                 status: "bad",
//                 src: "http://www.pdf995.com/samples/pdf.pdf"
//               },
//               {
//                 name: "Task 3",
//                 type: "video",
//                 status: "bad",
//                 src:
//                   "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4"
//               }
//             ]
//           }
//         ]
//       });
//     });
//   });
// };
