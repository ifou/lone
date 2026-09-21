import sharp from 'sharp';

/** Variant widths this layout actually uses. */
export const CANDIDATES = [480, 960, 1600];

export function variantsOf(src: string) {
  if (!src) return [];
  const ext = src.slice(src.lastIndexOf('.'));
  return CANDIDATES.map((w) => `${src.slice(0, -ext.length)}-${w}.webp`);
}

/** The 1600 variant: the full-size lightbox target. */
export function fullOf(src: string) {
  return variantsOf(src).at(-1) ?? src;
}

/**
 * srcset for one slot. Only generated variants are listed — the original is a
 * different width than every candidate, so shipping it with a made-up `w`
 * tells the browser a lie and it picks the wrong file. `src` stays the
 * no-srcset fallback.
 */
export function srcsetOf(src: string): string {
  if (!src) return '';
  return variantsOf(src)
    .map((url, i) => `${url} ${CANDIDATES[i]}w`)
    .join(', ');
}

/** Intrinsic size of an original, read once at build to reserve the box. */
export async function measure(src: string, publicDir = 'public'): Promise<{ width: number; height: number }> {
  if (!src) return { width: 0, height: 0 };
  const file = `${publicDir.replace(/\/$/, '')}/${src.replace(/^\//, '')}`;
  try {
    const meta = await sharp(file).metadata();
    return { width: meta.width ?? 0, height: meta.height ?? 0 };
  } catch {
    return { width: 0, height: 0 };
  }
}

/** measure() for many paths, concurrent, keyed by the src they were asked about. */
export async function measureAll(srcs: string[], publicDir = 'public'): Promise<Record<string, { width: number; height: number }>> {
  const out: Record<string, { width: number; height: number }> = {};
  await Promise.all(
    [...new Set(srcs.filter(Boolean))].map(async (src) => {
      out[src] = await measure(src, publicDir);
    }),
  );
  return out;
}
