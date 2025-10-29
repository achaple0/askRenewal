// data.js

const responses = {
  password: {
    text: "Select which password you need to reset:",
    hasSubMenu: true,
    terminal: false
  },

  email: {
    text: `For email issues, contact Apex: 
          <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
          <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    hasSubMenu: false,
    terminal: true
  },

  software: {
    text: "Please select the software from the dropdown:",
    hasSubMenu: true,
    terminal: false
  },

  hardware: {
    text: `Contact Internal IT or submit a ticket: <br> (Internal: Angel/Derrick), 
        <a href="mailto:achaple@rbacharlotte.com" class="text-blue-600 underline">Angel Chaple</a> <br>
        Submit tickets to Apex: 
          <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
          <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    hasSubMenu: false,
    terminal: true
  },

  network: {
    text: `For network issues, contact Apex: 
          <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
          <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    hasSubMenu: false,
    terminal: true
  },

  other: {
    text: `For all other issues, contact Apex: 
          <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
          <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    hasSubMenu: false,
    terminal: true
  }
};

const softwareSupport = {
  "ms-365-apps": {
    text: `For MS365 Issues, contact Apex: 
        <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
        <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    terminal: true
  },

  "enabled": {
    text: `For Enabled + issues, contact fetch: 
        <a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> / 
        <a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    terminal: true
  },

  "rforce/rSuite": {
    text: `For rForce/rSuite, contact fetch: 
        <a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> / 
        <a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    terminal: true
  },

  "ensemble": {
    text: `For Ensemble, contact fetch: 
        <a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> / 
        <a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    terminal: true
  },

  "five9": {
    text: `For Five9, contact <a href="mailto:achaple@rbacharlotte.com" class="text-blue-600 underline">Angel Chaple</a>.`,
    terminal: true
  },

  "other": {
    text: `For any other issues, contact Apex: 
        <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
        <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    terminal: true
  }
};

const passwordSupport = {
  "windows-login": {
    text: `For Windows Login Issues, contact Apex: 
          <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
          <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    terminal: true
  },

  "ms365-login": {
    text: `For MS365 Login Issues, contact Apex: 
          <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
          <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    terminal: true
  },

  "five9-login": {
    text: 'For Five9 passwords, contact <a href="mailto:achaple@rbacharlotte.com" class="text-blue-600 underline">Angel Chaple</a>.',
    terminal: true
  },

  "enabled-password": {
    text: `For Enabled+ password issues, contact fetch: 
          <a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> or visit 
          <a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    terminal: true
  },

  "ensemble-password": {
    text: `For Ensemble password issues, contact fetch: 
          <a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> or visit 
          <a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    terminal: true
  },

  "culture-suite-password": {
    text: `For CultureSuite Login Issues, contact Apex: 
          <a href="tel:18887228610" class="text-blue-600 underline">704-895-0010</a> option 7 / 
          <a href="https://rba.myportallogin.com/" target="_blank" class="text-blue-600 underline">ApexManage360 Portal</a>`,
    terminal: true
  },

  "rforce-password": {
    text: `For rForce/rSuite password issues, contact fetch: 
          <a href="tel:18887228610" class="text-blue-600 underline">1-888-722-8610</a> or visit 
          <a href="https://andersenprod.service-now.com/csm" target="_blank" class="text-blue-600 underline">ServiceNow Portal</a>`,
    terminal: true
  }
};