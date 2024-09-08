function searchContent() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const items = document.querySelectorAll('.content-item');

    items.forEach(item => {
        const title = item.getAttribute('data-title').toLowerCase();
        const content = item.querySelector('p').textContent.toLowerCase();
        const linkText = item.querySelector('a').textContent.toLowerCase();

        if (title.includes(input) || content.includes(input) || linkText.includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

document.getElementById('searchBar').addEventListener('keyup', searchContent);
