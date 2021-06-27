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

  static async postReview(data={}) {
    const response = await fetch(API.review, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345',
      },
      body: JSON.stringify(data),
    });
    // console.log(response.json());
    return response.json();
  }
}

export default RestorantData;
