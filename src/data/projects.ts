// src/data/projects.ts
export const projects = [
    {
      id: "fresh-food",
      titre: "Fresh Food",
      excrept: "Progressive Web App for delivery and supply chain management.",
      description:
        "Fresh Food is a progressive web application (PWA) with three distinct interfaces for customers, suppliers, and delivery personnel. It enables comprehensive order management, inventory tracking, and cash flow management, providing an integrated solution to optimize the supply chain and deliveries.",
      stack: ["Refine.js", "Typescript", "MUI", "Figma", "Jira", "GitHub"],
      tag: ["Front-end", "web-development", "Work in Team"],
      image: "/images/freshfood1.png",
      gallery: ["/images/freshfood4.png", "/images/freshfood2.png", "/images/freshfood3.png"],
    },
    {
      id: "erp",
      titre: "ERP",
      excrept: "Comprehensive CRM and ERP system for resource, treasury, and invoice management.",
      description: "ERP is an all-in-one CRM and enterprise resource planning (ERP) system designed to streamline business operations. It provides tools for managing resources, treasury, invoicing, and customer relationships, enabling businesses to optimize workflows, track financial transactions, and improve overall efficiency.",
      stack: ["React", "MUI", "TypeScript", "GitHub", "Docker", "Node js"],
      tag: ["Front-end", "web-development", "Work in Team"],
      image: "/images/erp.png",
      gallery: ["/images/erp1.png", "/images/erp2.png", "/images/erp3.png"],
    },
    {
      id: "waste-management",
      titre: "Waste Collection Management System",
      excrept: "Smart solution for optimized collection zone and route management.",
      description:
        "Final year project for Master's in Software Engineering. This system includes an admin application for managing zones, collection points, and bins, as well as a dedicated application for delivery personnel. Thanks to an operations research (OR) algorithm integrated with the Google Maps API, the application optimizes routes for delivery personnel. Additionally, a prediction model based on historical waste generation data in each zone allows for more efficient planning of collection point installation.",
      stack: ["Express.js", "Python", "Flask", "Pandas", "NumPy", "React", "MUI", "Google Maps API"],
      tag: ["Back-end", "Front-end", "operational-research", "Web-development", "machine-learning"],
      image: "/images/project3.webp",
      gallery: ["/images/waste-1.webp", "/images/waste-2.webp", "/images/waste-3.webp"],
      githubRepos: [
        { name: "admin", url: "https://github.com/moradlarbi/node_app" },
        { name: "Model", url: "https://github.com/moradlarbi/model_waste_prediction" }
      ],
    },
    {
      id: "Schedaut",
      titre: "School Planning management System",
      excrept: "Smart solution for automatic planning management",
      description: "School Planning Management System is an intelligent scheduling solution that automates academic planning. It features an admin application for managing resources and leverages a Python script, triggered via a message broker, to generate optimized schedules. This system enhances efficiency by reducing manual workload and ensuring optimal resource allocation.",
      stack: [
        "React",
        "RabbitMQ",
        "Express.js",
        "SQL",
        "Docker",
        "Github",
        "Pandas",
        "Python",
        "MUI"
      ],
      tag: ["Back-end", "Front-end", "message broker", "operational-research"],
      image: "/images/schedaut1.png",
      gallery: ["/images/schedaut2.png", "/images/schedaut3.png", "/images/schedaut4.png"],
      githubRepos: [
        { name: "front", url: "https://github.com/moradlarbi/SCHEDAUT_Front" },
        { name: "back", url: "https://github.com/moradlarbi/SCHEDAUT_Back" }
      ],
    },
    {
      id: "gantt-frappe",
      titre: "Gantt_Frappe",
      excrept: "Contribution to an open-source Gantt chart generation project.",
      description:
        "Participation in an open-source project aimed at improving a web application for generating Gantt charts. The contribution involved making the Gantt view dynamic by allowing users to choose the time unit (day, week, month, etc.) and display step. Additionally, I added functionality to export diagrams in various formats (Excel, CSV, etc.) for flexible use adapted to user needs.",
      stack: ["JavaScript", "HTML", "CSS", "GitHub"],
      tag: ["Front-end", "Web-development", "Open source contribution"],
      image: "/images/frappe.png",
      gallery: ["/images/frappe.png", "/images/frappe2.png", "/images/frappe3.png"],
      liveUrl: "https://frappe.io/gantt",
      githubUrl: "https://github.com/frappe/gantt",
    },
  ]
  