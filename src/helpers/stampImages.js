// ------
// Stamps
// ------

import stampCommunication from '../img/stamp-communication.png';
import stampDIY from '../img/stamp-diy.png';
import stampEvent from '../img/stamp-event.png';
import stampFish from '../img/stamp-fish.png';
import stampHHA from '../img/stamp-hha.png';
import stampInsect from '../img/stamp-insect.png';
import stampLandMaking from '../img/stamp-landmaking.png';
import stampMoney from '../img/stamp-money.png';
import stampMyDesign from '../img/stamp-mydesign.png';
import stampNegative from '../img/stamp-negative.png';
import stampPlant from '../img/stamp-plant.png';
import stampSmartPhone from '../img/stamp-smartphone.png';

// -------------
// Custom stamps
// -------------

import stampFishingTourney from '../img/stamp-fishing-tourney.png';
import stampShrubberyHubbery from '../img/stamp-shrubbery-hubbery.png';
import stampFruitRootsCherry from '../img/stamp-fruit-roots-cherry.png';
import stampFruitRootsOrange from '../img/stamp-fruit-roots-orange.png';
import stampFruitRootsPear from '../img/stamp-fruit-roots-pear.png';
import stampFruitRootsPeach from '../img/stamp-fruit-roots-peach.png';
import stampFruitRootsCoconut from '../img/stamp-fruit-roots-coconut.png';
import stampIslandDesignerGreen from '../img/stamp-island-designer-green.png';
import stampIslandDesignerBlue from '../img/stamp-island-designer-blue.png';
import stampIslandDesignerBrown from '../img/stamp-island-designer-brown.png';
import stampIslandNameIconsFlag from '../img/stamp-island-name-icons-flag.png';
import stampIslandNameIconsMelody from '../img/stamp-island-name-icons-melody.png';
import stampGoldenMilestoneAxe from '../img/stamp-golden-milestone-axe.png';
import stampGoldenMilestoneCan from '../img/stamp-golden-milestone-can.png';
import stampGoldenMilestoneFishing from '../img/stamp-golden-milestone-fishing.png';
import stampGoldenMilestoneNet from '../img/stamp-golden-milestone-net.png';
import stampGoldenMilestoneShot from '../img/stamp-golden-milestone-shot.png';
import stampGoldenMilestoneShovel from '../img/stamp-golden-milestone-shovel.png';

// -----------------------------------------------------
// Map the images to labels we can reference in our code
// -----------------------------------------------------

const stampImages = {
  communication: stampCommunication,
  diy: stampDIY,
  event: stampEvent,
  fish: stampFish,
  hha: stampHHA,
  insect: stampInsect,
  landmaking: stampLandMaking,
  money: stampMoney,
  mydesign: stampMyDesign,
  negative: stampNegative,
  plant: stampPlant,
  smartphone: stampSmartPhone,
};

// -----------------
// Custom stamps map
// -----------------

const customStampsMap = {
  // Fruit roots
  // (cherry, orange, pear, peach, apple, and coconut)
  7: {
    stamps: {
      0: stampFruitRootsCherry,
      1: stampFruitRootsOrange,
      2: stampFruitRootsPear,
      3: stampFruitRootsPeach,
      4: stampPlant,
      5: stampFruitRootsCoconut,
    },
    dateColor: '#fbfcea',
    curve: 'plant',
  },
  // Shrubbery hubbery
  92: {
    stamps: {
      0: stampShrubberyHubbery,
      1: stampShrubberyHubbery,
      2: stampShrubberyHubbery,
    },
    dateColor: '#fbfcea',
    curve: 'plant',
  },
  // Fishing tourney
  41: {
    stamps: {
      0: stampFishingTourney,
      1: stampFishingTourney,
      2: stampFishingTourney,
      3: stampFishingTourney,
    },
    dateColor: '#fd918e',
    curve: 'fish',
  },
  // (island name) icons
  86: {
    stamps: {
      0: stampIslandNameIconsFlag,
      1: stampIslandNameIconsMelody,
    },
    dateColor: '#fbfcea',
    curve: 'event',
  },
  // Golden milestone
  // (shovel, net, fishing rod, watering can, axe, and slingshot)
  39: {
    stamps: {
      0: stampGoldenMilestoneShovel,
      1: stampGoldenMilestoneNet,
      2: stampGoldenMilestoneCan,
      3: stampGoldenMilestoneShot,
      4: stampGoldenMilestoneAxe,
      5: stampGoldenMilestoneFishing,
    },
    dateColor: '#fbfcea',
    curve: 'hha',
  },
  // Bug off
  42: {
    stamps: {
      0: stampInsect,
      1: stampInsect,
      2: stampInsect,
      3: stampInsect,
    },
    dateColor: '#fbfcea',
    curve: 'insect',
  },
  // Island designer
  88: {
    stamps: {
      0: stampIslandDesignerGreen,
      1: stampIslandDesignerBlue,
      2: stampIslandDesignerBrown,
    },
    dateColor: '#fbfcea',
    curve: 'event',
  },
};

export {
  stampImages,
  customStampsMap,
};
