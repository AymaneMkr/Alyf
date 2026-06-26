import React from 'react';

function UiIcon({ name, className = '', title, ...props }) {
  const commonProps = {
    width: '1em',
    height: '1em',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    role: title ? 'img' : 'presentation',
    'aria-hidden': title ? undefined : 'true',
    ...props,
  };

  const icons = {
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s5-4.4 5-9.5A5 5 0 1 0 7 11.5C7 16.6 12 21 12 21Z" />
        <circle cx="12" cy="11" r="2" />
      </>
    ),
    mail: (
      <>
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M5 8l7 5 7-5" />
      </>
    ),
    monitor: (
      <>
        <rect x="4" y="5" width="16" height="11" rx="2" />
        <path d="M8 20h8" />
        <path d="M12 16v4" />
      </>
    ),
    cloud: (
      <path d="M7 18h10a3.5 3.5 0 0 0 .5-7A5.5 5.5 0 0 0 6.7 10.8 3.5 3.5 0 0 0 7 18Z" />
    ),
    server: (
      <>
        <rect x="5" y="4" width="14" height="6" rx="2" />
        <rect x="5" y="14" width="14" height="6" rx="2" />
        <path d="M8 7h.01M8 17h.01" />
      </>
    ),
    linux: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M7 9l3 3-3 3" />
        <path d="M12 15h5" />
      </>
    ),
    gear: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1l2.1-2.1M17 7l2.1-2.1" />
      </>
    ),
    building: (
      <>
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <path d="M9 20v-4h6v4" />
        <path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="9" r="3" />
        <path d="M4.5 20c.8-3 3-5 4.5-5s3.7 2 4.5 5" />
        <circle cx="17" cy="10" r="2.5" />
        <path d="M14.7 20c.5-1.8 1.9-3.2 3.2-3.2" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1.2" />
      </>
    ),
    accessibility: (
      <>
        <circle cx="12" cy="5" r="1.6" />
        <path d="M12 7.5v4.5l-3 3" />
        <path d="M12 12l3 2" />
        <path d="M9.5 21l2.5-4 2 4" />
      </>
    ),
    shield: (
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
    ),
    briefcase: (
      <>
        <rect x="4" y="7" width="16" height="12" rx="2" />
        <path d="M9 7V6a3 3 0 0 1 6 0v1" />
      </>
    ),
    refresh: (
      <>
        <path d="M20 12a8 8 0 1 1-2.3-5.7" />
        <path d="M20 4v6h-6" />
      </>
    ),
  };

  return (
    <svg {...commonProps}>
      {title ? <title>{title}</title> : null}
      {icons[name] || icons.target}
    </svg>
  );
}

export default UiIcon;