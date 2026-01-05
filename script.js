// --- NAVIGATION LOGIC ---
const sections = ['Overview', 'Analytics', 'Research', 'Timeline', 'Teaching'];
const navContainer = document.getElementById('desktop-nav');
const mobileNavContainer = document.getElementById('mobile-nav-items');

sections.forEach(section => {
    const id = section.toLowerCase();
    const link = document.createElement('a');
    link.href = `#${id}`;
    link.textContent = section;
    link.className = 'text-slate-500 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-colors dark:text-slate-400 dark:hover:text-pink-400';
    navContainer.appendChild(link);

    const mLink = document.createElement('a');
    mLink.href = `#${id}`;
    mLink.textContent = section;
    mLink.className = 'block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800';
    mobileNavContainer.appendChild(mLink);
});

// Mobile menu
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// --- CHART GENERATION ---

// 1. Skills Radar Chart (Updated Data)
const ctxSkills = document.getElementById('skillsChart').getContext('2d');
new Chart(ctxSkills, {
    type: 'radar',
    data: {
        labels: profileData.skills.labels,
        datasets: [{
            label: 'Technical Proficiency',
            data: profileData.skills.data,
            fill: true,
            backgroundColor: 'rgba(236, 72, 153, 0.2)',
            borderColor: 'rgb(236, 72, 153)',
            pointBackgroundColor: 'rgb(236, 72, 153)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(236, 72, 153)'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                min: 0,
                max: 100,
                angleLines: { color: document.documentElement.classList.contains('dark') ? '#475569' : '#e2e8f0' },
                grid: { color: document.documentElement.classList.contains('dark') ? '#475569' : '#e2e8f0' },
                pointLabels: {
                    font: { size: 12, weight: 'bold', family: "'Segoe UI', sans-serif" },
                    color: document.documentElement.classList.contains('dark') ? '#e2e8f0' : '#1e293b'
                },
                ticks: { display: false, stepSize: 20, backdropColor: 'transparent' }
            }
        },
        plugins: {
            legend: { display: false }
        }
    }
});

// 2. Trajectory Line Chart
const ctxTrajectory = document.getElementById('trajectoryChart').getContext('2d');
new Chart(ctxTrajectory, {
    type: 'bar',
    data: {
        labels: profileData.trajectory.years,
        datasets: [
            {
                label: 'Awards & Fellowships',
                data: profileData.trajectory.awards,
                backgroundColor: '#ec4899',
                stack: 'Stack 0',
            },
            {
                label: 'Publications',
                data: profileData.trajectory.pubs,
                backgroundColor: '#059669', // Emerald for publications
                stack: 'Stack 0',
            },
            {
                label: 'Schools & Visits',
                data: profileData.trajectory.schools,
                backgroundColor: '#818cf8',
                stack: 'Stack 0',
            },
            {
                label: 'Teaching Roles',
                data: profileData.trajectory.teaching,
                backgroundColor: '#c7d2fe',
                stack: 'Stack 0',
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: document.documentElement.classList.contains('dark') ? '#94a3b8' : '#64748b' }
            },
            y: {
                beginAtZero: true,
                grid: { color: document.documentElement.classList.contains('dark') ? '#334155' : '#f1f5f9' },
                ticks: {
                    stepSize: 1,
                    color: document.documentElement.classList.contains('dark') ? '#94a3b8' : '#64748b',
                    precision: 0 // Force integer ticks
                }
            }
        },
        plugins: {
            legend: { position: 'bottom', labels: { usePointStyle: true, boxWidth: 8, color: document.documentElement.classList.contains('dark') ? '#e2e8f0' : '#666' } }
        }
    }
});

// --- RESEARCH TOPICS INTERACTION ---
const tagContainer = document.getElementById('topic-tags');
const detailTitle = document.getElementById('detail-title');
const detailDesc = document.getElementById('detail-desc');
const detailBox = document.getElementById('topic-detail');

profileData.researchTopics.forEach((topic, index) => {
    const btn = document.createElement('button');
    btn.textContent = topic.name;
    const activeClass = 'bg-pink-600 text-white border-pink-600 dark:bg-pink-500 dark:border-pink-500';
    const inactiveClass = 'bg-white text-slate-600 border-slate-300 hover:border-pink-400 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 dark:hover:border-pink-400';

    btn.className = `px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${index === 0 ? activeClass : inactiveClass}`;

    btn.addEventListener('click', () => {
        Array.from(tagContainer.children).forEach(c => {
            c.className = `px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${inactiveClass}`;
        });
        btn.className = `px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${activeClass}`;

        detailBox.classList.add('opacity-50');
        setTimeout(() => {
            detailTitle.textContent = topic.name;
            detailDesc.innerHTML = `${topic.desc} <br><br><span class="text-xs font-bold uppercase text-pink-400">Related Keywords:</span> ${topic.related.join(', ')}`;
            detailBox.classList.remove('opacity-50');
        }, 200);
    });
    tagContainer.appendChild(btn);
});

// Initial set
if (profileData.researchTopics.length > 0) {
    const t = profileData.researchTopics[0];
    detailTitle.textContent = t.name;
    detailDesc.innerHTML = `${t.desc} <br><br><span class="text-xs font-bold uppercase text-pink-400">Related Keywords:</span> ${t.related.join(', ')}`;
}

// --- PUBLICATIONS RENDERER ---
const pubContainer = document.getElementById('publications-container');
profileData.publications.forEach(pub => {
    const pubDiv = document.createElement('div');
    pubDiv.className = 'group relative pl-4 border-l-2 border-pink-300 hover:border-pink-600 transition-colors mb-6 last:mb-0 dark:border-pink-700 dark:hover:border-pink-400';
    pubDiv.innerHTML = `
        <div class="flex flex-col sm:flex-row justify-between sm:items-baseline">
            <h4 class="text-lg font-bold text-slate-900 group-hover:text-pink-600 transition-colors cursor-pointer dark:text-slate-100 dark:group-hover:text-pink-400">
                ${pub.title}
            </h4>
            <span class="text-sm text-slate-400 font-mono mt-1 sm:mt-0 whitespace-nowrap ml-2 dark:text-slate-500">${pub.year}</span>
        </div>
        <p class="text-slate-600 mt-1 text-sm dark:text-slate-400">Authored by <strong>${pub.authors}</strong></p>
        <div class="flex items-center gap-2 mt-1">
            <span class="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded dark:bg-slate-700 dark:text-slate-300">${pub.journal}</span>
            <span class="text-xs text-pink-500 dark:text-pink-400">${pub.type}</span>
        </div>
        <p class="text-slate-500 mt-2 text-sm italic dark:text-slate-500">${pub.desc}</p>
    `;
    pubContainer.appendChild(pubDiv);
});

// --- TIMELINE GENERATION ---
const timelineContainer = document.getElementById('timeline-container');

function renderTimeline(filter) {
    timelineContainer.innerHTML = '';

    const filteredData = filter === 'all'
        ? profileData.timeline
        : profileData.timeline.filter(item => item.type === filter);

    filteredData.forEach((item, index) => {
        const isLeft = index % 2 === 0;

        const wrapper = document.createElement('div');
        wrapper.className = `relative flex items-center justify-between md:justify-normal ${isLeft ? 'md:flex-row-reverse' : ''} w-full`;

        const dot = document.createElement('div');
        dot.className = `hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white shadow-sm z-10 dark:border-slate-800
            ${item.type === 'award' ? 'bg-amber-400' :
                item.type === 'education' ? 'bg-pink-600' :
                    item.type === 'pub' ? 'bg-emerald-500' : 'bg-slate-400'}`;

        const card = document.createElement('div');
        card.className = `w-full md:w-5/12 bg-white p-5 rounded-lg shadow-sm border-l-4 card-hover dark:bg-slate-800 dark:border-opacity-50
            ${item.type === 'award' ? 'border-amber-400' :
                item.type === 'education' ? 'border-pink-600' :
                    item.type === 'pub' ? 'border-emerald-500' : 'border-slate-400'}
            ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`;

        card.style.marginBottom = "1rem";

        let icon = 'fa-calendar';
        if (item.type === 'award') icon = 'fa-trophy';
        if (item.type === 'education') icon = 'fa-graduation-cap';
        if (item.type === 'experience') icon = 'fa-plane';
        if (item.type === 'pub') icon = 'fa-scroll';

        card.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-slate-100 text-slate-500 text-xs dark:bg-slate-700 dark:text-slate-300">
                    <i class="fas ${icon}"></i>
                </span>
                <span class="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-400">${item.year}</span>
            </div>
            <h4 class="font-bold text-slate-800 text-lg leading-tight mb-1 dark:text-slate-200">${item.title}</h4>
            <div class="text-xs text-pink-600 font-semibold mb-2 uppercase tracking-wide dark:text-pink-400">
                <i class="fas fa-map-marker-alt mr-1"></i>${item.location}
            </div>
            <p class="text-slate-600 text-sm leading-relaxed dark:text-slate-400">${item.desc}</p>
        `;

        wrapper.appendChild(dot);
        wrapper.appendChild(card);
        timelineContainer.appendChild(wrapper);
    });
}

window.filterTimeline = function (type) {
    const buttons = document.querySelectorAll('#timeline button');
    buttons.forEach(b => {
        if (b.textContent.toLowerCase().includes(type) || (type === 'all' && b.textContent === 'All')) {
            b.className = 'px-3 py-1 text-sm font-medium rounded-md bg-pink-100 text-pink-700 transition-colors dark:bg-pink-900 dark:text-pink-200';
        } else {
            b.className = 'px-3 py-1 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 transition-colors dark:text-slate-400 dark:hover:bg-slate-800';
        }
    });
    renderTimeline(type);
}

renderTimeline('all');

// --- TEACHING GRID ---
const teachingGrid = document.getElementById('teaching-grid');
profileData.teaching.forEach(course => {
    const div = document.createElement('div');
    div.className = 'bg-white p-4 rounded-lg shadow-sm border border-slate-200 hover:border-pink-300 transition-colors dark:bg-slate-800 dark:border-slate-700 dark:hover:border-pink-700';
    div.innerHTML = `
        <div class="flex justify-between items-center mb-2">
            <span class="text-xs font-mono text-slate-400">${course.code}</span>
            <span class="text-xs font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded dark:bg-pink-900 dark:text-pink-200">${course.term}</span>
        </div>
        <h4 class="font-bold text-slate-800 mb-1 line-clamp-2 h-12 dark:text-slate-200">${course.name}</h4>
        <p class="text-xs text-slate-500 mt-2 dark:text-slate-400">Under ${course.prof}</p>
    `;
    teachingGrid.appendChild(div);
});

// --- DARK MODE TOGGLE ---
const themeToggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

// Check system preference logic or local storage logic if desired, for now defaulting to manual toggle
themeToggleBtn.addEventListener('click', () => {
    root.classList.toggle('dark');
    const isDark = root.classList.contains('dark');
    themeToggleBtn.innerHTML = isDark ? '<i class="fas fa-sun text-yellow-400"></i>' : '<i class="fas fa-moon text-slate-600"></i>';

    // Update charts explicitly if needed (Chart.js doesn't auto-update colors on CSS class change usually without creating new instance or updating options)
    // For simplicity, we just reload the page or re-render could be better, but let's try to update options directly
    // Ideally we would destroy and recreate charts, but that's complex.
    // Let's just update the key colors we know about.

    // Skill Chart update
    const skillChartInstance = Chart.getChart("skillsChart");
    if (skillChartInstance) {
        skillChartInstance.options.scales.r.grid.color = isDark ? '#475569' : '#e2e8f0';
        skillChartInstance.options.scales.r.angleLines.color = isDark ? '#475569' : '#e2e8f0';
        skillChartInstance.options.scales.r.pointLabels.color = isDark ? '#e2e8f0' : '#1e293b';
        skillChartInstance.update();
    }

    // Trajectory Chart update
    const trajChartInstance = Chart.getChart("trajectoryChart");
    if (trajChartInstance) {
        trajChartInstance.options.scales.x.ticks.color = isDark ? '#94a3b8' : '#64748b';
        trajChartInstance.options.scales.y.grid.color = isDark ? '#334155' : '#f1f5f9';
        trajChartInstance.options.scales.y.ticks.color = isDark ? '#94a3b8' : '#64748b';
        trajChartInstance.options.plugins.legend.labels.color = isDark ? '#e2e8f0' : '#666';
        trajChartInstance.update();
    }
});
