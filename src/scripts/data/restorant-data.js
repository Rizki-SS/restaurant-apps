import API from '../globals/api';

class RestorantData {
  static async getAllRestorant() {
    const response = await fetch(API.list);
    const resJson = await response.json();
    return resJson.restaurants;
  }

  static async getRestorantById(id) {
    const response = await fetch(API.detail(id));
    const resJson = await response.json();
    return resJson.restaurant;
  }
}

export default RestorantData;
