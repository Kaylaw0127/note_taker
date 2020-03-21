const express = require('express')
const path = require('path');
const fs = require('fs');
const notes = require('../../db/db.json');

const app = express()
const PORT = process.env.PORT || 8080;

