    import "./styles.css";


document.querySelectorAll("button")
        .forEach((btn) => btn.addEventListener("click", () => loadTab(btn)))       

function loadTab(tab){
    let content = document.querySelector(".content")
    content.replaceChildren();

    function dry(parent, pageNumber) { // to avoid repetition, i made this function
        const numberOfImages = 8

        for(let i = 1; i <= numberOfImages; i++) {
            let img = document.createElement("img")
            img.classList.add("masonry")

            switch(i) {
                case 1:img.src = "https://images.unsplash.com/photo-1742646803028-94ac3bd00762?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; break;   
                case 2:img.src = "https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; break; 
                case 3:img.src = "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; break; 
                case 4:img.src = "https://images.unsplash.com/photo-1501959915551-4e8d30928317?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; break; 
                case 5:img.src = "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; break; 
                case 6:img.src = "https://images.unsplash.com/photo-1600335895229-6e75511892c8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; break; 
                case 7:img.src = "https://images.unsplash.com/photo-1601314002592-b8734bca6604?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; break; 
                case 8:img.src = "https://images.unsplash.com/photo-1615653633551-25dd80d2765a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; break; 
            }

            if(pageNumber == 2) {
                let foodTxt = document.createElement("div");
                foodTxt.textContent = `food ${i}` ;
                foodTxt.classList.add("text-description");
                parent.appendChild(foodTxt);
            }

            parent.appendChild(img);
        }
    }
    
    if(tab.classList.value === "ui-buttons one"){
        const upperPart = document.createElement("div");
        upperPart.classList.add("upper-part");
        const header = document.createElement("header");
        header.textContent = "Welcome";
        const imageHeader = document.createElement("img");
        imageHeader.classList.add("home-img");

        upperPart.appendChild(header);
        upperPart.appendChild(imageHeader)
        content.appendChild(upperPart);

        const textOne = document.createElement("div");
        textOne.classList.add("text");
        textOne.textContent = "This is some of the food that we do if you're curious";
        content.appendChild(textOne);

        const containerImages = document.createElement("div");
        containerImages.classList.add("container-for-images");

        dry(containerImages, 1);
        content.appendChild(containerImages)

        const textTwo = document.createElement("div");
        textTwo.classList.add("text");
        textTwo.textContent = "Looks tasty right? why not go to our restaurant!";
        content.appendChild(textTwo);

    } else if(tab.classList.value === "ui-buttons two") {

        const containerImagesSecond = document.createElement("div");
        containerImagesSecond.classList.add("container-for-images-second")
        dry(containerImagesSecond, 2);
        content.appendChild(containerImagesSecond);

    } else if(tab.classList.value === "ui-buttons three") {

        const textStart = document.createElement("div");
        textStart.classList.add("text-start")
        textStart.textContent = "About us"
        
        const infoTxtOne = document.createElement("div");
        infoTxtOne.classList.add("info");
        infoTxtOne.textContent = "Bienvenue to La Belle Époque, where the charm of Paris meets the warmth of your neighborhood! Nestled in the heart of the city, our family-owned French restaurant brings authentic, time-honored recipes to your table with a modern twist." 
        
        const infoTxtTwo = document.createElement("div");
        infoTxtTwo.classList.add("info");
        infoTxtTwo.textContent = "Inspired by the elegance of 19th-century France, our cozy bistro offers a culinary escape to the streets of Montmartre. From our velvety Coq au Vin to our delicate Crème Brûlée, every dish is crafted with fresh, locally sourced ingredients and a passion for French tradition. Pair your meal with a glass from our curated selection of French wines, and let the evening unfold."
        
        const infoTxtThree = document.createElement("div");
        infoTxtThree.classList.add("info");
        infoTxtThree.textContent = "Come savor the taste of France. We can’t wait to welcome you! We are open from 1 to 8pm";

        content.appendChild(textStart);
        content.appendChild(infoTxtOne);
        content.appendChild(infoTxtTwo);
        content.appendChild(infoTxtThree);

    } else if(tab.classList.value === "ui-buttons four") {

        const contactOne = document.createElement("div");
        contactOne.textContent = "Contact Us!";
        contactOne.classList.add("contact");

        const contactTwo = document.createElement("div");
        contactTwo.textContent = "somefakerestaurant@gmail.com";
        contactTwo.classList.add("info");

        const contactThree = document.createElement("div");
        contactThree.classList.add("info");
        contactThree.textContent = "We are on fake avenue 2730 inside this sewer, so good luck finding us! hehe";

        const imageContact = document.createElement("img");
        imageContact.classList.add("location");
        imageContact.src = "https://images.unsplash.com/photo-1502514276381-1ea51dfe201c?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        
        content.appendChild(contactOne);
        content.appendChild(contactTwo);
        content.appendChild(contactThree);
        content.appendChild(imageContact);
    }
}
