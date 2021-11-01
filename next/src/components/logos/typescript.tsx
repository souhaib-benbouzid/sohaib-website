function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={120} height={60} {...props}>
      <path
        d="M18.702 19.447h-5.64v17.466h-2.3V19.447H5.146v-2.073h13.556zm8.898 3.515l-6.418 16.183c-1.143 2.887-2.75 4.333-4.825 4.333-.58 0-1.066-.058-1.457-.178v-2.004c.48.163.922.244 1.32.244 1.128 0 1.973-.67 2.534-2.015l1.116-2.643-5.45-13.92h2.48l3.775 10.735c.047.136.14.492.287 1.062h.08l.27-1.035 3.964-10.762zm3.654 11.936H31.2v8.433h-2.236v-20.37H31.2v2.453h.054c1.1-1.852 2.705-2.78 4.825-2.78 1.798 0 3.2.624 4.21 1.872s1.51 2.922 1.51 5.022c0 2.333-.566 4.205-1.7 5.608s-2.69 2.104-4.658 2.104c-1.8-.004-3.205-.783-4.185-2.345zM31.2 29.27v1.95c0 1.155.376 2.13 1.124 2.938s1.7 1.205 2.856 1.205c1.352 0 2.414-.52 3.182-1.554s1.15-2.476 1.15-4.317c0-1.554-.36-2.77-1.077-3.65s-1.7-1.32-2.914-1.32c-1.298 0-2.345.453-3.135 1.356S31.2 27.907 31.2 29.27zm24.155 1.225h-9.85c.035 1.554.453 2.75 1.252 3.596s1.9 1.267 3.298 1.267c1.57 0 3.015-.52 4.333-1.554v2.097c-1.225.89-2.848 1.337-4.864 1.337-1.973 0-3.52-.632-4.647-1.9s-1.7-3.05-1.7-5.348c0-2.17.616-3.94 1.845-5.305s2.76-2.05 4.585-2.05 3.236.59 4.236 1.77 1.5 2.82 1.5 4.918v1.17zm-2.3-1.895c-.008-1.3-.322-2.294-.934-3.01s-1.465-1.077-2.554-1.077c-1.054 0-1.95.376-2.686 1.132s-1.2 1.74-1.364 2.957zm4.244 7.522v-2.697c.283.27.62.52 1.015.736s.8.403 1.248.55.876.267 1.314.35.85.124 1.22.124c1.287 0 2.252-.26 2.887-.783s.953-1.275.953-2.255c0-.527-.105-.984-.318-1.376a3.79 3.79 0 00-.88-1.07 8.697 8.697 0 00-1.33-.926l-1.65-.934-1.744-1.05a7.55 7.55 0 01-1.407-1.17c-.4-.426-.713-.91-.942-1.45s-.34-1.174-.34-1.9c0-.89.178-1.663.535-2.32s.825-1.2 1.41-1.628 1.244-.744 1.988-.953a8.37 8.37 0 012.275-.314c1.763 0 3.046.233 3.852.694v2.573c-1.054-.798-2.4-1.197-4.065-1.197-.457 0-.915.054-1.372.155s-.864.275-1.22.512-.647.54-.872.915-.337.825-.337 1.364c0 .5.085.93.256 1.294s.422.694.756.996.736.59 1.217.872l1.65.926 1.82 1.09c.574.38 1.077.802 1.508 1.267s.775.977 1.027 1.54.38 1.21.38 1.934c0 .96-.174 1.78-.515 2.445a4.52 4.52 0 01-1.395 1.628c-.585.42-1.26.72-2.027.907s-1.57.28-2.418.28c-.283 0-.632-.023-1.046-.074l-1.27-.217c-.434-.097-.84-.213-1.228-.353-.39-.15-.698-.3-.934-.48zm22.73.15c-1.073.643-2.345.97-3.813.97-1.988 0-3.596-.647-4.817-1.942s-1.833-2.972-1.833-5.034c0-2.298.66-4.143 1.976-5.538s3.073-2.093 5.274-2.093c1.225 0 2.306.23 3.244.682v2.3c-1.035-.73-2.143-1.09-3.325-1.09-1.426 0-2.596.512-3.507 1.535s-1.368 2.364-1.368 4.026c0 1.635.43 2.926 1.287 3.868s2.01 1.418 3.453 1.418c1.217 0 2.36-.403 3.434-1.213v2.12zm8.646-11.052c-.39-.298-.953-.45-1.7-.45-.953 0-1.752.45-2.39 1.35s-.96 2.124-.96 3.678v7.11h-2.236v-13.95h2.236v2.876h.054c.318-.98.802-1.748 1.457-2.294s1.383-.825 2.193-.825c.58 0 1.027.062 1.337.2zm2.565-5.8c-.4 0-.74-.136-1.023-.407s-.422-.616-.422-1.035.14-.763.422-1.042.624-.415 1.023-.415c.407 0 .756.14 1.042.415a1.39 1.39 0 01.43 1.042c0 .4-.143.74-.43 1.023a1.46 1.46 0 01-1.042.42zm1.09 17.493h-2.236v-13.95h2.236zm3.604-2.015h-.054v8.433h-2.236v-20.37h2.236v2.453h.054c1.1-1.852 2.705-2.78 4.825-2.78 1.798 0 3.2.624 4.21 1.872s1.51 2.922 1.51 5.022c0 2.333-.566 4.205-1.7 5.608s-2.7 2.104-4.658 2.104c-1.8-.004-3.205-.783-4.185-2.345zm-.054-5.627v1.95c0 1.155.376 2.13 1.124 2.938s1.7 1.205 2.856 1.205c1.352 0 2.414-.52 3.182-1.554s1.15-2.476 1.15-4.317c0-1.554-.36-2.77-1.077-3.65s-1.7-1.32-2.914-1.32c-1.298 0-2.345.453-3.135 1.356s-1.186 2.03-1.186 3.395zm18.966 7.507c-.527.29-1.22.434-2.085.434-2.44 0-3.666-1.364-3.666-4.088V24.87h-2.4v-1.907h2.4v-3.406l2.236-.72v4.127h3.515v1.907h-3.515v7.86c0 .934.16 1.604.477 2.004s.845.6 1.58.6c.562 0 1.05-.155 1.457-.465z"
        fill="#007acc"
      />
    </svg>
  );
}

export default SvgComponent;