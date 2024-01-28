export const GENERAL_LINKS = {
  GOVERNANCE: 'https://commonwealth.im/overlay',
  GITHUB: 'https://github.com/overlay-market',
  DOCUMENTATION: 'https://docs.overlay.market/',
  COMMUNITY_DOCS:
    'https://flash-asp-362.notion.site/Overlay-Protocol-29da60fd11e9436ea69e2a5e0db28a74',
  WHITEPAPER_V1:
    'https://redrct.overlay.market/whitepaper',
  DISCORD: 'https://redrct.overlay.market/discord',
  TWITTER: 'https://twitter.com/OverlayProtocol',
  MIRROR: 'https://mirror.xyz/0x7999C7f0b9f2259434b7aD130bBe36723a49E14e',
  PRIVACY_POLICY: '',
  TERMS_OF_SERVICE: 'https://overlay.market/#/tos',
  LAUNCH_APP: 'https://app.overlay.market',
  CLAIM: 'https://app.overlay.market/claim',
}

export interface LinkAsset {
  label: string
  href: string
}

export const LINKS = {
  protocol: [
    {label: 'Github', href: GENERAL_LINKS.GITHUB},
    {label: 'Documentation', href: GENERAL_LINKS.DOCUMENTATION},
    {label: 'Governance', href: GENERAL_LINKS.GOVERNANCE},
    {label: 'White Paper V1', href: GENERAL_LINKS.WHITEPAPER_V1},
  ] as Array<LinkAsset>,
  connect: [
    {label: 'Discord', href: GENERAL_LINKS.DISCORD},
    {label: 'Twitter', href: GENERAL_LINKS.TWITTER},
    {label: 'Mirror', href: GENERAL_LINKS.MIRROR},
  ] as Array<LinkAsset>,
  legal: [{label: 'Terms of Service', href: GENERAL_LINKS.TERMS_OF_SERVICE}] as Array<LinkAsset>,
}
