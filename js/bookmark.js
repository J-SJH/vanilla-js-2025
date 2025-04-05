function loadBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const bookmarkList = document.getElementById('bookmark-list');
    bookmarkList.innerHTML = '<h2>List : </h2>';

    bookmarks.forEach(bookmark => {
        const div = document.createElement('div');
        div.classList.add('bookmark');
        div.innerHTML = `<span>📂</span> <a href="${bookmark.url}" target="_blank">${bookmark.title}</a>`;
        bookmarkList.appendChild(div);
    });
}

document.getElementById('bookmark-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('bookmark-title').value;
    const url = document.getElementById('bookmark-url').value;

    if (title && url) {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarks.push({ title, url });
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

        document.getElementById('bookmark-title').value = '';
        document.getElementById('bookmark-url').value = '';

        loadBookmarks();
        toggleBookmarkForm();
    }
});

function toggleBookmarkForm() {
    const form = document.getElementById('bookmark-form');
    const titleInput = document.getElementById('bookmark-title');
    const urlInput = document.getElementById('bookmark-url');
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
        localStorage.setItem('form-visible', 'true');
    } else {
        form.style.display = 'none';
        localStorage.setItem('form-visible', 'false');
    }

    // 입력값 불러오기
    titleInput.value = localStorage.getItem('bookmark-title') || '';
    urlInput.value = localStorage.getItem('bookmark-url') || '';
}

document.getElementById('add-bookmark-btn').addEventListener('click', toggleBookmarkForm);

window.onload = function() {
    const form = document.getElementById('bookmark-form');
    const formVisible = localStorage.getItem('form-visible');

    if (formVisible === 'true') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
    
    loadBookmarks();
};