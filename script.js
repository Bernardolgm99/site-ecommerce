var i = 0


create_button()
function create_button() {
    for (let i = 0; i < document.getElementById("highlight").childElementCount; i++) {
        let div_product = document.getElementById("highlight").children[i];
        let btn = document.createElement("button");
        let img_btn = document.createElement("img");
        img_btn.src = "/galery/shopping-cart.png";
        btn.append(img_btn)
        btn.append("Add To Basket");
        btn.addEventListener("click", function () {
            let drop_menu = document.getElementById("dropdown-content");
            let link_checkout = document.createElement("a");
            let img_checkout = document.createElement("img");
            let p_checkout = document.createElement("p");
            let btn_delete = document.createElement("button");
            let img_btn_delete = document.createElement("img");
            let div_drop = document.createElement("div")
            img_btn_delete.className = "img_delete"
            img_btn_delete.src = "/galery/x.png"
            btn_delete.append(img_btn_delete)
            btn_delete.className = "delete"
            btn_delete.addEventListener("click", function() {
                this.parentNode.remove();
            });
            p_checkout.append(div_product.children[0].children[1].children[0].innerText + " " + div_product.children[0].children[1].children[1].innerText);
            img_checkout.src = div_product.children[0].children[0].children[0].src;
            link_checkout.append(img_checkout);
            link_checkout.append(p_checkout);
            link_checkout.href = div_product.children[0].href
            div_drop.append(link_checkout);
            div_drop.append(btn_delete)
            div_drop.className = "div_drop"
            drop_menu.append(div_drop);
        });
        div_product.appendChild(btn);
    }
}