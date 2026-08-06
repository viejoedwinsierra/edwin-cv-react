export function normalizeCompetencies(rawCompetencies) {
  if (Array.isArray(rawCompetencies)) {
    return { technical: rawCompetencies, leadership: [], communication: [] };
  }

  return {
    technical: rawCompetencies?.technical ?? [],
    leadership: rawCompetencies?.leadership ?? [],
    communication: rawCompetencies?.communication ?? []
  };
}

export function normalizeCvContent(selected = {}) {
  return {
    ...selected,
    meta: selected.meta ?? {},
    profile: { highlights: [], ...(selected.profile ?? {}) },
    contact: selected.contact ?? [],
    languages: selected.languages ?? [],
    interests: selected.interests ?? [],
    sections: selected.sections ?? {},
    skills: selected.skills ?? [],
    competencies: normalizeCompetencies(selected.competencies),
    platforms: {
      backend: [],
      frontend: [],
      databases: [],
      delivery: [],
      cloud: [],
      runtimes: [],
      ...(selected.platforms ?? {})
    },
    supportedProjects: selected.supportedProjects ?? [],
    experience: selected.experience ?? [],
    education: selected.education ?? [],
    certifications: selected.certifications ?? [],
    vision: selected.vision ?? { title: '', intro: '', pillars: [] },
    growth: selected.growth ?? { title: '', text: '', goals: [] }
  };
}
