const data = [
    {
        term: "Hello",
        definition: "to greet someone",
        ar: "مرحبا"
    },
    {
        term: "good",
        definition: "when something is in a good condition",
        ar: "جيد"
    },
    {
        term: "bad",
        definition: "in a bad or a lower situation",
        ar: "سيء"
    },
    {
        term: "sweet",
        definition: "of a swett taste, cute",
        ar: "لطيف"
    },
    {
        term: "hungry",
        definition: "the feeling when you need to eat",
        ar: "جائع"
    },
    {
        term: "scary",
        definition: "gives a feeling of frightness",
        ar: "مخيف"
    },
    {
        term: "computer",
        definition: "a device that is used to calculate and perform tasks for you",
        ar: "كمبيوتر"
    },
    {
        term: "house",
        definition: "the place where people live and sleep",
        ar: "منزل"
    },
    {
        term: "supermarket",
        definition: "a larg place where people can buy all what they need",
        ar: "سوق"
    },
    {
        term: "algeria",
        definition: "a country that is located in north Africa",
        ar: "الجزائر"
    }
]

let list = document.querySelector(".list")
data.forEach(item => {
    
    let ul = document.createElement('ul')
    let word = `
    <li class="li">${item.term}</li>
    `;
    ul.innerHTML = word;
    list.appendChild(ul)
})


    let li = document.querySelectorAll('.li')
    li.forEach((item, i) => {
        item.onclick = () => {
            let def = document.querySelector('.def');
            let tra = document.querySelector('.tra');
            def.innerHTML = `
            <span><b>Definition</b></span><br>
            <span>${data[i].definition}</span>`
            tra.innerHTML = `
            <span><b>Arabic translation</b></span><br>
            <span>${data[i].ar}</span>`

        }
    })
    
    let input = document.querySelector('.search-input')
    let result_div = document.querySelector('.instant-results');
    input.onkeyup = () => {
        
        if(input.value.length) {
            result_div.classList.add('show')
           let instant_result = data.filter((item, i) => data[i].term.toLowerCase().includes(input.value)) 
            
      

           let result =  instant_result.map(item => {
               return `<li class="search-li">${item.term}</li>`;
           }).join('');
           
          

            let ul = `<ul>${result}</ul>`
            result_div.innerHTML = ul   
            let search_li = document.querySelectorAll('.search-li');
            
            
            search_results_onclick(search_li, instant_result)
        } else {
            result_div.classList.remove('show')
        }
    }
    
    

    function search_results_onclick(element, arr) {
        element.forEach((item, index) => {
            item.onclick = () => {
                let def = document.querySelector('.def');
                let tra = document.querySelector('.tra');
                def.innerHTML = `
                <span><b>Definition</b></span><br>
                <span>${arr[index].definition}</span>`
                tra.innerHTML = `
                <span><b>Arabic translation</b></span><br>
                <span>${arr[index].ar}</span>`
                result_div.classList.remove('show')
                input.value = ''
            }
        })
    }

