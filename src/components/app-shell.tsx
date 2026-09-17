"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/mock-data";
import { Button } from "@/components/ui";
import { Bell, ChartNoAxesCombined, CircleHelp, LayoutDashboard, LogOut, Menu, PanelsTopLeft, Settings, Sparkles, X } from "@/components/icons";

function NavIcon({ name }: { name: string }) {
  const props = { size: 17, strokeWidth: 1.8 };
  if (name === "PanelsTopLeft") return <PanelsTopLeft {...props} />;
  if (name === "Sparkles") return <Sparkles {...props} />;
  if (name === "ChartNoAxesCombined") return <ChartNoAxesCombined {...props} />;
  return <LayoutDashboard {...props} />;
}

function Sidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();
  return <aside className="flex h-full w-[252px] flex-col border-r border-[var(--line)] bg-[#fbfcfa] px-4 py-5">
    <div className="flex items-center justify-between px-3">
      <Link href="/" className="flex items-center gap-2.5" onClick={onClose}><span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--coral)] text-sm font-bold text-white">L</span><span className="font-bold tracking-[-.02em] text-[var(--ink)]">LandingForge<span className="text-[var(--coral)]">.</span></span></Link>
      {onClose && <button onClick={onClose} className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg text-[var(--muted)] hover:bg-[#edf1ed]" aria-label="Close menu"><X size={18} /></button>}
    </div>
    <div className="mt-9 px-3 text-[10px] font-bold uppercase tracking-[.16em] text-[#9aa59f]">Workspace</div>
    <nav className="mt-2 space-y-1">
      {navItems.map((item) => { const active = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href)); return <Link key={item.href} href={item.href} onClick={onClose} className={cn("flex h-10 items-center gap-3 rounded-xl px-3 text-sm font-medium transition", active ? "bg-[#eaf4ed] text-[var(--mint-strong)]" : "text-[var(--muted)] hover:bg-[#f0f3f0] hover:text-[var(--ink)]")}><NavIcon name={item.icon} />{item.label}{item.label === "New generator" && <span className="ml-auto rounded-md bg-white px-1.5 py-0.5 text-[10px] font-bold text-[var(--coral)] shadow-sm">New</span>}</Link>; })}
    </nav>
    <div className="mt-8 px-3 text-[10px] font-bold uppercase tracking-[.16em] text-[#9aa59f]">Account</div>
    <nav className="mt-2 space-y-1">
      <Link href="/dashboard/settings" onClick={onClose} className={cn("flex h-10 items-center gap-3 rounded-xl px-3 text-sm font-medium text-[var(--muted)] hover:bg-[#f0f3f0] hover:text-[var(--ink)]", pathname.startsWith("/dashboard/settings") && "bg-[#eaf4ed] text-[var(--mint-strong)]")}><Settings size={17} strokeWidth={1.8} />Settings</Link>
      <Link href="/" className="flex h-10 items-center gap-3 rounded-xl px-3 text-sm font-medium text-[var(--muted)] hover:bg-[#f0f3f0] hover:text-[var(--ink)]"><CircleHelp size={17} strokeWidth={1.8} />Help center</Link>
    </nav>
    <div className="mt-auto rounded-2xl bg-[var(--ink)] p-4 text-white"><p className="text-xs font-bold text-[#cce9d6]">Your trial</p><p className="mt-2 text-sm leading-5 text-white/75">7 days left to build pages that get found.</p><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/15"><div className="h-full w-2/3 rounded-full bg-[var(--sun)]" /></div><Link href="/pricing" className="mt-4 block text-xs font-bold text-[var(--sun)] hover:underline">View plans <span aria-hidden="true">→</span></Link></div>
    <div className="mt-4 flex items-center gap-3 rounded-xl px-2 py-2"><div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--lavender)] text-xs font-bold text-[#5d4b88]">JD</div><div className="min-w-0 flex-1"><p className="truncate text-xs font-bold text-[var(--ink)]">Jamie Dawson</p><p className="truncate text-[11px] text-[var(--muted)]">jamie@northline.co</p></div><LogOut size={15} className="text-[#a0aaa4]" /></div>
  </aside>;
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return <div className="min-h-screen bg-[var(--background)]"><div className="hidden lg:fixed lg:inset-y-0 lg:flex"><Sidebar /></div>{open && <div className="fixed inset-0 z-40 bg-[var(--ink)]/30 lg:hidden" onClick={() => setOpen(false)}><div className="h-full w-[min(86vw,300px)]" onClick={(event) => event.stopPropagation()}><Sidebar onClose={() => setOpen(false)} /></div></div>}<div className="lg:pl-[252px]"><header className="sticky top-0 z-30 flex h-[68px] items-center justify-between border-b border-[var(--line)] bg-[rgba(247,248,245,.9)] px-5 backdrop-blur-md sm:px-8"><button className="grid h-10 w-10 cursor-pointer place-items-center rounded-xl border border-[var(--line)] bg-white text-[var(--muted)] lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={19} /></button><div className="hidden items-center gap-2 text-sm text-[var(--muted)] sm:flex"><span>Workspace</span><span className="text-[#b3bbb5]">/</span><span className="font-semibold text-[var(--ink)]">{usePathname().includes("generator") ? "New generator" : "Overview"}</span></div><div className="ml-auto flex items-center gap-2"><button className="grid h-10 w-10 cursor-pointer place-items-center rounded-xl text-[var(--muted)] hover:bg-white" aria-label="Notifications"><Bell size={18} /></button><Button className="hidden h-10 sm:inline-flex" onClick={() => router.push("/dashboard/generator")}><Sparkles size={15} />New page</Button></div></header><main>{children}</main></div></div>;
}