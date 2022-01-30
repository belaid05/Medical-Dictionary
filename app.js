const data = [
    {
        term: "Abrasion",
        definition: "",
        ar: "تآكل"
    },
    {
        term: "Acetaminophen",
        definition: "",
        ar: "الأسيتامينوفان"
    },
    {
        term: "Acromioclavicular",
        definition: "",
        ar: "المفصل الأخرمي التّرقوي"
    },
    {
        term: "Acromion",
        definition: "",
        ar: "الأخرم"
    },
    {
        term: "Analgesics",
        definition: "",
        ar: "مسكّنات"
    },
    {
        term: "Ankle sprain",
        definition: "",
        ar: "إلتواء الكاحل"
    },
    {
        term: "Anterior cruciate ligament",
        definition: "",
        ar: "الرباط الصليبي الأمامي"
    },
    {
        term: "Antibiotics",
        definition: "",
        ar: "مضادات حيويّة"
    },
    {
        term: "Anti-inflammatory",
        definition: "",
        ar: "مضاد الإلتهاب"
    },
    {
        term: "Antimicrobials",
        definition: "",
        ar: "مضادات الميكروبات"
    },
    {
        term: "Arrhythmia",
        definition: "",
        ar: "اضطراب دقّات القلب"
    }
,
    {
        term: "Arthritis",
        definition: "",
        ar: "إلتهاب عظام المفاصل"
    },
    {
        term: "Arthroscope",
        definition: "",
        ar: "جهاز التنظير الطبي ، منظار المفصل"
    },
    {
        term: "Arthroscopy",
        definition: "",
        ar: "تنظير المفصل"
    },
    {
        term: "Automated external defibrillator",
        definition: "",
        ar: "مزيل الرجفان الخارجي الآلي"
    },
    {
        term: "Antimicrobials",
        definition: "",
        ar: "مضادات الميكروبات"
    },
    {
	term: "Bloodstream",
	definition: "",
	ar: "مجرى الدم"
    },
    {
	term: "Bone",
	definition: "",
	ar: "العظم"
    },
    {
	term: "Cardiac ultrasound",
	definition: "",
	ar: "أشعة موجات فوق صوتية للقلب"
    },
    {
	term: "Cartilage",
	definition: "",
	ar: "الغضروف"
    },
    {
	term: "Cavity",
	definition: "",
	ar: "تجويف"
    },
    {
	term: "Cells",
	definition: "",
	ar: "الخلايا"
    },
    {
	term: "Clavicle",
	definition: "",
	ar: "عظم الترقوة"
    },
    {
	term: "Commotio Cordis",
	definition: "",
	ar: "ارتجاج عضلة القلب"
    },
    {
	term: "Complication",
	definition: "",
	ar: "ارتجاج عضلة القلب"
    },
    {
	term: "Concussion",
	definition: "",
	ar: "ارتجاج"
    },
    {
	term: "Cortisone",
	definition: "",
	ar: "الكورتيزون"
    },
    {
	term: "CT-Scan",
	definition: "",
	ar: "أشعة مقطعيّة"
    },
    {
	term: "Degeneration",
	definition: "",
	ar: "تنكّس"
    },
    {
	term: "Dislocation",
	definition: "",
	ar: "خلع"
    },
    {
	term: "Elbow",
	definition: "",
	ar: "المرفق"
    },
    {
	term: "Electrocardiogram",
	definition: "",
	ar: "تخطيط القلب الكهربائي"
    },
    {
	term: "Electrolytes",
	definition: "",
	ar: "الشّوارد"
    },
    {
	term: "Femur",
	definition: "",
	ar: "عظم الفخذ"
    },
    {
	term: "Fibula",
	definition: "",
	ar: "الشظيّة"
    },
    {
	term: "Flexibility",
	definition: "",
	ar: "مرونة"
    },
    {
	term: "Fracture",
	definition: "",
	ar: "كسر"
    },
    {
	term: "Heat exhaustion",
	definition: "",
	ar: "الإنهاك الحراري"
    },
    {
	term: "Hip",
	definition: "",
	ar: "الورك"
    },
    {
	term: "Humerus",
	definition: "",
	ar: "عظم العضد"
    },
    {
	term: "Hypertrophic cardiomyopathy",
	definition: "",
	ar: "اعتلال عضلة القلب الضخامي"
    },
    {
	term: "Imprigement",
	definition: "",
	ar: "تهتّك"
    },
    {
	term: "Infection",
	definition: "",
	ar: "التهاب"
    },
    {
	term: "Joint",
	definition: "",
	ar: "المفصل"
    },
    {
	term: "Knee",
	definition: "",
	ar: "الركبة"
    },
    {
	term: "Lateral collateral ligament (LCL)",
	definition: "",
	ar: "الرباط الجانبي الوحشي"
    },
    {
	term: "Ligament",
	definition: "",
	ar: "الرباط"
    },
    {
	term: "Lung",
	definition: "",
	ar: "الرّئة"
    },
    {
	term: "Magnetic Resonance Imaging MRI",
	definition: "",
	ar: "التصوير بواسطة الرّنين المغناطيسي"
    },
    {
	term: "Meniscus",
	definition: "",
	ar: "الغضروف المفصلي"
    },
    {
	term: "Methicillin-resistant Staphylococcus aureus",
	definition: "",
	ar: "المكورات العنقودية الذهبية المقاومة للميثيسيلين"
    },
    {
	term: "Muscle",
	definition: "",
	ar: "العضلة"
    },
    {
	term: "Musculoskeletal",
	definition: "",
	ar: "الهيكل العظمي"
    },
    {
	term: "Nerve",
	definition: "",
	ar: "عصب"
    },
    {
	term: "Neurological",
	definition: "",
	ar: "عصبي"
    },
    {
	term: "Non-steroidal",
	definition: "",
	ar: "غير إستيرويدي"
    },
    {
	term: "Osteoarthritis",
	definition: "",
	ar: "الفصال العظمي"
    },
    {
	term: "Palpitations",
	definition: "",
	ar: "خفقان"
    },
    {
	term: "Physical therapist",
	definition: "",
	ar: "معالج فيزيائي"
    },
    {
	term: "Physical therapy",
	definition: "",
	ar: "العلاج الفيزيائي"
    },
    {
	term: "Platelet rich plasm",
	definition: "",
	ar: "البلازما الغنية بالصفائح"
    },
    {
	term: "Plyometrics",
	definition: "",
	ar: "البليومتريكس"
    },
    {
	term: "Potassium",
	definition: "",
	ar: "البوتاسيوم"
    },
    {
	term: "Rehabilitation",
	definition: "",
	ar: "إعادة التّأهيل"
    },
    {
	term: "Rotator-cuff",
	definition: "",
	ar: "الكفّة المدوّرة"
    },
    {
	term: "Scapula",
	definition: "",
	ar: "لوح الكتف"
    },
    {
	term: "Second impact syndrome",
	definition: "",
	ar: "متلازمة الإصطدام الثاني"
    },
    {
	term: "Seizure",
	definition: "",
	ar: "نوبة"
    },
    {
	term: "Shoulder",
	definition: "",
	ar: "الكتف"
    },
    {
	term: "Skin",
	definition: "",
	ar: "الجلد"
    },
    {
	term: "Sodium",
	definition: "",
	ar: "الصوديوم"
    },
    {
	term: "Stress fractures",
	definition: "",
	ar: "كسور الإجهاد"
    },
    {
	term: "Subluxation",
	definition: "",
	ar: "خلع جزئي"
    },
    {
	term: "Swelling",
	definition: "",
	ar: "تورم"
    },
    {
	term: "Symptoms",
	definition: "",
	ar: "الأعراض"
    },
    {
	term: "Syndesmosis",
	definition: "",
	ar: "متلازمة التّناذر"
    },
    {
	term: "Tendon",
	definition: "",
	ar: "الوتر"
    },
    {
	term: "Tibia",
	definition: "",
	ar: "الظنبوب"
    },
    {
	term: "Traumatic fracture",
	definition: "",
	ar: "كسر رضيّ"
    },
    {
	term: "Urinary tract",
	definition: "",
	ar: "الجهاز البولي"
    },
    {
	term: "Vertebral disk",
	definition: "",
	ar: "قرص فقاري"
    },
    {
	term: "Wrist",
	definition: "",
	ar: "المعصم"
    },
    {
	term: "X-rays",
	definition: "",
	ar: "الأشعّة السينيّة"
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
        item.onclick = (e) => {
            let def = document.querySelector('.def');
            let tra = document.querySelector('.tra');
            def.innerHTML = `
            <span><b>${data[i].term}</b></span><br>
            <span>${data[i].definition}</span>`
            tra.innerHTML = `
            <span><b>Arabic translation</b></span><br>
            <span>${data[i].ar}</span>`
            
        }
    })

  
    
    let input = document.querySelector('.search-input')
    let result_div = document.querySelector('.instant-results');
    input.onkeyup = () => {
        var instant_result = data.filter((item, i) => data[i].term.toLowerCase().includes(input.value)) 
        if (input.value.length && instant_result == "[]") {
            result_div.classList.remove('show')
        } else if(input.value.length) {
            result_div.classList.add('show')
           
            
           

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
                <span><b>${arr[index].term}</b></span><br>
                <span>${arr[index].definition}</span>`
                tra.innerHTML = `
                <span><b>Arabic translation</b></span><br>
                <span>${arr[index].ar}</span>`
                result_div.classList.remove('show')
                input.value = ''
            }
        })
    }

    input.addEventListener("focusout", () => {
        result_div.classList.remove('show')
        input.value = ''
    })
