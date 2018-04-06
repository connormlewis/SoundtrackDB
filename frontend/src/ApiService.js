import * as $ from "jquery";

var API_URL = 'http://localhost'
if (process.env.NODE_ENV === "production") {
  API_URL = 'http://api.soundtrackdb.me'
}

export default class ApiService {

  static getArtists(offset = 0, limit = 12, searchTerm = null, filters = {}) {
    let params = {
      offset: offset,
      limit: limit
    };
    if (searchTerm != null) {
      params.search = searchTerm;
    }
    if (filters != null) {
      for (let filter in filters) {
        params[filter] = filters[filter]; 
      }
    }
    return $.ajax({
      url: API_URL + '/artist',
      type: "get",
      data: params
    })
  }

  static getAlbums(offset = 0, limit = 12, searchTerm = null, filters = {}) {
    let params = {
      offset: offset,
      limit: limit
    };
    if (searchTerm != null) {
      params.search = searchTerm;
    }
    if (filters != null) {
      for (let filter in filters) {
        params[filter] = filters[filter]; 
      }
    }
    return $.ajax({
      url: API_URL + '/album',
      type: "get",
      data: params
    })
  }

  static getAllMedia(offset = 0, limit = 12, searchTerm = null, filters = {}) {
    let params = {
      offset: offset,
      limit: limit
    };
    if (searchTerm != null) {
      params.search = searchTerm;
    }
    if (filters != null) {
      for (let filter in filters) {
        params[filter] = filters[filter]; 
      }
    }
    return $.ajax({
      url: API_URL + '/media',
      type: "get",
      data: params
    })
  }

  static getArtist(id) {
    return $.get(API_URL + '/artist/' + id)
  }

  static getAlbum(id) {
    return $.get(API_URL + '/album/' + id)
  }

  static getMedia(id) {
    return $.get(API_URL + '/media/' + id)
  }

  static getAbout() {
    return $.get(API_URL + '/about')
  }

  static getSearchResults(query, offset = 0, limit = 10) {
    return $.ajax({
      url: API_URL + '/search/' + query,
      type: 'get',
      data: {
        offset: offset,
        limit: limit
      }
    })
  }
}
