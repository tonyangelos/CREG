/* ==========================================================================
   Captivate onboarding content. Edit copy here; the UI re-renders from it.
   Team photos: drop files in /assets and point `photo` at them. If a photo is
   missing or fails to load, the person's initials show instead.
   ========================================================================== */
window.CAPTIVATE_CONTENT = {

  STAGES: {
    exp: [
      { name: "Join Application", tag: "You do",
        items: [["You do", "Apply at join.exprealty.com, name your sponsor, and complete all of your eXp paperwork right inside the application, including your Independent Contractor Agreement (ICA), W-9 and direct deposit form. Once it’s submitted, you’re fully signed up! You’ll acknowledge the $149 join fee here, but you won’t be charged until your license is active with eXp."]],
        notes: [["Good to know", "Select TEAM (not individual) and enter “Align - Brett Sikora.” Use your name exactly as it appears on your license, and send us your eXp personal code so we can track your progress. The last 4 digits of your tax ID must match on your W-9 and direct deposit form. Getting paid to an LLC? You’ll need one extra authorization form."]] },
      { name: "eXp Review", tag: "eXp handles",
        items: [["eXp handles", "eXp verifies your license with the state, and its State Broker Team approves the transfer. Check your status anytime at accp-onboardingstatus.expenterprise.com using your personal code."]],
        notes: [["Good to know", "Status not moving? Text the Happiness Hotline and we’ll follow up with eXp for you."],
                ["Heads up", "Watch your email (check spam too!) and your texts while eXp reviews your application. They may reach out for W-9 corrections or missing documents. eXp emails often come from automated addresses and land in spam, so a quick daily check keeps you moving."]] },
      { name: "Team Agreement", tag: "You do",
        items: [["You do", "Sign your Team Agreement. Look for an email titled “Mega Team Member Packet.” We’ll text you and your sponsor the moment it lands."]],
        notes: [] },
      { name: "License Transfer", tag: "You do", sticky: true,
        items: [["You do", "eXp Onboarding will email you a license transfer form with instructions for your state. Every state is a little different: some transfer digitally, some require a phone call, and a few still require paper forms and a mailed receipt. Forward that email to us so we can walk you through your state’s exact steps!"]],
        notes: [["Heads up", "You’ll need to notify your current brokerage directly. eXp does not contact your old brokerage. We recommend sending your notice by email (even if you chat with them as well) so you have proof of the date. (We’ll send you a resignation letter template to make it easy.) This step usually takes the longest, so let us know if you get stuck."]] },
      { name: "MLS & Board", tag: "You do",
        items: [["You do", "Move your MLS and REALTOR® association membership to eXp. We’ll send you the steps for your state."]],
        notes: [["Good to know", "Send us your MLS ID as soon as you have it."]] },
      { name: "You’re Active!", tag: "eXp handles",
        items: [["eXp handles", "Your license is officially hung with eXp! You’ll get eXp’s welcome email and your new eXp email address, plus a celebration text from us. eXp charges the $149 join fee shortly after."]],
        notes: [["Heads up", "Activate Okta the moment your welcome email arrives. The activation link times out, so please don’t save it for later. Okta is the key to every eXp system."]] },
      { name: "eXp Onboarding", tag: "You do",
        items: [["You do", "Join eXp’s live onboarding session and get set up in eXp World and eXp Passport. Your eXp Realty email is your username for all eXp systems, including SkySlope, the eXp Hub and Passport."]],
        notes: [["Good to know", "Want everything in one inbox? You can forward your eXp email to your Captivate Gmail from your My eXp settings."]] }
    ],
    cap: [
      { name: "Welcome & Paperwork", tag: "Get + do", sticky: true,
        intro: "Meet the team, save our number, and tell us a little about you.",
        items: [
          ["You get", "A welcome email with a short video and your next steps, a text from our Happiness Hotline (save that number, it’s how you reach us anytime), and a personal hello from Shabana, your Agent Success Concierge."],
          ["You do", "Fill out the Get to Know You form. This one unlocks your entire setup, so the sooner, the better!"],
          ["You do", "Once your eXp Team Agreement is signed, sign your Captivate agreement. It’ll arrive by SignNow."]],
        notes: [["Heads up", "The Get to Know You form is the step that most often gets put off, and we can’t build your logins until it’s in. Knock it out early!"]] },
      { name: "Logins & Orientation", tag: "Get + do",
        intro: "Get into your new systems and see how it all works together.",
        items: [
          ["You get", "One email with every login you need, titled “Welcome to Your New Team Ecosystem.”"],
          ["You do", "Join a Captivate My Onboarding session to meet the team and get your bearings."],
          ["You do", "Hop on a 30-minute Systems Overview call with Shabana. Join from a laptop using Chrome, with your welcome email open and ready to share your screen."],
          ["You get", "Access to the Captivate Training Calendar, so you can plug into weekly trainings whenever it works for you."]],
        notes: [] },
      { name: "Your TC", tag: "You do",
        intro: "Meet the transaction coordinator who’ll handle your paperwork, listings and offers.",
        items: [
          ["You do", "Meet your TC and attend one TC training."],
          ["You do", "Bringing active deals with you? Submit the Existing Transactions form and we’ll fast-track you."]],
        notes: [] },
      { name: "Growth", tag: "Get + do",
        intro: "Time to turn your setup into business.",
        items: [
          ["You get", "Introductions to Tony and Mo. (In EAP? You’ll meet Dan.)"],
          ["You do", "Map out your business plan and goals with Tony."],
          ["You do", "Send us your database, then complete your Follow Up Boss certification with Mo."],
          ["You get", "A big celebration when you sign your first listing and go pending on your first deal!"]],
        notes: [] }
    ]
  },

  /* [question, answer]. Use "\n" for a line break inside an answer.
     The first question is the one the "Already with eXp? Start here" links open. */
  FAQS: [
    ["I’m already with eXp. How do I join Captivate?", "On your own at eXp (no team): We’ll email eXp Team Services for you and CC you so you can confirm.\nOn another eXp team: You’ll need to email eXp Team Services yourself to let them know you’re leaving your current team (feel free to CC us!). This request has to come from you. All team releases must be signed before we can send your Captivate team agreement."],
    ["Which option do I pick on the eXp application?", "Select TEAM (not individual) and enter “Align - Brett Sikora.” Use your name exactly as it appears on your license, and send us your eXp personal code."],
    ["How do I check where my eXp transfer is at?", "Visit accp-onboardingstatus.expenterprise.com and enter your personal code. Status not moving? Text the Happiness Hotline and we’ll follow up with eXp for you."],
    ["I haven’t heard from eXp. Is something wrong?", "Probably not! eXp emails often come from automated addresses and go to spam. Check your spam folder and your texts, then text the Happiness Hotline if your status still isn’t moving."],
    ["I want to get paid to my LLC. What do I need?", "You’ll need one extra authorization form. Also make sure the last 4 digits of your tax ID match on your W-9 and direct deposit form."],
    ["What unlocks my Captivate logins?", "The Get to Know You form. We can’t build your logins until it’s in, so fill it out as early as you can."],
    ["When is the $149 eXp join fee charged?", "You’ll acknowledge the $149 fee during your application, but it’s only charged after your license is active with eXp. No active license transfer, no charge. Heads up: a handful of states add sales tax to eXp’s monthly fee (for example, Maryland agents pay about $89–90/month)."],
    ["How should I join the Systems Overview call?", "Join from a laptop using Chrome, with your welcome email open and ready to share your screen. It’s a 30-minute call with Shabana."],
    ["I’m bringing active deals with me. What should I do?", "Submit the Existing Transactions form and we’ll fast-track you."]
  ],

  /* initials: shown when there's no photo · photo: image URL ("" = show initials)
     zoom: how far to zoom into the photo · email / phone: leave "" to hide that line */
  TEAM: [
    { initials: "SK", name: "Shabana Karim", role: "Agent Success Concierge",
      about: "Says hello in Captivate stage 1 and runs your Systems Overview call.",
      photo: "https://assets.cdn.filesafe.space/EWwne2aGHqzJnAjjdKqq/media/6ac9472876afdd045b85fabd.png", zoom: 1.45,
      email: "skarim@alignteam.com", phone: "(630) 394-6270" },
    { initials: "MG", name: "Monica Gump", role: "Transaction coordinator",
      about: "Handles your paperwork, listings and offers. Captivate stage 3.",
      photo: "assets/monica-gump.jpg", zoom: 1.04, email: "", phone: "" },
    { initials: "TA", name: "Tony Angelos", role: "Social media guru",
      about: "Our social media guru. Learn about team downline opportunities with Tony.",
      photo: "assets/tony-angelos.jpg", zoom: 1.04, email: "", phone: "" },
    { initials: "MD", name: "Mo Duffield", role: "COO of Captivate",
      about: "Maps out your business plan & goals, runs our operations, and coaches you along the way.",
      photo: "assets/mo-duffield.jpg", zoom: 1.04, email: "", phone: "" },
    { initials: "DS", name: "Dan Spitz", role: "Founder & leader",
      about: "Helping you scale your business and find leverage, coaching you every step of the way.",
      photo: "assets/dan-spitz.jpg", zoom: 1.04, email: "", phone: "" }
  ]
};
