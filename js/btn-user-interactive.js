document.addEventListener('DOMContentLoaded', () => {
document.addEventListener('click', e => {
const interactive = e.target.closest('.custom-btn-user-interactive');
if (interactive) { interactive.classList.toggle('active'); return; }

const cat = e.target.closest('.custom-btn');
if (cat) {
    const group = cat.closest('.btn-group-custom');
    if (group) {
    group.querySelectorAll('.custom-btn.active').forEach(b => b.classList.remove('active'));
    cat.classList.add('active');
    }
}
});
});