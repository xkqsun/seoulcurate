// Language switcher — supports 'en' and 'ko'
// Usage: add data-i18n="key" to elements; add data-i18n-html="key" for innerHTML

(function () {
  var T = {
    en: {
      // Nav
      'nav.logo':       'Urban <span>Medical</span> Wellness',
      'nav.programs':   'Programs',
      'nav.personal':   'Personal',
      'nav.outcomes':   'Outcomes',
      'nav.faq':        'FAQ',
      'nav.corporate':  'Corporate',
      'nav.cta':        'Book a Retreat',
      'nav.back':       '← Home',

      // Hero
      'hero.eyebrow':     'Medically Supervised Wellness Retreats',
      'hero.headline':    'Your Most Important Business Decision This Year <em>Starts With Your Health.</em>',
      'hero.subheadline': 'Medically supervised wellness retreats engineered for high-performing professionals and forward-thinking organizations. 3-day and 5-day programs with measurable, clinically validated outcomes — because peak performance begins at the cellular level.',
      'hero.cta.primary':   'Reserve Your Retreat',
      'hero.cta.secondary': 'Corporate Program Inquiry',
      'hero.pill.3day':   '3-Day Intensive',
      'hero.pill.5day':   '5-Day Transformation',
      'hero.pill.group':  'Corporate Group Programs',

      // Trust
      'trust.eyebrow':    'Clinical Authority & Validation',
      'trust.headline':   'Built on <em>Clinical Evidence.</em><br>Trusted by Industry Leaders.',
      'trust.sub':        'Every protocol we administer is peer-reviewed, physician-designed, and held to the same accountability standards as the institutions where our doctors trained.',
      'trust.stat1.num':  '2,400+', 'trust.stat1.label': 'Retreats\nCompleted',
      'trust.stat2.num':  '47',     'trust.stat2.label': 'Medical Professionals\non Staff',
      'trust.stat3.num':  '8',      'trust.stat3.label': 'Urban-Accessible\nLocations',
      'trust.stat4.num':  '94%',    'trust.stat4.label': 'Client\nRetention Rate',

      // Program
      'program.eyebrow':  'Signature Programs',
      'program.headline': 'Two Paths. <em>One Standard of Excellence.</em>',
      'program.sub':      'Whether your schedule allows three focused days or five transformative ones, every protocol is physician-designed, evidence-based, and calibrated to your unique biomarkers — never generic, always measurable.',
      'program.tab.3day': '3-Day Intensive Reset',
      'program.tab.5day': '5-Day Transformation Journey',

      // B2C
      'b2c.eyebrow':   'Personal Transformation',
      'b2c.headline':  'You Have Optimized Everything Except <em>the Foundation.</em>',
      'b2c.sub':       'The tracking apps, the supplements, the 5am workouts — but chronic stress, fragmented sleep, and metabolic drift are still quietly eroding your edge. It is time for a clinical reset.',

      // Outcomes
      'outcomes.eyebrow':  'Measurable Outcomes',
      'outcomes.headline': 'The Numbers <em>Don\'t Lie.</em>',

      // CTA
      'cta.eyebrow':   'Program Pricing',
      'cta.headline':  'Choose Your Reset.\nReclaim Your Edge.',
      'cta.sub':       'Limited availability ensures personalized physician attention. Cohorts fill 6–8 weeks in advance.',

      // Footer
      'footer.tagline': 'Where Clinical Expertise Meets Transformative Retreat Experience.',

      // FAQ page
      'faq.page.eyebrow':  'Frequently Asked Questions',
      'faq.page.headline': 'Everything You Need<br>to Know, <em>Answered.</em>',
      'faq.page.sub':      'Can\'t find what you\'re looking for? Our concierge team is available to assist you directly.',
      'faq.search.placeholder': 'Search questions…',
      'faq.tab.all':      'All Questions',
      'faq.tab.programs': 'Programs',
      'faq.tab.medical':  'Medical & Safety',
      'faq.tab.pricing':  'Pricing & Booking',
      'faq.tab.corporate':'Corporate',
      'faq.tab.logistics':'Logistics',
      'faq.sidebar.title':'Categories',
      'faq.sidebar.cta.text': 'Still have questions? Our concierge team responds within 2 business hours.',
      'faq.sidebar.cta.btn': 'Contact Concierge',
      'faq.cat.programs':  'Programs',
      'faq.cat.medical':   'Medical & Safety',
      'faq.cat.pricing':   'Pricing & Booking',
      'faq.cat.corporate': 'Corporate Programs',
      'faq.cat.logistics': 'Logistics',
      'faq.cta.headline':  'Still Have Questions?<br><em>We\'d Love to Talk.</em>',
      'faq.cta.sub':       'Our clinical concierge team is available to walk you through any aspect of our programs — no sales pressure, just answers.',
      'faq.cta.btn1': 'Book a Discovery Call',
      'faq.cta.btn2': 'Reserve a Retreat',
      'faq.noresults.title': 'No questions found',
      'faq.noresults.sub':   'Try different search terms, or contact our concierge team directly.',
      'faq.noresults.btn':   'Contact Concierge',

      // FAQ questions
      'faq.q1':  'What is the difference between the 3-Day Intensive Reset and the 5-Day Transformation Journey?',
      'faq.q2':  'What does a typical day look like during a retreat?',
      'faq.q3':  'Can I stay connected to work during the retreat?',
      'faq.q4':  'What happens after the retreat? Is there follow-up support?',
      'faq.q5':  'Who are the medical professionals on your team?',
      'faq.q6':  'Is the program safe if I have existing health conditions?',
      'faq.q7':  'Is my health data private and secure?',
      'faq.q8':  'What is included in the program price?',
      'faq.q9':  'Can I use HSA/FSA funds or submit for insurance reimbursement?',
      'faq.q10': 'What is the cancellation and rescheduling policy?',
      'faq.q11': 'What is the minimum group size for a corporate retreat?',
      'faq.q12': 'How do you measure and report ROI to our organization?',
      'faq.q13': 'Where are your retreat locations?',
      'faq.q14': 'What should I bring and how should I prepare?',
    },

    ko: {
      // Nav
      'nav.logo':       'Urban <span>Medical</span> Wellness',
      'nav.programs':   '프로그램',
      'nav.personal':   '개인',
      'nav.outcomes':   '성과',
      'nav.faq':        'FAQ',
      'nav.corporate':  '기업',
      'nav.cta':        '리트릿 예약',
      'nav.back':       '← 홈으로',

      // Hero
      'hero.eyebrow':     '의학적으로 감독되는 웰니스 리트릿',
      'hero.headline':    '올해 가장 중요한 비즈니스 결정은 <em>당신의 건강에서 시작됩니다.</em>',
      'hero.subheadline': '고성과 전문가와 선도적 기업을 위한 의학적으로 감독되는 웰니스 리트릿. 측정 가능하고 임상적으로 검증된 성과를 갖춘 3일 및 5일 프로그램 — 최고의 퍼포먼스는 세포 수준에서 시작됩니다.',
      'hero.cta.primary':   '리트릿 예약하기',
      'hero.cta.secondary': '기업 프로그램 문의',
      'hero.pill.3day':   '3일 집중 과정',
      'hero.pill.5day':   '5일 트랜스포메이션',
      'hero.pill.group':  '기업 그룹 프로그램',

      // Trust
      'trust.eyebrow':    '임상적 권위 및 검증',
      'trust.headline':   '<em>임상적 근거</em> 위에 구축된,<br>업계 리더들이 신뢰하는 프로그램.',
      'trust.sub':        '저희가 제공하는 모든 프로토콜은 동료 검토를 거치고, 의사가 설계하며, 저희 의사들이 교육받은 기관과 동일한 책임 기준을 적용합니다.',
      'trust.stat1.num':  '2,400+', 'trust.stat1.label': '완료된\n리트릿',
      'trust.stat2.num':  '47',     'trust.stat2.label': '소속\n의료 전문가',
      'trust.stat3.num':  '8',      'trust.stat3.label': '도심 접근\n가능 위치',
      'trust.stat4.num':  '94%',    'trust.stat4.label': '고객\n재등록률',

      // Program
      'program.eyebrow':  '시그니처 프로그램',
      'program.headline': '두 가지 경로. <em>하나의 탁월한 기준.</em>',
      'program.sub':      '3일이든 5일이든, 모든 프로토콜은 의사가 설계하고, 근거 중심이며, 개인의 바이오마커에 맞게 보정됩니다. 일반적인 것은 없습니다 — 항상 측정 가능합니다.',
      'program.tab.3day': '3일 집중 리셋',
      'program.tab.5day': '5일 트랜스포메이션 여정',

      // B2C
      'b2c.eyebrow':   '개인 트랜스포메이션',
      'b2c.headline':  '모든 것을 최적화했지만 <em>기반은 빠뜨렸습니다.</em>',
      'b2c.sub':       '추적 앱, 보충제, 새벽 5시 운동 — 하지만 만성 스트레스, 단편적 수면, 대사 저하가 조용히 당신의 우위를 갉아먹고 있습니다. 임상적 리셋이 필요할 때입니다.',

      // Outcomes
      'outcomes.eyebrow':  '측정 가능한 성과',
      'outcomes.headline': '숫자는 <em>거짓말하지 않습니다.</em>',

      // CTA
      'cta.eyebrow':   '프로그램 가격',
      'cta.headline':  '당신의 리셋을 선택하세요.\n당신의 우위를 되찾으세요.',
      'cta.sub':       '제한된 정원으로 개인 맞춤 의사 관리를 보장합니다. 코호트는 6~8주 전에 마감됩니다.',

      // Footer
      'footer.tagline': '임상적 전문성과 변혁적 리트릿 경험이 만나는 곳.',

      // FAQ page
      'faq.page.eyebrow':  '자주 묻는 질문',
      'faq.page.headline': '알고 싶은 모든 것,<br><em>여기서 답하드립니다.</em>',
      'faq.page.sub':      '찾는 내용이 없으신가요? 컨시어지 팀이 직접 도와드립니다.',
      'faq.search.placeholder': '질문 검색…',
      'faq.tab.all':      '전체 질문',
      'faq.tab.programs': '프로그램',
      'faq.tab.medical':  '의료 및 안전',
      'faq.tab.pricing':  '가격 및 예약',
      'faq.tab.corporate':'기업 고객',
      'faq.tab.logistics':'이용 안내',
      'faq.sidebar.title':'카테고리',
      'faq.sidebar.cta.text': '더 궁금하신 점이 있으신가요? 컨시어지 팀이 영업일 기준 2시간 내에 답변드립니다.',
      'faq.sidebar.cta.btn': '컨시어지에 문의',
      'faq.cat.programs':  '프로그램',
      'faq.cat.medical':   '의료 및 안전',
      'faq.cat.pricing':   '가격 및 예약',
      'faq.cat.corporate': '기업 프로그램',
      'faq.cat.logistics': '이용 안내',
      'faq.cta.headline':  '아직 궁금한 점이 있으신가요?<br><em>함께 이야기해요.</em>',
      'faq.cta.sub':       '임상 컨시어지 팀이 프로그램의 모든 부분을 안내해 드립니다 — 판매 압박 없이, 오직 답변만 드립니다.',
      'faq.cta.btn1': '상담 예약하기',
      'faq.cta.btn2': '리트릿 예약하기',
      'faq.noresults.title': '검색 결과가 없습니다',
      'faq.noresults.sub':   '다른 검색어를 시도하거나 컨시어지 팀에 직접 문의하세요.',
      'faq.noresults.btn':   '컨시어지에 문의',

      // FAQ questions
      'faq.q1':  '3일 집중 리셋과 5일 트랜스포메이션 여정의 차이는 무엇인가요?',
      'faq.q2':  '리트릿 기간 중 하루 일과는 어떻게 되나요?',
      'faq.q3':  '리트릿 중에 업무와 연결을 유지할 수 있나요?',
      'faq.q4':  '리트릿 이후에는 어떻게 되나요? 사후 관리가 있나요?',
      'faq.q5':  '의료진은 어떤 분들인가요?',
      'faq.q6':  '기존 건강 문제가 있어도 프로그램에 참여할 수 있나요?',
      'faq.q7':  '건강 데이터는 비공개로 안전하게 보호되나요?',
      'faq.q8':  '프로그램 가격에 무엇이 포함되나요?',
      'faq.q9':  'HSA/FSA 자금을 사용하거나 보험 환급을 신청할 수 있나요?',
      'faq.q10': '취소 및 일정 변경 정책은 어떻게 되나요?',
      'faq.q11': '기업 리트릿 최소 그룹 인원은 몇 명인가요?',
      'faq.q12': '조직의 ROI를 어떻게 측정하고 보고하나요?',
      'faq.q13': '리트릿 위치는 어디인가요?',
      'faq.q14': '무엇을 가져와야 하고 어떻게 준비해야 하나요?',
    }
  };

  function getLang() {
    return localStorage.getItem('umwj-lang') || 'en';
  }

  function setLang(lang) {
    localStorage.setItem('umwj-lang', lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    var dict = T[lang] || T['en'];
    // data-i18n: textContent
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    // data-i18n-html: innerHTML
    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    // data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });
    // Update toggle button state
    document.querySelectorAll('.lang-toggle-btn').forEach(function(btn) {
      btn.setAttribute('aria-label', lang === 'en' ? 'Switch to Korean' : '영어로 전환');
      btn.querySelector('.lang-en').style.fontWeight = lang === 'en' ? '700' : '400';
      btn.querySelector('.lang-en').style.color = lang === 'en' ? 'var(--color-accent)' : 'rgba(245,240,232,0.55)';
      btn.querySelector('.lang-ko').style.fontWeight = lang === 'ko' ? '700' : '400';
      btn.querySelector('.lang-ko').style.color = lang === 'ko' ? 'var(--color-accent)' : 'rgba(245,240,232,0.55)';
    });
    // Update html lang attr
    document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';
  }

  function initLangToggle() {
    // Insert toggle into all .nav-lang-slot elements
    document.querySelectorAll('.nav-lang-slot').forEach(function(slot) {
      slot.innerHTML =
        '<button class="lang-toggle-btn" aria-label="Switch language">' +
          '<span class="lang-en">EN</span>' +
          '<span class="lang-divider" aria-hidden="true"> / </span>' +
          '<span class="lang-ko">KR</span>' +
        '</button>';
      slot.querySelector('.lang-toggle-btn').addEventListener('click', function() {
        setLang(getLang() === 'en' ? 'ko' : 'en');
      });
    });
    applyLang(getLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLangToggle);
  } else {
    initLangToggle();
  }

  window.i18n = { setLang: setLang, getLang: getLang, T: T };
})();
