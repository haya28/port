document.addEventListener('DOMContentLoaded', () => {
    const skillIcons = document.querySelectorAll('.skill-icons img');
    const skillDetails = document.querySelector('.skill-details');

    skillIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const skill = icon.getAttribute('data-skill');
            const skillContent = document.getElementById(skill);

            if (skillContent) {
                // 現在表示中のスキル詳細を取得
                const currentlyDisplayed = skillDetails.querySelector('div[style="display: block;"]');
                
                if (currentlyDisplayed === skillContent) {
                    // 同じスキルがクリックされた場合は非表示にする
                    skillContent.style.display = 'none';
                } else {
                    // 他のすべてのスキル詳細を非表示にする
                    skillDetails.querySelectorAll('div').forEach(div => {
                        div.style.display = 'none';
                    });
                    // クリックされたスキルの詳細を表示する
                    skillContent.style.display = 'block';
                }
            }
        });
    });
});