export type ColorTheme = "evergreen" | "midnight" | "ocean" | "ember" | "slate" | "royal" | "sand" | "forest" | "memorial";
export type CtaStyle = "call" | "quote" | "consultation";
export type BusinessMode = "emergency" | "standard";
export type AnimationSetting = "none" | "minimal" | "premium";
export type Industry =
  | "plumbing" | "roofing" | "hvac" | "electrical" | "pest-control" | "water-damage" | "flood-damage" | "mold-remediation" | "landscaping" | "tree-service" | "cleaning-services" | "handyman" | "garage-door" | "garage-door-repair" | "flooring" | "painting" | "pool-services" | "junk-removal" | "concrete" | "locksmith" | "solar-installation"
  | "final-expense" | "funeral-planning" | "life-insurance" | "medicare" | "health-insurance" | "auto-insurance" | "home-insurance"
  | "personal-injury" | "immigration" | "family-law" | "criminal-defense"
  | "dental" | "chiropractic" | "physical-therapy" | "home-care" | "hospice-care"
  | "accounting" | "bookkeeping" | "seo-agency" | "digital-marketing" | "web-design";

export type GeneratorForm = {
  industry: Industry;
  ctaStyle: CtaStyle;
  businessMode: BusinessMode;
  animation: AnimationSetting;
  businessName: string;
  service: string;
  city: string;
  state: string;
  phone: string;
  ctaText: string;
  theme: ColorTheme;
  primaryColor: string;
};

export type GeneratedPage = {
  slug: string;
  h1: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  services: string[];
  whyChooseUs: string[];
  process: Array<{ title: string; description: string }>;
  trustBadges: string[];
  serviceAreas: string[];
  stats: Array<{ value: string; label: string }>;
  comparison?: { before: string; after: string };
  icon: string;
  typography: { heading: string; body: string };
  palette: { hero: string; surface: string; accent: string; text: string };
  testimonials: Array<{ quote: string; name: string; detail: string }>;
  faqs: Array<{ question: string; answer: string }>;
  ctaText: string;
  footerText: string;
  seoTitle: string;
  metaDescription: string;
  canonicalSlug: string;
  schema: Record<string, unknown>;
  html: string;
};

export type SavedProject = GeneratorForm & GeneratedPage & { id: string; createdAt: string; status: "Draft" | "Published" };

export const industryOptions: Array<{ value: Industry; label: string; group: string }> = [
  { value: "plumbing", label: "Plumbing", group: "Home Services" }, { value: "roofing", label: "Roofing", group: "Home Services" }, { value: "hvac", label: "HVAC", group: "Home Services" }, { value: "electrical", label: "Electrical", group: "Home Services" }, { value: "pest-control", label: "Pest Control", group: "Home Services" }, { value: "water-damage", label: "Water Damage Restoration", group: "Home Services" }, { value: "flood-damage", label: "Flood Damage", group: "Home Services" }, { value: "mold-remediation", label: "Mold Remediation", group: "Home Services" }, { value: "landscaping", label: "Landscaping", group: "Home Services" }, { value: "tree-service", label: "Tree Service", group: "Home Services" }, { value: "cleaning-services", label: "Cleaning Services", group: "Home Services" }, { value: "handyman", label: "Handyman", group: "Home Services" }, { value: "garage-door", label: "Garage Door", group: "Home Services" }, { value: "garage-door-repair", label: "Garage Door Repair", group: "Home Services" }, { value: "flooring", label: "Flooring", group: "Home Services" }, { value: "painting", label: "Painting", group: "Home Services" }, { value: "pool-services", label: "Pool Services", group: "Home Services" }, { value: "junk-removal", label: "Junk Removal", group: "Home Services" }, { value: "concrete", label: "Concrete", group: "Home Services" }, { value: "locksmith", label: "Locksmith", group: "Home Services" }, { value: "solar-installation", label: "Solar Installation", group: "Home Services" },
  { value: "final-expense", label: "Final Expense Insurance", group: "Insurance & Finance" }, { value: "funeral-planning", label: "Funeral Planning", group: "Insurance & Finance" }, { value: "life-insurance", label: "Life Insurance", group: "Insurance & Finance" }, { value: "medicare", label: "Medicare", group: "Insurance & Finance" }, { value: "health-insurance", label: "Health Insurance", group: "Insurance & Finance" }, { value: "auto-insurance", label: "Auto Insurance", group: "Insurance & Finance" }, { value: "home-insurance", label: "Home Insurance", group: "Insurance & Finance" },
  { value: "personal-injury", label: "Personal Injury", group: "Legal" }, { value: "immigration", label: "Immigration", group: "Legal" }, { value: "family-law", label: "Family Law", group: "Legal" }, { value: "criminal-defense", label: "Criminal Defense", group: "Legal" },
  { value: "dental", label: "Dental", group: "Medical & Wellness" }, { value: "chiropractic", label: "Chiropractic", group: "Medical & Wellness" }, { value: "physical-therapy", label: "Physical Therapy", group: "Medical & Wellness" }, { value: "home-care", label: "Home Care", group: "Medical & Wellness" }, { value: "hospice-care", label: "Hospice Care", group: "Medical & Wellness" },
  { value: "accounting", label: "Accounting", group: "Business Services" }, { value: "bookkeeping", label: "Bookkeeping", group: "Business Services" }, { value: "seo-agency", label: "SEO Agency", group: "Business Services" }, { value: "digital-marketing", label: "Digital Marketing", group: "Business Services" }, { value: "web-design", label: "Web Design", group: "Business Services" },
];
export const serviceOptions = ["Roof repair", "HVAC repair", "Emergency plumbing", "Dental care", "House cleaning", "Landscaping", "Pest control", "Electrical services"];
export const industryServices: Record<Industry, string[]> = Object.fromEntries(industryOptions.map(({ value, label }) => [value, [label, `${label} consultation`, `Emergency ${label.toLowerCase()}`]])) as Record<Industry, string[]>;
export const themeOptions: Array<{ value: ColorTheme; name: string; surface: string; ink: string; accent: string }> = [
  { value: "evergreen", name: "Evergreen", surface: "bg-[#17342d]", ink: "text-[#f9d67a]", accent: "#f26b4f" },
  { value: "midnight", name: "Midnight", surface: "bg-[#17191d]", ink: "text-[#e7c66d]", accent: "#d6a94f" },
  { value: "ocean", name: "Ocean", surface: "bg-[#164c68]", ink: "text-[#d4f0ef]", accent: "#e56f55" },
  { value: "ember", name: "Ember", surface: "bg-[#783820]", ink: "text-[#ffe0a3]", accent: "#e4673e" },
  { value: "slate", name: "Slate", surface: "bg-[#3d4650]", ink: "text-white", accent: "#5f8da7" },
  { value: "royal", name: "Royal", surface: "bg-[#172c57]", ink: "text-[#f3d18a]", accent: "#dca84e" },
  { value: "sand", name: "Sand", surface: "bg-[#d8c3a2]", ink: "text-[#33291f]", accent: "#b66e43" },
  { value: "forest", name: "Forest", surface: "bg-[#1e4334]", ink: "text-[#d2e8c5]", accent: "#d39945" },
  { value: "memorial", name: "Memorial", surface: "bg-[#292b30]", ink: "text-[#e8d4b1]", accent: "#b69468" },
];

export const defaultGeneratorForm: GeneratorForm = {
  industry: "roofing",
  ctaStyle: "call",
  businessMode: "standard",
  animation: "premium",
  businessName: "Evergreen Roofing",
  service: "Roof repair",
  city: "Austin",
  state: "TX",
  phone: "(512) 555-0188",
  ctaText: "Get your free inspection",
  theme: "evergreen",
  primaryColor: "#f26b4f",
};

type IndustryPreset = {
  palette: { hero: string; surface: string; accent: string; text: string };
  typography: { heading: string; body: string };
  icon: string;
  heroLayout: "split" | "centered" | "editorial";
  trustBadges: string[];
  process: Array<{ title: string; description: string }>;
  serviceAreas: string[];
  promise: string;
  benefits: string[];
  why: string[];
  faq: Array<{ question: string; answer: string }>;
};

const presetSeed: Record<Industry, { palette: IndustryPreset["palette"]; typography: IndustryPreset["typography"]; icon: string; promise: string }> = {
  plumbing: { palette: { hero: "#123b45", surface: "#e4f3f1", accent: "#e56b4b", text: "#fff" }, typography: { heading: "Manrope", body: "DM Sans" }, icon: "Droplets", promise: "Fast, careful plumbing help when a small leak cannot wait." },
  roofing: { palette: { hero: "#17342d", surface: "#eaf4ed", accent: "#f26b4f", text: "#fff" }, typography: { heading: "Fraunces", body: "DM Sans" }, icon: "Home", promise: "Dependable roof work without the runaround." },
  hvac: { palette: { hero: "#163a63", surface: "#e7f0fb", accent: "#ee8b3a", text: "#fff" }, typography: { heading: "Space Grotesk", body: "Inter" }, icon: "Wind", promise: "Keep your home comfortable in every season." },
  electrical: { palette: { hero: "#25233f", surface: "#efedff", accent: "#f1b53b", text: "#fff" }, typography: { heading: "Sora", body: "Inter" }, icon: "Zap", promise: "Safe, precise electrical work from a team that shows up." },
  "pest-control": { palette: { hero: "#30452b", surface: "#edf5df", accent: "#d8783d", text: "#fff" }, typography: { heading: "DM Sans", body: "DM Sans" }, icon: "Bug", promise: "Take back your home from termites, rodents, and mosquitoes." },
  "water-damage": { palette: { hero: "#174f68", surface: "#e0f3f7", accent: "#ed7555", text: "#fff" }, typography: { heading: "Plus Jakarta Sans", body: "Inter" }, icon: "Waves", promise: "A calm, rapid response when water damage disrupts your day." },
  "flood-damage": { palette: { hero: "#123d5a", surface: "#e1f2f7", accent: "#ee7657", text: "#fff" }, typography: { heading: "Manrope", body: "Inter" }, icon: "Waves", promise: "Restore your home after flooding with one responsive local team." },
  "mold-remediation": { palette: { hero: "#30473f", surface: "#e5f0e6", accent: "#d27b55", text: "#fff" }, typography: { heading: "DM Sans", body: "Inter" }, icon: "ShieldCheck", promise: "Breathe easier with thorough mold inspection and remediation." },
  landscaping: { palette: { hero: "#27513b", surface: "#e6f1df", accent: "#d9a33e", text: "#fff" }, typography: { heading: "Outfit", body: "DM Sans" }, icon: "Leaf", promise: "Outdoor spaces designed to feel like they belong there." },
  "tree-service": { palette: { hero: "#2e3e2a", surface: "#edf3df", accent: "#c98246", text: "#fff" }, typography: { heading: "Libre Baskerville", body: "DM Sans" }, icon: "TreePine", promise: "Thoughtful tree care that keeps your property healthy and safe." },
  "cleaning-services": { palette: { hero: "#324c5d", surface: "#eaf4f5", accent: "#e37a69", text: "#fff" }, typography: { heading: "Nunito Sans", body: "DM Sans" }, icon: "Sparkles", promise: "A cleaner space and one less thing on your list." },
  handyman: { palette: { hero: "#4a3028", surface: "#fbefe0", accent: "#d57543", text: "#fff" }, typography: { heading: "Bitter", body: "DM Sans" }, icon: "Wrench", promise: "The capable extra pair of hands your home has been waiting for." },
  "garage-door": { palette: { hero: "#253a52", surface: "#e5eef8", accent: "#e07a56", text: "#fff" }, typography: { heading: "Barlow Condensed", body: "Inter" }, icon: "Warehouse", promise: "Reliable garage door repair, installation, and peace of mind." },
  "garage-door-repair": { palette: { hero: "#253a52", surface: "#e5eef8", accent: "#e07a56", text: "#fff" }, typography: { heading: "Barlow Condensed", body: "Inter" }, icon: "Warehouse", promise: "Reliable garage door repair, installation, and peace of mind." },
  flooring: { palette: { hero: "#4a3d31", surface: "#f5eddf", accent: "#b8754c", text: "#fff" }, typography: { heading: "Cormorant Garamond", body: "DM Sans" }, icon: "Layers3", promise: "Beautiful floors, installed with the care they deserve." },
  painting: { palette: { hero: "#514060", surface: "#f3eafb", accent: "#ed7658", text: "#fff" }, typography: { heading: "Archivo", body: "Inter" }, icon: "Paintbrush", promise: "A fresh coat with a sharper eye for every detail." },
  "pool-services": { palette: { hero: "#07536b", surface: "#ddf4f4", accent: "#ef9a44", text: "#fff" }, typography: { heading: "Quicksand", body: "DM Sans" }, icon: "Waves", promise: "Make every swim feel like a getaway." },
  "junk-removal": { palette: { hero: "#4b3c2f", surface: "#f7eee1", accent: "#d77b45", text: "#fff" }, typography: { heading: "Outfit", body: "DM Sans" }, icon: "Truck", promise: "Clear the clutter quickly and leave your space feeling lighter." },
  concrete: { palette: { hero: "#46505a", surface: "#edf0f2", accent: "#d58355", text: "#fff" }, typography: { heading: "Barlow", body: "Inter" }, icon: "Construction", promise: "Concrete work built level, durable, and ready for real life." },
  locksmith: { palette: { hero: "#253b4d", surface: "#e7eff5", accent: "#e2a03e", text: "#fff" }, typography: { heading: "Space Grotesk", body: "Inter" }, icon: "KeyRound", promise: "Get back in safely with a locksmith who responds when it matters." },
  "solar-installation": { palette: { hero: "#3b4b35", surface: "#eef3d9", accent: "#e2a73d", text: "#fff" }, typography: { heading: "Sora", body: "DM Sans" }, icon: "SunMedium", promise: "Turn more sunlight into reliable energy for your home." },
  "final-expense": { palette: { hero: "#302c4b", surface: "#f0edfb", accent: "#c9944d", text: "#fff" }, typography: { heading: "Cormorant Garamond", body: "DM Sans" }, icon: "HeartHandshake", promise: "Affordable final expense plans explained with dignity and care." },
  "funeral-planning": { palette: { hero: "#292b30", surface: "#f0ece5", accent: "#b69468", text: "#fff" }, typography: { heading: "Newsreader", body: "DM Sans" }, icon: "Flower2", promise: "Thoughtful funeral planning that honors every life and family." },
  "life-insurance": { palette: { hero: "#1d3c4b", surface: "#e4f2f2", accent: "#d6a54d", text: "#fff" }, typography: { heading: "Playfair Display", body: "Inter" }, icon: "ShieldCheck", promise: "Protect the people and plans that matter most." },
  medicare: { palette: { hero: "#31527a", surface: "#e7f0fb", accent: "#e8875e", text: "#fff" }, typography: { heading: "Lora", body: "DM Sans" }, icon: "BadgeCheck", promise: "Clear Medicare guidance from a licensed local agent." },
  "health-insurance": { palette: { hero: "#184d56", surface: "#e2f4f2", accent: "#e87961", text: "#fff" }, typography: { heading: "Newsreader", body: "Inter" }, icon: "HeartPulse", promise: "Health coverage options that make the next step easier." },
  "auto-insurance": { palette: { hero: "#27384a", surface: "#e9eff5", accent: "#e19a3d", text: "#fff" }, typography: { heading: "Barlow", body: "Inter" }, icon: "CarFront", promise: "Confident coverage for the miles ahead." },
  "home-insurance": { palette: { hero: "#3b3b55", surface: "#eeedf8", accent: "#d38d50", text: "#fff" }, typography: { heading: "Merriweather", body: "DM Sans" }, icon: "House" , promise: "Protect the place where life happens." },
  "personal-injury": { palette: { hero: "#2e293d", surface: "#f3edf6", accent: "#d77952", text: "#fff" }, typography: { heading: "Libre Baskerville", body: "Inter" }, icon: "Scale", promise: "A free consultation and a legal team ready to fight for your recovery." },
  immigration: { palette: { hero: "#174b54", surface: "#e3f3ef", accent: "#e4a04f", text: "#fff" }, typography: { heading: "DM Serif Display", body: "DM Sans" }, icon: "Globe2", promise: "Clear, compassionate guidance for your next chapter." },
  "family-law": { palette: { hero: "#4b3948", surface: "#f6eaf0", accent: "#d98470", text: "#fff" }, typography: { heading: "Lora", body: "DM Sans" }, icon: "UsersRound", promise: "Steady family-law counsel for decisions that shape your future." },
  "criminal-defense": { palette: { hero: "#222b38", surface: "#e8edf2", accent: "#dc9b45", text: "#fff" }, typography: { heading: "Oswald", body: "Inter" }, icon: "Gavel", promise: "A focused defense when the stakes are high." },
  dental: { palette: { hero: "#1d5261", surface: "#e2f5f3", accent: "#ef8767", text: "#fff" }, typography: { heading: "DM Sans", body: "DM Sans" }, icon: "SmilePlus", promise: "A healthier smile starts with a better visit." },
  chiropractic: { palette: { hero: "#2e584f", surface: "#e6f3e9", accent: "#d49943", text: "#fff" }, typography: { heading: "Manrope", body: "Inter" }, icon: "Activity", promise: "Move with more ease and get back to what you love." },
  "physical-therapy": { palette: { hero: "#224e62", surface: "#e3f2f5", accent: "#e57b5e", text: "#fff" }, typography: { heading: "Plus Jakarta Sans", body: "Inter" }, icon: "Accessibility", promise: "A clear path from pain to confident movement." },
  "home-care": { palette: { hero: "#4c3f56", surface: "#f1eaf5", accent: "#d89c54", text: "#fff" }, typography: { heading: "Lora", body: "DM Sans" }, icon: "HandHeart", promise: "Reliable, human-centered support at home." },
  "hospice-care": { palette: { hero: "#394c4b", surface: "#edf3e9", accent: "#c99663", text: "#fff" }, typography: { heading: "Newsreader", body: "DM Sans" }, icon: "Heart", promise: "Compassionate care, comfort, and presence for every family." },
  accounting: { palette: { hero: "#203d49", surface: "#e5f0f0", accent: "#d59a45", text: "#fff" }, typography: { heading: "DM Sans", body: "Inter" }, icon: "Calculator", promise: "Clear numbers and confident decisions for your business." },
  bookkeeping: { palette: { hero: "#3c4f42", surface: "#e9f2e8", accent: "#df9356", text: "#fff" }, typography: { heading: "Outfit", body: "DM Sans" }, icon: "NotebookTabs", promise: "Your books, finally calm, current, and useful." },
  "seo-agency": { palette: { hero: "#242b4d", surface: "#ebedfb", accent: "#e47663", text: "#fff" }, typography: { heading: "Space Grotesk", body: "Inter" }, icon: "SearchCheck", promise: "Get found by the people already looking for you." },
  "digital-marketing": { palette: { hero: "#41284d", surface: "#f3e9f7", accent: "#f09950", text: "#fff" }, typography: { heading: "Syne", body: "DM Sans" }, icon: "Megaphone", promise: "Marketing that turns attention into measurable momentum." },
  "web-design": { palette: { hero: "#203d47", surface: "#e5f2f2", accent: "#e47b61", text: "#fff" }, typography: { heading: "Sora", body: "Inter" }, icon: "PanelsTopLeft", promise: "A sharper digital home for the work you do best." },
};

const presetDefaults = (industry: Industry, seed: typeof presetSeed[Industry]): IndustryPreset => {
  const group = industryOptions.find((item) => item.value === industry)?.group;
  const heroLayout = group === "Home Services" ? "split" : group === "Legal" || group === "Insurance & Finance" ? "editorial" : "centered";
  const industrySpecific: Partial<Record<Industry, Partial<Pick<IndustryPreset, "benefits" | "why" | "faq" | "trustBadges">>>> = {
    "final-expense": { benefits: ["Affordable plans for final expenses", "Licensed agents who explain every option", "Coverage designed around your beneficiaries"], trustBadges: ["Licensed agents", "Affordable plans", "No pressure guidance"] },
    plumbing: { benefits: ["Emergency leak response", "Same-day local service", "Upfront options before work begins"] },
    "pest-control": { benefits: ["Termite protection", "Rodent removal", "Mosquito control"] },
    "personal-injury": { benefits: ["Free case consultation", "No win, no fee guidance", "Focused support for your recovery"], trustBadges: ["Free consultation", "No win, no fee", "Trial-ready advocacy"] },
  };
  const specific = industrySpecific[industry] ?? {};
  return { ...seed, heroLayout, trustBadges: specific.trustBadges ?? ["Licensed & insured", "Local professionals", "Clear pricing"], process: [{ title: "Tell us what you need", description: "Share a few details and the outcome you want." }, { title: "Get a clear plan", description: "We explain the next step and what to expect." }, { title: "Feel the difference", description: "Enjoy thoughtful service from a team that follows through." }], serviceAreas: ["Downtown", "Northside", "West End", "Nearby communities"], benefits: specific.benefits ?? [`Trusted ${industryOptions.find((item) => item.value === industry)?.label.toLowerCase() ?? "local service"}`, "Fast, responsive communication", "A better experience from start to finish"], why: specific.why ?? ["Local experts who listen before they recommend", "Clear communication from first call to final detail", "A thoughtful experience built around your schedule"], faq: specific.faq ?? [{ question: "How quickly can I get started?", answer: "Call today and the local team will help you choose the right next step." }, { question: "What makes this team different?", answer: "You get clear communication, thoughtful service, and a plan built around your needs." }] };
};
export const industryPresets: Record<Industry, IndustryPreset> = Object.fromEntries(Object.entries(presetSeed).map(([industry, seed]) => [industry, presetDefaults(industry as Industry, seed)])) as Record<Industry, IndustryPreset>;

const serviceCopy: Record<string, { benefits: string[]; promise: string; why: string[]; faq: Array<{ question: string; answer: string }> }> = {
  "Roof repair": { benefits: ["Same-week appointments", "Licensed & insured crews", "25-year workmanship warranty"], promise: "Dependable roof repair without the runaround.", why: ["Clear recommendations before any work begins", "Materials and workmanship built for local weather", "A tidy crew that respects your home"], faq: [{ question: "How quickly can you inspect my roof?", answer: "We reserve same-week inspection appointments across the local service area." }, { question: "Do you offer a workmanship warranty?", answer: "Yes. Every repair is backed by a clear 25-year workmanship warranty." }] },
  "HVAC repair": { benefits: ["Fast emergency response", "Upfront, honest pricing", "Comfort restored today"], promise: "Keep your home comfortable in every season.", why: ["Technicians who explain the fix in plain language", "Upfront options before we start the work", "Careful service for every major HVAC system"], faq: [{ question: "Do you offer emergency HVAC service?", answer: "Yes. Call the team for urgent heating and cooling issues in the local area." }, { question: "Will I get a quote before work starts?", answer: "You will receive clear options and pricing before any repair begins." }] },
  "Emergency plumbing": { benefits: ["24/7 emergency support", "Clear estimates before work", "Clean, careful technicians"], promise: "A calm, capable plumber when you need one.", why: ["A real person answers when the problem cannot wait", "We protect your floors and clean up after the repair", "Straightforward pricing with no surprise add-ons"], faq: [{ question: "Can you help with an after-hours leak?", answer: "Yes. Call now and we will help you understand the safest next step." }, { question: "Are your plumbers licensed?", answer: "Our local technicians are trained, licensed, and insured for residential work." }] },
  "Dental care": { benefits: ["Gentle, modern care", "Flexible appointment times", "A team that listens"], promise: "A healthier smile starts with a better visit.", why: ["A comfortable visit built around your questions", "Modern tools that make care more predictable", "Flexible scheduling for busy local families"], faq: [{ question: "Are new patients welcome?", answer: "Yes. We welcome new patients and make the first visit easy to schedule." }, { question: "Can I request an appointment online?", answer: "Call the practice and our team will find the right appointment time for you." }] },
};

function getCopy(service: string) {
  return serviceCopy[service] ?? { benefits: ["Fast local appointments", "Friendly, trained professionals", "Clear pricing with no surprises"], promise: `A better ${service.toLowerCase()} experience, close to home.`, why: ["Local experts who listen before they recommend", "Clear communication from first call to final detail", "A thoughtful experience built around your schedule"], faq: [{ question: `Why choose a local ${service.toLowerCase()} team?`, answer: `You get responsive service from people who know the ${service.toLowerCase()} needs of the local community.` }, { question: "How do I get started?", answer: "Call today and the team will help you choose the right next step." }] };
}

export function slugify(value: string) { return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "landingforge-page"; }
export function normalizeColor(value: string) { return /^#[0-9a-f]{6}$/i.test(value) ? value : defaultGeneratorForm.primaryColor; }
const themePalettes: Record<ColorTheme, { hero: string; surface: string; accent: string; text: string }> = {
  evergreen: { hero: "#17342d", surface: "#eaf4ed", accent: "#f26b4f", text: "#fff" },
  midnight: { hero: "#17191d", surface: "#eee9d8", accent: "#d6a94f", text: "#fff" },
  ocean: { hero: "#164c68", surface: "#e1f2f4", accent: "#e56f55", text: "#fff" },
  ember: { hero: "#783820", surface: "#fff0dc", accent: "#e4673e", text: "#fff" },
  slate: { hero: "#3d4650", surface: "#edf0f2", accent: "#5f8da7", text: "#fff" },
  royal: { hero: "#172c57", surface: "#e8edfb", accent: "#dca84e", text: "#fff" },
  sand: { hero: "#d8c3a2", surface: "#fbf5e9", accent: "#b66e43", text: "#33291f" },
  forest: { hero: "#1e4334", surface: "#e5f0df", accent: "#d39945", text: "#fff" },
  memorial: { hero: "#292b30", surface: "#f0ece5", accent: "#b69468", text: "#fff" },
};

export function createGeneratedPage(form: GeneratorForm): GeneratedPage {
  const industry = form.industry ?? "roofing";
  const business = form.businessName.trim() || "Your local team";
  const service = form.service.trim() || "local service";
  const city = form.city.trim() || "your area";
  const state = form.state.trim().toUpperCase() || "US";
  const location = `${city}, ${state}`;
  const preset = industryPresets[industry] ?? industryPresets.roofing;
  const copy = getCopy(service);
  const content = { ...preset, benefits: preset.benefits.length ? preset.benefits : copy.benefits, promise: form.businessMode === "emergency" ? `Fast response when you need ${service.toLowerCase()} help now.` : preset.promise || copy.promise, why: preset.why.length ? preset.why : copy.why, faq: preset.faq.length ? preset.faq : copy.faq };
  const ctaText = form.ctaText.trim() || (form.ctaStyle === "quote" ? "Request a free quote" : form.ctaStyle === "consultation" ? "Book a consultation" : form.businessMode === "emergency" ? "Call for immediate help" : "Get your free estimate");
  const comparisonIndustries: Industry[] = ["roofing", "water-damage", "flood-damage", "mold-remediation", "concrete"];
  const page: Omit<GeneratedPage, "html"> = {
    slug: slugify(`${business}-${service}-${city}`),
    h1: `The ${service.toLowerCase()} team ${city} trusts.`,
    heroEyebrow: `${business} · ${location}`,
    heroTitle: `The ${service.toLowerCase()} team ${city} trusts.`,
    heroDescription: `${content.promise} Get dependable help from ${business}, serving ${location} with care and clear communication.`,
    services: content.benefits,
    whyChooseUs: content.why,
    process: content.process,
    trustBadges: content.trustBadges,
    serviceAreas: content.serviceAreas.map((area) => `${area}, ${state}`),
    stats: [
      { value: "250+", label: "Projects completed" },
      { value: "15", label: "Years serving locally" },
      { value: "4.9", label: "Average rating" },
      { value: "5,000+", label: "Customers helped" },
    ],
    comparison: comparisonIndustries.includes(industry) ? { before: "Before: stress, uncertainty, and a problem getting worse.", after: "After: a clear plan, careful work, and confidence restored." } : undefined,
    icon: content.icon,
    typography: content.typography,
    palette: themePalettes[form.theme] ?? content.palette,
    testimonials: [
      { quote: `They made our ${service.toLowerCase()} feel easy from the first call.`, name: "Morgan K.", detail: `${city}, ${state}` },
      { quote: "On time, transparent, and genuinely thoughtful about the work.", name: "Taylor R.", detail: `${city}, ${state}` },
      { quote: `Exactly the kind of local ${service.toLowerCase()} team we were hoping to find.`, name: "Alex P.", detail: `${city}, ${state}` },
      { quote: "The whole experience felt organized, honest, and refreshingly simple.", name: "Jamie L.", detail: `${city}, ${state}` },
      { quote: "They listened first, explained every step, and delivered exactly as promised.", name: "Casey M.", detail: `${city}, ${state}` },
      { quote: `I would recommend this team to anyone in ${city} who wants service done right.`, name: "Riley S.", detail: `${city}, ${state}` },
    ],
    faqs: content.faq,
    ctaText,
    footerText: `${business} proudly serves ${city}, ${state} and nearby communities.`,
    seoTitle: `${service} in ${city}, ${state} | ${business}`,
    metaDescription: `${business} provides trusted ${service.toLowerCase()} in ${city}, ${state}. Call today for fast service, clear pricing, and a free estimate.`,
    canonicalSlug: `/${slugify(`${business}-${service}-${city}`)}`,
    schema: {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", industry === "personal-injury" || industry === "family-law" || industry === "criminal-defense" || industry === "immigration" ? "LegalService" : industry.includes("insurance") || industry === "medicare" || industry === "final-expense" ? "FinancialService" : "ProfessionalService"],
      name: business,
      telephone: form.phone.trim(),
      description: `${service} in ${location}`,
      url: `https://example.com/${slugify(`${business}-${service}-${city}`)}`,
      areaServed: { "@type": "City", name: city },
      address: { "@type": "PostalAddress", addressLocality: city, addressRegion: state, addressCountry: "US" },
      serviceType: service,
    },
  };
  const generated = { ...page, html: "" };
  return { ...generated, html: renderExportHtml(form, generated) };
}

export function createSavedProject(form: GeneratorForm): SavedProject {
  return { ...form, ...createGeneratedPage(form), id: `project-${Date.now()}`, createdAt: new Date().toISOString(), status: "Draft" };
}

function escapeHtml(value: string) { return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character); }
function escapeJson(value: Record<string, unknown>) { return JSON.stringify(value, null, 2).replace(/<\/script/gi, "<\\/script"); }
export function renderStyles(form: GeneratorForm) {
  const preset = industryPresets[form.industry ?? "roofing"];
  const palette = themePalettes[form.theme] ?? preset.palette;
  return `:root{--ink:#18211e;--muted:#68736e;--line:#dfe6df;--paper:#f7f8f5;--card:#ffffff;--hero:${palette.hero};--surface:${palette.surface};--primary:${normalizeColor(form.primaryColor || palette.accent)};--hero-text:${palette.text};--heading:${preset.typography.heading};--body:${preset.typography.body}}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.6 var(--body),Arial,sans-serif}main{max-width:1120px;margin:auto;padding:24px}.site-header{display:flex;justify-content:space-between;align-items:center;padding:16px 0}.brand{font-size:20px;font-weight:800}.brand-mark{display:inline-grid;place-items:center;width:32px;height:32px;margin-right:9px;border-radius:9px;background:var(--primary);color:#fff}.hero{margin-top:24px;padding:clamp(40px,8vw,88px) clamp(24px,6vw,72px);border-radius:28px;background:var(--hero);color:var(--hero-text)}.hero.split{display:grid;grid-template-columns:1fr 1fr;gap:32px}.eyebrow{font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;opacity:.72}.hero h1,.section h2,.cta-band h2{font-family:var(--heading),Georgia,serif}.hero h1{max-width:760px;margin:28px 0 0;font-size:clamp(44px,8vw,88px);line-height:.96;letter-spacing:-.055em}.hero p{max-width:610px;font-size:18px;line-height:1.65;opacity:.78}.button{display:inline-block;padding:14px 20px;border-radius:10px;background:var(--primary);color:#fff;text-decoration:none;font-weight:800}.section{padding:72px 0}.section h2{max-width:720px;margin:0;font-size:clamp(30px,5vw,52px);line-height:1.05;letter-spacing:-.04em}.section-intro{max-width:620px;color:var(--muted)}.service-grid,.testimonial-grid,.faq-grid,.process-grid,.badge-grid,.area-grid{display:grid;gap:16px;margin-top:32px}.service-grid{grid-template-columns:repeat(auto-fit,minmax(210px,1fr))}.process-grid{grid-template-columns:repeat(auto-fit,minmax(190px,1fr))}.service-card,.quote,.faq-item,.process-card,.trust-badge{padding:22px;border:1px solid var(--line);border-radius:18px;background:var(--card)}.service-card strong,.process-card strong{display:block;margin-bottom:8px}.why-list{display:grid;gap:12px;margin:32px 0 0;padding:0;list-style:none}.why-list li{padding:17px 20px;border-left:3px solid var(--primary);background:var(--card)}.testimonial-grid{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}.quote{margin:0}.quote p{margin:0 0 16px}.quote small{color:var(--muted)}.faq-grid{max-width:820px}.faq-item summary{cursor:pointer;font-weight:800}.faq-item p{color:var(--muted)}.badge-grid{grid-template-columns:repeat(auto-fit,minmax(150px,1fr))}.trust-badge{background:var(--surface);font-size:13px;font-weight:800}.area-grid{grid-template-columns:repeat(auto-fit,minmax(130px,1fr));list-style:none;padding:0}.area-grid li{padding:12px 14px;border-radius:10px;background:var(--surface);font-size:13px}.cta-band{padding:48px;border-radius:24px;background:var(--hero);color:var(--hero-text)}.cta-band h2{margin-top:0}.site-footer{padding:32px 0 12px;border-top:1px solid var(--line);color:var(--muted);font-size:14px}.sticky-call{display:none}@media(max-width:640px){main{padding:16px}.hero{border-radius:20px}.hero.split{display:block}.section{padding:52px 0}.cta-band{padding:32px 24px}.sticky-call{display:block;position:fixed;bottom:16px;left:16px;right:16px;z-index:10;text-align:center;box-shadow:0 12px 30px #18211e33}}`;
}

export function renderMotionStyles(form: GeneratorForm) {
  const speed = form.businessMode === "emergency" ? "260ms" : "520ms";
  const calm = form.industry === "final-expense" || form.industry === "funeral-planning" || form.industry === "medicare" || form.industry === "life-insurance";
  if (form.animation === "none") return "*{animation:none!important;transition:none!important}.lf-reveal{opacity:1!important;transform:none!important}";
  return `.lf-reveal{opacity:0;transform:translate3d(0,18px,0);transition:opacity ${calm ? "620ms" : speed} ease,transform ${calm ? "620ms" : speed} cubic-bezier(.22,.8,.28,1);will-change:opacity,transform}.lf-reveal.is-visible{opacity:1;transform:translate3d(0,0,0)}.hero .eyebrow{transition-delay:40ms}.hero h1{transition-delay:100ms}.hero p{transition-delay:160ms}.hero .button{transition-delay:220ms}.service-card,.trust-badge,.process-card,.quote{transition:transform 220ms ease,box-shadow 220ms ease,border-color 220ms ease}.service-card:hover,.trust-badge:hover,.process-card:hover,.quote:hover{transform:translate3d(0,-4px) scale(1.02);box-shadow:0 14px 30px rgba(24,33,30,.12);border-color:var(--primary)}.stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-top:28px}.stat-card{padding:18px;border-radius:16px;background:var(--surface);text-align:center}.stat-value{display:block;color:var(--primary);font-size:clamp(26px,4vw,40px);font-weight:800;line-height:1}.stat-label{display:block;margin-top:8px;color:var(--muted);font-size:12px}.testimonial-grid{position:relative}.testimonial-grid .quote{display:none}.testimonial-grid .quote.is-active{display:block}.carousel-controls{display:flex;gap:8px;margin-top:16px}.carousel-controls button{cursor:pointer;border:1px solid var(--line);border-radius:999px;background:var(--card);padding:8px 12px;color:var(--ink)}.comparison{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:28px}.comparison>div{padding:20px;border-radius:16px;background:var(--surface)}.comparison strong{display:block;margin-bottom:6px}.sticky-call{transition:transform 260ms ease,opacity 260ms ease}.sticky-call.is-hidden{opacity:0;transform:translate3d(0,120%,0);pointer-events:none}@media(max-width:640px){.comparison{grid-template-columns:1fr}}@media(prefers-reduced-motion:reduce){.lf-reveal,.service-card,.trust-badge,.process-card,.quote,.sticky-call{transition:none!important;transform:none!important}.lf-reveal{opacity:1!important}}`;
}

export function renderExportHtml(form: GeneratorForm, page: GeneratedPage) {
  const business = escapeHtml(form.businessName.trim() || "Your local team");
  const phone = escapeHtml(form.phone.trim());
  const services = page.services.map((service) => `<article class="service-card"><strong>${escapeHtml(service)}</strong><span>Thoughtful local service, clear communication, and a better experience from start to finish.</span></article>`).join("");
  const why = page.whyChooseUs.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const badges = page.trustBadges.map((item) => `<span class="trust-badge">${escapeHtml(item)}</span>`).join("");
  const process = page.process.map((item, index) => `<article class="process-card"><strong>0${index + 1} · ${escapeHtml(item.title)}</strong><span>${escapeHtml(item.description)}</span></article>`).join("");
  const areas = page.serviceAreas.map((area) => `<li>${escapeHtml(area)}</li>`).join("");
  const stats = page.stats.map((item) => `<div class="stat-card"><strong class="stat-value" data-target="${escapeHtml(item.value)}">0</strong><span class="stat-label">${escapeHtml(item.label)}</span></div>`).join("");
  const comparison = page.comparison ? `<section class="section comparison lf-reveal" aria-label="Before and after"><div><strong>Before</strong><span>${escapeHtml(page.comparison.before.replace("Before: ", ""))}</span></div><div><strong>After</strong><span>${escapeHtml(page.comparison.after.replace("After: ", ""))}</span></div></section>` : "";
  const testimonials = page.testimonials.map((item) => { const initials = item.name.split(" ").map((part) => part[0]).join("").slice(0, 2); return `<blockquote class="quote"><div style="display:flex;align-items:center;gap:10px;margin-bottom:14px"><span style="display:grid;place-items:center;width:36px;height:36px;border-radius:50%;background:var(--surface);color:var(--primary);font-weight:800;font-size:12px">${escapeHtml(initials)}</span><span aria-label="5 out of 5 stars" style="color:var(--primary);letter-spacing:2px">★★★★★</span></div><p>“${escapeHtml(item.quote)}”</p><small><strong>${escapeHtml(item.name)}</strong> · ${escapeHtml(item.detail)}</small></blockquote>`; }).join("");
  const faqs = page.faqs.map((item) => `<details class="faq-item"><summary>${escapeHtml(item.question)}</summary><p>${escapeHtml(item.answer)}</p></details>`).join("");
  const statsScript = `<script>document.addEventListener('DOMContentLoaded',()=>{const host=document.querySelector('.hero');if(!host)return;const section=document.createElement('section');section.className='section lf-reveal';section.innerHTML='<p class="eyebrow">A track record you can trust</p><h2>Measured in work that lasts.</h2><div class="stats-grid">${stats}</div>';host.after(section);const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches||document.body.dataset.motion==='none';const values=section.querySelectorAll('[data-target]');if(reduced){values.forEach(el=>el.textContent=el.getAttribute('data-target')||'0')}else{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.2});observer.observe(section)}});</script>`;
  const interactionScript = `<script>document.addEventListener('DOMContentLoaded',()=>{const footer=document.querySelector('.site-footer');const comparison=${JSON.stringify(comparison)};if(footer&&comparison)footer.insertAdjacentHTML('beforebegin',comparison);document.querySelectorAll('details.faq-item').forEach(detail=>{const summary=detail.querySelector('summary');summary?.addEventListener('click',()=>{detail.classList.toggle('is-open');setTimeout(()=>detail.scrollIntoView({block:'nearest',behavior:'smooth'}),20)})})});</script>`;
  const motionScript = `<script>(()=>{const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches||document.body.dataset.motion==='none';const reveal=document.querySelectorAll('.hero .eyebrow,.hero h1,.hero p,.hero .button,.section,.service-card,.trust-badge,.process-card,.quote,.faq-item,.comparison');if(!reduced){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12});reveal.forEach((el,index)=>{el.classList.add('lf-reveal');el.style.transitionDelay=Math.min(index%6*60,300)+'ms';observer.observe(el)});document.querySelectorAll('[data-target]').forEach(el=>{const target=el.dataset.target||'';const match=target.match(/[\\d.]+/);if(!match)return;const end=Number(match[0]);const suffix=target.replace(match[0],'');const counter=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){let start=0;const begin=performance.now();const tick=now=>{const progress=Math.min((now-begin)/700,1);const eased=1-Math.pow(1-progress,3);el.textContent=Math.round(end*eased)+suffix;if(progress<1)requestAnimationFrame(tick)};requestAnimationFrame(tick);counter.disconnect()}}),{threshold:.6});counter.observe(el)});const quotes=[...document.querySelectorAll('.testimonial-grid .quote')];let current=0;const show=index=>quotes.forEach((quote,i)=>quote.classList.toggle('is-active',i===index));if(quotes.length){show(0);const grid=quotes[0].parentElement;const controls=document.createElement('div');controls.className='carousel-controls';controls.innerHTML='<button type="button" aria-label="Previous testimonial">←</button><button type="button" aria-label="Next testimonial">→</button>';grid?.after(controls);let timer=window.setInterval(()=>{current=(current+1)%quotes.length;show(current)},5000);controls.addEventListener('click',event=>{const target=event.target;if(!(target instanceof HTMLElement)||target.tagName!=='BUTTON')return;current=(current+(target.textContent==='→'?1:-1)+quotes.length)%quotes.length;show(current);window.clearInterval(timer);timer=window.setInterval(()=>{current=(current+1)%quotes.length;show(current)},5000)});grid?.addEventListener('mouseenter',()=>window.clearInterval(timer));grid?.addEventListener('mouseleave',()=>{timer=window.setInterval(()=>{current=(current+1)%quotes.length;show(current)},5000)})}const sticky=document.querySelector('.sticky-call');if(sticky){const footer=document.querySelector('.site-footer');const update=()=>{const past=window.scrollY>document.documentElement.scrollHeight*.3;const near=footer?footer.getBoundingClientRect().top<window.innerHeight*1.4:false;sticky.classList.toggle('is-hidden',!past||near)};window.addEventListener('scroll',update,{passive:true});update()}}else{document.querySelectorAll('.stat-value').forEach(el=>el.textContent=el.getAttribute('data-target')||'0')}})();</script>`;
  return `<!doctype html>${statsScript}${interactionScript}${motionScript}
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(page.seoTitle)}</title><meta name="description" content="${escapeHtml(page.metaDescription)}"><link rel="canonical" href="${escapeHtml(page.canonicalSlug)}"><link rel="stylesheet" href="style.css"><script type="application/ld+json">${escapeJson(page.schema)}</script></head><body><main><header class="site-header"><div class="brand"><span class="brand-mark">L</span>${business}</div><a class="button" href="tel:${phone}">${escapeHtml(page.ctaText)}</a></header><section class="hero" aria-labelledby="hero-title"><div class="eyebrow">${escapeHtml(page.icon)} · ${escapeHtml(page.heroEyebrow)}</div><h1 id="hero-title">${escapeHtml(page.h1)}</h1><p>${escapeHtml(page.heroDescription)}</p><a class="button" href="tel:${phone}">${escapeHtml(page.ctaText)}</a></section><section class="section" aria-labelledby="trust-title"><p class="eyebrow">Trusted locally</p><h2 id="trust-title">A team you can feel good about calling.</h2><div class="badge-grid">${badges}</div></section><section class="section" aria-labelledby="services-title"><p class="eyebrow">Local expertise</p><h2 id="services-title">A better experience from the first call.</h2><p class="section-intro">${business} brings practical expertise and a thoughtful process to every ${escapeHtml(form.service.toLowerCase())} job.</p><div class="service-grid">${services}</div></section><section class="section" aria-labelledby="why-title"><p class="eyebrow">Why choose us</p><h2 id="why-title">Good work should feel straightforward.</h2><ul class="why-list">${why}</ul></section><section class="section" aria-labelledby="process-title"><p class="eyebrow">A clear process</p><h2 id="process-title">From first hello to done right.</h2><div class="process-grid">${process}</div></section><section class="section" aria-labelledby="testimonials-title"><p class="eyebrow">Customer reviews</p><h2 id="testimonials-title">What customers are saying.</h2><p class="section-intro"><strong>4.9 ★</strong> from 240+ Sample Reviews</p><div class="testimonial-grid">${testimonials}</div></section><section class="section" aria-labelledby="areas-title"><p class="eyebrow">Service areas</p><h2 id="areas-title">Proud to serve your neighborhood.</h2><ul class="area-grid">${areas}</ul></section><section class="section" aria-labelledby="faq-title"><p class="eyebrow">Questions, answered</p><h2 id="faq-title">Everything you need to know before you call.</h2><div class="faq-grid">${faqs}</div></section><section class="section" aria-labelledby="cta-title"><div class="cta-band"><p class="eyebrow">Ready when you are</p><h2 id="cta-title">Let&apos;s get your ${escapeHtml(form.service.toLowerCase())} sorted.</h2><p>${escapeHtml(page.footerText)}</p><a class="button" href="tel:${phone}">${escapeHtml(page.ctaText)}</a></div></section><footer class="site-footer"><strong>${business}</strong><br>${escapeHtml(page.footerText)}<br><a href="tel:${phone}">${phone}</a></footer><a class="button sticky-call" href="tel:${phone}">${escapeHtml(page.ctaText)}</a></main></body></html>`;
}