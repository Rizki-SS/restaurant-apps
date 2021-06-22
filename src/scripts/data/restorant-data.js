import API from '../globals/api';

class RestorantData {
  static async getAllRestorant() {
    const response = await fetch(API.list);
    const resJson = await response.json();
    return resJson.restaurants;
  }
}

export default RestorantData;
