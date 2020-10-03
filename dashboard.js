const express = require('express');
const router = express.Router();

const appData = () => {
  return {
    id: 'metisium-dashboard',
    requestForMainPage: true,
    name: "Dashboard",
    version: 0.1,
    author: 'Robin Schleser (privat@schleser.org)',
    hasWebAssets: true,
    subURL: '/dashboard',
    pages: [
      {name: '', href: '/'},
      {name: 'Apps', href: '/apps'}
    ],
  }
}

const onEnable = (logger) => {
  logger.info('Dashboard Add-on has been enabled');
}

const onDisable = () => {
  logger.info('Dashboard Add-on has been disabled');
}

router.get('/', (req, res) => {
  res.send('Dashboard Home')
})


module.exports = {
  appData,
  onEnable,
  onDisable,
  router
}


