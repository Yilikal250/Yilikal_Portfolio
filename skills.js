function createSkillBar(skill, percentage){
    const skillsContainer = document.getElementById('Skills');

    // Create skill bar wrapper
    const skillBarWrapper = document.createElement('div');
    skillBarWrapper.className = 'Skill_Bar';

    // Create skill bar
    const skillBar = document.createElement('div');

    // Create skill name span
    const skillArea = document.createElement('span');
    skillArea.className = 'skill_area';
    skillArea.textContent = skill;

    // Create percentage span
    const skillPercentage = document.createElement('span');
    skillPercentage.className = 'Percentage';
    skillPercentage.textContent = `${percentage}%`;

    // Append spans to skill bar
    skillBar.appendChild(skillArea);
    skillBar.appendChild(skillPercentage);

    // Append skill bar to skill bar wrapper
    skillBarWrapper.appendChild(skillBar);

    // Append skill bar wrapper to skills container
    skillsContainer.appendChild(skillBarWrapper);

    // Set timeout to animate the width
    setTimeout(() => {
        skillBar.style.width = `${percentage}%`;
    }, 100);

}

createSkillBar('Html', 100);
createSkillBar('CSS', 90);
createSkillBar('JavaScript', 80);
createSkillBar('React', 100);
createSkillBar('SQL', 90);
createSkillBar('Python', 80);
createSkillBar('Django', 80);