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
            p_checkout.append(div_product.children[0].children[1].children[0].innerHTML); // + div_product.children[0].children[0].children[1].children[1].innerHTML);
            img_checkout.src = div_product.children[0].children[0].children[0].src;
            link_checkout.append(img_checkout);
            link_checkout.append(p_checkout);
            drop_menu.append(link_checkout);
        });
        div_product.appendChild(btn);
    }
}