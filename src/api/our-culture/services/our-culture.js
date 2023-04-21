'use strict';

/**
 * our-culture service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-culture.our-culture');
