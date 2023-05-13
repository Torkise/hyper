export default {
    data() {
      return {
        projects: [
            {
              id: 1,
              title: 'Online Marketplace for Sustainable Products',
              shortDescription: 'E-commerce platform connecting consumers with eco-friendly and socially responsible brands.',
              longDescription: 'This project is focused on building an online marketplace for sustainable products, which would allow consumers to easily discover and purchase environmentally friendly and socially responsible goods. The platform would curate a selection of products from a variety of brands and vendors, and offer a range of features such as user reviews, product recommendations, and personalized shopping experiences. The project team would work with vendors to ensure that their products meet certain sustainability and ethical criteria, and would leverage data analytics and machine learning to improve the user experience over time.',
              employeeIds: [1],
              areas: ['Sustainability', 'Energy'],
              featured: true,
            },
            {
                id: 2,
                title: 'Renewable Energy Storage Solutions',
                shortDescription: 'Innovative energy storage technology that enables large-scale adoption of renewable energy sources.',
                longDescription: 'This project is focused on developing innovative energy storage solutions that can help accelerate the adoption of renewable energy sources such as wind and solar power. The project team would work on designing and prototyping new energy storage technologies that are more efficient, reliable, and cost-effective than existing solutions. The team would also explore new business models and market opportunities for renewable energy storage, and work with partners and investors to bring their products to market.',
                employeeIds: [2],
                areas: ['Energy'],
                featured: true,
              },
            {
              id: 3,
              title: 'AI-Powered Personalized Healthcare',
              shortDescription: 'Artificial intelligence platform that provides personalized healthcare recommendations to individuals based on their genetic and health data.',
              longDescription: 'This project involves developing an AI-powered healthcare platform that uses a person’s genetic and health data to provide personalized recommendations for improving their health and wellness. The platform would analyze a person’s genetic data to identify potential health risks and recommend lifestyle changes or medical interventions to mitigate those risks. The project team would work with healthcare providers and researchers to ensure that the recommendations are evidence-based and up-to-date. The platform would also incorporate machine learning algorithms to improve its accuracy and effectiveness over time.',
              employeeIds: [3],
              areas: ['Healthcare', 'Technology'],
              featured: true,
            },
            {
                id: 4,
                title: 'Green Energy Storage Solution',
                shortDescription: 'A solution that stores green energy for residential and commercial use',
                longDescription: 'This project aims to create a green energy storage solution that stores energy generated from renewable sources such as solar and wind power. The solution will be designed for both residential and commercial use and will help reduce reliance on non-renewable energy sources. The solution will be scalable and will have the potential to make a significant impact on reducing carbon emissions.',
                employeeIds: [4],
                areas: ['Energy'],
                featured: false,
              },
              {
                id: 5,
                title: 'AI-Enabled Supply Chain Optimization',
                shortDescription: 'A solution that optimizes supply chain management using AI',
                longDescription: 'This project aims to create an AI-enabled solution that optimizes supply chain management for businesses. The solution will use advanced algorithms and machine learning to predict demand, optimize inventory management, and reduce costs. The solution will be designed to be scalable and customizable, making it suitable for businesses of all sizes and industries.',
                employeeIds: [5],
                areas: ['Technology'],
                featured: false,
              },
              {
                id: 6,
                title: 'Smart Home Security System',
                shortDescription: 'A home security system that uses smart technologies to enhance safety',
                longDescription: 'This project aims to create a smart home security system that uses advanced technologies such as sensors, cameras, and machine learning to enhance safety and security. The system will be designed to be user-friendly and accessible, and will offer a range of features such as remote monitoring, alarm systems, and automatic alerts. The system will be customizable and scalable, making it suitable for different types of homes and businesses.',
                employeeIds: [2],
                areas: ['Technology'],
                featured: false,
              },
        ],
        selectedArea: null,
        employees: [
            {
              id: 1,
              name: "John Doe",
              title: "Managing Partner",
              bio: "John Doe is the Managing Partner at our company and brings over 20 years of experience in venture capital and private equity to the table. He is responsible for overseeing the company's strategic direction and managing its investment portfolio.<br>Before joining our team, John held various senior roles at some of the world's leading investment firms, where he helped raise over $10 billion in capital and led investments in numerous successful companies across a wide range of industries.<br>John is known for his deep industry knowledge, sharp analytical skills, and ability to identify promising investment opportunities. He is a sought-after speaker at industry events and has authored several publications on venture capital and private equity. John holds an MBA from Harvard Business School and a Bachelor's degree in Economics from the University of Chicago. In his free time, he enjoys playing golf and spending time with his family.",
              photo: "https://www.blharbert.com/assets/2019/06/Matthew-DeValk.jpg",
              projects: [2, 6, 1],
            },
            {
              id: 2,
              name: "Jane Smith",
              title: "Investment Associate",
              bio: "Jane specializes in identifying emerging technologies...",
              photo: "https://cdn.shopify.com/s/files/1/0582/2270/6885/collections/11.jpg?v=1629359113",
              projects: [1, 5, 3],
            },
            {
              id: 3,
              name: "Bob Johnson",
              title: "Chief Financial Officer",
              bio: "Bob has a background in accounting and finance, and...",
              photo: "https://www.ucwv.edu/wp-content/uploads/2019/08/DS9A4801-500x500.jpg",
              projects: [2, 3]
            },
            {
              id: 4,
              name: "Sarah Lee",
              title: "Marketing Manager",
              bio: "Sarah is an expert in brand strategy and marketing...",
              photo: "https://media.licdn.com/dms/image/C5603AQHrwMS6SAuFBQ/profile-displayphoto-shrink_800_800/0/1544652821280?e=2147483647&v=beta&t=PRzrWewGwZfP7b3dwavprL-NdlvP3oDTg_C7f1rXHwg",
              projects: [2, 6, 1]
            },
            {
              id: 5,
              name: "Mike Wilson",
              title: "Engineering Manager",
              bio: "Mike leads our engineering team and has a background...",
              photo: "https://www.centralnicreseller.com/media/pages/images/b9dfeb0dfa-1668507825/adobestock-113998009-cropped-500x.jpg",
              projects: [1, 2, 3]
            },
            {
              id: 6,
              name: "Samantha Brown",
              title: "Investment Analyst",
              bio: "Samantha has a keen eye for market trends and a passion for...",
              photo: "https://s3.amazonaws.com/images.salonlofts.com/system/images/9644/large/87141455E6355-3F7F-492E-AD5D-7785122E0B2D.jpeg",
              projects: [6, 5]
            },
            {
              id: 7,
              name: "Mark Davis",
              title: "Senior Advisor",
              bio: "Mark has advised startups and established companies alike...",
              photo: "https://www.principalconnections.ie/wp-content/uploads/2021/10/AdobeStock_211651253_businessman-croped-500x500-1.jpeg",
              projects: [4]
            },
            {
              id: 8,
              name: "Emily Chen",
              title: "Marketing Specialist",
              bio: "Emily has a background in digital marketing and a passion for...",
              photo: "https://www.spjain.org/hubfs/mumbai-lp-images/mgluxm-lp/About-the-program.jpg",
              projects: [2, 6, 1, 3, 4]
            },
            {
              id: 9,
              name: "David Kim",
              title: "Director of Operations",
              bio: "David oversees our day-to-day operations and ensures that...",
              photo: "https://www.asian-identity.com/wp-content/uploads/2020/07/team-img-consultant-11.jpg",
              projects: [2, 6]
            },
            {
              id: 10,
              name: "Anna Lee",
              title: "Legal Counsel",
              bio: "Anna Lee is a seasoned legal counsel with over a decade of experience...",
              photo: "https://media.licdn.com/dms/image/C4D03AQEuS75kxEy_uQ/profile-displayphoto-shrink_800_800/0/1550990573085?e=2147483647&v=beta&t=rxVwfLRqZgAZVWuV3-YPLB3nMC1kRKjGO2wCAAqbbtM",
              projects: [2]
            }
            
            // Add more employees here
          ]
    
      }
    },
    computed: {
        projectAreas() {
          const areas = new Set();
          this.projects.forEach((project) => {
            project.areas.forEach((area) => areas.add(area));
          });
          return Array.from(areas);
        },
        filteredProjects() {
          if (!this.selectedArea) {
            return this.projects;
          }
          return this.projects.filter((project) => project.areas.includes(this.selectedArea));
        },
        featuredProjects() {
            return this.projects.filter((project) => project.featured);
        },
      },
    methods: {
        showPopup(element) {
            element.showPopup = true;
        },
        hidePopup(element) {
            element.showPopup = false;
        },
        findEmployeeById(id) {
            return this.employees.find(employee => employee.id === id);
        },
        
      }
  }