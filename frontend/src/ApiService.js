import * as $ from "jquery";

const API_URL = 'http://localhost'

export default class ApiService {

  static getArtists(offset=0, limit=12) {
    return $.ajax({
      url: API_URL + '/artist',
      type: "get",
      data: { 
        offset: offset,
        limit: limit
      }
    })  }

  static getAlbums(offset=0, limit=12) {
    return $.ajax({
      url: API_URL + '/album',
      type: "get",
      data: { 
        offset: offset,
        limit: limit
      }
    })
  }

  static getAllMedia(offset=0, limit=12) {
    return $.ajax({
      url: API_URL + '/tv-movie',
      type: "get",
      data: { 
        offset: offset,
        limit: limit
      }
    })  }

  static getArtist(id) {
    return $.get(API_URL + '/artist/' + id)
  }

  static getAlbum(id) {
    return $.get(API_URL + '/album/' + id)
  }

  static getMedia(id) {
    return $.get(API_URL + '/tv-movie/' + id)
  }

  static getAbout() {
    return $.get(API_URL + '/about')
  }
}
