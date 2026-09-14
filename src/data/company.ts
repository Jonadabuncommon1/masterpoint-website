export const company = {
  legalName: "Masterpoint Resources Limited",
  tradingName: "Masterpoint",
  slogan: "Meeting the test of eternal beauty.",
  founded: 2014,
  yearsExperience: 12,
  email: "masterpointresourcsltd@gmail.com",
  phones: [
    { display: "0803 377 8408", tel: "+2348033778408", whatsapp: "2348033778408" },
    { display: "0808 822 9011", tel: "+2348088229011", whatsapp: "2348088229011" },
    { display: "0806 958 9816", tel: "+2348069589816", whatsapp: "2348069589816" },
  ],
  address: {
    line1: "27 Timber Shade, Urban Girls Road",
    line2: "Adjacent to Ogbons Aluminium & Peace Line",
    city: "Nsukka",
    state: "Enugu State",
    country: "Nigeria",
  },
  workingHours: "Monday – Saturday, 8:00am – 6:00pm",
  serviceArea: "Nationwide construction work and materials delivery across Nigeria",
  statesServed: [
    "Enugu",
    "Lagos",
    "Abuja (FCT)",
    "Benue",
    "Kogi",
    "Imo",
    "Ogun",
    "Anambra",
    "Delta (Asaba)",
    "Ebonyi",
    "Rivers",
  ],
  stats: [
    { value: 12, suffix: "+", label: "Years of combined experience" },
    { value: 11, suffix: "+", label: "States delivered across" },
    { value: 30, suffix: "+", label: "Projects completed nationwide" },
    { value: 100, suffix: "%", label: "Certified site supervision" },
  ],
  warranty: {
    minYears: 2,
    maxYears: 5,
    text: "2 to 5 years structural guarantee, depending on the scope and condition of the works.",
  },
  payment: {
    mobilisationDeposit: "30% to 50% mobilisation deposit, tied to the scope of the contract",
    materialsPolicy:
      "Full payment is required before dispatch for most orders; part-payment arrangements are available on agreed terms.",
    returnsPolicy:
      "Any damaged materials must be reported within 24 hours of delivery for replacement.",
    siteResponsibility:
      "Once materials are signed for and offloaded on site, responsibility passes to the client and their appointed receiver.",
  },
  ctas: {
    primary: "Order Materials Online",
    secondary: "Chat on WhatsApp",
    tertiary: "Call Us Now",
  },
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
} as const;

export const whatsappNumber = company.phones[0].whatsapp;

export function buildWhatsAppLink(message: string, number: string = whatsappNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
