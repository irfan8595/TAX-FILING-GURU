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
// OPEN
function openItrPopup() {
  document.getElementById("itrPopup").classList.remove("hidden");
}

function openItrPopup1() {
  document.getElementById("itrPopup1").classList.remove("hidden");
}

// CLOSE
function closeItrPopup() {
  document.getElementById("itrPopup").classList.add("hidden");
}

function closeItrPopup1() {
  document.getElementById("itrPopup1").classList.add("hidden");
}

// CLOSE ON BACKDROP CLICK
document.getElementById("itrPopup").addEventListener("click", function (e) {
  if (e.target === this) closeItrPopup();
});

document.getElementById("itrPopup1").addEventListener("click", function (e) {
  if (e.target === this) closeItrPopup1();
});

function setUserType(type) {
    localStorage.setItem("loginType", type);
  }
  
