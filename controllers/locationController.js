import { CITY_LIST } from '../service/config.js';

import getLocationList from '../service/getLocationList.js';
import getLocation from '../service/getLocation.js';

const locationController = {
  getAll: async (request, response) => {
    try {
      const { language } = request.query;

      const result = await getLocationList(CITY_LIST, language);
      
      response.status(200).json({
        data: result,
      });
    } catch (error) {
      response.status(500).json({
        data: null,
        error: error?.message || 'Server error!',
      });
    }
  },
  getOne: async (request, response) => {
    try {
      const { id } = request.params;
      const { language } = request.query;

      const result = await getLocation(id, language);

      response.status(200).json({
        data: result,
      });
    } catch (error) {
      response.status(500).json({
        data: null,
        error: error?.message || 'Server error!',
      });
    }
  },
};

export default locationController;
