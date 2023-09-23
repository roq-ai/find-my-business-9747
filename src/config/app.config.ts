interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Company Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Company Owner', 'Company Employee', 'Meeting Approver', 'System Administrator'],
  tenantName: 'Organization',
  applicationName: 'Find my business (FMB)',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View personal information',
    'View organization details',
    'Update personal information',
    "View organization's updated information",
  ],
  ownerAbilities: ['Manage users', 'Manage organizations'],
  getQuoteUrl: 'https://app.roq.ai/proposal/11c8ae29-d9d1-4e1d-b708-b7defc8c2673',
};
