const proficiencyType = {
    no_experience: {
        name: 'No Experience',
        value: 1
    },
    basic: {
        name: 'Basic',
        value: 1
    },
    intermediate: {
        name: 'Intermediate',
        value: 2
    },
    advanced: {
        name: 'Advanced',
        value: 3
    },
    expert: {
        name: 'Expert',
        value: 4
    },
};

document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skills__data');

    skillBars.forEach(skillBar => {
        const proficiency = skillBar.querySelector('.skills__number').innerText.trim().toLowerCase();
        const skillBarFill = skillBar.querySelector('.skills__percentage');
        const percentage = (proficiencyType[proficiency].value / 4) * 100;

        skillBarFill.style.width = `${percentage}%`;
    });

    // set total skills dynamically
    const startWork = new Date('2020-03-01');
    const currentDate = new Date();
    const totalMonths = (currentDate.getFullYear() - startWork.getFullYear()) * 12 + (currentDate.getMonth() - startWork.getMonth());
    const totalWorkExperiences = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;
    const totalCompanyWorked = document.querySelectorAll('#work .qualification__data').length -2;
    document.querySelectorAll('.about__info-title')[0].innerText = totalWorkExperiences
    document.querySelectorAll('.about__info-title')[2].innerText = totalCompanyWorked
    document.querySelector('.home__description').innerHTML = `Experienced backend developer with a ${totalWorkExperiences} years proven track record in the industry. Recognized for being a fast learner and dedicated professional. Highly motivated to continuously expand knowledge and skills to stay up-to-date with the latest technology advancements. Strong ability to quickly adapt to new programming languages and confidently tackle any technical challenge.`;
});