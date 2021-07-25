export default function dragNDrop() {
    let dragSrcEl;

    function handleDragEnd(e) {
        this.style.opacity = '1';

        items.forEach(function (item) {
            item.classList.remove('over');
        });
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        return false;
    }

    function handleDragEnter(e) {
        this.classList.add('over');
    }

    function handleDragLeave(e) {
        this.classList.remove('over');
    }
    function handleDrop(e) {
        e.stopPropagation();

        if (dragSrcEl !== this) {
            this.replaceWith(this, dragSrcEl);
        }

        return false;
    }
    function handleDragStart(e) {
        this.style.opacity = '0.4';

        dragSrcEl = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    let items = document.querySelectorAll('.colSelect__metrics .metrics');
    items.forEach(function (item) {
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragenter', handleDragEnter, false);
        item.addEventListener('dragover', handleDragOver, false);
        item.addEventListener('dragleave', handleDragLeave, false);
        item.addEventListener('drop', handleDrop, false);
        item.addEventListener('dragend', handleDragEnd, false);
    });

    return function dragNDropCleanup() {
        let items = document.querySelectorAll('.colSelect__metrics .metrics');
        items.forEach(function (item) {
            item.removeEventListener('dragstart', handleDragStart, false);
            item.removeEventListener('dragenter', handleDragEnter, false);
            item.removeEventListener('dragover', handleDragOver, false);
            item.removeEventListener('dragleave', handleDragLeave, false);
            item.removeEventListener('drop', handleDrop, false);
            item.removeEventListener('dragend', handleDragEnd, false);
        });
    };
}
