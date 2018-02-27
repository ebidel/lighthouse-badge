/**
 * Copyright 2018 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const express = require('express');
const fs = require('fs');
const {URL} = require('url');
const request = require('request');
const analytics = require('universal-analytics');

const lhLogoDataURL = `data:image/png;base64,${fs.readFileSync('./public/lhicon-small.png').toString('base64')}`;

function generateBadgeURL(score, compact = false) {
  const RATINGS = {
    PASS: {label: 'pass', minScore: 75},
    AVERAGE: {label: 'average', minScore: 45},
    FAIL: {label: 'fail'},
  };

  // Clamp input [0, 100] and round.
  score = Math.round(Math.min(Math.max(0, score), 100));

  const url = new URL(`https://img.shields.io/badge/-${score}-grey.svg`);
  url.searchParams.set('label', !compact ? 'Lighthouse Score' : '');
  url.searchParams.set('colorA', '242ffd');
  url.searchParams.set('style', 'flat-square');
  url.searchParams.set('logo', lhLogoDataURL);
  url.searchParams.set('maxAge', 24*60*60); // cache for 24hrs

  let colorB = 'df332f';
  if (score >= RATINGS.PASS.minScore) {
    colorB = '2b882f';
  } else if (score >= RATINGS.AVERAGE.minScore) {
    colorB = 'ef6c00';
  }

  url.searchParams.set('colorB', colorB);

  return url.href;
  // const alt = `Lighthouse score: ${score}/100`;
  // return `<img src="${url.href}" title="${alt} alt="${alt}">`;
}

const app = express();

app.use(function forceSSL(req, res, next) {
  if (req.hostname !== 'localhost' && req.get('X-Forwarded-Proto') === 'http') {
    res.redirect(`https://${req.hostname}${req.url}`);
  }
  next();
});

app.use(express.static('public', {extensions: ['html', 'htm']}));

app.get('/', async (req, res) => {
  const currentUrl = new URL(`${req.protocol}://${req.get('host')}${req.url}`);
  const compact = currentUrl.searchParams.has('compact');
  const score = Number(currentUrl.searchParams.get('score'));

  try {
    const visitor = analytics('UA-85519014-5', {https: true});
    visitor.pageview('/').send();
  } catch (err) {
    // noop
  }

  request.get(generateBadgeURL(score, compact), (err, res2, body) => {
    if (err) {
      res.status(400).send(err);
    }
    res.set('Content-Type', 'image/svg+xml');
    res.status(200).send(body);
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});