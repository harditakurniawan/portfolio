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
});