
// let setSearchEngine = new function(){
//     return document.querySelector("input[name=engine]:checked");
// }

window.addEventListener("load", function(){
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let setSearchEngine = document.querySelector("input[name=engine]:checked");
        // // let searchInput = document.querySelector("input[name=q]");
        // // if(searchInput.value === "" || setSearchEngine === false);
        // // {
        // //     alert("All fields are required!");
        // //     event.preventDefault();
        // // }
        let actions = 
        {
            "google": "https://www.google.com/search",
            "duckDuckGo": "https://duckduckgo.com/",
            "bing": "https://www.bing.com/search",
            "ask": "https://www.ask.com/web"
        };
        document.searchForm.action = actions[setSearchEngine.value]
    });
});

