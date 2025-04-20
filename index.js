window.addEventListener("load", () =>{
    const title = document.getElementById("title_title");
    const illust = document.getElementById("title_illust");

    title.style.opacity = 1;
    illust.style.opacity = 1;
})

window.addEventListener("load", () => {
    const overlay = document.getElementById("overlay");
    overlay.style.opacity = 0;

    setTimeout(() => {
        const targets = document.querySelectorAll(".hidden"); // ←クラスで複数取得！

        window.addEventListener('scroll', () => {
            targets.forEach(target => { // ←forEachで1個ずつ見る
                const targetRect = target.getBoundingClientRect();

                // 画面の8割くらいに来たら表示する
                if (targetRect.top < window.innerHeight * 0.8) {
                    target.classList.add('show');
                }
            });
        });
    }, 1000);
});

document.getElementById('d_glico').addEventListener("click", () =>{
    alert("glico公式に飛ぶ");
});
document.getElementById('d_insta').addEventListener("click", () =>{
    alert("instagramに共有");
});
document.getElementById('d_tik').addEventListener("click", () =>{
    alert("TikTokに共有");
});
document.getElementById('d_x').addEventListener("click", () =>{
    alert("Xに共有");
});


document.getElementById('d_backtotop').addEventListener("click", () =>{
    window.scrollTo({ top: 0, behavior: "smooth" });
});
