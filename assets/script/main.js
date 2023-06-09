try {
    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        // Ấn hết tab
        tabcontent = document.getElementsByClassName("product-main");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Xóa hết active của tablinks trên navbar
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Hiện active + hiện tab
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    document.getElementById("defaultOpen").click();

} catch (error) {

}
try {
    function openReview(index) {
        var tabReview = document.querySelectorAll('.tab-pane');
        for(i = 0; i < tabReview.length; i++){
            tabReview[i].classList.remove('active');
        }
        tabReview[index].classList.add('active');
    }
    reviews = document.querySelectorAll('.dec-and-review-menu a');
    reviews.forEach((btn, index) => {
        btn.addEventListener('click', e => {
            reviews.forEach(item => {
                item.classList.remove('active')
            })
            reviews[index].classList.add('active')
            openReview(index)
        })
    })
} catch (error) {

}

