// =======================================================
// === 1. ALL IMPORT STATEMENTS GO HERE, AT THE TOP ===
// =======================================================
import { getAuth, signInAnonymously } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider, setTokenAutoRefreshEnabled } from 'firebase/app-check';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


// =======================================================
// === 2. GLOBAL DATA / CONSTANTS (like stataLGAs) GO HERE ===
// =======================================================
const stataLGAs = {
    "Abia": ["Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa", "Ohafia", "Osisioma", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South", "Umu Nneochi"],
    "Adamawa": ["Demsa", "Fufore", "Ganye", "Girei", "Gombi", "Guyuk", "Hong", "Jada", "Lamurde", "Madagali", "Maiha", "Mayo Belwa", "Michika", "Mubi North", "Mubi South", "Numan", "Shelleng", "Song", "Toungo", "Yola North", "Yola South"],
    "Akwa Ibom": ["Abak", "Eastern Obolo", "Eket", "Esit Eket", "Essien Udim", "Etim Ekpo", "Etinan", "Ibeno", "Ibesikpo Asutan", "Ibiono‑Ibom", "Ika", "Ikono", "Ikot Abasi", "Ikot Ekpene", "Ini", "Itu", "Mbo", "Mkpat Enin", "Nsit Atai", "Nsit Ibom", "Nsit Ubium", "Obot Akara", "Okobo", "Onna", "Oron", "Oruk Anam", "Udung Uko", "Ukanafun", "Uruan", "Urue‑Offong/Oruko", "Uyo"],
    "Anambra": ["Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"],
    "Bauchi": ["Alkaleri", "Bauchi", "Bogoro", "Damban", "Darazo", "Dass", "Gamawa", "Ganjuwa", "Giade", "Itas/Gadau", "Jama'are", "Katagum", "Kirfi", "Misau", "Ningi", "Shira", "Tafawa Balewa", "Toro", "Warji", "Zaki"],
    "Bayelsa": ["Brass", "Ekeremor", "Kolokuma/Opokuma", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa"],
    "Benue": ["Ado", "Agatu", "Apa", "Buruku", "Gboko", "Guma", "Gwer East", "Gwer West", "Katsina‑Ala", "Konshisha", "Kwande", "Logo", "Makurdi", "Obi", "Ogbadibo", "Ohimini", "Oju", "Okpokwu", "Otukpo", "Tarka", "Ukum", "Ushongo", "Vandeikya"],
    "Borno": ["Abadam", "Askira/Uba", "Bama", "Bayo", "Biu", "Chibok", "Damboa", "Dikwa", "Gubio", "Guzamala", "Gwoza", "Hawul", "Jere", "Kaga", "Kala/Balge", "Konduga", "Kukawa", "Kwaya Kusar", "Mafa", "Magumeri", "Maiduguri", "Marte", "Mobbar", "Monguno", "Ngala", "Nganzai", "Shani"],
    "Cross River": ["Abi", "Akamkpa", "Akpabuyo", "Bakassi", "Bekwarra", "Biase", "Boki", "Calabar Municipal", "Calabar South", "Etung", "Ikom", "Obanliku", "Obubra", "Obudu", "Odukpani", "Ogoja", "Yakurr", "Yala"],
    "Delta": ["Aniocha North", "Aniocha South", "Bomadi", "Burutu", "Ethiope East", "Ethiope West", "Ika North East", "Ika South", "Isoko North", "Isoko South", "Ndokwa East", "Ndokwa West", "Okpe", "Oshimili North", "Oshimili South", "Patani", "Sapele", "Udu", "Ughelli North", "Ughelli South", "Ukwuani", "Uvwie", "Warri North", "Warri South", "Warri South West"],
    "Ebonyi": ["Abakaliki", "Afikpo North", "Afikpo South", "Ebonyi", "Ezza North", "Ezza South", "Ikwo", "Ishielu", "Ivo", "Izzi", "Ohaozara", "Ohaukwu", "Onicha"],
    "Edo": ["Akoko‑Edo", "Egor", "Esan Central", "Esan North‑East", "Esan South‑East", "Esan West", "Etsako Central", "Etsako East", "Etsako West", "Igueben", "Ikpoba‑Okha", "Orhionmwon", "Oredo", "Ovia North‑East", "Ovia South‑West", "Uhunmwonde"],
    "Ekiti": ["Ado Ekiti", "Efon", "Ekiti East", "Ekiti South‑West", "Ekiti West", "Emure", "Gbonyin", "Ido Osi", "Ijero", "Ikere", "Ikole", "Ilejemeje", "Irepodun/Ifelodun", "Ise/Orun", "Moba", "Oye"],
    "Enugu": ["Aninri", "Awgu", "Enugu East", "Enugu North", "Enugu South", "Ezeagu", "Igbo Etiti", "Igbo Eze North", "Igbo Eze South", "Isi Uzo", "Nkanu East", "Nkanu West", "Nsukka", "Oji River", "Udenu", "Udi", "Uzo Uwani"],
    "FCT": ["Abaji", "Abuja Municipal", "Gwagwalada", "Kuje", "Bwari", "Kwali"],
    "Gombe": ["Akko", "Balanga", "Billiri", "Dukku", "Funakaye", "Gombe", "Kaltungo", "Kwami", "Nafada", "Shongom", "Yamaltu/Deba"],
    "Imo": ["Aboh Mbaise", "Ahiazu Mbaise", "Ehime Mbano", "Ezinihitte", "Ideato North", "Ideato South", "Ihitte/Uboma", "Ikeduru", "Isiala Mbano", "Isu", "Mbaitoli", "Ngor Okpala", "Njaba", "Nkwerre", "Nwangele", "Obowo", "Oguta", "Ohaji/Egbema", "Okigwe", "Orlu", "Orsu", "Oru East", "Oru West", "Owerri Municipal", "Owerri North", "Owerri West"],
    "Jigawa": ["Auyo", "Babura", "Biriniwa", "Birnin Kudu", "Buji", "Dutse", "Gagarawa", "Garki", "Gumel", "Guri", "Gwaram", "Gwiwa", "Hadejia", "Jahun", "Kafin Hausa", "Kaugama", "Kazaure", "Kiri Kasama", "Kiyawa", "Maigatari", "Malam Madori", "Miga", "Ringim", "Roni", "Sule-Tankarkar", "Taura", "Yankwashi"],
    "Kaduna": ["Birnin Gwari", "Chikun", "Giwa", "Igabi", "Ikara", "Jaba", "Jema'a", "Kachia", "Kaduna North", "Kaduna South", "Kagarko", "Kajuru", "Kaura", "Kauru", "Kubau", "Kudan", "Lere", "Makarfi", "Sabon Gari", "Sanga", "Soba", "Zangon Kataf", "Zaria"],
    "Kano": ["Ajingi", "Albasu", "Bagwai", "Bebeji", "Bichi", "Bunkure", "Dala", "Dambatta", "Dawakin Kudu", "Dawakin Tofa", "Doguwa", "Fagge", "Gabasawa", "Garko", "Garun Mallam", "Gaya", "Gezawa", "Gwale", "Gwarzo", "Kabo", "Kano Municipal", "Karaye", "Kibiya", "Kiru", "Kumbotso", "Kunchi", "Kura", "Madobi", "Makoda", "Minjibir", "Nasarawa", "Rano", "Rimin Gado", "Rogo", "Shanono", "Sumaila", "Takai", "Tarauni", "Tofa", "Tsanyawa", "Tudun Wada", "Ungogo", "Warawa", "Wudil"],
    "Katsina": ["Bakori", "Batagarawa", "Batsari", "Baure", "Bindawa", "Charanchi", "Dandume", "Danja", "Dan Musa", "Daura", "Dutsi", "Dutsin Ma", "Faskari", "Funtua", "Ingawa", "Jibia", "Kafur", "Kaita", "Kankara", "Kankia", "Katsina", "Kurfi", "Kusada", "Mai’Adua", "Malumfashi", "Mani", "Mashi", "Matazu", "Musawa", "Rimi", "Sabuwa", "Safana", "Sandamu", "Zango"],
    "Kebbi": ["Aleiro", "Arewa Dandi", "Argungu", "Augie", "Bagudo", "Birnin Kebbi", "Bunza", "Dandi", "Fakai", "Gwandu", "Jega", "Kalgo", "Koko/Besse", "Maiyama", "Ngaski", "Sakaba", "Shanga", "Suru", "Wasagu/Danko", "Yauri", "Zuru"],
    "Kogi": ["Adavi", "Ajaokuta", "Ankpa", "Bassa", "Dekina", "Ibaji", "Idah", "Igalamela‑Odolu", "Ijumu", "Kabba/Bunu", "Kogi", "Lokoja", "Mopa‑Muro", "Ofu", "Ogori/Magongo", "Okehi", "Okene", "Olamaboro", "Omala", "Yagba East", "Yagba West"],
    "Kwara": ["Asa", "Baruten", "Edu", "Ekiti", "Ifelodun", "Ilorin East", "Ilorin South", "Ilorin West", "Irepodun", "Isin", "Kaiama", "Moro", "Offa", "Oke Ero", "Oyun", "Pategi"],
    "Lagos": ["Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Epe", "Eti-Osa", "Ibeju-Lekki", "Ifako-Ijaiye", "Ikeja", "Ikorodu", "Kosofe", "Lagos Island", "Lagos Mainland", "Mushin", "Ojo", "Oshodi-Isolo", "Shomolu", "Surulere"],
    "Nasarawa": ["Akwanga", "Awe", "Doma", "Karu", "Keana", "Keffi", "Kokona", "Lafia", "Nasarawa", "Nasarawa Egon", "Obi", "Toto", "Wamba"],
    "Niger": ["Agaie", "Agwara", "Bida", "Borgu", "Bosso", "Chanchaga", "Edati", "Gbako", "Gurara", "Katcha", "Kontagora", "Lapai", "Lavun", "Magama", "Mariga", "Mashegu", "Mokwa", "Muya", "Paikoro", "Rafi", "Rijau", "Shiroro", "Suleja", "Tafa", "Wushishi"],
    "Ogun": ["Abeokuta North", "Abeokuta South", "Ado-Ddo/Ota", "Egbado North", "Egbado South", "Ewekoro", "Ifo", "Ijebu East", "Ijebu North", "Ijebu North East", "Ijebu Ode", "Ikenne", "Imeko Afon", "Ipokia", "Obafemi Owode", "Odeda", "Odogbolu", "Ogun Waterside", "Remo North", "Sagamu"],
    "Ondo": ["Akoko North-East", "Akoko North-West", "Akoko South-East", "Akoko South-West", "Akure North", "Akure South", "Ese Odo", "Idanre", "Ifedore", "Ilaje", "Ile Oluji/Okeigbo", "Irele", "Odigbo", "Okitipupa", "Ondo East", "Ondo West", "Ose", "Owo"],
    "Osun": ["Aiyedaade", "Aiyedire", "Atakunmosa East", "Atakunmosa West", "Boluwaduro", "Boripe", "Ede North", "Ede South", "Egbedore", "Ejigbo", "Ife Central", "Ife East", "Ife North", "Ife South", "Ifedayo", "Ifelodun", "Ila", "Ilesa East", "Ilesa West", "Irepodun", "Irewole", "Isokan", "Iwo", "Obokun", "Odo Otin", "Ola Oluwa", "Olorunda", "Oriade", "Orolu", "Osogbo"],
    "Oyo": ["Afijio", "Akinyele", "Atiba", "Atisbo", "Egbeda", "Ibadan North", "Ibadan North-East", "Ibadan North-West", "Ibadan South-East", "Ibadan South-West", "Ibarapa Central", "Ibarapa East", "Ibarapa North", "Ido", "Irepo", "Iseyin", "Itesiwaju", "Iwajowa", "Kajola", "Lagelu", "Ogbomosho North", "Ogbomosho South", "Ogo Oluwa", "Olorunsogo", "Oluyole", "Ona Ara", "Orelope", "Ori Ire", "Oyo East", "Oyo West", "Saki East", "Saki West", "Surulere"],
    "Plateau": ["Barkin Ladi", "Bassa", "Bokkos", "Jos East", "Jos North", "Jos South", "Kanam", "Kanke", "Langtang North", "Langtang South", "Mangu", "Mikang", "Pankshin", "Qua’an Pan", "Riyom", "Shendam", "Wase"],
    "Rivers": ["Abua/Odual", "Ahoada East", "Ahoada West", "Akuku-Toru", "Andoni", "Asari-Toru", "Bonny", "Degema", "Eleme", "Emuoha", "Etche", "Gokana", "Ikwerre", "Khana", "Obio/Akpor", "Ogba/Egbema/Ndoni", "Ogu/Bolo", "Okrika", "Omuma", "Opobo/Nkoro", "Oyigbo", "Port Harcourt", "Tai"],
    "Sokoto": ["Binji", "Bodinga", "Dange Shuni", "Gada", "Goronyo", "Gudu", "Gwadabawa", "Illela", "Isa", "Kebbe", "Kware", "Rabah", "Sabon Birni", "Shagari", "Silame", "Sokoto North", "Sokoto South", "Tambuwal", "Tangaza", "Tureta", "Wamako", "Wurno", "Yabo"],
    "Taraba": ["Ardo Kola", "Bali", "Donga", "Gashaka", "Gassol", "Ibi", "Jalingo", "Karim Lamido", "Kumi", "Lau", "Sardauna", "Takum", "Ussa", "Wukari", "Yorro", "Zing"],
    "Yobe": ["Bade", "Bursari", "Damaturu", "Fika", "Fune", "Geidam", "Gujba", "Gulani", "Jakusko", "Karasuwa", "Machina", "Nangere", "Nguru", "Potiskum", "Tarmuwa", "Yunusari", "Yusufari"],
    "Zamfara": ["Anka", "Bakura", "Birnin Magaji/Kiyaw", "Bukkuyum", "Bungudu", "Gummi", "Gusau", "Kaura Namoda", "Maradun", "Maru", "Shinkafi", "Talata Mafara", "Tsafe", "Zurmi"]
};


// =======================================================
// === 3. ALL DOM-RELATED CODE GOES INSIDE DOMContentLoaded ===
// =======================================================
document.addEventListener("DOMContentLoaded", () => {
    // Populate state dropdown
    const state = document.getElementById("state");
    // Ensure state dropdown exists before appending to it, addressing potential null issues
    if (state) {
        Object.keys(stataLGAs).forEach(s => {
            const opt = document.createElement("option");
            opt.value = s;
            opt.textContent = s;
            state.appendChild(opt);
        });
    } else {
        console.error("State dropdown element not found!");
    }


    // When state selected -> populate LGA list
    // Ensure state and lga elements exist before adding listeners/manipulating
    const stateSelect = document.getElementById("state");
    const lgaSelect = document.getElementById("lga");

    if (stateSelect && lgaSelect) {
        stateSelect.addEventListener("change", () => {
            lgaSelect.innerHTML = '<option value="">Select LGA</option>';
            const list = stataLGAs[stateSelect.value] || [];
            list.forEach(item => {
                const opt = document.createElement("option");
                opt.value = item;
                opt.textContent = item;
                lgaSelect.appendChild(opt);
            });
        });
    } else {
        console.error("State or LGA dropdown element not found!");
    }


    // Firebase config
    const firebaseConfig = {
        apiKey: "AIzaSyDpERMUEG6z7JsFuz-0K_106v5pZamLSVk",
        authDomain: "fmyd-circular-eco-registration.firebaseapp.com",
        projectId: "fmyd-circular-eco-registration",
        storageBucket: "fmyd-circular-eco-registration.firebasestorage.app",
        messagingSenderId: "75870394524",
        appId: "1:75870394524:web:98ec8481ac5f5820a87559",
        measurementId: "G-0NNZQMP7TB"
    };

    // Init Firebase
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    const db = getFirestore(app);
    const auth = getAuth(app);


    // Initialize App Check (using your actual siteKey)
    const appCheckInstance = initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider('6LdnMKYrAAAAABFmUxHLpIv9VagA73xNakZmWp_i'), // Your reCAPTCHA site key
        isDevDebugMode: false // Keep this false for production!
    });
    setTokenAutoRefreshEnabled(appCheckInstance, true);

    // Sign in anonymously - Ensure this runs if needed for Firestore rules
    signInAnonymously(auth)
        .then(() => console.log("Signed in anonymously for App Check or Firestore rules."))
        .catch((error) => {
            console.error("Anonymous sign-in failed:", error);
            // Handle error, e.g., show a message to the user
        });


    // File inputs and error messages
    const passportInput = document.getElementById("passport");
    const passportError = document.getElementById("passport-error");

    const ninInput = document.getElementById("nin");
    const ninError = document.getElementById("nin-error");


    // Passport file preview & size check
    if (passportInput && passportError) {
        passportInput.addEventListener("change", () => {
            const file = passportInput.files[0];
            const box = document.getElementById("passport-box");

            const existingImg = box ? box.querySelector("img") : null;
            if (existingImg) existingImg.remove();

            if (file) {
                if (file.size > 100 * 1024) { // 100 KB
                    passportError.style.display = "block";
                    passportInput.value = "";
                    return;
                } else {
                    passportError.style.display = "none";
                }

                if (box) {
                    const img = document.createElement("img");
                    img.src = URL.createObjectURL(file);
                    img.style.width = "100%";
                    img.style.height = "100%";
                    img.style.objectFit = "cover";
                    img.style.position = "absolute";
                    img.style.top = "0";
                    img.style.left = "0";
                    img.style.zIndex = "1"; // behind the + sign
                    box.appendChild(img);

                    const plus = box.querySelector(".plus-sign");
                    if (plus) {
                        plus.style.position = "absolute";
                        plus.style.top = "5px";
                        plus.style.right = "5px";
                        plus.style.zIndex = "10";
                    }
                } else {
                    console.error("Passport box element not found!");
                }
            }
        });
    } else {
        console.error("Passport input or error display element not found!");
    }


    // NIN file preview & size check
    if (ninInput && ninError) {
        ninInput.addEventListener("change", () => {
            const file = ninInput.files[0];
            const box = document.getElementById("nin-box");

            const existingImg = box ? box.querySelector("img") : null;
            if (existingImg) existingImg.remove();

            if (file) {
                if (file.size > 100 * 1024) { // 100 KB
                    ninError.style.display = "block";
                    ninInput.value = "";
                    return;
                } else {
                    ninError.style.display = "none";
                }

                if (box) {
                    const img = document.createElement("img");
                    img.src = URL.createObjectURL(file);
                    img.style.width = "100%";
                    img.style.height = "100%";
                    img.style.objectFit = "cover";
                    img.style.position = "absolute";
                    img.style.top = "0";
                    img.style.left = "0";
                    img.style.zIndex = "1"; // behind the + sign
                    box.appendChild(img);

                    const plus = box.querySelector(".plus-sign");
                    if (plus) {
                        plus.style.position = "absolute";
                        plus.style.top = "5px";
                        plus.style.right = "5px";
                        plus.style.zIndex = "10";
                    }
                } else {
                    console.error("NIN box element not found!");
                }
            }
        });
    } else {
        console.error("NIN input or error display element not found!");
    }


    // Auto-calculate age from DOB
    const dobInput = document.getElementById("dob");
    const ageDisplay = document.getElementById("age-display");

    if (dobInput && ageDisplay) {
        dobInput.addEventListener("change", () => {
            const dobValue = dobInput.value;
            if (dobValue) {
                const today = new Date();
                const birthDate = new Date(dobValue);
                let age = today.getFullYear() - birthDate.getFullYear();
                const monthDiff = today.getMonth() - birthDate.getMonth();
                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                ageDisplay.textContent = `Age: ${age}`;
            } else {
                ageDisplay.textContent = "";
            }
        });
    } else {
        console.error("Date of Birth input or Age Display element not found!");
    }


    // Live capitalization and character filtering for name fields with live error messages
    const nameInputElements = [
        { input: document.getElementById("first_name"), errorSpan: document.getElementById("first-name-error-live") },
        { input: document.getElementById("middle_name"), errorSpan: document.getElementById("middle-name-error-live") },
        { input: document.getElementById("last_name"), errorSpan: document.getElementById("last-name-error-live") }
    ];

    nameInputElements.forEach(({ input, errorSpan }) => {
        if (input && errorSpan) {
            let errorTimeout; // To manage the display time of the error message for this specific input

            input.addEventListener("input", function() {
                const originalValue = this.value;
                // 1. Remove any characters that are NOT letters or spaces
                let filteredValue = originalValue.replace(/[^A-Za-z\s]/g, '');
                // 2. Convert to uppercase
                this.value = filteredValue.toUpperCase();

                // Show error message if characters were removed
                if (originalValue.length !== filteredValue.length) {
                    errorSpan.style.display = "block";
                    // Clear any existing timeout to restart the timer
                    clearTimeout(errorTimeout);
                    // Hide the error after 3 seconds
                    errorTimeout = setTimeout(() => {
                        errorSpan.style.display = "none";
                    }, 3000);
                } else {
                    errorSpan.style.display = "none"; // Hide if input is clean
                    clearTimeout(errorTimeout); // Ensure timeout is cleared if user corrects quickly
                }
            });
        } else {
            console.error(`Name input or live error span not found for: ${input ? input.id : 'unknown'}`);
        }
    });

    // Live filtering for phone number input
    const phoneInput = document.getElementById("phone");
    const phoneErrorLive = document.getElementById("phone-error-live"); // Get the new error span

    if (phoneInput && phoneErrorLive) {
        let errorTimeout; // To manage the display time of the error message

        phoneInput.addEventListener("input", function() {
            const originalValue = this.value;
            // Allowed characters: digits, plus sign, spaces, hyphens
            let filteredValue = originalValue.replace(/[^0-9+\s\-]/g, '');

            // Ensure '+' is only at the beginning and only one '+'
            if (filteredValue.startsWith('+')) {
                filteredValue = '+' + filteredValue.substring(1).replace(/\+/g, ''); // Remove internal '+'
            } else {
                filteredValue = filteredValue.replace(/\+/g, ''); // Remove all '+' if not at start
            }

            // Update the input field
            this.value = filteredValue;

            // Show error message if characters were removed
            if (originalValue.length !== filteredValue.length || (originalValue.match(/\+/g) || []).length > 1) {
                phoneErrorLive.style.display = "block";
                // Clear any existing timeout to restart the timer
                clearTimeout(errorTimeout);
                // Hide the error after 3 seconds
                errorTimeout = setTimeout(() => {
                    phoneErrorLive.style.display = "none";
                }, 3000);
            } else {
                phoneErrorLive.style.display = "none"; // Hide if input is clean
                clearTimeout(errorTimeout); // Ensure timeout is cleared if user corrects quickly
            }
        });
    } else {
        console.error("Phone input or live error display element not found!");
    }


    // Form submission logic
    const form = document.getElementById("registration-form");

    // Get references to main submission overlay elements
    const submissionOverlay = document.getElementById("submission-overlay");
    const overlayLoadingSpinner = document.getElementById("overlay-loading-spinner");
    const overlaySuccessMessage = document.getElementById("overlay-success-message");
    const overlayErrorMessage = document.getElementById("overlay-error-message");
    const overlayErrorText = document.getElementById("overlay-error-text");
    const overlayCloseBtn = document.getElementById("overlay-close-btn");
    const overlayErrorCloseBtn = document.getElementById("overlay-error-close-btn");

    // Get references to Terms & Conditions overlay elements
    const termsOverlay = document.getElementById("terms-overlay");
    const termsAcceptBtn = document.getElementById("terms-accept-btn");
    const termsDeclineBtn = document.getElementById("terms-decline-btn");


    // Function to hide all main submission overlay content and the overlay itself
    function hideOverlay() {
        if (submissionOverlay) {
            submissionOverlay.classList.remove("show");
        }
        if (overlayLoadingSpinner) overlayLoadingSpinner.style.display = "none";
        if (overlaySuccessMessage) overlaySuccessMessage.style.display = "none";
        if (overlayErrorMessage) overlayErrorMessage.style.display = "none";
    }

    // Function to hide Terms & Conditions overlay
    function hideTermsOverlay() {
        if (termsOverlay) {
            termsOverlay.style.display = "none";
        }
    }

    // Attach close button listeners for main submission overlay
    if (overlayCloseBtn) {
        overlayCloseBtn.addEventListener("click", hideOverlay);
    }
    if (overlayErrorCloseBtn) {
        overlayErrorCloseBtn.addEventListener("click", hideOverlay);
    }

    // Attach listener for Terms & Conditions Decline button
    if (termsDeclineBtn) {
        termsDeclineBtn.addEventListener("click", () => {
            hideTermsOverlay();
            console.log("Terms declined. Submission cancelled.");
            hideOverlay(); // Ensure no spinner/messages from main overlay remain
        });
    }

    // NEW: Function to handle the actual form submission process to Firebase
    async function processFormSubmission() {
        hideTermsOverlay(); // Hide terms overlay as we proceed

        // Show Main Submission Overlay and Spinner
        if (submissionOverlay) {
            hideOverlay(); // Reset the main submission overlay to a clean state
            submissionOverlay.classList.add("show"); // Show the full-page overlay
            overlayLoadingSpinner.style.display = "block"; // Show the spinner
        } else {
            console.error("Submission overlay element not found. Cannot display status.");
            return; // Cannot proceed without the overlay for user feedback
        }

        // Get uploaded files
        const passportFile = form["passport"].files[0];
        const ninFile = form["nin"].files[0];

        // Ensure files are selected before proceeding with upload
        if (!passportFile || !ninFile) {
            if (overlayLoadingSpinner) overlayLoadingSpinner.style.display = "none";
            if (overlayErrorMessage) {
                overlayErrorMessage.style.display = "block";
                if (overlayErrorText) overlayErrorText.textContent = "Please select both Passport and NIN files.";
            }
            return;
        }

        // Client-side regex validation for names and phone (final check before Storage/Firestore operations)
        const nameRegex = /^[A-Za-z\s]+$/;
        const phoneRegex = /^\+?[0-9\s\-]+$/;

        if (!nameRegex.test(form["first_name"].value.trim()) ||
            !nameRegex.test(form["middle_name"].value.trim()) ||
            !nameRegex.test(form["last_name"].value.trim())) {
            if (overlayLoadingSpinner) overlayLoadingSpinner.style.display = "none";
            if (overlayErrorMessage) {
                overlayErrorMessage.style.display = "block";
                if (overlayErrorText) overlayErrorText.textContent = "Invalid name format. Only letters and spaces are allowed for names.";
            }
            return;
        }

        if (!phoneRegex.test(form["phone"].value.trim())) {
            if (overlayLoadingSpinner) overlayLoadingSpinner.style.display = "none";
            if (overlayErrorMessage) {
                overlayErrorMessage.style.display = "block";
                if (overlayErrorText) overlayErrorText.textContent = "Invalid phone number format. Only numbers, '+', spaces, and hyphens allowed.";
            }
            return;
        }

        // Get the current signed-in user
        const user = auth.currentUser;

        try {
            // Upload files to Firebase Storage under each user's UID
            const passportRef = ref(storage, `passport/${user.uid}/${Date.now()}_${passportFile.name}`);
            const ninRef = ref(storage, `nin/${user.uid}/${Date.now()}_${ninFile.name}`);

            const passportSnapshot = await uploadBytes(passportRef, passportFile);
            const ninSnapshot = await uploadBytes(ninRef, ninFile);

            const passportURL = await getDownloadURL(passportSnapshot.ref);
            const ninURL = await getDownloadURL(ninSnapshot.ref);

            // Calculate age from DOB
            const dobValue = form["dob"].value;
            let age = "";
            if (dobValue) {
                const today = new Date();
                const birthDate = new Date(dobValue);
                let tempAge = today.getFullYear() - birthDate.getFullYear();
                const monthDiff = today.getMonth() - birthDate.getMonth();
                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                    tempAge--;
                }
                age = tempAge;
            }

            const formData = {
                firstName: form["first_name"].value.trim(),
                middleName: form["middle_name"].value.trim(),
                lastName: form["last_name"].value.trim(),
                phone: form["phone"].value.trim(),
                email: form["email"].value.trim(),
                dob: dobValue,
                age: age,
                state: form["state"].value,
                lga: form["lga"].value,
                address: form["address"].value.trim(),
                areaOfTraining: form["training_area"].value,
                sex: form["sex"].value,
                passportURL: passportURL,
                ninURL: ninURL,
                timestamp: new Date()
            };

            await addDoc(collection(db, "registrations"), formData);

            // Handle Success in Overlay
            if (overlayLoadingSpinner) overlayLoadingSpinner.style.display = "none";
            if (overlaySuccessMessage) overlaySuccessMessage.style.display = "block";
            form.reset(); // Clear the form on successful submission
        } catch (error) {
            console.error("Error writing to Firestore or uploading files:", error);
            // Handle Error in Overlay
            if (overlayLoadingSpinner) overlayLoadingSpinner.style.display = "none";
            if (overlayErrorMessage) {
                overlayErrorMessage.style.display = "block";
                // Display specific Firebase error message if available, otherwise a generic one
                if (overlayErrorText) overlayErrorText.textContent = "Submission failed: " + (error.message || "An unexpected error occurred.");
            }
        }
    }

    // Attach listener for Terms & Conditions Accept button
    if (termsAcceptBtn) {
        termsAcceptBtn.addEventListener("click", processFormSubmission);
    }

    // Modify the main form submission listener to first show T&C modal
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent immediate form submission

            // Perform HTML5 form validation checks first
            if (!form.checkValidity()) {
                // If form is not valid according to HTML5 constraints (e.g., 'required' fields),
                // trigger the browser's native validation UI
                form.reportValidity();
                return; // Stop here if validation fails
            }

            // If form passes HTML5 validation, show the Terms & Conditions overlay
            if (termsOverlay) {
                termsOverlay.style.display = "flex"; // Show the overlay
            } else {
                console.error("Terms & Conditions overlay element not found!");
                // Fallback: If for some reason the overlay isn't found, proceed directly
                processFormSubmission();
            }
        });
    } else {
        console.error("Registration form element not found!");
    }
});