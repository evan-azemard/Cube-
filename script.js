document.addEventListener("scroll", () => {
    let totalScroll = ((window.scrollY + window.innerHeight) / document.body.offsetHeight) * 100

    if (totalScroll < 35){
        let cube = document.querySelector('.cube1');
        if (cube){
            cube.className = "cube"
        }

    }
    if (totalScroll > 35){
        let cube = document.querySelector('.cube');
        if (cube){
            cube.className = "cube1"
        }
    }
})
