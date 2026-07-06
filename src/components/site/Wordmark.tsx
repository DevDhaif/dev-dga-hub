export function Wordmark({ size = 26 }: { size?: number }) {
  return (
    <span className="wordmark">
      <svg
        width={size}
        height={size}
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden
        className="wordmark__mark"
      >
        <rect x="4" y="3.5" width="20" height="7" rx="2" fill="var(--ddga-sa-300)" />
        <rect x="4" y="10.5" width="20" height="7" rx="2" fill="var(--ddga-sa-500)" />
        <rect x="4" y="17.5" width="20" height="7" rx="2" fill="var(--ddga-color-primary)" />
      </svg>
      <span className="wordmark__text">
        dev<span className="wordmark__dim">-</span>dga
      </span>
    </span>
  );
}
