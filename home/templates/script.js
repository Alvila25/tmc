
console.log("🚀 script.js loaded");

const languages = {
    en: {
        menu_about: "About",
        menu_history: "History & Heritage",
        menu_art: "Art & Literature",
        menu_music: "Music & Performing Arts",
        menu_gallery: "Gallery",
        menu_contact: "Contact",
        section_about: "About Chad & Our Mission",
        // Add all your data-lang keys here
    },
    fr: {
        menu_about: "À propos",
        menu_history: "Histoire & Patrimoine",
        menu_art: "Art & Littérature",
        menu_music: "Musique & Arts du spectacle",
        menu_gallery: "Galerie",
        menu_contact: "Contact",
        section_about: "À propos du Tchad & Notre Mission",
        // Add all your data-lang keys
    },
    ar: {
        menu_about: "عن",
        menu_history: "التاريخ والتراث",
        menu_art: "الفن والأدب",
        menu_music: "الموسيقى وفنون الأداء",
        menu_gallery: "معرض",
        menu_contact: "اتصل",
        section_about: "عن تشاد ومهمتنا",
        // Add all your data-lang keys
    }
};

function setLanguage(lang) {
    console.log(`🌍 Switching to: ${lang}`);
    if (!languages[lang]) lang = "en";

    const elements = document.querySelectorAll("[data-lang]");
    console.log(`🔍 Found ${elements.length} elements`);
    elements.forEach(el => {
        const key = el.getAttribute("data-lang");
        el.textContent = languages[lang][key] || languages["en"][key] || key;
        console.log(`✅ Set '${key}' to '${el.textContent}'`);
    });

    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    localStorage.setItem("language", lang);
    document.getElementById("language-select").value = lang;
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ DOM loaded");
    const select = document.getElementById("language-select");
    if (!select) {
        console.error("❌ No select found!");
        return;
    }

    select.addEventListener("change", (e) => {
        console.log("🔄 Changed to:", e.target.value);
        setLanguage(e.target.value);
    });

    const savedLang = localStorage.getItem("language") || "en";
    console.log(`🔄 Starting with: ${savedLang}`);
    setLanguage(savedLang);
});
