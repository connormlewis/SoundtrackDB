import * as $ from "jquery";

const API_URL = 'http://localhost'

export default class ApiService {

  static getArtists() {
    return $.get(API_URL + '/artist')
  }

  static getAlbums() {
    return $.get(API_URL + '/album')
  }

  static getAllMedia() {
    return $.get(API_URL + '/tv-movie')
  }

  static getArtist(id) {
    return $.get(API_URL + '/artist/' + id)
  }

  static getAlbum(id) {
    return $.get(API_URL + '/album/' + id)
  }

  static getMedia(id) {
    return $.get(API_URL + '/tv-movie/' + id)
  }
}
