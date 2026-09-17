"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MoreHorizontal, Plus, Search } from "@/components/icons";
import { Badge, Button, Input } from "@/components/ui";
import { projects } from "@/lib/mock-data";
import type { SavedProject } from "@/lib/generator";

const storageKey = "landingforge-projects";
type DisplayRow = { id: string; name: string; type: string; status: "Draft" | "Published"; updated: string; score: string | number; color: string };

export default function PagesPage() {
  const [savedProjects, setSavedProjects] = useState<SavedProject[]>([]);
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) setSavedProjects(JSON.parse(stored) as SavedProject[]);
    } catch {
      setSavedProjects([]);
    }
  }, []);
  const savedRows: DisplayRow[] = savedProjects.map((project, index) => ({ id: project.id || `saved-project-${index}`, name: project.businessName, type: project.service, status: project.status, updated: new Date(project.createdAt).toLocaleDateString(), score: "New", color: "bg-[#cce9d6]" }));
  const fallbackRows: DisplayRow[] = projects.map((project, index) => ({ id: `fallback-project-${index}`, ...project, status: project.status as DisplayRow["status"] })).concat([{ id: "fallback-harbor-home-cleaning", name: "Harbor Home Cleaning", type: "Cleaning", status: "Draft", updated: "Sep 10, 2025", score: 85, color: "bg-[#fee2dc]" }]);
  const rows = savedRows.length > 0 ? savedRows : fallbackRows;
  return <div className="mx-auto max-w-[1200px] px-5 py-8 sm:px-8 sm:py-10"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm text-[var(--muted)]">Workspace</p><h1 className="display mt-1 text-4xl tracking-[-.04em]">Landing pages</h1><p className="mt-2 text-sm text-[var(--muted)]">{rows.length} active pages in your workspace.</p></div><Link href="/dashboard/generator"><Button><Plus size={17} />New page</Button></Link></div><div className="mt-8 flex flex-col gap-3 sm:flex-row"><div className="relative max-w-sm flex-1"><Search size={16} className="absolute left-3 top-3 text-[#9ca6a1]" /><Input className="pl-9" placeholder="Search pages..." /></div><Button variant="secondary" className="w-fit">All statuses</Button></div><div className="mt-5 overflow-hidden rounded-2xl border border-[var(--line)] bg-white"><div className="hidden grid-cols-[1.5fr_1fr_.7fr_.6fr_40px] gap-4 border-b border-[var(--line)] px-5 py-3 text-[10px] font-bold uppercase tracking-[.12em] text-[#9ca6a1] sm:grid"><span>Page</span><span>Updated</span><span>Status</span><span>Score</span><span /></div>{rows.map((project) => <div key={project.id} className="grid items-center gap-3 border-b border-[var(--line)] px-5 py-4 last:border-0 sm:grid-cols-[1.5fr_1fr_.7fr_.6fr_40px] sm:gap-4"><div className="flex min-w-0 items-center gap-3"><span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg text-xs font-bold ${project.color}`}>{project.name.split(" ").map((word) => word[0]).join("").slice(0, 2)}</span><div className="min-w-0"><p className="truncate text-sm font-bold">{project.name}</p><p className="text-xs text-[var(--muted)]">{project.type}</p></div></div><span className="hidden text-xs text-[var(--muted)] sm:block">{project.updated}</span><span><Badge tone={project.status === "Published" ? "green" : "yellow"}>{project.status}</Badge></span><span className="text-xs font-bold text-[var(--mint-strong)]">{project.score}{typeof project.score === "number" ? "/100" : ""}</span><button className="grid h-8 w-8 cursor-pointer place-items-center rounded-lg text-[var(--muted)] hover:bg-[#f2f5f2]" aria-label={`Options for ${project.name}`}><MoreHorizontal size={17} /></button></div>)}</div></div>;
}