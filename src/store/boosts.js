export const boosts = [
  {
    key: 'hoursInTR',
    label: 'Hours in TR',
    type: 'number',
    expand: '1',
    tooltip: '0',
  },

  {
    key: 'loopMods',
    label: 'Loop Mods',
    type: 'number',
    expand: '0',
    tooltip: '0',
  },

  {
    key: 'tr5Special',
    label: 'Diamond Special',
    type: 'number',
    expand: '0',
    tooltip: 'max Value: 10',
    multiplier: (value) => 1 + 0.01 * value,
    max: 10
  },

  {
    key: 'm0',
    label: 'm0',
    type: 'number',
    expand: '0',
    tooltip: '0',
    multiplier: (value) => Math.pow(1.1, value),
  },

  {
    key: 'r9',
    label: 'R9',
    type: 'number',
    expand: '1',
    tooltip: '0',
    multiplier: (value) => Math.pow(1.08, value),
    max: 100
  },

  {
    key: 'inscryption52',
    label: 'Inscryption #52',
    type: 'number',
    expand: '1',
    tooltip: 'max Value: 8',
    multiplier: (value) => Math.pow(1.03, value),
    max: 8
  },

  {
    key: 'inscryption78',
    label: 'Inscryption #78',
    type: 'number',
    expand: '1',
    tooltip: 'max Value: 8',
    multiplier: (value) => Math.pow(1.08, value),
    max: 8
  },

  {
    key: 'campaigns',
    label: 'Campaigns',
    type: 'number',
    expand: '0',
    tooltip: 'Boon of Ouroboros required, else 0',
    multiplier: (value) => Math.pow(1.006, value),
  },

  {
    key: 'gadget',
    label: 'Gadget',
    type: 'number',
    expand: '1',
    tooltip: '0',
    multiplier: (value) => {
      // Additionsbonus
      const baseMultiplier = Math.pow(1.005, value) - 1;
      // Alle 10 Levels mit 1.05 multiplizieren
      const levelMultiplier = Math.pow(1.05, Math.floor(value / 10));
      // Rückgabe des Gesamtmultiplikators
      return 1 + baseMultiplier * levelMultiplier;
    }  
  },

  {
    key: 'iap',
    label: 'IAP Traversal Pack',
    type: 'boolean',
    expand: '0',
    tooltip: '0',
    multiplier: 1.25,
  },

  {
    key: 'hera',
    label: 'Hera Card',
    type: 'boolean',
    expand: '0',
    tooltip: '0',
    multiplier: 1.05,
  },

  {
    key: 'jaxis',
    label: 'Jaxis Card',
    type: 'boolean',
    expand: '0',
    tooltip: '0',
    multiplier: 1.05,
  },

  {
    key: 'db2',
    label: 'Void Badge #1',
    type: 'boolean',
    expand: '0',
    tooltip: '0',
    multiplier: 1.25,
  },

  {
    key: 'db4',
    label: 'Void Badge #2',
    type: 'boolean',
    expand: '0',
    tooltip: '0',
    multiplier: 1.25,
  },

  {
    key: 'db6',
    label: 'Void Badge #3',
    type: 'boolean',
    expand: '0',
    tooltip: '0',
    multiplier: 1.25,
  },

  {
    key: 'db8',
    label: 'Void Badge #4',
    type: 'boolean',
    expand: '0',
    tooltip: '0',
    multiplier: 1.5,
  },

  {
    key: 'db10',
    label: 'Void Badge #5',
    type: 'boolean',
    expand: '0',
    tooltip: '0',
    multiplier: 2,
  },
];
