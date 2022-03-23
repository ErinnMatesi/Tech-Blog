// CHANGE THIS TO MATCH WHATEVER I AM SEEDING

const sequelize = require('../config/connection');
// const seedGallery = require('./galleryData');
// const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({  });

//   await seedGallery();

//   await seedPaintings();

  process.exit(0);
};

seedAll();