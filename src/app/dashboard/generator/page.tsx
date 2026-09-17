"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import JSZip from "jszip";
import { ArrowDownToLine, ArrowUpRight, Check, Code2, Eye, FileText, MapPin, Monitor, Phone, Save, Smartphone, WandSparkles } from "lucide-react";
import { Button, Input, Label } from "@/components/ui";
import { cn } from "@/lib/utils";
import { createGeneratedPage, createSavedProject, defaultGeneratorForm, industryOptions, industryServices, normalizeColor, renderExportHtml, renderMotionStyles, renderStyles, slugify, themeOptions, type GeneratedPage, type GeneratorForm, type Industry } from "@/lib/generator";

const steps = ["Business basics", "Your offer", "Brand direction"];
const storageKey = "landingforge-projects";
type FormErrors = Partial<Record<keyof GeneratorForm, string>>;

export default function GeneratorPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<GeneratorForm>(defaultGeneratorForm);
  const [generated, setGenerated] = useState<GeneratedPage>(() => createGeneratedPage(defaultGeneratorForm));
  const [errors, setErrors] = useState<FormErrors>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [savedMessage, setSavedMessage] = useState("");
  const [hasGenerated, setHasGenerated] = useState(false);

  useEffect(() => {
    const savedDraft = window.localStorage.getItem("landingforge-draft");
    if (!savedDraft) return;
    try {
      const parsed = JSON.parse(savedDraft) as Partial<GeneratorForm>;
      const validIndustry = parsed.industry && industryOptions.some((option) => option.value === parsed.industry) ? parsed.industry : defaultGeneratorForm.industry;
      const nextForm = { ...defaultGeneratorForm, ...parsed, industry: validIndustry } as GeneratorForm;
      setForm(nextForm);
      setGenerated(createGeneratedPage(nextForm));
    } catch {
      window.localStorage.removeItem("landingforge-draft");
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("landingforge-draft", JSON.stringify(form));
    setGenerated(createGeneratedPage(form));
  }, [form]);

  const updateForm = <K extends keyof GeneratorForm>(key: K, value: GeneratorForm[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setSavedMessage("");
  };

  const validateStep = () => {
    const nextErrors: FormErrors = {};
    if (step === 0) {
      if (!form.businessName.trim()) nextErrors.businessName = "Enter your business name.";
      if (!form.service.trim()) nextErrors.service = "Choose a primary service.";
      if (!form.city.trim()) nextErrors.city = "Enter a city.";
      if (!form.state.trim()) nextErrors.state = "Enter a state.";
      if (!form.phone.trim()) nextErrors.phone = "Add a phone number for your CTA.";
    }
    if (step === 1 && !form.ctaText.trim()) nextErrors.ctaText = "Add the action you want visitors to take.";
    if (step === 2 && !/^#[0-9a-f]{6}$/i.test(form.primaryColor)) nextErrors.primaryColor = "Use a six-digit hex color, like #f26b4f.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    if (step < steps.length - 1) {
      setStep((current) => current + 1);
      return;
    }
    setIsGenerating(true);
    window.setTimeout(() => {
      const page = createGeneratedPage(form);
      const project = createSavedProject(form);
      window.localStorage.setItem(storageKey, JSON.stringify([project, ...readProjects()]));
      setGenerated(page);
      setHasGenerated(true);
      setSavedMessage("Generated and saved to your projects.");
      setIsGenerating(false);
    }, 650);
  };

  const handleSave = () => {
    const nextErrors = validateAll(form);
    if (Object.keys(nextErrors).length > 0) {
      setStep(0);
      setErrors(nextErrors);
      return;
    }
    const project = createSavedProject(form);
    window.localStorage.setItem(storageKey, JSON.stringify([project, ...readProjects()]));
    setSavedMessage("Saved to your projects.");
  };

  const handleDownloadZip = async () => {
    setIsExporting(true);
    const zip = new JSZip();
    zip.file("index.html", renderExportHtml(form, generated));
    zip.file("style.css", `${renderStyles(form)}${renderMotionStyles(form)}`);
    zip.file("assets/.gitkeep", "");
    const file = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(file);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${slugify(generated.slug || form.businessName || "landingforge-page")}.zip`;
    anchor.click();
    URL.revokeObjectURL(url);
    setIsExporting(false);
    setSavedMessage("ZIP downloaded with index.html, style.css, and assets.");
  };

  const previewTheme = useMemo(() => themeOptions.find((theme) => theme.value === form.theme) ?? themeOptions[0], [form.theme]);

  return <div className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8 sm:py-10">
    <div><p className="text-sm text-[var(--muted)]">New landing page</p><h1 className="display mt-1 text-4xl tracking-[-.04em]">Let&apos;s make something that converts<span className="text-[var(--coral)]">.</span></h1><p className="mt-2 text-sm text-[var(--muted)]">A few details and you&apos;ll have a page ready for your next campaign.</p></div>
    <div className="mt-8 grid gap-7 xl:grid-cols-[minmax(0,1fr)_minmax(440px,.9fr)]">
      <section className="rounded-2xl border border-[var(--line)] bg-white p-5 sm:p-7">
        <div className="flex items-center gap-2 border-b border-[var(--line)] pb-5">{steps.map((item, index) => <button key={item} type="button" onClick={() => index <= step && setStep(index)} className={cn("flex flex-1 cursor-pointer items-center gap-2 text-left", index > step && "cursor-default")}><span className={cn("grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold", index < step ? "bg-[var(--mint)] text-[var(--mint-strong)]" : index === step ? "bg-[var(--coral)] text-white" : "bg-[#f0f3f0] text-[var(--muted)]")}>{index < step ? <Check size={14} /> : index + 1}</span><span className={cn("hidden text-xs font-bold sm:block", index === step ? "text-[var(--ink)]" : "text-[var(--muted)]")}>{item}</span>{index < steps.length - 1 && <span className="mx-1 h-px flex-1 bg-[var(--line)]" />}</button>)}</div>
        {step === 0 && <BasicsStep form={form} errors={errors} updateForm={updateForm} />}
        {step === 1 && <OfferStep form={form} errors={errors} updateForm={updateForm} />}
        {step === 2 && <BrandStep form={form} error={errors.primaryColor} updateForm={updateForm} />}
        <div className="mt-8 flex flex-col-reverse gap-3 border-t border-[var(--line)] pt-5 sm:flex-row sm:justify-between"><Button variant="ghost" disabled={step === 0 || isGenerating} onClick={() => setStep((current) => current - 1)}>Back</Button><div className="flex gap-2"><Button variant="secondary" onClick={handleSave} disabled={isGenerating}><Save size={15} />Save project</Button><Button onClick={handleNext} disabled={isGenerating}>{isGenerating ? <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white" />Generating...</> : step < 2 ? <>Continue <ArrowUpRight size={15} /></> : <>Generate page <WandSparkles size={15} /></>}</Button></div></div>
        {savedMessage && <p className="mt-4 text-right text-xs font-semibold text-[var(--mint-strong)]" role="status">{savedMessage}</p>}
      </section>
      <LivePreview form={form} generated={generated} theme={previewTheme} hasGenerated={hasGenerated} isExporting={isExporting} onExport={handleDownloadZip} />
    </div>
  </div>;
}

function BasicsStep({ form, errors, updateForm }: { form: GeneratorForm; errors: FormErrors; updateForm: <K extends keyof GeneratorForm>(key: K, value: GeneratorForm[K]) => void }) {
  const industry = industryOptions.find((option) => option.value === form.industry) ?? industryOptions.find((option) => option.value === "roofing");
  const industryValue = industry?.value ?? "roofing";
  const services = industryServices[industryValue] ?? industryServices.roofing;
  const handleIndustryChange = (value: Industry) => { updateForm("industry", value); updateForm("service", (industryServices[value] ?? industryServices.roofing)[0]); };
  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-7"><h2 className="text-xl font-bold">Start with the essentials</h2><p className="mt-1 text-sm leading-6 text-[var(--muted)]">Choose an industry and we&apos;ll tailor the page structure, copy, and visual language around it.</p><div className="mt-7 grid gap-5 sm:grid-cols-2"><Field label="Industry" id="industry"><select id="industry" value={form.industry} onChange={(event) => handleIndustryChange(event.target.value as Industry)} className="h-11 w-full rounded-xl border border-[var(--line)] bg-white px-3.5 text-sm text-[var(--ink)] outline-none focus:border-[var(--coral)]">{["Home Services", "Insurance & Finance", "Legal", "Medical & Wellness", "Business Services"].map((group) => <optgroup key={group} label={group}>{industryOptions.filter((option) => option.group === group).map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</optgroup>)}</select></Field><Field label="Business name" id="business" error={errors.businessName}><Input id="business" value={form.businessName} onChange={(event) => updateForm("businessName", event.target.value)} placeholder={`${industry?.label ?? "Local"} team`} /></Field><Field label="Primary service" id="service" error={errors.service}><select id="service" value={form.service} onChange={(event) => updateForm("service", event.target.value)} className="h-11 w-full rounded-xl border border-[var(--line)] bg-white px-3.5 text-sm text-[var(--ink)] outline-none focus:border-[var(--coral)]">{services.map((service) => <option key={service}>{service}</option>)}</select></Field><Field label="City" id="city" error={errors.city}><div className="relative"><MapPin size={16} className="absolute left-3 top-3 text-[#9ca6a1]" /><Input id="city" className="pl-9" value={form.city} onChange={(event) => updateForm("city", event.target.value)} placeholder="Austin" /></div></Field><Field label="State" id="state" error={errors.state}><Input id="state" maxLength={2} value={form.state} onChange={(event) => updateForm("state", event.target.value.toUpperCase())} placeholder="TX" /></Field><Field label="Phone number" id="phone" error={errors.phone}><div className="relative"><Phone size={16} className="absolute left-3 top-3 text-[#9ca6a1]" /><Input id="phone" className="pl-9" value={form.phone} onChange={(event) => updateForm("phone", event.target.value)} placeholder="(512) 555-0188" /></div></Field></div><div className="mt-5 rounded-xl bg-[#f8faf7] p-4"><p className="text-xs font-bold text-[var(--ink)]">Adaptive page focus</p><p className="mt-1 text-xs leading-5 text-[var(--muted)]">{industry?.label} pages emphasize {form.industry === "final-expense" ? "beneficiaries, affordable plans, and licensed agents." : form.industry === "plumbing" ? "emergency leaks and same-day service." : form.industry === "pest-control" ? "termites, rodents, and mosquitoes." : form.industry === "personal-injury" ? "free consultation and no-win-no-fee guidance." : "the proof points and questions local customers care about."}</p></div></motion.div>;
}

function OfferStep({ form, errors, updateForm }: { form: GeneratorForm; errors: FormErrors; updateForm: <K extends keyof GeneratorForm>(key: K, value: GeneratorForm[K]) => void }) {
  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-7"><h2 className="text-xl font-bold">What should visitors do?</h2><p className="mt-1 text-sm leading-6 text-[var(--muted)]">A clear offer gives your page a job to do.</p><div className="mt-7 grid gap-5 sm:grid-cols-2"><Field label="Primary call to action" id="cta" error={errors.ctaText}><Input id="cta" value={form.ctaText} onChange={(event) => updateForm("ctaText", event.target.value)} placeholder="Get your free estimate" /></Field><Field label="CTA style" id="cta-style"><select id="cta-style" value={form.ctaStyle} onChange={(event) => updateForm("ctaStyle", event.target.value as GeneratorForm["ctaStyle"])} className="h-11 w-full rounded-xl border border-[var(--line)] bg-white px-3.5 text-sm text-[var(--ink)] outline-none focus:border-[var(--coral)]"><option value="call">Phone call</option><option value="quote">Free quote</option><option value="consultation">Consultation</option></select></Field><Field label="Business mode" id="business-mode"><select id="business-mode" value={form.businessMode} onChange={(event) => updateForm("businessMode", event.target.value as GeneratorForm["businessMode"])} className="h-11 w-full rounded-xl border border-[var(--line)] bg-white px-3.5 text-sm text-[var(--ink)] outline-none focus:border-[var(--coral)]"><option value="standard">Standard business</option><option value="emergency">Emergency / urgent</option></select></Field></div><div className="mt-5 rounded-xl bg-[#f8faf7] p-4"><p className="text-xs font-bold text-[var(--ink)]">Conversion goal</p><div className="mt-3 flex gap-2"><button type="button" className="flex-1 rounded-lg border border-[var(--mint-strong)] bg-[#eaf4ed] px-3 py-2.5 text-xs font-bold text-[var(--mint-strong)]"><Phone size={14} className="mx-auto mb-1" />Get a call</button><button type="button" className="flex-1 rounded-lg border border-[var(--line)] bg-white px-3 py-2.5 text-xs font-bold text-[var(--muted)]"><FileText size={14} className="mx-auto mb-1" />Request a quote</button></div></div></motion.div>;
}

function BrandStep({ form, error, updateForm }: { form: GeneratorForm; error?: string; updateForm: <K extends keyof GeneratorForm>(key: K, value: GeneratorForm[K]) => void }) {
  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-7"><h2 className="text-xl font-bold">Choose a direction</h2><p className="mt-1 text-sm leading-6 text-[var(--muted)]">Switch the premium theme, accent color, and exported motion while keeping your page content intact.</p><div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">{themeOptions.map((theme) => <button key={theme.value} type="button" onClick={() => { updateForm("theme", theme.value); updateForm("primaryColor", theme.accent); }} className={cn("rounded-xl border p-4 text-left transition", theme.surface, theme.ink, form.theme === theme.value ? "border-[var(--coral)] ring-2 ring-[rgba(242,107,79,.2)]" : "border-[var(--line)]")}><div className="h-10 w-10 rounded-lg border border-current opacity-30" /><p className="mt-5 text-sm font-bold">{theme.name}</p><p className="mt-1 text-[11px] opacity-70">Premium local theme.</p>{form.theme === theme.value && <Check size={16} className="mt-3" />}</button>)}</div><div className="mt-6 grid max-w-md gap-5 sm:grid-cols-2"><div><Label htmlFor="animation">Animation setting</Label><select id="animation" value={form.animation} onChange={(event) => updateForm("animation", event.target.value as GeneratorForm["animation"])} className="h-11 w-full rounded-xl border border-[var(--line)] bg-white px-3.5 text-sm text-[var(--ink)] outline-none focus:border-[var(--coral)]"><option value="none">None</option><option value="minimal">Minimal</option><option value="premium">Premium</option></select></div><div><Label htmlFor="primary-color">Primary accent color</Label><div className="flex items-center gap-2"><input id="primary-color" type="color" value={normalizeColor(form.primaryColor)} onChange={(event) => updateForm("primaryColor", event.target.value)} className="h-11 w-12 cursor-pointer rounded-xl border border-[var(--line)] bg-white p-1" /><Input aria-label="Primary color hex value" value={form.primaryColor} onChange={(event) => updateForm("primaryColor", event.target.value)} pattern="^#[0-9A-Fa-f]{6}$" /></div></div></div>{error && <p className="mt-1.5 text-xs font-semibold text-[var(--coral-dark)]" role="alert">{error}</p>}</motion.div>;
}

function Field({ label, id, error, children }: { label: string; id: string; error?: string; children: React.ReactNode }) { return <div><Label htmlFor={id}>{label}</Label>{children}{error && <p className="mt-1.5 text-xs font-semibold text-[var(--coral-dark)]" role="alert">{error}</p>}</div>; }

function Preview({ form, generated, theme, hasGenerated, onExport }: { form: GeneratorForm; generated: GeneratedPage; theme: typeof themeOptions[number]; hasGenerated: boolean; onExport: () => void }) {
  return <section className="sticky top-[90px] h-fit overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-[0_20px_50px_rgba(24,33,30,.08)]"><div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-3"><div className="flex items-center gap-2"><Eye size={16} className="text-[var(--coral)]" /><span className="text-xs font-bold">Live preview</span></div><div className="flex items-center gap-2"><span className="rounded-full bg-[#eaf4ed] px-2 py-1 text-[10px] font-bold text-[var(--mint-strong)]">{hasGenerated ? "Generated" : "Live draft"}</span><button type="button" onClick={onExport} className="grid h-7 w-7 cursor-pointer place-items-center rounded-lg text-[var(--muted)] hover:bg-[#f0f3f0]" aria-label="Download HTML"><ArrowDownToLine size={15} /></button></div></div><div className="m-3 overflow-hidden rounded-xl border border-[var(--line)] bg-[#f7faf7]"><div className="flex items-center justify-between border-b border-[var(--line)] bg-white px-4 py-3"><span className="truncate text-[10px] font-bold">{slugify(form.businessName || "your-business")}.com</span><div className="flex gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#f26b4f]" /><span className="h-1.5 w-1.5 rounded-full bg-[#f9d67a]" /><span className="h-1.5 w-1.5 rounded-full bg-[#9ed4b5]" /></div></div><div className={cn("px-6 py-12 sm:px-10", theme.surface, theme.ink)}><p className="text-[9px] font-bold uppercase tracking-[.16em] opacity-75">{form.businessName || "Your business"} · {form.city || "Your city"}, {form.state || "US"}</p><h2 className="display mt-8 max-w-sm text-4xl leading-[.96] tracking-[-.04em]">{generated.heroTitle}</h2><p className="mt-5 max-w-xs text-xs leading-5 opacity-75">{generated.heroDescription}</p><button type="button" className="mt-7 rounded-lg bg-[var(--coral)] px-4 py-3 text-xs font-bold text-white">{generated.ctaText}</button></div><div className="space-y-4 bg-white p-5"><div><p className="text-[10px] font-bold uppercase tracking-[.12em] text-[var(--coral)]">Why choose us</p>{generated.services.map((service) => <p key={service} className="mt-2 flex items-center gap-2 text-xs font-semibold text-[var(--ink)]"><Check size={13} className="text-[var(--mint-strong)]" />{service}</p>)}</div><div className="rounded-xl bg-[#f8faf7] p-3"><p className="text-[10px] font-bold text-[var(--ink)]">“{generated.testimonials[0].quote}”</p><p className="mt-2 text-[10px] text-[var(--muted)]">{generated.testimonials[0].name} · {generated.testimonials[0].detail}</p></div></div></div><div className="border-t border-[var(--line)] px-4 py-4"><p className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[.1em] text-[var(--muted)]"><Code2 size={12} /> SEO + schema output</p><p className="mt-3 text-xs font-bold text-[var(--ink)]">{generated.seoTitle}</p><p className="mt-1 text-[11px] leading-5 text-[var(--muted)]">{generated.metaDescription}</p><details className="mt-3"><summary className="cursor-pointer text-[11px] font-bold text-[var(--coral)]">View JSON-LD schema</summary><pre className="mt-2 max-h-40 overflow-auto rounded-lg bg-[#f0f3f0] p-3 text-[9px] leading-4 text-[var(--ink)]">{JSON.stringify(generated.schema, null, 2)}</pre></details></div><p className="flex items-center justify-center gap-1 pb-4 text-[10px] text-[var(--muted)]"><WandSparkles size={12} /> Preview updates as you type</p></section>;
}

function LivePreview({ form, generated, theme, hasGenerated, isExporting, onExport }: { form: GeneratorForm; generated: GeneratedPage; theme: typeof themeOptions[number]; hasGenerated: boolean; isExporting: boolean; onExport: () => void }) {
  const [viewport, setViewport] = useState<"desktop" | "mobile">("desktop");
  return <section className="sticky top-[90px] h-fit overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-[0_20px_50px_rgba(24,33,30,.08)]"><div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] px-4 py-3"><div className="flex items-center gap-2"><Eye size={16} className="text-[var(--coral)]" /><span className="text-xs font-bold">Live preview</span></div><div className="flex items-center gap-1"><button type="button" onClick={() => setViewport("desktop")} className={cn("grid h-8 w-8 cursor-pointer place-items-center rounded-lg", viewport === "desktop" ? "bg-[#eaf4ed] text-[var(--mint-strong)]" : "text-[var(--muted)] hover:bg-[#f0f3f0]")} aria-label="Desktop preview"><Monitor size={15} /></button><button type="button" onClick={() => setViewport("mobile")} className={cn("grid h-8 w-8 cursor-pointer place-items-center rounded-lg", viewport === "mobile" ? "bg-[#eaf4ed] text-[var(--mint-strong)]" : "text-[var(--muted)] hover:bg-[#f0f3f0]")} aria-label="Mobile preview"><Smartphone size={15} /></button><button type="button" onClick={onExport} disabled={isExporting} className="ml-1 inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-lg bg-[var(--coral)] px-2.5 text-[10px] font-bold text-white disabled:opacity-60" aria-label="Download ZIP">{isExporting ? <span className="h-3 w-3 animate-spin rounded-full border-2 border-white/35 border-t-white" /> : <ArrowDownToLine size={14} />}<span className="hidden sm:inline">{isExporting ? "Packing" : "Download ZIP"}</span></button></div></div><div className="m-3 overflow-x-auto rounded-xl border border-[var(--line)] bg-[#f7faf7] p-2"><div className="mx-auto overflow-hidden rounded-lg border border-[var(--line)] bg-white transition-all duration-300" style={{ width: viewport === "mobile" ? "375px" : "100%" }}><div className="flex items-center justify-between border-b border-[var(--line)] bg-white px-4 py-3"><span className="truncate text-[10px] font-bold">{generated.slug}.com</span><div className="flex gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#f26b4f]" /><span className="h-1.5 w-1.5 rounded-full bg-[#f9d67a]" /><span className="h-1.5 w-1.5 rounded-full bg-[#9ed4b5]" /></div></div><div className="px-6 py-12 sm:px-10" style={{ backgroundColor: generated.palette.hero, color: generated.palette.text }}><p className="text-[9px] font-bold uppercase tracking-[.16em] opacity-75">{generated.icon} · {generated.heroEyebrow}</p><h2 className="display mt-8 max-w-sm text-4xl leading-[.96] tracking-[-.04em]">{generated.h1}</h2><p className="mt-5 max-w-xs text-xs leading-5 opacity-75">{generated.heroDescription}</p><button type="button" style={{ backgroundColor: form.primaryColor }} className="mt-7 rounded-lg px-4 py-3 text-xs font-bold text-white">{generated.ctaText}</button></div><div className="space-y-5 bg-white p-5"><div className="flex flex-wrap gap-2">{generated.trustBadges.map((badge) => <span key={badge} className="rounded-lg px-2 py-1 text-[10px] font-bold" style={{ backgroundColor: generated.palette.surface, color: generated.palette.hero }}>{badge}</span>)}</div><div><p className="text-[10px] font-bold uppercase tracking-[.12em]" style={{ color: form.primaryColor }}>Services</p>{generated.services.map((service) => <p key={service} className="mt-2 flex items-center gap-2 text-xs font-semibold text-[var(--ink)]"><Check size={13} className="text-[var(--mint-strong)]" />{service}</p>)}</div><div><p className="text-[10px] font-bold uppercase tracking-[.12em]" style={{ color: form.primaryColor }}>Why choose us</p>{generated.whyChooseUs.slice(0, 2).map((reason) => <p key={reason} className="mt-2 text-xs leading-5 text-[var(--muted)]">{reason}</p>)}</div><div><p className="text-[10px] font-bold uppercase tracking-[.12em]" style={{ color: form.primaryColor }}>Process</p>{generated.process.map((item) => <p key={item.title} className="mt-2 text-xs leading-5 text-[var(--muted)]"><strong className="text-[var(--ink)]">{item.title}:</strong> {item.description}</p>)}</div><div className="rounded-xl bg-[#f8faf7] p-3"><p className="text-[10px] font-bold text-[var(--ink)]">“{generated.testimonials[0].quote}”</p><p className="mt-2 text-[10px] text-[var(--muted)]">{generated.testimonials[0].name} · {generated.testimonials[0].detail}</p></div><div><p className="text-[10px] font-bold uppercase tracking-[.12em]" style={{ color: form.primaryColor }}>Service areas</p><p className="mt-2 text-xs leading-5 text-[var(--muted)]">{generated.serviceAreas.join(" · ")}</p></div><div><p className="text-[10px] font-bold uppercase tracking-[.12em]" style={{ color: form.primaryColor }}>FAQ</p>{generated.faqs.map((faq) => <details key={faq.question} className="mt-2 border-b border-[var(--line)] pb-2 text-[10px]"><summary className="cursor-pointer font-bold">{faq.question}</summary><p className="mt-1 leading-4 text-[var(--muted)]">{faq.answer}</p></details>)}</div><div className="rounded-xl p-4" style={{ backgroundColor: generated.palette.hero, color: generated.palette.text }}><p className="text-sm font-bold">Ready to get started?</p><button type="button" style={{ backgroundColor: form.primaryColor }} className="mt-3 rounded-lg px-3 py-2 text-[10px] font-bold text-white">{generated.ctaText}</button></div><p className="border-t border-[var(--line)] pt-4 text-[10px] text-[var(--muted)]">{generated.footerText}</p></div></div></div><div className="border-t border-[var(--line)] px-4 py-4"><p className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[.1em] text-[var(--muted)]"><Code2 size={12} />SEO + schema output</p><p className="mt-3 text-xs font-bold text-[var(--ink)]">{generated.seoTitle}</p><p className="mt-1 text-[11px] leading-5 text-[var(--muted)]">{generated.metaDescription}</p><p className="mt-2 truncate text-[10px] font-mono text-[var(--mint-strong)]">Canonical: {generated.canonicalSlug}</p><details className="mt-3"><summary className="cursor-pointer text-[11px] font-bold text-[var(--coral)]">View JSON-LD schema</summary><pre className="mt-2 max-h-40 overflow-auto rounded-lg bg-[#f0f3f0] p-3 text-[9px] leading-4 text-[var(--ink)]">{JSON.stringify(generated.schema, null, 2)}</pre></details></div><p className="flex items-center justify-center gap-1 pb-4 text-[10px] text-[var(--muted)]"><WandSparkles size={12} />{hasGenerated ? "Generated HTML is ready to download" : "Preview updates as you type"}</p></section>;
}

function readProjects() { try { const stored = window.localStorage.getItem(storageKey); return stored ? JSON.parse(stored) : []; } catch { return []; } }
function validateAll(form: GeneratorForm): FormErrors { const errors: FormErrors = {}; if (!form.businessName.trim()) errors.businessName = "Enter your business name."; if (!form.service.trim()) errors.service = "Choose a primary service."; if (!form.city.trim()) errors.city = "Enter a city."; if (!form.state.trim()) errors.state = "Enter a state."; if (!form.phone.trim()) errors.phone = "Add a phone number for your CTA."; if (!form.ctaText.trim()) errors.ctaText = "Add the action you want visitors to take."; if (!/^#[0-9a-f]{6}$/i.test(form.primaryColor)) errors.primaryColor = "Use a six-digit hex color, like #f26b4f."; return errors; }