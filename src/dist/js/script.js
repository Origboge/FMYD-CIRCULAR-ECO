// =======================================================
// === 1. No import statements are needed for this setup ===
// =======================================================


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
/* ---------------------------------------------------------
   0) Keep your existing stataLGAs object here (unchanged)
--------------------------------------------------------- */

// =======================================================
// DOM READY
// =======================================================
document.addEventListener("DOMContentLoaded", () => {
    // Populate State/LGA
    const stateSelect = document.getElementById("state");
    if (stateSelect) {
        Object.keys(stataLGAs).forEach(s => {
            const opt = document.createElement("option");
            opt.value = s;
            opt.textContent = s;
            stateSelect.appendChild(opt);
        });
    } else {
        console.error("State dropdown element not found!");
    }

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

    // =======================================================
    // Firebase config (FIXED storageBucket)
    // =======================================================
    const firebaseConfig = {
        apiKey: "AIzaSyDpERMUEG6z7JsFuz-0K_106v5pZamLSVk",
        authDomain: "fmyd-circular-eco-registration.firebaseapp.com",
        projectId: "fmyd-circular-eco-registration",
        storageBucket: "fmyd-circular-eco-registration.firebasestorage.app", // ✅ correct bucket
        messagingSenderId: "75870394524",
        appId: "1:75870394524:web:98ec8481ac5f5820a87559",
        measurementId: "G-0NNZQMP7TB"
    };


    // Init Firebase (Compat)
    firebase.initializeApp(firebaseConfig);
    const storage = firebase.storage();
    const db = firebase.firestore();
    const auth = firebase.auth();

    // =======================================================
    // App Check (do NOT include manual reCAPTCHA script tag)
    // =======================================================
    const appCheck = firebase.appCheck();

    // For local dev ONLY, you can uncomment the next line once to debug App Check:
    // self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;


    // Use your actual reCAPTCHA v3 site key from App Check
    appCheck.activate("6LdnMKYrAAAAABFmUxHLpIv9VagA73xNakZmWp_i", true);
    firebase.appCheck().setTokenAutoRefreshEnabled(true);

    // Ensure signed in (anonymous)
    async function ensureSignedIn() {
        let user = auth.currentUser;
        if (!user) {
            await auth.signInAnonymously();
            user = auth.currentUser;
        }
        return user;
    }

    // =======================================================
    // File inputs & previews (unchanged logic, with size checks)
    // =======================================================
    const passportInput = document.getElementById("passport");
    const passportError = document.getElementById("passport-error");
    const ninInput = document.getElementById("nin");
    const ninError = document.getElementById("nin-error");

    if (passportInput && passportError) {
        passportInput.addEventListener("change", () => {
            const file = passportInput.files[0];
            const box = document.getElementById("passport-box");
            const existingImg = box ? box.querySelector("img") : null;
            if (existingImg) existingImg.remove();

            if (file) {
                if (file.size > 50 * 1024) {
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
                    img.style.zIndex = "1";
                    box.appendChild(img);

                    const plus = box.querySelector(".plus-sign");
                    if (plus) {
                        plus.style.position = "absolute";
                        plus.style.top = "5px";
                        plus.style.right = "5px";
                        plus.style.zIndex = "10";
                    }
                }
            }
        });
    }

    if (ninInput && ninError) {
        ninInput.addEventListener("change", () => {
            const file = ninInput.files[0];
            const box = document.getElementById("nin-box");
            const existingImg = box ? box.querySelector("img") : null;
            if (existingImg) existingImg.remove();

            if (file) {
                if (file.size > 50 * 1024) {
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
                    img.style.zIndex = "1";
                    box.appendChild(img);

                    const plus = box.querySelector(".plus-sign");
                    if (plus) {
                        plus.style.position = "absolute";
                        plus.style.top = "5px";
                        plus.style.right = "5px";
                        plus.style.zIndex = "10";
                    }
                }
            }
        });
    }

    // =======================================================
    // Live name/phone filtering (unchanged)
    // =======================================================
    [
        { id: "first_name", err: "first-name-error-live" },
        { id: "middle_name", err: "middle-name-error-live" },
        { id: "last_name", err: "last-name-error-live" }
    ].forEach(({ id, err }) => {
        const input = document.getElementById(id);
        const errEl = document.getElementById(err);
        if (input && errEl) {
            input.addEventListener("input", function() {
                let value = this.value;

                // 1) Remove non-letters/spaces
                const filtered = value.replace(/[^A-Za-z\s]/g, "");

                // 2) Force everything to uppercase
                const upper = filtered.toUpperCase();

                // 3) Update input
                this.value = upper;

                // 4) Show error if something was stripped
                if (value !== filtered) {
                    errEl.style.display = "block";
                    clearTimeout(this._t);
                    this._t = setTimeout(() => (errEl.style.display = "none"), 3000);
                } else {
                    errEl.style.display = "none";
                }
            });
        }
    });


    const phoneInput = document.getElementById("phone");
    const phoneErrorLive = document.getElementById("phone-error-live");
    if (phoneInput && phoneErrorLive) {
        phoneInput.addEventListener("input", function() {
            const original = this.value;
            let filtered = original.replace(/[^0-9+\s\-]/g, "");
            if (filtered.startsWith("+")) {
                filtered = "+" + filtered.substring(1).replace(/\+/g, "");
            } else {
                filtered = filtered.replace(/\+/g, "");
            }
            this.value = filtered;
            if (original !== filtered || (original.match(/\+/g) || []).length > 1) {
                phoneErrorLive.style.display = "block";
                clearTimeout(this._t2);
                this._t2 = setTimeout(() => (phoneErrorLive.style.display = "none"), 3000);
            } else {
                phoneErrorLive.style.display = "none";
            }
        });
    }

    // Auto age
    const dobInput = document.getElementById("dob");
    const ageDisplay = document.getElementById("age-display");
    const dobErrorLive = document.getElementById("dob-error-live"); // flashing error
    const dobHelper = document.getElementById("dob-helper"); // stable helper

    if (dobInput && ageDisplay) {
        dobInput.addEventListener("change", () => {
            const v = dobInput.value;
            if (!v) {
                ageDisplay.textContent = "";
                if (dobErrorLive) dobErrorLive.style.display = "none";
                return;
            }

            const today = new Date();
            const birth = new Date(v);
            let age = today.getFullYear() - birth.getFullYear();
            const m = today.getMonth() - birth.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;

            // If under 18 → reset input, clear age, show error
            if (age < 18) {
                dobInput.value = ""; // clear DOB
                ageDisplay.textContent = ""; // clear displayed age
                if (dobErrorLive) {
                    dobErrorLive.style.display = "block";
                    clearTimeout(dobInput._tAge);
                    dobInput._tAge = setTimeout(() => (dobErrorLive.style.display = "none"), 3000);
                }
                return; // stop here
            }

            // Valid age (>=18)
            ageDisplay.textContent = `Age: ${age}`;
            if (dobErrorLive) dobErrorLive.style.display = "none";
        });
    }



    // =======================================================
    // Overlays + Terms
    // =======================================================
    const form = document.getElementById("registration-form");

    const termsOverlay = document.getElementById("terms-overlay");
    const termsAcceptBtn = document.getElementById("terms-accept-btn");
    const termsDeclineBtn = document.getElementById("terms-decline-btn");

    const successOverlay = document.getElementById("successOverlay");
    const spinner = document.getElementById("spinner");
    const checkmark = document.getElementById("checkmark");
    const overlayText = document.getElementById("overlayText");
    const errorOverlay = document.getElementById("errorOverlay");

    function showSuccessSpinner() {
        if (!successOverlay) return;
        successOverlay.style.display = "flex";
        if (spinner) spinner.style.display = "block";
        if (checkmark) checkmark.style.display = "none";
        if (overlayText) overlayText.style.display = "none";
    }

    function showSuccessDone() {
        if (!successOverlay) return;
        if (spinner) spinner.style.display = "none";
        if (checkmark) checkmark.style.display = "block";
        if (overlayText) overlayText.style.display = "block";
    }

    function hideSuccessOverlay() {
        if (successOverlay) successOverlay.style.display = "none";
    }

    function showErrorOverlay() {
        if (errorOverlay) {
            errorOverlay.style.display = "flex";
            setTimeout(() => (errorOverlay.style.display = "none"), 5000);
        }
    }

    function showTerms() {
        if (termsOverlay) termsOverlay.style.display = "flex";
    }

    function hideTerms() {
        if (termsOverlay) termsOverlay.style.display = "none";
    }

    if (termsDeclineBtn) {
        termsDeclineBtn.addEventListener("click", () => {
            hideTerms();
            console.log("Terms declined. Submission cancelled.");
        });
    }

    // =======================================================
    // The real submission flow (FIXED ORDER)
    // =======================================================
    async function processFormSubmission() {
        try {
            hideTerms(); // 1) close terms
            showSuccessSpinner(); // 2) show spinner

            // 3) Validate required files
            const passportFile = form["passport"].files[0];
            const ninFile = form["nin"].files[0];
            if (!passportFile || !ninFile) {
                hideSuccessOverlay();
                showErrorOverlay();
                console.error("Please select both Passport and NIN files.");
                return;
            }

            // 4) Client-side regex validations (names + phone)
            const nameRegex = /^[A-Za-z\s]+$/;
            const phoneRegex = /^\+?[0-9\s\-]+$/;

            if (!nameRegex.test(form["first_name"].value.trim()) ||
                !nameRegex.test(form["middle_name"].value.trim()) ||
                !nameRegex.test(form["last_name"].value.trim())) {
                hideSuccessOverlay();
                showErrorOverlay();
                console.error("Invalid name format.");
                return;
            }

            if (!phoneRegex.test(form["phone"].value.trim())) {
                hideSuccessOverlay();
                showErrorOverlay();
                console.error("Invalid phone number format.");
                return;
            }
            // 5) Ensure auth
            const user = await ensureSignedIn();
            if (!user) {
                hideSuccessOverlay();
                showErrorOverlay();
                throw new Error("Auth failed - no user.");
            }

            // 6) Ensure App Check is working BEFORE upload
            try {
                const appCheckTokenResult = await firebase.appCheck().getToken();
                console.log("✅ App Check token acquired:", appCheckTokenResult.token);
            } catch (err) {
                hideSuccessOverlay();
                showErrorOverlay();
                console.error("❌ Failed to get App Check token:", err);
                throw new Error("App Check failed - stopping upload.");
            }


            // 7) Upload to Storage (under user uid)
            const passportRef = storage.ref(`passport/${user.uid}/${Date.now()}_${passportFile.name}`);
            const ninRef = storage.ref(`nin/${user.uid}/${Date.now()}_${ninFile.name}`);

            const [passportSnapshot, ninSnapshot] = await Promise.all([
                passportRef.put(passportFile),
                ninRef.put(ninFile)
            ]);

            const [passportURL, ninURL] = await Promise.all([
                passportSnapshot.ref.getDownloadURL(),
                ninSnapshot.ref.getDownloadURL()
            ]);

            console.log("✅ Upload success. Passport:", passportURL, " NIN:", ninURL);

            // 7) Prepare and write Firestore
            const dobValue = form["dob"].value;
            let computedAge = "";
            if (dobValue) {
                const today = new Date();
                const birthDate = new Date(dobValue);
                let tempAge = today.getFullYear() - birthDate.getFullYear();
                const monthDiff = today.getMonth() - birthDate.getMonth();
                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) tempAge--;
                computedAge = tempAge;
            }

            const formData = {
                firstName: form["first_name"].value.trim(),
                middleName: form["middle_name"].value.trim(),
                lastName: form["last_name"].value.trim(),
                phone: form["phone"].value.trim(),
                email: form["email"].value.trim(),
                dob: dobValue,
                age: computedAge,
                state: form["state"].value,
                lga: form["lga"].value,
                address: form["address"].value.trim(),
                landmark: form["landmark"] ? form["landmark"].value.trim() : "",
                areaOfTraining: form["training_area"].value,
                sex: form["sex"].value,
                passportURL,
                ninURL,
                timestamp: new Date()
            };

            await db.collection("registrations").add(formData);

            // 8) Success UI
            showSuccessDone();
            setTimeout(() => {
                hideSuccessOverlay();
            }, 4000);

            form.reset();
        } catch (err) {
            console.error("Submission failed:", err);
            hideSuccessOverlay();
            showErrorOverlay();
        }
    }

    // Accept → submit
    if (termsAcceptBtn) {
        termsAcceptBtn.addEventListener("click", processFormSubmission);
    }

    // Form submit → open terms first
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            showTerms();
        });
    }
});