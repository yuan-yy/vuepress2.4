(function () {
    setTimeout(function () {
        let flag = true;
        let d1 = document.getElementsByClassName("sidebar")[0];
        let svg2 = document.getElementsByClassName("divJJ")[0];
        if (svg2) {
            document.body.removeChild(svg2);
        }
        if (d1.clientHeight) {
            let d1With = d1.clientWidth;
            let d1Height = d1.clientHeight;
            d1.setAttribute("style", "transition: transform 0.95s;");
            let zuoJ = '<svg t="1647588735596" class="svgJJ" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7742" width="50" height="50"><path d="M344.36608 500.096v-23.80288h23.808v-23.80288h23.80288v-23.808h23.80288v-23.80288h23.808v-23.86944h23.808v-23.80288h23.86944v-23.80288h23.80288v-23.808h23.80288v-23.808h23.808v-23.808h23.80288v-23.80288h23.808v-23.86944h23.80288v-23.80288h23.86944v-23.80288h23.80288v-23.808h23.808V119.0912h23.808v-23.80288h23.80288V71.4752h23.80288V0h-71.41376v23.80288h-23.808v23.86944h-23.80288v23.80288h-23.86944v23.81312h-23.80288v23.80288h-23.808v23.80288h-23.80288v23.808h-23.808v23.80288h-23.80288v23.80288h-23.80288v23.86944h-23.86944v23.80288h-23.808v23.808h-23.808v23.808h-23.80288v23.808h-23.80288v23.80288h-23.808v23.80288H320.5632v23.86944h-23.86944v23.80288h-23.80288v23.808H249.088v23.80288H225.28V547.77344h23.808v23.80288h23.80288v23.808h23.80288v23.808h23.86944v23.80288h23.80288v23.80288h23.808v23.80288h23.80288v23.86944h23.80288v23.808h23.808v23.80288h23.808v23.808h23.86944v23.80288h23.80288v23.808h23.80288v23.80288h23.808v23.80288h23.80288v23.86944h23.808v23.808h23.80288v23.80288h23.86944v23.808h23.80288v23.80288h23.808V1024h71.41376v-71.41376h-23.80288v-23.80288h-23.80288v-23.808h-23.808v-23.86944h-23.808v-23.80288h-23.80288v-23.80288h-23.86944v-23.808h-23.80288v-23.80288h-23.808v-23.808h-23.80288v-23.80288h-23.808v-23.808h-23.80288v-23.86944h-23.80288v-23.80288h-23.86944v-23.80288h-23.808v-23.80288h-23.808v-23.808h-23.80288v-23.808h-23.80288v-23.86432h-23.808v-23.808H320.5632v-23.808z" p-id="7743"></path></svg>'
            let d2 = document.getElementsByClassName("divJJ")[0];
            if (d1 && !d2) {
                let div = document.createElement("div");
                div.setAttribute("style", `position: fixed; width: 50px; height: 50px;top: ${d1Height / 2 - 25}px;left:${d1With}px;transition: transform 0.95s; `);
                div.setAttribute("class", "divJJ");
                div.innerHTML = zuoJ;
                document.body.appendChild(div);
                div.addEventListener("click", activeClick)

                let svg = document.getElementsByClassName("svgJJ")[0];
                svg.setAttribute("style", "fill: var(--theme-color);cursor: pointer;")
            }
            if (d2) {
                let svg = document.getElementsByClassName("svgJJ")[0];
                svg.setAttribute("style", "fill: var(--theme-color)")
            }
            function activeClick() {
                let svg = document.getElementsByClassName("divJJ")[0];
                let yi = 0
                if (flag) {
                    yi = d1.clientWidth;
                    svg.style.transform = `rotate(180deg) translateX(${yi}px)`
                } else {
                    svg.style.transform = "rotate(0deg)"
                }
                d1.style.transform = `translateX(-${yi}px)`
                flag = !flag
            }
        }
    }, 200)

})()