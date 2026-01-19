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
// book free consultation 
let selectedTime = "";

    // 👉 Set minimum selectable date = today
    const dateInput = document.getElementById("appointmentDate");
    const minDate = new Date();
  minDate.setDate(minDate.getDate()); // 👈 move to tomorrow

  const today = minDate.toISOString().split("T")[0];

    function openBookingModal() {
      document.getElementById("bookingModal").classList.remove("hidden");
      dateInput.value = today;
      handleDateChange();
    }

    function closeBookingModal() {
      document.getElementById("bookingModal").classList.add("hidden");
    }

    function selectTime(button) {
      document.querySelectorAll(".time-slot").forEach(btn =>
        btn.classList.remove("active")
      );
      button.classList.add("active");
      selectedTime = button.innerText;
    }

    function handleDateChange() {
      const selectedDate = dateInput.value;
      const now = new Date();

      document.querySelectorAll(".time-slot").forEach(btn => {
        const slotTime = btn.dataset.time; // HH:MM
        const [h, m] = slotTime.split(":");

        const slotDateTime = new Date(selectedDate);
        slotDateTime.setHours(h, m, 0, 0);

        // 👉 If selected date is today, hide past slots
        if (selectedDate === today && slotDateTime <= now) {
          btn.style.display = "none";
          btn.classList.remove("active");
          if (btn.innerText === selectedTime) {
            selectedTime = "";
          }
        } else {
          btn.style.display = "block";
        }
      });
    }

    function bookNow() {
      const date = dateInput.value;

      if (!date || !selectedTime) {
        alert("❌ Please select a valid date and time.");
        return;
      }

      const message =
        `🄸🅃🄶  Hello Tax Filing Guru, \n` +
        `📞  I would like to Schedule a free consultation\n` +
        `📅  Date: ${date}\n` +
        `⏰  Time: ${selectedTime}`;
const encodedmessage = encodeURIComponent(message);
  const phone = "919811945176";

  window.location.href =
    `whatsapp://send?phone=${phone}&text=${encodedmessage}`;

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

    /* ================================
   VIDEO CONSULTATION SCRIPT
   (Isolated – no conflicts)
================================ */

let vcSelectedDuration = null;
let vcSelectedTime = "";

// ---------- OPEN / CLOSE ----------
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

  if (vcSelectedDuration) {
    vcGenerateSlots(vcSelectedDuration);
  }
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
  }); // MUST match CSS transition
}


// ---------- DURATION ----------
function vcSelectDuration(minutes) {
  vcSelectedDuration = minutes;
  vcSelectedTime = "";

  document.querySelectorAll(".duration button").forEach(btn =>
    btn.classList.remove("active")
  );

  document.getElementById(minutes === 45 ? "d45" : "d90").classList.add("active");
  vcGenerateSlots(minutes);
}
// ---------- DISABLE PAST DATES (VIDEO CONSULTATION) ----------
// ---------- DATE SETUP ----------
function vcSetMinDate() {
  const dateInput = document.getElementById("datePicker");
const today = new Date();
  today.setDate(today.getDate()); // 👈 move to tomorrow

  const minDate = today.toISOString().split("T")[0];

  const todayStr = minDate;
  dateInput.min = todayStr;
  dateInput.value = todayStr; // auto-select today
}


// ---------- TIME SLOTS ----------
function vcGenerateSlots(gap) {
  const slotsBox = document.getElementById("timeSlots");
  slotsBox.innerHTML = "";

  const dateInput = document.getElementById("datePicker");
  const selectedDate = dateInput.value;
  const now = new Date();

  let startMinutes = 9 * 60;   // 9:00 AM
  let endMinutes   = 21 * 60;  // 9:00 PM

  while (startMinutes + gap <= endMinutes) {
    const h = Math.floor(startMinutes / 60);
    const m = startMinutes % 60;

    const slotTime = vcFormatTime(h, m);

    const slotDateTime = new Date(selectedDate);
    slotDateTime.setHours(h, m, 0, 0);

    // ❌ Skip past slots if date = today
    if (selectedDate === now.toISOString().split("T")[0] && slotDateTime <= now) {
      startMinutes += gap;
      continue;
    }

    const btn = document.createElement("button");
    btn.textContent = slotTime;
    btn.className = "vc-time-slot";
    btn.onclick = () => vcSelectTime(btn, slotTime);

    slotsBox.appendChild(btn);
    startMinutes += gap;
  }

  // Reset selected time if invalid
  vcSelectedTime = "";
}
document.getElementById("datePicker").addEventListener("change", () => {
  if (vcSelectedDuration) {
    vcGenerateSlots(vcSelectedDuration);
  }
});

// ---------- SELECT TIME ----------
function vcSelectTime(btn, time) {
  vcSelectedTime = time;

  document.querySelectorAll("#timeSlots button").forEach(b =>
    b.classList.remove("active")
  );
  btn.classList.add("active");
}

// ---------- FORMAT TIME ----------
function vcFormatTime(h, m) {
  const ampm = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:${m.toString().padStart(2, "0")} ${ampm}`;
}

// ---------- BOOK NOW ----------
function vcBookNow() {
  const name = document.getElementById("clientName").value.trim();
  const email = document.getElementById("clientEmail").value.trim();
  const number = document.getElementById("clientNo").value.trim();
  const date = document.getElementById("datePicker").value;

  if (!name || !email ||!number || !date || !vcSelectedTime || !vcSelectedDuration) {
    alert("❌ Please fill all details");
    return;
  }


   const rawMessage =
   `🄸🅃🄶  Hello Tax Filing Guru,\n` +
    `📹 Video Consultation Booking\n` +
    `👤  Name: ${name}\n` +
    `📧  Email: ${email}\n` +
    `📞  Mobile No.: ${number}\n` +
    `📅  Date: ${date}\n` +
    `⏰  Time: ${vcSelectedTime}\n` +
    `⏳  Duration: ${vcSelectedDuration} Minutes`;

  const encodedMessage = encodeURIComponent(rawMessage);
  const phone = "919811945176";

  window.location.href =
    `whatsapp://send?phone=${phone}&text=${encodedMessage}`;

  vcCloseBooking();
}

function setUserType(type) {
    localStorage.setItem("loginType", type);
  }
  
function togglePackage(button) {
  const card = button.closest('div');
  const packageName = card.querySelector('h3').textContent.trim();

  // Check current state
  const isAdded = button.dataset.added === "true";

  if (!isAdded) {
    // ADD PACKAGE
    alert(`You have successfully added ${packageName} package`);

    button.textContent = "Package Added";
    button.dataset.added = "true";

    button.classList.remove(
      "from-blue-600",
      "to-blue-700",
      "hover:-translate-y-1",
      "hover:scale-105"
    );
    button.classList.add("bg-gray-400", "cursor-pointer");
  } else {
    // ASK TO REMOVE
    const confirmRemove = confirm(`Do you want to remove ${packageName} package?`);

    if (confirmRemove) {
      // REMOVE PACKAGE
      button.textContent = "Add Plan";
      button.dataset.added = "false";

      button.classList.remove("bg-gray-400", "cursor-pointer");
      button.classList.add(
        "from-blue-600",
        "to-blue-700",
        "hover:-translate-y-1",
        "hover:scale-105"
      );
    }
    // If CANCEL → do nothing
  }
}

