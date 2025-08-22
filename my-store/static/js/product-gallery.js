document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('mainProductImage');
    if (!mainImage) return; // 如果页面上没有主图，就什么都不做

    const thumbnails = document.querySelectorAll('.product-thumbnail');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // 获取被点击的缩略图的 src
            const newSrc = this.getAttribute('src');
            // 将主图的 src 设置为新的 src
            mainImage.setAttribute('src', newSrc);
        });
    });
});