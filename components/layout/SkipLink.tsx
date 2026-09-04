/** Accessible skip-to-main-content link for keyboard/screen reader users. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="
        absolute left-[-999px] top-auto z-[2000] rounded-[8px]
        bg-royal text-white px-[18px] py-3
        focus:left-4 focus:top-4
      "
    >
      Skip to content
    </a>
  );
}
