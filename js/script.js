const defaultConfig = {
  company_name: "Tax Filing Guru",
  tagline: "Resident & NRI ITR Filing",
  phone_number: "+91 98765 43210",
  hero_title: "Expert Tax Filing Services",
  hero_subtitle: "Professional tax solutions for residents and NRIs. Get maximum refunds with our expert guidance.",
  hero_cta: "Get Started Today",
  services_heading: "Our Services",
  service_1_title: "Individual ITR Filing",
  service_1_desc: "Complete tax filing services for salaried individuals and professionals.",
  service_2_title: "NRI Tax Services",
  service_2_desc: "Specialized tax solutions for Non-Resident Indians worldwide.",
  service_3_title: "Business Tax Filing",
  service_3_desc: "Comprehensive tax services for businesses and corporations.",
  service_4_title: "Tax Consultation",
  service_4_desc: "Expert tax planning and consultation services for all needs.",
  cta_heading: "Ready to File Your Taxes?",
  cta_button: "Contact Us Now",
  footer_text: "© 2024 Tax Filing Guru. All rights reserved.",
  background_color: "#f9fafb",
  primary_color: "#0052D4",
  secondary_color: "#4364F7",
  text_color: "#111827",
  accent_color: "#ffffff",
  font_family: "Poppins",
  font_size: 16
};

async function onConfigChange(config) {
  const backgroundColor = config.background_color || defaultConfig.background_color;
  const primaryColor = config.primary_color || defaultConfig.primary_color;
  const secondaryColor = config.secondary_color || defaultConfig.secondary_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const accentColor = config.accent_color || defaultConfig.accent_color;
  const customFont = config.font_family || defaultConfig.font_family;
  const baseSize = config.font_size || defaultConfig.font_size;
  const baseFontStack = 'sans-serif';

  // Apply text content
  const companyName = config.company_name || defaultConfig.company_name;
  const companyNameElement = document.getElementById('company-name');
  if (companyNameElement) {
    // Split the name to keep "Guru" in purple
    const nameParts = companyName.split(' ');
    const guruIndex = nameParts.findIndex(part => part.toLowerCase() === 'guru');
    if (guruIndex !== -1) {
      const beforeGuru = nameParts.slice(0, guruIndex).join(' ');
      const guru = nameParts[guruIndex];
      companyNameElement.innerHTML = beforeGuru ? `${beforeGuru} <span class="text-purple-600">${guru}</span>` : `<span class="text-purple-600">${guru}</span>`;
    } else {
      companyNameElement.textContent = companyName;
    }
  }
  document.getElementById('tagline').textContent = config.tagline || defaultConfig.tagline;
  document.getElementById('top-phone').textContent = config.phone_number || defaultConfig.phone_number;
  document.getElementById('hero-title').textContent = config.hero_title || defaultConfig.hero_title;
  document.getElementById('hero-subtitle').textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
  document.getElementById('hero-cta').textContent = config.hero_cta || defaultConfig.hero_cta;
  document.getElementById('services-heading').textContent = config.services_heading || defaultConfig.services_heading;
  document.getElementById('service-1-title').textContent = config.service_1_title || defaultConfig.service_1_title;
  document.getElementById('service-1-desc').textContent = config.service_1_desc || defaultConfig.service_1_desc;
  document.getElementById('service-2-title').textContent = config.service_2_title || defaultConfig.service_2_title;
  document.getElementById('service-2-desc').textContent = config.service_2_desc || defaultConfig.service_2_desc;
  document.getElementById('service-3-title').textContent = config.service_3_title || defaultConfig.service_3_title;
  document.getElementById('service-3-desc').textContent = config.service_3_desc || defaultConfig.service_3_desc;
  document.getElementById('service-4-title').textContent = config.service_4_title || defaultConfig.service_4_title;
  document.getElementById('service-4-desc').textContent = config.service_4_desc || defaultConfig.service_4_desc;
  document.getElementById('cta-heading').textContent = config.cta_heading || defaultConfig.cta_heading;
  document.getElementById('cta-button').textContent = config.cta_button || defaultConfig.cta_button;
  document.getElementById('footer-text').textContent = config.footer_text || defaultConfig.footer_text;

  // Apply colors
  document.querySelector('.hero-bg').style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 50%, ${secondaryColor}dd 100%)`;

  const serviceIcons = document.querySelectorAll('.service-icon');
  serviceIcons.forEach(icon => {
    icon.style.background = `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`;
  });

  const primaryBtns = document.querySelectorAll('.primary-btn');
  primaryBtns.forEach(btn => {
    btn.style.background = `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`;
  });

  // Apply fonts
  document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;

  // Apply font sizes
  document.getElementById('company-name').style.fontSize = `${baseSize * 1.5}px`;
  document.getElementById('hero-title').style.fontSize = `${baseSize * 3.5}px`;
  document.getElementById('hero-subtitle').style.fontSize = `${baseSize * 1.25}px`;
  document.getElementById('services-heading').style.fontSize = `${baseSize * 2.5}px`;

  const serviceTitles = [
    document.getElementById('service-1-title'),
    document.getElementById('service-2-title'),
    document.getElementById('service-3-title'),
    document.getElementById('service-4-title')
  ];
  serviceTitles.forEach(title => {
    if (title) title.style.fontSize = `${baseSize * 1.25}px`;
  });
}

// Position client login button to align with header
function positionClientLoginButton() {
  const loginButton = document.querySelector('a[href="/client-login"]');
  const header = document.querySelector('header');
  const topBar = document.querySelector('.w-full.bg-blue-900');

  if (loginButton && header) {
    const headerRect = header.getBoundingClientRect();
    const headerHeight = headerRect.height;
    const headerTop = headerRect.top;

    // Calculate button position to align with header center vertically
    // When header is sticky (top = 0), position button at header center
    // When header is in normal position, position button relative to header
    if (headerTop <= 0) {
      // Header is sticky at top, align with center of header
      loginButton.style.top = `${headerHeight / 2}px`;
      loginButton.style.transform = 'translateY(-50%)';
    } else {
      // Header is in normal position, align with header center
      loginButton.style.top = `${headerTop + (headerHeight / 2)}px`;
      loginButton.style.transform = 'translateY(-50%)';
    }
  }
}

// Run on load and scroll
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    positionClientLoginButton();
    window.addEventListener('scroll', positionClientLoginButton);
    window.addEventListener('resize', positionClientLoginButton);
  });
} else {
  positionClientLoginButton();
  window.addEventListener('scroll', positionClientLoginButton);
  window.addEventListener('resize', positionClientLoginButton);
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities: (config) => ({
      recolorables: [
        {
          get: () => config.background_color || defaultConfig.background_color,
          set: (value) => {
            config.background_color = value;
            window.elementSdk.setConfig({ background_color: value });
          }
        },
        {
          get: () => config.accent_color || defaultConfig.accent_color,
          set: (value) => {
            config.accent_color = value;
            window.elementSdk.setConfig({ accent_color: value });
          }
        },
        {
          get: () => config.text_color || defaultConfig.text_color,
          set: (value) => {
            config.text_color = value;
            window.elementSdk.setConfig({ text_color: value });
          }
        },
        {
          get: () => config.primary_color || defaultConfig.primary_color,
          set: (value) => {
            config.primary_color = value;
            window.elementSdk.setConfig({ primary_color: value });
          }
        },
        {
          get: () => config.secondary_color || defaultConfig.secondary_color,
          set: (value) => {
            config.secondary_color = value;
            window.elementSdk.setConfig({ secondary_color: value });
          }
        }
      ],
      borderables: [],
      fontEditable: {
        get: () => config.font_family || defaultConfig.font_family,
        set: (value) => {
          config.font_family = value;
          window.elementSdk.setConfig({ font_family: value });
        }
      },
      fontSizeable: {
        get: () => config.font_size || defaultConfig.font_size,
        set: (value) => {
          config.font_size = value;
          window.elementSdk.setConfig({ font_size: value });
        }
      }
    }),
    mapToEditPanelValues: (config) => new Map([
      ['company_name', config.company_name || defaultConfig.company_name],
      ['tagline', config.tagline || defaultConfig.tagline],
      ['phone_number', config.phone_number || defaultConfig.phone_number],
      ['hero_title', config.hero_title || defaultConfig.hero_title],
      ['hero_subtitle', config.hero_subtitle || defaultConfig.hero_subtitle],
      ['hero_cta', config.hero_cta || defaultConfig.hero_cta],
      ['services_heading', config.services_heading || defaultConfig.services_heading],
      ['service_1_title', config.service_1_title || defaultConfig.service_1_title],
      ['service_1_desc', config.service_1_desc || defaultConfig.service_1_desc],
      ['service_2_title', config.service_2_title || defaultConfig.service_2_title],
      ['service_2_desc', config.service_2_desc || defaultConfig.service_2_desc],
      ['service_3_title', config.service_3_title || defaultConfig.service_3_title],
      ['service_3_desc', config.service_3_desc || defaultConfig.service_3_desc],
      ['service_4_title', config.service_4_title || defaultConfig.service_4_title],
      ['service_4_desc', config.service_4_desc || defaultConfig.service_4_desc],
      ['cta_heading', config.cta_heading || defaultConfig.cta_heading],
      ['cta_button', config.cta_button || defaultConfig.cta_button],
      ['footer_text', config.footer_text || defaultConfig.footer_text]
    ])
  });

}
// ================================
// FREE CONSULTATION BOOKING
// ================================

/* -------- STATE -------- */
var hour = 4;
var minute = 0;
var isPM = false;

var STEP = 10;                 // 🔒 ONLY 10-minute gap
var RANGE_START = 4 * 60;      // 4:00 AM
var RANGE_END = 26 * 60;       // 2:00 AM (next day)

/* -------- MODAL -------- */
function openBookingModal() {
  document.getElementById("bookingModal").classList.remove("hidden");

  var dateInput = document.getElementById("appointmentDate");
  var today = new Date().toISOString().split("T")[0];
  dateInput.min = today;
  dateInput.value = today;

  updateTimeDisplay();
}

function closeBookingModal() {
  document.getElementById("bookingModal").classList.add("hidden");
}

/* -------- TIME CORE (DO NOT CHANGE) -------- */
function addMinutes(mins) {
  var totalMinutes =
    (hour % 12) * 60 +
    minute +
    (isPM ? 720 : 0) +
    mins;

  totalMinutes = (totalMinutes + 1440) % 1440;

  isPM = totalMinutes >= 720;

  var h24 = Math.floor(totalMinutes / 60);
  minute = totalMinutes % 60;

  hour = h24 % 12;
  if (hour === 0) hour = 12;

  updateTimeDisplay();
}

/* -------- BUTTON ACTIONS -------- */
function timeUp() {
  addMinutes(STEP);      // +10 min
}

function timeDown() {
  addMinutes(-STEP);     // -10 min
}

/* -------- DISPLAY -------- */
function updateTimeDisplay() {
  const timeDisplayEl = document.getElementById("freeTimeDisplay");
  if (timeDisplayEl) {
    timeDisplayEl.innerText =
      (hour < 10 ? "0" : "") + hour + ":" +
      (minute < 10 ? "0" : "") + minute + " " +
      (isPM ? "PM" : "AM");
  }
}

/* -------- BOOK NOW -------- */
function bookNow() {
  var dateInput = document.getElementById("appointmentDate");
  var date = dateInput.value;

  if (!date) {
    alert("❌ Please select date");
    return;
  }

  // convert selected time to minutes
  var selectedMinutes =
    (hour % 12) * 60 +
    minute +
    (isPM ? 720 : 0);

  // logical window: 4 AM → 2 AM
  var logicalMinutes =
    selectedMinutes < RANGE_START
      ? selectedMinutes + 1440
      : selectedMinutes;

  // ❌ out of allowed range
  if (logicalMinutes < RANGE_START || logicalMinutes > RANGE_END) {
    alert("❌ Booking allowed only between 4:00 AM and 2:00 AM");

    // reset to 4:00 AM
    hour = 4;
    minute = 0;
    isPM = false;
    updateTimeDisplay();
    return;
  }

  // ❌ past time for today
  var now = new Date();
  var bookingTime = new Date(date);

  var hour24 = hour % 12;
  if (isPM) hour24 += 12;

  bookingTime.setHours(hour24, minute, 0, 0);

  if (bookingTime <= now) {
    alert("❌ Selected time already passed");
    return;
  }

  // ✅ WhatsApp redirect
  var timeText = document.getElementById("freeTimeDisplay").innerText;
  var msg =
    `🅃🄵🄶 Hello Tax Filing Guru,
📞 I would like to Schedule a free consultation
📅 Date: ${date}
⏰ Time: ${timeText}
Please assist me with the process.
 Thank you!`
  window.location.href =
    `whatsapp://send?phone=919811945176&text=${encodeURIComponent(msg)}`;


  closeBookingModal();
}




function toggleFaq(button) {
  const answer = button.nextElementSibling;
  const icon = button.querySelector('.icon-wrapper');

  // Close all other open FAQs (Optional: remove this block if you want multiple open at once)
  document.querySelectorAll('.faq-answer').forEach(el => {
    if (el !== answer) {
      el.classList.add('hidden');
      el.previousElementSibling.querySelector('.icon-wrapper').classList.remove('rotate-180', 'bg-blue-600', 'text-white');
      el.previousElementSibling.querySelector('.icon-wrapper').classList.add('bg-blue-50', 'text-blue-600');
    }
  });

  // Toggle current
  if (answer.classList.contains('hidden')) {
    answer.classList.remove('hidden');
    icon.classList.add('rotate-180', 'bg-blue-600', 'text-white'); // Active state styles
    icon.classList.remove('bg-blue-50', 'text-blue-600');
  } else {
    answer.classList.add('hidden');
    icon.classList.remove('rotate-180', 'bg-blue-600', 'text-white');
    icon.classList.add('bg-blue-50', 'text-blue-600');
  }
}
// video consultation booking
/* ================================
   GLOBAL STATE
================================ */
let vcSelectedDuration = null;
let vcHour = 4;
let vcMinute = 0;
let vcIsPM = false;
const VC_MIN_MINUTES = 4 * 60;   // 4:00 AM
const VC_MAX_MINUTES = 26 * 60;  // 2:00 AM (next day)


/* ================================
   OPEN / CLOSE OVERLAY
================================ */
function vcOpenBooking() {
  const overlay = document.getElementById("bookingOverlay");
  const tab = document.getElementById("rightTab");
  const closeTab = document.getElementById("closeTab");

  vcSetMinDate();

  overlay.classList.remove("hidden");
  closeTab.classList.remove("hidden");

  requestAnimationFrame(() => {
    overlay.classList.add("show");
    closeTab.classList.add("show");
  });

  tab.classList.add("hide");
}

function vcCloseBooking() {
  const overlay = document.getElementById("bookingOverlay");
  const tab = document.getElementById("rightTab");
  const closeTab = document.getElementById("closeTab");

  overlay.classList.remove("show");
  closeTab.classList.remove("show");

  setTimeout(() => {
    overlay.classList.add("hidden");
    closeTab.classList.add("hidden");
    tab.classList.remove("hide");
  }, 300);
}

/* ================================
   DATE
================================ */
function vcSetMinDate() {
  const dateInput = document.getElementById("datePicker");
  const today = new Date().toISOString().split("T")[0];
  dateInput.min = today;
  dateInput.value = today;
}

/* ================================
   DURATION
================================ */
function vcSelectDuration(minutes) {
  vcSelectedDuration = minutes;
  vcMinute = 0;

  document.querySelectorAll(".duration button")
    .forEach(b => b.classList.remove("active"));

  document.getElementById(minutes === 45 ? "d45" : "d90")
    .classList.add("active");

  vcUpdateTimeDisplay();
}

/* ================================
   TIME DISPLAY
================================ */
function vcUpdateTimeDisplay() {
  const hh = vcHour < 10 ? "0" + vcHour : vcHour;
  const mm = vcMinute < 10 ? "0" + vcMinute : vcMinute;
  const ap = vcIsPM ? "PM" : "AM";

  document.getElementById("timeDisplay").textContent =
    `${hh}:${mm} ${ap}`;
}

/* ================================
   TIME CORE LOGIC (IMPORTANT)
================================ */
function vcAddMinutes(mins) {
  let totalMinutes =
    (vcHour % 12) * 60 +
    vcMinute +
    (vcIsPM ? 720 : 0) +
    mins;

  totalMinutes = (totalMinutes + 1440) % 1440;

  vcIsPM = totalMinutes >= 720;

  let h24 = Math.floor(totalMinutes / 60);
  vcMinute = totalMinutes % 60;

  vcHour = h24 % 12;
  if (vcHour === 0) vcHour = 12;

  vcUpdateTimeDisplay();
}



/* ================================
   TIME UP / DOWN
================================ */
function vcTimeUp() {
  if (!vcSelectedDuration) {
    alert("Select duration first");
    return;
  }
  vcAddMinutes(vcSelectedDuration);
}

function vcTimeDown() {
  if (!vcSelectedDuration) {
    alert("Select duration first");
    return;
  }
  vcAddMinutes(-vcSelectedDuration);
}

/* ================================
   BOOK NOW
================================ */
function vcBookNow() {
  const name = document.getElementById("clientName").value.trim();
  const email = document.getElementById("clientEmail").value.trim();
  const mobile = document.getElementById("clientNo").value.trim();
  const date = document.getElementById("datePicker").value;

  if (!name || !email || !mobile || !date || !vcSelectedDuration) {
    alert("❌ Please fill all details");
    return;
  }

  if (!/^[6-9]\d{9}$/.test(mobile)) {
    alert("❌ Enter valid 10-digit mobile number");
    return;
  }

  /* ---------- TIME RANGE CHECK (4 AM to 2 AM) ---------- */
  let selectedMinutes =
    (vcHour % 12) * 60 +
    vcMinute +
    (vcIsPM ? 720 : 0);

  // convert to logical 22-hour window
  let logicalMinutes =
    selectedMinutes < 4 * 60
      ? selectedMinutes + 1440
      : selectedMinutes;

  if (logicalMinutes < 4 * 60 || logicalMinutes > 26 * 60) {
    alert("❌ Booking allowed only between 4:00 AM and 2:00 AM");

    // force reset to 4:00 AM
    vcHour = 4;
    vcMinute = 0;
    vcIsPM = false;
    vcUpdateTimeDisplay();

    return; // stop booking
  }
  /* ---------- END RANGE CHECK ---------- */

  let hour24 = vcHour % 12;
  if (vcIsPM) hour24 += 12;

  const selectedDateTime = new Date(date);
  selectedDateTime.setHours(hour24, vcMinute, 0, 0);

  if (selectedDateTime <= new Date()) {
    alert("❌ Selected time already passed");
    return;
  }

  const timeText =
    `${vcHour < 10 ? "0" : ""}${vcHour}:` +
    `${vcMinute < 10 ? "0" : ""}${vcMinute} ` +
    `${vcIsPM ? "PM" : "AM"}`;

  const msg =
    `🅃🄵🄶 Hello Tax Filing Guru,
📹 Video Consultation Booking
👤 Name: ${name}
📧 Email: ${email}
📞 Mobile: ${mobile}
📅 Date: ${date}
⏰ Time: ${timeText}
⏳ Duration: ${vcSelectedDuration} Minutes`;

  window.location.href =
    `whatsapp://send?phone=919811945176&text=${encodeURIComponent(msg)}`;
}

/* ================================
   INIT
================================ */
vcSetMinDate();
vcSelectDuration(45);
vcUpdateTimeDisplay();

function setUserType(type) {
  localStorage.setItem("loginType", type);
}

function togglePackage(button) {
  const card = button.closest('.package-card');

  const packageName = card.querySelector('h3').textContent.trim();
  const packageRate = card.querySelector('.rate').textContent.trim();
  const desc = card.querySelector('.package-desc').textContent.trim();

  const packageFeatures = Array.from(
    card.querySelectorAll('.package-features li')
  ).map(el => el.textContent.trim());

  // STORE FIRST
  localStorage.setItem(
    "selectedPackage",
    JSON.stringify({
      name: packageName,
      description: desc,
      rate: packageRate,
      features: packageFeatures
    })
  );

  // UI update
  button.textContent = "Package Added";
  button.dataset.added = "true";

  button.classList.remove(
    "from-blue-600",
    "to-blue-700",
    "hover:-translate-y-1",
    "hover:scale-105"
  );
  button.classList.add("bg-gray-400", "cursor-not-allowed");
  button.disabled = true;

  alert(`You have successfully added ${packageName} package`);

  // REDIRECT LAST
  if (window.location.pathname.endsWith("nri.html")){
  window.location.href = "reg.html?type=nri";
  } else {
  window.location.href = "reg.html";
  }
}

/* ===============================
   MAKE PAYMENT CLICK
================================ */
function makePayment() {
  // Store payment start time
  localStorage.setItem("paymentStartedAt", Date.now());

  // Continue your payment logic here
  // Razorpay / API / redirect etc.
  console.log("Payment initiated");
}

/* ===============================
   AUTO CLEAR AFTER 5 MINUTES
   (Runs on every page load)
================================ */
(function autoClearAfter5Minutes() {
  const startedAt = localStorage.getItem("paymentStartedAt");
  if (!startedAt) return;

  const FIVE_MIN = 5 * 60 * 1000;
  const now = Date.now();

  if (now - startedAt >= FIVE_MIN) {
    localStorage.removeItem("selectedPackage");
    localStorage.removeItem("paymentStartedAt");
    console.log("⏱ Local data cleared after 5 minutes");
  }
})();

// Initialize free consultation time display on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    updateTimeDisplay();
  });
} else {
  updateTimeDisplay();
}
  function scrollPackages(button, direction) {
    const container = button
      .parentElement
      .querySelector('[data-scroll-container]');

    const card = container.querySelector('div');
    const gap = 24; // Tailwind gap-6
    const scrollAmount = card.offsetWidth + gap;

    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }