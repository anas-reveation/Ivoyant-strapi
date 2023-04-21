'use strict';

/**
 * we-are-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::we-are-data.we-are-data');
