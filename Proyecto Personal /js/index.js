document.addEventListener('DOMContentLoaded', event => {
    fFilter.addEventListener("submit", async (event) => {
        event.preventDefault();
    
        console.log("filtering ...");
    
        const filter = iFilter.value;
    
        if (filter !== "") {
         
          const dataRequest = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${filter}&download=epub&key=AIzaSyDKHvDsVJbhZV5NRRm-HdIR3ZnymduFJbQ`);
          const dataJson = await dataRequest.json();
          let books= dataJson.items;
          console.log(books)

          if (books.length > 0) {
           
            results.innerHTML = "";
            books.forEach((b) => {
              const li = document.createElement("li");
              const a = document.createElement("a");
    
              let pr = document.createElement("p");
              pr.innerHTML = b.volumeInfo.title;
              li.appendChild(pr);

              // let div0 = document.createElement("div");
              // div0.className = "bookcoverer";

              let pr2 = document.createElement("p");
              pr2.innerHTML = `<img src="${b.volumeInfo.imageLinks.thumbnail}"/>`;
              a.appendChild(pr2);

              let div1 = document.createElement("div");
              div1.className = "columna2";

              let pr3 = document.createElement("p");
              pr3.innerHTML = b.volumeInfo.publishedDate;
              pr3.title = "Publication Date";
              div1.appendChild(pr3);
              // HTMLElementObject.title = "Publication Date";

              // document.getElementById("p3").title = "Publication Date";
    
              let pr4 = document.createElement("p");
              pr4.innerHTML = b.volumeInfo.language;
              div1.appendChild(pr4);

              let pr5 = document.createElement("p");
              pr5.innerHTML = `<a href="${b.volumeInfo.previewLink}">Preview<a/>`;
              div1.appendChild(pr5);
            
              a.appendChild(div1);
              li.appendChild(a);

              results.appendChild(li);
            });
          }

        }
    })
})
