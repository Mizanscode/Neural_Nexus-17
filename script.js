// ১. স্টুডেন্টদের ডিফল্ট তথ্য (আইডি/রোল সহ ৩৮ জন শিক্ষার্থীর আপডেটেড ডাটা)
const initialStudents = [
    {
        name: "MD SHAMIM UL FAHAD MONDAL TITUMIR(CR)",
        id: "B250305024",
        schoolName: "Govt. Aditmari Girija Sankar Model School and College",
        collegeName: "Amena Baki Residential Model School & College",
        presentAddress: "Kagojitola Social Club, Sutrapur, Puran Dhaka",
        permanentAddress: "Kharuvanj, Sarpukur, Aditmari, Lalmonirhat",
        fb: "https://www.facebook.com/shamim.ul.fahad.titumir?mibextid=ZbWKwL",
        gender: "male"
    },
        {
        name: "Nafisa Rahman Prova(CR)",
        id: "B250305039",
        schoolName: "St. Francis Xavier's Girls' School & College",
        collegeName: "Ideal School & College",
        presentAddress: "82/D/E, Dinnath Sen Road, Gandaria, Dhaka-1204",
        permanentAddress: "Malopdia, Sirajdikhan, Munshiganj",
        fb: "https://www.facebook.com/nafisa.rahman.72238u",
        gender: "female"
    },
    {
        name: "Md. Mizanur Rahman",
        id: "B250305012",
        schoolName: "Tamirul Millat Kamil Madrasah, Tongi, Gazipur",
        collegeName: "Tamirul Millat Kamil Madrasah, Tongi, Gazipur",
        presentAddress: "Dhupkhola, Dhaka",
        permanentAddress: "Gobindogonj, Gaibandha",
        fb: "https://www.facebook.com/md.mizanur.rahman.207522",
        gender: "male"
    },
    {
        name: "Marufa Jahan Munni",
        id: "B240305037",
        schoolName: "Government Laboratory High School, Mymensingh",
        collegeName: "Muminunnesa Govt Woman's College, Mymensingh.",
        presentAddress: "Koltabazar, Dhaka",
        permanentAddress: "Nandail, Mymensingh",
        fb: "https://www.facebook.com/share/1A4jpnTLZ8/",
        gender: "female"
    },
    {
        name: "MD OMAR FARUK MEHEDI",
        id: "B250305030",
        schoolName: "CIVIL AVIATION SCHOOL AND COLLEGE",
        collegeName: "GOVERNMENT SCIENCE COLLEGE",
        presentAddress: "212 No West Nakhalpara",
        permanentAddress: "KISHORGONJ",
        fb: "https://www.facebook.com/share/1E3eDFL3Bg/",
        gender: "male"
    },
    {
        name: "Mahidul Islam Maruf",
        id: "B240305058",
        schoolName: "Uttara Hi School and College",
        collegeName: "BAF Shaheen College Dhaka",
        presentAddress: "Tongi College gate, Gazipur",
        permanentAddress: "Matlab uttar, Chandpur",
        fb: "https://www.facebook.com/share/17gfDxAgbi/",
        gender: "male"
    },
    {
        name: "Nilay Saha",
        id: "B250305034",
        schoolName: "Mirpur Bangla School and College",
        collegeName: "Dhaka College",
        presentAddress: "Mirpur 11, Dhaka -1216",
        permanentAddress: "Mirpur 11, Dhaka-1216",
        fb: "https://www.facebook.com/nilay.saha.1000",
        gender: "male"
    },
    {
        name: "Farjana Akter",
        id: "B250305019",
        schoolName: "Fulkoli Model Academy",
        collegeName: "BAF Shaheen College Dhaka",
        presentAddress: "Rosulbag, Mohakhali, Dhaka",
        permanentAddress: "Chhaterpaiya, Senbag, Noakhali",
        fb: "https://www.facebook.com/share/18bsgwSd9x/",
        gender: "female"
    },
    {
        name: "Sk Shifadul Islam",
        id: "B250305003",
        schoolName: "Khulna Public College",
        collegeName: "Khulna Public College",
        presentAddress: "Mugda, Dhaka.",
        permanentAddress: "Boyra, Khulna.",
        fb: "https://www.facebook.com/share/193z6hxwKN/",
        gender: "male"
    },
    {
        name: "MIRAJ AL JAHIN",
        id: "B250305009",
        schoolName: "Rani Bilashmoni Government Boys High School",
        collegeName: "Gazipur Cantonment College",
        presentAddress: "Malekerbari, Chowrasta, Gazipur",
        permanentAddress: "Malekerbari, Chowrasta, Gazipur",
        fb: "https://www.facebook.com/share/19GAHotxJp/",
        gender: "male"
    },
    {
        name: "Amir Hamza",
        id: "B250305043",
        schoolName: "UttarKhan Coligiate School, Uttarkhan, Uttara",
        collegeName: "Uttara Government College, Uttara",
        presentAddress: "UttarKhan, Uttara, Dhaka.",
        permanentAddress: "UttarKhan, Uttara, Dhaka",
        fb: "https://www.facebook.com/amirhamzashehab1",
        gender: "male"
    },
    {
        name: "Tahmida Tasnim Authy",
        id: "B250305062",
        schoolName: "Dr. Khastagir Gov. Girls High School",
        collegeName: "Adamjee Cantonment College",
        presentAddress: "1969, Madrasa road, west merajnagar, block d, Dhania, kadamtali, Dhaka-1236",
        permanentAddress: "1969, Madrasa road, west merajnagar, block d, Dhania, kadamtali, Dhaka-1236",
        fb: "https://www.facebook.com/share/1Kz2FRrRPe/",
        gender: "female"
    },
    {
        name: "MD Ashiquzzaman Mahin",
        id: "B250305004",
        schoolName: "Banani Bidyaniketon School and College",
        collegeName: "Govt. Science College",
        presentAddress: "West Shewrapara, Mirpur",
        permanentAddress: "Tarail, Kishoreganj",
        fb: "https://www.facebook.com/share/1P5b8xMbVU/",
        gender: "male"
    },
    {
        name: "Rinthia Islam Rupkotha",
        id: "B250305002",
        schoolName: "Puthia P.N Government High School",
        collegeName: "New Government Degree College Rajshahi",
        presentAddress: "Mohammadpur, Dhaka",
        permanentAddress: "Rajshahi",
        fb: "Rinthia Rupkotha",
        gender: "female"
    },
    {
        name: "Md. Nurus Shafi Sarker",
        id: "B250305042",
        schoolName: "Chandina Government Model Pilot High School",
        collegeName: "Cumilla Government City College",
        presentAddress: "Farmgate, Dhaka",
        permanentAddress: "Chandina, Cumilla",
        fb: "https://www.facebook.com/share/1CMeYsZgW3/?mibextid=wwXIfr",
        gender: "male"
    },
    {
        name: "Nigha ha Murshida",
        id: "B250305021",
        schoolName: "Kallaynpur Girl's School and College",
        collegeName: "Govt. Mohammadpur Model School and College",
        presentAddress: "Sutrapur, Sadarghat",
        permanentAddress: "Kuliarchar, Kishorgonj",
        fb: "https://www.facebook.com/negahe.murshida/",
        gender: "female"
    },
    {
        name: "Labiba Islam",
        id: "B250305060",
        schoolName: "Bangladesh Bank Adarsha High School",
        collegeName: "Ideal School and College, Motijheel",
        presentAddress: "22no. Karimullarbag, Faridabad, Dhaka - 1204",
        permanentAddress: "Gram Pangasii, Royganj, Sirajganj",
        fb: "https://www.facebook.com/share/18xFUA5Sqj/",
        gender: "female"
    },
    {
        name: "Nusrat Tabassum",
        id: "B250305052",
        schoolName: "Aora high school, Aora",
        collegeName: "Government Azizul Haque College",
        presentAddress: "Kalai, Joypurhat",
        permanentAddress: "Kalai, Joypurhat",
        fb: "https://www.facebook.com/share/1CtQkB9zuh/",
        gender: "female"
    },
    {
        name: "Arifa Akter Disha",
        id: "B240305029",
        schoolName: "Shilmon Abdul Hakim Master High School",
        collegeName: "Shaheed Ramiz Uddin Cantonment College",
        presentAddress: "Tongi, Gazipur",
        permanentAddress: "Tongi, Gazipur",
        fb: "https://www.facebook.com/share/1Upa9aLYHz/",
        gender: "female"
    },
    {
        name: "Jubayer Hossain",
        id: "B240305010",
        schoolName: "Velayet Hossain Bahumukhi Uchcha Bidyalay, Tangail",
        collegeName: "Dhaka City College, Dhaka",
        presentAddress: "Koltabazar, Sutrapur, Dhaka-1100",
        permanentAddress: "Tangail, Dhaka",
        fb: "https://www.facebook.com/jubayer.hossain.465056",
        gender: "male"
    },
    {
        name: "Tasnova Samrin",
        id: "B250305058",
        schoolName: "Dakkhin Banasree Model High School and College",
        collegeName: "National Ideal College",
        presentAddress: "South Banasree, Khilgaon, Dhaka-1219",
        permanentAddress: "Monohordi, Narsingdi",
        fb: "https://www.facebook.com/salinayesmin.salina.9",
        gender: "female"
    },
    {
        name: "Fariha Akter Tithi",
        id: "B250305061",
        schoolName: "Dulalpur High School, Shibpur, Narsingdi",
        collegeName: "Abdul Kadir Mollah City College, Narsingdi",
        presentAddress: "Nawabpur Road, Old Dhaka",
        permanentAddress: "Dulalpur, Shibpur, Narsingdi",
        fb: "https://www.facebook.com/profile.php?id=61589804646738",
        gender: "female"
    },
    {
        name: "Munjirul Islam",
        id: "B250305027",
        schoolName: "Mandra Radhaganj United Institution",
        collegeName: "Abdul Kadir Molla City College",
        presentAddress: "Keranigonj, Dhaka",
        permanentAddress: "Dighalia, Kotalipara, Gopalganj",
        fb: "https://www.facebook.com/profile.php?id=61589473642943",
        gender: "male"
    },
    {
        name: "Tahsin Reza Nuha",
        id: "B250305046",
        schoolName: "South point school and College",
        collegeName: "Ideal school and College",
        presentAddress: "Malibagh, Dhaka",
        permanentAddress: "Hajiganj, Chandpur",
        fb: "https://www.facebook.com/share/1EBg1WhqrP/",
        gender: "female"
    },
    {
        name: "MD. Jihadul Islam Rohan",
        id: "B250305054",
        schoolName: "Govt. Science High School",
        collegeName: "Dhaka City College",
        presentAddress: "Tejgaon, Dhaka",
        permanentAddress: "Sonaimuri, Noakhali",
        fb: "https://www.facebook.com/share/18rYqPnSpV/",
        gender: "male"
    },
    {
        name: "Sushan Moni Das",
        id: "B250305048",
        schoolName: "S.k. Govt. Girls' High School",
        collegeName: "Govt. Debendra College",
        presentAddress: "Tatibajar, Dhaka",
        permanentAddress: "East Dashora, Manikganj",
        fb: "https://www.facebook.com/share/1LRnZoLZWf/",
        gender: "female"
    },
    {
        name: "Mst Sabiha Akter Setu",
        id: "B250305011",
        schoolName: "Joypurhat Govt Girls High School",
        collegeName: "Viqarunnisa noon school and college",
        presentAddress: "Shantibagh, Dhaka",
        permanentAddress: "Kalai, Joypurhat",
        fb: "https://www.facebook.com/share/18Ce2mdFUr/",
        gender: "female"
    },
    {
        name: "MST: JAKIA AKTER JUI",
        id: "B250305031",
        schoolName: "Binnakuri high school",
        collegeName: "Government Begum Rokeya College, Rangpur",
        presentAddress: "Bashundhora, Dhaka",
        permanentAddress: "Chirirbandar, Dinajpur",
        fb: "https://www.facebook.com/share/1BYVQApxwt/",
        gender: "female"
    },
    {
        name: "Fatema Haque Isha",
        id: "B250305017",
        schoolName: "Bangladesh Bank Adarsha High school, Faridabad, dhaka",
        collegeName: "Ideal school and college, motijheel, dhaka",
        presentAddress: "Kazi vhaban, Bahadurpur len, Faridabad, dhaka",
        permanentAddress: "Kazi vhaban, Bahadurpur len, Faridabad, dhaka",
        fb: "https://www.facebook.com/fatemahaque.isha",
        gender: "female"
    },
    
    {
        name: "Sumaiya Akter",
        id: "B250305049",
        schoolName: "Fatulla Pilot High School",
        collegeName: "Narayanganj government mohila college",
        presentAddress: "Dapa idrakpur, Fatullah, Narayanganj",
        permanentAddress: "Bakerganj, barishal",
        fb: "https://www.facebook.com/mimislam.mim.786401?mibextid=ZbWKwL",
        gender: "female"
    },

    {
        name: "Ataur Rahman",
        id: "B250305059",
        schoolName: "Noakhali High School",
        collegeName: "Chowmuhani government sa college",
        presentAddress: "Gendaria, Dhaka",
        permanentAddress: "Maijdee, noakhali",
        fb: "https://www.facebook.com/share/1945FyCKnJ/",
        gender: "male"
    },
    {
        name: "Mst.Habiba Akhter",
        id: "B250305051",
        schoolName: "Joshoil High School",
        collegeName: "Rohanpur Yusuf Ali Govt. College",
        presentAddress: "Laxmi Bazar, Puran Dhaka",
        permanentAddress: "Bibison, Gomastapur, Chapai nawabgonj",
        fb: "https://www.facebook.com/share/1DCuXnJUYi/",
        gender: "female"
    },
    {
        name: "Samira Sultana",
        id: "B250305056",
        schoolName: "Dashmina Govt. Model High School",
        collegeName: "Barisal Govt. Women’s College",
        presentAddress: "Sutrapur, Dhaka",
        permanentAddress: "Patuakhali, Barisal",
        fb: "https://www.facebook.com/share/1BTcGc2Rnc/",
        gender: "female"
    },
    {
        name: "Tasfia Hoque",
        id: "B250305026",
        schoolName: "Lakshmipur National Ideal School",
        collegeName: "Lakshmipur National Ideal College",
        presentAddress: "Dhaka",
        permanentAddress: "Lakshmipur",
        fb: "https://www.facebook.com/profile.php?id=61590546723246",
        gender: "female"
    },
    {
        name: "Naima Jahan",
        id: "B250305010",
        schoolName: "Barishal Govt. Model School And College",
        collegeName: "Government Brojomohun College, Barishal",
        presentAddress: "North Badda, Dhaka",
        permanentAddress: "North Badda, Dhaka",
        fb: "https://www.facebook.com/share/1BkHH5VJmv/",
        gender: "female"
    },
    {
        name: "Shohan mondol",
        id: "B240305051",
        schoolName: "Cantonment public school and college rangpur",
        collegeName: "Cantonment public school and college rangpur",
        presentAddress: "Polasi",
        permanentAddress: "Rangpur",
        fb: "https://www.facebook.com/profile.php?id=61577387226371",
        gender: "male"
    },
    {
        name: "Md:Yeamin Hossain",
        id: "B250305050",
        schoolName: "Panchakroshi Union Ali Ahmed High School.Ullapara, Sirajganj.",
        collegeName: "Govt.Akbar Ali College.Ullapara, Sirajganj.",
        presentAddress: "Dholai Khal, Dhaka",
        permanentAddress: "Ullapara, Sirajganj",
        fb: "https://www.facebook.com/share/1ApkxoxsK2/",
        gender: "male"
    },
    {
        name: "Kazi moss jannatun naher",
        id: "B250305040",
        schoolName: "Ali Akbar High School",
        collegeName: "Govt. Adamjeenagar Merchent Workers College",
        presentAddress: "Painadi, Siddirganj, Narayanganj",
        permanentAddress: "Painadi, Siddirganj, Narayanganj",
        fb: "Kazi moss jannatun naher",
        gender: "female"
    },
   {
    name: "Nuhat Tazrin Urbi",
    id: "B240305028",
    schoolName: "Mirzapur Secondary School",
    collegeName: "Narail Govt. Victoria College",
    presentAddress: "Kazipara, Mirpur",
    permanentAddress: "Narail",
    fb: "https://www.facebook.com/share/1ELbm3NPmt/",
    gender: "female"
},
    {
    name: "Afriya Jannat Mishu",
    id: "B250305029",
    schoolName: "Elenga High School",
    collegeName: "kumudini govt college",
    presentAddress: "Tanti bazar, Dhaka",
    permanentAddress: "Elenga, Tangail",
    fb: "https://www.facebook.com/profile.php?id=61560490016068",
    gender: "female"
},
    {
    name: "Maroa Murtakin Safa",
    id: "B250305047",
    schoolName: "Mirgonj High School",
    collegeName: "Ramgonj Model degree College",
    presentAddress: "Lakkhibazar ,Dhaka",
    permanentAddress: "Lakshmipur",
    fb: "https://www.facebook.com/share/18jDqvNW5o/",
    gender: "female"
},
    

{
    name: "Sabikun Nahar Sanjana",
    id: "B240305009",
    schoolName: "Narayanganj government girls' high school",
    collegeName: "Narayanganj government Mohila college",
    presentAddress: "Mirpara road, godenial, LNC Mills -1432, Narayanganj, Narayanganj shadar",
    permanentAddress: "Mirpara road, godenial, LNC Mills -1432, Narayanganj, Narayanganj shadar",
    fb: "https://www.facebook.com/sabikun.nahar.sanjana.2025",
    gender: "female"
},
    {
    name: "Sabbir Hossain Rifat",
    id: "B250305035",
    schoolName: "Mirpur Cantonment Public School & College",
    collegeName: "Mirpur Cantonment Public School & College",
    presentAddress: "Pallabi, Mirpur, Dhaka",
    permanentAddress: "Faridganj, Chandpur",
    fb: "https://www.facebook.com/sabbir.prime.52",
    gender: "male"
},
    {
    name: "Tanzina Akter Disha",
    id: "38",
    schoolName: "Savar Cantonment public school and college",
    collegeName: "Savar Cantonment public school and college",
    presentAddress: "Savar, dhaka",
    permanentAddress: "Manikganj",
    fb: "https://www.facebook.com/share/16yKzgzqB1/",
    gender: "female"
}
];
// ২. লোকাল মেমোরি থেকে ডাটা লোড করা
let students = JSON.parse(localStorage.getItem("nexus_students")) || initialStudents;

const container = document.getElementById("studentContainer");
const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");

// ৩. স্টুডেন্ট কার্ড দেখানোর ফাংশন (ডাইনামিক আইডি ইমেজ এবং ডিলিট বাটন সম্পূর্ণ রিমুভড)
function showStudents() {
    if (!container) return;
    container.innerHTML = "";
    
    let searchValue = searchInput.value.toLowerCase();
    let filterValue = filterSelect.value;

    let filtered = students.filter(s => {
        let matchesSearch = s.name.toLowerCase().includes(searchValue);
        let matchesFilter = filterValue === "all" || s.gender === filterValue;
        return matchesSearch && matchesFilter;
    });

    filtered.forEach((student) => {
        const card = document.createElement("div");
        card.className = "card";
        card.setAttribute("data-gender", student.gender);
        
        // আইডি অনুযায়ী ইমেজের রিলেটিভ পাথ জেনারেট (উদা:/B250305012.jpg)
       let localImagePath = `${student.id}.jpg`;
        // যদি লোকাল ছবি না থাকে, তাহলে জেন্ডারভিত্তিক রিয়েলিস্টিক অ্যাভাটার ফলব্যাক হিসেবে লোড হবে
        let fallbackAvatarUrl = student.gender === "male" 
            ? `https://avatar.iran.liara.run/public/boy?username=${encodeURIComponent(student.name)}`
            : `https://avatar.iran.liara.run/public/girl?username=${encodeURIComponent(student.name)}`;

        // কার্ডে আইডি শো না করে ইমেজের onerror ইভেন্টে ফলব্যাক ডিফাইন করা হয়েছে
        card.innerHTML = `
            <img src="${localImagePath}" onerror="this.onerror=null; this.src='${fallbackAvatarUrl}';" alt="${student.name}"/>
            <h3>${student.name}</h3>
            <p class="gender ${student.gender}">${student.gender.toUpperCase()}</p>
            
            <div class="info-block">
                <div class="info-item">
                    <span class="icon">🏫</span>
                    <span class="text"><strong>School:</strong> ${student.schoolName || 'N/A'}</span>
                </div>
                <div class="info-item">
                    <span class="icon">🎓</span>
                    <span class="text"><strong>College:</strong> ${student.collegeName || 'N/A'}</span>
                </div>
                <div class="info-item">
                    <span class="icon">📍</span>
                    <span class="text"><strong>Present:</strong> ${student.presentAddress || 'N/A'}</span>
                </div>
                <div class="info-item">
                    <span class="icon">🏠</span>
                    <span class="text"><strong>Permanent:</strong> ${student.permanentAddress || 'N/A'}</span>
                </div>
            </div>
            
            <div style="margin-top: auto;">
                <a href="${student.fb.startsWith('http') ? student.fb : 'https://www.facebook.com/'}" target="_blank" class="fb-btn">Connect on Facebook</a>
            </div>
        `;
        container.appendChild(card);
    });
    
    updateStatistics();
}

// ৪. নতুন স্টুডেন্ট যোগ করা
function addStudent() {
    let name = document.getElementById("newName").value.trim();
    let id = document.getElementById("newId").value.trim(); // নতুন যুক্ত রোল নম্বর
    let gender = document.getElementById("newGender").value;
    let schoolName = document.getElementById("newSchool").value.trim();
    let collegeName = document.getElementById("newCollege").value.trim();
    let presentAddress = document.getElementById("newPresentAddress").value.trim();
    let permanentAddress = document.getElementById("newPermanentAddress").value.trim();
    let fb = document.getElementById("newFb").value.trim();

    if (name === "" || id === "") return alert("Please enter name and Student ID");

    let newStudent = {
        name,
        id, // নতুন স্টুডেন্ট আইডি
        gender,
        schoolName: schoolName || "N/A",
        collegeName: collegeName || "N/A",
        presentAddress: presentAddress || "N/A",
        permanentAddress: permanentAddress || "N/A",
        fb: fb || "#"
    };

    students.push(newStudent);
    localStorage.setItem("nexus_students", JSON.stringify(students));

    showStudents();
    closeForm();

    // ফর্ম রিসেট
    document.getElementById("newName").value = "";
    document.getElementById("newId").value = "";
    document.getElementById("newSchool").value = "";
    document.getElementById("newCollege").value = "";
    document.getElementById("newPresentAddress").value = "";
    document.getElementById("newPermanentAddress").value = "";
    document.getElementById("newFb").value = "";
}

// ৫. স্ট্যাটিস্টিকস আপডেট
function updateStatistics() {
    const totalEl = document.getElementById('totalStudents');
    const maleEl = document.getElementById('maleCount');
    const femaleEl = document.getElementById('femaleCount');

    let total = students.length;
    let male = students.filter(s => s.gender.toLowerCase() === 'male').length;
    let female = students.filter(s => s.gender.toLowerCase() === 'female').length;

    if (totalEl) totalEl.innerText = total;
    if (maleEl) maleEl.innerText = male;
    if (femaleEl) femaleEl.innerText = female;
}

// ৬. ব্যাচ মেমোরি গ্যালারি (সরাসরি কোডের মাধ্যমে গ্রুপ ফটো যুক্ত করার সিস্টেম)
const memoryGallery = [
    "moment 1.jpg", // আপনার প্রজেক্ট ফোল্ডারে থাকা গ্রুপ ছবির নাম দিন
    "moment 2.jpg"
  // কমা ব্যবহার করে এভাবে যত খুশি ছবি যুক্ত করতে পারবেন
];

function refreshGallery() {
    const myGalleryDisplay = document.getElementById("galleryDisplay");
    if (!myGalleryDisplay) return;
    myGalleryDisplay.innerHTML = "";
    
    memoryGallery.forEach((imgSrc) => {
        const imgCard = document.createElement("div");
        imgCard.className = "gallery-card"; // style.css-এর প্রিমিয়াম হোভার ইফেক্ট সক্রিয় থাকবে
        
        // যদি কোনো ছবি খুঁজে না পাওয়া যায়, তবে ব্যাকগ্রাউন্ডে একটি গ্রুপ ফটো ফলব্যাক হিসেবে শো করবে
        imgCard.innerHTML = `
            <img src="${imgSrc}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600';" alt="Batch Memory">
        `;
        myGalleryDisplay.appendChild(imgCard);
    });
}

// ৭. অন্যান্য ইউটিলিটি ফাংশন (Scroll, Sidebar, Clock)
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar) {
        sidebar.style.width = (sidebar.style.width === "250px") ? "0" : "250px";
    }
}

function updateTime() {
    let clockEl = document.getElementById("digitalClock");
    if (!clockEl) return;
    let now = new Date();
    clockEl.innerHTML = `🕒 ${now.toLocaleTimeString()} | ${now.toLocaleDateString()}`;
}

function openForm() { document.getElementById("formBox").style.display = "block"; }
function closeForm() { document.getElementById("formBox").style.display = "none"; }

// ৮. ইভেন্ট লিসেনার এবং ইনিশিয়াল লোড
if (searchInput) searchInput.addEventListener("input", showStudents);
if (filterSelect) filterSelect.addEventListener("change", showStudents);

window.addEventListener("DOMContentLoaded", () => {
    showStudents();
    refreshGallery();
    setInterval(updateTime, 1000);
});

window.onscroll = function() {
    let btn = document.getElementById("backToTop");
    if (btn) {
        btn.style.display = (document.documentElement.scrollTop > 300) ? "block" : "none";
    }
};
