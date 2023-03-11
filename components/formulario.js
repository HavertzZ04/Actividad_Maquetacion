export default{
    name: document.querySelector("#myFrom"),
    confi: {
        method: "POST", 
        body: null
    },
    Data: async function(){
        let peticion = await fetch("config.json");
        let json = await peticion.json();
        document.querySelectorAll(".title")[0].insertAdjacentText("beforeend", json["contact-info"][0]);
        document.querySelector(".text").insertAdjacentText("beforeend", json["contact-info"][1]);
        document.querySelectorAll(".information p")[0].insertAdjacentText("beforeend", json["contact-info"][2]);
        document.querySelectorAll(".information p")[1].insertAdjacentText("beforeend", json["contact-info"][3]);
        document.querySelectorAll(".information p")[2].insertAdjacentText("beforeend", json["contact-info"][4]);
        document.querySelector(".social-media p").insertAdjacentText("beforeend", json["contact-info"][5]);
        document.querySelectorAll(".social-icons a")[0].href= json["contact-info"][6]
        document.querySelectorAll(".social-icons a")[1].href= json["contact-info"][7]
        document.querySelectorAll(".social-icons a")[2].href= json["contact-info"][8]
        document.querySelectorAll(".social-icons a")[3].href= json["contact-info"][9]
        document.querySelectorAll(".title")[1].insertAdjacentText("beforeend", json["contact-form"][0])
        document.querySelectorAll(".input-container input")[0].name= json["contact-form"][1]
        document.querySelectorAll(".input-container label")[0].insertAdjacentText("beforeend", json["contact-form"][1])
        document.querySelectorAll(".input-container span")[0].insertAdjacentText("beforeend", json["contact-form"][1])
        document.querySelectorAll(".input-container input")[1].name= json["contact-form"][2]
        document.querySelectorAll(".input-container label")[1].insertAdjacentText("beforeend", json["contact-form"][2])
        document.querySelectorAll(".input-container span")[1].insertAdjacentText("beforeend", json["contact-form"][2])
        document.querySelectorAll(".input-container input")[2].name= json["contact-form"][3]
        document.querySelectorAll(".input-container label")[2].insertAdjacentText("beforeend", json["contact-form"][3])
        document.querySelectorAll(".input-container span")[2].insertAdjacentText("beforeend", json["contact-form"][3])
        document.querySelectorAll(".input-container textarea")[0].name= json["contact-form"][4]
        document.querySelectorAll(".input-container label")[3].insertAdjacentText("beforeend", json["contact-form"][4])
        document.querySelectorAll(".input-container span")[3].insertAdjacentText("beforeend", json["contact-form"][4])
        document.querySelector(".btn").value= json["contact-form"][5]
    },
    Send(){
        this.name.addEventListener("submit", async(e)=>{
            e.preventDefault();
            this.confi.body = JSON.stringify(Object.fromEntries(new FormData(e.target)));
            let peticion = await fetch(this.name.action,this.confi);
            let success = await peticion.text();
            this.name.reset();
            console.log(success);
        })
    }
}