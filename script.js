const tabs=document.querySelector(".bars-tab"),
subButton=document.querySelector("#submit"),
closeTab=document.querySelector(".close-tab .fa-close");


tabs.addEventListener("click", () =>{
    document.querySelector(".close-tab").style.display="block";
      console.log("clicked");
});

closeTab.addEventListener("click", ()=>{
    document.querySelector(".close-tab").style.display="none";
});