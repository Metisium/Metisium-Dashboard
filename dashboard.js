const express = require('express');
const router = express.Router();
const jwt = require('../../../middleware/jwt');

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
      { name: 'Overview', href: '/' },
      { name: 'Apps', href: '/apps' },
      { name: 'Quick Access', href: '/quickaccess' },
      { name: 'Manage', href: '/settings' }
    ],
  }
}

const onEnable = (logger) => {
  logger.info('Dashboard Add-on has been enabled');
}

const onDisable = () => {
  logger.info('Dashboard Add-on has been disabled');
}

router.get('/', jwt.auth, (req, res) => {
  res.render(__dirname + '/ejs/index', { pages: appData().pages, selected: 0, user: req.user });
});

router.get('/apps', jwt.auth, (req, res) => {
  res.render(__dirname + '/ejs/index', { pages: appData().pages, selected: 1, user: req.user });
});

router.get('/quickaccess', jwt.auth, (req, res) => {
  res.render(__dirname + '/ejs/index', { pages: appData().pages, selected: 2, user: req.user });
});

router.get('/settings', jwt.auth, (req, res) => {
  res.render(__dirname + '/ejs/index', { pages: appData().pages, selected: 3, user: req.user });
});

router.post('/quickaccess/:pos', jwt.auth, (req, res) => {
  const pos = req.params.pos;
  res.redirect('/quickaccess');
});

router.get('/login', (req, res) => {
  res.render(__dirname + '/ejs/login');
});



module.exports = {
  appData,
  onEnable,
  onDisable,
  router
}


