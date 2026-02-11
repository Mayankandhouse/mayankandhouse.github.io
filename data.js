const profileData = {
    skills: {
        labels: ['Fortran', 'HPC', 'Theoretical Modelling', 'Stochastic Physics', 'Monte Carlo', 'Langevin Dyn.', 'Python'],
        data: [98, 95, 96, 95, 92, 92, 90], // High proficiency in core areas
        categories: ['Dev', 'Tool', 'Theory', 'Theory', 'Method', 'Method', 'Dev']
    },
    trajectory: {
        years: ['2016', '2019', '2020', '2022', '2023', '2024', '2025'],
        // Awards: 2016(1), 2019(1), 2024(2), 2025(2)
        awards: [1, 1, 0, 0, 0, 2, 2],
        // Schools/Visits: 2019(1), 2020(1), 2022(2), 2023(2-Japan+Pub), 2024(1-Sweden)
        schools: [0, 1, 1, 2, 1, 1, 0],
        // Pubs: 2020(1), 2023(1), 2025(1)
        pubs: [0, 0, 1, 0, 1, 0, 1],
        // Teaching: 2019(1), 2020(2), 2023(1), 2024(1)
        teaching: [0, 1, 2, 0, 1, 1, 0]
    },
    researchTopics: [
        {
            id: 'comp',
            name: 'Computational Physics & HPC',
            desc: 'Extensive utilization of Fortran and High-Performance Computing (HPC) clusters to simulate large-scale stochastic systems, employing parallel computing techniques for complex fluid dynamics.',
            related: ['Parallel Computing', 'Fortran 90/2003', 'Optimization']
        },
        {
            id: 'theory',
            name: 'Theoretical Modelling',
            desc: 'Development of analytical and numerical models to describe physical phenomena. Focus on bridging microscopic stochastic rules with macroscopic observable behaviors.',
            related: ['Model Building', 'Mathematical Physics', 'Simulation']
        },
        {
            id: 'stoch',
            name: 'Stochastic Physics',
            desc: 'Study of systems evolving with random noise. Core focus involves Langevin dynamics, Itô processes, and Master equations to model non-equilibrium states.',
            related: ['Entropic Pulling', 'Diffusion Diode', 'Langevin Dynamics']
        },
        {
            id: 'sim',
            name: 'Advanced Simulation Methods',
            desc: 'Expertise in Monte Carlo methods and Molecular Dynamics (MD) to study soft matter systems, phase transitions, and polymer dynamics.',
            related: ['Monte Carlo', 'Molecular Dynamics', 'Soft Matter']
        }
    ],
    publications: [
        {
            title: "Entropic pulling and diffusion diode in an Itô process",
            authors: "M Sharma, A Bhattacharyay",
            year: "2025",
            journal: "Physics Letters A, 130709",
            desc: "Analyzes transport phenomena where entropic barriers and noise induce directional motion.",
            type: "Journal Article"
        },
        {
            title: "Spontaneous collective transport in a heat-bath",
            authors: "M Sharma, A Bhattacharyay",
            year: "2023",
            journal: "Physica A: Statistical Mechanics and its Applications 626",
            desc: "Investigates conditions under which collective motion emerges spontaneously in thermal environments.",
            type: "Journal Article"
        },
        {
            title: "Conversion of heat to work: An efficient inchworm",
            authors: "M Sharma, A Bhattacharyay",
            year: "2020",
            journal: "Physica Scripta 95 (10), 105004",
            desc: "Models a nanoscale inchworm mechanism that efficiently converts thermal energy into mechanical work.",
            type: "Journal Article"
        }
    ],
    timeline: [
        { year: 2025, type: 'award', title: 'BioSantexc Travel Fellowship', location: 'France', desc: 'Recipient for CompSysBio2025 at Centre Paul-Langevin.' },
        { year: 2025, type: 'award', title: 'Wellcome Trust Bursary', location: 'Durham, UK', desc: 'Awarded for Physics of Life Summer School at Durham University.' },
        { year: 2025, type: 'pub', title: 'Publication: Entropic Pulling', location: 'Physics Letters A', desc: 'Published "Entropic pulling and diffusion diode in an Itô process".' },
        { year: 2024, type: 'award', title: 'CSIR-SRF Direct Fellowship', location: 'India', desc: 'Senior Research Fellowship awarded (Mar 2024 - 2026/27).' },
        { year: 2024, type: 'experience', title: 'Nordita Workshop', location: 'Sweden', desc: 'Measuring and Manipulating Non-Equilibrium Systems.' },
        { year: 2024, type: 'award', title: 'Infosys Foundation Travel Award', location: 'India', desc: 'Grant to support research travel.' },
        { year: 2023, type: 'pub', title: 'Publication: Spontaneous Collective Transport', location: 'Physica A', desc: 'Published "Spontaneous collective transport in a heat-bath".' },
        { year: 2023, type: 'experience', title: 'Research Visit', location: 'Japan', desc: 'International research visit focusing on non-equilibrium statistical physics.' },
        { year: 2022, type: 'experience', title: 'School on Stochastic Thermodynamics', location: 'IIT Bombay', desc: 'Specialized training in biological applications.' },
        { year: 2022, type: 'experience', title: 'Complex Systems School', location: 'ICTS Bangalore', desc: 'School on Statistical Physics of Complex Systems.' },
        { year: 2020, type: 'pub', title: 'Publication: Heat to Work Inchworm', location: 'Physica Scripta', desc: 'Published "Conversion of heat to work: An efficient inchworm".' },
        { year: 2020, type: 'experience', title: 'Fluctuations School', location: 'ICTS Bangalore', desc: 'Fluctuations in Non-Equilibrium Systems.' },
        { year: 2019, type: 'education', title: 'PhD Commencement', location: 'IISER Pune', desc: 'Started PhD after completing MSc portion of Integrated program.' },
        { year: 2019, type: 'award', title: 'Institute Fellowship', location: 'IISER Pune', desc: 'Recipient of fellowship for Integrated Ph.D. (2019-2023).' },
        { year: 2016, type: 'award', title: 'Summer Research Fellowship', location: 'IISc Bangalore', desc: 'IASC-INSA-NASI Summer Fellow.' }
    ],
    thesisWork: [
        {
            paperTitle: "Spontaneous collective transport in a heat-bath",
            desc: "Visualizations for the 2023 Physica A paper. Investigating conditions under which collective motion emerges spontaneously.",
            videos: [
                {
                    title: "Emergent Flocking",
                    desc: "Simulation showing emergent flocking behavior.",
                    videoUrl: "https://www.youtube.com/embed/raPftgQ-RPU",
                    tags: ["Flocking", "Simulation"]
                },
                {
                    title: "Swarming: Ferromagnetic-like Alignment",
                    desc: "Demonstration of swarming behavior with ferromagnetic-like alignment.",
                    videoUrl: "https://www.youtube.com/embed/_6jkxK9bgRo?start=142",
                    tags: ["Swarming", "Alignment"]
                },
                {
                    title: "Crystal-like Structures with Coherent Rotation",
                    desc: "Formation of crystal-like structures exhibiting coherent rotation.",
                    videoUrl: "https://www.youtube.com/embed/GFWTYNqKp5s",
                    tags: ["Crystal Structure", "Rotation"]
                },
                {
                    title: "Rotating Triangular Clusters",
                    desc: "Chiral asymmetry arising from damping asymmetry.",
                    videoUrl: "https://www.youtube.com/embed/CThM4UdfJKM?start=81",
                    tags: ["Clusters", "Chiral Asymmetry"]
                },
                {
                    title: "Anti-ferromagnetic-like Ordered Dimers",
                    desc: "Formation of ordered dimers with anti-ferromagnetic-like properties.",
                    videoUrl: "https://www.youtube.com/embed/nl77PRMKb98",
                    tags: ["Dimers", "Ordering"]
                },
                {
                    title: "Emergent Rotating Clusters",
                    desc: "Dynamics between vortex and swarm states.",
                    videoUrl: "https://www.youtube.com/embed/RsPIN-ZHobs",
                    tags: ["Vortex", "Swarm"]
                }
            ]
        },
        {
            paperTitle: "Entropic pulling and diffusion diode",
            desc: "Visualizations for the 2025 Physics Letters A paper.",
            videos: [
                {
                    title: "Entropic Pulling Visualized",
                    desc: "An experimental setup demonstrating entropic pulling.",
                    videoUrl: "https://www.youtube.com/embed/c46BubA9Nkg",
                    tags: ["Stochastic", "Entropic Force"]
                }
            ]
        }
    ],
    teaching: [
        { code: 'PH1113', name: 'Introductory Mechanics', term: 'Aug 2019', prof: 'Prof. S. Ananth' },
        { code: 'PH1213', name: 'Intro Electricity & Magnetism', term: 'Jan 2020', prof: 'Dr. A. Rehman' },
        { code: 'PHY310', name: 'Mathematical Methods', term: 'Aug 2020', prof: 'Prof. T. Souradeep' },
        { code: 'PHY3134', name: 'Optics', term: 'Dec 2020', prof: 'Unknown' },
        { code: 'TA', name: 'Computational Physics', term: '2023', prof: 'IISER Pune' }
    ]
};
